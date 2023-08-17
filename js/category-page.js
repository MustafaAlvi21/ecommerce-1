let categoryProductsDiv = document.getElementById('categoryProductsDiv');

function showProducts() {


    let categoriesList = document.getElementById('categoriesList');
    let colorsList = document.getElementById('colorsList');

    category.forEach(element => {
        categoriesList.innerHTML += `<li>
    <a onclick=categorySort(${element.id}) class="cursor">${element.name}</a>
</li>`;
    });

    colors.forEach(element => {
        colorsList.innerHTML += `<li>
                                <a onclick="colorSort(${element.id})" class="cursor">${element.name}</a>
                            </li>`
    });

    sorting();
}



const sorting = (param) => {

    categoryProductsDiv.innerHTML = ``;

    if (param == 2) {
        items.sort((a, b) => {
            return a.price - b.price;
        });
        items.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });

    } else if (param == 3) {
        items.sort((a, b) => {
            return b.price - a.price;
        });
        items.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });

    } else {
        items.sort((a, b) => {
            return a.id - b.id;
        });

        items.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });
    }

    getWishlistItems();
}


const categorySort = (param) => {
    categoryProductsDiv.innerHTML = ``;

    if (param == 1) {
        let categoryFilter = items.filter((value) => {
            return value.category == 1;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });
    } else if (param == 2) {
        let categoryFilter = items.filter((value) => {
            return value.category == 2;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });
    
    } 
    else if (param == 3) {
        let categoryFilter = items.filter((value) => {
            return value.category == 3;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="f_p_item">
                                    <div class="f_p_img">
                                        <a href="/single-product.html?name=${element.name}">
                                        <img class="img-fluid" src="${element.img[0]}" alt="">
                                        </a>
                                        <div class="p_icon">
                                            <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                <i class="lnr lnr-heart"></i>
                                            </a>
                                            <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                                <i class="lnr lnr-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/single-product.html?name=${element.name}">
                                        <h4>${element.name}</h4>
                                    </a>
                                    <h5>$${element.price}</h5>
                                </div>
                                </div>`
        });
    } 
    else if (param == 4) {
        let categoryFilter = items.filter((value) => {
            return value.category == 4;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 5) {
        let categoryFilter = items.filter((value) => {
            return value.category == 5;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 6) {
        let categoryFilter = items.filter((value) => {
            return value.category == 6;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 7) {
        let categoryFilter = items.filter((value) => {
            return value.category == 7;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 8) {
        let categoryFilter = items.filter((value) => {
            return value.category == 8;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 9) {
        let categoryFilter = items.filter((value) => {
            return value.category == 9;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 10) {
        let categoryFilter = items.filter((value) => {
            return value.category == 10;
        });

        categoryFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="f_p_item">
                        <div class="f_p_img">
                            <a href="/single-product.html?name=${element.name}">
                            <img class="img-fluid" src="${element.img[0]}" alt="">
                            </a>
                            <div class="p_icon">
                                <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                    <i class="lnr lnr-heart"></i>
                                </a>
                                <a onclick="addToCartIcon(${element.id})" class="cursor"    >
                                    <i class="lnr lnr-cart"></i>
                                </a>
                            </div>
                        </div>
                        <a href="/single-product.html?name=${element.name}">
                            <h4>${element.name}</h4>
                        </a>
                        <h5>$${element.price}</h5>
                    </div>
                </div>`
        });
    } 
    else if (param == 'reset') {
        sorting();
    }


    getWishlistItems();
}


const colorSort = (param) => {
    categoryProductsDiv.innerHTML = ``;

    if (param == 1) {

        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 1;
            })
            return colorValue == 1;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } else if (param == 2) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 2;
            })
            return colorValue == 2;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } else if (param == 3) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 3;
            })
            return colorValue == 3;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } else if (param == 4) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 4;
            })
            return colorValue == 4;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } else if (param == 5) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 5;
            })
            return colorValue == 5;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } else if (param == 6) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 6;
            })
            return colorValue == 6;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    } 
    else if (param == 7) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 7;
            })
            return colorValue == 7;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }
    else if (param == 8) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 8;
            })
            return colorValue == 8;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }
    else if (param == 9) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 9;
            })
            return colorValue == 9;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }
    else if (param == 10) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 10;
            })
            return colorValue == 10;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }
    else if (param == 11) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 11;
            })
            return colorValue == 11;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }
    else if (param == 12) {
        let colorFilter = items.filter((value) => {
            let colorValue = value.color.filter((value) => {
                return value == 12;
            })
            return colorValue == 12;
        });

        colorFilter.forEach(element => {
            categoryProductsDiv.innerHTML += `						
                                 <div class="col-lg-3 col-md-3 col-sm-6">
                                 <div class="f_p_item">
                                     <div class="f_p_img">
                                         <a href="/single-product.html?name=${element.name}">
                                         <img class="img-fluid" src="${element.img[0]}" alt="">
                                         </a>
                                         <div class="p_icon">
                                             <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                                 <i class="lnr lnr-heart"></i>
                                             </a>
                                             <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                                 <i class="lnr lnr-cart"></i>
                                             </a>
                                         </div>
                                     </div>
                                     <a href="/single-product.html?name=${element.name}">
                                         <h4>${element.name}</h4>
                                     </a>
                                     <h5>$${element.price}</h5>
                                 </div>
                                 </div>`
        });
    }

    getWishlistItems();
}

const priceSort = () => {
    categoryProductsDiv.innerHTML = ``;
    let priceChange = document.getElementById('priceChange');
    let slideValue = document.getElementById('customRange3');
    priceChange.value = "$" + slideValue.value

    let priceFilter = items.filter(value => {
        return value.price < parseInt(slideValue.value);
    })

    priceFilter.forEach(element => {
        categoryProductsDiv.innerHTML += `						
                             <div class="col-lg-3 col-md-3 col-sm-6">
                             <div class="f_p_item">
                                 <div class="f_p_img">
                                     <a href="/single-product.html?name=${element.name}">
                                     <img class="img-fluid" src="${element.img[0]}" alt="">
                                     </a>
                                     <div class="p_icon">
                                         <a onclick="checkWishlist(${element.id})" id="addToWish${element.id}">
                                             <i class="lnr lnr-heart"></i>
                                         </a>
                                         <a onclick="addToCartIcon(${element.id})" class="cursor"   >
                                             <i class="lnr lnr-cart"></i>
                                         </a>
                                     </div>
                                 </div>
                                 <a href="/single-product.html?name=${element.name}">
                                     <h4>${element.name}</h4>
                                 </a>
                                 <h5>$${element.price}</h5>
                             </div>
                             </div>`
    });

    getWishlistItems();
}

const getWishlistItems = () => {
    wishlist = getWishlist();
    if (wishlist == null) {
        wishlist = []
    }
    wishlist.forEach(element => {
        let wish = document.getElementById(`addToWish${element.id}`);
        if (wish == null) {

        }
        if (wish) {
            wish.classList.add('active-wish')
        }
    });
}
