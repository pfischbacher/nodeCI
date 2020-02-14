// Temporary file to create a new blog post

() => {
  return fetch('api/blogs', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
  });
}
