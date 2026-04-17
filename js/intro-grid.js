/**
 * Intro grid — interactive spring mesh inside .intro-grid (798 × 550)
 * Pure Canvas 2D, no dependencies.
 */
(function () {
  const container = document.querySelector('.intro-grid');
  if (!container || window.innerWidth < 768) return;

  /* ── Canvas ───────────────────────────────────────────────────── */
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const R = 40, G = 213, B = 190;   // teal accent
  const CELL     = 46;
  const MOUSE_R  = 130;
  const STRENGTH = 9;
  const SPRING   = 0.06;
  const DAMP     = 0.70;

  let W, H, cols, rows, pts;
  let mx = -9999, my = -9999;

  function build() {
    W = canvas.width  = container.offsetWidth;
    H = canvas.height = container.offsetHeight;
    cols = Math.ceil(W / CELL) + 1;
    rows = Math.ceil(H / CELL) + 1;
    pts  = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * CELL, y = r * CELL;
        pts.push({ bx: x, by: y, x, y, vx: 0, vy: 0 });
      }
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (const p of pts) {
      const dx = p.x - mx, dy = p.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy) || 1;
      if (d < MOUSE_R) {
        const f = (1 - d / MOUSE_R) * STRENGTH;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }
      p.vx += (p.bx - p.x) * SPRING;
      p.vy += (p.by - p.y) * SPRING;
      p.vx *= DAMP;
      p.vy *= DAMP;
      p.x  += p.vx;
      p.y  += p.vy;
    }

    /* Lines */
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${R},${G},${B},0.14)`;
    ctx.lineWidth   = 0.7;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c, p = pts[i];
        if (c < cols - 1) { ctx.moveTo(p.x, p.y); ctx.lineTo(pts[i + 1].x, pts[i + 1].y); }
        if (r < rows - 1) { ctx.moveTo(p.x, p.y); ctx.lineTo(pts[i + cols].x, pts[i + cols].y); }
      }
    }
    ctx.stroke();

    /* Dots */
    for (const p of pts) {
      const dx = p.x - mx, dy = p.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy);
      const a  = d < MOUSE_R ? 0.2 + (1 - d / MOUSE_R) * 0.75 : 0.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${R},${G},${B},${a})`;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  /* Mouse coords relative to container */
  container.addEventListener('mousemove', e => {
    const r = container.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  container.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  window.addEventListener('resize', () => { build(); });

  build();
  tick();
})();
