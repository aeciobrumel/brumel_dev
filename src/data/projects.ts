import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Cola do dev",
    description:
      "Extensão para salvar, organizar e consultar snippets de código no popup do navegador, com busca, filtros e cópia rápida.",
    stack: ["React", "TypeScript", "Tailwind"],
    highlights: ["Busca e filtros", "Cópia em um clique"],
    image: "/coladodev.png",
    links: {
      firefox:
        "https://addons.mozilla.org/pt-BR/firefox/addon/cola-do-dev/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
      chrome:
        "https://chromewebstore.google.com/detail/nafbkgokdbkomhkgdmjjlmkimfnkjeba?utm_source=item-share-cb",
      github: "https://github.com/aeciobrumel/memory-game",
    },
  },
  {
    title: "loja_shadcn",
    description:
      "Loja virtual com catálogo de produtos e pedido enviado direto para o WhatsApp.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    highlights: ["Catálogo de produtos", "UI com shadcn", "Pedido via WhatsApp"],
    image: "/loja-shadcn.png",
    links: {
      github: "https://github.com/aeciobrumel/loja-com-shadcnui",
      demo: "https://lojashadcn.netlify.app/",
    },
  },
  {
    title: "O Leão Tá de Olho",
    description:
      "Aplicação para consultar o valor histórico de criptomoedas em BRL e organizar operações como apoio ao Imposto de Renda.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "React Router",
      "TanStack Query",
      "Zustand",
    ],
    highlights: [
      "Cotação histórica em BRL",
      "Resumo para IR",
      "Dados salvos no navegador",
    ],
    image: "/oleaotadeolho.png",
    links: {
      github: "https://github.com/aeciobrumel/o-leao-ta-de-olho.git",
      demo: "https://oleaotadeolho.com/",
    },
  },
  {
    title: "jogo_da_memoria",
    description:
      "Jogo da memória com interface responsiva e lógica de cartas voltada para uma experiência simples e fluida.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    highlights: ["Lógica de cartas", "Responsivo", "Interface interativa"],
    image: "/jogodamemoria.png",
    links: {
      github: "https://github.com/aeciobrumel/memory-game",
      demo: "https://jogodamemorias.netlify.app/",
    },
  },
  {
    title: "calculadora_imc",
    description:
      "Calculadora de IMC com validação de dados e resultado exibido de forma clara em poucos passos.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: ["Cálculo automático", "Validação de campos", "UI limpa"],
    image: "/calc-imc.png",
    links: {
      github: "https://github.com/aeciobrumel/calculadora-imc",
      demo: "https://calcimccalc.netlify.app/",
    },
  },
  {
    title: "brumel_dev",
    description:
      "Portfólio pessoal com navegação simples, dark mode e estrutura reutilizável para outros devs.",
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    highlights: ["Dark mode", "Scroll suave", "Componentização"],
    image: "/brumeldev.png",
    links: {
      github: "https://github.com/aeciobrumel/brumel_dev",
      demo: "https://brumel.dev",
    },
  },
  {
    title: "Dboa_app_BETA (Demonstração Mobile)",
    description:
      "Aplicativo para apoio em crises de ansiedade, com fluxo guiado e reconhecimento em feiras de inovação.",
    stack: ["React Native", "Expo", "Firebase"],
    highlights: ["Guided flow", "Feedback ao usuário", "Pitch premiado"],
    image: "/dboaapp.png",
    links: {
      github: "https://github.com/aeciobrumel/Dboa_app_BETA",
      demo: "https://dboaapp.com/",
    },
  },
  {
    title: "De_Boa_Site",
    description:
      "Landing page criada para apresentar o projeto D'Boa e direcionar interessados para baixar o app.",
    stack: ["React", "Tailwind"],
    highlights: ["Landing otimizada", "Conteúdo claro", "CTA visível"],
    image: "/dboa_site.png",
    links: {
      github: "https://github.com/aeciobrumel/De_Boa_Site",
      demo: "https://dboa.com.br/",
    },
  },
  {
    title: "Galeria de fotos",
    description:
      "Galeria responsiva com grid organizado e visualização ampliada das imagens.",
    stack: ["React", "Vite", "CSS"],
    highlights: ["Grid responsivo", "Gallery", "Lightbox simples"],
    image: "/galeria.png",
    links: {
      github: "https://github.com/aeciobrumel/galeria-de-fotos",
      demo: "https://sunny-brigadeiros-4d4baf.netlify.app/",
    },
  },
  {
    title: "dark-theme-react",
    description:
      "Exemplo de interface com tema escuro, alternância visual e persistência da escolha do usuário.",
    stack: ["React", "TypeScript", "CSS"],
    highlights: ["Dark mode", "State simples", "Reutilizável"],
    image: "/darkMode.png",
    links: {
      github: "https://github.com/aeciobrumel/dark-theme-react",
      demo: "https://darkthemer.netlify.app/",
    },
  },
  {
    title: "Quiz de Conhecimentos Gerais",
    description:
      "Quiz com perguntas objetivas e feedback imediato para manter a interação rápida.",
    stack: ["React", "Vite", "TypeScript"],
    highlights: ["Quiz", "Feedback rápido", "Deploy Vercel"],
    image: "/quizConhecimentos.png",
    links: {
      github: "https://github.com/aeciobrumel/quiz-react",
      demo: "https://dynamic-crumble-ef3ab8.netlify.app/",
    },
  },
  {
    title: "Compra de Pizzas",
    description:
      "Interface de compra de pizzas com listagem de itens e fluxo visual direto.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["UI simples", "Listagem", "Deploy Vercel"],
    image: "/comprasdepizzas.png",
    links: {
      github: "https://github.com/aeciobrumel/projeto-compra-de-pizzas",
      demo: "https://comprapizzas.netlify.app/",
    },
  },
  {
    title: "Relógio Analógico",
    description:
      "Relógio analógico renderizado no navegador com animação contínua em canvas.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Canvas", "Animação", "Vanilla JS"],
    image: "/relogioAnalogico.png",
    links: {
      github: "https://github.com/aeciobrumel/relogio-analogico",
      demo: "https://relogioanalogicos.netlify.app/",
    },
  },
  {
    title: "Quadro de desenho",
    description:
      "Quadro de desenho no navegador com seleção de cores e interação em tempo real.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Canvas", "Interatividade", "Vanilla JS"],
    image: "/quadrodedesenho.png",
    links: {
      github: "https://github.com/aeciobrumel/quadro-de-desenho",
      demo: "https://quadrodedesenho.netlify.app",
    },
  },
  {
    title: "Exemplos com Tailwind",
    description:
      "Coleção de interfaces com Tailwind para testar ideias e acelerar protótipos.",
    stack: ["Tailwind", "React"],
    highlights: ["Snippets rápidos", "Layout responsivo", "Vibe dev"],
    image: "/exemplosTaiwind.png",
    links: {
      github: "https://github.com/aeciobrumel/exemplos-com-taiwind",
      demo: "https://compexample.netlify.app/",
    },
  },
];
