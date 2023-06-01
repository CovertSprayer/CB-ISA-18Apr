const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener('click', (e)=>{
    console.log('Grand-Parent Div Triggered');
},true) // default capture value is false

parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Parent Div Triggered');
},true)

child.addEventListener('click', (e)=>{
    // e.stopPropagation();
    console.log('Child Div Triggered');
},true)
