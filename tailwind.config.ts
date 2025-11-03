import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          blue: "hsl(var(--neon-blue))",
          cyan: "hsl(var(--neon-cyan))",
        },
        cosmic: {
          purple: "hsl(var(--cosmic-purple))",
          magenta: "hsl(var(--cosmic-magenta))",
          violet: "hsl(var(--cosmic-violet))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-cosmic': 'var(--gradient-cosmic)',
        'gradient-nebula': 'var(--gradient-nebula)',
        'gradient-space': 'var(--gradient-space)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-glow': 'var(--gradient-glow)',
      },
      boxShadow: {
        'glow-blue': 'var(--glow-blue)',
        'glow-blue-strong': 'var(--glow-blue-strong)',
        'glow-purple': 'var(--glow-purple)',
        'glow-magenta': 'var(--glow-magenta)',
        'glow-cosmic': 'var(--glow-cosmic)',
        'premium': 'var(--shadow-premium)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(194 100% 50% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(194 100% 50% / 0.6)" },
        },
        "cosmic-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(194 100% 50% / 0.4), 0 0 50px hsl(270 100% 50% / 0.2)" },
          "50%": { boxShadow: "0 0 50px hsl(194 100% 50% / 0.6), 0 0 80px hsl(270 100% 50% / 0.4)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "orbit-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-fast": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "particle-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(-5px, 5px)" },
          "75%": { transform: "translate(5px, 10px)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "cosmic-pulse": "cosmic-pulse 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "orbit-slow": "orbit-slow 20s linear infinite",
        "orbit-fast": "orbit-fast 10s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "particle-drift": "particle-drift 8s ease-in-out infinite",
        "star-twinkle": "star-twinkle 4s ease-in-out infinite",
        "slide-in": "slide-in-bottom 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
