<script>
  import { config } from '$lib/config.js';
  export let isOpen = false;
  export let type = 'ip';

  const content = {
    ip: { title: 'Тариф: Старт (ИП)' },
    ooo: { title: 'Тариф: Бизнес (ООО)' },
    corp: { title: 'Крупный бизнес' }
  };

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  
  const close = () => { isOpen = false; };
  
  const goToTelegram = () => {
    window.open(config.tgLink, '_blank');
    close();
  };
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-5 transition-opacity duration-300 text-left" on:click|self={close} on:keydown={(e) => e.key === 'Escape' && close()} tabindex="0" role="button">
    <div class="bg-white w-full max-w-[460px] rounded-[40px] p-10 md:p-12 relative shadow-[0_25px_50px_rgba(0,0,0,0.15)] transform transition-all duration-300">
      <button class="absolute top-6 right-6 text-[20px] text-text-muted bg-transparent border-none cursor-pointer transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full hover:text-text-main hover:bg-bg-surface hover:rotate-90" on:click={close}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h3 class="text-[24px] font-extrabold mb-4 text-text-main tracking-tight">{content[type].title}</h3>
      <p class="text-[14px] text-text-muted mb-8 font-medium leading-relaxed">
        Все технические детали, сроки и расчеты для выбранного решения мы обсуждаем напрямую в Телеграм без посредников.
      </p>
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary text-[32px] mb-2 shadow-soft">
          <i class="fa-brands fa-telegram"></i>
        </div>
      </div>
      <button on:click={goToTelegram} class="w-full p-[18px] rounded-xl text-[15px] font-bold border-none cursor-pointer transition-all duration-300 shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 bg-primary text-white hover:bg-graphite mt-4 text-center">
        Перейти в Телеграм
      </button>
    </div>
  </div>
{/if}
