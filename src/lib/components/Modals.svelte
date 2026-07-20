<script>
  export let isOpen = false;
  export let type = 'ip';
  const content = {
    ip: { title: 'Заявка: Старт (ИП)', sub: 'Оставьте данные, мы подготовим расчет в Telegram.', f1: 'Имя или название ИП', p1: 'ИП Иванов А.А.', f2: 'Телефон / Telegram', p2: '+7 (999) 000-00-00', btn: 'Отправить заявку', btnColor: 'bg-primary text-white hover:bg-graphite' },
    ooo: { title: 'Заявка: Бизнес (ООО)', sub: 'Запросите коммерческое предложение и проект договора.', f1: 'Название компании / ИНН', p1: 'ООО Вектор', f2: 'Корпоративный Email', p2: 'info@company.ru', btn: 'Запросить КП и Договор', btnColor: 'bg-text-main text-white hover:bg-primary' },
    corp: { title: 'Аудит: Enterprise', sub: 'Запишитесь на техническое обсуждение архитектуры.', f1: 'ФИО ЛПР', p1: 'Руководитель проекта', f2: 'Email для связи', p2: 'director@domain.ru', btn: 'Записаться на аудит', btnColor: 'bg-text-main text-white hover:bg-primary' }
  };
  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  const close = () => { isOpen = false; };
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-5 transition-opacity duration-300" on:click|self={close} on:keydown={(e) => e.key === 'Escape' && close()} tabindex="0" role="button">
    <div class="bg-white w-full max-w-[460px] rounded-[40px] p-10 md:p-12 relative shadow-[0_25px_50px_rgba(0,0,0,0.15)] transform transition-all duration-300">
      <button class="absolute top-6 right-6 text-[20px] text-text-muted bg-transparent border-none cursor-pointer transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full hover:text-text-main hover:bg-bg-surface hover:rotate-90" on:click={close}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h3 class="text-[24px] font-extrabold mb-1 text-text-main tracking-tight">{content[type].title}</h3>
      <p class="text-[13px] text-text-muted mb-8 font-medium">{content[type].sub}</p>
      <form on:submit|preventDefault={close}>
        <div class="mb-5">
          <label class="block text-[11px] font-bold text-text-main mb-2 uppercase tracking-[0.5px]">{content[type].f1}</label>
          <input type="text" placeholder="{content[type].p1}" required class="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-surface text-[14px] text-text-main font-medium transition-all duration-300 outline-none focus:bg-white focus:border-primary focus:shadow-[0_10px_20px_rgba(59,130,246,0.05)]" />
        </div>
        <div class="mb-5">
          <label class="block text-[11px] font-bold text-text-main mb-2 uppercase tracking-[0.5px]">{content[type].f2}</label>
          <input type="text" placeholder="{content[type].p2}" required class="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-surface text-[14px] text-text-main font-medium transition-all duration-300 outline-none focus:bg-white focus:border-primary focus:shadow-[0_10px_20px_rgba(59,130,246,0.05)]" />
        </div>
        <label class="flex gap-3 items-start mb-8 cursor-pointer">
          <input type="checkbox" checked required class="mt-1 accent-primary w-4 h-4 shrink-0 cursor-pointer" />
          <span class="text-[11px] text-text-muted font-medium leading-relaxed">Я даю согласие на обработку персональных данных в соответствии с <a href="/privacy" class="text-primary underline font-semibold">ФЗ-152</a>.</span>
        </label>
        <button type="submit" class="w-full p-[18px] rounded-xl text-[15px] font-bold border-none cursor-pointer transition-all duration-300 shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 {content[type].btnColor}">
          {content[type].btn}
        </button>
      </form>
    </div>
  </div>
{/if}
