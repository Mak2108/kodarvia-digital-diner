import { describe, expect, it } from 'vitest';
import { contactSchema } from '@/lib/contact-schema';
const valid = { name: 'María', email: 'maria@example.com', message: '¿Tenéis opciones vegetarianas?' };
describe('Validación del formulario de contacto', () => {
  it('rechaza un nombre vacío', () => { expect(contactSchema.safeParse({ ...valid, name: '   ' }).success).toBe(false); });
  it('rechaza un mensaje vacío', () => { expect(contactSchema.safeParse({ ...valid, message: '   ' }).success).toBe(false); });
  it('rechaza un email no válido', () => { expect(contactSchema.safeParse({ ...valid, email: 'correo-invalido' }).success).toBe(false); });
  it('acepta una consulta válida', () => { expect(contactSchema.parse(valid)).toEqual(valid); });
});
