
function calculateOverallPrice(cartItems) {
    var overallPrice = 0;
    cartItems.forEach(function(item) {
        if (item.price !== undefined) {
            var price = parseFloat(item.price.replace('$', ''));
            overallPrice += price;
        }
    });
    return overallPrice.toFixed(2);
}

function clearCart() {
    localStorage.removeItem('cartItems');
    location.reload(); // Refresh the page to update the cart
}

function addToCart(item) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    var isItemInCart = cartItems.some(function(cartItem) {
        return (
            cartItem.name === item.name &&
            cartItem.price === item.price
        );
    });


    if (!isItemInCart && item.name !== undefined && item.price !== undefined) {
        cartItems.push(item);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    var cartItemsContainer = document.getElementById('cart-items');
    var overallPriceElement = document.getElementById('overallPrice');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>The basket is empty.</p>';
    } else {
        var itemList = document.createElement('ul');
        var overallPrice = calculateOverallPrice(cartItems);
        cartItems.forEach(function(item) {
            // Check for undefined name and price
            if (item.name !== undefined && item.price !== undefined) {
                var listItem = document.createElement('li');
                listItem.textContent = item.name + ' - ' + item.price;
                itemList.appendChild(listItem);
            }
        });
        cartItemsContainer.appendChild(itemList);
        overallPriceElement.textContent = 'Overall Price: ' + overallPrice + ' tg.';
    }
});


var clearCartButton = document.getElementById('clearCart');
clearCartButton.addEventListener('click', clearCart);


var addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', function(event) {
        var parentContainer = event.target.parentNode;
        var name = parentContainer.querySelector('.text').textContent;
        var price = parentContainer.querySelector('.price').textContent;
        var selectedItem = {
            name: name,
            price: price
        };
        addToCart(selectedItem);
    });
}