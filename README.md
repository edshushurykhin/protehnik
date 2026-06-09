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

## Деплой на Cloudflare

Сайт **статический** — без `@astrojs/cloudflare` и без KV-сессий.

### Через GitHub + Workers Builds (рекомендуется)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → ваш проект → **Settings** → **Build**
2. Убедитесь в настройках:

| Параметр | Значение |
|----------|----------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node.js version | `22` |

3. **Не** используйте preset Astro с адаптером Cloudflare — он создаёт KV `protehnik-session` и ломает деплой.
4. В репозитории уже есть `wrangler.jsonc` только со статикой (`dist/`), без Workers KV.

После успешного деплоя ссылка будет вида `https://protehnik.<ваш-поддомен>.workers.dev` — она открывается с телефона и ПК.

### Если ошибка KV namespace already exists [10014]

1. Dashboard → **Workers & Pages** → **KV** → удалите namespace `protehnik-session` (он не нужен для статики).
2. Пересоберите проект (**Deployments** → **Retry deployment**).

### Альтернатива — Cloudflare Pages (только сборка, без deploy command)

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Deploy command:** оставить **пустым**

### Локальный деплой

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
