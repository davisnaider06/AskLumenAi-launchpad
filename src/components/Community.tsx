import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export const Community = () => {
  const openExternal = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) return;
    
    try {
      window.top?.open?.(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-cosmic opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-cosmic">Founder Community</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Network with 1000+ AI founders, get ongoing support, and grow together
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            <span className="text-primary font-semibold">Lifetime access</span> to community • Monthly expert sessions • Job opportunities • Co-founder matching
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cosmic group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-nebula opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="relative w-16 h-16 rounded-xl mx-auto mb-6">
                  <div className="absolute inset-0 rounded-xl bg-gradient-cosmic animate-orbit-slow"></div>
                  <div className="absolute inset-0.5 rounded-xl bg-card flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
                <p className="text-muted-foreground mb-6">
                  24/7 support, weekly expert AMAs, co-founder matching, job board, and exclusive channels for alumni networking
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  onClick={() => openExternal("https://discord.gg/njuBkcT6")}
                  aria-label="Join Discord community (opens in new tab)"
                >
                  Join Discord
                </Button>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cosmic group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-nebula opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="relative w-16 h-16 rounded-xl mx-auto mb-6">
                  <div className="absolute inset-0 rounded-xl bg-gradient-cosmic animate-orbit-slow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-0.5 rounded-xl bg-card flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">WhatsApp Group</h3>
                <p className="text-muted-foreground mb-6">
                  Daily AI news, quick wins, instant peer support, and accountability partners for your startup journey
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white"
                  onClick={() => openExternal("https://chat.whatsapp.com/LiEmCrx1Jly0L1g9LzUiQM?mode=wwt")}
                  aria-label="Join WhatsApp group (opens in new tab)"
                >
                  Join WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
