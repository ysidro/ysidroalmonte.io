/**
 * text-wave.js
 * Renders intro h3 + h1 in PixiJS with a mouse-proximity displacement
 * wave filter. Only text near the cursor deforms; the rest stays clean.
 * Activates after the GSAP particle intro finishes (event: introAnimDone).
 */
(function () {
  if (!window.PIXI) return;

  const wrapper   = document.querySelector('.intro-text');
  const h3El      = wrapper?.querySelector('h3');
  const h1El      = wrapper?.querySelector('h1');
  if (!wrapper || !h3El || !h1El) return;

  /* ── Wave displacement texture ────────────────────────────────────
   * Encodes a concentric-ring pattern in R (X-displacement) and
   * G (Y-displacement) channels.  128 = neutral (zero displacement).
   * The pattern fades to 128 at the edges so only text near the
   * sprite centre gets pushed.
   * ---------------------------------------------------------------- */
  function buildWaveTexture(size) {
    const c   = document.createElement('canvas');
    c.width   = c.height = size;
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(size, size);
    const cx  = size / 2, cy = size / 2;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = x - cx, dy = y - cy;
        const d  = Math.sqrt(dx * dx + dy * dy);

        // Sharp-ish radial fade → cubic
        const fade = Math.max(0, 1 - d / (size / 2));
        const f3   = fade * fade * fade;

        // Concentric rings — alternating push/pull
        const wave = Math.sin(d * 0.22);
        const nx   = d > 0 ? dx / d : 0;
        const ny   = d > 0 ? dy / d : 0;

        const i = (y * size + x) * 4;
        img.data[i]     = Math.round(128 + wave * nx * f3 * 127); // R → X
        img.data[i + 1] = Math.round(128 + wave * ny * f3 * 127); // G → Y
        img.data[i + 2] = 0;
        img.data[i + 3] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);
    return PIXI.Texture.from(c);
  }

  /* ── Read computed style → PIXI.TextStyle ─────────────────────── */
  function pixiStyle(el, overrides = {}) {
    const cs  = window.getComputedStyle(el);
    const lh  = cs.lineHeight === 'normal'
      ? parseFloat(cs.fontSize) * 1.25
      : parseFloat(cs.lineHeight);

    return new PIXI.TextStyle({
      fontFamily:    cs.fontFamily,
      fontSize:      parseFloat(cs.fontSize),
      fontWeight:    cs.fontWeight,
      fill:          '#ffffff',
      lineHeight:    lh,
      letterSpacing: parseFloat(cs.letterSpacing) || 0,
      ...overrides,
    });
  }

  /* ── Main init ────────────────────────────────────────────────── */
  function init() {
    // Measure after layout is settled
    const wRect  = wrapper.getBoundingClientRect();
    const W      = wRect.width;
    const H      = wRect.height;

    const app = new PIXI.Application({
      width:           W,
      height:          H,
      backgroundAlpha: 0,
      antialias:       true,
      resolution:      Math.min(window.devicePixelRatio || 1, 2),
      autoDensity:     true,
    });

    const cv = app.view;
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5;opacity:0;transition:opacity 0.5s;';
    wrapper.style.position = 'relative';
    wrapper.appendChild(cv);

    /* Text objects — match computed styles & positions */
    const h3Rect = h3El.getBoundingClientRect();
    const h1Rect = h1El.getBoundingClientRect();
    const h3Y    = h3Rect.top - wRect.top;
    const h1Y    = h1Rect.top - wRect.top;

    const textGroup = new PIXI.Container();

    const pixi_h3 = new PIXI.Text(h3El.textContent.trim(), pixiStyle(h3El));
    pixi_h3.x = 0;
    pixi_h3.y = h3Y;

    // innerText preserves \n where <br> was
    const pixi_h1 = new PIXI.Text(
      (h1El.innerText || h1El.textContent).trim(),
      pixiStyle(h1El)
    );
    pixi_h1.x = 0;
    pixi_h1.y = h1Y;

    textGroup.addChild(pixi_h3);
    textGroup.addChild(pixi_h1);
    app.stage.addChild(textGroup);

    /* Displacement sprite */
    const waveSprite = new PIXI.Sprite(buildWaveTexture(320));
    waveSprite.anchor.set(0.5);
    waveSprite.scale.set(1.6);
    waveSprite.x = -9999;
    waveSprite.y = -9999;
    app.stage.addChild(waveSprite);

    const dispFilter = new PIXI.filters.DisplacementFilter(waveSprite, 0);
    textGroup.filters = [dispFilter];

    /* Crossfade: hide HTML text → show Pixi canvas */
    requestAnimationFrame(() => {
      cv.style.opacity   = '1';
      h3El.style.opacity = '0';
      h1El.style.opacity = '0';
    });

    /* Mouse interaction */
    let mx = -9999, my = -9999;
    let targetScale = 0, liveScale = 0, phase = 0;

    wrapper.addEventListener('mousemove', e => {
      const r = wrapper.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      waveSprite.x  = mx;
      waveSprite.y  = my;
      targetScale   = 45;
    });

    wrapper.addEventListener('mouseleave', () => {
      targetScale = 0;
    });

    /* Ticker — smooth scale + slow rotation for organic wave */
    app.ticker.add(delta => {
      phase     += delta * 0.038;
      liveScale += (targetScale - liveScale) * 0.09;

      waveSprite.rotation   = phase;
      dispFilter.scale.x    = liveScale * (1 + Math.sin(phase * 2.8) * 0.18);
      dispFilter.scale.y    = liveScale * (1 + Math.cos(phase * 2.1) * 0.18);
    });
  }

  /* Wait for fonts + GSAP particle intro to finish */
  document.fonts.ready.then(() => {
    document.addEventListener('introAnimDone', init, { once: true });
  });
})();
