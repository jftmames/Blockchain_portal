import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import { z } from 'zod';

// Función para formatear la fecha a un string legible en español
const fs = (iso: string) => format(new Date(iso), "EEEE d 'de' MMMM, 17:00–19:00h", { locale: es });

// Esquema de tipado y validación de metadatos de la sesión
export const SesionMetaSchema = z.object({
  slug: z.string(),
  titulo: z.string(),
  semana: z.number().int().min(1).max(15),
  dia: z.union([z.literal('Martes'), z.literal('Miércoles')]),
  fechaISO: z.string().datetime(),
  fechaStr: z.string(), 
  bloque: z.string(),
  // Resultados de Aprendizaje y Competencias son opcionales
  ra: z.array(z.string()).optional(), 
  competencias: z.array(z.string()).optional(), 
});

// Tipo derivado del esquema
export type SesionMeta = z.infer<typeof SesionMetaSchema>;

// Lista de sesiones (Exportación Única y slugs corregidos)
export const sesiones: SesionMeta[] = [
  // SLUGS ESTABLES: deben coincidir exactamente con el nombre de archivo MDX (session-01-que-es-blockchain.mdx)
  { slug: 'session-01-que-es-blockchain', titulo: 'Qué es Blockchain y por qué importa', semana: 1, dia: 'Martes', fechaISO: '2025-10-07T17:00:00+02:00', fechaStr: fs('2025-10-07T17:00:00+02:00'), bloque: 'Introducción', ra: ['RA1'], competencias: ['CB1'] },
  { slug: 'session-02-historia-confianza-hash', titulo: 'Historia de la confianza: del contrato al hash', semana: 1, dia: 'Miércoles', fechaISO: '2025-10-08T17:00:00+02:00', fechaStr: fs('2025-10-08T17:00:00+02:00'), bloque: 'Introducción', ra: ['RA1'], competencias: ['CE1'] },
  { slug: 'session-03-como-funciona-una-cadena', titulo: 'Cómo funciona una cadena de bloques', semana: 2, dia: 'Martes', fechaISO: '2025-10-14T17:00:00+02:00', fechaStr: fs('2025-10-14T17:00:00+02:00'), bloque: 'Arquitectura', ra: ['RA2'], competencias: ['CB2'] },
  { slug: 'session-04-consenso-pow', titulo: 'Mecanismos de consenso I: Proof of Work', semana: 2, dia: 'Miércoles', fechaISO: '2025-10-15T17:00:00+02:00', fechaStr: fs('2025-10-15T17:00:00+02:00'), bloque: 'Consenso', ra: ['RA3'], competencias: ['CE2'] }
];
