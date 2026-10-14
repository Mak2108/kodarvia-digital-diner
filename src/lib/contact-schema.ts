import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Escribe tu nombre.').max(100, 'El nombre no puede superar los 100 caracteres.'),
  email: z.string().trim().email('Escribe un email válido.').max(255, 'El email es demasiado largo.'),
  message: z.string().trim().min(1, 'Escribe tu mensaje.').max(3000, 'El mensaje no puede superar los 3000 caracteres.'),
});
export type ContactInput = z.infer<typeof contactSchema>;
