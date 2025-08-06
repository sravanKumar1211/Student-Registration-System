
// Handle "Back to Home" button click → redirect to index.html
let homeBtn = document.getElementById("homebtn");
homeBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Handle "Student Data" button click → redirect to studentData.html
let studentBtn = document.getElementById("studentbtn");
studentBtn.addEventListener("click", function () {
  window.location.href = "studentData.html";
});


// Flags for editing functionality
let isEditMode = false; // Track if editing is in progress
let currentEditId = null; // Store the ID of the student being edited

// Make the student table container scrollable with border styling using Tailwind
const wrapper = document.getElementById("studentTableWrapper");
wrapper.classList.add("h-40", "overflow-y-scroll", "border", "border-orange-500");

// Function to render all students stored in localStorage to the table
function renderStudentTable() {
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = '';
  const students = JSON.parse(localStorage.getItem("students")) || [];

  // Loop through each student and create table rows
  students.forEach(student => {
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
      <td class="p-2">
        <button onclick="editStudent('${student.id}')" class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Edit</button>
      </td>
    `;
    tableBody.appendChild(row);// Add row to the table
  });
}


// Function to validate form inputs before saving
function validateForm(student) {
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Basic email regex
  const contactPattern = /^[6-9]\d{9}$/; // Valid 10-digit Indian mobile numbers starting from 6-9


  // Check for empty fields
  if (!student.name || !student.email || !student.contact || !student.id || !student.address) {
    alert("All fields are required.");
    return false;
  }

  // Check for email validity
  if (!emailPattern.test(student.email)) {
    alert("Invalid email format.");
    return false;
  }

  // Check for contact number format
  if (!contactPattern.test(student.contact)) {
    alert("Invalid contact number. Must be 10 digits starting with 6-9.");
    return false;
  }

  return true;// All validations passed
}


// Automatically render the student table when page loads
window.onload = function () {
  renderStudentTable();
};
// Handle form submission when "Submit" button is clicked
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.getElementById('registrationForm');
  // Gather student data from form fields
  const student = {
    name: document.getElementById('name').value.trim(),
    address: document.getElementById('address').value.trim(),
    id: document.getElementById('studentId').value.trim(),
    contact: document.getElementById('contact').value.trim(),
    email: document.getElementById('email').value.trim()
  };

  // Validate input fields
  if (!validateForm(student)) {
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];

  if (isEditMode) {
    // If editing, find the student by ID and update values
    const index = students.findIndex(s => s.id === currentEditId);
    if (index !== -1) {
      students[index] = student;
    }
    isEditMode = false;
    currentEditId = null;
    document.getElementById('studentId').disabled = false;
  } else {
    // If not editing, check for duplicate student ID
    const exists = students.some(s => s.id === student.id);
    if (exists) {
      alert("Student ID already exists. Please use a unique ID.");
      return;
    }
    // Add new student
    students.push(student);
  }

  // Save updated student list to localStorage
  localStorage.setItem("students", JSON.stringify(students));

  // Reset form and re-render table
  form.reset();
  renderStudentTable();
});


// Function to delete a student
function deleteStudent(button, idToDelete) {
  // Remove the row from the DOM
  button.closest('tr').remove();

  // Remove the student from localStorage
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.filter(student => student.id !== idToDelete);
  localStorage.setItem("students", JSON.stringify(students));
}
// Function to edit a student (populate form with existing data)
function editStudent(id) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students.find(s => s.id === id);
  if (!student) return;
  // Populate form fields with student data
  document.getElementById('name').value = student.name;
  document.getElementById('address').value = student.address;
  document.getElementById('studentId').value = student.id;
  document.getElementById('contact').value = student.contact;
  document.getElementById('email').value = student.email;

  isEditMode = true;
  currentEditId = id;
  // Prevent editing student ID during update
  document.getElementById('studentId').disabled = true;
}
