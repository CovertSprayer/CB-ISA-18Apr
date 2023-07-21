console.log('connected')

const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    axios.get('https://dummyjson.com/products')
        .then((res)=>{
            console.log(res.data.products);
        })
        .catch(err => {
            console.log(err);
        })
})

