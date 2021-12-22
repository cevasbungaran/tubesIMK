if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('bi bi-trash')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
/**        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.remove()
            updateCartTotal()
        }) */}
    var quantityInputs = document.getElementsByClassName('jumlah')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('addCart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('booklist')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('bookTitle')[0].innerText
    var price = shopItem.getElementsByClassName('bookPrice')[0].innerText
    var image = shopItem.getElementsByClassName('img')[0].src
    console.log(title)
    addItemToCart(title, price, image)
}

function addItemToCart(title, price, image) {
    var cartRow = doucment.createElement('div')
    //cartRow.innerText = title
    cartRow.classList.add('book')
    var cartItems = document.getElementsByClassName('booklist')[0]
    var cartRowContents = `
    <div class="bookimg1">
        <img src="${image}" style="width: 200px; position: absolute;">
    </div>
    <div class="desc">
        <p class="${title}"><b>Dunia Sophie</b></p>
        <p class="${price}">Rp 50.000</p>
        <div class="btn-group horizontal">
            <button type="button" class="btn btn-default"><span class="bi bi-trash"></span></button>
            <input class="jumlah" type="number" value="1" style="width: 50px;">
        </div>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}

function updateCartRest() {
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('booklist')[0]
    var cartRows = cartItemContainer.getElementsByClassName('book')
    var total = 0
    var pajak = 0
    var subtotal = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('harga_buku')[0]
        var quantityElement = cartRow.getElementsByClassName('jumlah')[0]
        var price = parseFloat
            (priceElement.innerText.replace('Rp ', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        pajak = total * 10 / 100
        subtotal = total + pajak
    }
    total = Math.round(total * 1000)
    pajak = Math.round(pajak * 1000)
    subtotal = Math.round(subtotal * 1000)
    document.getElementsByClassName('total_bersih')[0].innerText = 'Rp ' + total
    document.getElementsByClassName('total_pajak')[0].innerText = 'Rp ' + pajak
    document.getElementsByClassName('subtotal')[0].innerText = 'Rp ' + subtotal
}
