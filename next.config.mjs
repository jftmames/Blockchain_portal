import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['tsx', 'mdx', 'md'],
  
  // AÑADIMOS ESTO: Ignorar errores de TypeScript durante el build
  typescript: {
    ignoreBuildErrors: true,
  }
};

const withMDX = createMDX({
  options: { 
    remarkPlugins: [remarkGfm], 
    rehypePlugins: [] 
  }
});

export default withMDX(nextConfig);
