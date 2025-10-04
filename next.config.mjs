import createMDX from '@next/mdx';
// Importamos remark-gfm usando la sintaxis ES Module
import remarkGfm from 'remark-gfm'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['tsx', 'mdx', 'md']
};

const withMDX = createMDX({
  options: { 
    // Usamos el módulo importado, no require()
    remarkPlugins: [remarkGfm], 
    rehypePlugins: [] 
  }
});

export default withMDX(nextConfig);
