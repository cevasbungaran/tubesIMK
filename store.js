if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function updateCartRest(){
var removeCartItemButtons = document.getElementsByClassName('bi-trash')
console.log(removeCartItemButtons)
for (var i=0; i< removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    })
}
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('booklist')[0]
    cartItemContainer.getElementsByClassName('book')
    for(var i = 0; i<cartRows; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('harga_buku')[0]
        var quantityElement = cartRow.getElementsByClassName('jumlah')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price*quantity)
    }
    document.getElementsByClassName('')[0].innerText='$' + total
}