import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentConfirmationRequest {
  customerEmail: string;
  customerName: string;
  sessionId: string;
  planName: string;
  amount: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerEmail, customerName, sessionId, planName, amount }: PaymentConfirmationRequest = await req.json();

    console.log("Sending payment confirmation emails for:", { customerEmail, sessionId, planName });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Grow with Lumen <support@askgrowwithlumen.site>",
      to: [customerEmail],
      subject: "Payment Confirmed - Welcome to AI Startup Launchpad! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Payment Successful!</h1>
          </div>
          
          <div style="background-color: white; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 18px; color: #1f2937; margin-bottom: 20px;">Hi ${customerName},</p>
            
            <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
              Welcome to the <strong>AI Startup Launchpad</strong>! Your payment has been successfully processed, and you're officially enrolled in our 30-day intensive program.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #667eea; margin-top: 0;">Enrollment Details</h3>
              <p style="margin: 8px 0; color: #4b5563;"><strong>Plan:</strong> ${planName}</p>
              <p style="margin: 8px 0; color: #4b5563;"><strong>Amount:</strong> ${amount}</p>
              <p style="margin: 8px 0; color: #4b5563;"><strong>Session ID:</strong> ${sessionId}</p>
            </div>
            
            <h3 style="color: #1f2937; margin-top: 30px;">What's Next?</h3>
            <ul style="color: #4b5563; line-height: 1.8; font-size: 15px;">
              <li>You'll receive access to our exclusive community within 24 hours</li>
              <li>Pre-course materials will be sent to your email shortly</li>
              <li>First live session starts on <strong>November 10th, 2025</strong></li>
              <li>Get ready to transform your idea into an investor-ready startup!</li>
            </ul>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 16px;">
                We're excited to have you on board! 🎉
              </p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px; text-align: center;">
              Questions? Reply to this email or contact us at <a href="mailto:support@askgrowwithlumen.site" style="color: #667eea;">support@askgrowwithlumen.site</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Customer email sent:", customerEmailResponse);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Grow with Lumen <support@askgrowwithlumen.site>",
      to: ["founder.asklumen.ai@gmail.com"],
      subject: `New Enrollment: ${customerName} - ${planName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #667eea;">New Cohort Member! 🎉</h2>
          
          <p style="font-size: 16px; color: #1f2937;">
            A new student has enrolled in the AI Startup Launchpad program.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Enrollment Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${customerName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${customerEmail}</p>
            <p style="margin: 8px 0;"><strong>Plan:</strong> ${planName}</p>
            <p style="margin: 8px 0;"><strong>Amount:</strong> ${amount}</p>
            <p style="margin: 8px 0;"><strong>Session ID:</strong> ${sessionId}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="color: #4b5563;">
            Make sure to add them to the community platform and send the pre-course materials.
          </p>
        </div>
      `,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        customerEmailId: customerEmailResponse.data?.id,
        adminEmailId: adminEmailResponse.data?.id
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error in send-payment-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
