/** @type {import('tailwindcss').Config} */
module.exports = {
  // Rutas donde Tailwind buscará clases
  content: [
    './app/**/*.{ts,tsx,mdx}', 
    './content/**/*.{md,mdx}', 
    './app/(components)/**/*.{ts,tsx}'
  ],
  theme: { 
    extend: {} 
  },
  plugins: []
};
