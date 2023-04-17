let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let birthYear = prompt("Please enter your birth year:");
let age = 2023 - birthYear;

let result = confirm("Do you agree to share your personal information to this site?");
if (result === true) {
    document.getElementById("fname").innerHTML = "Hello, " + firstName + " " + lastName + "! You are approximately " + age + " years old.";
} else {
    document.getElementById("fname").innerHTML = "User does not wish to share his/her information.";
}
