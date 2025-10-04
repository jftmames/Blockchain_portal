/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // La ruta más simple y efectiva para Next.js App Router
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './content/**/*.{md,mdx}',
    // Esto cubre todos los archivos, incluyendo los componentes en app/(components)
  ],
  theme: { 
    extend: {} 
  },
  plugins: []
};
