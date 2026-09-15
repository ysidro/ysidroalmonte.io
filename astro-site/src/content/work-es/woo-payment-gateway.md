---
name: "Woo Payment Gateway"
summary: "Pasarela de pago a medida para WooCommerce, construida para el mercado de República Dominicana."
role: "Ingeniero único — arquitectura, implementación y revisión de seguridad"
stack: ["PHP", "WooCommerce", "JavaScript", "Payment APIs", "WordPress Hooks"]
githubUrl: "https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md"
heroImage: "/images/work/diagrams/woo-payment-gateway.svg"
featured: true
order: 2
results:
  - "El checkout soporta un procesador de pagos sin pasarela oficial de WooCommerce"
  - "Flujo de transacciones validado contra los entornos sandbox y producción del procesador"
  - "Lanzado en producción sin un solo fallo de checkout reportado"
---

## Resumen

Un cliente necesitaba aceptar pagos a través de un procesador común en el mercado de República Dominicana que no tenía integración existente con WooCommerce — las pasarelas por defecto no lo soportaban, y no existía un plugin confiable.

## El Desafío

El flujo de checkout de WooCommerce asume un ciclo de pago request/response bastante estándar. La API de este procesador tenía su propio ciclo de vida de transacción, reglas de validación y confirmación basada en webhooks, nada de lo cual encajaba limpiamente con las suposiciones integradas de WooCommerce sobre las pasarelas de pago.

## Mi Rol

Construí la pasarela desde cero como una clase de pasarela de pago a medida para WooCommerce, incluyendo la UI del checkout, la validación en servidor y el manejo de transacciones.

## Arquitectura

La pasarela extiende `WC_Payment_Gateway`, enganchándose en el proceso de checkout de WooCommerce para recolectar y validar los datos de pago antes de crear el pedido. La confirmación de la transacción se maneja de forma asíncrona vía webhook, actualizando el estado del pedido solo después de que el procesador confirma la transacción en el servidor — nunca basándose únicamente en la respuesta del lado del cliente.

## Implementación Técnica

- Campos a medida agregados al checkout mediante hooks de WooCommerce, con validación en el cliente en JavaScript respaldada por re-validación en el servidor (nunca confiando en el cliente).
- Un endpoint de webhook verifica la firma del procesador de pagos antes de actualizar el estado del pedido, protegiendo contra solicitudes de confirmación falsificadas.
- Las transacciones fallidas y pendientes se manejan como estados de pedido distintos, para que el equipo de soporte pueda diferenciar entre "rechazado" y "esperando confirmación".

## Retos de Ingeniería

La parte más riesgosa de cualquier integración de pagos es confiar en la señal equivocada. Al principio del desarrollo, depender de la respuesta de redirección de la página de checkout para marcar un pedido como "pagado" habría sido falsificable — un cliente podría llegar a la página de confirmación sin que el procesador jamás confirmara el pago.

## Solución

Los cambios de estado del pedido están impulsados exclusivamente por el webhook servidor-a-servidor, validado contra la firma del procesador, desacoplando "el cliente llegó a la página de agradecimiento" de "el pago está confirmado".

## Rendimiento / Seguridad / Escalabilidad

Verificación de firma de webhooks, manejo idempotente de webhooks para evitar el doble procesamiento de callbacks reintentados, y ningún dato sensible de pago almacenado en WordPress más allá de lo requerido para los registros de pedido.

## Resultados

La tienda salió a producción aceptando un método de pago que su mercado necesitaba, con un flujo de checkout que ha corrido sin un solo fallo reportado desde el lanzamiento.

## Aprendizajes Clave

Esta es la evidencia más clara de seniority en PHP dentro del portafolio — no theming, sino integridad transaccional, diseño consciente de la seguridad y un conocimiento profundo de los puntos de extensión de WooCommerce.
