<script>
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { config } from '$lib/config.js';
  
  let scrolled = false;
  let activeSection = '';
  let observer;

  $: isHome = $page.url.pathname === '/';

  const initObserver = () => {
    if (observer) observer.disconnect();
    if (!isHome) {
      activeSection = '';
      return;
    }
    const sections = document.querySelectorAll('section[id]');
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.scrollY >= 100) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -40% 0px' });
    sections.forEach(sec => observer.observe(sec));
  };

  const handleScroll = () => {
    scrolled = window.scrollY > 10;
    if (window.scrollY < 100) activeSection = '';
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  afterNavigate(() => {
    activeSection = '';
    setTimeout(initObserver, 100);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
    if (observer) observer.disconnect();
  });
</script>

<header class="sticky top-0 z-50 transition-all duration-300 ease-in-out {scrolled ? 'h-[80px] bg-white/95 backdrop-blur-md shadow-soft' : 'h-[100px] bg-white'} flex items-center">
  <div class="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
    <a href="/" class="text-[22px] font-extrabold flex items-center gap-2.5 text-text-main tracking-tight">
      <i class="fa-solid fa-code text-primary text-[24px]"></i> {config.brandName}
    </a>
    {#if isHome}
      <nav class="hidden md:block">
        <ul class="flex gap-10">
          <li><a href="/#benefits" class="text-[13px] font-semibold uppercase tracking-wide transition-colors relative group {activeSection === 'benefits' ? 'text-primary' : 'text-text-main hover:text-primary'}">Преимущества<span class="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 rounded-sm {activeSection === 'benefits' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
          <li><a href="/#portfolio" class="text-[13px] font-semibold uppercase tracking-wide transition-colors relative group {activeSection === 'portfolio' ? 'text-primary' : 'text-text-main hover:text-primary'}">Портфолио<span class="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 rounded-sm {activeSection === 'portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
          <li><a href="/#pricing" class="text-[13px] font-semibold uppercase tracking-wide transition-colors relative group {activeSection === 'pricing' ? 'text-primary' : 'text-text-main hover:text-primary'}">Тарифы<span class="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 rounded-sm {activeSection === 'pricing' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
          <li><a href="/#faq" class="text-[13px] font-semibold uppercase tracking-wide transition-colors relative group {activeSection === 'faq' ? 'text-primary' : 'text-text-main hover:text-primary'}">Частые вопросы<span class="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 rounded-sm {activeSection === 'faq' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
        </ul>
      </nav>
    {/if}
    <a href="{config.tgLink}" target="_blank" rel="noopener noreferrer" class="hidden lg:block bg-graphite text-white px-8 py-3.5 rounded-full text-[13px] font-semibold hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] transition-all duration-300">
      Обсудить проект
    </a>
  </div>
</header>
