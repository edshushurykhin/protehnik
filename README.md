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

## Деплой на Cloudflare Pages

### Вариант A — через GitHub (рекомендуется)

1. Создайте репозиторий на GitHub и запушьте код:
   ```bash
   git remote add origin https://github.com/<ваш-логин>/protehnik.git
   git push -u origin main
   ```
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Выберите репозиторий, настройки сборки:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22` (или переменная `NODE_VERSION=22`)
4. **Save and Deploy** — получите ссылку вида `https://protehnik.pages.dev`

### Вариант B — прямой деплой через Wrangler

```bash
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name=protehnik
```

## Контент

| Файл | Что менять |
|------|------------|
| `src/data/site.ts` | Название, телефон, адрес, часы |
| `src/data/services.ts` | Услуги и цены |
