const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error-style');
    } else {
        if(p.textContent.includes('success')) {
            p.classList.add('success-style')
        }
    }
})