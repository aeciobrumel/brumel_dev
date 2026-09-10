import { describe, expect, it } from "vitest";
import { buildContactMailto, buildMailto } from "@/lib/mailto";

describe("buildMailto", () => {
  it("monta mailto só com o destinatário", () => {
    expect(buildMailto({ to: "a@b.com" })).toBe("mailto:a@b.com");
  });

  it("codifica subject e body com %20 (mailto, não form-encoding)", () => {
    const url = buildMailto({
      body: "linha 1\nlinha 2",
      subject: "Olá mundo",
      to: "a@b.com",
    });
    expect(url).toContain("mailto:a@b.com?");
    expect(url).toContain("subject=Ol%C3%A1%20mundo");
    expect(url).toContain("body=linha%201%0Alinha%202");
  });
});

describe("buildContactMailto", () => {
  it("inclui nome, email e mensagem no corpo", () => {
    const url = buildContactMailto("dono@site.com", {
      email: "fulano@mail.com",
      message: "Quero um orçamento",
      name: "Fulano",
    });
    const decoded = decodeURIComponent(url);
    expect(decoded).toContain("mailto:dono@site.com");
    expect(decoded).toContain("Nome: Fulano");
    expect(decoded).toContain("Email: fulano@mail.com");
    expect(decoded).toContain("Quero um orçamento");
  });
});
