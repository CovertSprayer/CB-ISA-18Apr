

async function likeButton(productId, btn) {
    try {
        const response = await axios({
            method: 'post',
            url: `/products/${productId}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });

        if(btn.classList.contains('far')){
            btn.classList.remove('far');
            btn.classList.add('fas');
        }
        else{
            btn.classList.remove('fas');
            btn.classList.add('far');
        }
    
    } 
    catch (e) {
        window.location.replace('/login');
    }
}

window.document.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.classList.contains('product-like-button')) {
        const productId = btn.getAttribute('product-id');
        likeButton(productId, btn);
    }
})

