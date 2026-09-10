import { SocialLinks } from "@/components/social-links";
import { SITE_STACK } from "@/consts/stack";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const buildYear = new Date(
    process.env.NEXT_PUBLIC_BUILD_DATE ?? Date.now()
  ).getFullYear();

  return (
    <footer className="border-outline/50 border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-foreground text-sm tracking-tight">
            {profile.name}
          </p>
          <p className="text-muted-foreground text-sm">{profile.role}</p>
          <p className="max-w-lg text-muted-foreground/80 text-sm leading-6">
            Portfólio construído com foco em clareza visual, performance e uma
            experiência mais próxima de produto.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {SITE_STACK.map((item) => (
              <span
                className="rounded-full border border-outline/60 bg-card/60 px-2.5 py-1 font-medium text-[11px] text-muted-foreground"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="pt-2 text-muted-foreground/70 text-xs">
            © {buildYear} {profile.name}. Todos os direitos reservados.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-muted-foreground text-xs uppercase tracking-[0.22em]">
            Links principais
          </p>
          <SocialLinks links={profile.links} />
        </div>
      </div>
    </footer>
  );
}
