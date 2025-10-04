// app/layout.tsx

// IMPORTACIÓN CORREGIDA: Usa la ruta relativa para subir un nivel y encontrar 'styles/globals.css'
import '../styles/globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      {/* Las clases de Tailwind aplicadas aquí (min-h-screen, bg-white, etc.) */}
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="border-b sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-lg hover:text-blue-600 transition-colors">Blockchain · UNIE</Link>
            <nav className="text-sm flex gap-4 text-gray-600">
              <Link href="/programa" className='hover:text-gray-900'>Programa</Link>
              <Link href="/calendario" className='hover:text-gray-900'>Calendario</Link>
              <Link href="/sesiones" className='hover:text-gray-900'>Sesiones</Link>
              <Link href="/labs" className='hover:text-gray-900'>Laboratorios</Link>
              <Link href="/recursos" className='hover:text-gray-900'>Recursos</Link>
              <Link href="/evaluacion" className='hover:text-gray-900'>Evaluación</Link>
              <Link href="/proyecto-final" className='hover:text-gray-900'>Proyecto Final</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className='border-t mt-12 py-6 text-center text-sm text-gray-500'>
            Portal Docente © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
