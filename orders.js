window.onload = function () {
    console.log('i am here')
    axios.get('http://localhost:3000/orders')
        .then(res => {
            DisplayingOrderRecord(res.data);
            console.log(res.data)
        })
        .catch(err => console.log(err));
}

function DisplayingOrderRecord(MyOrderings) {
    const main = document.getElementById('MYorders');
    for (var i = 0; i < MyOrderings.length; i++) {
        const mainchild1 = document.createElement('div');
        mainchild1.classList.add('ordertop');
        mainchild1.innerHTML = `<hr><h2>Orders ID: ${MyOrderings[i].id} </h2>`
        // main.appendChild(mainchild1);
        // console.log(main)
        for (var j = 0; j < MyOrderings[i].products.length; j++) {
            mainchild1.innerHTML = mainchild1.innerHTML + ` <div class="orderProducts">
            <img src="${MyOrderings[i].products[j].imageUrl}"
            alt="">
        <h3>${MyOrderings[i].products[j].title}</h3>
        <h3>$${MyOrderings[i].products[j].price}</h3>
        </div>`
    }
    // console.log('working',[i]);
    console.log(i)
        main.appendChild(mainchild1);
    }
}

// res.data[9].id  (order id)
// res.data[9].products[0].id  (prduct detail)
