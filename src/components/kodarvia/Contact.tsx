import { useState, type FormEvent } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { ArrowUpRight, CheckCircle2, LoaderCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/lib/contact-schema';
import { sendContactMessage } from '@/lib/contact.functions';

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'sending') return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const result = contactSchema.safeParse({ name: values.get('name'), email: values.get('email'), message: values.get('message') });
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map(issue => [issue.path[0], issue.message])));
      setState('idle');
      const field = form.elements.namedItem(String(result.error.issues[0]?.path[0]));
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setErrors({});
    setState('sending');
    try {
      const response = await send({ data: result.data });
      if (!response.ok) { setState('error'); return; }
      form.reset();
      setState('success');
    } catch { setState('error'); }
  }
  return <section id="contacto" className="contact-section page-width" aria-labelledby="contact-title">
    <div><p className="eyebrow mb-5 text-primary">Estamos al otro lado</p><h2 id="contact-title" className="section-title">La conversación<br />empieza aquí.</h2><p className="body-copy mt-6 max-w-sm">¿Una pregunta, una idea o simplemente ganas de saludarnos? Escríbenos. Siempre hay sitio para una buena conversación.</p><div className="contact-note"><MessageCircle size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-primary" /><div><p className="text-sm font-medium">Nos encantará leerte</p><p className="body-copy mt-1">Tu mensaje llega directamente al equipo de Kodarvia.</p></div></div></div>
    <form onSubmit={submit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="field-label">Nombre</label><Input id="name" name="name" autoComplete="name" placeholder="Tu nombre" required maxLength={100} className="h-12 bg-card px-4 shadow-none" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div>
        <div><label htmlFor="email" className="field-label">Email</label><Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required maxLength={255} className="h-12 bg-card px-4 shadow-none" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div>
      </div>
      <div><label htmlFor="message" className="field-label">Mensaje</label><Textarea id="message" name="message" placeholder="Cuéntanos, ¿en qué podemos ayudarte?" required maxLength={3000} className="min-h-36 resize-y bg-card p-4 shadow-none" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <p id="message-error" className="field-error">{errors.message}</p>}</div>
      <Button type="submit" disabled={state === 'sending'} className="h-12 w-full justify-between px-6 text-xs sm:w-auto sm:min-w-40">{state === 'sending' ? 'Enviando…' : 'Enviar'}{state === 'sending' ? <LoaderCircle className="animate-spin" /> : <ArrowUpRight />}</Button>
      {state === 'success' && <p role="status" className="flex items-center gap-3 rounded-md border border-success/20 bg-success-surface p-4 text-sm text-success"><CheckCircle2 className="size-5 shrink-0" />¡Gracias! Hemos recibido tu mensaje</p>}
      {state === 'error' && <p role="alert" className="flex items-center gap-3 rounded-md border border-destructive/25 bg-destructive/5 p-4 text-sm text-destructive"><AlertCircle className="size-5 shrink-0" />No hemos podido enviar tu mensaje. Por favor, inténtalo de nuevo.</p>}
    </form>
  </section>;
}
