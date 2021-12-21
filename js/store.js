if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('bi bi-trash')
    console.log(removeCartItemButtons)
    for (var i=0; i< removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
/**        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.remove()
            updateCartTotal()
        }) */}
    var quantityInputs = document.getElementsByClassName('jumlah')
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input = quantityInputs('change', quantityChanged)
    }

/*     var addToCartButtons = document.getElementsByClassName('submit')
    for (var i=0; i<addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } */

    document.getElementsByClassName('w3-button')[0].addEventListener('click', purchaseClicked)
} 

function purchaseClicked(){
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('booklist')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value)||input.value<=0){
        input.value = 1
    }
    updateCartTotal()
}

/* function addToCartClicked(event){
    var button = eve
} */

function updateCartRest(){
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('booklist')[0]
    var cartRows = cartItemContainer.getElementsByClassName('book')
    var total = 0
    var pajak = 0
    var subtotal = 0
    var jumlah_buku = 0
    for(var i = 0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('harga_buku')[0]
        var quantityElement = cartRow.getElementsByClassName('jumlah')[0]
        var price = parseFloat
        (priceElement.innerText.replace('Rp ', ''))
        var quantity = quantityElement.value
        total = total + (price*quantity)
        pajak = total * 10 / 100
        subtotal = total + pajak
        jumlah_buku = jumlah_buku + quantity
    }
    document.getElementsByClassName('total_buku')[0].innerText = jumlah_buku + ' buku'
    document.getElementsByClassName('total_bersih')[0].innerText = 'Rp ' + total
    document.getElementsByClassName('total_pajak')[0].innerText = 'Rp ' + pajak
    document.getElementsByClassName('subtotal_final')[0].innerText = 'Rp ' + subtotal
}
