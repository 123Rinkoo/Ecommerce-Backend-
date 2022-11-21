window.onload = function () {
    event.preventDefault();
    axios.get('http://localhost:3000/products')
        .then(data => showingOnScreen(data.data))
        .catch(err => connsole.log(err));
}

function showingOnScreen(YourProducts) {
    for (let i = 0; i < YourProducts.length; i++) {
        const main = document.getElementById('Product-content');
        const mainChild = `<div id="plant1">
        <h3>${YourProducts[i].title}</h3>
        <div class="image-container">
            <img class="prod-images"
                src="${YourProducts[i].imageUrl}"
                alt="">
        </div>
        <div class="prod-details">
            <span>$${YourProducts[i].price}</span>
        </div>
        <button class="shop-item-button" type="button" onclick="addToCart(${YourProducts[i].id})">ADD TO CART</button>
    </div>`
        main.innerHTML = main.innerHTML + mainChild;
    }

}

function addToCart(productId) {
    // const button = event.target;
    // const shopItem = button.parentElement;
    // const price = shopItem.getElementsByClassName('prod-details')[0].innerText;
    // const image = shopItem.getElementsByClassName('prod-images')[0].src;
    // const title = shopItem.getElementsByTagName("h3")[0].innerText;
    // addingToCard(price, image, title);
    axios.post('http://localhost:3000/cart', { productId: productId })
        .then((response) => {
            if (response.status === 200) {
                notifyUsers(response.data.message);
            }
            else {
                throw new Error();
            }
        })
        .catch(err => console.log(err));
}

function notifyUsers(message) {
    // ........this is for notification.......
    const container = document.getElementById('plants');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2500);


}

// function addingToCard(p, i, t) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartRowContents =  `<div class="cart-row" id="in-cart-album1">
//     <span class="cart-item cart-column">
//         <img class="cart-img"
//             src="${i}"
//             alt="">
//         <span>${t}</span>
//     </span>
//     <span class="cart-price cart-column">${p}</span>
//     <span class="cart-quantity cart-column">
//         <input type="text" value="1">
//         <button>REMOVE</button>
//     </span>
// </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow);
// }

function ShowingCart(){
    const id = document.getElementById('cart');
    id.style = "display: block";
    console.log('its working');
    axios.get('http://localhost:3000/cart')
        .then((CartProducts) => { 
            addingToCard(CartProducts.data) })
        .catch((err) => { console.log(err) });
}

function addingToCard(CartData) {
    for (let i = 0; i < CartData.length; i++) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row');
        var cartItems = document.getElementsByClassName('cart-items')[0];
        var cartRowContents = `<div class="cart-row" id="in-cart-album1">
    <span class="cart-item cart-column">
        <img class="cart-img"
            src="${CartData[i].imageUrl}"
            alt="">
        <span>${CartData[i].title}</span>
    </span>
    <span class="cart-price cart-column">${CartData[i].price}</span>
    <span class="cart-quantity cart-column">
        <input type="text" value="1">
        <button>REMOVE</button>
    </span>
</div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow);
    }

}

// function ShowingCart() {
    // const id = document.getElementById('cart');
    // id.style = "display: block";
// }
function CartCancel() {
    const id1 = document.getElementById('cart');
    id1.style = "display: none";
}