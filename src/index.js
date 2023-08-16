import Logo from './earth.png'
window.onload = initialLoad()
import './styles.css';

function initialLoad() {
    loadHeader()
    loadHomeContent()
}

function loadHeader() {
    const content = document.getElementById("content")
    const header = document.createElement("div")
    header.setAttribute("id","header")
    const logo = document.createElement("img")
    logo.setAttribute("id","logo")
    logo.src = Logo
    const homeButton = document.createElement("button")
    homeButton.setAttribute("id","home-button")
    homeButton.textContent = "Home"
    const menuButton = document.createElement("button")
    menuButton.setAttribute("id","menu-button")
    menuButton.textContent = "Menu"
    const locationsButton = document.createElement("button")
    locationsButton.setAttribute("id","locations-button")
    locationsButton.textContent = "Locations"
    header.appendChild(logo)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(locationsButton)
    content.appendChild(header)
    const pageContent = document.createElement("div")
    pageContent.setAttribute("id","page-content")
    content.appendChild(pageContent)
}

function loadHomeContent() {
    const pageContent = document.getElementById("page-content")
    pageContent.innterHTML = ""
    const titleCard = document.createElement("div")
    titleCard.setAttribute("id","title-card")
    titleCard.textContent = "Nomnivore"
    // titleCard.style.background = "linear-gradient(rgba(0, 115, 181, 0.39),rgb(0,115,181)), url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg')"
    titleCard.style.background = `linear-gradient(var(--blue-semiopaque),var(--blue)), url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg')`
    pageContent.appendChild(titleCard)

    const restaurantInfo = document.createElement("div")
    restaurantInfo.classList.add("info-block")
    const restaurantInfoHeader = document.createElement("div")
    restaurantInfoHeader.classList.add("info-header")
    restaurantInfoHeader.classList.add("black-br")
    restaurantInfoHeader.textContent = "Earth's Favorite Foods™"
    const restaurantInfoText = document.createElement("div")
    restaurantInfoText.classList.add("info-main")
    restaurantInfoText.innerHTML = `Welcome to Nomnivore! We pride ourselves on being 
    the first restaurant ever tried by the aliens whose existence was uncovered to the 
    public in the Year of our Lord 2023, and reasonably so, given that we truly have a 
    bit of everything our magnificent planet offers. We're like if the New York City food 
    scene was a single restaurant! <br><br>
    
    However, unlike certain chains whose extensive and diverse menu seems to suggest a 
    wide breadth of culinary expertise - but whose dishes feel appropriately devoid of 
    love and personality for an establishment bearing 'factory' in its name - our dishes 
    are made with love, and apart from a few staples, the menu of our locations varies 
    specifically because we only offer that with which we know our chefs are intimately 
    familiar and will delight in and excel at cooking.`
    restaurantInfo.appendChild(restaurantInfoHeader)
    restaurantInfo.appendChild(restaurantInfoText)
    pageContent.appendChild(restaurantInfo)
}

//  <div id="content">
//         <div id="header">
//             <img id="logo" src="../src/earth.png">
//             <button id="home-button">Home</button>
//             <button id="menu-button">Menu</button>
//             <button id="locations-button">Locations</button>
//         </div>
//         <div id="page-content">
//             <div id="title-card">
//                 Nomnivore
//             </div>
//             <div class="info-block">
//                 <div class="info-header black-br">Header Time</div>
//                 <div class="info-main">Here's some text</div>
//             </div>
//             <div class="info-block">
//                 <div class="info-header black-br">Header Time</div>
//                 <div class="info-main">
//                     <div class="info-text">
//                         Let's just write some info at a bit more length about 
//                         a prospective dish. This dish is probably prepared by some sort of chef
//                         who has some manner of expertise from some specific location, a location
//                         from whence they hail. Having that expertise, this chef crafts said dish
//                         in order to benefit the customer's taste buds, and so on and so forth"
//                     </div>
//                     <div class="info-image"></div>
//                 </div>
//             </div>
//         </div>
//     </div>