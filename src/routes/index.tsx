import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/kodarvia/Header';
import { Presentation } from '@/components/kodarvia/Presentation';
import { MenuSection } from '@/components/kodarvia/MenuSection';
import { Contact } from '@/components/kodarvia/Contact';
import { Footer } from '@/components/kodarvia/Footer';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Kodarvia · Restaurante y cafetería' },
    { name: 'description', content: 'Cocina de temporada, café de especialidad y un lugar para disfrutar sin prisas. Descubre la carta de Kodarvia y escríbenos.' },
    { property: 'og:title', content: 'Kodarvia · Restaurante y cafetería' },
    { property: 'og:description', content: 'Buena cocina, café con alma y un lugar donde el tiempo sabe un poco mejor.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
function Index() {
  return <><Header /><main><Presentation /><MenuSection /><Contact /></main><Footer /></>;
}
