export const profile = {
  name: "Bahaa Abdelkhalik",
  title: "DevOps Engineer | Infrastructure & Application Support | Linux Systems | OpenShift",
  location: "Egypt — Open to Relocate",
  email: "bahaaabdelkhalik526@gmail.com",
  github: "https://github.com/Bahaa202",
  linkedin: "https://www.linkedin.com/in/bahaa-abdelkhalik-3a4211427",
  summary:
    "DevOps and Infrastructure professional with hands-on experience in Linux system administration, Red Hat OpenShift, containerization, and CI/CD automation. Comfortable across infrastructure operations, application support, and incident troubleshooting, with practical work in Terraform, Ansible, Kubernetes, and cloud environments.",
};

export const skills = [
  { category: "Operating Systems", items: ["RHEL 8/9", "CentOS", "Ubuntu", "Amazon Linux"] },
  { category: "Containers & Orchestration", items: ["Red Hat OpenShift", "Kubernetes", "Docker", "Podman"] },
  { category: "Automation & IaC", items: ["Ansible", "Terraform", "Python", "Bash"] },
  { category: "Cloud", items: ["AWS (EC2, IAM, VPC)", "Oracle Cloud Infrastructure"] },
  { category: "CI/CD", items: ["GitHub Actions", "Jenkins"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack"] },
];

export const projects = [
  {
    title: "AI Sentiment Analyzer — End-to-End DevOps Pipeline",
    description:
      "Containerized Flask + scikit-learn sentiment analysis API, deployed to AWS with Terraform, Ansible, GitHub Actions CI/CD, and Prometheus/Grafana monitoring.",
    tags: ["Terraform", "Ansible", "AWS", "Podman", "Prometheus", "Grafana"],
    link: "https://github.com/Bahaa202/ai-sentiment-devops",
  },
  {
    title: "GitOps Continuous Delivery — ArgoCD + Kubernetes",
    description:
      "GitOps workflow using ArgoCD on Kubernetes, where Git is the single source of truth for cluster state, with automated sync and self-healing.",
    tags: ["ArgoCD", "Kubernetes", "GitOps", "Kind"],
    link: "https://github.com/Bahaa202/gitops-argocd-demo",
  },
  {
    title: "Full-Stack AI App — React, Flask, PostgreSQL, Kubernetes",
    description:
      "Full-stack e-commerce demo with a lightweight AI product assistant, deployed on k3s on AWS via Terraform and Ansible.",
    tags: ["React", "Flask", "PostgreSQL", "k3s", "Terraform", "Ansible"],
    link: "https://github.com/Bahaa202/perfume-ai-shop",
  },
];

export const experience = [
  {
    title: "Infrastructure System Engineer",
    company: "Smart System LLC",
    dates: "Jan 2026 – Mar 2026",
    points: [
      "Administered RHEL 8/9 production infrastructure and operated Red Hat OpenShift clusters in air-gapped environments.",
      "Set up Prometheus + Grafana monitoring; wrote Ansible playbooks to automate administrative tasks.",
    ],
  },
  {
    title: "OpenShift Administrator",
    company: "Smart System LLC",
    dates: "Sep 2025 – Dec 2025",
    points: [
      "Installed and configured OpenShift clusters on Oracle Cloud Infrastructure, from provisioning through production readiness.",
      "Managed persistent storage, ingress, DNS, and resource quotas.",
    ],
  },
  {
    title: "System Infrastructure Intern",
    company: "Valleysoft (NTI Train to Hire)",
    dates: "Jun 2025 – Aug 2025",
    points: [
      "Performed RHEL server administration: user management, LVM storage, systemd services, and networking.",
    ],
  },
];
