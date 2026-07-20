<script>
  import { config } from '$lib/config.js';
</script>

<svelte:head>
  <title>Политика конфиденциальности | {config.brandName}</title>
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-6">
  <a href="/" class="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:-translate-x-1 transition-transform">
    <i class="fa-solid fa-arrow-left"></i> Вернуться на главную
  </a>
  <h1 class="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-graphite mb-6 tracking-tight text-left">Политика конфиденциальности</h1>
  <div class="bg-bg-surface p-6 md:p-12 rounded-lg shadow-soft border border-gray-100 text-left">
    <p class="text-base text-text-muted font-medium leading-relaxed mb-4">
      Настоящая политика определяет порядок обработки персональных данных физических и юридических лиц в рамках проекта «{config.brandName}» в соответствии с требованиями Федерального закона ФЗ-152 «О персональных данных».
    </p>
    <p class="text-base text-text-muted font-medium leading-relaxed mb-4">
      Сбор данных (имя, номер телефона, аккаунт в мессенджере, адрес электронной почты) осуществляется исключительно с добровольного согласия пользователя и применяется только для обратной связи по вопросам предоставления услуг разработки.
    </p>
    <p class="text-base text-text-muted font-medium leading-relaxed">
      Данные не передаются третьим лицам. Связь осуществляется напрямую через защищенные каналы по адресу <a href="{config.tgLink}" class="text-primary underline">{config.tgUsername}</a>.
    </p>
  </div>
</section>
