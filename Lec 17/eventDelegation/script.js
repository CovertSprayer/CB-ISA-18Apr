const childs = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');

// for(let child of childs){
//     child.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// }


parent.addEventListener('click', (e)=>{
    console.log(e.target.innerText);
})