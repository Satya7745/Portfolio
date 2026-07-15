(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
  window.__SATYA_PORTFOLIO_BUILD__ = "20260715.2";
  document.body.classList.add("ready");

  const header = $("#siteHeader");
  const progress = $("#scrollProgress");

  function updateScroll() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
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
      hero.style.setProperty("--hero-x", `${x * 28}px`);
      hero.style.setProperty("--hero-y", `${y * 20}px`);
      hero.style.setProperty("--portrait-x", `${x * -12}px`);
      hero.style.setProperty("--portrait-y", `${y * -9}px`);
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

  const portfolioAgent = $("#portfolioAgent");
  const agentPanel = $("#agentPanel");
  const agentLauncher = $("#agentLauncher");
  const agentClose = $("#agentClose");
  const agentForm = $("#agentForm");
  const agentInput = $("#agentInput");
  const agentSend = $("#agentSend");
  const agentMessages = $("#agentMessages");
  const agentPrompts = $("#agentPrompts");
  const agentStatus = $("#agentStatus");
  const agentKnowledge = window.SATYA_PORTFOLIO_AGENT;
  let agentBusy = false;
  let agentRequestCount = 0;
  const agentClientId = (() => {
    const bytes = new Uint32Array(3);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, value => value.toString(36)).join("");
  })();

  function agentEndpoint() {
    const configured = portfolioAgent?.dataset.endpoint?.trim();
    if (configured) return configured;
    if (location.hostname.endsWith(".vercel.app") || (location.hostname === "localhost" && location.port === "3000")) return "/api/chat";
    return "";
  }

  function requestJsonp(endpoint, message) {
    return new Promise((resolve, reject) => {
      const callback = `__satyaAgent_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const script = document.createElement("script");
      const timer = window.setTimeout(() => finish(new Error("Agent timeout")), 11000);
      function finish(error, payload) {
        window.clearTimeout(timer);
        delete window[callback];
        script.remove();
        if (error) reject(error);
        else resolve(payload);
      }
      window[callback] = payload => finish(null, payload);
      script.onerror = () => finish(new Error("Agent endpoint unavailable"));
      const query = new URLSearchParams({ callback, q: message, client: agentClientId });
      script.src = `${endpoint}?${query.toString()}`;
      document.head.append(script);
    });
  }

  function setAgentOpen(open) {
    if (!agentPanel || !agentLauncher) return;
    agentPanel.hidden = !open;
    agentLauncher.setAttribute("aria-expanded", String(open));
    if (open) window.setTimeout(() => agentInput?.focus(), 80);
  }

  function addAgentMessage(role, text, options) {
    if (!agentMessages) return null;
    const message = document.createElement("div");
    message.className = `agent-message ${role}`;
    if (options?.thinking) message.classList.add("thinking");
    const label = document.createElement("span");
    label.textContent = role === "user" ? "You" : "Agent";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.append(label, paragraph);
    agentMessages.append(message);
    agentMessages.scrollTop = agentMessages.scrollHeight;
    return message;
  }

  async function requestAgent(message) {
    const decision = agentKnowledge?.inspect(message);
    if (!decision) return { answer: "The portfolio knowledge module is unavailable. Please use Satya's contact links instead.", mode: "error" };
    if (!decision.allowed || decision.reason === "greeting") return { answer: decision.response, mode: "policy" };

    const endpoint = agentEndpoint();
    if (!endpoint) return { ...agentKnowledge.localAnswer(message), mode: "verified_local" };
    try {
      const payload = endpoint.includes("script.google.com/macros/s/")
        ? await requestJsonp(endpoint, message)
        : await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
          }).then(response => {
            if (!response.ok) throw new Error("Agent endpoint unavailable");
            return response.json();
          });
      if (typeof payload.answer !== "string") throw new Error("Invalid agent response");
      return payload;
    } catch {
      return { ...agentKnowledge.localAnswer(message), mode: "verified_local" };
    }
  }

  async function submitAgentQuestion(question) {
    const message = String(question || "").trim();
    if (!message || agentBusy) return;
    if (agentRequestCount >= 15) {
      addAgentMessage("assistant", "This session has reached its question limit. You can refresh the page or contact Satya directly.");
      return;
    }
    agentRequestCount += 1;
    agentBusy = true;
    if (agentInput) agentInput.value = "";
    if (agentSend) agentSend.disabled = true;
    if (agentStatus) agentStatus.textContent = "Checking approved portfolio facts...";
    addAgentMessage("user", message);
    const thinking = addAgentMessage("assistant", "Checking verified facts", { thinking: true });
    const result = await requestAgent(message);
    thinking?.remove();
    addAgentMessage("assistant", agentKnowledge?.sanitizeOutput(result.answer) || "I could not answer that from the approved portfolio facts.");
    if (agentStatus) {
      agentStatus.textContent = result.mode === "gemini"
        ? "Gemini response grounded in approved portfolio facts."
        : result.mode === "verified_fallback"
          ? "Secure backend online; add the Gemini key to enable model synthesis."
          : "Verified portfolio knowledge. No browsing or actions.";
    }
    if (agentSend) agentSend.disabled = false;
    agentBusy = false;
    agentInput?.focus();
  }

  agentLauncher?.addEventListener("click", () => setAgentOpen(agentPanel?.hidden !== false));
  agentClose?.addEventListener("click", () => setAgentOpen(false));
  agentForm?.addEventListener("submit", event => {
    event.preventDefault();
    submitAgentQuestion(agentInput?.value);
  });
  agentPrompts?.addEventListener("click", event => {
    const prompt = event.target.closest("[data-question]");
    if (prompt) submitAgentQuestion(prompt.dataset.question);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && agentPanel?.hidden === false) setAgentOpen(false);
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
