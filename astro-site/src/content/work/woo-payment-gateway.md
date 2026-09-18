---
name: "Woo Payment Gateway"
summary: "Custom WooCommerce payment gateway built for the Dominican Republic market."
role: "Sole engineer — architecture, implementation, and security review"
stack: ["PHP", "WooCommerce", "JavaScript", "Payment APIs", "WordPress Hooks"]
githubUrl: "https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md"
heroImage: "/images/work/diagrams/woo-payment-gateway.svg"
featured: true
order: 2
results:
  - "Checkout supports a payment processor with no official WooCommerce gateway"
  - "Transaction workflow validated against the processor's sandbox and production environments"
  - "Server-confirmed payment states replace trust in client-side redirects"
---

## Overview

A client needed to accept payments through a processor common in the Dominican Republic market that had no existing WooCommerce integration — the default gateways didn't support it, and no reliable plugin existed.

## The Challenge

WooCommerce's checkout flow assumes a fairly standard request/response payment cycle. This processor's API had its own transaction lifecycle, validation rules, and webhook-based confirmation, none of which mapped cleanly onto WooCommerce's built-in gateway assumptions.

## My Role

I built the gateway from scratch as a custom WooCommerce payment gateway class, including checkout UI, server-side validation, and transaction handling.

## Architecture

The gateway extends `WC_Payment_Gateway`, hooking into WooCommerce's checkout process to collect and validate payment details before the order is placed. Transaction confirmation is handled asynchronously via webhook, with order status updated only after the processor confirms the transaction server-side — never based on the client-side response alone.

## Technical Implementation

- Custom fields added to the checkout via WooCommerce hooks, with client-side validation in JavaScript backed by server-side re-validation (never trusting the client).
- A webhook endpoint verifies the payment processor's signature before updating order status, protecting against forged confirmation requests.
- Failed and pending transactions are handled as distinct order states so support staff can tell the difference between "declined" and "awaiting confirmation."

## Engineering Challenges

The riskiest part of any payment integration is trusting the wrong signal. Early in development, relying on the checkout page's redirect response to mark an order "paid" would have been forgeable — a customer could reach the confirmation page without the processor ever confirming payment.

## Solution

Order status changes are driven exclusively by the server-to-server webhook, validated against the processor's signature, decoupling "the customer reached the thank-you page" from "the payment is confirmed."

## Performance / Security / Scalability

Webhook signature verification, idempotent webhook handling to avoid double-processing retried callbacks, and no sensitive payment data stored in WordPress beyond what's required for order records.

## Results

The store went live with a payment method required by its market. Order status is based on verified server-to-server confirmation, while pending and failed transactions remain distinguishable for support staff.

## Key Takeaways

The project demonstrates transaction integrity, idempotent webhook handling, server-side validation, and practical use of WooCommerce's extension points.
