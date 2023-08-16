import {content} from './index.js'
import chickenWaffle from './chicken-waffle.jpeg'
import fettuccineAlfredo from './fettuccine-alfredo.jpeg'
import grilledCheese from './grilled-cheese.jpeg'
import meatballSub from './meatball-sub.jpeg'

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