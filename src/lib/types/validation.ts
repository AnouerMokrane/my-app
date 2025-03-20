import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(10),
  image: z.string(),
  category: z.string().min(3).max(20),
});
