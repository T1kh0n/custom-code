<script>
  import Hero from '$lib/components/Hero.svelte';
  import Benefits from '$lib/components/Benefits.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import Responsibility from '$lib/components/Responsibility.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Modals from '$lib/components/Modals.svelte';
  import { config } from '$lib/config.js';

  let isModalOpen = false;
  let modalType = 'ip';

  const openModal = (type) => {
    modalType = type;
    isModalOpen = true;
  };

  const schemaJSON = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": config.brandName,
        "url": config.domain,
        "logo": `${config.domain}/favicon.svg`,
        "description": "Разработка независимых сайтов для бизнеса под ключ без абонентской платы."
      },
      {
        "@type": "Product",
        "name": `Разработка независимого сайта Бизнес (ООО)`,
        "description": "Многостраничный корпоративный сайт. Передача кода в собственность. Полное соответствие ФЗ-152.",
        "brand": { "@type": "Brand", "name": config.brandName },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "RUB",
          "price": "20000",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Почему ваши цены начинаются от ${config.prices.ip}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы автоматизировали базовую сборку кода и не закладываем в смету работу громоздкого штата менеджеров. Вы общаетесь напрямую с техническими специалистами, что радикально снижает издержки."
            }
          },
          {
            "@type": "Question",
            "name": "Кому будет принадлежать домен и сам код сайта?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Строго вам. Мы регистрируем домен и хостинг на ваш паспорт (ИП) или на реквизиты компании (ООО). Код передается по договору."
            }
          }
        ]
      }
    ]
  };
</script>

<svelte:head>
  <title>{config.brandName} | Разработка независимых сайтов для бизнеса</title>
  <meta name="description" content="Создаем сайты, исходный код которых на 100% принадлежит вашему бизнесу. Никаких подписок и конструкторов. Строго по ФЗ-152." />
  {@html `<script type="application/ld+json">${JSON.stringify(schemaJSON)}</script>`}
</svelte:head>

<Hero />
<Benefits />
<Portfolio />
<Pricing {openModal} />
<Responsibility />
<FAQ />
<Modals bind:isOpen={isModalOpen} type={modalType} />
