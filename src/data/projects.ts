import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    description:
      "Aplicação de mapa astral com frontend e backend próprios: calcula as posições a partir dos dados de nascimento, gera o PDF personalizado e entrega por email após a confirmação do pagamento.",
    highlights: [
      "Cálculo do mapa no backend",
      "Geração de PDF personalizado",
      "Entrega por email pós-pagamento",
    ],
    image: "/chaveastral.webp",
    links: {
      demo: "https://chaveastral.cloud/",
    },
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Laravel", "PHP"],
    title: "Chave Astral",
  },
  {
    description:
      "Landing page para venda de lenha de acácia em Guaíba e região, com catálogo por tipo de uso e pedido direto pelo WhatsApp.",
    highlights: [
      "Pedido via WhatsApp",
      "Catálogo por tipo de lenha",
      "Foco em conversão local",
    ],
    image: "/ladefora.webp",
    links: {
      demo: "https://ladefora.netlify.app/",
    },
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    title: "Lá De Fora Woods",
  },
  {
    description:
      "Portfólio de marketing digital com apresentação de conteúdos, projetos e canal direto de contato.",
    highlights: [
      "Identidade visual autoral",
      "Seções de conteúdo e projetos",
      "Contato direto",
    ],
    image: "/portifoliomarketing.webp",
    links: {
      demo: "https://mariaeduardamkt.com/",
    },
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    title: "Portfólio Maria Eduarda",
  },
  {
    description:
      "Extensão para salvar, organizar e consultar snippets de código no popup do navegador, com busca, filtros e cópia rápida.",
    highlights: ["Busca e filtros", "Cópia em um clique"],
    image: "/coladodev.webp",
    links: {
      chrome:
        "https://chromewebstore.google.com/detail/nafbkgokdbkomhkgdmjjlmkimfnkjeba?utm_source=item-share-cb",
      firefox:
        "https://addons.mozilla.org/pt-BR/firefox/addon/cola-do-dev/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
      github: "https://github.com/aeciobrumel/memory-game",
    },
    stack: ["React", "TypeScript", "Tailwind"],
    title: "Cola do dev",
  },
  {
    description:
      "Loja virtual com catálogo de produtos e pedido enviado direto para o WhatsApp.",
    highlights: [
      "Catálogo de produtos",
      "UI com shadcn",
      "Pedido via WhatsApp",
    ],
    image: "/loja-shadcn.webp",
    links: {
      demo: "https://lojashadcn.netlify.app/",
      github: "https://github.com/aeciobrumel/loja-com-shadcnui",
    },
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    title: "loja_shadcn",
  },
  {
    description:
      "Aplicação para consultar o valor histórico de criptomoedas em BRL e organizar operações como apoio ao Imposto de Renda.",
    highlights: [
      "Cotação histórica em BRL",
      "Resumo para IR",
      "Dados salvos no navegador",
    ],
    image: "/oleaotadeolho.webp",
    links: {
      demo: "https://oleaotadeolho.com/",
      github: "https://github.com/aeciobrumel/o-leao-ta-de-olho.git",
    },
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "React Router",
      "TanStack Query",
      "Zustand",
    ],
    title: "O Leão Tá de Olho",
  },
  {
    description:
      "Jogo da memória com interface responsiva e lógica de cartas voltada para uma experiência simples e fluida.",
    highlights: ["Lógica de cartas", "Responsivo", "Interface interativa"],
    image: "/jogodamemoria.webp",
    links: {
      demo: "https://jogodamemorias.netlify.app/",
      github: "https://github.com/aeciobrumel/memory-game",
    },
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    title: "jogo_da_memoria",
  },
  {
    description:
      "Calculadora de IMC com validação de dados e resultado exibido de forma clara em poucos passos.",
    highlights: ["Cálculo automático", "Validação de campos", "UI limpa"],
    image: "/calc-imc.webp",
    links: {
      demo: "https://calcimccalc.netlify.app/",
      github: "https://github.com/aeciobrumel/calculadora-imc",
    },
    stack: ["Next.js", "TypeScript", "Tailwind"],
    title: "calculadora_imc",
  },
  {
    description:
      "Portfólio pessoal com navegação simples, dark mode e estrutura reutilizável para outros devs.",
    highlights: ["Dark mode", "Scroll suave", "Componentização"],
    image: "/brumeldev.webp",
    links: {
      demo: "https://brumel.dev",
      github: "https://github.com/aeciobrumel/brumel_dev",
    },
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    title: "brumel_dev",
  },
  {
    description:
      "Aplicativo para apoio em crises de ansiedade, com fluxo guiado e reconhecimento em feiras de inovação.",
    highlights: ["Guided flow", "Feedback ao usuário", "Pitch premiado"],
    image: "/dboaapp.webp",
    links: {
      demo: "https://dboaapp.com/",
      github: "https://github.com/aeciobrumel/Dboa_app_BETA",
    },
    stack: ["React Native", "Expo", "Firebase"],
    title: "Dboa_app_BETA (Demonstração Mobile)",
  },
  {
    description:
      "Landing page criada para apresentar o projeto D'Boa e direcionar interessados para baixar o app.",
    highlights: ["Landing otimizada", "Conteúdo claro", "CTA visível"],
    image: "/dboa_site.webp",
    links: {
      demo: "https://dboa.com.br/",
      github: "https://github.com/aeciobrumel/De_Boa_Site",
    },
    stack: ["React", "Tailwind"],
    title: "De_Boa_Site",
  },
  {
    description:
      "Galeria responsiva com grid organizado e visualização ampliada das imagens.",
    highlights: ["Grid responsivo", "Gallery", "Lightbox simples"],
    image: "/galeria.webp",
    links: {
      demo: "https://sunny-brigadeiros-4d4baf.netlify.app/",
      github: "https://github.com/aeciobrumel/galeria-de-fotos",
    },
    stack: ["React", "Vite", "CSS"],
    title: "Galeria de fotos",
  },
  {
    description:
      "Exemplo de interface com tema escuro, alternância visual e persistência da escolha do usuário.",
    highlights: ["Dark mode", "State simples", "Reutilizável"],
    image: "/darkMode.webp",
    links: {
      demo: "https://darkthemer.netlify.app/",
      github: "https://github.com/aeciobrumel/dark-theme-react",
    },
    stack: ["React", "TypeScript", "CSS"],
    title: "dark-theme-react",
  },
  {
    description:
      "Quiz com perguntas objetivas e feedback imediato para manter a interação rápida.",
    highlights: ["Quiz", "Feedback rápido", "Deploy Vercel"],
    image: "/quizConhecimentos.webp",
    links: {
      demo: "https://dynamic-crumble-ef3ab8.netlify.app/",
      github: "https://github.com/aeciobrumel/quiz-react",
    },
    stack: ["React", "Vite", "TypeScript"],
    title: "Quiz de Conhecimentos Gerais",
  },
  {
    description:
      "Interface de compra de pizzas com listagem de itens e fluxo visual direto.",
    highlights: ["UI simples", "Listagem", "Deploy Vercel"],
    image: "/comprasdepizzas.webp",
    links: {
      demo: "https://comprapizzas.netlify.app/",
      github: "https://github.com/aeciobrumel/projeto-compra-de-pizzas",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    title: "Compra de Pizzas",
  },
  {
    description:
      "Relógio analógico renderizado no navegador com animação contínua em canvas.",
    highlights: ["Canvas", "Animação", "Vanilla JS"],
    image: "/relogioAnalogico.webp",
    links: {
      demo: "https://relogioanalogicos.netlify.app/",
      github: "https://github.com/aeciobrumel/relogio-analogico",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    title: "Relógio Analógico",
  },
  {
    description:
      "Quadro de desenho no navegador com seleção de cores e interação em tempo real.",
    highlights: ["Canvas", "Interatividade", "Vanilla JS"],
    image: "/quadrodedesenho.webp",
    links: {
      demo: "https://quadrodedesenho.netlify.app",
      github: "https://github.com/aeciobrumel/quadro-de-desenho",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    title: "Quadro de desenho",
  },
  {
    description:
      "Coleção de interfaces com Tailwind para testar ideias e acelerar protótipos.",
    highlights: ["Snippets rápidos", "Layout responsivo", "Vibe dev"],
    image: "/exemplosTaiwind.webp",
    links: {
      demo: "https://compexample.netlify.app/",
      github: "https://github.com/aeciobrumel/exemplos-com-taiwind",
    },
    stack: ["Tailwind", "React"],
    title: "Exemplos com Tailwind",
  },
];
