import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      colors: {
        bg: 'hsl(var(--bg))',
        'bg-2': 'hsl(var(--bg-2))',
        surface: 'hsl(var(--surface))',
        card: 'hsl(var(--card))',
        line: 'hsl(var(--line))',
        txt: 'hsl(var(--txt))',
        'txt-2': 'hsl(var(--txt-2))',
        'txt-3': 'hsl(var(--txt-3))',
        accent: 'hsl(var(--accent))',
        'accent-2': 'hsl(var(--accent-2))',
        'accent-ink': 'hsl(var(--accent-ink))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        'input-bg': 'hsl(var(--input-bg))',
        'input-border': 'hsl(var(--input-border))',
        
        // Cores especiais do raio elétrico
        silver: 'hsl(var(--silver))',
        chrome: 'hsl(var(--chrome))',
        'electric-blue': 'hsl(var(--electric-blue))',
        'electric-glow': 'hsl(var(--electric-glow))',
        
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-glow': 'var(--gradient-glow)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-lightning': 'var(--gradient-lightning)',
        'gradient-chrome': 'var(--gradient-chrome)',
      },
      borderRadius: {
        'custom': 'var(--radius)',
        'custom-sm': 'var(--radius-sm)', 
        'custom-lg': 'var(--radius-lg)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        'custom': 'var(--gap)',
        'xs': '0.5rem',      // 8px
        'sm': '0.75rem',     // 12px
        'md': '1rem',        // 16px
        'lg': '1.5rem',      // 24px
        'xl': '2rem',        // 32px
        '2xl': '3rem',       // 48px
        '3xl': '4rem',       // 64px
        '4xl': '5rem',       // 80px
        'section': '5rem',   // 80px - section spacing
        'gutter': '1.25rem', // 20px - consistent lateral padding
      },
      maxWidth: {
        'container': 'var(--container)',
      },
      boxShadow: {
        'custom': 'var(--shadow)',
        'custom-lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
        'glass': 'var(--glass-shadow)',
      },
      backdropBlur: {
        'custom': 'var(--blur)',
        'heavy': 'var(--blur-heavy)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'electric-pulse': 'electric-pulse 3s ease-in-out infinite',
        'lightning-flash': 'lightning-flash 2s infinite',
        'electric-flow': 'electric-flow 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'scale-bounce': 'scale-bounce 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'premium-bounce': 'premium-bounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'glass-fade': 'glass-fade 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'energy-pulse': 'energy-pulse 3s ease-in-out infinite',
        'apple-fade-in': 'appleFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'apple-slide-up': 'appleSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'apple-bounce': 'appleBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'apple-spring': 'appleSpring 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'haptic-feedback': 'hapticFeedback 0.15s ease-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'wiggle': 'wiggle 0.3s ease-in-out infinite',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'premium-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'glass-fade': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(10px) scale(0.98)',
            backdropFilter: 'blur(0px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)',
            backdropFilter: 'blur(20px)'
          },
        },
        'energy-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)'
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'appleFadeIn': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        'appleSlideUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'appleBounce': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
          '70%': {
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'appleSpring': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '60%': {
            transform: 'scale(1.02)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'hapticFeedback': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(0.98)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
      },
      transitionTimingFunction: {
        // YouCan-inspired premium easing curves
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',        // Default smooth
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bounce back
        'micro': 'cubic-bezier(0.4, 0, 0.2, 1)',         // Quick micro-interactions
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Spring elastic
        'snappy': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',   // Quick & responsive
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',   // Elastic overshoot
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',         // Apple signature ease
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',      // Premium slow-out
        'enter': 'cubic-bezier(0.4, 0, 0.2, 1)',         // Enter animation
        'exit': 'cubic-bezier(0.4, 0, 1, 1)',            // Exit animation
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'smooth': '300ms',
        'slow': '500ms',
        'slowest': '700ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
