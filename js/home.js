const homeProduct = () => {
    let featureProduct = document.getElementById('featureProduct');
    for (let i = 0; i < 4; i++) {
        featureProduct.innerHTML += `
        <div class="col-lg-3 col-md-3 col-sm-4 col-12">
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
            <div class="d-flex justify-content-center align-items-center mb-1">
                <div class="small-ratings me-2">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h4 class="review">1 review</h4>
            </div>
            <h5>$${items[i].price}</h5>
        </div>
    </div>
        `
    }

    // let womenFeatureProduct = items.filter((value) => {
    //     return value.gender == 2;
    // });

    // console.log(womenFeatureProduct);

    // for (let i = 0; i < 4; i++) {
    //     featureProduct.innerHTML += `
    //     <div class="col col1">
    //     <div class="f_p_item">
    //         <div class="f_p_img">
    //         <a href="/single-product.html?name=${womenFeatureProduct[i].name}">
    //         <img class="img-fluid" src="${womenFeatureProduct[i].img[0]}" alt="">
    //         </a>
    //             <div class="p_icon">
    //                 <a onclick="checkWishlist(${womenFeatureProduct[i].id})" id="addToWish${womenFeatureProduct[i].id}">
    //                     <i class="lnr lnr-heart"></i>
    //                 </a>
    //                 <a onclick="addToCartIcon(${womenFeatureProduct[i].id})">
    //                     <i class="lnr lnr-cart"></i>
    //                 </a>
    //             </div>
    //         </div>
    //         <a href="/single-product.html?name=${womenFeatureProduct[i].name}">
    //             <h4>${womenFeatureProduct[i].name}</h4>
    //         </a>
    //         <h5>$${womenFeatureProduct[i].price}</h5>
    //     </div>
    // </div>
    // `
    // }

}

const WomenhomeProduct = () => {
    let featureProduct = document.getElementById('prdtab-16487926295d8867b0-1');
    for (let i = 0; i < 3; i++) {
        featureProduct.innerHTML += `
        <div class="col-lg-3">
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
            <div class="d-flex justify-content-center align-items-center mb-1">
                <div class="small-ratings me-2">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h4 class="review">1 review</h4>
            </div>
            <h5>$${items[i].price}</h5>
        </div>
    </div>
        `
    }
}

const KidshomeProduct = () => {
    let featureProduct = document.getElementById('prdtab-16487926295d8867b0-2');
    for (let i = 0; i < 2; i++) {
        featureProduct.innerHTML += `
        <div class="col-lg-3">
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
            <div class="d-flex justify-content-center align-items-center mb-1">
                <div class="small-ratings me-2">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <h4 class="review">1 review</h4>
            </div>
            <h5>$${items[i].price}</h5>
        </div>
    </div>
        `
    }
}


const init = () => {
    homeProduct();
    WomenhomeProduct();
    KidshomeProduct();
}