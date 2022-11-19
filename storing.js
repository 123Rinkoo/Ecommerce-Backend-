function addToCart(event){
    const button=event.target;
    const shopItem=button.parentElement;

    const price=shopItem.getElementsByClassName('prod-details')[0].innerText;

    const image=shopItem.getElementsByClassName('prod-images')[0].src;

    const title=shopItem.getElementsByTagName("h3")[0].innerText;

    addingToCard(price, image, title);
}

function addingToCard(p,i,t){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = `
    <div class="cart-row" id="in-cart-album1">
    <span class="cart-item cart-column">
        <img class="cart-img"
            src="${i}"
            alt="">
        <span>${t}</span>
    </span>
    <span class="cart-price cart-column">${p}</span>
    <span class="cart-quantity cart-column">
        <input type="text" value="1">
        <button>REMOVE</button>
    </span>
</div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow);
// ...............
    const container = document.getElementById('plants');
    const notify=document.createElement('div');
    notify.classList.add('notification');
    const notification = document.createElement('div');
    notify.appendChild(notification);
    console.log(notify);
    // notification.classList.add('notification');
    notification.innerHTML = `<h4>Your Product : <span>${t}</span> is added to the cart<h4>`;
    container.appendChild(notify);
    setTimeout(()=>{
        notify.remove();
    },2500);
    // .............
//     const cartItem=document.getElementsByClassName('cart-items');
//     cartItem.innerHtml=`<div class="cart-row" id="in-cart-album1">
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

}

function ShowingCart(){
    const id= document.getElementById('cart');
    id.style="display: block";
}
function CartCancel(){
    const id1= document.getElementById('cart');
    id1.style="display: none";
}