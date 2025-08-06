
// Redirect to homepage when "homebtn" is clicked
let homeBtn = document.getElementById("homebtn");
homeBtn.addEventListener("click", function () {
  window.location.href = "index.html"; // Navigate to homepage
});

// Redirect to registration page when "register" button is clicked
let RegisterBtn = document.getElementById("register");
RegisterBtn.addEventListener("click", function () {
  window.location.href = "Registration.html"; // Navigate to Registration page
});


// Runs when the page is fully loaded
window.onload = function () {
  const tableBody = document.getElementById('studentTableBody'); // Get the table body element
  const students = JSON.parse(localStorage.getItem("students")) || []; // Retrieve student data from localStorage

  // Loop through each student and create a new row in the table

  students.forEach(student => {
    const row = document.createElement('tr');// Create a new table row
    row.innerHTML = `
            <td class="p-2">${student.name}</td>
            <td class="p-2">${student.email}</td>
            <td class="p-2">${student.contact}</td>
            <td class="p-2">${student.id}</td>
            <td class="p-2">${student.address}</td>
            <td class="p-2">
              <button onclick="deleteStudent(this, '${student.id}')" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
        `;
    tableBody.appendChild(row);// Add the row to the table
  });
};


// This submit button refers to registration page.
// I made this because both pages has to  work with same button.
let submitBtn = document.getElementById('submit');

// Retrieve existing students array from localStorage or start with an empty array
const students = JSON.parse(localStorage.getItem("students")) || [];
students.push(student);
// Save the updated array back to localStorage
localStorage.setItem("students", JSON.stringify(students));

// Display in table
const tableBody = document.getElementById('studentTableBody');
const row = document.createElement('tr');
row.innerHTML = `
        <td class="p-2">${student.name}</td>
        <td class="p-2">${student.email}</td>
        <td class="p-2">${student.contact}</td>
        <td class="p-2">${student.id}</td>
        <td class="p-2">${student.address}</td>
        <td class="p-2">
          <button onclick="deleteStudent(this, '${student.id}')" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
        </td>
    `;
tableBody.appendChild(row);// Add row to the DOM

document.getElementById('registrationForm').reset();

// Function to delete a student from both DOM and localStorage
function deleteStudent(button, idToDelete) {
  // Remove row from DOM
  button.closest('tr').remove();

  // Remove from localStorage
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.filter(student => student.id !== idToDelete); // Filter out the deleted student
  localStorage.setItem("students", JSON.stringify(students));// Save the updated list
}
