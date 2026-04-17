/**
 * "Ondas de Consciencia Sintáctica"
 * Pixi.js v7 interactive background — code texture + circuit nodes
 * revealed by mouse-wave displacement mask.
 */
(function () {
  if (window.innerWidth < 900 || !window.PIXI) return;

  const ACCENT = 0x28d5be; // Match site's teal accent
  const ACCENT_CSS = '#fff';

  const CODE_LINES = [
    "const router = createBrowserRouter([",
    "  { path: '/', element: <Home /> },",
    "  { path: '/works', element: <Portfolio /> }",
    "]);",
    "exports.createPages = async ({ graphql, actions }) => {",
    "  const { createPage } = actions;",
    "  const result = await graphql(`",
    "    query { allWpPost {",
    "      nodes { slug title content }",
    "    }}`);",
    "  result.data.allWpPost.nodes.forEach(post => {",
    "    createPage({ path: post.slug,",
    "      component: path.resolve('./src/templates/post.js'),",
    "      context: { id: post.id }",
    "    });",
    "  });",
    "};",
    "module.exports = {",
    "  plugins: [",
    "    { resolve: 'gatsby-source-wordpress',",
    "      options: { url: process.env.WPGRAPHQL_URL }",
    "    },",
    "    'gatsby-plugin-image',",
    "    'gatsby-plugin-sharp'",
    "  ],",
    "};",
    "function CustomPlugin() {",
    "  add_action('init', function() {",
    "    register_post_type('portfolio', [",
    "      'public'      => true,",
    "      'label'       => 'Portfolio',",
    "      'supports'    => ['title', 'thumbnail']",
    "    ]);",
    "  });",
    "}",
    "add_filter('woocommerce_product_tabs',",
    "  'custom_product_tabs');",
    "function custom_product_tabs($tabs) {",
    "  $tabs['specs'] = [",
    "    'title'    => __('Specifications'),",
    "    'priority' => 50,",
    "    'callback' => 'render_specs_tab'",
    "  ];",
    "  return $tabs;",
    "}",
    "useEffect(() => {",
    "  const controller = new AbortController();",
    "  fetch('/api/projects',",
    "    { signal: controller.signal })",
    "    .then(r => r.json())",
    "    .then(setData);",
    "  return () => controller.abort();",
    "}, []);",
    "$query = new WP_Query([",
    "  'post_type'      => 'property',",
    "  'posts_per_page' => 12,",
    "  'meta_query'     => [[",
    "    'key'     => 'price',",
    "    'value'   => [50000, 500000],",
    "    'type'    => 'NUMERIC',",
    "    'compare' => 'BETWEEN'",
    "  ]]",
    "]);",
    "SELECT p.id, p.title, pm.meta_value",
    "FROM wp_posts p",
    "JOIN wp_postmeta pm ON p.ID = pm.post_id",
    "WHERE p.post_type = 'portfolio'",
    "AND pm.meta_key = '_featured'",
    "ORDER BY p.post_date DESC LIMIT 6;",
    "const [data, setData] = useState(null);",
    "const { data, loading } = useQuery(GET_POSTS);",
    "if (loading) return <Skeleton />;",
    "return data.posts.map(post => (",
    "  <PostCard key={post.id} {...post} />",
    "));",
    "npm run build && gatsby deploy",
    "wp plugin install advanced-custom-fields",
    "php artisan make:migration create_posts",
    "git commit -m 'feat: add custom post type'",
    "docker-compose up --build -d",
  ];

  function init() {
    const introSection = document.getElementById('intro');
    if (!introSection) return;

    const W = window.innerWidth;
    const H = window.innerHeight;

    const app = new PIXI.Application({
      width: W,
      height: H,
      backgroundAlpha: 0,
      antialias: false,
      resolution: 1,
      powerPreference: 'low-power',
    });

    const canvas = app.view;
    canvas.id = 'pixi-bg';
    canvas.style.cssText = [
      'position:fixed',
      'top:0',
      'left:0',
      'width:100%',
      'height:100%',
      'pointer-events:none',
      'z-index:0',
    ].join(';');

    document.body.insertBefore(canvas, document.body.firstChild);

    // ── Code texture (rendered once to RenderTexture for GPU perf) ──
    const codeScratch = new PIXI.Container();
    const textStyle = new PIXI.TextStyle({
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 10,
      fill: ACCENT_CSS,
      letterSpacing: 0.5,
    });

    const LINE_H = 14;
    const COL_W  = 360;
    let lineIdx  = 0;

    for (let col = 0; col * COL_W < W + COL_W; col++) {
      for (let row = 0; row * LINE_H < H + LINE_H; row++) {
        const t = new PIXI.Text(CODE_LINES[lineIdx % CODE_LINES.length], textStyle);
        t.x     = col * COL_W;
        t.y     = row * LINE_H;
        t.alpha = 0.15 + Math.random() * 0.55;
        codeScratch.addChild(t);
        lineIdx++;
      }
    }

    const codeRT = PIXI.RenderTexture.create({ width: W, height: H });
    app.renderer.render(codeScratch, { renderTexture: codeRT });
    codeScratch.destroy(true);

    // ── Layer A — blurred (always-on ambient) ──
    const ambientSprite = new PIXI.Sprite(codeRT);
    ambientSprite.alpha  = 0.06;
    ambientSprite.filters = [new PIXI.filters.BlurFilter(7, 2)];
    app.stage.addChild(ambientSprite);

    // ── Circuit nodes ──
    const nodes = Array.from({ length: 50 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     1.5 + Math.random() * 2.5,
      phase: Math.random() * Math.PI * 2,
      speed: 0.012 + Math.random() * 0.022,
      conn:  [],
    }));

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (dx * dx + dy * dy < 190 * 190) nodes[i].conn.push(j);
      }
    }

    const ambientCircuits = new PIXI.Graphics();
    ambientCircuits.alpha  = 0.1;
    ambientCircuits.filters = [new PIXI.filters.BlurFilter(2, 1)];
    app.stage.addChild(ambientCircuits);

    // ── Layer B — sharp (masked by reveal circles) ──
    const sharpSprite   = new PIXI.Sprite(codeRT);
    sharpSprite.alpha   = 0.7;
    const sharpCircuits = new PIXI.Graphics();

    const sharpContainer = new PIXI.Container();
    sharpContainer.addChild(sharpSprite);
    sharpContainer.addChild(sharpCircuits);

    const revealMask = new PIXI.Graphics();
    sharpContainer.mask = revealMask;
    app.stage.addChild(sharpContainer);
    app.stage.addChild(revealMask); // mask must also be on stage to render

    // ── Mouse wave system ──
    const waves = [];
    let mx = -9999, my = -9999;
    let throttleTimer = 0;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;

      // Throttle wave spawning to ~30/s
      const now = Date.now();
      if (now - throttleTimer < 33) return;
      throttleTimer = now;

      const wave = { x: e.clientX, y: e.clientY, r: 0 };
      waves.push(wave);

      gsap.to(wave, {
        r: 200,
        duration: 1.6,
        ease: 'power2.out',
        onComplete: () => {
          const i = waves.indexOf(wave);
          if (i > -1) waves.splice(i, 1);
        },
      });
    });

    window.addEventListener('mouseleave', () => {
      mx = -9999;
      my = -9999;
    });

    // ── Render loop ──
    app.ticker.add(() => {
      ambientCircuits.clear();
      sharpCircuits.clear();

      for (const n of nodes) {
        n.phase += n.speed;
        const a = 0.2 + Math.sin(n.phase) * 0.2;

        for (const j of n.conn) {
          const n2 = nodes[j];
          ambientCircuits.lineStyle(0.4, ACCENT, a * 0.35);
          ambientCircuits.moveTo(n.x, n.y);
          ambientCircuits.lineTo(n2.x, n2.y);

          sharpCircuits.lineStyle(0.5, ACCENT, a * 0.65);
          sharpCircuits.moveTo(n.x, n.y);
          sharpCircuits.lineTo(n2.x, n2.y);
        }

        ambientCircuits.beginFill(ACCENT, a * 0.4);
        ambientCircuits.drawCircle(n.x, n.y, n.r);
        ambientCircuits.endFill();

        sharpCircuits.beginFill(ACCENT, a);
        sharpCircuits.drawCircle(n.x, n.y, n.r);
        sharpCircuits.endFill();
      }

      // Redraw reveal mask
      revealMask.clear();
      revealMask.beginFill(0xffffff, 1);

      // Static circle following cursor
      if (mx > -999) revealMask.drawCircle(mx, my, 75);

      // Expanding wave rings
      for (const w of waves) {
        revealMask.drawCircle(w.x, w.y, w.r);
      }

      revealMask.endFill();
    });

    // Resize
    window.addEventListener('resize', () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    });
  }

  // Wait for GSAP + PIXI to be ready
  window.addEventListener('load', init);
})();
