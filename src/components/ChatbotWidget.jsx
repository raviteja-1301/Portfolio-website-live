import React, { useEffect, useRef, useState } from "react";
import "./chatbot.css";

const PROFILE = {
  education: "M.S. Information Technology, Arizona State University (Tempe)",
  graduation: "December 2025",
  location: "Tempe, AZ",
  email: "rbuchaia@asu.edu",
  phone: "(602)-427-8809",
  linkedin: "https://www.linkedin.com/in/rteja-buchaiah/",
  github: "https://github.com/raviteja-1301",
  portfolioTech: [
    "React 18",
    "Vite 5",
    "EmailJS",
    "lucide-react",
    "Vanilla CSS",
  ],
};

const PROJECT_DETAILS = [
  {
    name: "Job Tracking Web Application (MERN Stack)",
    timeline: "Fall 2025",
    stack:
      "MongoDB, Express.js, React, Node.js, Vite, JWT, Cloudinary, REST APIs",
    bullets: [
      "Developed a scalable MERN-stack job tracking platform enabling users to manage applications, update profiles, and view analytics with secure JWT-based authentication and authorization.",
      "Built optimized Express.js + Mongoose REST APIs, leveraging aggregation pipelines to improve data retrieval performance by 45% on large job datasets.",
      "Designed an interactive React (Vite) dashboard with filtering, sorting, and analytics visualizations using Axios and Recharts, delivering a responsive, cross-device user experience.",
    ],
    href: "https://github.com/raviteja-1301/Job-Tracking-Web-Application-MERN-",
    keywords: ["job tracking", "mern", "jwt", "cloudinary"],
  },
  {
    name: "Diabetes Prediction Chatbot (ML Deployment + LLM Integration)",
    timeline: "Fall 2025",
    stack: "Python, Scikit-learn, XGBoost, Flask, JavaScript, Tableau, LLMs",
    bullets: [
      "Engineered an ML-powered chatbot using Python and Flask to predict diabetes risk from 250K+ records, improving minority-class recall by 35% through SMOTE + ENN class balancing.",
      "Trained and optimized XGBoost and Random Forest models, achieving >85% F1 score; automated feature selection reduced dimensionality by 40% without accuracy loss.",
      "Developed an interactive web interface and Tableau dashboard for personalized risk insights, integrating LLM-based conversational responses for explainable predictions.",
    ],
    href: "https://github.com/raviteja-1301/Diabetes-Prediction-Chatbot",
    keywords: ["diabetes", "xgboost", "smote", "enn", "flask", "tableau"],
  },
  {
    name: "AI-Powered Chatbot Web Application",
    timeline: "Spring 2025",
    stack:
      "JavaScript, HTML5, CSS3, Google Gemini API, REST APIs, UX Design, DOM Manipulation",
    bullets: [
      "Built a fully responsive AI chatbot interface using vanilla JavaScript, HTML, and CSS, optimized for cross-device compatibility and smooth user interaction.",
      "Integrated Google Gemini 1.5 Flash API to support real-time text and image inputs using base64 encoding, enabling dynamic and context-aware responses.",
      "Implemented efficient DOM-based rendering, animated loading indicators, and chat history management to deliver a high-performance user experience.",
    ],
    href: "https://github.com/raviteja-1301/AI-Powered-Chatbot-Web-Application",
    keywords: ["ai-powered chatbot", "gemini", "chatbot web application"],
  },
  {
    name: "Book Recommendation & User Analytics System",
    timeline: "September 2024 – December 2024",
    stack:
      "Python, Pandas, Apache Spark, Machine Learning, K-Means, Collaborative Filtering",
    bullets: [
      "Built a collaborative filtering recommendation system on 1M+ ratings across 270K+ books, delivering personalized top-rated recommendations.",
      "Performed user segmentation using K-Means, Hierarchical Clustering, and DBSCAN on 10,000+ users, improving projected engagement by 25%.",
      "Trained Linear, Logistic, and Decision Tree models to predict user demographics, achieving 98% accuracy and reducing RMSE by 50% using K-fold cross-validation.",
    ],
    href: "https://github.com/raviteja-1301/Book-Recommendation-and-User-Analytics-System",
    keywords: [
      "book recommendation",
      "collaborative filtering",
      "spark",
      "k-means",
    ],
  },
  {
    name: "IPL Match Analytics & Data Visualization (Tableau)",
    timeline: "October 2024 – November 2024",
    stack:
      "Tableau, Data Cleaning, Interactive Dashboards, Performance Optimization",
    bullets: [
      "Developed a large-scale IPL analytics dashboard using 243,817 ball-by-ball records and 1,024 match summaries, creating 10+ interactive visualizations.",
      "Reduced missing data impact from 100% to 0% and improved analysis efficiency by 60% through preprocessing and optimization.",
      "Enhanced dashboard clarity by optimizing data-ink ratio from 80% to 100% and implementing filters, drill-downs, and calculated fields, reducing analysis time by 40%.",
    ],
    href: "https://github.com/raviteja-1301/IPL-Match-Analytics-Data-Visualization-using-Tableau",
    keywords: ["ipl", "tableau dashboard", "match analytics"],
  },
  {
    name: "Taxi Booking App Database System (Uber/Lyft Style)",
    timeline: "Fall 2024",
    stack:
      "SQL Server, SQL, Database Design, Stored Procedures, Triggers, Views",
    bullets: [
      "Designed a normalized relational database schema for a taxi booking platform managing users, drivers, trips, and payments, improving query efficiency by 40%.",
      "Implemented stored procedures, triggers, and views to automate auditing, monitor operations, and generate insights on driver performance and user activity.",
      "Built user-defined functions (UDFs) to compute metrics such as average driver ratings and trip statistics, enabling real-time analytics and reporting.",
    ],
    href: "https://github.com/raviteja-1301/Taxi-Booking-App-Database-System-Uber-Lyft-",
    keywords: ["taxi booking", "uber", "lyft", "sql server", "database system"],
  },
];

