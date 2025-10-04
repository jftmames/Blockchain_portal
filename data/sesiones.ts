import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import { z } from 'zod'; // Usamos Zod para tipado y validación

// Función utilitaria para formatear la fecha de forma legible
const fs = (iso: string) => format(new Date(iso), "EEEE d 'de' MMMM, 17:00–19:00h", { locale: es });

// Schema de Zod para validar el frontmatter de los archivos MDX
export const SesionMetaSchema = z.object({
  slug: z.string(),
  titulo: z.string(),
  semana: z.number().int().min(1).max(15),
  dia: z.union([z.literal('Martes'), z.literal('Miércoles')]),
  fechaISO: z.string().datetime(),
  fechaStr: z.string(), 
  bloque: z.string(),
  ra: z.array(z.string()).optional(), // Resultados de Aprendizaje
  competencias: z.array(z.string()).optional(), // Competencias
});

export type SesionMeta = z.infer<typeof SesionMetaSchema>;

// Lista completa de sesiones (actualmente solo 4 de 30)
export const sesiones: SesionMeta[] = [
  // data/sesiones.ts (extracto corregido)

export const sesiones: SesionMeta[] = [
  // SLUG CORREGIDO
  { slug: 'session-01-que-es-blockchain', titulo: 'Qué es Blockchain y por qué importa', semana: 1, dia: 'Martes', fechaISO: '2025-10-07T17:00:00+02:00', fechaStr: fs('2025-10-07T17:00:00+02:00'), bloque: 'Introducción', ra: ['RA1'], competencias: ['CB1'] },
  // SLUG CORREGIDO
  { slug: 'session-02-historia-confianza-hash', titulo: 'Historia de la confianza: del contrato al hash', semana: 1, dia: 'Miércoles', fechaISO: '2025-10-08T17:00:00+02:00', fechaStr: fs('2025-10-08T17:00:00+02:00'), bloque: 'Introducción', ra: ['RA1'], competencias: ['CE1'] },
  // SLUG CORREGIDO
  { slug: 'session-03-como-funciona-una-cadena', titulo: 'Cómo funciona una cadena de bloques', semana: 2, dia: 'Martes', fechaISO: '2025-10-14T17:00:00+02:00', fechaStr: fs('2025-10-14T17:00:00+02:00'), bloque: 'Arquitectura', ra: ['RA2'], competencias: ['CB2'] },
  // SLUG CORREGIDO
  { slug: 'session-04-consenso-pow', titulo: 'Mecanismos de consenso I: Proof of Work', semana: 2, dia: 'Miércoles', fechaISO: '2025-10-15T17:00:00+02:00', fechaStr: fs('2025-10-15T17:00:00+02:00'), bloque: 'Consenso', ra: ['RA3'], competencias: ['CE2'] }
];
];
