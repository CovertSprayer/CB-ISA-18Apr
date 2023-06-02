const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');


btn.addEventListener('click', ()=>{
    catFacts.innerText = '';
    fetch(URL)
        .then((res)=>{
            // console.log(res);
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            data.forEach(obj => {
                // console.log(obj.text);
                const li = document.createElement('li');
                li.innerText = obj.text;
                catFacts.append(li);
            });
        })
        .catch((err)=>{
            console.log(err);
        })
})