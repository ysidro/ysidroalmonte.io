---
name: "AcrylicPhotoPrint"
summary: "Plataforma de personalización de producto a medida sobre WooCommerce, reconstruida con una arquitectura moderna WordPress + Timber + Twig + Svelte."
role: "Ingeniero único — arquitectura de plataforma, plugins a medida y reconstrucción del storefront"
stack: ["WooCommerce", "Custom Plugins", "Timber", "Twig", "Svelte", "Tailwind CSS", "AWS", "Cloudflare"]
liveUrl: "https://acrylicphotoprint.com"
heroImage: "/images/work/featured/acrylic-photo-print.png"
featured: true
order: 0
results:
  - "Pipeline de subida y procesamiento de imágenes gestionando fotos de clientes en el checkout"
  - "Lógica de carrito y checkout extendida para productos personalizados hechos a pedido"
  - "Reconstruido sobre Timber + Twig + Svelte para un frontend WordPress moderno y mantenible"
---

## Resumen

AcrylicPhotoPrint vende impresiones fotográficas personalizadas sobre acrílico — cada pedido empieza con una imagen subida por el cliente, lo que la convierte primero en una plataforma de personalización de producto, y en segundo lugar en una tienda de e-commerce.

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

## Resultados

Una plataforma de e-commerce en producción construida alrededor de un flujo de trabajo que WooCommerce no soporta de fábrica, corriendo ahora sobre una arquitectura que refleja las prácticas actuales de ingeniería en WordPress en vez de un tema monolítico heredado.

## Aprendizajes Clave

El proyecto demuestra el uso de WordPress como plataforma de ingeniería: una capa interactiva moderna en Svelte, una arquitectura mantenible de plantillas con Timber/Twig y lógica de comercio que extiende WooCommerce más allá de su modelo estándar de productos.
