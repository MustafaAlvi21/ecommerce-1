const register = (event) => {
    event.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confPass = document.getElementById('pass');
    let userEmail;
    usersData = getUsersData();

    if(usersData == null){
        usersData = []
    }
    usersData.forEach(element => {
        if(element.email === email.value){
            userEmail = element.email;
        }
    });

    if (name.value === '' || email.value === '' || password.value === '' || confPass.value != password.value || userEmail === email.value) {
        
        if (name.value === '') {
            alert("Enter Your Name Please");
        }
        if (email.value === '') {
            alert("Enter Your Email Please");
        }
        if (password.value === '') {
            alert("Enter Your password Please");
        }
        if (confPass.value != password.value) {
            alert("Password Doesn't Match");
        } else if (userEmail === email.value){
            alert("Email Already Registered")
        }

    } else {

        if(usersData === null) usersData = [];
        
        const userData = {
            name: name.value,
            email: email.value,
            password: password.value
        }

        usersData.push(userData)
        setUsersData();
        // localStorage.setItem('usersData',JSON.stringify(usersData));
        Swal.fire({
            icon: 'success',
            title: 'Registered Sucessfully!',
            confirmButtonText: 'OK',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                location.href = "login.html"
            } else if (result.isDenied) {
              return
            }
          })   

    }
}


document.getElementById('contactForm').addEventListener("submit", register)