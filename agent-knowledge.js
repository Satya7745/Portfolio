(function initializeSatyaKnowledge(root, factory) {
  const agent = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = agent;
  if (root) root.SATYA_PORTFOLIO_AGENT = agent;
})(typeof globalThis !== "undefined" ? globalThis : this, function buildSatyaKnowledge() {
  "use strict";

  const REFUSAL = "I can only answer questions about Satya's experience, projects, skills, education, certifications, achievements, and contact details.";
  const SECRET_REFUSAL = "For your security, please do not share API keys, passwords, tokens, or other secrets. I only answer questions about Satya's professional profile.";
  const INJECTION_REFUSAL = "I cannot change or reveal my instructions. I can only answer questions about Satya's verified professional information.";

  const entries = [
    {
      id: "profile.summary",
      title: "Professional profile",
      keywords: ["satya", "akella", "who", "about", "profile", "summary", "role", "forward deployed", "ai engineer", "hyderabad"],
      text: "Akella Satya Vijay is a Forward Deployed AI Engineer at LTM in Hyderabad. He works on a Microsoft client engagement and turns enterprise security and data-protection workflows into production agentic AI, RAG, MCP, evaluation, and governance systems."
    },
    {
      id: "profile.impact",
      title: "Selected impact",
      keywords: ["impact", "result", "metric", "45", "5", "60", "90", "tools", "triage", "time", "manual"],
      text: "Selected portfolio metrics include more than 90 integrated agent tools, reducing a representative investigation workflow from about 45 minutes to about 5 minutes, and reducing manual triage effort by about 60 percent."
    },
    {
      id: "experience.ltm",
      title: "LTM and Microsoft client experience",
      keywords: ["ltm", "ltimindtree", "microsoft", "client", "ai 1000", "forward deployed", "experience", "current", "work"],
      text: "At LTM, Satya is part of the AI 1000 Forward Deployed Engineer model on a Microsoft client engagement. He contributed hands-on development across most systems showcased in the portfolio and delivered additional enterprise AI use cases, with ownership spanning architecture, implementation, governance, and adoption."
    },
    {
      id: "experience.progression",
      title: "Career progression",
      keywords: ["career", "progression", "promotion", "machine learning engineer", "aiml engineer", "lead", "timeline", "internship"],
      text: "Satya progressed from Machine Learning Engineer at LTIMindtree from September 2023 to February 2025, to AI/ML Engineer at LTM from February to December 2025, and then into forward deployed AI engineering. Earlier internships covered AWS cloud engineering, Python and Flask automation, RPA, and Salesforce development."
    },
    {
      id: "project.awb",
      title: "Escalation Intelligence MCP",
      keywords: ["awb", "analyst workbench", "escalation", "mcp", "28 tools", "tenant", "similar case", "mitigation"],
      text: "Satya worked on an Escalation Intelligence MCP suite that exposes analyst-workbench context, tenant history, similar-case mining, mitigation reuse, and controlled Kusto access through about 28 purpose-built tools. The design uses governed interfaces, scoped authentication, and managed identity."
    },
    {
      id: "project.kql",
      title: "Natural-language-to-KQL agent",
      keywords: ["kql", "kusto", "natural language", "query", "schema", "telemetry", "nl to kql", "adx"],
      text: "Satya developed a schema-aware natural-language-to-KQL agent grounded on database metadata, curated query examples, value discovery, and controlled execution. It supports joins, nested filters, aggregations, and time-series analysis while retaining generated KQL for analyst review."
    },
    {
      id: "project.studio",
      title: "Security Response Agent Studio",
      keywords: ["agent studio", "security response", "low code", "governance", "approval", "agent platform", "foundry"],
      text: "Satya contributed to a governed low-code Security Response Agent Studio for composing specialist investigation agents with approved knowledge, controlled tools, model configuration, managed identity, audit traces, context optimization, and human approval gates."
    },
    {
      id: "project.icm",
      title: "Incident Management MCP",
      keywords: ["incident", "icm", "37 tools", "on call", "impact", "elicitation", "lifecycle", "mcp"],
      text: "Satya worked on a stateless Incident Management MCP interface with about 37 tools for summaries, similar incidents, customer impact, team and on-call discovery, and lifecycle operations. High-risk state changes require explicit human confirmation through MCP elicitation."
    },
    {
      id: "project.ado",
      title: "DevOps Investigation Agent",
      keywords: ["ado", "azure devops", "wiki", "runbook", "repo", "pipeline", "build", "read only", "investigation"],
      text: "Satya worked on a strictly read-only Azure DevOps investigation agent for wikis, runbooks, work items, repositories, commit history, pipelines, logs, and deployment correlation. Every write capability is intentionally disabled and access uses least-privilege federation."
    },
    {
      id: "project.dlp",
      title: "DLP AI-versus-human validation",
      keywords: ["dlp", "sensitive information", "sit", "ai vs human", "validation", "false positive", "false negative", "ground truth"],
      text: "Satya built validation workflows that compare AI-driven Sensitive Information Type detection with human-annotated ground truth. The pipeline normalizes inconsistent JSON, spreadsheets, logs, and partial extractions, then reports agreement, false positives, false negatives, confidence gaps, and annotation inconsistencies."
    },
    {
      id: "project.risk",
      title: "Insider Risk Intelligence",
      keywords: ["insider risk", "risk", "signals", "policy", "investigator", "risk intelligence"],
      text: "Satya contributed to AI-assisted insider-risk workflows that correlate enterprise activity signals, add policy context, prioritize risk, and produce decision-ready evidence while retaining analyst control over consequential outcomes."
    },
    {
      id: "skills.core",
      title: "Core technical skills",
      keywords: ["skill", "stack", "technology", "python", "pytorch", "langchain", "autogen", "rag", "llm", "mcp", "docker", "kubernetes"],
      text: "Satya's core stack includes Python, PyTorch, Hugging Face Transformers, LangChain, AutoGen, Azure OpenAI, Azure AI Foundry, GCP Vertex AI, MCP, RAG, FAISS, Qdrant, Chroma, KQL and Azure Data Explorer, FastAPI, Flask, Docker, Kubernetes, CI/CD, managed identity, observability, and model governance."
    },
    {
      id: "skills.security",
      title: "Security engineering knowledge",
      keywords: ["security", "cybersecurity", "email threat", "prompt injection", "least privilege", "managed identity", "human in loop", "policy", "guardrail"],
      text: "Satya's security engineering work covers Microsoft Defender for Office 365 response workflows, email threat investigation, incident correlation, least-privilege access, managed identity, read-only tool design, approval gates, prompt-injection awareness, evidence traceability, DLP validation, insider-risk analysis, and human-in-the-loop governance."
    },
    {
      id: "education.bits",
      title: "BITS Pilani master's degree",
      keywords: ["education", "masters", "msc", "bits", "pilani", "data science", "artificial intelligence", "degree"],
      text: "Satya is pursuing an M.Sc. in Data Science and Artificial Intelligence at BITS Pilani from December 2025 to January 2028 while working full time. He previously completed a bachelor's degree in Mathematics, Statistics, and Computer Science in 2023."
    },
    {
      id: "certifications.verified",
      title: "Verified certifications",
      keywords: ["certification", "credential", "badge", "credly", "google", "anthropic", "claude", "stanford", "coursera", "agentspace", "vertex"],
      text: "Satya has 24 credentials listed on LinkedIn and eight directly linked public verifications in the portfolio: Google Cloud Professional Machine Learning Engineer, Anthropic Claude Certified Architect - Foundations, Google Cloud Generative AI Leader, Stanford and DeepLearning.AI Advanced Learning Algorithms, Deploy Google Agentspace, Integrate Vertex AI Search and Conversation, Text Prompt Engineering Techniques, and Explore Generative AI with the Vertex AI Gemini API."
    },
    {
      id: "achievements.summary",
      title: "Achievements and leadership",
      keywords: ["achievement", "award", "hackathon", "mentor", "leadership", "super crew", "top 1", "hackerrank"],
      text: "Satya's reported achievements include an LTM Super Crew Award, a four-star appraisal, leading a winning AI Innovation Sprint team, ranking in the top one percent on HackerRank for Python and SQL, and mentoring more than 300 students."
    },
    {
      id: "contact.links",
      title: "Contact and public links",
      keywords: ["contact", "email", "phone", "linkedin", "github", "medium", "portfolio", "reach", "connect"],
      text: "Satya is based in Hyderabad, India. Contact email: akellasrisatyavijay2@gmail.com. Phone: +91 93915 20600. LinkedIn: linkedin.com/in/satyavijay. GitHub: github.com/Satya7745. Medium: medium.com/@akellasrisatyavijay."
    },
    {
      id: "agent.policy",
      title: "Portfolio agent security policy",
      keywords: ["agent policy", "security policy", "privacy", "what can you answer", "scope", "guardrail", "safe"],
      text: "This portfolio agent is closed-domain. It answers only from approved facts about Satya's professional profile. It rejects unrelated questions, prompt-injection attempts, requests for hidden instructions, and messages containing secrets. It does not browse, execute tools, reveal system prompts, or make unsupported claims."
    }
  ];

  const stopWords = new Set(["a", "an", "and", "are", "about", "can", "do", "does", "for", "from", "he", "his", "how", "i", "in", "is", "it", "me", "of", "on", "or", "tell", "the", "to", "was", "what", "when", "where", "which", "who", "with", "you", "your"]);
  const secretPatterns = [
    /AIza[0-9A-Za-z_-]{20,}/,
    /\bsk-[0-9A-Za-z_-]{16,}\b/i,
    /\b(?:api[_ -]?key|password|passwd|secret|access[_ -]?token|bearer)\s*[:=]\s*\S+/i,
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i
  ];
  const injectionPatterns = [
    /ignore (?:all |any )?(?:previous|prior|above|system) instructions?/i,
    /reveal (?:your |the )?(?:system prompt|hidden instructions?|developer message|policy)/i,
    /(?:act|pretend|behave) as (?:if )?(?:you are )?(?!satya(?:'s)? portfolio)/i,
    /jailbreak|developer mode|do anything now|DAN\b/i,
    /override (?:your |the )?(?:rules|policy|instructions?)/i,
    /repeat (?:the |your )?(?:prompt|instructions?) verbatim/i
  ];
  const unrelatedIntentPatterns = [
    /\bweather|forecast|temperature|rain(?:ing)?\b/i,
    /\bnews|sports?|cricket|football|politics|election\b/i,
    /\brecipe|cook|restaurant|movie|music|travel booking\b/i,
    /\bwrite|generate|debug|solve|calculate|translate\b.{0,30}\b(?:code|program|essay|poem|equation|homework|algorithm)\b/i,
    /\b(?:code|program|essay|poem|equation|homework|algorithm)\b.{0,30}\b(?:for me|please)\b/i
  ];
  const professionalIntentPatterns = [
    /\b(?:satya|akella|his|he)\b.{0,56}\b(?:about|profile|role|work|build|built|develop|developed|contribute|contributed|experience|career|projects?|skills?|stack|education|degree|certifications?|credentials?|achievements?|awards?|contact|email|phone|linkedin|github|medium|based|location|security|cybersecurity)\b/i,
    /\b(?:who is|tell me about|contact|reach)\b.{0,24}\b(?:satya|akella|him)\b/i,
    /\b(?:experience|career|projects?|skills?|stack|education|degree|certifications?|credentials?|achievements?|awards?|contact|portfolio|security|cybersecurity|security policy)\b/i,
    /\b(?:ltm|ltimindtree|microsoft client|ai 1000|forward deployed|mcp|kql|kusto|rag|agentic|autogen|langchain|azure|gcp|vertex|pytorch|hugging face|dlp|insider risk|incident management|security response|analyst workbench|bits pilani|credly|claude certified|machine learning engineer)\b/i,
    /^(?:satya|akella satya vijay|akella sri satya vijay)[?.! ]*$/i,
    /\bwhat can you answer|what do you know|your scope|your security\b/i
  ];

  const intentRules = [
    { id: "contact", pattern: /\b(?:contact|reach|email|phone|linkedin|github|medium)\b/i, factIds: ["contact.links"] },
    { id: "certifications", pattern: /\b(?:certifications?|credentials?|badges?|credly|claude certified|professional machine learning engineer|generative ai leader)\b/i, factIds: ["certifications.verified"] },
    { id: "education", pattern: /\b(?:education|degree|masters?|m\.?sc\.?|bits pilani|college|university)\b/i, factIds: ["education.bits"] },
    { id: "achievements", pattern: /\b(?:achievements?|awards?|hackathon|mentor(?:ing)?|super crew|hackerrank|leadership)\b/i, factIds: ["achievements.summary"] },
    { id: "skills", pattern: /\b(?:skills?|stack|technolog(?:y|ies)|tools?|python|pytorch|langchain|autogen|rag|llm|docker|kubernetes|vector database)\b/i, factIds: ["skills.core", "skills.security"] },
    { id: "microsoft", pattern: /\b(?:microsoft client|client engagement|ai 1000|forward deployed|ltm|ltimindtree)\b/i, factIds: ["experience.ltm", "profile.summary"] },
    { id: "security_projects", pattern: /\b(?:security|cybersecurity|threat|defender|incident|dlp|insider risk)\b.{0,36}\bprojects?\b|\bprojects?\b.{0,36}\b(?:security|cybersecurity|threat|defender|incident|dlp|insider risk)\b/i, factIds: ["project.awb", "project.kql", "project.studio", "project.icm", "project.ado", "project.dlp", "project.risk"] },
    { id: "awb", pattern: /\b(?:awb|analyst workbench|escalation intelligence|escalation mcp)\b/i, factIds: ["project.awb"] },
    { id: "kql", pattern: /\b(?:natural language to kql|nl to kql|kql agent|kusto query|schema grounded)\b/i, factIds: ["project.kql"] },
    { id: "studio", pattern: /\b(?:security response agent studio|agent studio|low code agent)\b/i, factIds: ["project.studio"] },
    { id: "incident", pattern: /\b(?:incident management|icm agent|incident mcp|on call)\b/i, factIds: ["project.icm"] },
    { id: "ado", pattern: /\b(?:azure devops|ado agent|devops investigation|read only agent)\b/i, factIds: ["project.ado"] },
    { id: "dlp", pattern: /\b(?:dlp|sensitive information|sit detection|ai vs human)\b/i, factIds: ["project.dlp"] },
    { id: "risk", pattern: /\b(?:insider risk|risk intelligence)\b/i, factIds: ["project.risk"] },
    { id: "projects", pattern: /\b(?:projects?|systems?|use cases?|built|developed|portfolio work)\b/i, factIds: ["project.awb", "project.kql", "project.studio", "project.icm", "project.ado", "project.dlp", "project.risk"] },
    { id: "impact", pattern: /\b(?:impact|results?|metrics?|outcomes?|45|60 percent|90 tools|time saved)\b/i, factIds: ["profile.impact"] },
    { id: "experience", pattern: /\b(?:experience|career|progression|roles?|internships?|work history)\b/i, factIds: ["experience.ltm", "experience.progression"] },
    { id: "policy", pattern: /\b(?:what can you answer|what do you know|your scope|your security|security policy|privacy)\b/i, factIds: ["agent.policy"] },
    { id: "profile", pattern: /\b(?:who is satya|about satya|satya's profile|professional profile|current role|based)\b/i, factIds: ["profile.summary", "experience.ltm"] }
  ];

  const answerBuilders = {
    profile: facts => `Satya is a Forward Deployed AI Engineer at LTM in Hyderabad, working on a Microsoft client engagement. His focus is production agentic AI, RAG, MCP tooling, evaluation, and governance for enterprise security and data-protection workflows.`,
    microsoft: facts => `Satya works in LTM's AI 1000 Forward Deployed Engineer model on a Microsoft client engagement. He has contributed hands-on development across most systems shown in this portfolio and delivered additional enterprise AI use cases, with responsibility spanning architecture, implementation, governance, and adoption.`,
    experience: facts => `Satya's career has progressed from Machine Learning Engineer to AI/ML Engineer and then forward deployed AI engineering at LTM. His current work combines client-facing problem discovery with production architecture and delivery. Earlier internships gave him foundations in AWS, Python/Flask automation, RPA, and Salesforce.`,
    skills: facts => `Satya's core technical stack includes:\n• Agentic AI: AutoGen, LangChain, MCP, tool calling, routing, and human approval\n• LLM and retrieval: RAG, Hugging Face, FAISS, Qdrant, and Chroma\n• ML and data: Python, PyTorch, NLP, KQL, and Azure Data Explorer\n• Production: Azure AI Foundry, Vertex AI, FastAPI, Docker, Kubernetes, CI/CD, managed identity, observability, and model governance\n• Security: least privilege, read-only tools, DLP validation, incident response, and prompt-injection-aware design`,
    education: facts => `Satya is pursuing an M.Sc. in Data Science and Artificial Intelligence at BITS Pilani from December 2025 to January 2028 while working full time. He completed a bachelor's degree in Mathematics, Statistics, and Computer Science in 2023.`,
    certifications: facts => `Satya lists 24 credentials on LinkedIn. Eight have direct public verification links in this portfolio, including Google Cloud Professional Machine Learning Engineer, Anthropic Claude Certified Architect - Foundations, Google Cloud Generative AI Leader, Stanford/DeepLearning.AI Advanced Learning Algorithms, and four Google Cloud skill badges covering Agentspace, Vertex AI Search, prompt engineering, and the Gemini API.`,
    achievements: facts => `Satya's reported achievements include an LTM Super Crew Award, a four-star appraisal, leading a winning AI Innovation Sprint team, a top-one-percent HackerRank result for Python and SQL, and mentoring more than 300 students.`,
    contact: facts => `You can reach Satya at akellasrisatyavijay2@gmail.com or +91 93915 20600. His public profiles are LinkedIn (linkedin.com/in/satyavijay), GitHub (github.com/Satya7745), and Medium (medium.com/@akellasrisatyavijay).`,
    impact: facts => `Selected portfolio outcomes include more than 90 integrated agent tools, reducing a representative investigation workflow from about 45 minutes to about 5 minutes, and reducing manual triage effort by about 60%.`,
    security_projects: facts => `Satya's security-focused portfolio includes:\n• Escalation Intelligence MCP for analyst context, tenant history, case mining, and mitigation reuse\n• Natural-language-to-KQL for governed telemetry analysis\n• Security Response Agent Studio with managed identity, audit traces, and approval gates\n• Incident Management MCP with human-confirmed lifecycle actions\n• A read-only Azure DevOps investigation agent\n• DLP AI-versus-human validation\n• Insider Risk Intelligence with analyst-controlled decisions`,
    projects: facts => `Satya's selected portfolio systems are Escalation Intelligence MCP, a natural-language-to-KQL agent, Security Response Agent Studio, Incident Management MCP, a read-only DevOps Investigation Agent, DLP AI-versus-human validation, and Insider Risk Intelligence. Ask me about any one of these for its purpose and design.`,
    policy: facts => `I am a closed-domain portfolio agent. I answer only from approved facts about Satya's professional profile. I do not browse, execute actions, collect secrets, reveal hidden instructions, or answer unrelated questions.`
  };

  function normalize(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9+#.\- ]+/g, " ").replace(/\s+/g, " ").trim();
  }

  function tokenize(value) {
    return normalize(value).split(" ").filter(token => token.length > 1 && !stopWords.has(token));
  }

  function containsSecret(value) {
    return secretPatterns.some(pattern => pattern.test(String(value || "")));
  }

  function containsInjection(value) {
    return injectionPatterns.some(pattern => pattern.test(String(value || "")));
  }

  function retrieve(query, limit) {
    const normalized = normalize(query);
    const tokens = tokenize(query);
    return entries
      .map(entry => {
        const title = normalize(entry.title);
        const keywords = entry.keywords.map(normalize);
        const text = normalize(entry.text);
        let score = 0;
        keywords.forEach(keyword => {
          if (normalized.includes(keyword)) score += keyword.includes(" ") ? 5 : 3;
        });
        tokens.forEach(token => {
          if (title.includes(token)) score += 3;
          if (keywords.some(keyword => keyword.includes(token))) score += 2;
          if (text.includes(token)) score += 0.5;
        });
        return { entry, score };
      })
      .filter(result => result.score >= 2)
      .sort((left, right) => right.score - left.score)
      .slice(0, limit || 4)
      .map(result => result.entry);
  }

  function resolveIntent(query) {
    const rule = intentRules.find(candidate => candidate.pattern.test(String(query || "")));
    if (!rule) return null;
    return {
      id: rule.id,
      facts: rule.factIds.map(id => entries.find(entry => entry.id === id)).filter(Boolean)
    };
  }

  function inspect(query) {
    const value = String(query || "").trim();
    if (!value) return { allowed: false, reason: "empty", response: REFUSAL, facts: [] };
    if (value.length > 500) return { allowed: false, reason: "too_long", response: "Please keep questions under 500 characters and ask only about Satya's professional profile.", facts: [] };
    if (containsSecret(value)) return { allowed: false, reason: "secret", response: SECRET_REFUSAL, facts: [] };
    if (containsInjection(value)) return { allowed: false, reason: "injection", response: INJECTION_REFUSAL, facts: [] };
    if (unrelatedIntentPatterns.some(pattern => pattern.test(value))) return { allowed: false, reason: "out_of_scope", response: REFUSAL, facts: [] };

    const normalized = normalize(value);
    if (/^(hi|hello|hey|namaste|good morning|good afternoon|good evening)( there)?[.! ]*$/.test(normalized)) {
      return { allowed: true, reason: "greeting", response: "Hi, I am Satya's portfolio agent. Ask me about his experience, AI and security projects, skills, education, certifications, achievements, or contact details.", facts: [entries[0]] };
    }
    if (/^(?:what|why|how|more|details?|tell me more|and\??|anything else)[?.! ]*$/i.test(normalized)) {
      return { allowed: false, reason: "ambiguous", response: "Could you be more specific? You can ask about Satya's Microsoft experience, security projects, technical skills, education, certifications, achievements, or contact details.", facts: [] };
    }
    if (!professionalIntentPatterns.some(pattern => pattern.test(value))) return { allowed: false, reason: "out_of_scope", response: REFUSAL, facts: [] };

    const intent = resolveIntent(value);
    const facts = intent?.facts.length ? intent.facts : retrieve(value, 4);
    if (!facts.length) return { allowed: false, reason: "out_of_scope", response: REFUSAL, facts: [] };
    return { allowed: true, reason: "portfolio", intent: intent?.id || "facts", response: "", facts };
  }

  function localAnswer(query) {
    const result = inspect(query);
    if (!result.allowed || result.reason === "greeting") return { answer: result.response, sourceIds: result.facts.map(fact => fact.id), reason: result.reason };
    const builder = answerBuilders[result.intent];
    const answer = builder ? builder(result.facts) : result.facts.slice(0, 2).map(fact => fact.text).join("\n\n");
    return { answer: answer.slice(0, 1200), sourceIds: result.facts.slice(0, 3).map(fact => fact.id), reason: result.reason };
  }

  function sanitizeOutput(value) {
    let output = String(value || "").replace(/<[^>]*>/g, "").trim();
    secretPatterns.forEach(pattern => { output = output.replace(pattern, "[redacted]"); });
    return output.replace(/https?:\/\/\S+/gi, "").trim().slice(0, 1400);
  }

  return Object.freeze({ entries, REFUSAL, SECRET_REFUSAL, INJECTION_REFUSAL, inspect, retrieve, resolveIntent, localAnswer, sanitizeOutput });
});