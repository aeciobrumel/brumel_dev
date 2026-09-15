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

  it("todo projeto tem título e ao menos um link", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title).not.toBe("");

      const urls = Object.values(project.links).filter(Boolean);
      expect(urls.length).toBeGreaterThan(0);
      for (const url of urls) {
        expect(url).toMatch(IS_HTTPS);
      }
    }
  });

  it("experiências e skills não estão vazias", () => {
    expect(experiences.length).toBeGreaterThan(0);
    expect(skills.length).toBeGreaterThan(0);
  });
});
