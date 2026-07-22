<script>
  import { config } from '$lib/config.js';
</script>

<footer class="border-t border-gray-100 py-16 mt-16 text-left md:text-center">
  <div class="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-start md:items-center gap-8">
    <div class="text-[20px] font-extrabold text-text-main flex items-center gap-2">
      <i class="fa-solid fa-code text-primary"></i> {config.brandName}
    </div>
    
    <div class="flex flex-col gap-3">
      <a href="{config.tgLink}" target="_blank" rel="noopener noreferrer" class="text-[14px] font-medium text-text-muted hover:text-primary transition-colors flex items-center justify-start md:justify-center gap-2.5">
        <i class="fa-brands fa-telegram text-primary text-[16px]"></i> {config.tgUsername}
      </a>
    </div>

    <div class="text-[11px] text-text-muted max-w-[700px] leading-[1.6] bg-bg-surface py-4 px-6 rounded-2xl text-left md:text-center">
      «{config.brandName}» — это торговое имя самозанятого разработчика и не является зарегистрированной организацией. Название используется только в целях идентификации услуг на данном сайте и не имеет юридической силы.
    </div>

    <div class="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      <a href="/oferta" class="text-[12px] font-semibold text-text-main uppercase tracking-wide underline decoration-gray-200 underline-offset-4 hover:text-primary hover:decoration-primary transition-colors">Публичная Оферта</a>
      <a href="/privacy" class="text-[12px] font-semibold text-text-main uppercase tracking-wide underline decoration-gray-200 underline-offset-4 hover:text-primary hover:decoration-primary transition-colors">Политика конфиденциальности</a>
    </div>
  </div>
</footer>
