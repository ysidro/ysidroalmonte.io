---
name: "AcrylicPhotoPrint"
summary: "Plataforma de personalización de producto a medida sobre WooCommerce, reconstruida con una arquitectura moderna WordPress + Timber + Twig + Svelte."
role: "Ingeniero único — arquitectura de plataforma, plugins a medida y reconstrucción del storefront"
stack: ["WooCommerce", "Custom Plugins", "Timber", "Twig", "Svelte", "Tailwind CSS", "AWS", "Cloudflare"]
liveUrl: "https://acrylicphotoprint.com"
heroImage: "/images/work/acrylicphotoprint/home-hero.webp"
featured: true
order: 0
results:
  - "Pipeline de subida y procesamiento de imágenes gestionando fotos de clientes en el checkout"
  - "Lógica de carrito y checkout extendida para productos personalizados hechos a pedido"
  - "Reconstruido sobre Timber + Twig + Svelte para un frontend WordPress moderno y mantenible"
  - "PageSpeed Insights (nov. 2026): escritorio 98 en rendimiento y 100 en accesibilidad, prácticas recomendadas y SEO; móvil 77 en rendimiento y 100 en las otras tres"
walkthroughTitle: "Página por página: cómo el storefront guía la compra"
walkthroughLede: "Recorre el storefront en producción. Cada paso es una sección real de acrylicphotoprint.com y lo que hace por el cliente."
walkthrough:
  - tag: "Inicio · Hero"
    title: "Promesa y siguiente acción"
    body: "El hero presenta el producto y la ciudad (negocio local en Miami) y ofrece dos caminos: subir una foto ya, o ver tamaños y precios. Una franja de confianza (pago seguro, negocio local, impresión en alta resolución, entrega rápida) responde las primeras objeciones antes de hacer scroll."
    image: "/images/work/acrylicphotoprint/home-hero.webp"
    alt: "Hero de la página de inicio de Acrylicphotoprint.com con titular, dos llamadas a la acción y una impresión en acrílico"
  - tag: "Inicio · Elige tu impresión"
    title: "Enrutamiento de producto"
    body: "Cuatro familias de producto (acrílico, canvas, collage y regalos personalizados) como puntos de entrada, para que cada visitante llegue al configurador correcto en un clic en lugar de navegar una cuadrícula genérica."
    image: "/images/work/acrylicphotoprint/home-choose.webp"
    alt: "Sección del inicio para elegir entre acrílico, canvas, collage y regalos personalizados"
  - tag: "Inicio · Cómo funciona"
    title: "El proceso, por adelantado"
    body: "Una explicación corta del flujo desde la subida hasta la entrega. Fija expectativas para un producto hecho a pedido, donde el cliente aporta la imagen."
    image: "/images/work/acrylicphotoprint/home-how.jpg"
    alt: "Sección cómo funciona del inicio"
  - tag: "Inicio · Más vendidos"
    title: "Merchandising desde el catálogo"
    body: "Una cuadrícula de más vendidos destaca los productos que ya convierten, con enlace directo a su página de producto."
    image: "/images/work/acrylicphotoprint/home-best.webp"
    alt: "Cuadrícula de productos más vendidos del inicio"
  - tag: "Inicio · Acrílico vs. canvas"
    title: "Comparación que responde la pregunta de compra"
    body: "Una comparación lado a lado de ambos materiales. Ayuda a quien duda a decidir y evita que salga del sitio a investigar."
    image: "/images/work/acrylicphotoprint/home-vs.webp"
    alt: "Comparación entre impresiones en acrílico y canvas en el inicio"
  - tag: "Inicio · Galería y FAQ"
    title: "Prueba social y manejo de objeciones"
    body: "Una galería de impresiones terminadas genera confianza en la calidad, y el FAQ responde las dudas comunes antes de que se conviertan en correos de soporte."
    image: "/images/work/acrylicphotoprint/home-gallery.webp"
    alt: "Sección galería de recuerdos del inicio"
  - tag: "Producto · Acrylic Photo Prints"
    title: "Un configurador, no una ficha de producto"
    body: "Galería de imágenes, siete tamaños con precio en vivo, orientación vertical u horizontal, una zona de subida en alta resolución (guía de 300 DPI) y un botón de compra que se actualiza con el precio elegido. La imagen subida se convierte en datos del pedido que viajan por carrito y checkout."
    image: "/images/work/acrylicphotoprint/acrylic-product.webp"
    alt: "Página de producto Acrylic Photo Prints con selector de tamaño, orientación y zona de subida"
  - tag: "Producto · Beneficios del acrílico"
    title: "Especificaciones que justifican el precio"
    body: "Calidad cristalina, resistencia al desvanecimiento, efecto flotante e impresión en alta resolución, seguidos de reseñas de clientes y una llamada a la acción final en la misma página."
    image: "/images/work/acrylicphotoprint/acrylic-benefits.webp"
    alt: "Sección de beneficios y testimonios de Acrylic Photo Prints"
  - tag: "Producto · Collage Picture"
    title: "Constructor de cuatro pasos con foto por espacio"
    body: "Elige uno de seis diseños, sube fotos a cada espacio, escoge uno de ocho fondos y luego tamaño y checkout. Un contador de progreso y un botón de añadir al carrito deshabilitado (\"Upload 5 more photos to continue\") evitan que un diseño incompleto llegue al carrito."
    image: "/images/work/acrylicphotoprint/collage-product.webp"
    alt: "Constructor de Collage Picture con diseños, espacios de foto, fondos y tamaños"
---

## Resumen

