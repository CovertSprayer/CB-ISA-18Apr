const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');

const xhr = new XMLHttpRequest();

// request ke success hone par ye chalega
xhr.onload = function(res){
    console.log(res);
    const dataInString = res.currentTarget.response;
    const data = JSON.parse(dataInString);

    const factsData = data.map((obj)=>{
        return obj.text;
    })
    addDataToList(factsData);

}
// request ke fail hone pr ye chalege
xhr.onerror = function(err){
    console.log(err);
}

// request kha bhejni hai, define karo
xhr.open('GET', URL);


function addDataToList(factsData){
    catFacts.innerText = '';
    factsData.forEach( text =>{
        const li = document.createElement('li');
        li.innerText = text;
        catFacts.append(li);
    })
}

btn.addEventListener('click', ()=>{
    xhr.open('GET', URL);
    
    // request ko send karna
    xhr.send();
})