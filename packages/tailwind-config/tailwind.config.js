/** @type {import('tailwindcss').Config} */
export const sharedConfig = {
  content:[
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    '../../packages/ui/src/components/**/*.{ts,tsx}',
	],
  theme: {
    extend: {},
  },
  plugins: [],
}

