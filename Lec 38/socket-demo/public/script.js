const socket = io();

document.querySelectorAll('.chat-container')[1].style.display = 'none';

const inputBox = document.querySelector('.input-box');
const sendButton = document.querySelector('.send-btn');
const chat = document.querySelector('.chat');

sendButton.addEventListener('click', () => {
    const textMessage = inputBox.value;
    inputBox.value = '';

    socket.emit('send-msg', {msg:textMessage});
});


socket.on('received-msg', (data)=>{
    // console.log(data);
    const div = document.createElement('div');

    if(data.id === socket.id){
        div.classList.add('message', 'sender');
    }
    else{
        div.classList.add('message', 'receiver');
    }

    div.innerHTML = `<strong>${data.username}</strong> - <span>${data.msg}</span>`

    chat.append(div);
});

const loginName = document.querySelector('#login-name');
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', () => {
    const username = loginName.value;
    loginName.value = '';

    if(username === ''){
        return;
    }

    socket.emit('login', {username});
    document.querySelectorAll('.chat-container')[0].style.display = 'none';
    document.querySelectorAll('.chat-container')[1].style.display = 'block';
})
