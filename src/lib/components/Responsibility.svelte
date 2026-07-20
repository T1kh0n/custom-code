<section class="py-16 md:py-24 w-full max-w-[1200px] mx-auto px-6">
  <div class="text-center mb-10">
    <h2 class="text-[32px] md:text-[36px] font-extrabold text-text-main mb-4 tracking-tight">Прозрачное сотрудничество</h2>
    <p class="text-[15px] text-text-muted font-medium max-w-[600px] mx-auto leading-relaxed">
      Мы четко разделяем зоны ответственности, чтобы у бизнеса не возникало иллюзий или скрытых расходов.
    </p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-bg-surface p-8 md:p-12 rounded-[40px] border border-gray-100">
      <h3 class="text-[24px] font-extrabold text-text-main mb-8 flex items-center gap-4 tracking-tight">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[18px] text-text-main shadow-soft shrink-0">
          <i class="fa-solid fa-laptop-code"></i>
        </div>
        Наша ответственность
      </h3>
      <ul class="flex flex-col gap-5">
        {#each ['Разработка чистого, валидного и быстрого кода.', 'Настройка форм согласно требованиям ФЗ-152.', 'Адаптация интерфейса под все устройства.', 'Передача исключительных прав по Акту.'] as item}
          <li class="text-[14px] text-text-muted pl-6 relative font-medium leading-relaxed">
            <i class="fa-solid fa-arrow-right absolute left-0 top-1.5 text-primary text-[12px]"></i>{item}
          </li>
        {/each}
      </ul>
    </div>
    <div class="bg-bg-surface p-8 md:p-12 rounded-[40px] border border-gray-100">
      <h3 class="text-[24px] font-extrabold text-text-main mb-8 flex items-center gap-4 tracking-tight">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[18px] text-text-main shadow-soft shrink-0">
          <i class="fa-solid fa-handshake"></i>
        </div>
        Ваша ответственность
      </h3>
      <ul class="flex flex-col gap-5">
        {#each ['Оплата личного хостинга (около 300 ₽/мес) из реестра РКН.', 'Ежегодное продление доменного имени (.ru / .com).', 'Оформление коммерческих шрифтов (при необходимости).', 'Сверка услуг разработки с вашими кодами ОКВЭД.'] as item}
          <li class="text-[14px] text-text-muted pl-6 relative font-medium leading-relaxed">
            <i class="fa-solid fa-arrow-right absolute left-0 top-1.5 text-primary text-[12px]"></i>{item}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
