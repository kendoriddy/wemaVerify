You are a senior product engineer, UX designer and frontend architect.

Build a polished hackathon MVP called:

# Wema Verify

Tagline:
"Don't trust the receipt. Verify the transaction."

This is a prototype for Hackaholics 7.0 by Wema Bank at the University of Ibadan.

The product solves a simple problem:

Customers can present fake, edited or misleading payment receipts/screenshots and claim that they have paid a merchant.

Wema Verify allows a Wema merchant to enter a verification code associated with a Wema-to-Wema transaction and immediately see the authoritative transaction details recorded by Wema.

The product should feel like a serious fintech product that could realistically become part of the Wema ecosystem.

IMPORTANT:
This is ONLY a hackathon prototype.

There is:

- NO real banking API
- NO real Wema API
- NO real authentication system
- NO real database
- NO actual payment processing
- NO production banking integration

All transaction data, verification codes, users and results MUST be seeded locally in the application.

The application should nevertheless be architected in a way that makes it obvious how a real Wema backend/API could replace the mock data later.

==================================================

1. # CORE PRODUCT IDEA

The central product principle is:

"Don't verify the receipt. Verify the transaction."

A receipt or screenshot is only a customer's claim.

The Wema transaction record is the source of truth.

Example:

Customer:
"Madam, I've paid ₦50,000."

Customer provides verification code:

WMA-72K91

Merchant enters the code into Wema Verify.

The system checks its seeded transaction data and returns:

VERIFIED

Amount: ₦50,000
Sender: John A.
Receiver: Adeola Stores
Date: 8 October 2026
Time: 2:14 PM
Status: Successful
Transaction reference: WEMA-839201

The merchant can now compare the actual transaction details against what the customer is claiming.

================================================== 2. V1 SCOPE
==================================================

VERY IMPORTANT:

V1 supports ONLY:

Wema → Wema transactions.

The reason is intentional.

When both the sender and receiver are Wema customers, Wema has authoritative visibility of the transaction on both sides.

This allows Wema to verify:

- whether the transaction exists
- amount
- sender
- receiver
- date
- time
- transaction status
- transaction reference

Do NOT attempt to build interbank verification in V1.

A future V2 could extend the verification infrastructure to payments originating from other Nigerian banks.

The UI can mention this as a roadmap item, but V2 must NOT be implemented.

Possible roadmap copy:

"V1 focuses on Wema-to-Wema transactions. Future versions can extend verification to interbank payments."

================================================== 3. PRIMARY USERS
==================================================

Primary user:

A Wema merchant/business owner who wants to quickly determine whether a customer's claimed payment actually happened.

Typical scenarios:

- Market/shop merchant
- POS operator
- Restaurant
- Fashion seller
- Instagram seller
- WhatsApp seller
- Small business
- Service provider
- Dispatch/business delivery operator

The product must be extremely easy for someone who is not technical.

The mental model should be:

"Customer says they paid → I enter their code → Wema tells me the truth."

================================================== 4. CORE USER FLOW
==================================================

LANDING / HOME

Show:

Wema Verify

"Don't trust the receipt. Verify the transaction."

Supporting text:

"Confirm Wema payments directly from the transaction record before releasing goods or services."

Primary CTA:

[Verify a Payment]

Secondary CTA:

[How It Works]

There should also be a subtle example/demo area showing:

Customer says:
"I've paid."

Merchant:
"What's your verification code?"

Customer:
"WMA-72K91"

Merchant verifies.

Result:
"Payment confirmed."

================================================== 5. VERIFY PAYMENT FLOW
==================================================

Screen:

Verify a Wema Payment

Instruction:

"Enter the verification code shown on the customer's Wema payment notification or receipt."

Input:

Verification code

Placeholder:

WMA-72K91

Primary button:

[Verify Payment]

Add a small helper:

"V1 currently supports Wema-to-Wema transactions."

Allow codes to be typed with or without spaces/hyphens.

Normalize input before searching.

Example:

WMA72K91

should resolve to:

WMA-72K91

================================================== 6. VERIFICATION RESULT STATES
==================================================

There are THREE important states.

---

## STATE 1: VERIFIED

Large green success indicator.

Title:

Payment Verified

Supporting text:

"This transaction was found in Wema's transaction records."

Show a transaction card:

Amount
₦50,000.00

Status
Successful

From
John Adeyemi

To
Adeola Stores

Date
8 October 2026

Time
2:14 PM

Transaction Reference
WEMA-839201

Verification Code
WMA-72K91

Then show:

"Transaction details above are based on the Wema transaction record."

Primary CTA:

[Verify Another Payment]

Secondary action:

[Copy Transaction Details]

Do not expose unnecessary sensitive information.

Use realistic masking where appropriate.

