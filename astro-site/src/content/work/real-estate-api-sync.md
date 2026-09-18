---
name: "Real Estate API Sync"
summary: "Custom WordPress integration that keeps property listings synchronized from external real estate APIs."
role: "Sole engineer — architecture, implementation, and maintenance"
stack: ["PHP", "WordPress", "WP REST API", "Custom Post Types", "MySQL"]
githubUrl: "https://github.com/ysidro/real-estate-sync/tree/main"
heroImage: "/images/work/diagrams/real-estate-api-sync.svg"
featured: true
order: 1
results:
  - "Structured Custom Post Types replaced manual listing entry across the platform"
  - "Improved data consistency between the external source and production content"
  - "Reduced editorial workload on listing management"
---

## Overview

A real estate platform needed property listings to stay accurate without manual re-entry every time the source data changed — prices, availability, and property details all needed to reflect the external system inside WordPress.

## The Challenge

Real estate data changes constantly and comes from a source WordPress doesn't understand natively. The integration had to keep listings current without corrupting existing content, without degrading site performance during sync runs, and without creating duplicate or orphaned entries when properties were added, updated, or removed upstream.

## My Role

I designed and built the entire integration end to end: the data model inside WordPress, the sync logic, and the operational tooling to monitor it.

## Architecture

Property listings live as Custom Post Types with structured fields mapped directly to the external API's schema. A dedicated sync layer handles fetching, diffing, and writing — it only touches fields that changed, rather than overwriting entire posts on every run, which keeps editorial overrides and SEO metadata intact between syncs.

## Technical Implementation

- PHP service classes encapsulate the API client, the mapping layer, and the write layer separately, so any of the three can change without touching the others.
- WP REST API endpoints expose synced data to other internal tools.
- MySQL indexes on the fields used for matching keep diffing fast as the listing count grows.

## Engineering Challenges

The hardest problem wasn't fetching the data — it was reconciliation. Properties could be renamed, re-listed under a new ID, or temporarily removed and reinstated upstream, and naive syncing would have created duplicate posts or silently dropped listings.

## Solution

A matching strategy based on a stable external identifier (not title or slug) made reconciliation deterministic. Failed sync runs log and retry instead of partially applying changes, so a broken run never leaves the site in an inconsistent state.

## Performance / Security / Scalability

Sync runs are batched and rate-limited against the external API, and scheduled during low-traffic windows so they never compete with production requests for database resources.

## Results

The integration replaced recurring manual listing entry with scheduled synchronization, preserved editorial overrides, and added retry and logging behavior for failed runs.

## Key Takeaways

This project demonstrates backend engineering inside WordPress that goes beyond theming — data modeling, integration design, and long-term maintainability under a schema that isn't under my control.
