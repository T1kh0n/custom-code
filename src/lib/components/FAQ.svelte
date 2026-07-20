<script>
  let activeIndex = null;
  const faqs = [
    { q: "Почему ваши цены начинаются от 5 000 ₽?", a: "Мы автоматизировали базовую сборку кода и не закладываем в смету работу громоздкого штата менеджеров. Вы общаетесь напрямую с техническими специалистами, что радикально снижает издержки. Вы платите только за часы разработчика." },
    { q: "Кому будет принадлежать домен и сам код сайта?", a: "Строго вам. Мы регистрируем домен и хостинг на ваш паспорт (ИП) или на реквизиты компании (ООО). Код передается по договору. Никто не сможет отключить вас за неуплату «абонентской платы платформы», так как вы владеете кодом." },
    { q: "Что входит в базовую SEO-оптимизацию?", a: "Мы прописываем семантические теги (Title, Description), настраиваем структуру H1-H6, создаем файлы sitemap.xml и robots.txt, а также обеспечиваем зеленую зону скорости загрузки по стандартам Google Core Web Vitals." },
    { q: "Смогу ли я сам вносить изменения в текст на сайте?", a: "В тарифах «Бизнес» и «Enterprise» мы подключаем CMS (систему управления контентом), где вы можете менять тексты, фото и товары без программиста. В тарифе «Старт» изменения вносятся через код по выданной нами инструкции." }
  ];
  const toggle = (index) => { activeIndex = activeIndex === index ? null : index; };
</script>

<section id="faq" class="py-16 md:py-24 w-full max-w-[800px] mx-auto px-6">
  <h2 class="text-[32px] md:text-[36px] font-extrabold text-text-main mb-10 tracking-tight text-center">Часто задаваемые вопросы</h2>
  <div class="flex flex-col gap-4">
    {#each faqs as faq, i}
      <div class="bg-bg-surface rounded-[24px] transition-all duration-300 border-2 {activeIndex === i ? 'bg-white border-primary-light shadow-[0_10px_30px_rgba(0,0,0,0.03)]' : 'border-transparent hover:border-primary-light'}">
        <button on:click={() => toggle(i)} class="w-full text-left py-6 px-8 bg-transparent border-none text-[16px] font-bold text-text-main cursor-pointer flex justify-between items-center outline-none">
          {faq.q}
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
