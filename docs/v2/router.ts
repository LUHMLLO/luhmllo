//src/router.ts
export default new Router()
  .get("/", (ctx) => ctx.render("index.html"))
  .get("/search", searchPostsHandler)
  .get("/posts", getPostHandler)
  .get("/posts/form/:id?", postFormHandler)

  .post("/posts", createPostHandler)
  .delete("/posts/:id", deletePostHandler)

  .get("/main.css", cssHandler)
  .get("/hero.png", imgHandler);

  async function createPostHandler(ctx: Context) {
    const body = await ctx.request.body().value;
    const title = body.get("title");
    const content = body.get("content");
  
    await createPost({title, content});
  
    ctx.render("posts.html", {
      posts: await getPosts()
     });
  }
  

async function deletePostHandler(ctx: Context) {
  const { id } = ctx.params;
  await deletePost(id);
  ctx.render("posts.html", {
    posts: await getPosts(),
  });
}

async function searchPostsHandler(ctx: Context) {
  const key = ctx.request.url.searchParams.get("key");
  ctx.render("posts.html", {
    posts: await searchPosts(key ?? "")
  })
}
