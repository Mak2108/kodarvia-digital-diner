import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './contact-schema';

export const sendContactMessage = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      // This public action can only insert a validated contact message; no reads or edits are exposed.
      const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
      const { error } = await supabaseAdmin.from('contact_submissions').insert(data);
      if (error) {
        console.error('Contact submission failed:', error.code);
        return { ok: false as const };
      }
      return { ok: true as const };
    } catch {
      console.error('Contact submission service unavailable');
      return { ok: false as const };
    }
  });
