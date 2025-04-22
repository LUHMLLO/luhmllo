//src/services.ts

const kv = await Deno.openKv();

type Post = {
  id: string;
  title: string;
  content: string;
};

export async function createPost(post: Partial<Post>) {
  const id = crypto.randomUUID();
  await kv.set(["posts", id], { ...post, id });
}

export async function getPost(id: string) {
  return (await kv.get(["posts", id])).value;
}

export async function updatePost(data: Partial<Post>) {
  const post = await getPost(data.id!) as Post;
  post.content = data.content ?? "";
  kv.set(["posts", data.id!], { ...post });
}

export async function deletePost(id: string) {
  await kv.delete(["posts", id]);
}