import { PortfolioData } from '../types/portfolio';
import profilePhoto from '../assets/profile-d.jpeg';
import profilePhotoDark from '../assets/Profile.jpg';
export const portfolioData: PortfolioData = {
  profile: {
    name: 'Aécio Brumel',
    username: 'Brumel',
    role: 'Desenvolvedor Full Stack',
    location: 'Rio Grande do Sul, Brasil',
    headline: 'Laravel, React, TypeScript, Docker',
    availability: 'freelas',
    avatarUrl: profilePhoto,
    avatarUrlDark: profilePhotoDark,
    avatarAlt: 'Foto de perfil de Aécio Brumel',
    summary: [
      'Resolvo problemas. Aprendo rápido. Entrego soluções.',
      'Sou desenvolvedor fullstack, atuando principalmente com Laravel no backend e React + TypeScript no frontend.',
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
    "const motto ='Curioso por natureza. Comprometido com a entrega.';"
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
  title: 'jogo_da_memoria',
  description: 'Jogo da memória com interface responsiva e lógica de cartas voltada para uma experiência simples e fluida.',
  stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  highlights: ['Lógica de cartas', 'Responsivo', 'Interface interativa'],
  image: '/jogodamemoria.png',
  links: {
    github: 'https://github.com/aeciobrumel/memory-game',
    demo: 'https://jogodamemorias.netlify.app/'
  }
},
{
  title: 'calculadora_imc',
  description: 'Calculadora de IMC com validação de dados e resultado exibido de forma clara em poucos passos.',
  stack: ['Next.js', 'TypeScript', 'Tailwind'],
  highlights: ['Cálculo automático', 'Validação de campos', 'UI limpa'],
  image: '/calc-imc.png',
  links: {
    github: 'https://github.com/aeciobrumel/calculadora-imc',
    demo: 'https://calcimccalc.netlify.app/'
  }
},
{
  title: 'loja_shadcn',
  description: 'Loja virtual com catálogo de produtos e pedido enviado direto para o WhatsApp.',
  stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
  highlights: ['Catálogo de produtos', 'UI com shadcn', 'Pedido via WhatsApp'],
  image: '/loja-shadcn.png',
  links: {
    github: 'https://github.com/aeciobrumel/loja-com-shadcnui',
    demo: 'https://lojashadcn.netlify.app/'
  }
},
    {
      title: 'brumel_dev',
      description: 'Portfólio pessoal com navegação simples, dark mode e estrutura reutilizável para outros devs.',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      highlights: ['Dark mode', 'Scroll suave', 'Componentização'],
      image: '/brumeldev.png',
      links: {
        github: 'https://github.com/aeciobrumel/brumel_dev',
        demo: 'https://brumel.dev'
      }
    },
    {
      title: 'Dboa_app_BETA (Demonstração Mobile)',
      description: 'Aplicativo para apoio em crises de ansiedade, com fluxo guiado e reconhecimento em feiras de inovação.',
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
      description: 'Landing page criada para apresentar o projeto D\'Boa e direcionar interessados para baixar o app.',
      stack: ['React', 'Tailwind'],
      highlights: ['Landing otimizada', 'Conteúdo claro', 'CTA visível'],
      image:  '/dboa_site.png',

      links: {
        github: 'https://github.com/aeciobrumel/De_Boa_Site',
        demo: 'https://dboa.com.br/'
      }
    },
     {
      title: 'Galeria de fotos',
      description: 'Galeria responsiva com grid organizado e visualização ampliada das imagens.',
      stack: ['React', 'Vite', 'CSS'],
      highlights: ['Grid responsivo', 'Gallery', 'Lightbox simples'],
      image: '/galeria.png',
      links: {
        github: 'https://github.com/aeciobrumel/galeria-de-fotos',
        demo: 'https://sunny-brigadeiros-4d4baf.netlify.app/'
      }
    },
     {
      title: 'dark-theme-react',
      description: 'Exemplo de interface com tema escuro, alternância visual e persistência da escolha do usuário.',
      stack: ['React', 'TypeScript', 'CSS'],
      highlights: ['Dark mode', 'State simples', 'Reutilizável'],
      image: '/darkMode.png',
      links: {
        github: 'https://github.com/aeciobrumel/dark-theme-react',
        demo: 'https://darkthemer.netlify.app/'
      }
    },
    {
      title: 'Quiz de Conhecimentos Gerais',
      description: 'Quiz com perguntas objetivas e feedback imediato para manter a interação rápida.',
      stack: ['React', 'Vite', 'TypeScript'],
      highlights: ['Quiz', 'Feedback rápido', 'Deploy Vercel'],
      image: '/quizConhecimentos.png',
      links: {
        github: 'https://github.com/aeciobrumel/quiz-react',
        demo: 'https://dynamic-crumble-ef3ab8.netlify.app/'
      }
    },
    {
      title: 'Compra de Pizzas',
      description: 'Interface de compra de pizzas com listagem de itens e fluxo visual direto.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['UI simples', 'Listagem', 'Deploy Vercel'],
      image: '/comprasdepizzas.png',
      links: {
        github: 'https://github.com/aeciobrumel/projeto-compra-de-pizzas',
        demo: 'https://comprapizzas.netlify.app/'
      }
    },
    {
      title: 'Relógio Analógico',
      description: 'Relógio analógico renderizado no navegador com animação contínua em canvas.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['Canvas', 'Animação', 'Vanilla JS'],
      image: '/relogioAnalogico.png',
      links: {
        github: 'https://github.com/aeciobrumel/relogio-analogico',
        demo: 'https://relogioanalogicos.netlify.app/'
      }
    },
    {
      title: 'Quadro de desenho',
      description: 'Quadro de desenho no navegador com seleção de cores e interação em tempo real.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['Canvas', 'Interatividade', 'Vanilla JS'],
      image: '/quadrodedesenho.png',
      links: {
        github: 'https://github.com/aeciobrumel/quadro-de-desenho',
        demo: 'https://quadrodedesenho.netlify.app'
      }
    },
    {
      title: 'Exemplos com Tailwind',
      description: 'Coleção de interfaces com Tailwind para testar ideias e acelerar protótipos.',
      stack: ['Tailwind', 'React'],
      highlights: ['Snippets rápidos', 'Layout responsivo', 'Vibe dev'],
      image: '/exemplosTaiwind.png',
      links: {
        github: 'https://github.com/aeciobrumel/exemplos-com-taiwind',
        demo: 'https://compexample.netlify.app/'
      }
    },
   
  ],
  impact: {
    kicker: 'Impacto',
    title: 'Projetos com resultado real',
    description: 'Trabalhos em que a tecnologia gerou uso prático, reconhecimento e alcance fora do código.',
    items: [
      {
        title: "D'Boa: app para crise de ansiedade",
        subtitle: 'Aplicativo para crises de ansiedade e pânico',
        description: 'App criado para ajudar pessoas em momentos de crise com um fluxo simples e direto de apoio.',
        highlights: [
          'Uso prático em um problema real de saúde emocional.',
          'Medalha de ouro na Infomatrix Chile e bronze na etapa Brasil.',
          'Projeto reconhecido pelo impacto e pela aplicação clara da tecnologia.'
        ],
        links: [
          { label: 'Ver D’Boa', href: 'https://dboa.com.br/' },
          { label: 'GitHub', href: 'https://github.com/aeciobrumel/Dboa_app_BETA' }
        ]
      },
      {
        title: 'Documentário: tecnologia em projeto cultural',
        subtitle: 'Participação em projeto audiovisual/documental',
        description: 'Participação em um projeto que conectou tecnologia, pesquisa e produção cultural.',
        highlights: [
          'Trabalho em equipe dentro de uma produção colaborativa.',
          'Projeto com alcance público e conexão com contexto educacional e cultural.',
          'Exemplo de atuação além do código, com entrega em projeto real.'
        ], 
        links: [
          { label: 'Ver reportagem', href: 'https://noticiasdaaldeia.com.br/documentario-do-atlantico-ao-pacifico-uma-jornada-cientifica-acompanha-estudantes-gauchos-em-premiacao-internacional/' },
          { label: 'Ver documentário', href: 'https://www.youtube.com/watch?v=aQW72T84mcs' }

        ]
      }
    ]
  },
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
      description: 'Autodidata e disciplinado, com aprendizado contínuo e foco em entregas consistentes.',
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
