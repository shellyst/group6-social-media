
// not sure if any of this is actually being used, we should double check that 
const square = document.getElementById("#square");
const frontSide = document.getElementById("#frontSide");
const rightSide = document.getElementById("#rightSide");


async function loginFormHandler(event) {
    console.log("loginFormHandler is working");
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  console.log(email, password)
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("hello", response.ok)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } 
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);



