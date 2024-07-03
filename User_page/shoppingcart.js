document.addEventListener('DOMContentLoaded', function() {
    const decrementBtns = document.querySelectorAll('.btn_de');
    const incrementBtns = document.querySelectorAll('.btn_in');
    const quantityInputs = document.querySelectorAll('.quantity');

    // Event listeners for increment and decrement buttons
    decrementBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            updateQuantity(this, -1);
        });
    });

    incrementBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            updateQuantity(this, 1);
        });
    });

    const removeButtons = document.querySelectorAll('.remove-product');
    removeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            removeItem(this);
        });
    });

    // Update quantity function
    function updateQuantity(btn, change) {
        const quantitySpan = btn.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantitySpan.textContent);
        quantity += change;
        if (quantity >= 0) {
            quantitySpan.textContent = quantity;
            recalculateCart();
        }
    }

    // Remove item from cart function
    function removeItem(btn) {
        const productRow = btn.closest('tr');
        productRow.remove();
        recalculateCart();
    }

    // Recalculate cart function
    function recalculateCart() {
        let subtotal = 0;
        const productPrices = document.querySelectorAll('.product-price');
        const quantityInputs = document.querySelectorAll('.quantity');

        productPrices.forEach(function(price, index) {
            const quantity = parseInt(quantityInputs[index].textContent);
            subtotal += parseFloat(price.textContent.replace('RM ', '')) * quantity;
        });

        const shippingRate = 15.00;
        const shipping = subtotal > 0 ? shippingRate : 0;
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('total_price').textContent = total.toFixed(2);
        document.getElementById('total').textContent = total.toFixed(2);
    }
});
