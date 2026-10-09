# ПРОтехник — демо-лендинг автосервиса

Одностраничный сайт автосервиса в Красноярске (Astro + Tailwind).

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт: http://localhost:4321

## Сборка

```bash
npm run build
```

Результат в папке `dist/`.

## Деплой

Сайт **статический**. Основной публичный адрес — **протехник.рф** через **GitHub Pages** (только IPv4 в DNS), чтобы сайт открывался на проблемных Wi‑Fi, где IPv6 Cloudflare даёт `ERR_TIMED_OUT`.

Запасной URL Cloudflare Workers: `https://protehnik.<поддомен>.workers.dev`.

### GitHub Pages (основной домен)

1. GitHub → репозиторий → **Settings** → **Pages** → Source: **GitHub Actions**.
2. После пуша в `main` workflow **Deploy to GitHub Pages** выкладывает `dist/`.
3. В Cloudflare → **Workers** → `protehnik` → **Domains** → **удалите** custom domain `протехник.рф` (иначе конфликт).
4. Cloudflare → **DNS** → для apex оставьте **только** записи **A**, облако **серое (DNS only)**, **без AAAA**:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

5. GitHub → **Pages** → Custom domain: `протехник.рф` (или `xn--e1aggkdfhr2a.xn--p1ai`) → дождитесь TLS.

Почему так: на Free-плане Cloudflare **нельзя отключить IPv6**, а сломанный IPv6 на части Wi‑Fi даёт таймаут. Без AAAA клиенты идут по IPv4.

### Cloudflare Workers (запасной)

| Параметр | Значение |
|----------|----------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node.js version | `22` |

Не используйте preset Astro с адаптером Cloudflare (KV `protehnik-session`).

```bash
npm install
npx wrangler login
npm run deploy
```

## Контент

| Файл | Что менять |
|------|------------|
| `src/data/site.ts` | Название, телефон, адрес, часы |
| `src/data/services.ts` | Услуги и цены |
