import { getSessionMDX } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Progreso } from '@/app/(components)/Progreso';
import { SesionMeta, sesiones } from '@/data/sesiones';

// 1. Definimos la interfaz de las props que Next.js le pasa a esta página
interface SesionPageProps {
    params: {
        slug: string;
    };
    // El App Router puede inyectar otros props como searchParams, pero solo params es obligatorio aquí.
}

// Fun: Permite a Next.js generar previamente todas las rutas de sesión
export async function generateStaticParams() {
    return sesiones.map(s => ({ slug: s.slug }));
}

// 2. Tipificamos el componente Sesion con la nueva interfaz
export default async function Sesion({ params }: SesionPageProps) {
  let mdx, frontmatter: SesionMeta;
  
  try {
    // Carga, compila y valida el archivo MDX correspondiente al slug
    ({ mdx, frontmatter } = await getSessionMDX(params.slug));
  } catch (e) {
    console.error(`Error loading session ${params.slug}:`, e.message);
    notFound(); 
  }

  return (
    <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight">{frontmatter.titulo}</h1>
            <p className="text-lg text-gray-600 mt-1">{frontmatter.bloque} · {frontmatter.fechaStr}</p>
            <div className='mt-4'>
                <Progreso slug={params.slug} />
            </div>
        </header>

        {/* El contenido MDX compilado se renderiza aquí */}
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
