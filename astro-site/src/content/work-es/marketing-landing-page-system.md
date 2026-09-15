---
name: "Marketing Landing Page System"
summary: "Sistema de componentes WordPress reutilizables para landing pages de campaña enfocadas en conversión."
role: "Ingeniero único — arquitectura de componentes y rendimiento"
stack: ["WordPress", "PHP", "JavaScript", "ACF", "HTML5", "CSS3"]
featured: true
order: 3
results:
  - "30+ landing pages lanzadas en campañas de medios pagados"
  - "Soportó más de $2M en inversión publicitaria digital"
  - "Mejoras de rendimiento de hasta 80%, con puntajes de PageSpeed de 90+"
---

## Resumen

Los clientes de agencia que corrían campañas de medios pagados necesitaban landing pages nuevas constantemente — a menudo con plazos de campaña ajustados — sin sacrificar velocidad de carga ni consistencia de marca en docenas de páginas.

## El Desafío

Construir cada landing page desde cero no escalaba: era lento, inconsistente, y hacía probables las regresiones de rendimiento a medida que se lanzaban más páginas bajo presión de tiempo. El sistema necesitaba hacer que las páginas nuevas fueran rápidas de producir *y* rápidas de cargar.

## Mi Rol

Diseñé y construí el sistema de componentes reutilizables a partir del cual se ensamblaba cada landing page posterior, y fui responsable del presupuesto de rendimiento de todo el conjunto.

## Arquitectura

Una librería de componentes WordPress reutilizables impulsados por ACF (variantes de hero, bloques de oferta, formularios, layouts de testimonios) permitía a los equipos de campaña ensamblar páginas nuevas a partir de un conjunto definido de bloques listos para producción, en vez de escribir plantillas nuevas por campaña.

## Implementación Técnica

- Grupos de campos ACF definen el contenido editable de cada componente, manteniendo el sistema utilizable por personas no desarrolladoras una vez construido.
- El CSS/JS compartido se carga una sola vez y se cachea entre páginas en vez de duplicarse por plantilla.
- Cada componente se construyó y auditó contra un presupuesto de rendimiento, no solo contra una especificación visual.

## Retos de Ingeniería

Los componentes reutilizables tienden a acumular CSS/JS sin usar con el tiempo, a medida que se agregan más variantes. Sin control, eso erosiona exactamente la ventaja de rendimiento que el sistema existe para proteger.

## Solución

Estilos con alcance por componente y carga condicional de assets (el CSS/JS de un componente solo carga en las páginas que lo usan) mantuvieron el peso por página proporcional a lo que la página realmente necesitaba, en vez de crecer con el tamaño de toda la librería.

## Rendimiento / Seguridad / Escalabilidad

Optimización de imágenes, caché y refactorización de código en todo el sistema impulsaron mejoras de rendimiento de hasta 80%, manteniendo puntajes de Google PageSpeed de 90+ en la mayoría de las páginas construidas sobre él — crítico dado que las páginas existían específicamente para convertir tráfico pagado.

## Resultados

30+ landing pages lanzadas en campañas que soportaron más de $2M en inversión publicitaria digital, producidas más rápido que builds individuales y manteniendo un estándar de rendimiento consistente.

## Aprendizajes Clave

Este proyecto muestra product thinking aplicado a la ingeniería en WordPress: el entregable no fue una página, fue un sistema que hizo que cada página futura fuera más barata de construir y más rápida de cargar.
