const btn = document.getElementsByTagName('button')[0];

// btn.onclick = function() {
//     console.log("Clicked!!");
// }

// btn.ondblclick = function(){
//     console.log("Double Clicked Me!!");
// }

// btn.onclick = function(){
//     console.log("hello! How are you?");
// }
console.dir(btn);

btn.addEventListener('click', ()=>{
    console.log("Clicked!!");
})

btn.addEventListener('click', ()=>{
    console.log("hello! How are you?");
})