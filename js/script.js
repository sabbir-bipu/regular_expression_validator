// Define UI Elements

let input;
let regExp;
let choice;
let check = document.querySelector('#check');


// Define Event Listeners

check.addEventListener('click', validate);

// Define Functions

function validate() {

    choice = prompt("Select the option you want to validate: 1, 2 or 3");

    switch (choice) {
        case "1":
            input = prompt("Enter the Email you want to validate: ");
            regExp = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            if (regExp.test(input)) {
                alert("The Email is Valid.");
            } else {
                alert("Invalid Email Address!!!!");
            }
            break;
        case "2":
            input = prompt("Enter the Phone Number you want to validate: ");
            regExp = /^(\+)?(88)?01[0-9]{9}$/;
            if (regExp.test(input)) {
                alert("The Phone Number is Valid.");
            } else {
                alert("Invalid Phone Number!!!!");
            }
            break;
        case "3":
            input = prompt("Enter the Post Code you want to validate: ");
            regExp = /^[0-9]{4}$/;
            if (regExp.test(input)) {
                alert("The Post Code is Valid.");
            } else {
                alert("Invalid Post Code!!!!");
            }
            break;
        default:
            alert("No option is selected, select between 1, 2 or 3");
            break;
    }
}