const SUGGESTED_QUESTIONS = [
  "Show me your projects",
  "Tell me about the MERN job tracking app",
  "Tell me about the diabetes prediction chatbot",
  "What skills do you have?",
  "What experience do you have?",
  "How can I contact you?",
];

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a2 2 0 0 0-2 2v1H8a4 4 0 0 0-4 4v3a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7V9a4 4 0 0 0-4-4h-2V4a2 2 0 0 0-2-2zm-1 6h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM7 11a1 1 1 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function renderText(t) {
  if (!t) return null;
  const fixed = String(t).replace(/\\n/g, "\n");
  const parts = fixed.split("\n");
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {part}
    </React.Fragment>
  ));
}

function normalizeForMatch(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function detectSectionLink(q) {
  const m = (q || "")
    .trim()
    .toLowerCase()
    .replace(/[.!?]+$/, "");
  const map = {
    home: { href: "#home", label: "Go to Home" },
    about: { href: "#about", label: "Go to About" },
    experience: { href: "#experience", label: "Go to Experience" },
    skills: { href: "#skills", label: "Go to Skills" },
    projects: { href: "#projects", label: "Go to Projects" },
    project: { href: "#projects", label: "Go to Projects" },
    contact: { href: "#contact", label: "Go to Contact" },
  };
  for (const key of Object.keys(map)) {
    if (m.endsWith(key)) return map[key];
  }
  return null;
}

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const OUT_OF_SCOPE_REPLY =
  "You can talk to Google Gemini AI agent for general questions — this assistant is only related to Ravi's portfolio.";

function levenshtein(a, b) {
  const s = String(a || "");
  const t = String(b || "");
  if (s === t) return 0;
  if (!s) return t.length;
  if (!t) return s.length;
  const n = s.length;
  const m = t.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      );
    }
  }
  return dp[n][m];
}

const INTENT_WORDS = {
  projects: ["projects", "project"],
  skills: ["skills", "skill"],
  experience: ["experience", "experiences"],
  contact: ["contact", "email", "phone", "linkedin", "github", "location"],
  resume: ["resume", "cv"],
  education: ["education", "degree"],
};

