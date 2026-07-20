<script>
  import { config } from '$lib/config.js';
  import { reveal } from '$lib/actions/reveal.js';
  export let openModal;
  let currentPackage = 'ip';
  const packages = {
    ip: { btnText: 'Оставить заявку', btnColor: 'bg-primary-light', textColor: 'text-text-main' },
    ooo: { btnText: 'Запросить договор', btnColor: 'bg-graphite', textColor: 'text-white' },
    corp: { btnText: 'Написать в Телеграм', btnColor: 'bg-primary', textColor: 'text-white' }
  };
</script>

<section id="pricing" class="py-16 md:py-24 w-full max-w-[1200px] mx-auto px-6 text-left" use:reveal>
  <div class="flex flex-col mb-12 max-w-[600px] mx-0 md:mx-auto md:text-center text-left">
    <h2 class="text-[32px] md:text-[36px] font-extrabold text-text-main mb-4 tracking-tight">Выберите решение под вашу задачу</h2>
    <p class="text-[15px] text-text-muted font-medium leading-relaxed">
      Вы получаете полностью готовый продукт. Интеллектуальная собственность на исходный код
      фиксируется в Договоре без мелкого шрифта.
    </p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
    <button on:click={() => currentPackage = 'ip'} class="text-left bg-bg-surface rounded-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-300 border-2 min-h-[420px] {currentPackage === 'ip' ? 'bg-primary border-primary text-white shadow-active lg:-translate-y-2' : 'border-transparent hover:border-primary-light hover:-translate-y-1'}">
      <span class="inline-block px-4 py-2 rounded-full text-[11px] font-bold mb-8 self-start {currentPackage === 'ip' ? 'bg-white/20 text-white' : 'bg-white text-primary'}">Сайт в вашу собственность</span>
      <div class="text-[36px] font-extrabold mb-2 tracking-tight {currentPackage === 'ip' ? 'text-white' : 'text-text-main'}">от {config.prices.ip}</div>
      <h3 class="text-[22px] font-bold mb-6 {currentPackage === 'ip' ? 'text-white' : 'text-text-main'}">Старт (ИП)</h3>
      <ul class="list-none mt-auto flex flex-col gap-4 text-left">
        {#each ['Индивидуальный одностраничный сайт', 'Прием заявок напрямую в Телеграм', 'Адаптация под мобильные устройства', 'Базовая поисковая оптимизация'] as feature}
          <li class="text-[13px] pl-6 relative font-medium leading-relaxed {currentPackage === 'ip' ? 'text-white/90' : 'text-text-muted'}">
            <i class="fa-solid fa-check absolute left-0 top-1 text-[12px] {currentPackage === 'ip' ? 'text-white' : 'text-primary'}"></i> {feature}
          </li>
        {/each}
      </ul>
    </button>
    <button on:click={() => currentPackage = 'ooo'} class="text-left bg-bg-surface rounded-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-300 border-2 min-h-[420px] {currentPackage === 'ooo' ? 'bg-primary border-primary text-white shadow-active lg:-translate-y-2' : 'border-transparent hover:border-primary-light hover:-translate-y-1'}">
      <span class="inline-block px-4 py-2 rounded-full text-[11px] font-bold mb-8 self-start {currentPackage === 'ooo' ? 'bg-white/20 text-white' : 'bg-white text-primary'}">✓ Работаем по ЭДО</span>
      <div class="text-[36px] font-extrabold mb-2 tracking-tight {currentPackage === 'ooo' ? 'text-white' : 'text-text-main'}">от {config.prices.ooo}</div>
      <h3 class="text-[22px] font-bold mb-6 {currentPackage === 'ooo' ? 'text-white' : 'text-text-main'}">Бизнес (ООО)</h3>
      <ul class="list-none mt-auto flex flex-col gap-4 text-left">
        {#each ['Многостраничный корпоративный сайт', 'Удобная система управления контентом', 'Подключение онлайн-оплаты и кассы', 'Сбор согласий по ФЗ-152'] as feature}
          <li class="text-[13px] pl-6 relative font-medium leading-relaxed {currentPackage === 'ooo' ? 'text-white/90' : 'text-text-muted'}">
            <i class="fa-solid fa-check absolute left-0 top-1 text-[12px] {currentPackage === 'ooo' ? 'text-white' : 'text-primary'}"></i> {feature}
          </li>
        {/each}
      </ul>
    </button>
    <button on:click={() => currentPackage = 'corp'} class="text-left bg-bg-surface rounded-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-300 border-2 min-h-[420px] {currentPackage === 'corp' ? 'bg-primary border-primary text-white shadow-active lg:-translate-y-2' : 'border-transparent hover:border-primary-light hover:-translate-y-1'}">
      <span class="inline-block px-4 py-2 rounded-full text-[11px] font-bold mb-8 self-start {currentPackage === 'corp' ? 'bg-white/20 text-white' : 'bg-white text-primary'}">✓ Сложные архитектуры</span>
      <div class="text-[36px] font-extrabold mb-2 tracking-tight {currentPackage === 'corp' ? 'text-white' : 'text-text-main'}">от {config.prices.corp}</div>
      <h3 class="text-[22px] font-bold mb-6 {currentPackage === 'corp' ? 'text-white' : 'text-text-main'}">Крупный бизнес</h3>
      <ul class="list-none mt-auto flex flex-col gap-4 text-left">
        {#each ['Сложная серверная разработка', 'Интеграция с базами 1С и инструментами', 'Личные кабинеты пользователей', 'Защита серверов от сетевых атак'] as feature}
          <li class="text-[13px] pl-6 relative font-medium leading-relaxed {currentPackage === 'corp' ? 'text-white/90' : 'text-text-muted'}">
            <i class="fa-solid fa-check absolute left-0 top-1 text-[12px] {currentPackage === 'corp' ? 'text-white' : 'text-primary'}"></i> {feature}
          </li>
        {/each}
      </ul>
    </button>
  </div>
  <div class="flex justify-start md:justify-center w-full px-0 md:px-5">
    <button on:click={() => openModal(currentPackage)} class="flex justify-between items-center px-10 py-5 rounded-[20px] text-[16px] font-bold w-full md:max-w-[500px] cursor-pointer transition-all duration-300 {packages[currentPackage].btnColor} {packages[currentPackage].textColor} hover:bg-graphite hover:text-white hover:-translate-y-1 hover:shadow-soft">
      <span>{packages[currentPackage].btnText}</span>
      <i class="fa-solid fa-arrow-right ml-4"></i>
    </button>
  </div>
</section>
