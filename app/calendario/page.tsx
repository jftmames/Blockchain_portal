import { sesiones } from '@/data/sesiones';

export default function Calendario() {
  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Calendario y Horario</h1>
      <p className="text-lg text-gray-700">Todas las sesiones se imparten los **Martes** y **Miércoles** en horario de **17:00h a 19:00h** (hora CEST/CET).</p>

      <div className="border rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semana</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Día / Fecha</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sesión</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sesiones.map(s => (
              <tr key={s.slug} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{s.semana}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.dia} / {s.fechaStr.split(',')[0]}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{s.titulo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
