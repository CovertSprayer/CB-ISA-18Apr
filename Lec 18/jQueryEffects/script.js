
// $('.div').on('click', function(){
//     console.log('clicked');
//     $(this).hide();
// })

$('p').on('click', function(e){
    console.log(e.target);
    // $(e.target).siblings().show();
    $(e.target).siblings().slideToggle();
})

