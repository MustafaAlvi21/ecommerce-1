let cart = [];
let usersData = [];
let wishlist = [];

const setUsersData = () => {
    return localStorage.setItem('usersData', JSON.stringify(usersData));
}

function checkUser() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser !== null) {
        return true
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Login First!',
        })
        return false
    }
}

const getUsersData = () => {
    return JSON.parse(localStorage.getItem('usersData'));
}

const currentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
}

const getCart = () => {
    const user = currentUser();
    const email = user.email;

    return JSON.parse(localStorage.getItem(email + 'Cart'));
}

const setCart = () => {
    const user = currentUser();
    if (user === null) return;
    const email = user.email;


    return localStorage.setItem(email + 'Cart', JSON.stringify(cart));
}

const getWishlist = () => {
    const user = currentUser();
    if (user === null) return;
    const email = user.email;


    return JSON.parse(localStorage.getItem(email + 'Wishlist'));
}
const setWishlist = () => {
    const user = currentUser();
    const email = user.email;

    return localStorage.setItem(email + 'Wishlist', JSON.stringify(wishlist));
}

const addToCart = (param) => {
    let verify = checkUser();
    if (verify === false) return
    cart = getCart();

    if (cart === null) {
        cart = []
    }

    let quantity = document.getElementById('sst');
    let item = false;

    cart.forEach(element => {
        if (parseInt(element.id) === parseInt(param)) {
            element.qty += parseInt(quantity.value);
            item = true;
            setCart();
        }
    });

    if (item === false) {
        item = {
            id: param,
            qty: parseInt(quantity.value)
        }

        cart.push(item);
        setCart();
    }

    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Product Added In Your Cart',
        showConfirmButton: false,
        timer: 1500
    })



}

const addWishlist = (param) => {

    const addToWish = document.getElementById(`addToWish${param}`);
    addToWish.classList.toggle('active-wish');

    wishlist = getWishlist();

    if (wishlist === null) {
        wishlist = []
    }

    let item = false;

    wishlist.forEach(element => {
        if (parseInt(element.id) === parseInt(param)) {
            item = true;
            setWishlist();
        }
    });

    if (item === false) {
        item = {
            id: param,
        }

        wishlist.push(item);
        setWishlist();
    }

    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Product Added In Your Wishlist',
        showConfirmButton: false,
        timer: 1500
    })
}

const removeWishlist = (param) => {
    const addToWish = document.getElementById(`addToWish${param}`);
    addToWish.classList.toggle('active-wish');

    wishlist = getWishlist();
    wishlist.forEach((element, index) => {
        if (element.id === param) {
            wishlist.splice(index, 1);
            setWishlist();
        }
    });
    Swal.fire({
        // position: 'top-end',
        icon: 'error',
        title: 'Product Removed From Your Wishlist',
        showConfirmButton: false,
        timer: 1500
    })
}

const removeWishlistPage = (param) => {



    wishlist = getWishlist();
    wishlist.forEach((element, index) => {
        if (element.id === param) {
            wishlist.splice(index, 1);
            setWishlist();
            wishlistProduct();
        }
    });

    Swal.fire({
        // position: 'top-end',
        icon: 'error',
        title: 'Product Removed from Your Wishlist',
        showConfirmButton: false,
        timer: 1500
    });


}


const checkWishlist = (param) => {
    let verify = checkUser();
    if (verify === false) return;

    wishlist = getWishlist();
    if (wishlist === null) wishlist = [];

    let findItem = wishlist.find(element => {
        return element.id == param
    })

    if (findItem == undefined) {
        addWishlist(param);
    } else {
        removeWishlist(param);
    }

}

