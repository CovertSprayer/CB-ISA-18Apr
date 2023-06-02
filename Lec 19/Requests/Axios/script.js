const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');


function getData(URL){
    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then((res)=>{
                resolve(res.data);
            })
            .catch((err)=> reject(err));
    })
}

function addDataToList(factsData){
    catFacts.innerText = '';
    factsData.forEach( text =>{
        const li = document.createElement('li');
        li.innerText = text;
        catFacts.append(li);
    })
}

function handler(){
    getData(URL)
        .then((data)=>{
            const factsData = data.map((obj)=>{
                return obj.text;
            })

            console.log(factsData);
            addDataToList(factsData);
        })
        .catch(err => console.log(err));

}

btn.addEventListener('click', handler)
