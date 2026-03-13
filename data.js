// ============================================================
//  ANKIT BHARTI — PORTFOLIO DATA FILE
//  ✅ THIS IS THE ONLY FILE YOU NEED TO EDIT
//  📁 Drop PDF files into:  docs/certs/   docs/azure/   docs/competitions/
//  🔗 Then update the "pdf" path below to match the filename
//  💡 Leave pdf: "" if you don't have the file yet — button hides automatically
// ============================================================

const CONFIG = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  name: "Ankit Bharti",
  title: "Data Analyst & BI Engineer",
  email: "Abharti1040@gmail.com",
  phone: "(917) 609-2096",
  location: "Atlanta, GA",
  relocate: "Open to Relocate Anywhere",
  workMode: "On-site / Remote / Hybrid",
  linkedin: "https://linkedin.com/in/ankitbharti2834",
  github: "https://github.com/Ankitbharti2834",
  playstore: "https://play.google.com/store/apps/details?id=org.sudoku.chronicles1.sudoku&hl=en-US",

  // ── STATS ─────────────────────────────────────────────────
  stats: [
    { num: 7,    suffix: "",  label: "Enterprise Data\nProjects" },
    { num: 2,    suffix: "",  label: "Game Projects\n(1 Live)" },
    { num: 65,   suffix: "%", label: "Faster Data\nLoad Speed" },
    { num: 45,   suffix: "%", label: "Reduction in\nManual Processing" },
    { num: 23,   suffix: "+", label: "Industry\nCertifications" },
    { num: 100,  suffix: "%", label: "Audit-Ready\nCompliance" }
  ],

  // ── DATA PROJECTS ─────────────────────────────────────────
  projects: [
    {
      num: "PROJECT 01 · AWARE CUSTOM BIOMETRIC WEARABLES",
      title: "Enterprise Power BI KPI Dashboard Suite",
      desc: "Unified 4 siloed sources into a single Power BI reporting layer connected to Azure Synapse, Dynamics 365 CRM, and SharePoint — delivering cross-functional KPI visibility to C-suite.",
      impact: ["↑ 30% Faster Reporting", "↑ 25% Forecast Accuracy"],
      tools: ["Power BI", "DAX", "Azure Synapse", "Dynamics 365", "SQL Server", "SharePoint"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/aware-cbw-powerbi-kpi-dashboard"
    },
    {
      num: "PROJECT 02 · AWARE CUSTOM BIOMETRIC WEARABLES",
      title: "End-to-End ETL Pipeline & Azure Data Warehouse",
      desc: "Medallion architecture (Bronze→Silver→Gold) on Azure Synapse ingesting IoT biometric feeds, Shopify API orders, and Dynamics 365 CRM data at enterprise scale via ADF.",
      impact: ["↑ 65% Faster Data Loads", "↓ 40% Processing Effort"],
      tools: ["Azure Data Factory", "Azure Synapse", "ADLS Gen2", "Python", "SSIS", "Azure DevOps"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/aware-cbw-etl-azure-pipeline"
    },
    {
      num: "PROJECT 03 · AWARE CUSTOM BIOMETRIC WEARABLES",
      title: "GPT-Powered Automation & AI Agent Workflows",
      desc: "GPT-4o document routing agents, real-time CRM anomaly detection, and automated BI report distribution eliminating 10+ manual cross-functional workflows.",
      impact: ["↓ 45% Manual Processing", "10+ Workflows Automated"],
      tools: ["GPT API", "Power Automate", "Logic Apps", "MS Fabric", "Copilot", "OAuth 2.0"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/aware-cbw-gpt-ai-automation"
    },
    {
      num: "PROJECT 04 · AWARE CUSTOM BIOMETRIC WEARABLES",
      title: "Financial Forecasting Model & Profitability Analysis",
      desc: "CFO-facing financial forecasting with Python OLS models, VBA-automated variance analysis, and A/B pricing tests — identifying cost leakage across 3 product lines.",
      impact: ["↑ 25% Forecast Accuracy", "Cost Leakage Found: 3 Lines"],
      tools: ["Python", "Excel VBA", "Power Query", "SSRS", "Power BI", "SQL Server"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/Financial-Forecasting-Model"
    },
    {
      num: "PROJECT 05 · AWARECBW.COM · AWAREINDUSTRIAL.COM · AWAREDEFENSE.US",
      title: "E-Commerce Analytics & Sales Performance",
      desc: "Unified three Shopify storefronts (consumer, industrial, defense) with Google Analytics and BigQuery into a single Power BI reporting layer covering revenue, LTV, and fulfillment.",
      impact: ["↓ 50% Reconciliation Effort", "4 Sources → 1 Layer"],
      tools: ["Shopify API", "Google Analytics", "BigQuery", "GCP", "Power BI", "Power Automate"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/aware-cbw-ecommerce-analytics"
    },
    {
      num: "PROJECT 06 · AWARE CUSTOM BIOMETRIC WEARABLES",
      title: "Data Quality Framework & GDPR/HIPAA Compliance Dashboard",
      desc: "GDPR and HIPAA-aligned governance framework with automated DQ checks, SHA-256 PII masking, retention enforcement, and compliance Power BI dashboard for auditors.",
      impact: ["100% Audit-Ready", "↓ 35% Quality Incidents"],
      tools: ["Power BI", "Dataverse", "Python", "Power Automate", "ADLS", "MS Fabric"],
      confidential: "Enterprise Internal — Defense-Adjacent",
      github: "https://github.com/Ankitbharti2834/Data-Quality-Framework-GDPR-HIPAA-Compliance"
    },
    {
      num: "PROJECT 07 · UNIVERSITY OF NORTH ALABAMA",
      title: "Institutional Data Audit & Interdepartmental Database Integration",
      desc: "Resolved institutional data quality gaps and unified interdepartmental databases into a single, audit-ready reporting structure — reported to Managers across academic and administrative units.",
      impact: ["↑ 50% Data Accuracy", "3+ Departments Standardized"],
      tools: ["ETL Pipelines", "Power BI", "DAX", "Advanced Excel", "MS Office", "VBA", "Internal Institutional Tools"],
      confidential: "Enterprise Internal — University / Education",
      github: "https://github.com/Ankitbharti2834/una-institutional-data-audit"
    }
  ],

  // ── CERTIFICATIONS ────────────────────────────────────────
  // icon options: ibm | ms | ge | fi | da | pm | az | li | ud
  certifications: [
    {
      name: "IBM Data Analyst",
      issuer: "IBM",
      status: "Completed",
      icon: "ibm",
      pdf: "docs/certs/IBM Data Analyst.pdf"
    },
    {
      name: "Microsoft Power BI Data Analyst (PL-300)",
      issuer: "Microsoft — LinkedIn Learning",
      status: "In Progress",
      icon: "ms",
      pdf: "docs/certs/Microsoft Power BI Data Analyst Associate PL300 Cert Prep by Microsoft Press 2024.pdf"
    },
    {
      name: "Apache Spark SQL for Data Analytics",
      issuer: "Databricks",
      status: "Completed",
      icon: "az",
      pdf: "docs/certs/Apache Spark SQL for Data Analytics.pdf"
    },
    {
      name: "SQL: Data Reporting & Analysis",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "li",
      pdf: "docs/certs/SQL Data Reporting and Analysis.pdf"
    },
    {
      name: "Advanced SQL for Data Scientists",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "li",
      pdf: "docs/certs/Advanced SQL for Data Scientists.pdf"
    },
    {
      name: "Databases and SQL for Data Science",
      issuer: "IBM",
      status: "Completed",
      icon: "ibm",
      pdf: "docs/certs/Databases and SQL for data science.pdf"
    },
    {
      name: "Data Visualization with Python",
      issuer: "IBM",
      status: "Completed",
      icon: "ibm",
      pdf: "docs/certs/Data Visualization with python.pdf"
    },
    {
      name: "Data Visualization and Dashboards with Excel and Cognos",
      issuer: "IBM",
      status: "Completed",
      icon: "ibm",
      pdf: "docs/certs/Data Visualization and Dashboards with Excel and Cognos.pdf"
    },
    {
      name: "Excel Basics for Data Analysis",
      issuer: "IBM",
      status: "Completed",
      icon: "ibm",
      pdf: "docs/certs/Excel Basics for Data Analysis.pdf"
    },
    {
      name: "Excel Essential Training (Microsoft 365)",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "li",
      pdf: "docs/certs/Excel Essential Training Microsoft 365 2018.pdf"
    },
    {
      name: "Financial Modeling and Valuation Training",
      issuer: "Internshala",
      status: "Completed",
      icon: "fi",
      pdf: "docs/certs/Financial Modeling and Valuation Training.pdf"
    },
    {
      name: "Prompt Engineering for Generative AI",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "li",
      pdf: "docs/certs/Prompt Engineering for Generative AI.pdf"
    },
    {
      name: "Artificial Intelligence and Business Strategy",
      issuer: "NASBA",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/Artificial Intelligence and Business Strategy.pdf"
    },
    {
      name: "AI for Everyone",
      issuer: "DeepLearning.AI",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/AI for Everyone.pdf"
    },
    {
      name: "Hands-On AI: Build a Generative Language Model from Scratch",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "li",
      pdf: "docs/certs/Hands-On AI Build a Generative Language Model from Scratch.pdf"
    },
    {
      name: "Agile Analytics",
      issuer: "University of Virginia",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/Agile Analytics.pdf"
    },
    {
      name: "Agile Meets Design Thinking",
      issuer: "University of Virginia",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/Agile Meets Design Thinking.pdf"
    },
    {
      name: "Data-Informed Strategic Thinking",
      issuer: "IIBA®",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/Data Informed Strategic Thinking for Senior Analysts and Data Scientists.pdf"
    },
    {
      name: "Microsoft Power Apps: AI Builder",
      issuer: "LinkedIn Learning",
      status: "Completed",
      icon: "ms",
      pdf: "docs/certs/Microsoft Power Apps AI Builder.pdf"
    },
    {
      name: "Visualizing Advanced Charts and Graphs",
      issuer: "Project Management Institute (PMI)",
      status: "Completed",
      icon: "pm",
      pdf: "docs/certs/Visualizing Advanced Charts and Graphs.pdf"
    },
    {
      name: "Digital Product Management: Modern Fundamentals",
      issuer: "University of Virginia",
      status: "Completed",
      icon: "da",
      pdf: "docs/certs/Digital Product Management Modern Fundamentals.pdf"
    },
    {
      name: "Business Operations: Implementing Strategy for Results",
      issuer: "Project Management Institute (PMI)",
      status: "Completed",
      icon: "pm",                              // ← FIXED: was "PMI" (wrong), now "pm"
      pdf: "docs/certs/Business Operations Implementing Strategy for Results.pdf"
    },
    {
      name: "Amazon FBA",
      issuer: "Udemy",
      status: "Completed",
      icon: "ud",
      pdf: "docs/certs/Amazon FBA.pdf"
    },
  ],

  // ── MICROSOFT AZURE ACHIEVEMENTS ─────────────────────────
  // type options: Learning Path | Module | Badge | Trophy
  azureAchievements: [
    {
      name: "End-to-End Analytics Using Microsoft Fabric",
      issuer: "Microsoft",
      type: "Learning Path",
      date: "2024",
      pdf: "docs/azure/Introduction to end-to-end analytics using Microsoft Fabric.pdf"
    },
    {
      name: "Lakehouses in Microsoft Fabric",
      issuer: "Microsoft",
      type: "Module",
      date: "2024",
      pdf: "docs/azure/Get started with lakehouses in Microsoft.pdf"
    },
    {
      name: "Use Apache Spark in Microsoft Fabric",
      issuer: "Microsoft",
      type: "Module",
      date: "2024",
      pdf: "docs/azure/Use Apache Spark in Microsoft Fabric.pdf"
    },
    {
      name: "Use Data Factory Pipelines in Microsoft Fabric",
      issuer: "Microsoft",
      type: "Module",
      date: "2024",
      pdf: "docs/azure/Use Data Factory pipelines in Microsoft Fabric.pdf"
    },
    {
      name: "Work with Delta Lake Tables in Microsoft Fabric",
      issuer: "Microsoft",
      type: "Module",
      date: "2024",
      pdf: "docs/azure/Work with Delta Lake tables in MS Fabric.pdf"
    },
    {
      name: "Plan and Prepare to Develop AI Solutions on Azure",
      issuer: "Microsoft",
      type: "Learning Path",
      date: "2025",
      pdf: "docs/azure/Plan and Prepare to develop AI solutions on Azure.pdf"
    },
    {
      name: "Develop an AI App with the Azure AI Foundry SDK",
      issuer: "Microsoft",
      type: "Module",
      date: "2025",
      pdf: "docs/azure/Develop an AI app with the Azure AI Foundry SDK.pdf"
    },
    {
      name: "Control Access to Azure Storage with Shared Access Signatures",
      issuer: "Microsoft",
      type: "Module",
      date: "2023",
      pdf: "docs/azure/Control access to Azure Storage with shared access signatures.pdf"
    },
  ],

  // ── COMPETITIONS & EVENTS ─────────────────────────────────
  competitions: [
    {
      name: "ACCS Nationwide Case Study Competition",
      organizer: "IIT Kanpur — Dept. of Industrial & Management Engineering",
      result: "Participant",
      date: "2021",
      pdf: "docs/competitions/ACCS Nationwide Case Study Competition.pdf"
    },
    {
      name: "Intellectual Property Rights (IPR) Awareness Program",
      organizer: "Niti Aayog, Govt. of India",
      result: "Participant",
      date: "2020",
      pdf: "docs/competitions/Intellectual Property Rights Awareness Program.pdf"
    },
    {
      name: "Let's Live Economics",
      organizer: "IIM Rohtak",
      result: "Participant",
      date: "2021",
      pdf: "docs/competitions/Economics Participation Certificate.pdf"
    },
  ],

  // ── GAME PROJECTS ─────────────────────────────────────────
  games: [
    {
      title: "Sudoku Chronicles",
      subtitle: "Published on Google Play Store · 2024 – Present",
      status: "LIVE",
      platforms: ["Android"],
      desc: "A cultural logic-puzzle experience combining analytical problem-solving with themed storytelling — fully designed, developed, and independently deployed from concept to live production.",
      bullets: [
        "Designed and developed using Python (Kivy framework), deployed via Android Studio to Google Play Store",
        "Built and optimized 30+ interactive chapters with cultural and historical puzzle themes using JSON-based story integration",
        "Managed end-to-end asset pipelines including performance optimization and user behavior analytics",
        "Applied iterative content review and game design optimization throughout production cycles"
      ],
      tools: ["Python", "Kivy", "Android Studio", "Google Play Console", "JSON", "VS Code"],
      link: "https://play.google.com/store/apps/details?id=org.sudoku.chronicles1.sudoku&hl=en-US",
      linkText: "▶ Play on Google Play Store"
    },
    {
      title: "Cricket League",
      subtitle: "3D Simulation · Unity + Blender + Mixamo · 2025 – Ongoing",
      status: "IN DEVELOPMENT",
      platforms: ["Android", "iOS"],
      desc: "A large-scale 3D cricket simulation designed for immersive gameplay, realistic physics, and scalable multi-platform deployment — built with a professional game studio pipeline.",
      bullets: [
        "Creating a large-scale 3D cricket stadium with realistic lighting, modular seating, and crowd dynamics in Blender 4.4",
        "Integrated 3D assets and physics in Unity Hub, scripted via VS Code for enhanced interactivity and performance",
        "Using Mixamo for realistic player animations (walk, run, jump, dive) with performance-optimized rigging",
        "Implementing level design logic and environmental shaders focused on real-time rendering performance",
        "Planning multi-platform deployment via Google Play Console and Apple App Store (Xcode)",
        "Documenting level design guidelines and QA notes for sprint-based content iteration"
      ],
      tools: ["Unity Hub", "Blender 4.4", "Mixamo", "VS Code", "Xcode", "Android Studio"],
      link: "",
      linkText: "🛠 In Active Development — 2025"
    }
  ]

}; // ← DO NOT DELETE THIS LINE
