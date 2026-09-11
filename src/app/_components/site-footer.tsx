import { profile } from "@/data/profile";

export function SiteFooter() {
  const buildYear = new Date(
    process.env.NEXT_PUBLIC_BUILD_DATE ?? Date.now()
  ).getFullYear();

  return (
    <footer className="border-outline/50 border-t py-4">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-muted-foreground text-xs">
          © {buildYear} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
