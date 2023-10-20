"use client";

import * as z from "zod";

export const questionSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(130),
  body: z.string(),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
