import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// El directorio de salida estática de Next.js
const buildDir = '.next/static';

// Verificamos si la carpeta de build estático de Next.js existe
if (existsSync(buildDir)) {
    try {
        console.log('Building Pagefind index...');
        // Ejecuta Pagefind, apuntando al directorio de build estático.
        // El índice se generará en public/pagefind/
        execSync(`npx pagefind --site ${buildDir}`, { stdio: 'inherit' });
        console.log('Pagefind index built successfully.');
    } catch (error) {
        console.error('Error building Pagefind index. Continuing build:', error.message);
        // El || true en package.json asegura que el build de Next.js no falle si Pagefind falla.
    }
} else {
    console.log(`Skipping Pagefind: Next.js static directory (${buildDir}) not found.`);
}
