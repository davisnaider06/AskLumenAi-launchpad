import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder.jpg";

export const Founder = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-cosmic opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-cosmic">Instructor</span>
          </h2>

          <div className="relative flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cosmic group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-nebula opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-cosmic animate-orbit-slow"></div>
              <div className="absolute inset-1 rounded-2xl overflow-hidden bg-card">
                <img 
                  src={founderImg} 
                  alt="Venkatesh Mishra - Founder of AskLumenAI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left relative z-10">
              <h3 className="text-3xl font-bold mb-2">Venkatesh Mishra</h3>
              <p className="text-primary text-xl mb-4">Founder, AskLumenAI</p>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Venkatesh is an experienced AI entrepreneur and the founder of AskLumenAI. With years of experience 
                in building and scaling AI startups, he has helped hundreds of founders turn their ideas into successful 
                ventures. His expertise spans AI product development, fundraising, and building sustainable startup communities.
              </p>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/foundervenkateshmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
