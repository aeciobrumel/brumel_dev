"use client";

import { type FormEvent, useState } from "react";
import validator from "validator";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildContactMailto } from "@/lib/mailto";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z
    .string()
    .trim()
    .refine((value) => validator.isEmail(value), "Email inválido."),
  message: z.string().trim().min(10, "Escreva ao menos 10 caracteres."),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm({ to }: { to: string }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    window.location.href = buildContactMailto(to, parsed.data);

    import("sonner").then(({ toast }) => {
      toast.success("Abrindo seu cliente de email…");
    });
  }

  return (
    <form className="grid gap-4" noValidate onSubmit={onSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Nome</Label>
        <Input
          autoComplete="name"
          id="contact-name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          value={values.name}
        />
        {errors.name ? (
          <p className="text-destructive text-xs">{errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          autoComplete="email"
          id="contact-email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          type="email"
          value={values.email}
        />
        {errors.email ? (
          <p className="text-destructive text-xs">{errors.email}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Mensagem</Label>
        <Textarea
          id="contact-message"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={4}
          value={values.message}
        />
        {errors.message ? (
          <p className="text-destructive text-xs">{errors.message}</p>
        ) : null}
      </div>

      <Button className="justify-self-start" type="submit">
        Enviar email
      </Button>
    </form>
  );
}
