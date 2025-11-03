import { useState } from "react";
import { Button } from "@/components/ui/button";
import advisor1 from "@/assets/advisor-1.jpg";
import advisor2 from "@/assets/advisor-2.jpg";
import advisor3 from "@/assets/advisor-3.jpg";
import advisor4 from "@/assets/advisor-4.jpg";
import advisor5 from "@/assets/advisor-5.jpg";
import advisor6 from "@/assets/advisor-6.jpg";
import advisor7 from "@/assets/advisor-7.jpg";
import advisor8 from "@/assets/advisor-8.jpg";
import advisor9 from "@/assets/advisor-9.jpg";
import advisor10 from "@/assets/advisor-10.jpg";
import advisorTaiman from "@/assets/advisor-taiman.jpg";

const advisors = [
  { name: "Taiman Aamir", role: "Co-Founder", company: "AskLumenAI", image: advisorTaiman },
  { name: "Dr. Sarah Chen", role: "AI Research Lead", company: "TechVentures AI", image: advisor1 },
  { name: "Michael Rodriguez", role: "Serial Entrepreneur", company: "3x AI Startup Founder", image: advisor2 },
  { name: "Priya Sharma", role: "VP of Product", company: "CloudAI Solutions", image: advisor3 },
  { name: "James Peterson", role: "Investment Partner", company: "NextGen Ventures", image: advisor4 },
  { name: "Aisha Okonkwo", role: "ML Engineer", company: "DeepMind Alumni", image: advisor5 },
  { name: "David Kim", role: "Growth Strategist", company: "ScaleAI Advisor", image: advisor6 },
  { name: "Elena Volkov", role: "AI Ethics Expert", company: "Responsible AI Institute", image: advisor7 },
  { name: "Robert Thompson", role: "CTO", company: "AutomateAI Inc", image: advisor8 },
  { name: "Fatima Al-Rashid", role: "Data Scientist", company: "Google AI", image: advisor9 },
];

export const Advisors = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAdvisors = showAll ? advisors : advisors.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Learn from <span className="text-transparent bg-clip-text bg-gradient-primary">Expert Advisors</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Get mentored by successful founders and AI professionals who have built and scaled AI companies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {displayedAdvisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-gradient-primary p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-1">{advisor.name}</h3>
              <p className="text-sm text-primary mb-1">{advisor.role}</p>
              <p className="text-xs text-muted-foreground">{advisor.company}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-primary hover:shadow-glow-blue text-primary-foreground px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less" : "View More Partners"}
          </Button>
        </div>
      </div>
    </section>
  );
};
