import { z } from "zod";

const Schema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter pelo menos 3 letras"),
    email: z
      .string()
      .min(8, 'O campo deve ter 8 caracteres')
      .email(),
    date: z.string(),
    phone: z.string()
      .min(12, 'O campo deve ter pelo menos 8 caracteres')
      .transform((value) => value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")),
      // .regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Telefone precisa ter o formato (xx) xxxxx-xxxx'),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
// 98 98178-6487
  type FormData = z.infer<typeof Schema>;

  export type { FormData };
  export { Schema };
  