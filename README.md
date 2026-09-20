# FIN.SWITCH AI Sales Desk

Fresh-stack foundation for FIN.SWITCH WhatsApp lead capture, qualification, CRM and human handoff.

## Stack
- Next.js App Router
- Vercel deployment target
- Supabase/Postgres
- Meta WhatsApp Cloud API webhook endpoint

## Production safety
- Keep Meta, AI and Supabase service secrets server-side only.
- Never store OTPs, passwords or banking credentials.
- Do not promise loan/funding approval.
- Clearly separate government fees from FIN.SWITCH service fees.
- Use the legally appropriate business collection account.

## Environment
Copy `.env.example` to Vercel Environment Variables. Never commit secrets.
