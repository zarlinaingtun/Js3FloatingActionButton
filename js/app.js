//UI
const btns=document.querySelector('.btns');
const btnprimary=document.querySelector('#btnprimary');

btnprimary.addEventListener('click',()=>{
    btns.classList.toggle('show');
})