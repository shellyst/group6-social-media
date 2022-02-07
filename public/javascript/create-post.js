async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-content"]').value;
  const post_content = document.querySelector(
    'input[name="post-content"]'
  ).value;

  const response = await fetch(`/dashboard/create/publish`, {
    method: "POST",
    body: JSON.stringify({
      featured_image,
      content_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
