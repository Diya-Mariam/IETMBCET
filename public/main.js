navbar = document.querySelector(".navbar").querySelectorAll('a');
//console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click" , function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#message');
const msg = document.querySelector('.msg');
const text = document.querySelector('.send');

myform.addEventListener('submit', onSend);

function onSend(e){
    e.preventDefault();

    if(nameInput.value ===''|| emailInput.value ==='' || msgInput.value ==='') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 4000);

    } else{
        text.innerHTML = 'Message sent';
        setTimeout(() => text.remove(), 3000);

        // Clear fields
        nameInput.value = '';
        emailInput.value ='';
        msgInput.value = '';
    }

}