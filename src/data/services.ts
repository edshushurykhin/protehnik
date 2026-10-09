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
    name: 'Диагностика',
    price: 'БЕСПЛАТНО',
    description:
      'Диагностика подвески, проверка работоспособности систем, осмотр на течи и другие неисправности.',
    icon: '🔍',
  },
  {
    id: 'oil',
    name: 'Замена масла',
    price: 'от 1 000 ₽',
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
    price: 'от 2 000 ₽',
    description: 'Стойки, сайлентблоки, рычаги, шаровые. Ремонт ходовой части.',
    icon: '⚙️',
  },
  {
    id: 'tires',
    name: 'Шиномонтаж',
    price: 'от 1 400 ₽',
    description: 'Сезонная смена шин, балансировка, ремонт проколов.',
    icon: '🛞',
  },
  {
    id: 'starter',
    name: 'Ремонт стартера и генератора',
    price: 'от 2 000 ₽',
    description: 'Диагностика, ремонт и замена стартеров и генераторов.',
    icon: '⚡',
  },
  {
    id: 'exhaust',
    name: 'Ремонт глушителей',
    price: 'по диагностике',
    description: 'Ремонт и замена элементов выхлопной системы.',
    icon: '🔧',
  },
  {
    id: 'headlights',
    name: 'Полировка фар',
    price: 'от 1 500 ₽',
    description: 'Восстановление прозрачности фар, улучшение освещения дороги.',
    icon: '💡',
  },
];