---

## STATE 2: NOT FOUND

Large red/error indicator.

Title:

Payment Not Found

Message:

"We couldn't find a transaction associated with this verification code."

Supporting warning:

"The customer may have provided an invalid code, or the transaction may not exist."

Important CTA:

[Try Again]

Also show:

"Do not release goods or services until payment is confirmed."

Do NOT say:

"This is definitely fraud."

The system only knows that it could not find the transaction.

---

## STATE 3: TRANSACTION FOUND — DETAILS DON'T MATCH

This is an important demo state.

The code is legitimate, but the actual transaction details reveal that it is not the payment the merchant expected.

Example:

Customer claims:

"I paid Adeola Stores ₦50,000."

Verification result:

Transaction Found

Amount:
₦50,000

Actual Receiver:
John's Electronics

Date:
7 October 2026

Time:
12:41 PM

Status:
Successful

Show a prominent amber warning:

"Check Transaction Details"

Supporting text:

"This verification code belongs to a real Wema transaction, but the transaction details may not match the payment you're expecting."

This demonstrates an important point:

A legitimate verification code can still be irrelevant to the merchant.

Wema Verify tells the merchant what ACTUALLY happened.

================================================== 7. SEEDED DATA
==================================================

Do NOT use a database.

Create a clean local data layer such as:

/src/data/transactions.ts

or equivalent.

Create at least 8-12 realistic seeded transactions.

Every transaction should contain:

id
verificationCode
transactionReference
senderName
senderAccountMasked
receiverName
receiverAccountMasked
amount
currency
date
time
status
type
description

Example:

{
id: "txn_001",
verificationCode: "WMA-72K91",
transactionReference: "WEMA-839201",
senderName: "John Adeyemi",
senderAccountMasked: "\***\*4821",
receiverName: "Adeola Stores",
receiverAccountMasked: "\*\***1904",
amount: 50000,
currency: "NGN",
date: "2026-10-08",
time: "14:14",
status: "successful",
type: "transfer",
description: "Payment for goods"
}

Create different scenarios.

SEED 1:
Successful legitimate payment.

SEED 2:
Another successful legitimate payment.

SEED 3:
Fake/non-existent verification code scenario.

SEED 4:
Real transaction where receiver is different from the merchant checking it.

SEED 5:
Wrong amount scenario.

SEED 6:
Pending transaction.

SEED 7:
Failed transaction.

SEED 8:
Reversed transaction.

SEED 9:
Recent small merchant payment.

SEED 10:
Larger business payment.

Make the seeded data realistic and internally consistent.

================================================== 8. DEMO MODE
==================================================

Because this is a hackathon prototype, make it easy for judges to test.

Include a subtle:

"Demo transactions"

section or a demo selector accessible from the verification screen.

For example:

Try a demo:

[Successful payment]
[Invalid code]
[Wrong receiver]
[Pending payment]

Do not make this dominate the normal merchant UX.

The normal experience should look like a real product.

This is only there to guarantee a smooth live demo.

================================================== 9. OPTIONAL CUSTOMER VIEW
==================================================

Include a lightweight "Customer Payment Receipt" demo page.

This allows us to demonstrate the complete story.

Example:

WEMA

Payment Successful

₦50,000.00

To:
Adeola Stores

8 October 2026
2:14 PM

Verification Code

WMA-72K91

"Show this verification code to the merchant if payment verification is required."

This is NOT a real payment screen.

Clearly treat it as a prototype/demo transaction.

Include:

[Verify this payment]

which takes the user to the merchant verification flow.

================================================== 10. WHATSAPP CONCEPT
==================================================

The real product could eventually support Wema's WhatsApp agent.

For the hackathon, create a conceptual/demo interface rather than a real WhatsApp integration.

Show a page called:

"Verify via WhatsApp"

Example conversation:

Merchant:
Verify WMA-72K91

Wema Verify:
Payment Verified ✓

Amount: ₦50,000
From: John Adeyemi
To: Adeola Stores
Date: 8 Oct 2026
Time: 2:14 PM
Status: Successful

Then explain:

"Future integration: merchants could verify Wema payments through Wema's official WhatsApp channel."

Do not pretend that this WhatsApp integration already exists.

================================================== 11. PRODUCT ARCHITECTURE
==================================================

Use a clean separation between:

UI
↓
Verification service
↓
Seeded transaction repository

For example:

/src
/components
/pages
/data
/lib
verification.ts
/types

Create a function similar to:

verifyTransaction(code)

It should:

1. Normalize the code.
2. Search the seeded transaction repository.
3. Return a structured result.
4. Let the UI determine the appropriate state.

Example result:

{
status: "verified",
transaction: {...}
}

or:

{
status: "not_found"
}

or:

