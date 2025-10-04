export default function Evaluacion() {
  return (
    <section className="prose max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Evaluación y Rúbrica EEE</h1>
      <p className='text-lg'>La evaluación de la asignatura es **continua** y culmina con la defensa de un Proyecto Final. Los criterios están basados en el modelo Ético–Económico–Específico-Técnico (EEE).</p>
      
      <h2>Distribución de la Puntuación</h2>
      <ul className="list-disc pl-6">
        <li>**30% Trabajos Prácticos / Laboratorios:** Ejecución y análisis de los labs técnicos (Colab, Solidity).</li>
        <li>**40% Proyecto Final (Análisis Jurídico/Técnico):** Investigación y argumentación del caso de uso elegido.</li>
        <li>**30% Defensa Oral y Participación:** Claridad en la exposición, capacidad de síntesis y referencias normativas.</li>
      </ul>

      <h2>Modelo de Rúbrica EEE</h2>
      <p>Cada entregable será evaluado en tres dimensiones clave:</p>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className='bg-gray-50'>
            <th className="px-4 py-2 border-r">Criterio</th>
            <th className="px-4 py-2">Foco</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-r font-medium">Ético-Legal</td>
            <td className="px-4 py-2">Impacto normativo, RGPD, blanqueo de capitales y responsabilidad.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r font-medium">Económico</td>
            <td className="px-4 py-2">Viabilidad, costes de implementación (gas), escalabilidad y modelo de negocio.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-r font-medium">Específico-Técnico</td>
            <td className="px-4 py-2">Comprensión de los mecanismos de consenso, criptografía y lenguajes (ej. Solidity).</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
