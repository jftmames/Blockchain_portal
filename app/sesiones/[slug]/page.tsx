// app/sesiones/[slug]/page.tsx

import { getSessionMDX } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Progreso } from '@/app/(components)/Progreso';
import { SesionMeta, sesiones } from '@/data/sesiones';

// 1. Interfaz de las props que Next.js inyecta a las páginas dinámicas
interface SesionPageProps {
    params: {
        slug: string;
    };
    // Se podrían añadir 'searchParams' aquí si fuera necesario
}

// Función estática requerida por Next.js para generar las rutas (Static Site Generation - SSG)
// Esto asegura que cada sesión MDX se pre-renderice durante el build.
export async function generateStaticParams() {
    return sesiones.map(s => ({ slug: s.slug }));
}

// Componente principal de la página (Server Component)
export default async function Sesion({ params }: SesionPageProps) {
  let mdx, frontmatter: SesionMeta;
  
  try {
    // Carga, compila y valida el archivo MDX correspondiente al slug de la URL
    ({ mdx, frontmatter } = await getSessionMDX(params.slug));
  } catch (e) {
    // Si el archivo no existe o falla la validación del frontmatter, muestra 404
    console.error(`Error loading session ${params.slug}:`, e.message);
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight">{frontmatter.titulo}</h1>
            <p className="text-lg text-gray-600 mt-1">{frontmatter.bloque} · {frontmatter.fechaStr}</p>
            
            {/* Componente de cliente para marcar el progreso */}
            <div className='mt-4'>
                <Progreso slug={params.slug} />
            </div>
        </header>

        {/* El MDX compilado se renderiza aquí. La clase 'prose' de Tailwind estiliza el contenido. */}
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
