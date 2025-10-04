export default function Labs() {
  const labs = [
    { title: "Laboratorio 1: Hash demo (Colab)", slug: "hash-demo-colab", description: "Comprende la inmutabilidad y sensibilidad del hash SHA-256." },
    { title: "Laboratorio 2: RSA simplificado (Colab)", slug: "rsa-simplificado-colab", description: "Demostración de clave pública/privada y la firma digital." }
    // Añade el resto de laboratorios aquí...
  ];
  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Laboratorios Guiados</h1>
      <p className="text-lg text-gray-700">Estos laboratorios, generalmente en **Google Colab**, te permiten interactuar con los fundamentos técnicos de Blockchain.</p>
      
      <ul className="grid gap-4">
        {labs.map((lab) => (
            <li key={lab.slug} className="border rounded-xl p-4 hover:bg-blue-50 transition-colors shadow-sm">
                <a className="block" href={`/content/labs/${lab.slug}.md`} target="_blank" rel="noreferrer">
                    <h2 className="text-xl font-semibold text-blue-700 hover:underline">{lab.title}</h2>
                    <p className="text-sm text-gray-700 mt-1">{lab.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">Ver guía de {lab.slug}.md</span>
                </a>
            </li>
        ))}
      </ul>
    </section>
  );
}
