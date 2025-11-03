import { BookOpen, Rocket, TrendingUp } from "lucide-react";

const phases = [
  {
    icon: BookOpen,
    phase: "Week 1",
    title: "Ideation & Problem Discovery",
    duration: "Days 1-7",
    topics: [
      "Identifying real AI opportunities in the market",
      "Problem validation frameworks and user research",
      "Competitive analysis and market sizing",
      "Defining your unique value proposition",
    ],
  },
  {
    icon: Rocket,
    phase: "Weeks 2-3",
    title: "AI MVP Building",
    duration: "Days 8-21",
    topics: [
      "Choosing the right AI tech stack for your startup",
      "Building and deploying your minimum viable product",
      "Product iteration based on user feedback",
      "Setting up analytics and tracking metrics",
    ],
  },
  {
    icon: TrendingUp,
    phase: "Week 4",
    title: "Fundraising & Growth",
    duration: "Days 22-30",
    topics: [
      "Creating compelling investor pitch decks",
      "Fundraising strategies and investor outreach",
      "Growth hacking techniques for AI startups",
      "Building a sustainable business model",
    ],
  },
];

export const Curriculum = () => {
  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-cosmic opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Course <span className="text-transparent bg-clip-text bg-gradient-cosmic">Curriculum</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          A 30-day intensive journey from problem identification to funded startup
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cosmic group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-nebula opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative w-16 h-16 rounded-xl mb-6">
                    <div className="absolute inset-0 rounded-xl bg-gradient-cosmic animate-orbit-slow"></div>
                    <div className="absolute inset-0.5 rounded-xl bg-card flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="text-sm text-primary font-semibold mb-2">{phase.phase}</div>
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <div className="text-sm text-muted-foreground mb-6">{phase.duration}</div>

                  <ul className="space-y-3">
                    {phase.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 animate-star-twinkle"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Plus: Premium Mentorship Add-on
          </h3>
          <p className="text-muted-foreground text-center text-lg">
            Upgrade to premium for <span className="text-primary font-semibold">$99</span> and get exclusive 1-on-1 mentorship 
            sessions with Venkatesh Mishra. Personalized guidance tailored to your startup's unique challenges and goals.
          </p>
        </div>
      </div>
    </section>
  );
};
