export function getEmailComposeHref(email: string) {
  const safeEmail = email.trim();
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(safeEmail)}`;
}
