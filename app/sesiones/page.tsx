import Link from 'next/link';
import { sesiones } from '@/data/sesiones';

export default function SesionesPage() {
  // Extrae y ordena los nombres de los bloques temáticos únicos
  const bloques = Array.from(new Set(sesiones.map(s => s.bloque)));
  
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Índice de Sesiones (30)</h1>
      <p className="text-lg text-gray-600">Navega por el contenido organizado por bloques temáticos.</p>
      
      {bloques.map(bloque => (
        <div key={bloque} className="space-y-3">
            <h2 className="text-2xl font-semibold border-b pb-1 mt-6 text-gray-800">{bloque}</h2>
            <ul className="grid md:grid-cols-2 gap-4">
            {sesiones.filter(s => s.bloque === bloque).map(s => (
                <li key={s.slug} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors shadow-sm">
                    <h3 className="font-medium text-lg">
                        <Link href={`/sesiones/${s.slug}`} className="block hover:text-blue-600 transition-colors">{s.titulo}</Link>
                    </h3>
                    <p className="text-sm text-gray-500">{s.dia} · Semana {s.semana}</p>
                </li>
            ))}
            </ul>
        </div>
      ))}
    </section>
  );
}
