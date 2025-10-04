import Link from 'next/link';
import { sesiones } from '@/data/sesiones';

export default function Home() {
  // Filtramos para mostrar las sesiones futuras, o las 4 primeras si todas son pasadas
  const now = new Date();
  const proximasSesiones = sesiones
    .filter(s => new Date(s.fechaISO) > now)
    .slice(0, 4);

  const sesionesAMostrar = proximasSesiones.length > 0 ? proximasSesiones : sesiones.slice(0, 4);

  return (
    <section className="space-y-8">
      <div className='pb-4'>
        <h1 className="text-4xl font-extrabold tracking-tight">Blockchain: Fundamentos técnicos y problemática jurídica</h1>
        <p className="text-lg text-gray-700 max-w-4xl mt-3">
          Portal de la asignatura con contenidos teóricos, laboratorios guiados y recursos. 
          Un enfoque integral: de los hashes al código y de los contratos a la jurisprudencia.
        </p>
      </div>
      
      {/* Tarjetas de acceso rápido */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/programa" className="border rounded-xl p-5 hover:bg-gray-50 transition-colors space-y-1 shadow-sm">
            <h2 className="text-xl font-semibold">Programa Completo</h2>
            <p className="text-sm text-gray-600">Visión de 15 semanas y objetivos de aprendizaje.</p>
        </Link>
        <Link href="/sesiones" className="border rounded-xl p-5 hover:bg-gray-50 transition-colors space-y-1 shadow-sm">
            <h2 className="text-xl font-semibold">Índice de Sesiones (30)</h2>
            <p className="text-sm text-gray-600">Accede a las lecturas, labs y actividades de cada clase.</p>
        </Link>
        <Link href="/evaluacion" className="border rounded-xl p-5 hover:bg-gray-50 transition-colors space-y-1 shadow-sm">
            <h2 className="text-xl font-semibold">Rúbricas y EEE</h2>
            <p className="text-sm text-gray-600">Consulta los criterios de evaluación y el Proyecto Final.</p>
        </Link>
      </div>

      {/* Listado de próximas sesiones */}
      <div className='pt-4'>
        <h2 className="text-2xl font-semibold mb-3">Próximas Sesiones</h2>
        <ul className="space-y-3">
          {sesionesAMostrar.map(s => (
            <li key={s.slug} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r-md">
                <Link href={`/sesiones/${s.slug}`} className="block">
                    <span className="font-medium">{s.titulo}</span> — 
                    <span className="text-sm text-gray-600 ml-2">{s.fechaStr}</span>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