AcrylicPhotoPrint vende impresiones fotográficas personalizadas sobre acrílico — cada pedido empieza con una imagen subida por el cliente, lo que la convierte primero en una plataforma de personalización de producto, y en segundo lugar en una tienda de e-commerce.

## Storefront y Páginas de Producto

El recorrido de arriba está construido con capturas completas del sitio en producción. El inicio dirige a cada visitante al producto correcto, y las dos páginas de producto son donde la plataforma demuestra su valor: la página de **Acrylic Photo Prints** funciona como un configurador (tamaño, orientación, subida en alta resolución, precio en vivo), mientras que **Collage Picture** es un constructor de cuatro pasos con subida de foto por espacio, fondos y tamaños, restringido para que un diseño incompleto no pueda añadirse al carrito.

## El Desafío

WooCommerce estándar asume un catálogo de productos fijo y predefinido. Esta tienda necesitaba que los clientes subieran sus propias imágenes, las previsualizaran sobre el producto, y que esa imagen viajara correctamente a través del carrito, el checkout y el cumplimiento del pedido — todo sin romper las propias suposiciones de WooCommerce sobre qué es un "producto".

## Mi Rol

Soy responsable de la plataforma de principio a fin: desarrollo de plugins a medida, personalización de WooCommerce, el pipeline de imágenes y — más recientemente — la reconstrucción arquitectónica del storefront.

## Arquitectura

Plugins a medida extienden los datos de producto, carrito y pedido de WooCommerce para transportar una imagen subida y sus metadatos de procesamiento junto a los datos estándar del producto. El storefront en sí fue reconstruido sobre **WordPress + Timber + Twig + Svelte + Tailwind CSS** — WordPress y WooCommerce siguen siendo el motor de contenido y comercio, Timber/Twig separan limpiamente la lógica PHP del markup, y Svelte maneja las partes interactivas de la experiencia (subida de imagen, vista previa en vivo, UI de personalización) sin convertir todo el frontend en una single-page app.

## Implementación Técnica

- Lógica de carrito y checkout a medida para validar y persistir las imágenes subidas durante todo el ciclo de vida del pedido.
- Un pipeline de procesamiento de imágenes para redimensionado, conversión de formato y salida lista para impresión, con assets servidos a través de Cloudflare frente a AWS.
- Integración de envíos que refleja las restricciones físicas de las impresiones enmarcadas en acrílico (peso, empaque, reglas de transportistas).
- Plantillas Twig reemplazando archivos de plantilla PHP heredados, dando al tema una separación mantenible entre lógica y presentación.

## Retos de Ingeniería

Los productos personalizados basados en imágenes rompen la mayoría de las suposiciones de rendimiento de WooCommerce: subidas de archivos grandes en el checkout, procesamiento de imágenes que no puede bloquear la solicitud, y páginas de producto que deben sentirse instantáneas a pesar de realizar trabajo real detrás de escena.

## Solución

El procesamiento de imágenes ocurre fuera del camino crítico del checkout, con Cloudflare gestionando la entrega de assets para que las imágenes procesadas carguen rápido sin importar la carga del origen. La UI de personalización impulsada por Svelte mantiene ágiles las partes interactivas mientras el resto de la página se renderiza en servidor a través de Timber/Twig.

## Rendimiento / Seguridad / Escalabilidad

AWS para almacenamiento y procesamiento, Cloudflare para caché y entrega, y una arquitectura de plantillas (Timber/Twig) que mantiene el código mantenible a medida que crecen el catálogo y las opciones de personalización.

### Medido con PageSpeed Insights

Resultados de laboratorio de la página de inicio en producción, ejecutados el 10 de noviembre de 2026 (Lighthouse, condiciones simuladas, así que los valores son estimaciones y varían entre ejecuciones):

| | Rendimiento | Accesibilidad | Prácticas recomendadas | SEO |
|---|---|---|---|---|
| Escritorio | 98 | 100 | 100 | 100 |
| Móvil | 77 | 100 | 100 | 100 |

Métricas de escritorio: First Contentful Paint 0,3 s, Largest Contentful Paint 0,6 s, Total Blocking Time 120 ms, Cumulative Layout Shift 0,009, Speed Index 0,8 s. La puntuación de rendimiento en móvil es la que tiene margen de mejora; el desglose de sus métricas no se capturó en esta ejecución. Aún no había datos de campo (usuarios reales) para la página.

<figure class="figure"><img src="/images/work/acrylicphotoprint/pagespeed-desktop.webp" alt="Informe de PageSpeed Insights en escritorio para acrylicphotoprint.com: Rendimiento 98, Accesibilidad 100, Prácticas recomendadas 100, SEO 100, con FCP 0,3 s, LCP 0,6 s, TBT 120 ms, CLS 0,009 e Speed Index 0,8 s" width="1400" height="1179" loading="lazy" /></figure>

<figure class="figure"><img src="/images/work/acrylicphotoprint/pagespeed-mobile.webp" alt="Informe de PageSpeed Insights en móvil para acrylicphotoprint.com: Rendimiento 77, Accesibilidad 100, Prácticas recomendadas 100, SEO 100" width="1400" height="1194" loading="lazy" /></figure>

## Resultados

Una plataforma de e-commerce en producción construida alrededor de un flujo de trabajo que WooCommerce no soporta de fábrica, corriendo ahora sobre una arquitectura que refleja las prácticas actuales de ingeniería en WordPress en vez de un tema monolítico heredado.

## Aprendizajes Clave

El proyecto demuestra el uso de WordPress como plataforma de ingeniería: una capa interactiva moderna en Svelte, una arquitectura mantenible de plantillas con Timber/Twig y lógica de comercio que extiende WooCommerce más allá de su modelo estándar de productos.
