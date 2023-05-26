// ------------------ mouse events
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = "teal";
})

h1.addEventListener('mouseleave', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = "";
})

h1.addEventListener('click', (e)=>{
    // e.target.style.padding = '25px';
    e.target.style.display = 'none';
})

// ------------------- keyboard events

const inp = document.querySelector('input');
// inp.addEventListener('keydown', (e)=>{
//     console.log(e.target.value);
// })

// inp.addEventListener('keyup', (e)=>{
//     console.log(e.key);
// })

const usernameInp = document.getElementsByName('username')[0];
const passwordInp = document.getElementsByName('password')[0];
const form = document.querySelector('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(usernameInp.value);
    console.log(passwordInp.value);

    usernameInp.value = "";
    passwordInp.value = "";

})

