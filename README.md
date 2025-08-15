# Wandbild Creator – Sprint 0 Starter

Dieses Paket liefert dir den Cloudflare Worker Skeleton + Env-Setup für unseren KI-Wandbild-Flow.

## 1) Voraussetzungen
- Node 18+
- Cloudflare Account + Wrangler (`npm i -g wrangler`)

## 2) Loslegen (lokal)
```bash
cd worker
npm i
npm run dev
# Test:
# http://127.0.0.1:8787/api/health  -> { ok: true, ts: ... }
```

## 3) Cloudflare einrichten
```bash
# Einmalig:
npx wrangler login

# Stage-Deploy:
npm run deploy:stage
# Prod-Deploy:
npm run deploy:prod
```

**Secrets setzen (Beispiel):**
```bash
npx wrangler secret put OPENAI_API_KEY --env stage
npx wrangler secret put OPENAI_API_KEY --env prod
```

## 4) Env-Variablen
Siehe `.env.example`. Bitte in CI/Cloudflare Secrets/Vars pflegen, nicht ins Repo commiten.

## 5) Nächste Schritte
- Endpunkte `/api/preview`, `/api/final`, `/api/cart` ergänzen (Sprint 2/3)
- Shopify Metafields im Admin anlegen (siehe Sprint-Board)