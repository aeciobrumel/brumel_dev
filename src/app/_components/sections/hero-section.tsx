import { HeroAvatar } from "@/app/_components/hero-avatar";
import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/mailto";

export function HeroSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-24 pb-14 md:pt-28" id="hero">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="order-2 space-y-5 md:order-1">
          <p className="font-medium text-muted-foreground text-sm">
            Olá, eu sou {profile.name}
          </p>
          <h1 className="font-bold text-5xl text-foreground leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-primary">Desenvolvedor</span>{" "}
            <span className="font-display font-normal text-[1.1em] italic">
              Full Stack
            </span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Focado em React, TypeScript e Laravel. Entrego soluções claras,
            rápidas e fáceis de manter.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#my-portfolio">
                Ver projetos
                <ArrowRightIcon className="size-4" />
              </a>
            </Button>
            <a
              className="font-medium text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-accent hover:underline"
              href={buildMailto({ to: profile.links.email })}
            >
              Contato ↗
            </a>
          </div>
        </div>

        <div className="order-1 flex w-full justify-center md:order-2 md:justify-end">
          <Card className="inline-flex items-center justify-center p-3 sm:p-4 md:p-5">
            <CardContent className="p-0">
              <HeroAvatar
                alt={profile.avatarAlt ?? "Foto de perfil"}
                name={profile.name}
                src={profile.avatarUrl}
                srcDark={profile.avatarUrlDark}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
