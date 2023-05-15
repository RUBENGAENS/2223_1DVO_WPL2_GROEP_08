let carts = document.querySelectorAll('.btn-cart');

let products = [
    {
        name: 'Ori romper',
        tag: 'ori romper',
        price: 10,
        inCart: 0
    },
    {
        name: 'Ori speen en fles',
        tag: 'ori speen en fels',
        price: 10,
        inCart: 0
    },
    {
        name: 'Ori bavet',
        tag: 'ori bavet',
        price: 10,
        inCart: 0
    },
    {
        name: 'steunkaart Feestvarken',
        tag: 'steunkaart Feestvarken',
        price: 5,
        inCart: 0
    },
    {
        name: 'Steunkaart Baby-Nest',
        tag: 'Steunkaart Baby-Nest',
        price: 5,
        inCart: 0
    },
    {
        name: 'Steunkaart De Kraamvogel',
        tag: 'Steunkaart De Kraamvogel',
        price: 5,
        inCart: 0
    },
    {
        name: 'Steunkaart NASCI vzw',
        tag: 'Steunkaart NASCI vzw',
        price: 5,
        inCart: 0
    },
    {
        name: 'Steunkaart Stichting Pelicano',
        tag: 'Steunkaart Stichting Pelicano',
        price: 5,
        inCart: 0
    },
    {
        name: 'Stichting CIG Nestel',
        tag: 'Stichting CIG Nestel',
        price: 5,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadcartNumbers() {
    let productNumers = localStorage.getItem('cartNumbers');

    if (productNumers) {
        document.querySelector('.span-cart').textContent = productNumers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.span-cart').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.span-cart').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsinCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products-container");

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product-titel">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    <img alt="foto product" src="./assets/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>
            <div class="prijs">$${item.price},00</div>
            <div class="aantal">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                <span>${item.inCart}</span>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div class="totaal">
                $${item.inCart + item.price},00
            </div>
                `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Totaal winkelmandje
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4>
            </div>
        `;
    }
}

onLoadcartNumbers();
displayCart();