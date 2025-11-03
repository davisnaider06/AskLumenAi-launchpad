import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Advisors } from "@/components/Advisors";
import { Rewards } from "@/components/Rewards";
import { Fundraising } from "@/components/Fundraising";
import { Testimonials } from "@/components/Testimonials";
import { Community } from "@/components/Community";
import { Curriculum } from "@/components/Curriculum";
import { Payment } from "@/components/Payment";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SpaceBackground } from "@/components/SpaceBackground";
import { ModeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            AI Startup Launchpad
          </h1>
          <p className="text-muted-foreground mb-8">
            Please sign in to access the program
          </p>
          <Button onClick={() => navigate("/auth")} size="lg">
            Sign In / Sign Up
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-['Inter'] relative">
      <SpaceBackground />
      <div className="relative z-10">
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
          <ModeToggle />
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
        <Hero />
        <ValueProposition />
        <About />
        <Founder />
        <Advisors />
        <Fundraising />
        <Rewards />
        <Testimonials />
        <Curriculum />
        <Community />
        <Payment />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
