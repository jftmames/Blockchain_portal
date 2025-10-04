// app/proyecto-final/page.tsx
export default function ProyectoFinal() {
  return (
    <section className="prose max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Guía del Proyecto Final</h1>
      <p className="text-lg text-gray-700">El Proyecto Final (PF) consiste en un análisis técnico-jurídico de un caso de uso de Blockchain a elección del estudiante, aplicando los criterios de la rúbrica EEE.</p>
      
      <h2>Estructura del Proyecto</h2>
      <ul>
        <li>**Parte I: Marco Técnico:** Explicación del protocolo y *smart contracts* implicados.</li>
        <li>**Parte II: Análisis Jurídico:** Identificación de problemas regulatorios (RGPD, prueba, jurisdicción).</li>
        <li>**Parte III: Conclusión y Defensa:** Propuesta de solución y defensa oral.</li>
      </ul>
      <p className="text-sm text-gray-500">Consulta la rúbrica EEE en la sección Evaluación para más detalles.</p>
    </section>
  );
}
