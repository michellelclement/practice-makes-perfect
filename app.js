const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute('href', 'https//www.faceook.com');
link.innerText = "Facebook baby";

const errorMsg = document.querySelector('.new-error');
console.log(errorMsg.getAttribute('class'));
errorMsg.setAttribute('class', 'new-error-message');