// ─────────────────────────────────────────────────────────────
// PER-PRODUCT CONFIG — each of the 5 sites customizes ONLY this file.
// Everything else (SEO head, sitemap, GA4, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  // Identity
  name: 'Idea Validator',
  organization: 'Sreenivas Sadhu',
  tagline: 'Paste your startup idea. Get a brutally honest market score in 60 seconds.',

  // Hosting (GitHub Pages project site)
  domain: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/idea-validator', // MUST match the repo name, e.g. '/llm-eval-trace'

  // SEO
  title: 'Idea Validator — Score & Validate Your Startup Idea with AI',
  description:
    'Idea Validator researches your market, competitors and demand signals, then scores your startup idea on viability, differentiation and timing — with cited sources.',
  keywords: [
    'startup idea validator',
    'validate business idea',
    'market research AI',
    'idea scoring tool',
    'is my startup idea good',
  ],
  ogImage: '/og.png', // 1200x630, lives in /public
  twitter: '', // e.g. '@handle' (optional)

  // Analytics — real GA4 Measurement ID goes here (or leave placeholder)
  ga4Id: 'G-XXXXXXXXXX',

  // Structured data
  jsonLdType: 'SoftwareApplication', // or 'WebApplication'
  appCategory: 'BusinessApplication',
  price: '0', // '0' => free; used in Offer schema
};

// Absolute canonical URL for the homepage (used in <head> + JSON-LD)
export const canonicalRoot = `${site.domain}${site.base}`;
