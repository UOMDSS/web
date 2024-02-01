/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "xl-xl": [
          "20rem",
          {
            lineHeight: "14rem",
            fontWeight: "900",
            letterSpacing: "-0.05em",
          },
        ],
        "lg-xl": [
          "15rem",
          {
            lineHeight: "10rem",
            fontWeight: "900",
            letterSpacing: "-0.05em",
          },
        ],
        "md-xl": [
          "10rem",
          {
            lineHeight: "7rem",
            fontWeight: "900",
            letterSpacing: "-0.05em",
          },
        ],
        "sm-xl": [
          "5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "700",
            letterSpacing: "-0.05em",
          },
        ],
      },
      backgroundImage: {
        supergradient:
          "linear-gradient(to right,#ffa96b,#f28d65,#e17262,#cd5960,#b6425f,#9c2d5e,#7f1b5b,#600d57,#3d0651,#3d0651,#360b45,#2e0e3a,#27102f,#201125,#19101a,#0f0f0f,#19101a,#201125,#27102f,#2e0e3a,#360b45,#3d0651,#3d0651,#600d57,#7f1b5b,#9c2d5e,#b6425f,#cd5960,#e17262,#f28d65,#ffa96b)",
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
