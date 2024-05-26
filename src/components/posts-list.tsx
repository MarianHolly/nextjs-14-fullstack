//TODO: Fetching Data
// Server Components (GET requests)

import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany()

  return (
    <ul>
      {posts.map((post) => (
        <li className="mb-3" key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
