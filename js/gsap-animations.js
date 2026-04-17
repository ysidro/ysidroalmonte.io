/**
 * GSAP animations — scroll reveals + project modal
 *
 * IMPORTANT: Every fromTo() that has a ScrollTrigger must include
 * immediateRender: false — otherwise GSAP applies the "from" state
 * (opacity: 0) to ALL elements the moment the script loads, making
 * the entire page invisible until each ScrollTrigger fires.
 */
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const EASE  = 'power2.out';
  const START = 'top 72%'; // animate well before element hits the top edge

  // Shorthand: fromTo with immediateRender off + ScrollTrigger
  function sr(el, from, to, stDelay) {
    gsap.fromTo(el, from, {
      ...to,
      ease: EASE,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: START,
        toggleActions: 'play none none none',
      },
      delay: stDelay || 0,
    });
  }

  // ── Intro — no ScrollTrigger, runs on load ──────────────────────────
  gsap.timeline()
    .from('.intro-text h3', { y: 16, opacity: 0, duration: 0.55, ease: EASE })
    .from('.intro-text h1', { y: 24, opacity: 0, duration: 0.7,  ease: EASE }, '-=0.28')
    .from('#skill > div',   { y: 12, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'back.out(1.3)' }, '-=0.35');

  // ── Section headings ────────────────────────────────────────────────
  gsap.utils.toArray('.section-heading').forEach(el =>
    sr(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
  );

  gsap.utils.toArray('.section-desc').forEach(el =>
    sr(el, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
  );

  // ── About ───────────────────────────────────────────────────────────
  gsap.utils.toArray('.about-me__text p').forEach(el =>
    sr(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 })
  );

  gsap.utils.toArray('.timeline__block').forEach((el, i) =>
    sr(el,
      { x: i % 2 === 0 ? -26 : 26, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7 },
      0
    )
  );

  // ── Services ────────────────────────────────────────────────────────
  gsap.utils.toArray('.item-service').forEach((el, i) =>
    sr(el, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72 }, (i % 3) * 0.09)
  );

  // ── Works cards ─────────────────────────────────────────────────────
  gsap.utils.toArray('.work-card').forEach((el, i) =>
    sr(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, (i % 3) * 0.08)
  );

  // ── Card hover lift ─────────────────────────────────────────────────
  gsap.utils.toArray('.work-card').forEach(card => {
    card.addEventListener('mouseenter', () =>
      gsap.to(card, { y: -5, duration: 0.28, ease: 'power2.out' })
    );
    card.addEventListener('mouseleave', () =>
      gsap.to(card, { y: 0,  duration: 0.38, ease: 'power2.out' })
    );
  });


  // ===================================================================
  // Project Modal
  // ===================================================================
  const modal    = document.getElementById('project-modal');
  const panel    = modal.querySelector('.project-modal__panel');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');

  function openModal(data) {
    modal.querySelector('#modal-img').src               = data.img      || '';
    modal.querySelector('#modal-img').alt               = data.title    || '';
    modal.querySelector('#modal-category').textContent  = data.category || '';
    modal.querySelector('#modal-title').textContent     = data.title    || '';
    modal.querySelector('#modal-challenge').textContent = data.challenge || '';
    modal.querySelector('#modal-solution').textContent  = data.solution  || '';

    modal.querySelector('#modal-tags').innerHTML =
      (data.tags || '').split(',').map(t => `<span>${t.trim()}</span>`).join('');

    const cta = modal.querySelector('#modal-cta');
    cta.innerHTML = data.url
      ? `<a href="${data.url}" target="_blank" rel="noopener" class="project-modal__link">View Live Site</a>`
      : '';

    panel.scrollTop = 0;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    gsap.fromTo(backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.32, ease: 'power2.out', immediateRender: false }
    );
    gsap.fromTo(panel,
      { opacity: 0, y: 28, scale: 0.97 },
      { opacity: 1, y: 0,  scale: 1,   duration: 0.42, ease: 'power3.out', immediateRender: false }
    );
  }

  function closeModal() {
    gsap.to(panel,    { opacity: 0, y: 18, scale: 0.97, duration: 0.26, ease: 'power2.in' });
    gsap.to(backdrop, {
      opacity: 0, duration: 0.26, ease: 'power2.in',
      onComplete: () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      },
    });
  }

  document.querySelectorAll('.work-card').forEach(card =>
    card.addEventListener('click', () => openModal(card.dataset))
  );

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
