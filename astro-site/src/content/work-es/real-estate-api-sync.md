---
name: "Real Estate API Sync"
summary: "Integración WordPress a medida que mantiene sincronizados los listados de propiedades desde APIs inmobiliarias externas."
role: "Ingeniero único — arquitectura, implementación y mantenimiento"
stack: ["PHP", "WordPress", "WP REST API", "Custom Post Types", "MySQL"]
githubUrl: "https://github.com/ysidro/real-estate-sync/tree/main"
heroImage: "/images/work/diagrams/real-estate-api-sync.svg"
featured: true
order: 1
results:
  - "Custom Post Types estructurados reemplazaron la entrada manual de listados en toda la plataforma"
  - "Mejoró la consistencia de datos entre la fuente externa y el contenido en producción"
  - "Redujo la carga de trabajo editorial en la gestión de listados"
walkthroughTitle: "Recorrido: de la API externa al listado"
walkthroughLede: "Recorre la arquitectura de sincronización. El diagrama queda fijo e ilumina la parte que explica cada paso."
walkthrough:
  - tag: "Origen"
    title: "Datos que WordPress no entiende"
    body: "Precios, disponibilidad y detalles de propiedades viven en una API inmobiliaria externa. Cambian constantemente y llegan en un esquema que no controlo."
    focus: [0]
  - tag: "Capa de sincronización"
    title: "Obtener, comparar, escribir"
    body: "Una capa de sincronización en PHP obtiene, compara y escribe. Solo toca los campos que cambiaron en lugar de sobrescribir posts completos, así los ajustes editoriales y el SEO sobreviven a cada ejecución. Cliente de API, mapeo y escritura son clases separadas."
    focus: [1]
  - tag: "Reconciliación"
    title: "Lo difícil: emparejar"
    body: "Las propiedades pueden renombrarse, republicarse con otro ID o retirarse temporalmente. Emparejar por un identificador externo estable, no por título o slug, hace la reconciliación determinística y evita duplicados y posts huérfanos."
    focus: [1]
  - tag: "WordPress"
    title: "Custom Post Types estructurados"
    body: "Los listados viven como Custom Post Types con campos estructurados mapeados al esquema externo. Endpoints de la WP REST API exponen los datos sincronizados a otras herramientas internas."
    focus: [2]
  - tag: "Base de datos"
    title: "Indexada para emparejar rápido"
    body: "Los índices MySQL en los campos usados para emparejar mantienen rápida la comparación a medida que crece el número de listados."
    focus: [3]
  - tag: "Ruta de fallo"
    title: "Reintentar, nunca aplicar a medias"
    body: "Una ejecución fallida registra y reintenta en vez de aplicar cambios a medias, así el sitio nunca queda inconsistente. Las ejecuciones van en lotes, con límite de tasa y en ventanas de poco tráfico."
    focus: [4]
---

## Resumen

Una plataforma inmobiliaria necesitaba que sus listados de propiedades se mantuvieran precisos sin re-entrada manual cada vez que cambiaban los datos de origen — precios, disponibilidad y detalles de propiedad debían reflejar el sistema externo dentro de WordPress.

## El Desafío

Los datos inmobiliarios cambian constantemente y provienen de una fuente que WordPress no entiende de forma nativa. La integración debía mantener los listados actualizados sin corromper el contenido existente, sin degradar el rendimiento del sitio durante las sincronizaciones, y sin crear entradas duplicadas o huérfanas cuando se agregaban, actualizaban o eliminaban propiedades en el origen.

## Mi Rol

Diseñé y construí toda la integración de principio a fin: el modelo de datos dentro de WordPress, la lógica de sincronización y las herramientas operativas para monitorearla.

## Arquitectura

Los listados de propiedades viven como Custom Post Types con campos estructurados mapeados directamente al esquema de la API externa. Una capa de sincronización dedicada se encarga de obtener, comparar y escribir los datos — solo toca los campos que cambiaron, en vez de sobrescribir publicaciones completas en cada ejecución, lo que mantiene intactas las anulaciones editoriales y los metadatos de SEO entre sincronizaciones.

## Implementación Técnica

- Clases de servicio en PHP que encapsulan por separado el cliente de la API, la capa de mapeo y la capa de escritura, de modo que cualquiera de las tres puede cambiar sin afectar a las demás.
- Endpoints de WP REST API que exponen los datos sincronizados a otras herramientas internas.
- Índices de MySQL en los campos usados para el emparejamiento, manteniendo la comparación rápida a medida que crece el número de listados.

## Retos de Ingeniería

El problema más difícil no fue obtener los datos — fue la reconciliación. Las propiedades podían renombrarse, volver a listarse bajo un nuevo ID, o eliminarse y reinstalarse temporalmente en el origen, y una sincronización ingenua habría creado publicaciones duplicadas o eliminado listados en silencio.

## Solución

Una estrategia de emparejamiento basada en un identificador externo estable (no el título o el slug) hizo que la reconciliación fuera determinista. Las ejecuciones de sincronización fallidas registran el error y reintentan en vez de aplicar cambios parcialmente, de modo que una ejecución rota nunca deja el sitio en un estado inconsistente.

## Rendimiento / Seguridad / Escalabilidad

Las ejecuciones de sincronización se procesan en lotes y con límite de tasa contra la API externa, y se programan durante ventanas de bajo tráfico para que nunca compitan con las solicitudes de producción por recursos de base de datos.

## Resultados

La integración sustituyó la entrada manual recurrente de listados por sincronización programada, preservó las modificaciones editoriales y agregó reintentos y registro de errores para las ejecuciones fallidas.

## Aprendizajes Clave

Este proyecto demuestra ingeniería de backend dentro de WordPress que va más allá del theming — modelado de datos, diseño de integraciones y mantenibilidad a largo plazo bajo un esquema que no está bajo mi control.
