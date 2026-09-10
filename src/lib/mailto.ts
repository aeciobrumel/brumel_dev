export type MailtoInput = {
  to: string;
  subject?: string;
  body?: string;
};

export function buildMailto({ to, subject, body }: MailtoInput): string {
  const params = new URLSearchParams();
  if (subject) {
    params.set("subject", subject);
  }
  if (body) {
    params.set("body", body);
  }
  const query = params.toString();
  return `mailto:${to.trim()}${query ? `?${query}` : ""}`;
}

export function buildContactMailto(
  to: string,
  values: { name: string; email: string; message: string }
): string {
  return buildMailto({
    to,
    subject: `Contato do site — ${values.name}`,
    body: `${values.message}\n\n---\nNome: ${values.name}\nEmail: ${values.email}`,
  });
}
