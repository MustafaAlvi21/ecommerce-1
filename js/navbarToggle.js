console.log(window.location.pathname);

const myWindow = window.location.pathname

const [splitted1, splitted2] = myWindow.split('.')

const [slash, name] = splitted1.split('/')

const navLink = document.getElementsByClassName('nav-link')

console.log(navLink)

if (name === 'index')
    if (navLink.innerText === "HOME") {
        navLink.style.color = 'blue'
    } else if (name.toLocaleLowerCase() === (navLink.innerText).toLocaleLowerCase()) {
    navLink.style.color = 'blue'
}