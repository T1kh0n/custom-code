<script>
  import { onMount } from 'svelte';
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 10; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="sticky top-0 z-50 transition-all duration-300 ease-in-out {scrolled ? 'h-[80px] bg-white/95 backdrop-blur-md shadow-soft' : 'h-[100px] bg-white'} flex items-center">
  <div class="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
    <a href="/" class="text-[22px] font-extrabold flex items-center gap-2.5 text-text-main tracking-tight">
      <i class="fa-solid fa-code text-primary text-[24px]"></i> СвойКод
    </a>
    <nav class="hidden md:block">
      <ul class="flex gap-10">
        <li><a href="/#benefits" class="text-[13px] font-semibold uppercase text-text-main tracking-wide hover:text-primary transition-colors">Преимущества</a></li>
        <li><a href="/#portfolio" class="text-[13px] font-semibold uppercase text-text-main tracking-wide hover:text-primary transition-colors">Портфолио</a></li>
        <li><a href="/#pricing" class="text-[13px] font-semibold uppercase text-text-main tracking-wide hover:text-primary transition-colors">Тарифы</a></li>
        <li><a href="/#faq" class="text-[13px] font-semibold uppercase text-text-main tracking-wide hover:text-primary transition-colors">FAQ</a></li>
      </ul>
    </nav>
    <a href="/#pricing" class="hidden lg:block bg-graphite text-white px-8 py-3.5 rounded-full text-[13px] font-semibold hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] transition-all duration-300">
      Обсудить проект
    </a>
  </div>
</header>
