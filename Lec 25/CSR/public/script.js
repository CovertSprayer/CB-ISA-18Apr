
const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');


function refreshList(){
    list.innerText = '';

    axios.get('/todos')
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .then((data)=>{
            for(let todo of data){
                const newTodo = document.createElement('li');
                newTodo.innerText = todo;
                list.append(newTodo);
            }
        })
}

refreshList();

btn.addEventListener('click', ()=>{
    const todo = inp.value;
    console.log(todo);

    axios.post('/todos', {todo})
        .then((res)=>{
            console.log(res.data);
            refreshList();
        })
})
