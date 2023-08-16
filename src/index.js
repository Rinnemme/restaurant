import Logo from './earth.png'
window.onload = initialLoad()
import './styles.css';
import {loadLocationContent} from './locations.js';
import {loadMenuContent} from './menu.js'
import {loadHomeContent} from './home.js'

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
    logo.onclick = function() {loadHomeContent()}
    const homeButton = document.createElement("button")
    homeButton.setAttribute("id","home-button")
    homeButton.textContent = "Home"
    homeButton.onclick = function() {loadHomeContent()}
    const menuButton = document.createElement("button")
    menuButton.setAttribute("id","menu-button")
    menuButton.textContent = "Menu"
    menuButton.onclick = function() {loadMenuContent()}
    const locationsButton = document.createElement("button")
    locationsButton.setAttribute("id","locations-button")
    locationsButton.textContent = "Locations"
    locationsButton.onclick = function() {loadLocationContent()}
    header.appendChild(logo)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(locationsButton)
    content.appendChild(header)
    const pageContent = document.createElement("div")
    pageContent.setAttribute("id","page-content")
    content.appendChild(pageContent)
}