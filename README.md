# Kodarvia Digital Diner

Crea una landing page de UNA sola página (React + Tailwind) para un restaurante-cafetería llamado "Kodarvia". Todo el texto de la web debe estar en español.

Secciones, en este orden:
1. Cabecera fija con el nombre "Kodarvia" y un menú de enlaces que bajan a cada sección (Presentación, Carta, Contacto). En móvil, que sea un menú de hamburguesa.
2. Presentación (hero): título grande, una frase corta que explique qué es Kodarvia, y un botón "Ver la carta" que baje a la sección Carta. Añade también una breve sección "Quiénes somos" con 2 o 3 frases.
3. Carta: muestra platos y bebidas organizados por categorías (Entrantes, Principales, Postres, Bebidas), con nombre, descripción corta y precio en euros. Inventa entre 3 y 4 elementos por categoría. Usa tarjetas limpias y fáciles de leer.
4. Contacto: formulario con los campos Nombre, Email, Mensaje y un botón "Enviar". Validar que el nombre y el mensaje no estén vacíos y que el email sea válido. Al enviar, guarda el mensaje en una base de datos (usa Lovable Cloud) y muestra un aviso verde de confirmación ("¡Gracias! Hemos recibido tu mensaje"). Si falla, muestra un aviso de error claro. El formulario DEBE funcionar de verdad.
5. Pie de página sencillo con el nombre y el año.

Requisitos de diseño:
- Debe verse perfecta en móvil (diseño "mobile first"), tablet y ordenador. Sin scroll horizontal.
- Estilo moderno, cálido y limpio; elige una paleta de colores agradable y una tipografía legible.
- Botones y campos grandes y fáciles de tocar en el móvil.
- Desplazamiento suave al pulsar los enlaces del menú.

Mantén el código simple y ordenado, con componentes separados para cada sección.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kodarvia-digital-diner.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cf594b0e-954e-481c-a899-97b3416665f3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
