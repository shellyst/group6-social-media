
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



// ------SIGN UP STUFF SHOULD BE MOVED TO ITS OWN JS FILE------



// async function signupFormHandler(event) {
//     event.preventDefault();

//     const username = document.querySelector('#fullName').value.trim();
//     const email = document.querySelector('#email').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     if (username && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'post',
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });

//         // check the response status
//         if (response.ok) {
//             console.log('success');
//             document.location.replace('/dashboard');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);




// frontSide.addEventListener("click", () => {
//     frontSide.style.display = "none";
//     rightSide.style.display = "block";
//     square.style.transform = "rotate3d(0, 0, 0, 90deg)";
//     document.title = "Login page";
// });

// rightSide.addEventListener("click", () => {
//     rightSide.style.display = "none";
//     frontSide.style.display = "block";
//     square.style.transform = "rotate3d(0, -1, 0, 90deg)";
//     document.title = "Sign up page";
// });