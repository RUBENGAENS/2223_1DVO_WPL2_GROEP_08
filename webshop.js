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

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadcartNumbers(){
    let productNumers = localStorage.getItem('cartnumbers');

    if (productNumers) {
        document.querySelector('.span-cart').textContent = productNumers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.span-cart').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.span-cart').textContent = 1;
    }
}

onLoadcartNumbers();