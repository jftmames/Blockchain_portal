import { sesiones } from '@/data/sesiones';
import Link from 'next/link';

export default function Programa() {
  // Agrupa las sesiones por número de semana
  const porSemana = sesiones.reduce((acc, s) => {
    (acc[s.semana] ||= []).push(s); return acc;
  }, {} as Record<number, typeof sesiones>);
  
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Programa de la Asignatura (15 semanas)</h1>
      <p className="text-lg text-gray-700">Visión global del curso organizada por bloques y semanas de impartición.</p>

      {Object.entries(porSemana).map(([k, arr]) => (
        <div key={k} className="mb-5 p-5 border rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <h2 className="font-semibold text-xl mb-3 border-b pb-1">Semana {k}</h2>
          <ul className="space-y-2 text-gray-700">
            {arr.map(s => (
                <li key={s.slug} className="flex justify-between items-center">
                    <div>
                        <span className='font-medium text-gray-900'>{s.dia}: </span>
                        <Link href={`/sesiones/${s.slug}`} className='hover:underline text-blue-700'>{s.titulo}</Link>
                    </div>
                    <span className='text-sm text-gray-500'>{s.bloque}</span>
                </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
