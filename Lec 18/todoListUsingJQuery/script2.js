

$('.btn').on('click', function(){
    const newItem = $('<div>');
    newItem.attr('class', 'item');

    let str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <li class="text">${$('.inp').val()}</li>
                </div>

                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>`

    newItem.html(str);

    $('inp').value = '';
    $('.task-list').append(newItem);
})


$('.task-list').on('click', function(e){
    const element = $(e.target).attr('class');
    // console.log(element);
    if(element === 'bin'){
        $(e.target).parent().parent().remove();
    }

    else if(element === 'up-arrow'){
        $(e.target).parent().parent().prev().before($(e.target).parent().parent());
    }

    else if(element === 'down-arrow'){
        // $(e.target).parent().parent().next().after($(e.target).parent().parent());

        const currItem = $(e.target).parent().parent();
        const nextItem = currItem.next();

        nextItem.after(currItem);

    }

    else if(element === 'checkbox'){
        $(e.target).next().toggleClass('checked');
    }

})

