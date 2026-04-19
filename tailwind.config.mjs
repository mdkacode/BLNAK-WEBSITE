import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Devanagari"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Newsreader"', '"Noto Serif Devanagari"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0a0a0a', soft: '#1a1a1a' },
        paper: { DEFAULT: '#fafafa', soft: '#f0f0f0' },
        accent: { DEFAULT: '#ff5c2b' },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1a1a1a',
            '--tw-prose-headings': '#0a0a0a',
            '--tw-prose-links': '#ff5c2b',
            '--tw-prose-bold': '#0a0a0a',
            '--tw-prose-quotes': '#0a0a0a',
            '--tw-prose-quote-borders': '#ff5c2b',
            maxWidth: '68ch',
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.75',
            p: { marginTop: '1.25em', marginBottom: '1.25em' },
            h1: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: '600', letterSpacing: '-0.02em' },
            h2: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: '600', letterSpacing: '-0.015em', marginTop: '2.25em' },
            h3: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: '600' },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '3px',
              paddingLeft: '1.25em',
              quotes: 'none',
              fontSize: '1.2em',
              color: 'inherit',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            code: { fontWeight: '500', fontFamily: theme('fontFamily.mono').join(', ') },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            a: { textUnderlineOffset: '3px', textDecorationThickness: '1px' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#e8e8e8',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-bold': '#fafafa',
            '--tw-prose-quotes': '#fafafa',
            '--tw-prose-quote-borders': '#ff5c2b',
            '--tw-prose-links': '#ff7a4d',
          },
        },
        lg: { css: { fontSize: '1.15rem', lineHeight: '1.8' } },
      }),
    },
  },
  plugins: [typography],
};