function detectIntentWithTypos(q) {
  const raw = String(q || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s#]/g, " ");
  const tokens = raw.split(/\s+/).filter(Boolean);

  const candidates = [];
  for (const [intent, words] of Object.entries(INTENT_WORDS)) {
    for (const word of words) {
      candidates.push({ intent, word });
    }
  }

  let best = null;
  for (const token of tokens) {
    if (token.length < 4) continue;
    for (const c of candidates) {
      const d = levenshtein(token, c.word);
      const threshold = token.length <= 6 ? 1 : 2;
      if (d <= threshold && token !== c.word) {
        if (!best || d < best.distance) {
          best = { intent: c.intent, from: token, to: c.word, distance: d };
        }
      }
    }
  }
  return best;
}

async function callGemini({ text, context }) {
  const key = globalThis?.__RAVI_PORTFOLIO_ENV__?.VITE_GEMINI_API_KEY;
  if (!key) {
    return "Gemini API key is not set. Add VITE_GEMINI_API_KEY to your .env to enable AI answers. For now, ask me about Projects, Skills, Experience, or Contact. 🙂";
  }
  const prompt = [
    "You are a helpful assistant embedded in Ravi's portfolio website.",
    "Use the provided context (projects and visible sections) if relevant.",
    `If the user asks anything unrelated to Ravi's portfolio website, reply with exactly: "${OUT_OF_SCOPE_REPLY}"`,
    "Be concise and friendly. If the user asks about navigating, reference section IDs.",
    "",
    "Context:",
    context,
    "",
    "User:",
    text,
  ].join("\\n");

  const body = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
  const url = `${GEMINI_ENDPOINT}?key=${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(`Gemini error: ${res.status} ${msg}`);
  }
  const data = await res.json();
  const textOut = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return (
    textOut || "I couldn't generate a response right now. Please try again."
  );
}

function isPortfolioQuestion(t, meta) {
  const q = (t || "").trim().toLowerCase();
  if (!q) return true;

  const typo = detectIntentWithTypos(q);
  if (typo) return true;

  const keywords = [
    "ravi",
    "raviteja",
    "portfolio",
    "website",
    "this site",
    "this page",
    "section",
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "project",
    "contact",
    "email",
    "linkedin",
    "github",
    "resume",
    "cv",
    "education",
    "degree",
    "graduation",
    "intern",
    "job",
    "work",
    "chatbot",
    "gemini",
    "api key",
  ];
  if (keywords.some((k) => q.includes(k))) return true;

  if (detectSectionLink(q)) return true;

  const sections = meta?.sections || [];
  if (sections.some((id) => q.includes(`#${id}`) || q.includes(id)))
    return true;

  const projectTitles = meta?.projects || [];
  if (projectTitles.some((p) => p && q.includes(p.toLowerCase()))) return true;

  return false;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showTip, setShowTip] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm your portfolio assistant. Ask me about projects, skills, experience, or how to contact me. 😊",
    },
  ]);
  const bodyRef = useRef(null);
  const metaRef = useRef({ projects: [], sections: [] });

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 1000);
    const hide = setTimeout(() => setShowTip(false), 7000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    const projectEls = Array.from(document.querySelectorAll("#projects h3"));
    metaRef.current.projects = projectEls
      .map((el) => el.textContent.trim())
      .slice(0, 8);
    metaRef.current.sections = Array.from(
      document.querySelectorAll("main section[id]"),
    ).map((el) => el.id);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  function reply(text, link) {
    setMessages((m) => [...m, { role: "bot", text, link }]);
  }

  async function handleSend(userText) {
    const text = userText.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    const t = text.toLowerCase();
    const tn = normalizeForMatch(text);
    const typoIntent = detectIntentWithTypos(t);

    // Quick local intents
    if (/(hi|hello|hey|yo)\b/.test(t)) {
      reply(
        "Hello! You can ask things like ‘Show me your projects’, ‘What are your skills?’, or ‘How can I contact you?’. 🤖",
      );
      return;
    }

    const matchedProject = PROJECT_DETAILS.find(
      (p) =>
        tn.includes(normalizeForMatch(p.name)) ||
        p.keywords.some((k) => tn.includes(normalizeForMatch(k))),
    );
    if (matchedProject) {
      reply(
        `${matchedProject.name}\nTimeline: ${matchedProject.timeline}\nTech Stack: ${matchedProject.stack}\n\nHighlights:\n• ${matchedProject.bullets.join(
          "\n• ",
        )}`,
        { href: matchedProject.href, label: "GitHub ↗" },
      );
      return;
    }
    if (typoIntent?.intent === "projects") {
      const nav = detectSectionLink(text);
      const list = metaRef.current.projects;
      reply(
        `Did you mean “projects”? Here are a few highlighted projects:\n• ${list.join(
          "\n• ",
        )}`,
        nav || { href: "#projects", label: "Go to Projects" },
      );
      return;
    }
    if (t.includes("project")) {
      const nav = detectSectionLink(text);
      const list = metaRef.current.projects;
      if (list.length) {
        reply(
          "Here are a few highlighted projects:\\n• " +
            list.join("\\n• ") +
            "\\nYou can scroll to the Projects section or type a project name for details.",
          nav || { href: "#projects", label: "Go to Projects" },
        );
      } else {
        reply(
          "You can find my work in the Projects section of this page. 📁",
          nav || { href: "#projects", label: "Go to Projects" },
        );
      }
      return;
    }
    if (typoIntent?.intent === "skills") {
      reply(
        "Did you mean “skills”? Top skills here: React, JavaScript, Node.js, Python, Data Analytics, and Cloud basics.",
        { href: "#skills", label: "Go to Skills" },
      );
      return;
    }
    if (t.includes("skill")) {
      const nav = detectSectionLink(text);
      reply(
        "Top skills you’ll see here: React, JavaScript, Node.js, Python, Data Analytics, and Cloud basics. Check the Skills section for the full set. 🔧",
        nav || { href: "#skills", label: "Go to Skills" },
      );
      return;
    }
    if (typoIntent?.intent === "experience") {
      reply(
        "Did you mean “experience”? I’ve listed internships and campus roles with quantified impact in the Experience section.",
        { href: "#experience", label: "Go to Experience" },
      );
      return;
    }
    if (t.includes("experience") || t.includes("work")) {
      const nav = detectSectionLink(text);
      reply(
        "I’ve included internships and campus roles in the Experience section with quantified impact. Ask about any role. 💼",
        nav || { href: "#experience", label: "Go to Experience" },
      );
      return;
    }
    if (t.includes("resume") || t.includes("cv")) {
      const nav = detectSectionLink(text);
      reply(
        "Use the Contact section to request my latest resume. I can add a direct link here if you’d like. 📄",
        nav || { href: "#contact", label: "Go to Contact" },
      );
      return;
    }
    if (typoIntent?.intent === "contact") {
      reply(
        `Contact details:\nEmail: ${PROFILE.email}\nPhone: ${PROFILE.phone}\nLocation: ${PROFILE.location}\nLinkedIn: ${PROFILE.linkedin}\nGitHub: ${PROFILE.github}`,
      );
      return;
    }
    if (
      t.includes("contact") ||
      t.includes("email") ||
      t.includes("connect") ||
      t.includes("phone") ||
      t.includes("linkedin") ||
      t.includes("github") ||
      t.includes("location")
    ) {
      reply(
        `Contact details:\nEmail: ${PROFILE.email}\nPhone: ${PROFILE.phone}\nLocation: ${PROFILE.location}\nLinkedIn: ${PROFILE.linkedin}\nGitHub: ${PROFILE.github}`,
      );
      return;
    }
    if (t.includes("education") || t.includes("degree")) {
      const nav = detectSectionLink(text);
      reply(
        `Education: ${PROFILE.education}\nGraduation: ${PROFILE.graduation}`,
        nav,
      );
      return;
    }
    if (
      t.includes("graduate") ||
      t.includes("graduat") ||
      t.includes("pass out") ||
      t.includes("when are you done")
    ) {
      const nav = detectSectionLink(text);
      reply(`Expected graduation: ${PROFILE.graduation}`, nav);
      return;
    }
    if (
      t.includes("tech") &&
      (t.includes("stack") ||
        t.includes("used") ||
        t.includes("build") ||
        t.includes("built") ||
        t.includes("portfolio"))
    ) {
      const nav = detectSectionLink(text);
      reply(
        "Tech used for this portfolio: " + PROFILE.portfolioTech.join(", "),
        nav || { href: "#projects", label: "Go to Projects" },
      );
      return;
    }
    if (
      t.includes("raviteja") ||
      t.includes("ravi teja") ||
      t.includes("about you") ||
      t.includes("who are you")
    ) {
      reply(
        "I’m Ravi’s portfolio assistant. I can summarize projects, skills, and help you navigate this page. 🙂",
      );
      return;
    }

    // Gemini fallback
    try {
      if (!isPortfolioQuestion(text, metaRef.current)) {
        reply(OUT_OF_SCOPE_REPLY);
        return;
      }
      setMessages((m) => [...m, { role: "bot", text: "Thinking…" }]);
      const context = [
        `Projects: ${metaRef.current.projects.join(", ") || "N/A"}`,
        `Sections: ${metaRef.current.sections.join(", ") || "N/A"}`,
      ].join("\\n");
      const out = await callGemini({ text, context });
      const nav = detectSectionLink(text);
      setMessages((m) => {
        const copy = [...m];
        for (let i = copy.length - 1; i >= 0; i--) {
          if (copy[i].role === "bot" && copy[i].text.startsWith("Thinking")) {
            copy[i] = {
              role: "bot",
              text: out,
              link: out === OUT_OF_SCOPE_REPLY ? undefined : nav || undefined,
            };
            break;
          }
        }
        return copy;
      });
    } catch (err) {
      setMessages((m) => {
        const copy = [...m];
        for (let i = copy.length - 1; i >= 0; i--) {
          if (copy[i].role === "bot" && copy[i].text.startsWith("Thinking")) {
            copy[i] = {
              role: "bot",
              text:
                "Oops—Gemini couldn’t respond. " +
                (err?.message || "Please try again."),
            };
            break;
          }
        }
        return copy;
      });
    }
  }

  const suggestions = [
    "Projects",
    "Skills",
    "Experience",
    "Contact",
    "Who are you?",
  ];

  return (
    <div className="rtcb-widget">
      <button
        className={"rtcb-fab" + (showTip && !open ? " tip-visible" : "")}
        aria-label="Open chat"
        onClick={() => {
          setOpen((o) => !o);
          setShowTip(false);
        }}
      >
        <BotIcon />
      </button>

      {showTip && !open && (
        <>
          <div className="rtcb-beacon" aria-hidden="true"></div>
          <div
            className="rtcb-tip"
            role="status"
            aria-live="polite"
            onClick={() => {
              setOpen(true);
              setShowTip(false);
            }}
          >
            <span className="rtcb-tip-emoji">🤖</span>
            <span className="rtcb-tip-text">
              Click here for assitance by my bot
            </span>
          </div>
        </>
      )}

      <div
        className={"rtcb-panel " + (open ? "open" : "")}
        role="dialog"
        aria-label="Portfolio chat"
      >
        <div className="rtcb-header">
          <div className="rtcb-avatar">R</div>
          <div>
            <div className="rtcb-title">Ravi • Assistant</div>
            <div className="rtcb-sub">Ask me about this portfolio</div>
          </div>
        </div>

        <div className="rtcb-suggestions">
          {(messages.length <= 1 ? SUGGESTED_QUESTIONS : suggestions).map((s) => (
            <button key={s} className="rtcb-chip" onClick={() => handleSend(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="rtcb-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={"rtcb-msg " + (m.role === "user" ? "user" : "bot")}
            >
              <div className="rtcb-bubble">
                {renderText(m.text)}
                {m.link ? (
                  <div className="rtcb-navlink">
                    <a href={m.link.href}>{m.link.label}</a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="rtcb-input">
          <div>
            <textarea
              rows={1}
              className="rtcb-textarea"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(input);
                }
              }}
            />
          </div>
          <button
            className="rtcb-send"
            onClick={() => handleSend(input)}
            aria-label="Send"
          >
            Send
          </button>
        </div>

        <div className="rtcb-footerlink">
          Tip: You can navigate to sections via the top navbar - I’ll keep your
          questions short and helpful.
        </div>
      </div>
    </div>
  );
}
