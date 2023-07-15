const findProduct = () => {

    // PRODUCT JavaScript 
    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('name');

    const foundProduct = items.find(element => element.name === myParam);
    const foundCategory = category.find(element => element.id === foundProduct.category);

    const img = foundProduct.img
    const productDiv = document.getElementById('myProduct');

    productDiv.innerHTML = `
    <div class="col-lg-6">
        <div class="s_product_img">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="innerImages">
                   
                </ol>
                <div class="carousel-inner" id="outerImages">
                    
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-5 offset-lg-1">
        <div class="s_product_text">
            <h3>${foundProduct.name}</h3>
            <h2>$${foundProduct.price}</h2>
            <ul class="list">
                <li>
                    <a class="active" href="#">
                        <span>Category :</span>  ${foundCategory.name}</a>
                </li>
                <li>
                    <a href="#">
                        <span>Availibility :</span>  In Stock</a>
                </li>
            </ul>
            <p>${foundProduct.short_desc}</p>
            <div class="product_count">
                <label for="qty">Quantity:</label>
                <input type="number" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
            </div>
            <style> 
                .add-to-cart-button{
                    color: white !important;
                }
                .add-to-cart-button:hover{
                    color: blue !important;
                }
                .active-wish{
                    color: red !Important;
                }
            </style>
          <div class="card_area">
                <a class="main_btn add-to-cart-button" onclick="addToCart(${foundProduct.id})">
                    Add to Cart
                </a>
                <a class="icon_btn" onclick="checkWishlist(${foundProduct.id})" id="addToWish${foundProduct.id}">
                    <i class="lnr lnr lnr-heart"></i>
                </a>
            </div> 
        </div>
    </div>
    `

    const outerImages = document.getElementById('outerImages');
    outerImages.innerHTML += `<div class="carousel-item active">
    <img class="d-block w-100" src="${img[0]}" alt="First slide">
    </div>`

    for (let i = 1; i < img.length; i++) {
        outerImages.innerHTML += `
            <div class="carousel-item">
                <img class="d-block w-100" src="${img[i]}" alt="Second slide">
            </div>`
    }

    const innerImages = document.getElementById('innerImages')
    innerImages.innerHTML += ` 
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
        <img src="${img[0]}" height="70px" alt="">
    </li>`

    for (let j = 1; j < img.length; j++) {
        innerImages.innerHTML += `
        <li data-target="#carouselExampleIndicators" data-slide-to="${j}">
            <img src="${img[j]}" height="70px" alt="">
        </li>`
        
    }


    // TABS JavaScript 

    const myTabs = document.getElementById('myTabContent');
    myTabs.innerHTML = `
    <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					${foundProduct.desc}
				</div>
				
				<div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div class="row">
						<div class="col-lg-6">
							<div class="row total_rate">
								<div class="col-6">
									<div class="box_total">
										<h5>Overall</h5>
										<h4>5.0</h4>
										<h6>(03 Reviews)</h6>
									</div>
								</div>
								<div class="col-6 d-flex">
									<div class="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul class="list">
                                        <style>
                                            .grey-color{
                                                color: grey !Important;
                                            }
                                        </style>
											<li>
												<a href="#">5 Star
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i> 01</a>
											</li>
											<li>
												<a href="#">4 Star
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star grey-color"></i> 01</a>
											</li>
											<li>
												<a href="#">3 Star
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i> 01</a>
											</li>
											<li>
												<a href="#">2 Star
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i> 01</a>
											</li>
											<li>
												<a href="#">1 Star
													<i class="fa fa-star"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i>
													<i class="fa fa-star grey-color"></i> 01</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                `;
    return
}


const init = () => {
    findProduct();
}
