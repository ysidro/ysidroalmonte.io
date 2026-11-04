---
name: "AcrylicPhotoPrint"
summary: "Custom product-personalization platform on WooCommerce, rebuilt on a modern WordPress + Timber + Twig + Svelte architecture."
role: "Sole engineer — platform architecture, custom plugins, and storefront rebuild"
stack: ["WooCommerce", "Custom Plugins", "Timber", "Twig", "Svelte", "Tailwind CSS", "AWS", "Cloudflare"]
liveUrl: "https://acrylicphotoprint.com"
heroImage: "/images/work/acrylicphotoprint/home-hero.jpg"
featured: true
order: 0
results:
  - "Custom image upload and processing pipeline handling customer photos at checkout"
  - "Cart and checkout logic extended for personalized, made-to-order products"
  - "Rebuilt on Timber + Twig + Svelte for a modern, maintainable WordPress frontend"
walkthroughTitle: "Page by page: how the storefront guides a purchase"
walkthroughLede: "Scroll through the live storefront. Each step is a real section of acrylicphotoprint.com and what it does for the customer."
walkthrough:
  - tag: "Home · Hero"
    title: "Promise and next action"
    body: "The hero states the product and the city (local Miami business), then offers two paths: upload a photo now, or view sizes and prices. A trust strip (secure checkout, local business, high-resolution printing, fast turnaround) answers the first objections before any scroll."
    image: "/images/work/acrylicphotoprint/home-hero.jpg"
    alt: "Acrylicphotoprint.com home page hero with headline, two calls to action and a framed acrylic print"
  - tag: "Home · Choose your print"
    title: "Product routing"
    body: "Four product families (acrylic, canvas, collage, personalized gifts) as entry points, so each visitor reaches the right configurator in one click instead of browsing a generic shop grid."
    image: "/images/work/acrylicphotoprint/home-choose.jpg"
    alt: "Home page section for choosing between acrylic, canvas, collage and personalized gifts"
  - tag: "Home · How it works"
    title: "The process, upfront"
    body: "A short explanation of the flow from upload to delivery. It sets expectations for a made-to-order product, where the customer supplies the image."
    image: "/images/work/acrylicphotoprint/home-how.jpg"
    alt: "Home page how-it-works section"
  - tag: "Home · Best sellers"
    title: "Merchandising from the catalog"
    body: "A best-sellers grid surfaces the products that already convert, linking straight into the matching product page."
    image: "/images/work/acrylicphotoprint/home-best.jpg"
    alt: "Home page best sellers product grid"
  - tag: "Home · Acrylic vs. canvas"
    title: "Comparison that answers the buying question"
    body: "A side-by-side of the two materials. It helps undecided buyers choose and keeps them on the site instead of leaving to research."
    image: "/images/work/acrylicphotoprint/home-vs.jpg"
    alt: "Home page comparison between acrylic and canvas prints"
  - tag: "Home · Gallery and FAQ"
    title: "Social proof and objection handling"
    body: "A gallery of finished prints builds trust in print quality, and the FAQ answers common questions before they turn into support emails."
    image: "/images/work/acrylicphotoprint/home-gallery.jpg"
    alt: "Home page gallery of memories section"
  - tag: "Product · Acrylic Photo Prints"
    title: "A configurator, not a product page"
    body: "Image gallery, seven sizes with live prices, portrait or landscape orientation, a high-resolution upload dropzone (300 DPI guidance) and a purchase button that updates with the chosen price. The uploaded image becomes order data that travels through cart and checkout."
    image: "/images/work/acrylicphotoprint/acrylic-product.jpg"
    alt: "Acrylic Photo Prints product page with size selector, orientation toggle and upload area"
  - tag: "Product · Acrylic benefits"
    title: "Specs that justify the price"
    body: "Crystal-clear quality, fade-resistance, the floating effect and high-resolution printing, followed by customer reviews and a closing call to action on the same page."
    image: "/images/work/acrylicphotoprint/acrylic-benefits.jpg"
    alt: "Acrylic Photo Prints benefits and testimonials section"
  - tag: "Product · Collage Picture"
    title: "Four-step builder with per-slot photos"
    body: "Choose one of six layouts, upload photos into each slot, pick one of eight backgrounds, then size and checkout. A progress counter and a disabled add-to-cart button (\"Upload 5 more photos to continue\") keep an incomplete design from reaching the cart."
    image: "/images/work/acrylicphotoprint/collage-product.jpg"
    alt: "Collage Picture builder with layouts, photo slots, backgrounds and size selection"
---

## Overview

AcrylicPhotoPrint sells personalized acrylic photo prints — every order starts with a customer-uploaded image, which makes it a product-personalization platform first and an e-commerce store second.

## Storefront and Product Pages

The walkthrough above is built from full-page captures of the live site. The home page routes visitors to the right product, and the two product pages are where the platform earns its keep: the **Acrylic Photo Prints** page behaves like a configurator (size, orientation, high-resolution upload, live price), while the **Collage Picture** page is a four-step builder with per-slot photo upload, backgrounds and sizes, gated so an incomplete design cannot be added to the cart.

## The Challenge

Stock WooCommerce assumes a fixed, pre-defined product catalog. This store needed customers to upload their own images, preview them on the product, and have that image travel correctly through cart, checkout, and fulfillment — all without breaking WooCommerce's own assumptions about what a "product" is.

## My Role

I own the platform end to end: custom plugin development, WooCommerce customization, the image pipeline, and — more recently — the architectural rebuild of the storefront.

## Architecture

Custom plugins extend WooCommerce's product, cart, and order data to carry an uploaded image and its processing metadata alongside the standard product data. The storefront itself was rebuilt on **WordPress + Timber + Twig + Svelte + Tailwind CSS** — WordPress and WooCommerce remain the content and commerce engine, Timber/Twig cleanly separate PHP logic from markup, and Svelte handles the interactive parts of the experience (image upload, live preview, personalization UI) without turning the whole frontend into a single-page app.

## Technical Implementation

- Custom cart and checkout logic to validate and persist uploaded images through the full order lifecycle.
- An image processing pipeline for resizing, format conversion, and print-ready output, with assets served through Cloudflare in front of AWS.
- Shipping integration reflecting the physical constraints of framed acrylic prints (weight, packaging, carrier rules).
- Twig templates replacing legacy PHP template files, giving the theme a maintainable separation between logic and presentation.

## Engineering Challenges

Personalized, image-based products break most WooCommerce performance assumptions: large file uploads at checkout, image processing that can't block the request, and product pages that need to feel instant despite doing real work behind the scenes.

## Solution

Image processing happens off the critical checkout path, with Cloudflare handling asset delivery so processed images load fast regardless of origin load. The Svelte-driven personalization UI keeps the interactive parts snappy while the rest of the page stays server-rendered through Timber/Twig.

## Performance / Security / Scalability

AWS for storage and processing, Cloudflare for caching and delivery, and a template architecture (Timber/Twig) that keeps the codebase maintainable as the catalog and customization options grow.

## Results

A production e-commerce platform built around a workflow WooCommerce doesn't support out of the box, now running on an architecture that reflects current WordPress engineering practice rather than a legacy monolithic theme.

## Key Takeaways

The project demonstrates WordPress as an engineering platform: a modern interactive layer in Svelte, a maintainable Timber/Twig template architecture, and commerce logic that extends WooCommerce beyond its standard product model.
