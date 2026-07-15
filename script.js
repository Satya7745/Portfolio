(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
  window.__SATYA_PORTFOLIO_BUILD__ = "20260715.14";
  document.body.classList.add("ready");

  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const megaName = $(".mega-name");

  function updateScroll() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    if (megaName && !reduceMotion) {
      const r = megaName.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        megaName.style.translate = `${(0.5 - (window.innerHeight - r.top) / (window.innerHeight + r.height)) * 16}%`;
      }
    }
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  }

  const menuButton = $("#menuButton");
  const mobileNav = $("#mobileNav");

  function closeMenu() {
    if (!menuButton || !mobileNav) return;
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const shouldOpen = mobileNav.hidden;
      mobileNav.hidden = !shouldOpen;
      menuButton.setAttribute("aria-expanded", String(shouldOpen));
      document.body.classList.toggle("menu-open", shouldOpen);
    });
    $$("a", mobileNav).forEach(link => link.addEventListener("click", closeMenu));
  }

  const reveals = $$(".reveal");
  if (reduceMotion) {
    reveals.forEach(item => item.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    reveals.forEach(item => revealObserver.observe(item));
  }

  const riseItems = [];
  [".project-item", ".expertise-grid > div", ".timeline article", ".approach-grid > div"].forEach(sel => {
    $$(sel).forEach((el, i) => { el.dataset.rise = String(Math.min(i, 6)); riseItems.push(el); });
  });
  if (reduceMotion) {
    riseItems.forEach(el => el.classList.add("rise-in"));
  } else {
    const riseObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.transitionDelay = `${Number(el.dataset.rise || 0) * 75}ms`;
        el.classList.add("rise-in");
        riseObserver.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    riseItems.forEach(el => riseObserver.observe(el));
  }

  const counters = $$(".counter");
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = Number(node.dataset.target || 0);
      const duration = reduceMotion ? 1 : 900;
      const start = performance.now();

      function draw(now) {
        const amount = Math.min(1, (now - start) / duration);
        node.textContent = String(Math.round(target * (1 - Math.pow(1 - amount, 3))));
        if (amount < 1) requestAnimationFrame(draw);
      }

      requestAnimationFrame(draw);
      counterObserver.unobserve(node);
    });
  }, { threshold: 0.6 });
  counters.forEach(counter => counterObserver.observe(counter));

  const hero = $("#top");
  if (hero && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("pointermove", event => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--hero-x", `${x * 44}px`);
      hero.style.setProperty("--hero-y", `${y * 32}px`);
      hero.style.setProperty("--portrait-x", `${x * -20}px`);
      hero.style.setProperty("--portrait-y", `${y * -15}px`);
    });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
      hero.style.setProperty("--portrait-x", "0px");
      hero.style.setProperty("--portrait-y", "0px");
    });
  }

  const projects = $$(".project-item");

  function closeProject(project) {
    const trigger = $(".project-trigger", project);
    const detail = $(".project-detail", project);
    const toggle = $(".project-toggle", project);
    if (!trigger || !detail || !toggle || detail.hidden) return;
    project.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
    toggle.textContent = "+";
    if (reduceMotion) {
      detail.hidden = true;
      return;
    }
    const animation = detail.animate([
      { height: `${detail.scrollHeight}px`, opacity: 1 },
      { height: "0px", opacity: 0 }
    ], { duration: 260, easing: "cubic-bezier(0.4, 0, 1, 1)" });
    animation.onfinish = () => {
      detail.hidden = true;
      detail.style.height = "";
      detail.style.opacity = "";
    };
  }

  function openProject(project) {
    const trigger = $(".project-trigger", project);
    const detail = $(".project-detail", project);
    const toggle = $(".project-toggle", project);
    if (!trigger || !detail || !toggle) return;
    detail.hidden = false;
    project.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
    toggle.textContent = "−";
    if (reduceMotion) return;
    const animation = detail.animate([
      { height: "0px", opacity: 0, transform: "translateY(-10px)" },
      { height: `${detail.scrollHeight}px`, opacity: 1, transform: "translateY(0)" }
    ], { duration: 420, easing: "cubic-bezier(0.16, 1, 0.3, 1)" });
    animation.onfinish = () => {
      detail.style.height = "";
      detail.style.opacity = "";
      detail.style.transform = "";
    };
  }

  projects.forEach(project => {
    const trigger = $(".project-trigger", project);
    const detail = $(".project-detail", project);
    const toggle = $(".project-toggle", project);
    if (!trigger || !detail || !toggle) return;

    trigger.addEventListener("click", () => {
      const isOpen = project.classList.contains("open");
      projects.filter(other => other !== project).forEach(closeProject);
      if (isOpen) closeProject(project);
      else openProject(project);
    });
  });

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    $$(".button, .header-contact").forEach(button => {
      button.addEventListener("pointermove", event => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.14;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.14;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener("pointerleave", () => { button.style.transform = ""; });
    });
  }

  const portrait = $("#profileImage");
  if (portrait) {
    portrait.addEventListener("error", () => portrait.closest(".hero-portrait")?.classList.add("image-error"));
  }

  const credentialsToggle = $("#credentialsToggle");
  const secondaryCredentials = $$(".credential-secondary");
  credentialsToggle?.addEventListener("click", () => {
    const willOpen = credentialsToggle.getAttribute("aria-expanded") !== "true";
    credentialsToggle.setAttribute("aria-expanded", String(willOpen));
    secondaryCredentials.forEach(credential => { credential.hidden = !willOpen; });
    credentialsToggle.innerHTML = willOpen
      ? 'Show selected credentials <span aria-hidden="true">&minus;</span>'
      : 'Show all 8 credentials <span aria-hidden="true">+</span>';
  });

  const navLinks = $$(".desktop-nav a");
  const sections = $$("main section[id]");
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: "-44% 0px -50% 0px" });
  sections.forEach(section => sectionObserver.observe(section));

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

})();
