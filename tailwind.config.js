/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "rose-800": "hsl(332 51% 32%)",
      "rose-50": "hsl(330 100% 98%)",
      "stone-900": "hsl(24 5% 18%)",
      "stone-600": "hsl(30 10% 34%)",
      "stone-150": "hsl(30 18% 87%)",
      "stone-100": "hsl(30 54% 90%)",
      "brown-800": "hsl(14 45% 36%)",
      "white": "hsl(0 0 100%)",
    },
    fontFamily: {
      "young-serif": ["Young Serif", "serif"],
      "outfit": ["Outfit", "sans-serif"],
    },
    fontSize: {
      "xxl": "var(--font-size-xxl)",
      "xl": "var(--font-size-xl)",
      "lg": "var(--font-size-lg)",
      "rg": "var(--font-size-rg)",
    },
    lineHeight: {
      "150": "150%",
      "100": "100%",
    },
    spacing: {
      "1600": "8rem",
      "600": "3rem",
      "500": "2.5rem",
      "400": "2rem",
      "300": "1.5rem",
      "200": "1rem",
      "150": "0.75rem",
      "100": "0.5rem",
      "0": "0",
    },
    borderWidth: {
      "1": "0.0625rem",
    },
    borderRadius: {
      "300": "1.5rem",
      "150": "0.75rem",
    },
    extend: {
      width: {
        "recipe": "46rem",
      },
    },
  },
  plugins: [],
};
