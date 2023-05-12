function newItem(){
    // add new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }
    
    // cross out an item
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });
    
    // add a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete')
    }

    $('#list').sortable();
}
    