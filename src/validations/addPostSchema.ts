import { z } from "zod";

const addPostSchema = z.object({
  title: z.string().min(1, { message: "Required!" }).max(50, { message: "Title is too long!" }),
  description: z.string().min(10, { message: "Too short!" })
}).refine((input) => !/\d/.test(input.description), { message: "Description must not contain numbers", path: ["description"] });

type addPostTypeSchema = z.infer<typeof addPostSchema>

export { addPostSchema, type addPostTypeSchema };