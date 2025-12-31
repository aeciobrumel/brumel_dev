import { PortfolioData } from '../types/portfolio';
import profilePhoto from '../assets/Profile.jpg';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Aécio Brumel',
    username: 'Brumel',
    role: 'Desenvolvedor Full Stack Jr',
    location: 'Rio Grande do Sul, Brasil',
    headline: 'Laravel, React, TypeScript, Docker e UI clara',
    availability: 'Aberto para remoto e freelas',
    avatarUrl: profilePhoto,
    avatarAlt: 'Foto de perfil de Aécio Brumel',
    summary: [
      'Sou esforçado — o que eu não sei, eu dou um jeito de fazer.',
      'Sou desenvolvedor fullstack e trabalho principalmente com Laravel no backend e React + TypeScript no frontend.',
      'Atuo em projetos com regras de negócio reais, buscando entregar soluções funcionais, organizadas e fáceis de evoluir.',
      'Tenho perfil prático: gosto de entender o problema, resolver e fazer funcionar, sempre equilibrando produto e engenharia.'
    ],
    approach: [
      'Perfil prático e mão na massa.',
      'Movido a desafios.',
      'Boa comunicação com áreas não técnicas.',
      'Sempre de olho em responsividade e acessibilidade.'
    ],
    links: {
      github: 'https://github.com/aeciobrumel',
      linkedin: 'https://www.linkedin.com/in/aeciobrumel',
      instagram: 'https://www.instagram.com/aecio_brumel',
      email: 'aeciobrumelms@gmail.com'
    }
  },
  snippet: [
    "const dev = 'Aécio Brumel';",
    "const stack = ['React', 'TypeScript','Laravel',  'Docker'];",
    "const motto = 'O que eu não sei, eu dou um jeito de fazer.';"
  ],
  technologies: [
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Tailwind', icon: 'tailwind' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Bootstrap', icon: 'bootstrap' }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'PHP', icon: 'php' }
      ]
    },
    {
      title: 'DevOps',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Docker Compose', icon: 'docker-compose' }
      ]
    },
    {
      title: 'Sistemas Operacionais',
      items: [
        { name: 'Linux', icon: 'linux' },
        { name: 'Windows', icon: 'windows' }
      ]
    },
    {
      title: 'IA',
      items: [
        { name: 'Prompt Engineering (LLMs)', icon: 'ai' },
        { name: 'LLM Fundamentals (tokens & context)', icon: 'ai' },
        { name: 'GPT / Codex', icon: 'ai' }
      ]
    },
    {
      title: 'Outros',
      items: [
        { name: 'Git / GitHub', icon: 'git' },
        { name: 'APIs REST', icon: 'api' }
      ]
    }
  ],
  projects: [
    {
      title: 'brumel_dev',
      description: 'Site portfólio minimalista e reutilizavel para devs, foco em tipagem e dark mode.',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      highlights: ['Dark mode', 'Scroll suave', 'Componentização'],
      image: '/project-placeholder.svg',
      links: {
        github: 'https://github.com/aeciobrumel/brumel_dev',
        demo: 'https://github.com/aeciobrumel/brumel_dev'
      }
    },
    {
      title: 'Dboa_app_BETA (Demonstração Mobile)',
      description: 'Web App para conduzir crise de ansiedade. Medalha de ouro na Infomatrix Chile, Bronze na Infomatrix Brasil e certificado 2x para Mostratec.',
      stack: ['React Native', 'Expo', 'Firebase'],
      highlights: ['Guided flow', 'Feedback ao usuário', 'Pitch premiado'],
      image:  '/dboaapp.png',
      links: {
        github: 'https://github.com/aeciobrumel/Dboa_app_BETA',
        demo: 'https://dboaapp.com/'
      }
    },
    {
      title: 'De_Boa_Site',
      description: 'Landing page do projeto De Boa, para apresentar o app e captação de interessados com redirecionamento para apk android.',
      stack: ['React', 'Tailwind'],
      highlights: ['Landing otimizada', 'Conteúdo claro', 'CTA visível'],
      image:  '/dboa_site.png',

      links: {
        github: 'https://github.com/aeciobrumel/De_Boa_Site',
        demo: 'https://dboa.com.br/'
      }
    },
    {
      title: 'desafio-3-semana',
      description: 'API Laravel + React no front para consumir endpoints e validar fluxo fullstack.',
      stack: ['Laravel', 'React', 'TypeScript'],
      highlights: ['Fullstack', 'Consumo de API', 'Clean UI'],
      image: '/project-placeholder.svg',
      links: {
        github: 'https://github.com/aeciobrumel/desafio-3-semana'
      }
    },
    {
      title: 'exemplos-com-taiwind',
      description: 'Coleção de exemplos com Tailwind para acelerar protótipos e ideias.',
      stack: ['Tailwind', 'React'],
      highlights: ['Snippets rápidos', 'Layout responsivo', 'Vibe dev'],
      image: '/project-placeholder.svg',
      links: {
        github: 'https://github.com/aeciobrumel/exemplos-com-taiwind'
      }
    },
    {
      title: 'dark-theme-react',
      description: 'Exemplo de tema escuro em React com toggle e persistência.',
      stack: ['React', 'TypeScript', 'CSS'],
      highlights: ['Dark mode', 'State simples', 'Reutilizável'],
      image: '/project-placeholder.svg',
      links: {
        github: 'https://github.com/aeciobrumel/dark-theme-react'
      }
    }
  ],
  highlights: [
    {
      title: 'Arquitetura',
      description: 'Componentes claros, pastas organizadas e tipagem para evitar regressões.',
      icon: 'architecture'
    },
    {
      title: 'Responsividade',
      description: 'Layout mobile-first, grids fluidos e testes constantes em breakpoints.',
      icon: 'responsive'
    },
    {
      title: 'Entrega',
      description: 'Autodidata e disciplinado. O que não sei, aprendo rápido e entrego.',
      icon: 'delivery'
    }
  ],
  timeline: [
    {
      title: 'Desenvolvedor Full Stack — Senac RS',
      period: 'mai de 2025 — atual',
      description: 'Atuação híbrida cuidando de features fullstack, integrações e banco de dados.',
      tags: ['TypeScript', 'Banco de dados', 'Full stack', 'Híbrido']
    },
    {
      title: 'Auxiliar de TI — Senac RS',
      period: 'abr de 2024 — mai de 2025',
      description: 'Suporte e operação de infraestrutura, garantindo disponibilidade e atendimento rápido.',
      tags: ['Suporte', 'Infra', 'Trabalho em equipe', 'Porto Alegre/RS']
    },
    {
      title: 'Centro Universitário Cesuca — Análise e Desenvolvimento de Sistemas',
      period: 'fev de 2023 — mar de 2025',
      description: 'Formação em ADS com foco em controle de versão, banco de dados, front-end e metodologias ágeis.',
      tags: ['ADS', 'Git', 'Banco de dados', 'Bootstrap', 'JavaScript']
    },
    {
      title: 'QI Faculdade — Técnico em Informática para Internet',
      period: 'ago de 2019 — dez de 2022',
      description: 'Base técnica em programação, redes, acessibilidade e segurança para web.',
      tags: ['Técnico', 'Programação', 'Redes', 'Acessibilidade']
    },
    {
      title: 'Projetos pessoais e freelas',
      period: '2023 — Atual',
      description: 'Construindo e iterando produtos próprios e de clientes com React, Laravel e automação simples.',
      tags: ['React', 'Laravel', 'Tailwind', 'Docker']
    },
    {
      title: 'Dboa_app_BETA — medalha de ouro Infomatrix Chile',
      period: '2022',
      description: 'Criação do app para apoiar pessoas em crises de ansiedade, com apresentação premiada e certificação Mostratec.',
      tags: ['React Native', 'Firebase', 'UX de fluxo']
    },
    {
      title: 'Comunidade e desafios',
      period: '2021 — 2022',
      description: 'Desafios fullstack com Laravel + React e experimentos públicos no GitHub para aprender rápido.',
      tags: ['APIs REST', 'CI/CD simples', 'GitHub']
    }
  ]
};
