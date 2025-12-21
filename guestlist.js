var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

guest = prompt("What is your name? ");

guest = guest.charAt(0).toUpperCase() + guest.slice(1,guest.length).toLowerCase()

if (guestList.includes(guest)) {
    alert("Welcome, " + guest + "!")
} else {
    alert("Your name is not on the list")
}

console.log(guestCheck)