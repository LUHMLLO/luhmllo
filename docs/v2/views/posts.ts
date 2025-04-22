<!-- src /views/posts.html -->

<ul class="posts">
  <% it.posts.forEach(post => { %>
  <li>
    <header>
      <h2><%= post.title %></h2>
      <nav>
        <button hx-get="/posts/form/<%= post.id %>"></button>
        <button
          hx-delete="/posts/<%= post.id %>"
          hx-confirm="Are you sure?"
        ></button>
      </nav>
    </header>
    <p><%= post.content %></p>
  </li>
  <% }) %>
</ul>