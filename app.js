const errorMsg = document.querySelector(".error-msg");
const people = ["Michelle", "Matt", "Lennon", "Frank"];

people.forEach(person => {
    errorMsg.innerHTML += `<p>${person}</p>`
})