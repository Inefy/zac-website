

const blogContainer = document.getElementById("blogContainer");

function createBlogPost(title, content, author, date) {
  const blogPost = document.createElement("div");
  blogPost.classList.add("blog-post");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("title");
  titleElement.textContent = title;
  blogPost.appendChild(titleElement);

  const contentElement = document.createElement("p");
  contentElement.classList.add("content");
  contentElement.textContent = content;
  blogPost.appendChild(contentElement);

  const authorElement = document.createElement("p");
  authorElement.classList.add("author");
  authorElement.textContent = "Author: " + author;
  blogPost.appendChild(authorElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("date");
  dateElement.textContent = "Date: " + date;
  blogPost.appendChild(dateElement);

  return blogPost;
}

fetch("/static/blog-posts.json")
  .then(response => response.json())
  .then(data => {
    for (const post of data) {
      const blogPost = createBlogPost(post.title, post.content, post.author, post.date);
      blogContainer.appendChild(blogPost);
    }
  });
