async function newFormHandler(event) {
    event.preventDefault();
  
    const post_content = document.querySelector('input[name="post-content"]').value;
    const post_image = document.querySelector('input[name="post-image"]').value;
  
    const response = await fetch(`/dashboard/create/publish`, {
      method: 'POST',
      body: JSON.stringify({
        featured_image: post_image,
        content_text: post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);