import aistovoImg from '$lib/assets/images/aistovo.png';
import yantarniyImg from '$lib/assets/images/yantarniy.png';

export const config = {
  brandName: 'СвойКод',
  domain: 'https://custom-code.132073.xyz',
  tgUsername: '@wkl240',
  tgLink: 'https://t.me/wkl240',
  prices: {
    ip: '5 000 ₽',
    ooo: '20 000 ₽',
    corp: '70 000 ₽'
  },
  portfolio: [
    {
      title: 'Сайт фестиваля на базе парка Аистово',
      badge: 'Событие',
      image: aistovoImg,
      metrics: 'Рост регистраций на 45%',
      icon: 'fa-arrow-trend-up'
    },
    {
      title: 'Сайт лагеря на базе дворца спорта «Янтарный»',
      badge: 'Лагерь',
      image: yantarniyImg,
      metrics: 'Конверсия в заявку 12,4%',
      icon: 'fa-bolt'
    }
  ]
};
