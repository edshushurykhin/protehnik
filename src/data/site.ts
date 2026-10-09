export const site = {
  name: 'ПРОтехник',
  slogan: 'Сервис в Красноярске',
  phone: '8 (999) 44-555-77',
  phoneHref: 'tel:+79994455577',
  /** Цифры номера без + для Telegram deep link */
  phoneDigits: '79994455577',
  email: 'protehnik124@mail.ru',
  address: 'ул. 2-я Брянская, 55 стр. 2, г. Красноярск',
  streetAddress: 'ул. 2-я Брянская, 55 стр. 2',
  /** Яндекс.Карты: долгота, широта (2-я Брянская, 55с2) */
  mapLon: 92.854467,
  mapLat: 56.04853,
  hours: 'Пн–Пт: 9:00–19:00',
  hoursWeekend: 'Сб–Вс: 10:00–18:00',
  year: new Date().getFullYear(),
  /**
   * MAX не открывает чат по номеру через URL.
   * Вставьте ссылку профиля из MAX: «Пригласить друзей» → скопировать
   * вида https://max.ru/u/...
   * Пока пусто — кнопка откроет приложение / web.max.ru
   */
  maxProfileUrl: '',
} as const;

export const nav = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
] as const;

/** Локальные фоны — не зависят от Unsplash */
export const sectionBgs = {
  hero: '/images/bg/hero.jpg',
  services: '/images/bg/services.jpg',
  about: '/images/bg/about.jpg',
  callback: '/images/bg/callback.jpg',
  contacts: '/images/bg/contacts.jpg',
} as const;