const addToCartIcon = (param) => {
    let verify = checkUser();
    if (verify === false) return

    cart = getCart();

    if (cart === null) {
        cart = []
    }

    let item = false;

    cart.forEach(element => {
        if (element.id === param) {
            item = true;
            Swal.fire({
                // position: 'top-end',
                icon: 'warning',
                title: 'Product Already In Your Cart',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });

    if (item === false) {
        item = {

            id: param,
            qty: 1
        }

        cart.push(item);
        setCart();
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Product Added In Your Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }


}

const cartProduct = () => {
    let verify = checkUser();
    if (verify === false) return location.href = 'login.html';
    let cartProductDiv = document.getElementById('cartProductDiv');
    let subtotal = document.getElementById('subtotal');
    let totalPrice = 0;
    cart = getCart();
    cartProductDiv.innerHTML = ``;
    if (cart === null) {
        cart = [];
    }
    cart.forEach(element => {

        cartProductDiv.innerHTML += `
        <tr>
        <td>
            <div class="media">
                <div class="d-flex">
                    <img src="${items[element.id - 1].img[0]}" height="150px" alt="">
                </div>
                <div class="media-body">
                    <p>${items[element.id - 1].name}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>$${items[element.id - 1].price}</h5>
        </td>
        <td>
            <div class="product_count">
            <div style="display:flex; justify-content:center; align-items:center;">
                    <button class="qtyChangeBtns" id=dec-btn${element.id} onclick="decrement(${element.id})">-</button>
                    <input type="number" name="qty" id="sst${element.id}" minlength="1" onchange="qtyChange(${element.id})" maxlength="12" value="${element.qty}" title="Quantity:" class="qty">
                    <button class="qtyChangeBtns" id=inc-btn${element.id} onclick="increment(${element.id})">+</button>
            </div>
            </div>
        </td>
        <td>
            <h5 id="total${element.id}">$${(items[element.id - 1].price * element.qty).toFixed(2)}</h5>
        </td>
        </tr>
        `

        totalPrice += items[element.id - 1].price * element.qty;
    });

    subtotal.innerText = `$${totalPrice.toFixed(2)}`;
}

const decrement = (param) => {
    let qty = document.getElementById(`sst${param}`);
    let changedQty = parseInt(qty.value) - 1

    qty.value = changedQty;

    qtyChange(param)
}

const increment = (param) => {
    let qty = document.getElementById(`sst${param}`);
    let changedQty = parseInt(qty.value) + 1

    qty.value = changedQty;

    qtyChange(param)
}

const qtyChange = (param) => {
    let qty = document.getElementById(`sst${param}`);
    let total = document.getElementById(`total${param}`);
    let subtotal = document.getElementById('subtotal');
    // let cartProductDiv = document.getElementById('cartProductDiv');
    let price = 0;
    let totalPrice = 0
    cart = getCart();
    cart.forEach((element, index) => {
        if (element.id === param) {
            element.qty = qty.value;
            setCart();
            price = items[element.id - 1].price * element.qty;
        }
        if (element.id === param && element.qty == 0) {
            cart.splice(index, 1);
            setCart();
            cartProduct();


            Swal.fire({
                // position: 'top-end',
                icon: 'error',
                title: 'Product Removed from Your Cart',
                showConfirmButton: false,
                timer: 1500
            });

        }

        totalPrice += items[element.id - 1].price * element.qty;
    });

    total.innerText = `$${price.toFixed(2)}`;
    subtotal.innerText = `$${totalPrice.toFixed(2)}`


}

const continueCheckout = () => {
    cart = getCart();
    if (cart === null) {
        cart = [];
    }
    if (cart.length === 0) {
        Swal.fire({
            // position: 'top-end',
            icon: 'warning',
            title: 'Please Add Atleast One Product In Your Cart',
            showConfirmButton: false,
            timer: 1500
        })
    } else {

        location.href = 'checkout.html';

    }
}

const checkout = () => {
    let verify = checkUser();
    if (verify === false) return location.href = 'login.html';

    let checkoutProducts = document.getElementById('checkoutProducts');
    let subtotal = document.getElementById('subtotal');
    let total = document.getElementById('total');
    let totalPrice = 0;
    cart = getCart();
    if (cart == null) cart = [];

    cart.forEach(element => {
        checkoutProducts.innerHTML += `
            <li>
                <a href="/single-product.html?name=${items[element.id-1].name}">${items[element.id-1].name}
                    <span class="middle">x ${element.qty}</span>
                    <span class="last">$${(items[element.id-1].price * element.qty).toFixed(2)}</span>
                </a>
            </li>
            `
        totalPrice += items[element.id - 1].price * element.qty;
    });

    subtotal.innerText = `$${totalPrice.toFixed(2)}`;
    total.innerText = `$${(totalPrice+50).toFixed(2)}`;
}

const confirmation = () => {
    let verify = checkUser();
    if (verify === false) return location.href = 'login.html';

    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Order Placed!',
        showConfirmButton: false,
        timer: 1500
    })

    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let orderNumber = document.getElementById('orderNumber');
    let date = document.getElementById('date');
    let total = document.getElementById('query');
    let subtotal = document.getElementById('subtotal');
    let confirmationProducts = document.getElementById('confirmationProducts');
    let totalPrice = 0;
    let currentDate = monthName[new Date().getMonth().toString()] + ' ' + new Date().getDate() + ', ' + new Date().getFullYear();;
    cart = getCart();

    if (cart == null) cart = [];

    cart.forEach(element => {
        confirmationProducts.innerHTML += `
            <tr>
                <td>
                    <a href="/single-product.html?name=${items[element.id-1].name}" class="table-product-name">${items[element.id-1].name}</a>
                </td>
                <td>
                    <h5 class="table-product-name">x ${element.qty}</h5>
                </td>
                <td>
                    <p class="table-product-name">$${(items[element.id-1].price*element.qty).toFixed(2)}</p>
                </td>
            </tr>
        `

        totalPrice += items[element.id - 1].price * element.qty;
    });

    orderNumber.innerText = Math.floor(Math.random() * 10000);
    date.innerText = currentDate;
    subtotal.innerText = `$${totalPrice.toFixed(2)}`

    total.querySelectorAll("#total").forEach(element => {
        element.innerHTML = `$${(totalPrice+50).toFixed(2)}`
    });

}

const wishlistProduct = () => {
    let verify = checkUser();
    if (verify === false) return location.href = 'login.html';
    let wishlistProductDiv = document.getElementById('wishlistProductDiv');
    let subtotal = document.getElementById('subtotal');
    wishlist = getWishlist();
    wishlistProductDiv.innerHTML = ``;
    if (wishlist === null) {
        wishlist = [];
        subtotal.innerText = `Wishlist is Empty`;
    }
    if (wishlist.length == 0) {
        subtotal.innerText = `Wishlist is Empty`;
    }


    wishlist.forEach(element => {

        wishlistProductDiv.innerHTML += `
        <tr>
        <td>
            <div class="media">
                <div class="d-flex">
                    <img src="${items[element.id - 1].img[0]}" height="150px" alt="">
                </div>
                <div class="media-body">
                    <p>${items[element.id - 1].name}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>$${items[element.id - 1].price}</h5>
        </td>
        <td>
            <button onclick="addToCartIcon(${element.id})" class="main_btn add-to-cart-button" style="padding:0px 10px 0px 10px;">Add To Cart</button>
        </td>
        <td>
            <button onclick="removeWishlistPage(${element.id})" class="main_btn add-to-cart-button" style="padding:0px 10px 0px 10px; background-color:red; border:none;">Remove</button>
        </td>
        </tr>
        `

    });

}


const emailSubmit = () => {
    let email = document.getElementById('newsletterEmail')
    if (email.value == '') {
        Swal.fire({
            // position: 'top-end',
            icon: 'warning',
            title: 'Enter Your Email Please.',
            showConfirmButton: false,
            timer: 1500
        })
    } else {

        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Subscribed To Newsletter',
            showConfirmButton: false,
            timer: 1500
        })
    }
}