{
status: "warning",
transaction: {...},
warningReason: "receiver_mismatch"
}

This abstraction is important because later the seeded repository can be replaced with:

Wema Verification API

without rewriting the frontend.

================================================== 12. DESIGN DIRECTION
==================================================

The design must feel like a serious Nigerian fintech product.

Use Wema-inspired branding.

IMPORTANT BRANDING RULE:

Do NOT copy Wema Bank's exact official logo or create something that falsely implies this prototype is an official Wema Bank product.

Instead:

- Use Wema's recognizable brand color direction.
- Build a custom "Wema Verify" concept mark.
- The mark can visually reference the idea of verification/checking and subtly echo the visual language of Wema.
- Clearly label the prototype as:

"Wema Verify — Hackathon Prototype"

Use the Wema brand palette where appropriate, but keep the UI polished and restrained.

Avoid:

- Purple/blue AI gradients
- Generic SaaS gradients
- Excessive glassmorphism
- Neon effects
- "AI-looking" UI
- Overly rounded childish cards
- Excessive animations

The visual language should be:

TRUSTED
FINANCIAL
MODERN
AFRICAN
SIMPLE
FAST
CONFIDENT

Think:

A real banking utility, not an AI startup landing page.

================================================== 13. COLOR SYSTEM
==================================================

Use Wema-inspired red as the primary brand direction.

Use:

- Primary brand red
- Dark charcoal / near-black
- White
- Very light neutral backgrounds
- Green for verified/success
- Amber for warnings
- Red/danger for invalid transactions

Do not use gradients as the primary visual treatment.

The red should be used intentionally:

- Logo
- Primary CTA
- active states
- important highlights

Don't make the entire interface red.

================================================== 14. TYPOGRAPHY
==================================================

Use a modern, highly readable sans-serif.

Good options:

Inter
or
Manrope

Use:

- strong large headings
- compact transaction numbers
- clear labels
- excellent mobile readability

The transaction amount should be visually prominent.

================================================== 15. RESPONSIVE DESIGN
==================================================

The product must work beautifully on:

Desktop
Tablet
Mobile

Mobile is especially important because many merchants will use this from a phone.

The verification flow should be usable one-handed.

On mobile:

Verification input should be large.

CTA should be large.

Result should prioritize:

1. Verified/Not Found
2. Amount
3. Sender
4. Receiver
5. Date/time
6. Status

================================================== 16. LANDING PAGE
==================================================

Hero:

Wema Verify

Don't trust the receipt.
Verify the transaction.

Supporting copy:

"Customers can show screenshots. Wema can show you what actually happened."

CTA:

[Verify a Payment]

Secondary:

[See How It Works]

Hero visual:

Show a realistic transaction verification card.

Example:

PAYMENT VERIFICATION

✓ Verified

₦50,000

John Adeyemi
→
Adeola Stores

8 Oct 2026 • 2:14 PM

WEMA-839201

================================================== 17. HOW IT WORKS
==================================================

Three steps:

01

Customer pays

A Wema customer makes a payment.

02

Customer shares verification code

The code appears with the payment notification/receipt.

03

Merchant verifies

The merchant enters the code and Wema returns the actual transaction details.

Headline:

"Three seconds to know the truth."

================================================== 18. WHY IT MATTERS
==================================================

Section:

"Receipts can be copied. Transactions can't."

Explain:

Fake screenshots and edited receipts can look convincing.

Wema Verify removes the need to judge whether a receipt looks real.

Instead, the merchant checks the underlying transaction.

================================================== 19. WEMA ECOSYSTEM STORY
==================================================

Include a section explaining the ecosystem opportunity.

Headline:

"Built for the Wema ecosystem."

Concept:

Wema Account
↓
Wema Transaction
↓
Verification Code
↓
Wema Verify
↓
Merchant Confidence

Potential future touchpoints:

- ALAT
- Wema merchant products
- Wema WhatsApp
- POS
- Merchant APIs
- E-commerce platforms

Clearly label future integrations as FUTURE.

================================================== 20. V2 ROADMAP
==================================================

Keep this short.

V1:
Wema → Wema verification.

V2:
Interbank payment verification.

V3:
Merchant API.

V4:
POS/e-commerce integrations.

V5:
Fraud intelligence and transaction anomaly detection.

Do not implement V2-V5.

================================================== 21. SECURITY / PRIVACY PRINCIPLES
==================================================

Even though this is a prototype, design with production principles in mind.

Do not expose:

- full account numbers
- unnecessary personal information
- passwords
- PINs
- OTPs

Mask account numbers.

Never request a customer's banking password or PIN.

The verification code is NOT an OTP.

Clearly communicate that the code is used for transaction verification.

================================================== 22. IMPORTANT PRODUCT LANGUAGE
==================================================

