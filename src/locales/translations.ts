export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      certifications: 'Certifications',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    home: {
      role1: 'Infrastructure & Cybersécurité',
      role2: 'Administration Réseau',
      role3: 'Sécurité des Systèmes',
      role4: 'Pentesting & Audit',
      badge: '~/portfolio — Étudiant 4ème année',
      greeting: 'Salut, je suis',
      btnProjects: 'Voir mes projets',
      btnContact: 'Me contacter',
      btnCV: 'Télécharger mon CV'
    },
    about: {
      sectionTitle: '01. À propos',
      heading1: 'Qui suis-je',
      heading2: '?',
      studentTitle: 'Étudiant en 4ème année',
      studentSubtitle: 'Infrastructure & Cybersécurité',
      desc1: "Passionné par la cybersécurité et le cloud computing, je suis en 4ème année d'études. Mon parcours m'a permis d'acquérir des compétences en administration système, sécurité des réseaux, et développement d'outils de cybersécurité.",
      desc2: "Je m'intéresse au pentesting, à l'analyse de vulnérabilités, et à la mise en place d'architectures réseau sécurisées.",
      highlight1: 'Cybersécurité',
      highlight2: 'Infrastructure',
      highlight3: 'Développement',
      highlight4: 'Réseau',
      academicPath: '$ parcours_academique',
      y4: '4ème année — Informatique & Télécommunication',
      y4desc: "Spécialisation en Infrastructure & Cybersécurité à l'ISPM.",
      y3: 'Licence — Informatique & Télécommunication (ISPM)',
      y3desc: "Obtention de la Licence. Stage de 3 mois à l'ASECNA Ivato Aéroport pour la validation du mémoire d'étude.",
      y2: '2ème année — Informatique & Télécommunication (ISPM)',
      y2desc: "Approfondissement en réseaux, systèmes et administration.",
      y1: '1ère année — Informatique & Télécommunication (ISPM)',
      y1desc: "Fondamentaux en informatique, programmation et télécommunication."
    },
    skills: {
      sectionTitle: '02. Compétences',
      heading1: 'Mes compétences',
      heading2: '.',
      cat1: 'Cybersécurité',
      cat2: 'Infrastructure',
      cat3: 'Réseau',
      cat4: 'Développement',
      toolsTitle: '$ outils_favoris',
      itemVuln: 'Analyse de vulnérabilités',
      itemNetSec: 'Sécurité réseau',
      itemCrypto: 'Cryptographie'
    },
    projects: {
      sectionTitle: '03. Projets',
      heading1: 'Mes réalisations',
      heading2: '.',
      subtitle: 'Projets académiques et personnels en cybersécurité, infrastructure réseau et développement.',
      githubLink: 'Voir sur GitHub',
      p1desc: 'Outil Python éducatif pour scanner les applications web à la recherche de vulnérabilités courantes (XSS, SQL Injection, etc.). Projet de cybersécurité.',
      p2desc: "Configuration et déploiement d'un serveur web sécurisé avec scripts Shell. Mise en place des bonnes pratiques de sécurisation (SSL/TLS, hardening).",
      p3desc: "Conception et simulation d'une architecture réseau Small Office/Home Office. Configuration de routeurs, switches, VLAN et sécurité périmétrique."
    },
    certifications: {
      sectionTitle: '02. Certifications', 
      heading1: 'Mes ',
      heading2: 'Certifications'
    },
    contact: {
      sectionTitle: '04. Contact',
      heading1: 'Me contacter',
      heading2: '.',
      subtitle: "Une question, un projet, ou une opportunité ? N'hésitez pas !",
      infoTitle: '$ informations',
      formTitle: '$ envoyer_message',
      namePlaceholder: 'Nom',
      msgPlaceholder: 'Message',
      btnSend: 'Envoyer',
      btnSent: 'Envoyé !',
      btnSending: 'Envoi en cours...',
      errNetwork: "Une erreur de connexion est survenue. Veuillez réessayer dans quelques instants.",
      errSend: "Impossible d'envoyer le message pour le moment. Vous pouvez aussi me contacter directement par email."
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      certifications: 'Certifications',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    home: {
      role1: 'Infrastructure & Cybersecurity',
      role2: 'Network Administration',
      role3: 'Systems Security',
      role4: 'Pentesting & Auditing',
      badge: '~/portfolio — 4th Year Student',
      greeting: "Hi, I'm",
      btnProjects: 'View my projects',
      btnContact: 'Contact me',
      btnCV: 'Download my Resume'
    },
    about: {
      sectionTitle: '01. About',
      heading1: 'Who am I',
      heading2: '?',
      studentTitle: '4th Year Student',
      studentSubtitle: 'Infrastructure & Cybersecurity',
      desc1: "Passionate about cybersecurity and cloud computing, I am currently in my 4th year of studies. My academic journey has allowed me to acquire skills in systems administration, network security, and developing cybersecurity tools.",
      desc2: "I am particularly interested in pentesting, vulnerability analysis, and building secure network architectures.",
      highlight1: 'Cybersecurity',
      highlight2: 'Infrastructure',
      highlight3: 'Development',
      highlight4: 'Networking',
      academicPath: '$ academic_path',
      y4: '4th Year — IT & Telecommunications',
      y4desc: "Specialization in Infrastructure & Cybersecurity at ISPM.",
      y3: 'Bachelor — IT & Telecommunications (ISPM)',
      y3desc: "Obtained Bachelor's degree. 3-month internship at ASECNA Ivato Airport to validate my thesis.",
      y2: '2nd Year — IT & Telecommunications (ISPM)',
      y2desc: "Advanced networking, systems, and administration.",
      y1: '1st Year — IT & Telecommunications (ISPM)',
      y1desc: "Fundamentals in computer science, programming, and telecommunications."
    },
    skills: {
      sectionTitle: '02. Skills',
      heading1: 'My skills',
      heading2: '.',
      cat1: 'Cybersecurity',
      cat2: 'Infrastructure',
      cat3: 'Networking',
      cat4: 'Development',
      toolsTitle: '$ favorite_tools',
      itemVuln: 'Vulnerability Analysis',
      itemNetSec: 'Network Security',
      itemCrypto: 'Cryptography'
    },
    projects: {
      sectionTitle: '03. Projects',
      heading1: 'My portfolio',
      heading2: '.',
      subtitle: 'Academic and personal projects in cybersecurity, network infrastructure, and development.',
      githubLink: 'View on GitHub',
      p1desc: 'Educational Python tool to scan web applications for common vulnerabilities (XSS, SQL Injection, etc.). Cybersecurity project.',
      p2desc: "Configuration and deployment of a secure web server using Shell scripts. Implementation of security best practices (SSL/TLS, hardening).",
      p3desc: "Design and simulation of a Small Office/Home Office network architecture. Configuration of routers, switches, VLANs, and perimeter security."
    },
    certifications: {
      sectionTitle: '02. Certifications', 
      heading1: 'My ',
      heading2: 'Certifications'
    },
    contact: {
      sectionTitle: '04. Contact',
      heading1: 'Contact me',
      heading2: '.',
      subtitle: "A question, a project, or an opportunity? Don't hesitate!",
      infoTitle: '$ information',
      formTitle: '$ send_message',
      namePlaceholder: 'Name',
      msgPlaceholder: 'Message',
      btnSend: 'Send',
      btnSent: 'Sent!',
      btnSending: 'Sending...',
      errNetwork: "A connection error occurred. Please try again in a few moments.",
      errSend: "Unable to send the message at the moment. You can also contact me directly via email."
    }
  }
};

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";
type Join<K, P> = K extends string | number ? P extends string | number ? `${K}${"" extends P ? "" : "."}${P}` : never : never;
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type TranslationKey = Leaves<typeof translations.fr>;
