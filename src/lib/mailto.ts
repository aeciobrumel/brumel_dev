export interface MailtoInput {
  body?: string;
  subject?: string;
  to: string;
}

// mailto (RFC 6068) NÃO é form-encoded: espaço vira %20, não "+".
// Por isso montamos a query com encodeURIComponent em vez de URLSearchParams.
export function buildMailto({ to, subject, body }: MailtoInput): string {
  const parts: string[] = [];
  if (subject) {
    parts.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    parts.push(`body=${encodeURIComponent(body)}`);
  }
  const query = parts.join("&");
  return `mailto:${to.trim()}${query ? `?${query}` : ""}`;
}

export function buildContactMailto(
  to: string,
  values: { name: string; email: string; message: string }
): string {
  return buildMailto({
    body: `${values.message}\n\n---\nNome: ${values.name}\nEmail: ${values.email}`,
    subject: `Contato do site — ${values.name}`,
    to,
  });
}
