const login = (event) => {
    // event.preventDefault();

    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailInData;
    let passwordInData;
    let nameInData;
    let usersData = getUsersData();

    if(usersData == null) usersData = [];
    
    usersData.forEach(element => {
        if (email.value === element.email) {
            emailInData = element.email
            passwordInData = element.password
            nameInData = element.name
        }
    });

    if (email.value === '' || password.value === '') {

        if (email.value === '') alert('Please Enter Your Email');
        if (password.value === '') alert('Please Enter Your Password');

    } else if (emailInData === undefined) {

        alert('Account Not Registered');

    } else if (email.value !== emailInData || password.value !== passwordInData) {

        if (email.value !== emailInData) {
            alert('Incorrect Email');
        }
        if (password.value !== passwordInData) {
            alert('Incorrect Password');
        }

    } else {

        const userData = {
            name: nameInData,
            email: emailInData,
            password: passwordInData
        }

        localStorage.setItem('currentUser', JSON.stringify(userData));

        email.value = '';
        password.value = '';

        Swal.fire({
            icon: 'success',
            text: 'Login Successfull',
            showConfirmButton: false,
            timer: 2000
          })

        setTimeout(() => {
            location.reload();
            
        }, 2500);


    }
}

document.getElementById('contactForm').addEventListener("submit", login);


const logout = () => {
    localStorage.removeItem("currentUser");
    location.reload();
}


const userAccount = () => {
    let loggedUser = currentUser()
    let accountDiv = document.getElementById('accountDiv');
   
    if(loggedUser == null){
        accountDiv.innerHTML = `
        <div class="col-lg-6">
        <div class="login_box_img">
            <img class="img-fluid" src="img/login.jpg" alt="">
            <div class="hover">
                <h4>New to our website?</h4>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                <a class="main_btn" href="registration.html">Create an Account</a>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="login_form_inner">
            <h3>Log in to enter</h3>
            <form class="row login_form" action="" id="contactForm">
                <div class="col-md-12 form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" required>
                </div>
                <div class="col-md-12 form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password" required>
                </div>
                <div class="col-md-12 form-group">
                    
                </div>
                </form>
                <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="btn submit_btn w-75" onclick="login()" >Log In</button>
                </div>
        </div>
    </div>
        `

 }else{
    cart = getCart();
    if(cart == null) cart=[];
    accountDiv.innerHTML = `
    <div class="col-lg-12 bg-light">
        <div class="login_form_inner">
            <h2 style="color:blue; font-size: 30px; margin-bottom: 50px;">My Account</h2>
            <form class="row login_form" action="" id="contactForm">
                <div class="col-md-12">
                    <style>
                        .information{
                            color: #000;
                            font-weight: bold;
                            font-size: 20px;
                            margin-bottom: 30px;
                        }
                    </style>
                    <p class="information">Name: ${loggedUser.name} </p>
                    <p class="information">Email: ${loggedUser.email} </p>
                    <p class="information">Items In Cart: ${cart.length} </p>

                </div>
                <div class="col-md-12 >
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
                </div>
                <div class="col-md-12 form-group">
                    
                </div>
                </form>
                <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="btn submit_btn w-75" onclick="logout()" >Log Out</button>
                </div>
        </div>
    </div>
    `
 }
}




