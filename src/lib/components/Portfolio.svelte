<script>
  import { config } from '$lib/config.js';
  import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="portfolio" class="py-16 md:py-24 w-full max-w-[1200px] mx-auto px-6 text-left" use:reveal>
  <div class="flex flex-col mb-12 max-w-[650px] mx-0 md:mx-auto md:text-center text-left">
    <h2 class="text-[32px] md:text-[36px] font-extrabold text-text-main mb-4 tracking-tight">Выполненные проекты</h2>
    <p class="text-[15px] text-text-muted font-medium leading-relaxed">
      Мы создаем не просто красивые визуальные решения, а рабочие инструменты, которые решают
      коммерческие задачи и приносят бизнесу реальные цифры.
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
    {#each config.portfolio as project}
      <article class="flex flex-col gap-5 cursor-pointer group h-full text-left">
        <div class="overflow-hidden rounded-lg h-[300px] shadow-soft bg-bg-surface border border-gray-100">
          <img src="{project.image}" alt="{project.title}" loading="lazy" decoding="async" class="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105" />
        </div>
        <div class="px-2 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-[18px] font-bold text-text-main leading-snug max-w-[75%]">{project.title}</h3>
            <span class="bg-primary text-white px-3.5 py-1.5 rounded-xl text-[11px] font-bold">{project.badge}</span>
          </div>
          <div class="text-[13px] text-text-muted font-medium flex items-start gap-2 mt-auto">
            <i class="fa-solid {project.icon} text-text-main mt-1 shrink-0"></i> 
            <div class="leading-relaxed">{project.metrics}</div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
