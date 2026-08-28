/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black (Dark) with Gold-Brown Palette (ActivaSwiss Signature Style)
        "primary": "#f3ede2", // Warm Ivory Platinum for crisp readable headings
        "primary-container": "#c5a880", // Signature Gold-Brown
        "on-primary": "#050608", // Pitch Black on Gold-Brown CTA buttons
        "on-primary-container": "#1c150c",
        "on-primary-fixed": "#050608",
        "on-primary-fixed-variant": "#dfd5c6",
        "primary-fixed": "#dfd5c6",
        "primary-fixed-dim": "#c5a880", // Gold-Brown Dim
        "inverse-primary": "#050608",

        "secondary": "#a89f91", // Warm Champagne Muted Slate/Sand
        "secondary-container": "#1e222b", // Hairline Obsidian Border
        "secondary-fixed": "#2d3340",
        "secondary-fixed-dim": "#a89f91",
        "on-secondary": "#050608",
        "on-secondary-container": "#c5a880",
        "on-secondary-fixed": "#f3ede2",
        "on-secondary-fixed-variant": "#dfd5c6",

        "tertiary": "#ffffff", // Pure Diamond White
        "tertiary-container": "#181b22",
        "tertiary-fixed": "#e8e4dc",
        "tertiary-fixed-dim": "#c5a880",
        "on-tertiary": "#050608",
        "on-tertiary-container": "#dfd5c6",
        "on-tertiary-fixed": "#050608",
        "on-tertiary-fixed-variant": "#a89f91",

        // Dark Luxury Black & Obsidian Surfaces
        "surface": "#0d0f12", // Alpine Dark Surface
        "surface-bright": "#161920",
        "surface-dim": "#050608",
        "surface-variant": "#121519",
        "surface-tint": "#c5a880",
        "surface-container-lowest": "#050608", // Deepest Pitch Black
        "surface-container-low": "#0f1217", // Deep Charcoal/Obsidian Panel
        "surface-container": "#14171e", // Dark Card Panel
        "surface-container-high": "#1a1e27",
        "surface-container-highest": "#222733",
        "inverse-surface": "#f3ede2",
        "inverse-on-surface": "#050608",

        "background": "#08090b", // Deep Black Background
        "on-background": "#f3ede2",
        "on-surface": "#f3ede2", // Warm Ivory Body Text
        "on-surface-variant": "#a89f91", // Secondary Muted Grey/Sand

        "outline": "#363c48",
        "outline-variant": "#20242e",
        "platinum": "#2a303c",

        // Gold-Brown Tokens
        "gold": "#c5a880", // Rich Gold-Brown
        "goldbrown": "#c5a880", // Signature Gold-Brown
        "gold-light": "#dfd5c6", // Light Champagne Gold
        "gold-dark": "#9e825b", // Deep Bronze Gold

        "error": "#ff6b6b",
        "error-container": "#3e1414",
        "on-error": "#ffffff",
        "on-error-container": "#ffb4ab",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        unit: "8px",
        "section-gap": "80px",
        gutter: "24px",
        "stack-lg": "32px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "margin-desktop": "64px",
        "margin-mobile": "24px",
        "container-max": "1280px",
      },
      fontFamily: {
        "display-lg": ["var(--font-eb-garamond)", "serif"],
        "display-md": ["var(--font-eb-garamond)", "serif"],
        "headline-lg": ["var(--font-eb-garamond)", "serif"],
        "headline-lg-mobile": ["var(--font-eb-garamond)", "serif"],
        "headline-sm": ["var(--font-eb-garamond)", "serif"],
        "headline-md": ["var(--font-eb-garamond)", "serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "label-md": ["var(--font-inter)", "sans-serif"],
        "label-sm": ["var(--font-inter)", "sans-serif"],
        "caption": ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-md": ["36px", { lineHeight: "1.2", fontWeight: "500" }],
        "headline-lg": ["30px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
        "caption": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
