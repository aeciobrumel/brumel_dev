import { describe, expect, it } from "vitest";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const HAS_AT = /@/;
const IS_HTTPS = /^https:\/\//;

describe("dados estáticos", () => {
  it("profile tem links essenciais", () => {
    expect(profile.links.email).toMatch(HAS_AT);
    expect(profile.links.github).toMatch(IS_HTTPS);
  });

  it("todo projeto tem título e link de github", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title).not.toBe("");
      expect(project.links.github).toMatch(IS_HTTPS);
    }
  });

  it("experiências e skills não estão vazias", () => {
    expect(experiences.length).toBeGreaterThan(0);
    expect(skills.length).toBeGreaterThan(0);
  });
});
