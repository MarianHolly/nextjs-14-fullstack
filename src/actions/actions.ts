"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

// server action (not server component)

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  // update database
  await prisma.post.create({
    data: { title, body },
  });

  // revalidate
  revalidatePath("/posts");
}
