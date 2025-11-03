import { Linkedin } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-space opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-cosmic opacity-5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-cosmic animate-shimmer bg-[length:200%_auto]">
                AskLumenAI
              </span>
            </div>
            <p className="text-muted-foreground">© 2025 AskLumenAI. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">Powered by: Ask Lumen AI</p>
            <a
              href="https://www.linkedin.com/company/109045208"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span>Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
