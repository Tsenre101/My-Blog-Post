const postsContainer = document.getElementById('postsContainer');

document.getElementById('addPostButton').addEventListener('click', addPost);

postsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    deletePost(event.target);
  } else if (event.target.classList.contains('edit')) {
    editPost(event.target);
  }
});


function addPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Please enter both title and content.");
    return;
  }

  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.innerHTML = `<h3>${title}</h3><p>${content}</p>
                       <button class="edit">Edit</button>
                       <button class="delete">Delete</button>`;
  postsContainer.appendChild(newPost);

  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
}

function deletePost(button) {
  const post = button.parentNode;
  post.remove();
}

function editPost(button) {
  const post = button.parentNode;
  const titleElement = post.querySelector('h3');
  const contentElement = post.querySelector('p');

  const newTitle = prompt("Edit Title:", titleElement.textContent);
  const newContent = prompt("Edit Content:", contentElement.textContent);

  if (newTitle !== null && newContent !== null) {
    titleElement.textContent = newTitle;
    contentElement.textContent = newContent;
  }
}
