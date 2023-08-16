import washPark from './wash-park-denver-co.png'
import prospectPark from './prospect-park.png'
import missionTrails from './mission-trails-regional-park.png'
import hollingerPark from './hollinger-park.png'
export {loadLocationContent}

const locations = [
    {
        name: "Washington Park (Denver)",
        address: "701 S Franklin St, Denver, CO 80209",
        phone: "(393) 123-4567",
        weekhours: "Mon - Fri 8:00 - 20:00",
        weekendhours: "Sat & Sun 08:00 - 14:00",
        photo: washPark
    },
    {
        name: "Prospect Park (New York)",
        address: "Prospect Park, Brooklyn, NY 11215",
        phone: "(212) 123-4567",
        weekhours: "Mon - Fri 8:00 - 20:00",
        weekendhours: "Sat & Sun 08:00 - 14:00",
        photo: prospectPark
    },
    {
        name: "Mission Trails Regional Park (San Diego)",
        address: "1 Father Junipero Serra Trail, San Diego, CA 92119",
        phone: "(619) 123-4567",
        weekhours: "Mon - Fri 8:00 - 20:00",
        weekendhours: "Sat & Sun 08:00 - 14:00",
        photo: missionTrails
    },
    {
        name: "Hollinger Park (Ontario)",
        address: "565 Algonquin Blvd E, Timmins, ON P4N 1B7, Canada",
        phone: "+1 705-264-1275",
        weekhours: "Mon - Fri 8:00 - 20:00",
        weekendhours: "Sat & Sun 08:00 - 14:00",
        photo: hollingerPark
    }
]

function loadLocationContent() {
    const pageContent = document.getElementById("page-content")
    pageContent.innerHTML = ""
    const titleCard = document.createElement("div")
    titleCard.setAttribute("id","title-card")
    titleCard.textContent = "Locations"
    titleCard.style.background = `linear-gradient(var(--amaranth-semiopaque),var(--amaranth)), url('https://previews.123rf.com/images/artphotoclub/artphotoclub1504/artphotoclub150401005/38814340-vintage-paper-with-world-map.jpg')`
    titleCard.style.backgroundSize = "cover"
    pageContent.appendChild(titleCard)

    const locationsInfo = document.createElement("div")
    locationsInfo.classList.add("info-block")
    const locationsInfoText = document.createElement("div")
    locationsInfoText.classList.add("info-main")
    locationsInfoText.innerHTML = `All of our locations are subterranean edifices, accessible
    via hatches located somewhere within various public parks, which we have purchased from 
    their respective cities, and which we maintain with great care. If you need guidance toward 
    the entrance hatch for any particular location, feel free to call that location.`
    locationsInfo.appendChild(locationsInfoText)
    pageContent.appendChild(locationsInfo)

    locations.forEach(location => {
        const locationBlock = document.createElement("div")
        locationBlock.classList.add("info-block")
        const locationHeader = document.createElement("div")
        locationHeader.classList.add("info-header")
        locationHeader.classList.add("amaranth-br")
        locationHeader.textContent = `${location.name}`
        const locationContent = document.createElement("div")
        locationContent.classList.add("info-main")
        const locationInfo = document.createElement("div")
        locationInfo.innerHTML = `${location.address}<br>${location.phone}<br>${location.weekhours}<br>${location.weekendhours}`
        const locationPhoto = document.createElement("img")
        locationPhoto.classList.add("info-image")
        locationPhoto.src = location.photo
        locationContent.appendChild(locationInfo)
        locationContent.appendChild(locationPhoto)
        locationBlock.appendChild(locationHeader)
        locationBlock.appendChild(locationContent)
        pageContent.appendChild(locationBlock)
    })
}