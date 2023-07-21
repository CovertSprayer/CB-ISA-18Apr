
const url = 'https://dummyjson.com/products';

const btn = document.querySelector('#btn');

// btn.addEventListener('click', ()=>{
//     fetch(url)
//         .then((response)=>{
//             console.log(response)
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data.products);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

btn.addEventListener('click', async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
})

