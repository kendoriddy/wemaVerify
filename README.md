# Wema Verify

**Don't trust the receipt. Verify the transaction.**

Hackathon prototype for **Hackaholics 7.0 by Wema Bank @ University of Ibadan**.

> **Wema Verify — Hackathon Prototype** · Seeded demo data only · Not a live banking product.

## Problem

Merchants often release goods based on a transfer screenshot or “I have paid” claim. Screenshots can be forged. Settling against a visual alone is risky — especially for small traders who decide in seconds.

## Solution

Wema Verify lets a merchant enter a short verification code from a Wema transfer and check it against transaction records before releasing goods.

- **Payment Verified** — successful match with clear amount, parties, time, and reference  
- **Transaction Not Found** — no match (pause and confirm another way; never “definitely fraud”)  
- **Check Transaction Details** — code is real but status/receiver/amount may not match expectations  

## V1 scope

- Wema-to-Wema verification UX (prototype)
- Local seeded transactions (no real banking API, auth, DB, or payments)
- Landing, verify flow, sample receipt, and a **future** WhatsApp concept screen
- Mobile-first merchant experience

**Out of scope for this prototype:** real Wema API, authentication, multi-bank rails, WhatsApp messaging, fraud scoring dashboards.

## How it works

1. Customer claims they paid and shares a verification code (e.g. `WMA-72K91`).
2. Merchant enters the code in Wema Verify.
3. The app normalizes the code and looks it up in the seed repository.
4. Merchant sees verified / not found / check details — then decides whether to release goods.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui
- Manrope typeface
- Local TypeScript modules for verification (no backend database)

## Mock architecture

```
UI → verification service → seeded transaction repository
```

| Layer | Path | Role |
| --- | --- | --- |
| UI | `src/app/*`, `src/components/*` | Pages and merchant UX |
| Verification service | `src/lib/verification.ts` | Normalize code, return result |
| Seed repository | `src/data/transactions.ts` | Prototype transaction records |
| Types | `src/types/index.ts` | Shared contracts |

`verifyTransaction(code)`:

1. Normalize (trim, uppercase, collapse spaces/hyphens)
2. Search the seed list
3. Return `{ status: "verified" | "not_found" | "warning", transaction?, warningReason? }`

> Production would replace the seed repository with an **authenticated Wema Bank API** lookup. The verification service interface is intentionally thin so that swap stays localized.

## Future integration

- Authenticated merchant / bank API for live transaction lookup
- Codes surfaced on real Wema transfer confirmations
- WhatsApp / USSD channels (see `/whatsapp` concept)
- Multi-bank expansion on the product roadmap (not in V1)

## Roadmap (not implemented)

| Version | Direction |
| --- | --- |
| V2 | Multi-bank code lookup via secure partner rails |
| V3 | Merchant profiles and saved expected receivers |
| V4 | WhatsApp / USSD verification channels |
| V5 | Fraud-pattern insights for Wema risk teams |

## Setup

```bash
npm install
npm run dev
```

Dev server defaults to **http://127.0.0.1:4317**.

```bash
npm run build
npm start
```

Vercel-ready: standard Next.js app with no required env vars for the prototype.

## Demo codes

| Code | Expected result |
| --- | --- |
| `WMA-72K91` | **Payment Verified** — ₦50,000, John Adeyemi → Adeola Stores, 8 Oct 2026 2:14 PM, WEMA-839201 |
| `WMA-FAKE1` | **Transaction Not Found** |
| `WMA-OTHER1` | **Check Transaction Details** (wrong receiver) |
| `WMA-PEND1` | **Check Transaction Details** (pending) |

Also try codes with spaces or lowercase — normalization accepts them.

## Live demo

_Placeholder — deploy this repo to Vercel and paste the public URL here._

Local: [http://127.0.0.1:4317](http://127.0.0.1:4317)

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Landing |
| `/verify` | Enter code / view results |
| `/receipt` | Customer receipt demo |
| `/whatsapp` | Future WhatsApp concept |

## Disclaimer

Custom concept mark only — not the official Wema Bank logo. All transactions are fictional seed data for Hackaholics 7.0.
