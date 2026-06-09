export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'diagnostics',
    name: 'Компьютерная диагностика',
    price: 'от 1 500 ₽',
    description: 'Считывание ошибок, проверка электронных систем, отчёт по результатам.',
    icon: '🔍',
  },
  {
    id: 'oil',
    name: 'Замена масла',
    price: 'от 800 ₽',
    description: 'Замена моторного масла и фильтра. Масло и расходники — по каталогу.',
    icon: '🛢️',
  },
  {
    id: 'brakes',
    name: 'Замена колодок',
    price: 'от 1 200 ₽',
    description: 'Передние и задние тормозные колодки, проверка дисков и суппортов.',
    icon: '🛑',
  },
  {
    id: 'suspension',
    name: 'Ремонт подвески',
    price: 'от 2 500 ₽',
    description: 'Стойки, сайлентблоки, рычаги, шаровые. Диагностика ходовой части.',
    icon: '⚙️',
  },
];
