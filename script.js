/* =========================================================
   Akella Satya Vijay — Portfolio interactions
   Custom cursor · particles · reveals · counters ·
   typing · tilt · spotlight · magnetic · nav
   ========================================================= */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Footer year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Scroll progress ---------- */
  const bar = $("#scrollBar");
  const onScrollProgress = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    if (bar) bar.style.width = (scrolled * 100) + "%";
  };
  window.addEventListener("scroll", onScrollProgress, { passive: true });
  onScrollProgress();

  /* ---------- Nav: scrolled state + mobile toggle + active link ---------- */
  const nav = $("#nav");
  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const sections = $$("main section[id]");
  const navAnchors = $$(".nav-links a");
  if (sections.length && navAnchors.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = en.target.getAttribute("id");
          navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$(".reveal");
  if (reveals.length) {
    const ro = new IntersectionObserver((entries, obs) => {
      entries.forEach((en, i) => {
        if (en.isIntersecting) {
          const el = en.target;
          const delay = Math.min(i * 60, 240);
          el.style.transitionDelay = delay + "ms";
          el.classList.add("in");
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => ro.observe(el));
  }

  /* ---------- Animated counters ---------- */
  const counters = $$(".counter");
  if (counters.length) {
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseFloat(el.dataset.target || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const dur = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => co.observe(el));
  }

  /* ---------- Hero role rotator (typing) ---------- */
  const rotator = $("#roleRotator");
  if (rotator && !reduceMotion) {
    const roles = [
      "Forward Deployed AI Engineer",
      "Agentic AI Architect",
      "LLM Systems Engineer",
      "MCP Tooling Builder"
    ];
    let ri = 0, ci = 0, deleting = false;
    const word = () => rotator.querySelector(".role-word") || rotator;
    const type = () => {
      const full = roles[ri];
      ci += deleting ? -1 : 1;
      word().textContent = full.slice(0, ci);
      let wait = deleting ? 45 : 85;
      if (!deleting && ci === full.length) { wait = 1700; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; wait = 350; }
      setTimeout(type, wait);
    };
    rotator.innerHTML = '<span class="role-word"></span>';
    setTimeout(type, 700);
  }

  /* ---------- Custom cursor ---------- */
  const dot = $("#cursorDot");
  const ring = $("#cursorRing");
  if (dot && ring && !isTouch) {
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    $$("a, button, [data-tilt], [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
    });
  }

  /* ---------- Magnetic elements ---------- */
  if (!isTouch) {
    $$("[data-magnetic]").forEach((el) => {
      const strength = 0.35;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- 3D tilt + spotlight ---------- */
  if (!isTouch && !reduceMotion) {
    $$("[data-tilt]").forEach((el) => {
      const max = 8;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rotX = (0.5 - py) * max;
        const rotY = (px - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        if (el.hasAttribute("data-spotlight")) {
          el.style.setProperty("--mx", (px * 100) + "%");
          el.style.setProperty("--my", (py * 100) + "%");
        }
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }
  // Spotlight for cards without tilt-follow already handled; ensure plain spotlight cards update too
  $$("[data-spotlight]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  });

  /* ---------- Hero particle constellation ---------- */
  const canvas = $("#heroCanvas");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, particles = [], raf, running = true;
    const COUNT = () => Math.min(90, Math.floor(window.innerWidth / 16));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const make = () => {
      particles = Array.from({ length: COUNT() }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150,170,255,0.6)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            const alpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(109,94,252,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      if (running) raf = requestAnimationFrame(draw);
    };
    const init = () => { resize(); make(); cancelAnimationFrame(raf); running = true; draw(); };
    window.addEventListener("resize", () => { resize(); make(); });
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) { raf = requestAnimationFrame(draw); } else { cancelAnimationFrame(raf); }
    });
    init();
  }
})();
