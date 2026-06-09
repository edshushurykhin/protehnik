export const site = {
  name: 'ПРОтехник',
  slogan: 'Сервис в Красноярске',
  phone: '+7 (999) 777-77-77',
  phoneHref: 'tel:+79997777777',
  email: 'info@protehnik24.ru',
  address: 'г. Красноярск, ул. Маерчака, 12',
  hours: 'Пн–Сб: 9:00–20:00, Вс: выходной',
  year: new Date().getFullYear(),
} as const;

export const nav = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Запись', href: '#booking' },
  { label: 'Контакты', href: '#contacts' },
] as const;
