import { ArrowDown, ArrowUpRight, Coffee, Leaf, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import interior from '@/assets/kodarvia-interior.jpg';
import table from '@/assets/kodarvia-table.jpg';

export function Presentation() {
  return <>
    <section id="presentacion" className="hero" aria-labelledby="hero-title">
      <img src={interior} alt="Un rincón acogedor de cafetería, con mesas de madera y luz natural" className="hero-image" width={1792} height={1024} fetchPriority="high" />
      <div className="px-5">
        <p className="eyebrow mb-6">Restaurante & cafetería</p>
        <h1 id="hero-title">Kodarvia</h1>
        <p className="hero-description">Buena cocina, café con alma y un lugar<br className="hidden sm:block" /> donde el tiempo sabe un poco mejor.</p>
        <Button asChild variant="hero" className="h-12 gap-8 px-7 text-xs"><a href="#carta">Ver la carta <ArrowUpRight /></a></Button>
      </div>
      <div className="hero-bottom"><span>Cocina de temporada</span><span aria-hidden="true">·</span><span>Café de especialidad</span><span aria-hidden="true">·</span><span>Sin prisas</span></div>
      <a href="#quienes-somos" className="absolute bottom-16 right-7 hidden size-10 items-center justify-center rounded-full border border-hero-foreground/40 md:flex" aria-label="Descubrir quiénes somos"><ArrowDown size={16} /></a>
    </section>
    <section id="quienes-somos" className="about page-width" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow mb-5 text-primary">Quiénes somos</p>
        <h2 id="about-title" className="section-title mb-6">Las cosas buenas,<br />a su tiempo.</h2>
        <p className="body-copy">Kodarvia nace de una idea sencilla: disfrutar de lo cotidiano. Una mesa compartida, un café recién hecho y una cocina honesta que sigue el ritmo de las estaciones.</p>
        <p className="body-copy mt-3">Nos gusta cuidar cada detalle para que, vengas a lo que vengas, encuentres tu momento y te sientas como en casa.</p>
        <p className="signature">Un pequeño lugar. Grandes momentos.</p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-2"><Leaf size={14} className="text-primary" /> Producto de temporada</span>
          <span className="flex items-center gap-2"><Coffee size={14} className="text-primary" /> Café con carácter</span>
          <span className="flex items-center gap-2"><Utensils size={14} className="text-primary" /> Cocina con cariño</span>
        </div>
      </div>
      <img src={table} alt="Tosta de burrata con tomates y un cappuccino recién preparado" className="about-image" loading="lazy" width={1024} height={1024} />
    </section>
  </>;
}
