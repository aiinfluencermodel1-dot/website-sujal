// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

type NavLink = NavItem;

interface HeroStat {
  value: string;
  label: string;
}

interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  stats: HeroStat[];
}

interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
  links: string[];
}

interface ServiceCategories {
  heading: string;
  subheading: string;
  description: string;
  categories: ServiceCategory[];
}

interface TrustedByStat {
  value: string;
  label: string;
}

interface TrustedByData {
  heading: string;
  stats: TrustedByStat[];
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

interface WhyChooseUsItem {
  title: string;
  description: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  tagline: string;
  rating: string;
  ratingCount: string;
  quickLinks: FooterLink[];
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/ai-chatbots",
    children: [
      {
        label: "AI Engagement",
        href: "/ai-chatbots",
        children: [
          { label: "AI Chatbot Development", href: "/ai-chatbots" },
          { label: "Voice AI Agents", href: "/voice-ai-agents" },
          { label: "Website Chat Widgets", href: "/ai-chatbots" },
          { label: "WhatsApp Automation", href: "/ai-chatbots" },
        ],
      },
      {
        label: "Automation & Growth",
        href: "/workflow-automation",
        children: [
          { label: "Workflow & CRM Automation", href: "/workflow-automation" },
          { label: "AI Lead Generation", href: "/lead-generation" },
          { label: "Email & Follow-up Sequences", href: "/lead-generation" },
          { label: "Sales Pipeline Automation", href: "/workflow-automation" },
        ],
      },
      {
        label: "Scale & Insights",
        href: "/analytics-dashboards",
        children: [
          { label: "AI Content Engine", href: "/content-engine" },
          { label: "Analytics Dashboards", href: "/analytics-dashboards" },
          { label: "AI Consulting & Support", href: "/contact" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// ─── Announcement Bar ─────────────────────────────────────────────────────────

export const announcementText =
  "NexaFlow ships new AI automations every week → Book a Free Audit";

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const heroData: HeroData = {
  heading: "Put Your Business on Autopilot",
  subheading:
    "We design, build, and deploy AI chatbots, voice agents, and workflow automations that capture leads, close sales, and eliminate busywork—so your team can focus on growth.",
  ctaText: "Book a Free Audit",
  ctaLink: "/contact",
  stats: [
    { value: "120+", label: "Automations Shipped" },
    { value: "12K+", label: "Hours Saved Monthly" },
    { value: "40+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
  ],
};

// ─── Service Categories ───────────────────────────────────────────────────────

export const serviceCategories: ServiceCategories = {
  heading: "One Partner. Total Business Automation.",
  subheading: "Design. Build. Scale.",
  description:
    "From first click to closed deal to ongoing delivery, our AI systems run your operations around the clock—without adding headcount.",
  categories: [
    {
      title: "Engage: AI Chatbots & Voice Agents",
      description: "Capture every lead and answer every customer instantly.",
      items: [
        "AI Chatbot Development",
        "Voice AI Agents",
        "Website Chat Widgets",
      ],
      links: ["/ai-chatbots", "/voice-ai-agents", "/ai-chatbots"],
    },
    {
      title: "Automate: Workflows & Growth Systems",
      description:
        "Connect your tools and remove manual busywork across sales and ops.",
      items: [
        "Workflow & CRM Automation",
        "AI Lead Generation",
        "Email & Follow-up Automation",
      ],
      links: [
        "/workflow-automation",
        "/lead-generation",
        "/workflow-automation",
      ],
    },
    {
      title: "Scale: Content & Intelligence",
      description:
        "Turn your data and content into engines that compound growth.",
      items: [
        "AI Content Engine",
        "Analytics Dashboards",
        "AI Consulting & Support",
      ],
      links: ["/content-engine", "/analytics-dashboards", "/contact"],
    },
  ],
};

// ─── Trusted By ───────────────────────────────────────────────────────────────

export const trustedByData: TrustedByData = {
  heading: "Trusted by Modern Businesses Worldwide",
  stats: [
    { value: "40+", label: "Businesses Automated" },
    { value: "12K+", label: "Hours Saved Monthly" },
    { value: "$8M+", label: "Client Revenue Influenced" },
    { value: "99.9%", label: "Automation Uptime" },
  ],
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      "NexaFlow's AI chatbot books meetings while we sleep. Our lead response time went from hours to seconds, and show-up rates doubled in the first month.",
    name: "Founder",
    title: "B2B SaaS Company",
    rating: 5,
  },
  {
    quote:
      "They automated our entire order follow-up and review flow. We save 30+ hours a week and our repeat purchase rate has never been higher.",
    name: "Operations Director",
    title: "E-commerce Brand",
    rating: 5,
  },
  {
    quote:
      "From CRM cleanup to AI content to dashboards, NexaFlow rebuilt our operating system. It feels like hiring five employees that never sleep.",
    name: "Managing Partner",
    title: "Digital Agency",
    rating: 5,
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Automation Experts",
    description:
      "Specialists in AI agents, integrations, and workflow design—not generalists learning on your dime.",
  },
  {
    title: "Results Obsessed",
    description:
      "Every build is tied to a metric: more leads, faster follow-up, fewer hours, higher revenue.",
  },
  {
    title: "Fast Deployment",
    description:
      "Most automations go live in 2–4 weeks, not quarters. You see ROI fast.",
  },
  {
    title: "Ongoing Support",
    description:
      "Monitoring, tuning, and improvements included—your systems keep getting smarter.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-chatbot-playbook-2026",
    title: "The AI Chatbot Playbook: Turn Your Website Into a Sales Rep",
    excerpt:
      "Discover how AI chatbots capture leads, book meetings, and support customers 24/7—without adding headcount.",
    date: "September 2, 2026",
    category: "Playbooks",
    image: "/images/blog-1.jpg",
  },
  {
    slug: "voice-ai-agents-guide",
    title: "Voice AI Agents: The Complete Guide for 2026",
    excerpt:
      "AI voice agents now handle calls, qualify leads, and book appointments. Here's how to deploy one in weeks.",
    date: "August 26, 2026",
    category: "Voice AI",
    image: "/images/blog-2.jpg",
  },
  {
    slug: "crm-automation-mistakes",
    title: "7 CRM Automation Mistakes Costing You Deals",
    excerpt:
      "Leads slip through broken follow-up every day. Learn the seven automation gaps and how to fix them fast.",
    date: "August 18, 2026",
    category: "Automation",
    image: "/images/blog-3.jpg",
  },
  {
    slug: "ai-lead-generation-system",
    title: "Build an AI Lead Generation System That Runs Itself",
    excerpt:
      "From capture to nurture to booking—how to build a self-running pipeline with AI and automation.",
    date: "August 12, 2026",
    category: "Growth",
    image: "/images/blog-1.jpg",
  },
  {
    slug: "ai-content-engine-workflow",
    title: "The AI Content Engine: 30 Days of Content in One Workflow",
    excerpt:
      "A repeatable system that turns one idea into a month of posts, emails, and videos with AI assistance.",
    date: "August 4, 2026",
    category: "Content",
    image: "/images/blog-2.jpg",
  },
  {
    slug: "automation-roi-framework",
    title: "How to Measure Automation ROI (With Real Numbers)",
    excerpt:
      "Hours saved, deals won, costs cut—a simple framework for proving exactly what automation earns you.",
    date: "July 31, 2026",
    category: "ROI",
    image: "/images/blog-3.jpg",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: "What services does NexaFlow provide?",
    answer:
      "NexaFlow designs and deploys AI chatbots, voice AI agents, CRM and workflow automations, lead generation systems, AI content engines, and analytics dashboards—everything a business needs to run on autopilot.",
  },
  {
    question: "How fast can an automation go live?",
    answer:
      "Most projects launch in 2–4 weeks. Chatbots and follow-up sequences are often live in days; larger CRM and multi-system builds take a few weeks including testing.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We integrate with 100+ platforms including HubSpot, Salesforce, GoHighLevel, Shopify, Slack, Gmail, Calendly, Stripe, and more. If it has an API, we can automate it.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Projects typically start with a free audit, then fixed-scope builds tailored to your goals—plus optional monthly care plans for monitoring and optimization. Book a call and we'll scope it precisely.",
  },
];

// ─── Company Data ─────────────────────────────────────────────────────────────

export const companyData = {
  tagline: "Your unfair advantage in AI",
  description:
    "Since 2021, we've helped startups, agencies, and local businesses replace manual busywork with AI systems that sell, support, and scale. Our goal is simple: give every business leverage that used to require a huge team.",
  philosophy:
    "Technology should pay for itself. We co-build every automation with the team that uses it—radical collaboration between our engineers and your operators—so systems actually get adopted and actually drive revenue.",
  mission:
    "To make advanced AI automation accessible to every business by designing systems that capture more leads, close more sales, and eliminate repetitive work—measurably and fast.",
  vision:
    "To become the most trusted AI automation partner for growing businesses—setting the standard for deployment speed, reliability, and ROI across the industry.",
  values:
    "We are guided by ownership, transparency, and relentless iteration. We ship fast, measure everything, communicate clearly, and never stop improving the systems we deploy.",
};

// ─── Contact Info ─────────────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  address: "NEXAFLOW AI LLC: 600 Congress Ave, STE #1400, Austin TX 78701",
  phone: "+1 (415) 555-0132",
  email: "hello@nexaflow.ai",
  workingHours: "Mon – Fri 9:00 AM to 6:00 PM CT",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerData: FooterData = {
  tagline:
    "NexaFlow designs and deploys AI chatbots, voice agents, and workflow automations—running your sales, support, and operations on autopilot.",
  rating: "4.9",
  ratingCount: "500+",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
  ],
};

// ─── Logo ─────────────────────────────────────────────────────────────────────

export const logoUrl = "/logo-bigger.png";

// ─── Media Assets (owned, in public/images) ───────────────────────────────────

export const assets = {
  favicon: "/favicon.svg",
  heroPoster: "/images/hero-poster.jpg",
  heroDashboard: "/images/visual-scale.jpg",
  aboutPoster: "/images/about-team.jpg",
  aboutSecondary: "/images/about-office.jpg",
  usMap: "/images/globe.jpg",
  faqImage: "/images/visual-automate.jpg",
  icon1: "/images/visual-engage.jpg",
  icon3: "/images/visual-automate.jpg",
  icon: "/images/visual-scale.jpg",
  icon5: "/images/hero-poster.jpg",
  appointment1: "/images/visual-automate.jpg",
  appointmentFloating: "/images/visual-scale.jpg",
  avatar1: "/images/avatar-1.jpg",
  avatar2: "/images/avatar-2.jpg",
  avatar3: "/images/avatar-3.jpg",
  avatar4: "/images/avatar-1.jpg",
  avatar5: "/images/avatar-2.jpg",
  testi1: "/images/about-office.jpg",
  testi2: "/images/about-team.jpg",
  testi4: "/images/visual-engage.jpg",
};

// ─── Advanced Solutions Copy ──────────────────────────────────────────────────

export const advancedSolutionsIntro =
  "Transform your business with AI chatbots that never miss a lead, voice agents that handle every call, and workflow automations that eliminate busywork for good.";
