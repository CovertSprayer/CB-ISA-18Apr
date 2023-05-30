const div = document.querySelector('.container');
const para = document.querySelector('.para');

para.addEventListener('click', (e)=>{
    console.log("Event Started");
    setTimeout(() => {
        console.log("Color changed!")
        e.target.style.color = 'red';
    }, 3000);
})