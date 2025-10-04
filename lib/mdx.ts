import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compile } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { SesionMetaSchema, SesionMeta } from '@/data/sesiones';

type SessionResult = {
  mdx: Awaited<ReturnType<typeof compile>>;
  frontmatter: SesionMeta;
}

export async function getSessionMDX(slug: string): Promise<SessionResult> {
  const full = path.join(process.cwd(), 'content', 'sesiones', `${slug}.mdx`);
  
  // 1. Verificación de existencia del archivo
  try {
    await fs.access(full);
  } catch (error) {
    // Si el archivo no existe, lanzamos un error que notFound() capturará en page.tsx
    throw new Error(`Session file not found for slug: ${slug}`);
  }

  const raw = await fs.readFile(full, 'utf-8');
  const { content, data } = matter(raw);
  
  // 2. Validación y tipado de metadatos (Frontmatter)
  // Zod se asegura de que el MDX tenga los campos requeridos
  const frontmatter = SesionMetaSchema.parse(data);

  // 3. Compilación del MDX a formato React
  const mdx = await compile(content, {
    mdxOptions: { 
      // Añade soporte completo de GitHub Flavored Markdown (tablas, etc.)
      remarkPlugins: [remarkGfm], 
      // Resalta la sintaxis del código con un tema oscuro
      rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] 
    }
  });
  
  return { mdx, frontmatter };
}
