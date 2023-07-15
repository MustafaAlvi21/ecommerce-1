const homeProduct = () => {
    let featureProduct = document.getElementById('featureProduct');
    for (let i = 0; i < 5; i++) {
        featureProduct.innerHTML += `
        <div class="col col1">
        <div class="f_p_item">
            <div class="f_p_img">
            <a href="/single-product.html?name=${items[i].name}">
            <img class="img-fluid" src="${items[i].img[0]}" alt="">
            </a>
                <div class="p_icon">
                    <a onclick="checkWishlist(${items[i].id})" id="addToWish${items[i].id}">
                        <i class="lnr lnr-heart"></i>
                    </a>
                    <a onclick="addToCartIcon(${items[i].id})">
                        <i class="lnr lnr-cart"></i>
                    </a>
                </div>
            </div>
            <a href="/single-product.html?name=${items[i].name}">
                <h4>${items[i].name}</h4>
            </a>
            <h5>$${items[i].price}</h5>
        </div>
    </div>
        `
    }
}


const init = () => {
    homeProduct();
}