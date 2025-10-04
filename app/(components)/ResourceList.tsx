export function ResourceList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="border-t pt-4 mt-6">
        <h4 className="text-base font-semibold mb-2">Recursos y Lecturas Sugeridas</h4>
        <ul className="list-disc pl-6 space-y-1">
        {items.map((it) => (
            <li key={it.href} className="mt-1 text-gray-700">
                <a className="text-blue-600 underline hover:text-blue-800 transition-colors" href={it.href} target="_blank" rel="noreferrer">{it.label}</a>
            </li>
        ))}
        </ul>
    </div>
  );
}
