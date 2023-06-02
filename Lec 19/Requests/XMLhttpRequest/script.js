const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');

const xhr = new XMLHttpRequest();

// request ke success hone par ye chalega
xhr.onload = function(res){
    console.log(res);
    const data = res.currentTarget.response;
    console.log(JSON.parse(data));
}
// request ke fail hone pr ye chalege
xhr.onerror = function(err){
    console.log(err);
}

// request kha bhejni hai, define karo
xhr.open('GET', URL);

btn.addEventListener('click', ()=>{
    // request ko send karna
    xhr.send();
})