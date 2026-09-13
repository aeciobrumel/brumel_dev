export interface HomeSection {
  id: string;
  label: string;
}

/** Ordem e rótulos do menu; `id` casa com o id da <section> renderizada em page.tsx. */
export const HOME_SECTIONS: HomeSection[] = [
  { id: "hero", label: "Início" },
  { id: "my-portfolio", label: "Projetos" },
  { id: "skills", label: "Skills" },
  { id: "impact", label: "Impacto" },
  { id: "experience", label: "Experiência" },
  { id: "partners", label: "Parceiros" },
  { id: "contact", label: "Contato" },
];

export const HOME_SECTION_IDS = HOME_SECTIONS.map((section) => section.id);
