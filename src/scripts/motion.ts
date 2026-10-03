const motionRoot = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

function revealNow() {
  document.querySelectorAll<HTMLElement>('[data-motion="reveal"]').forEach((node) => {
    node.classList.add('is-in');
  });
}

function watch() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-motion="reveal"]');
  if (nodes.length === 0) return;
  const viewport = window.innerHeight;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const tall = entry.boundingClientRect.height > viewport * 0.75;
        if (!tall && entry.intersectionRatio < 0.15) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { threshold: [0, 0.15] },
  );
  nodes.forEach((node) => observer.observe(node));
}

export {};

if (reduce.matches) {
  motionRoot.classList.remove('motion-ready');
  revealNow();
} else if (motionRoot.classList.contains('motion-ready')) {
  watch();
}

reduce.addEventListener('change', () => {
  if (!reduce.matches) return;
  motionRoot.classList.remove('motion-ready');
  revealNow();
});
