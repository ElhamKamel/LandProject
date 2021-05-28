
/**
 * Define Global Variables
 * 
*/
// Getting `Nav Bar List` Element.
const navBarElement = document.querySelector('#navbar__list');
// Gettiing Sections Elements.
const sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
function createMenuBar() {
    const mainUL = document.querySelector('#navbar__list');

    const Home1 = document.createElement('li');
    Home1.setAttribute("class", "menu__link");
    Home1.setAttribute("li_href", `#HomeLink`)
    Home1.textContent = "Home";
    Home1.addEventListener("click", scrollTo);

    mainUL.appendChild(Home1);

    let navBarItem;
    for (let i = 0; i < sectionsList.length ; i++) {
        sectionID = sectionsList[i].id;
        sectionDataNav = sectionsList[i].getAttribute('data-nav');
        navBarItem = document.createElement('li');
        navBarItem.setAttribute("class", "menu__link");
        navBarItem.setAttribute("li_href", `#${sectionID}`)
        navBarItem.textContent = sectionDataNav;
        navBarItem.addEventListener("click", scrollTo);

        mainUL.appendChild(navBarItem);
    }
}

// Get current position of current section
const getSectionPosition = function (section) {
    return section.getBoundingClientRect();
}

const isSectionInViewPort = function (section) {
    const currentSectionPosition = getSectionPosition(section);
    return currentSectionPosition.top < 50 && currentSectionPosition.bottom > 50; // Near Top
}

const removeActiveClassFromSection = function (section) {
    section.classList.remove('your-active-class')
}

const addActiveClassToSection = function (section) {
    section.classList.add('your-active-class');
}

// Switch Classes for Nav Bar
//const handleNavBarActiveState = function (section_id) {
    //const navBarListItemsAnchors = document.querySelectorAll('.menu__link');
    //for (let i = 0 ; i < navBarListItemsAnchors.length ; i++) {
    //    navBarListItemsAnchors[i].classList.remove('navbar__active');
    //    if (navBarListItemsAnchors[i].getAttribute("li_href") == '#' + section_id) {

    //        navBarListItemsAnchors[i].classList.add('navbar__active');
    //    }
    //}
//}

// Active the section in the viewport
// Add class 'active' to section when near top of viewport
// Set sections as active
const handleSectionsActiveState = function () {
    let activeSectionID = '#navbar__list';
    sectionsList.forEach(section => {
        removeActiveClassFromSection(section);
        if (isSectionInViewPort(section)) {
            addActiveClassToSection(section);
            activeSectionID = section.id;

        }
    });
    //handleNavBarActiveState(activeSectionID);
}

window.addEventListener('scroll', handleSectionsActiveState);

const scrollTo = function (e) {
    e.preventDefault();
    let target = e.target.getAttribute("li_href");
    
    ///remove nav bar active state from li items
    const navBarListItemsAnchors = document.querySelectorAll('.menu__link');
    for (let i = 0 ; i < navBarListItemsAnchors.length ; i++) {
        navBarListItemsAnchors[i].classList.remove('navbar__active');
    }

    // add navbar active state to the selected li item 
    e.target.classList.add('navbar__active');

    if (target == "#HomeLink") {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else {
        let element = document.querySelector(target);
        element.scrollIntoView({ behavior: "smooth" });
    }
}



// Build menu 
createMenuBar();



// Scroll to section on link click

// Set sections as active

