/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0a0a0a', soft: '#1a1a1a' },
        paper: { DEFAULT: '#fafafa', soft: '#f0f0f0' },
        accent: { DEFAULT: '#ff5c2b' },
      },
      typography: ({ theme }) => ({
        DEFAULT: { css: { maxWidth: '68ch' } },
      }),
    },
  },
  plugins: [],
};
