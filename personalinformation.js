
function handleSubmit(event) {
    event.preventDefault();

    const titleElement = document.querySelector('input[name="title"]:checked');
    const lastNameElement = document.getElementById('lastName');

    const title = titleElement ? titleElement.value : '';
    const lastName = lastNameElement.value;

    if (lastName) {
        const message = `Thank you, ${title} ${lastName}! Please wait for your order.`;
        alert(message);
    } else {
        alert('Please enter your last name.');
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', handleSubmit);

});

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
