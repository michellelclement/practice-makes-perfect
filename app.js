const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute('href', 'https//www.faceook.com');
link.innerText = "Facebook baby";

const errorMsg = document.querySelector('.new-error');


// Set attribute to an element that doesnt exist
errorMsg.setAttribute('style', 'color: purple');

//Shows CSS styling
console.log(errorMsg.style);
console.log(errorMsg.style.color);


errorMsg.style.margin = '150px';
console.log(errorMsg.style.margin);

errorMsg.style.fontSize = "60px";
//Empty string reverts back to original setting"
errorMsg.style.fontSize = "";