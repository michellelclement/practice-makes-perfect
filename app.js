const title = document.querySelector('h1');


//console.log(title.innerText);
title.innerText = "Hi there!";



const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraphs => {
    console.log(paragraphs.innerText);
    paragraphs.innerText = "This is new text!";
});