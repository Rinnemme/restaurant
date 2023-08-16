import chickenWaffle from './chicken-waffle.jpeg'
import fettuccineAlfredo from './fettuccine-alfredo.jpeg'
import grilledCheese from './grilled-cheese.jpeg'
import meatballSub from './meatball-sub.jpeg'
export {loadMenuContent}

const menu = [
    {
        name: "Fettuccine Alfredo",
        description: `This deeply upsetting abomination of misattribution 
        to Italy is, regrettably, extremely delicious. Ours adds sun dried 
        tomatoes, which make just about anything better, and uses cream 
        cheese as a thickening agent for some truly decadent sauce.`,
        photo: fettuccineAlfredo
    },
    {
        name: "Fried Chicken & Waffles",
        description: `Waffles are pretty hard to mess up, so we're more 
        or less comfortable offering them at all locations. Fried chicken
        is considerably easier to mess up, but with a decent chef and the 
        right amount of cayenne, paprika, and so on, it's a safe enough bet.`,
        photo: chickenWaffle
    },
    {
        name: "Grilled Cheese & Tomato Soup",
        description: `Another timeless classic combination that's sure to 
        provide comfort and postprandial somnolence in equal amounts if 
        consumed in sufficient quantities. Depending upon location, you may 
        even be able to add pulled pork, kimchi, and other fun add-ons.`,
        photo: grilledCheese
    },
    {
        name: "Meatball Sub & Fries",
        description: `Is this Italian? Is it American? Is it... I don't know, 
        Greek? What we can tell you for sure is that it's delicious. If 
        Subway can replicate a sub while engaging in predatory franchising 
        practices, we can probably do it better, and ethically. Also, we have 
        deliciously seasoned, crispy fries.`,
        photo: meatballSub
    },
]

function loadMenuContent() {
    const pageContent = document.getElementById("page-content")
    pageContent.innerHTML = ""
    const titleCard = document.createElement("div")
    titleCard.setAttribute("id","title-card")
    titleCard.textContent = "Menu"
    titleCard.style.background = `linear-gradient(var(--green-semiopaque),var(--green)), url('https://www.thesun.co.uk/wp-content/uploads/2023/06/GettyImages-1363931406.jpg')`
    titleCard.style.backgroundSize = "cover"
    pageContent.appendChild(titleCard)

    const locationsInfo = document.createElement("div")
    locationsInfo.classList.add("info-block")
    const locationsInfoText = document.createElement("div")
    locationsInfoText.classList.add("info-main")
    locationsInfoText.innerHTML = `As mentioned on our home page, we typically serve dishes 
    at each location based upon the dishes with which each location's chefs are already 
    intimately familiar, to maximize their authenticity. However, for the sake of some 
    consistency, we do serve a handful of staples - dishes which are the bastard children 
    of the culinary world, whose origins are unknown or, by this juncture, virtually 
    irrelevant. Prices vary by location.`
    locationsInfo.appendChild(locationsInfoText)
    pageContent.appendChild(locationsInfo)

    menu.forEach(dish => {
        const dishBlock = document.createElement("div")
        dishBlock.classList.add("info-block")
        const dishHeader = document.createElement("div")
        dishHeader.classList.add("info-header")
        dishHeader.classList.add("green-br")
        dishHeader.textContent = `${dish.name}`
        const dishDescription = document.createElement("div")
        dishDescription.classList.add("info-main")
        const locationInfo = document.createElement("div")
        locationInfo.innerHTML = `${dish.description}`
        const locationPhoto = document.createElement("img")
        locationPhoto.classList.add("info-image")
        locationPhoto.src = dish.photo
        dishDescription.appendChild(locationInfo)
        dishDescription.appendChild(locationPhoto)
        dishBlock.appendChild(dishHeader)
        dishBlock.appendChild(dishDescription)
        pageContent.appendChild(dishBlock)
    })
}