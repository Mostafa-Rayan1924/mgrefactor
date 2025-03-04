"use client";

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "ادخل الايميل" }).email("ادخل ايميل صحيح"),
  password: z
    .string({ message: "ادخل كلمة المرور" })
    .min(6, { message: " اقل عدد من الرموز هو 6" }),
});
