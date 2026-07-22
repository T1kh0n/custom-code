<script>
  import { config } from '$lib/config.js';
  import { reveal } from '$lib/actions/reveal.js';
  let activeIndex = -1;
  const faqs = [
    { q: `Почему ваши цены начинаются от ${config.prices.ip}?`, a: "Мы автоматизировали базовую сборку кода и не закладываем в смету работу большого штата менеджеров. Вы общаетесь напрямую с техническими специалистами, что радикально снижает издержки. Вы платите только за часы разработчика." },
    { q: "Кому будет принадлежать домен и сам код сайта?", a: "Строго вам. Мы регистрируем домен и хостинг на ваш паспорт (ИП) или на реквизиты компании (ООО). Код передается по договору. Никто не сможет отключить вас за неуплату «абонентской платы платформы», так как вы полностью владеете проектом." },
    { q: "Что входит в базовую поисковую оптимизацию?", a: "Мы прописываем смысловые теги, настраиваем структуру заголовков, создаем карты сайта для поисковиков, а также обеспечиваем высокую скорость загрузки по стандартам систем аналитики." },
    { q: "Смогу ли я сам вносить изменения в текст на сайте?", a: "В тарифах «Бизнес» и «Крупный бизнес» мы подключаем систему управления контентом, где вы можете менять тексты, фото и товары без программиста. В тарифе «Старт» изменения вносятся по выданной нами простой инструкции." }
  ];
  const toggle = (index) => { activeIndex = activeIndex === index ? -1 : index; };
</script>

<section id="faq" class="py-16 md:py-24 w-full max-w-[800px] mx-auto px-6 text-left" use:reveal>
  <h2 class="text-[32px] md:text-[36px] font-extrabold text-text-main mb-10 tracking-tight text-left md:text-center">Часто задаваемые вопросы</h2>
  <div class="flex flex-col gap-4 text-left">
    {#each faqs as faq, i}
      <div class="bg-bg-surface rounded-[24px] transition-all duration-300 border-2 {activeIndex === i ? 'bg-white border-primary-light shadow-[0_10px_30px_rgba(0,0,0,0.03)]' : 'border-transparent hover:border-primary-light'}">
        <button on:click={() => toggle(i)} class="w-full text-left py-6 px-8 bg-transparent border-none text-[16px] font-bold text-text-main cursor-pointer flex justify-between items-center outline-none">
          <span class="pr-4">{faq.q}</span>
          <i class="fa-solid fa-chevron-down shrink-0 transition-transform duration-300 text-[14px] {activeIndex === i ? 'rotate-180 text-text-main' : 'text-primary'}"></i>
        </button>
        <div class="grid transition-[grid-template-rows] duration-300 ease-out {activeIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}">
          <div class="overflow-hidden">
            <div class="px-8 pb-6 pt-0 text-[14px] text-text-muted leading-[1.7] font-medium">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
