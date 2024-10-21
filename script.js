//your JS code here. If required.
// const inputs=document.querySelectorAll("input")
// const submitbtn=document.querySelector("#btn")
// inputs.forEach((input)=>{
	
// 	btn.addEventListener("click",(e)=>{
// 		e.preventDefault();
// 		if(input.value==""){
// 		alert("inputs cannot be empty.")
// 	}
// 	})
	
// })

// Select the form
const form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent form from submitting normally
  e.preventDefault();

  // Get input values
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;

  // Check if fields are not empty
  if(name === "" || age === "") {
    alert("Inputs cannot be empty.");
    return;
  }

  // Create a new Promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise
  promise
    .then(message => alert(message))
    .catch(message => alert(message));
});