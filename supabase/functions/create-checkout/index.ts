import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Define validation schema
    const requestSchema = z.object({
      priceId: z.string()
        .regex(/^price_[a-zA-Z0-9]+$/, "Invalid price ID format")
        .refine((id) => [
          'price_1SKdzgALEZvEdhyZaBuqc26F',
          'price_1SKdztALEZvEdhyZncS1ebbj',
          'price_1SKe0JALEZvEdhyZRKkmbfyA'
        ].includes(id), { message: 'Price ID not allowed' }),
      customerEmail: z.string()
        .email("Invalid email format")
        .max(255, "Email too long")
        .optional(),
      planName: z.string().optional(),
      amount: z.string().optional(),
    });

    // Parse and validate input
    const body = await req.json();
    const validated = requestSchema.parse(body);
    const { priceId, customerEmail, planName, amount } = validated;

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Create checkout session for one-time payment with UPI support for Indian customers
    const session = await stripe.checkout.sessions.create({
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      payment_method_types: ['card', 'upi'], // UPI available for Indian customers
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}&customer_email={CUSTOMER_EMAIL}&customer_name={CUSTOMER_NAME}&plan_name=${encodeURIComponent(planName || '')}&amount=${encodeURIComponent(amount || '')}`,
      cancel_url: `${req.headers.get("origin")}/#payment`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    
    // Handle validation errors separately
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: "Invalid request data" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }
    
    // Generic error message for other errors
    return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