Prefer:

"Payment Verified"

"Transaction Found"

"Transaction Not Found"

"Check Transaction Details"

"Based on Wema transaction records"

Avoid:

"100% Fraud"

"This person is a scammer"

"Fake payment detected"

unless there is actually sufficient evidence.

The system verifies transaction existence/details.

It does not determine criminal intent.

================================================== 23. HACKATHON DEMO FLOW
==================================================

The app must support this exact presentation.

SCENE 1

Merchant:

"A customer says they have paid me."

Show a convincing fake receipt/customer payment screen.

Customer says:

"Madam, I've paid ₦50,000."

SCENE 2

Merchant:

"What's the verification code?"

Customer:

"WMA-72K91."

SCENE 3

Merchant opens Wema Verify.

Enters:

WMA-72K91

Clicks:

Verify Payment

SCENE 4

Show:

✓ PAYMENT VERIFIED

₦50,000

John Adeyemi
→
Adeola Stores

8 October 2026
2:14 PM

Successful

SCENE 5

Second scenario:

Customer gives:

WMA-11XYZ

System returns:

❌ PAYMENT NOT FOUND

SCENE 6

Third scenario:

Use a legitimate code belonging to another transaction.

System returns:

⚠️ TRANSACTION FOUND — CHECK DETAILS

Actual receiver/amount/time are displayed.

This demonstrates why simply having a "real-looking receipt" is not enough.

================================================== 24. ERROR HANDLING
==================================================

Handle:

Empty code

Invalid format

Unknown code

Whitespace

Lowercase input

Network/API mock failure simulation if useful

Pending transaction

Failed transaction

Reversed transaction

Make errors human-friendly.

Never show raw exceptions.

================================================== 25. UX DETAILS
==================================================

Verification should feel extremely fast.

After clicking Verify:

Use a short loading state:

"Checking Wema transaction records..."

Then result.

Do not use fake long loading animations.

Use subtle micro-interactions.

Successful verification can use a restrained check animation.

Invalid verification can use a restrained error state.

================================================== 26. TECHNICAL REQUIREMENTS
==================================================

Use the team's fastest modern stack.

Preferred:

Next.js
React
TypeScript
Tailwind CSS

If the existing project already uses another suitable React stack, do not rewrite the project unnecessarily.

Keep dependencies minimal.

No database.

No authentication.

No external APIs required for the MVP.

All seeded data should be version-controlled.

Make the verification logic deterministic.

The application must work after:

npm install
npm run dev

and deploy cleanly to Vercel.

================================================== 27. CODE QUALITY
==================================================

Use:

- TypeScript types
- reusable components
- clean data structures
- separation of UI and verification logic
- readable naming
- no massive monolithic component
- no unnecessary abstraction
- no hardcoded UI logic scattered everywhere

Create clear comments around the mock Wema transaction layer explaining:

"This is a prototype data source. In production this would be replaced by an authenticated Wema transaction verification API."

================================================== 28. README
==================================================

Create/update README.md containing:

Project:
Wema Verify

One-line description:

"A lightweight transaction verification layer that allows Wema merchants to confirm whether a claimed Wema payment actually occurred."

Include:

- Problem
- Solution
- V1 scope
- How it works
- Tech stack
- Mock data architecture
- Future Wema integration
- V2 interbank roadmap
- Local setup
- Live demo URL placeholder
- Demo verification codes

Example:

Successful:
WMA-72K91

Not found:
WMA-FAKE1

Wrong receiver:
WMA-OTHER1

Pending:
WMA-PEND1

================================================== 29. IMPORTANT — DO NOT OVERBUILD
==================================================

This is a 3-day hackathon.

Prioritize:

1. Verification flow
2. Excellent UI
3. Realistic seeded transaction data
4. Three verification states
5. Smooth demo
6. Strong Wema ecosystem story

Do NOT spend time building:

- complex authentication
- payment processing
- real banking integrations
- complicated AI
- analytics dashboards
- merchant accounting
- unnecessary settings

The product's entire value proposition can be understood in one sentence:

"Give me the code and I'll tell you what actually happened."

================================================== 30. FINAL QUALITY BAR
==================================================

Before finishing, test the complete flow.

Test:

WMA-72K91
→ Verified

WMA-FAKE1
→ Not Found

WMA-OTHER1
→ Transaction Found / Check Details

WMA-PEND1
→ Pending

The final product should look polished enough that a Wema Bank executive could imagine it becoming a real feature.

It should NOT look like a student CRUD application.

It should NOT look like an AI-generated dashboard.

It should look like a focused banking product.

Build the product now.
First inspect the existing repository and its current stack.
Reuse existing setup where sensible.
Then implement the MVP incrementally.
