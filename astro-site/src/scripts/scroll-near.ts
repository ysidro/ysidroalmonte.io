// Runs `queue` on scroll only while `el` is within one viewport of the screen.
// The pinned sections each recompute geometry on every scroll tick; this keeps
// the ones that are far away from costing anything. Returns a stop function.
export function onScrollNear(el: Element, queue: () => void): () => void {
  let on = false;
  const add = () => {
    if (on) return;
    on = true;
    window.addEventListener('scroll', queue, { passive: true });
    queue();
  };
  const remove = () => {
    if (!on) return;
    on = false;
    window.removeEventListener('scroll', queue);
  };
  if (!('IntersectionObserver' in window)) { add(); return remove; }
  const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? add() : remove()), { rootMargin: '100% 0px' });
  io.observe(el);
  return () => { io.disconnect(); remove(); };
}
