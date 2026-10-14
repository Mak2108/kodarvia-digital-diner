import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [['Presentación', '#presentacion'], ['Carta', '#carta'], ['Contacto', '#contacto']];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="page-width flex h-full items-center justify-between">
      <a href="#presentacion" className="wordmark" aria-label="Kodarvia, inicio" onClick={() => setOpen(false)}>Kodarvia<span className="text-primary">.</span></a>
      <nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">
        {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
      </nav>
      <Button asChild variant="outline" className="hidden h-10 gap-5 rounded-sm border-primary/30 px-5 text-xs font-normal md:inline-flex"><a href="#contacto">Hablemos <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="size-11 md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="menu-movil" aria-label="Navegación móvil" className="mobile-nav flex flex-col md:hidden">{links.map(([label, href]) => <a key={href} className="nav-link" href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </header>;
}
