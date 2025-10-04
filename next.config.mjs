import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita el nuevo compilador MDX de Next.js
  experimental: { mdxRs: true },
  // Permite a Next.js reconocer archivos .mdx y .md como páginas
  pageExtensions: ['tsx', 'mdx', 'md']
};

// Configura el procesamiento de MDX
const withMDX = createMDX({
  options: { 
    // Añade soporte para tablas, task lists y más en Markdown
    remarkPlugins: [require('remark-gfm')], 
    // Plugins de rehype se pueden añadir aquí si es necesario, pero los manejaremos en lib/mdx.ts
    rehypePlugins: [] 
  }
});

export default withMDX(nextConfig);
