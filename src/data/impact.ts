import type { ImpactContent } from "@/types/impact";

export const impact: ImpactContent = {
  kicker: "Impacto",
  title: "Projetos com resultado real",
  description:
    "Trabalhos em que a tecnologia gerou uso prático, reconhecimento e alcance fora do código.",
  items: [
    {
      title: "D'Boa: app para crise de ansiedade",
      subtitle: "Aplicativo para crises de ansiedade e pânico",
      description:
        "App criado para ajudar pessoas em momentos de crise com um fluxo simples e direto de apoio.",
      highlights: [
        "Uso prático em um problema real de saúde emocional.",
        "Medalha de ouro na Infomatrix Chile e bronze na etapa Brasil.",
        "Projeto reconhecido pelo impacto e pela aplicação clara da tecnologia.",
      ],
      links: [
        { label: "Ver D'Boa", href: "https://dboa.com.br/" },
        { label: "GitHub", href: "https://github.com/aeciobrumel/Dboa_app_BETA" },
      ],
    },
    {
      title: "Documentário: tecnologia em projeto cultural",
      subtitle: "Participação em projeto audiovisual/documental",
      description:
        "Participação em um projeto que conectou tecnologia, pesquisa e produção cultural.",
      highlights: [
        "Trabalho em equipe dentro de uma produção colaborativa.",
        "Projeto com alcance público e conexão com contexto educacional e cultural.",
        "Exemplo de atuação além do código, com entrega em projeto real.",
      ],
      links: [
        {
          label: "Ver reportagem",
          href: "https://noticiasdaaldeia.com.br/documentario-do-atlantico-ao-pacifico-uma-jornada-cientifica-acompanha-estudantes-gauchos-em-premiacao-internacional/",
        },
        {
          label: "Ver documentário",
          href: "https://www.youtube.com/watch?v=aQW72T84mcs",
        },
      ],
    },
  ],
};
