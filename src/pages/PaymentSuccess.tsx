import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");
    const customerEmail = params.get("customer_email");
    const customerName = params.get("customer_name");
    const planName = params.get("plan_name");
    const amount = params.get("amount");
    
    setSessionId(id);

    // Send confirmation emails
    if (id && customerEmail && customerName && planName && amount) {
      sendConfirmationEmails(id, customerEmail, customerName, planName, amount);
    } else {
      setSending(false);
    }
  }, []);

  const sendConfirmationEmails = async (
    sessionId: string,
    customerEmail: string,
    customerName: string,
    planName: string,
    amount: string
  ) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-payment-confirmation', {
        body: {
          sessionId,
          customerEmail,
          customerName,
          planName,
          amount,
        },
      });

      if (error) throw error;

      setEmailSent(true);
      console.log("Confirmation emails sent successfully", data);
    } catch (error) {
      console.error("Error sending confirmation emails:", error);
      toast({
        title: "Note",
        description: "Payment successful! Confirmation email will be sent shortly.",
        variant: "default",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            {sending ? (
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            ) : (
              <Check className="w-12 h-12 text-primary" />
            )}
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          Payment <span className="text-transparent bg-clip-text bg-gradient-primary">Successful!</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          {sending 
            ? "Processing your enrollment and sending confirmation..." 
            : "Welcome to the AI Startup Launchpad! Check your email for your confirmation and access details."
          }
        </p>

        {emailSent && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-primary font-medium">
              ✓ Confirmation email sent successfully!
            </p>
          </div>
        )}
        
        {sessionId && !sending && (
          <p className="text-sm text-muted-foreground mb-8">
            Session ID: {sessionId}
          </p>
        )}
        
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">Check your email for access to the community</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">You'll receive pre-course materials within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">First live session starts November 1st, 2025</span>
            </li>
          </ul>
        </div>
        
        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="bg-gradient-primary hover:shadow-glow-blue text-primary-foreground"
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
