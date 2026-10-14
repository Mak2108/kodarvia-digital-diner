import { Coffee, CookingPot, CakeSlice, Leaf } from 'lucide-react';

const categories = [
  { name: 'Entrantes', icon: Leaf, items: [
    { name: 'Burrata de la huerta', description: 'Tomates de temporada, albahaca fresca y aceite de oliva virgen extra.', price: '12,50 €' },
    { name: 'Croquetas de la casa', description: 'Cremosas por dentro, crujientes por fuera. De jamón ibérico, 6 unidades.', price: '9,00 €' },
    { name: 'Hummus de remolacha', description: 'Con garbanzos, tahini, semillas tostadas y pan de masa madre.', price: '8,50 €' },
  ] },
  { name: 'Principales', icon: CookingPot, items: [
    { name: 'Risotto de setas', description: 'Arroz cremoso, setas de temporada, parmesano y un toque de trufa.', price: '16,50 €' },
    { name: 'Salmón a la plancha', description: 'Con verduras asadas, crema de boniato y aceite de hierbas.', price: '19,00 €' },
    { name: 'Hamburguesa Kodarvia', description: 'Ternera, queso curado, cebolla caramelizada y patatas caseras.', price: '15,50 €' },
  ] },
  { name: 'Postres', icon: CakeSlice, items: [
    { name: 'Tarta de queso al horno', description: 'Corazón cremoso y una suave mermelada de frutos rojos.', price: '6,50 €' },
    { name: 'Brownie de chocolate', description: 'Chocolate intenso, nueces y helado de vainilla.', price: '6,00 €' },
    { name: 'Yogur, miel y granola', description: 'Yogur natural con miel, fruta fresca y granola artesanal.', price: '5,50 €' },
  ] },
  { name: 'Bebidas', icon: Coffee, items: [
    { name: 'Café de especialidad', description: 'Espresso de origen seleccionado, recién molido en cada taza.', price: '2,50 €' },
    { name: 'Cappuccino', description: 'Nuestro espresso con leche cremosa y un toque de cacao.', price: '3,50 €' },
    { name: 'Limonada de la casa', description: 'Limón exprimido, hierbabuena y el punto justo de dulzor.', price: '4,00 €' },
    { name: 'Té e infusiones', description: 'Té verde, negro o una selección de infusiones aromáticas.', price: '3,00 €' },
  ] },
];

export function MenuSection() {
  return <section id="carta" className="menu-section" aria-labelledby="menu-title"><div className="page-width">
    <div className="mb-12 text-center"><p className="eyebrow mb-4 text-primary">Hecho para disfrutar</p><h2 id="menu-title" className="section-title">Nuestra carta</h2><p className="body-copy mt-4">Sabores honestos, ingredientes de temporada y ese toque de casa.</p></div>
    <div className="grid grid-cols-1 items-start gap-x-9 gap-y-10 md:grid-cols-2">
      {categories.map(({ name, icon: Icon, items }) => <div key={name}><h3 className="category-title"><Icon size={21} strokeWidth={1.4} className="text-primary" />{name}</h3><div className="grid gap-3">{items.map(item => <article className="menu-card" key={item.name}><div className="flex items-start justify-between gap-4"><h4>{item.name}</h4><span className="menu-price">{item.price}</span></div><p>{item.description}</p></article>)}</div></div>)}
    </div>
    <p className="mt-9 text-center text-xs leading-6 text-muted-foreground">Si tienes alguna alergia o intolerancia, consúltanos. Nos encantará ayudarte.</p>
  </div></section>;
}
