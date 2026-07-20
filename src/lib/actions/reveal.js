export function reveal(node) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(node);
      }
    });
  }, { threshold: 0.1 });
  
  node.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
  observer.observe(node);
  
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
