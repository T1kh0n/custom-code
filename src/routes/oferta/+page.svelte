<script>
  import { config } from '$lib/config.js';
</script>

<svelte:head>
  <title>Публичная Оферта | {config.brandName}</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="{config.domain}/oferta" />
</svelte:head>

<section class="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-6">
  <a href="/" class="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:-translate-x-1 transition-transform">
    <i class="fa-solid fa-arrow-left"></i> Вернуться на главную
  </a>
  <h1 class="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-graphite mb-6 tracking-tight text-left">Публичная Оферта</h1>
  <div class="bg-bg-surface p-6 md:p-12 rounded-lg shadow-soft border border-gray-100 text-left">
    <p class="text-base text-text-muted font-medium leading-relaxed mb-4">
      Настоящий документ является публичной офертой самозанятого гражданина (плательщика налога на профессиональный доход), действующего под коммерческим обозначением «{config.brandName}».
    </p>
    <p class="text-base text-text-muted font-medium leading-relaxed mb-4">
      Предметом оферты является оказание услуг по разработке программного обеспечения, верстке и созданию веб-сайтов. Исполнитель обязуется выполнить работы, а Заказчик принять их и оплатить.
    </p>
    <p class="text-base text-text-muted font-medium leading-relaxed">
      Передача исключительных прав на созданный исходный код осуществляется в полном объеме после подписания Акта приема-передачи оказанных услуг и полной оплаты. Исполнитель выдает чек, сформированный в приложении «Мой налог».
    </p>
  </div>
</section>
