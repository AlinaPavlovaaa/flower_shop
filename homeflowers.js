document.addEventListener('DOMContentLoaded', function() {

    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');


    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var imageContainer = button.parentNode;
            var image = imageContainer.querySelector('.image img');
            var text = imageContainer.querySelector('.text');
            var price = imageContainer.querySelector('.price');


            var selectedItem = {
                imageSrc: image.src,
                text: text.textContent,
                price: price.textContent
            };


            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


            cartItems.push(selectedItem);


            localStorage.setItem('cartItems', JSON.stringify(cartItems));


            alert('The item in a shopping basket!');


            updateCartItemCount();
        });
    });


    function updateCartItemCount() {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        var cartItemCount = cartItems.length;


        var cartItemCountElement = document.getElementById('cart-item-count');
        if (cartItemCountElement) {
            cartItemCountElement.textContent = cartItemCount;
        }
    }


    updateCartItemCount();
});
