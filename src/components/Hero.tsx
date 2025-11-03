import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [seatsRemaining] = useState(6); // Dynamic counter - you can update this

  useEffect(() => {
    const targetDate = new Date("2025-11-10T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPayment = () => {
    document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-background/10 to-primary/5"></div>
      
      {/* Enhanced animated glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/40 mb-6 animate-slide-in backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-bold text-primary">ONLY {seatsRemaining} SEATS LEFT • {timeLeft.days} DAYS REMAINING</span>
        </div>

        {/* Tighter, benefit-first headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in" style={{ animationDelay: "0.1s" }}>
          Launch an AI Startup in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-primary">30 Days</span>
          <br />
          <span className="text-3xl md:text-5xl text-foreground/90">Live, Founder-Led</span>
        </h1>

        {/* Strong sub-headline */}
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-4 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: "0.15s" }}>
          Join the First 100 Founders • Starts 10th Nov, 2025
        </p>

        {/* Clear outcome */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: "0.2s" }}>
          From Problem Discovery → MVP → Investor-Ready in 30 Days
        </p>

        {/* Primary CTA - Above the fold, high contrast */}
        <div className="mb-8 animate-slide-in" style={{ animationDelay: "0.25s" }}>
          <Button
            size="lg"
            onClick={scrollToPayment}
            className="group bg-gradient-primary hover:shadow-glow-blue-strong text-primary-foreground px-10 py-7 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-glow-pulse"
          >
            Reserve Your Spot – $5.99 Early Bird
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{seatsRemaining} of 100 founder seats remaining</span>
          </div>
        </div>

        {/* Value indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">$99</div>
            <div className="text-xs text-muted-foreground line-through mb-1">Regular Price</div>
            <div className="text-sm font-semibold">Save $93 Today</div>
          </div>
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">30 Days</div>
            <div className="text-sm font-semibold">Idea to Launch</div>
          </div>
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">$500</div>
            <div className="text-sm font-semibold">Cash Prize Winner</div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.4s" }}>
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
