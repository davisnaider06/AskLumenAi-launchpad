import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const features = [
    "Live + Recorded sessions with real startup founders",
    "Problem validation & market research frameworks",
    "AI MVP building from scratch to launch",
    "Fundraising strategies and investor connections",
    "Lifetime access to all course materials",
    "Certificate of completion",
  ];

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-nebula opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-cosmic opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About the <span className="text-transparent bg-clip-text bg-gradient-cosmic animate-shimmer bg-[length:200%_auto]">Program</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Transform your AI idea into a funded startup with our comprehensive 3-month cohort-based program
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-cosmic group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:animate-cosmic-pulse" />
                </div>
                <p className="text-foreground text-lg relative">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AI Startup Launchpad is designed for aspiring founders who want to build and launch their AI startups 
              with expert guidance. Through live sessions, hands-on projects, and personalized mentorship, you'll gain 
              the skills and network needed to succeed in the AI startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
