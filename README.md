# Student-Registration-System
The Student Registration System is a web-based application designed to simplify the process of registering students and managing their basic details. This project allows users to input student information such as name, email, contact number, student ID, and address, and then stores this data locally using the browser’s localStorage. 


 Student Registration System – Project Document
Project Description:
The Student Registration System is a web-based application designed to simplify the process of registering students and managing their basic details. This project allows users to input student information such as name, email, contact number, student ID, and address, and then stores this data locally using the browser’s localStorage. Registered students are displayed in a responsive table with an option to delete and edit entries when needed.
NOTE: git-hub link (‘https://github.com/sravanKumar1211/Student-Registration-System’)
Key Features:
•	 Student Registration Form with validation.
•	Data Storage using browser localStorage.
•	 Real-time Table Display of registered students.
•	 Delete Functionality to remove students from the list and local storage.
•	 Edit Functionality to edit students from the list and local storage.
•	Navigation Buttons to switch between pages like Home, Registration, and Student Data.
•	Responsive Design using Tailwind CSS, ensuring accessibility across all devices.
Technologies Used:
•	HTML – For page structure and content.
•	Tailwind CSS – For responsive styling and layout.
•	JavaScript – For form handling, validations, storage, and dynamic DOM manipulation.
•	LocalStorage – To persist user data without a backend.
Pages in the Project:
1.	index.html – Homepage with navigation.
2.	Registration.html – Form to register a student.
3.	studentData.html – Displays all registered student data in a table.
Use Cases:
•	Small coaching centers or schools can use this system to keep track of enrolled students.

________________________________________
 How I Made the Student Registration System Project
________________________________________
 1. Planning the Project
Before starting the code, I planned the basic flow:
•	A form to collect student details.
•	A way to store those details ( localStorage).
•	A display table to show the registered students.
•	Options to delete students.
•	Basic page navigation between Registration and Student Data.
________________________________________
2. Setting Up the HTML Structure
•	I created three HTML pages:
o	index.html – Home page
o	Registration.html – For adding student info
o	studentData.html – To view all registered students
Each page used clean HTML5 structure and included Tailwind CSS via CDN for quick styling.
________________________________________
3. Adding Tailwind CSS for Responsiveness
•	Used Tailwind CSS utility classes to make all elements responsive 
•	Buttons, forms, and tables were styled with Tailwind for consistency and responsiveness across devices.
________________________________________
4. Creating the Registration Form
•	The form included inputs for:
o	Name, Email, Contact, Student ID, Address
•	Assigned unique ids and class names to each input.
•	Added  validation using JavaScript .
________________________________________
5. Writing JavaScript for Functionality
•	On form submission:
o	Collected values using document.getElementById()
o	Created a student object
o	Pushed it to an array of students
o	Stored the array in localStorage using JSON.stringify()
•	Used localStorage.getItem() and JSON.parse() to retrieve and display saved data.
________________________________________
 6. Displaying Students in a Table
•	On studentData.html, I used:
o	window.onload to load all students from localStorage
o	Dynamically created table rows with student data using innerHTML
o	A delete button for each row
________________________________________
7. Delete Functionality
•	Each row had a delete button that:
o	Removed the row from the DOM
o	Filtered out the student from the array
o	Updated localStorage with the new list
________________________________________
🔹 8. Navigation Between Pages
•	Used addEventListener on buttons like "Back to Home" or "Register" to navigate between pages using window.location.href.
________________________________________
🔹 9. Edit Functionality
•	Each row had a edit button that:
o	Edit the row in LocalStorage 
