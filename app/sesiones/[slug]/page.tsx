import { getSessionMDX } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Progreso } from '@/app/(components)/Progreso';
import { SesionMeta, sesiones } from '@/data/sesiones';

export async function generateStaticParams() {
    return sesiones.map(s => ({ slug: s.slug }));
}

// Tipado directo en línea
export default async function Sesion({ params }: { params: { slug: string } }) {
  let mdx, frontmatter: SesionMeta;
  const { slug } = params; 
  
  try {
    ({ mdx, frontmatter } = await getSessionMDX(slug));
  } catch (e) {
    console.error(`Error loading session ${slug}:`, e.message);
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight">{frontmatter.titulo}</h1>
            <p className="text-lg text-gray-600 mt-1">{frontmatter.bloque} · {frontmatter.fechaStr}</p>
            
            <div className='mt-4'>
                <Progreso slug={slug} /> 
            </div>
        </header>

        <div className="prose max-w-none prose-lg prose-headings:font-semibold prose-a:text-blue-600 prose-a:underline">
            {mdx}
        </div>
        
        <footer className='mt-12 pt-6 border-t'>
            <p className='text-sm text-gray-500'>
                **Resultados de Aprendizaje (RA):** {frontmatter.ra?.join(', ') || 'No definidos'}<br/>
                **Competencias:** {frontmatter.competencias?.join(', ') || 'No definidas'}
            </p>
        </footer>
    </article>
  );
}
