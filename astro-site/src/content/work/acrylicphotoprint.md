---
name: "AcrylicPhotoPrint"
summary: "Custom product-personalization platform on WooCommerce, rebuilt on a modern WordPress + Timber + Twig + Svelte architecture."
role: "Sole engineer — platform architecture, custom plugins, and storefront rebuild"
stack: ["WooCommerce", "Custom Plugins", "Timber", "Twig", "Svelte", "Tailwind CSS", "AWS", "Cloudflare"]
liveUrl: "https://acrylicphotoprint.com"
featured: true
order: 0
results:
  - "Custom image upload and processing pipeline handling customer photos at checkout"
  - "Cart and checkout logic extended for personalized, made-to-order products"
  - "Rebuilt on Timber + Twig + Svelte for a modern, maintainable WordPress frontend"
---

## Overview

AcrylicPhotoPrint sells personalized acrylic photo prints — every order starts with a customer-uploaded image, which makes it a product-personalization platform first and an e-commerce store second.

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

This is the strongest evidence in the portfolio that WordPress, in the right hands, is a real engineering platform — capable of supporting a modern frontend (Svelte), a clean templating layer (Timber/Twig), and commerce logic well outside WooCommerce's defaults.
