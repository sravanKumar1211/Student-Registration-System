

// Get the "register" button from the HTML using its ID
let registerBtn = document.getElementById("register")
// Add a click event listener to the register button
registerBtn.addEventListener("click", function () {
  // When clicked, redirect the user to the Registration.html page
  window.location.href = "Registration.html";
});


// Get the "databtn" button from the HTML using its ID
let DataBtn = document.getElementById("databtn")
// Add a click event listener to the data button
DataBtn.addEventListener("click", function () {
  // When clicked, redirect the user to the studentData.html page
  window.location.href = "studentData.html";
});