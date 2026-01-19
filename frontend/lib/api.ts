// API-ready structure for backend integration
// Currently uses demo data, but structured for easy backend connection

export interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  problem: string;
  solution: string;
  techStack: string[];
  image?: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  publishedAt: string;
  slug: string;
  image?: string;
  tags?: string[];
}

// Demo data - Replace with API calls when backend is ready
export async function fetchProjects(): Promise<Project[]> {
  // TODO: Replace with: const res = await fetch('/api/projects');
  return [
    {
      id: "1",
      title: "Enterprise SaaS Platform",
      description: "Scalable multi-tenant SaaS solution for enterprise clients",
      industry: "Enterprise Software",
      problem: "Legacy system couldn't scale with growing user base",
      solution: "Built modern microservices architecture with cloud-native infrastructure",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      id: "2",
      title: "E-commerce API Platform",
      description: "High-performance API-first e-commerce backend",
      industry: "E-commerce",
      problem: "Slow API response times affecting conversion rates",
      solution: "Optimized database queries and implemented caching layer",
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "Kubernetes"],
    },
    {
      id: "3",
      title: "Real-time Analytics Dashboard",
      description: "Real-time data visualization platform for business intelligence",
      industry: "Analytics",
      problem: "Need for real-time insights across multiple data sources",
      solution: "Built event-driven architecture with WebSocket connections",
      techStack: ["React", "TypeScript", "Python", "PostgreSQL", "WebSockets"],
    },
  ];
}

export async function fetchServices(): Promise<Service[]> {
  // TODO: Replace with: const res = await fetch('/api/services');
  return [
    {
      id: "saas",
      title: "SaaS Product Development",
      description: "End-to-end SaaS solutions built for scale and security",
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "Payment integration",
        "User authentication & authorization",
      ],
    },
    {
      id: "web",
      title: "Web Application Development",
      description: "Modern, responsive web applications with optimal performance",
      features: [
        "React & Next.js development",
        "Progressive Web Apps",
        "SEO optimization",
        "Performance optimization",
      ],
    },
    {
      id: "backend",
      title: "Backend & API Engineering",
      description: "Robust, scalable backend systems and RESTful APIs",
      features: [
        "REST & GraphQL APIs",
        "Microservices architecture",
        "Database design & optimization",
        "API documentation",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps Solutions",
      description: "Cloud infrastructure and CI/CD pipelines for seamless deployments",
      features: [
        "AWS, Azure, GCP deployment",
        "Docker & Kubernetes",
        "CI/CD pipelines",
        "Monitoring & logging",
      ],
    },
    {
      id: "design",
      title: "UI/UX & Product Design",
      description: "User-centered design that drives engagement and conversions",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Design systems",
        "Accessibility compliance",
      ],
    },
  ];
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  // TODO: Replace with: const res = await fetch('/api/testimonials');
  return [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechScale Inc.",
      content: "Neptune transformed our legacy system into a modern, scalable platform. Their backend-first approach and attention to security gave us confidence from day one.",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "Founder",
      company: "StartupHub",
      content: "Working with Neptune was a game-changer. They understood our vision and delivered a product that exceeded expectations. The architecture they built can scale with us for years.",
    },
    {
      id: "3",
      name: "Emily Watson",
      role: "Product Manager",
      company: "Enterprise Solutions",
      content: "The team's expertise in cloud infrastructure and API design is exceptional. Our platform handles millions of requests daily without breaking a sweat.",
    },
  ];
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace with: const res = await fetch('/api/blogs');
  return [
    {
      id: "1",
      title: "Building Scalable SaaS Architecture: Best Practices",
      excerpt: "Learn how to design and implement a scalable SaaS architecture that grows with your business.",
      author: "Neptune Team",
      publishedAt: "2024-01-15",
      slug: "scalable-saas-architecture",
      tags: ["SaaS", "Architecture", "Backend"],
    },
    {
      id: "2",
      title: "API-First Development: Why It Matters",
      excerpt: "Discover the benefits of API-first development and how it accelerates product development.",
      author: "Neptune Team",
      publishedAt: "2024-01-10",
      slug: "api-first-development",
      tags: ["API", "Development", "Best Practices"],
    },
    {
      id: "3",
      title: "Cloud Security: Protecting Your SaaS Platform",
      excerpt: "Essential security practices for protecting your SaaS platform in the cloud.",
      author: "Neptune Team",
      publishedAt: "2024-01-05",
      slug: "cloud-security-saas",
      tags: ["Security", "Cloud", "SaaS"],
    },
  ];
}

// Contact form submission
export async function submitContactForm(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  // TODO: Replace with: const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  return { success: true, message: "Thank you for your message. We'll get back to you soon!" };
}
