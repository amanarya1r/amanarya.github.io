/*js^^^^^^^^^^^^^^^^^ Scroll Progress Indicator ^^^^^^^^^^^^^^^^^js*/

const scrollProgressIndicator = document.querySelector(".scroll-progress-indicator");

const postContent = document.querySelector(".Blog .post.hentry.uncustomized-post-template");

window.addEventListener("scroll", () =>{
    let scrollAmount = window.scrollY;
    let postHeight = postContent.clientHeight;
    
    let progress = (scrollAmount/postHeight) * 100;

    console.log("Progress: " + progress);
})

/*js################# Scroll Progress Indicator #################js*/



/*js^^^^^^^^^^^^^^^^^ Live Search Functionality ^^^^^^^^^^^^^^^^^js*/

const handleAllPosts = (data) => {
    allPosts = data.feed.entry;
}

let allPosts = [];

const searchInput = document.querySelector(".search-container .search-input");
const searchResultBox = document.querySelector(".search-container .search-results")
const searchTitle = document.querySelector(".search-container .search-results .search-title");
const resultsContainer = document.querySelector(".results-container");

let filteredPosts = [];

const populateSearchResults = () => {
    const ul = document.createElement("ul");

    filteredPosts.forEach((p) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = p.link[p.link.length - 1].href;
        a.textContent = p.title.$t;

        li.appendChild(a);
        ul.appendChild(li);
    });

    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(ul);
};

searchInput.addEventListener("input", (srcd) => {
    const query = srcd.target.value.toLowerCase();

    if(query) {
        searchResultBox.classList.add("visible");
        filteredPosts = allPosts.filter((post) => {
            const title = post.title.$t.toLowerCase();
            return title.includes(query);
        });

        searchTitle.textContent = filteredPosts.length > 0 ? "Search Results" : "No results found";
        populateSearchResults();
    } else {
        searchResultBox.classList.remove("visible");
        searchTitle.textContent = "";
        resultsContainer.innerHTML = "";
    }
});

/* Search Container Toggle */
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
let isTouchDevice = false;

function toggleSearchContainer(event) {
    if (event.type === 'touchstart') {
        isTouchDevice = true;
    }

    searchContainer.classList.toggle("active");
    searchResultBox.classList.remove("visible");
    searchInput.focus();

    if (!searchContainer.classList.contains("active")) {
        searchInput.value = "";  
        searchTitle.textContent = ""; 
        resultsContainer.innerHTML = "";  
    }

    event.stopPropagation();
    event.preventDefault();
}

function closeSearchContainer(event) {
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        searchContainer.classList.remove("active");
        searchResultBox.classList.remove("visible");

        searchInput.value = "";  
        searchTitle.textContent = "";  
        resultsContainer.innerHTML = "";  
    }
}

document.addEventListener("keydown", (esc) => {
    if(esc.key === "Escape"){
        searchContainer.classList.remove("active");  
        searchResultBox.classList.remove("visible");

        searchInput.value = "";
        searchTitle.textContent = "";
        resultsContainer.innerHTML = "";
    }
});

searchIcon.addEventListener("click", toggleSearchContainer);
searchIcon.addEventListener("touchstart", toggleSearchContainer);

document.addEventListener("click", closeSearchContainer);
document.addEventListener("touchstart", closeSearchContainer);


/*js^^^^^^^^^^^^^^^^^ Mobile Menu Container Toggle ^^^^^^^^^^^^^^^^^js*/
const menuContainer = document.querySelector(".mobile-menu-container");
const menuIcon = document.querySelector(".mobile-menu-icon");

// Function to toggle mobile menu container
function toggleMenuContainer(event) {
    menuContainer.classList.toggle("active");

    event.stopPropagation();  // Prevent event from propagating to document
    event.preventDefault();   // Prevent potential double triggering of events
}

// Function to close menu container when clicking/touching outside
function closeMenuContainer(event) {
    if (!menuContainer.contains(event.target) && !menuIcon.contains(event.target)) {
        menuContainer.classList.remove("active");
    }
}

// Add event listener for both touchstart and click on the menu icon
menuIcon.addEventListener("click", toggleMenuContainer);
menuIcon.addEventListener("touchstart", toggleMenuContainer);

// Add event listener to close the menu container if clicked/touched outside
document.addEventListener("click", closeMenuContainer);
document.addEventListener("touchstart", closeMenuContainer);
/*js################# Mobile Menu Container Toggle #################js*/


/*js^^^^^^^^^^^^^^^^^ Mobile Sidebar Toggle ^^^^^^^^^^^^^^^^^js*/
const sidebarContainer = document.querySelector(".sidebar");
const sidebarIcon = document.querySelector(".top-nav .sidebar-icon");

// Function to toggle mobile sidebar container
function toggleSidebarContainer(event) {
    sidebarContainer.classList.toggle("active");

    event.stopPropagation();  // Prevent event from propagating to document
    event.preventDefault();   // Prevent potential double triggering of events
}

// Function to close sidebar container when clicking/touching outside
function closeSidebarContainer(event) {
    if (!sidebarContainer.contains(event.target) && !sidebarIcon.contains(event.target)) {
        sidebarContainer.classList.remove("active");
    }
}

// Add event listener for both touchstart and click on the sidebar icon
sidebarIcon.addEventListener("click", toggleSidebarContainer);
sidebarIcon.addEventListener("touchstart", toggleSidebarContainer);

// Add event listener to close the sidebar container if clicked/touched outside
document.addEventListener("click", closeSidebarContainer);
document.addEventListener("touchstart", closeSidebarContainer);
/*js################# Mobile Sidebar Toggle #################js*/

/*js^^^^^^^^^^^^^^^^^ Dark/Light Mode ^^^^^^^^^^^^^^^^^js*/
// Select the screen mode icons for desktop and mobile
const desktopScreenModeIcon = document.querySelector(".screen-mode img");
const mobileScreenModeIcon = document.querySelector(".mobile-screen-mode img");

// Function to switch between light and dark mode icons
function switchThemeMode() {
    const currentThemeMode = localStorage.getItem("currentTheme");

    if (currentThemeMode === "dark") {
        // Change to light mode
        desktopScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160834/darkmode_z5oola.svg";
        mobileScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160834/darkmode_z5oola.svg";
        localStorage.setItem("currentTheme", "light");
        document.body.classList.remove("dark-theme"); // Optional: Apply light mode styles
    } else {
        // Change to dark mode
        desktopScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160836/lightmode_xyhmor.svg";
        mobileScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160836/lightmode_xyhmor.svg";
        localStorage.setItem("currentTheme", "dark");
        document.body.classList.add("dark-theme"); // Optional: Apply dark mode styles
    }
}

// Initialize the icons based on the saved theme in localStorage
function initializeThemeMode() {
    const savedThemeMode = localStorage.getItem("currentTheme");

    if (savedThemeMode === "dark") {
        desktopScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160836/lightmode_xyhmor.svg";
        mobileScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160836/lightmode_xyhmor.svg";
        document.body.classList.add("dark-theme");
    } else {
        desktopScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160834/darkmode_z5oola.svg";
        mobileScreenModeIcon.src = "https://res.cloudinary.com/dpun25sko/image/upload/v1726160834/darkmode_z5oola.svg";
        document.body.classList.remove("dark-theme");
    }
}

// Event listeners for toggling the theme on both click and touch
desktopScreenModeIcon.addEventListener("click", switchThemeMode);
desktopScreenModeIcon.addEventListener("touchstart", switchThemeMode);
mobileScreenModeIcon.addEventListener("click", switchThemeMode);
mobileScreenModeIcon.addEventListener("touchstart", switchThemeMode);

// Initialize theme mode on page load
initializeThemeMode();
/*js################# Dark/Light Mode #################js*/


/*js^^^^^^^^^^^^^^^^^ Custom Hover Menu & Scroll to Top ^^^^^^^^^^^^^^^^^js*/

/* Hover Menu Button Toggle */
const topnavDropIcon = document.querySelector(".top-nav .drop-icon");
const topnavMobileDropIcon = document.querySelector(".top-nav .mobile-menu-container .mobile-drop-icon")
const hoverMnuButtonToggle = document.querySelector(".custom-btn-tgl");

function hoverMenuButtonShowerTn(event){
    event.stopPropagation();  
    event.preventDefault();

    const currentHoverMenuButtonState = localStorage.getItem("currentHoverMenuBtnCon");
    
    if(currentHoverMenuButtonState === "shw"){
        hoverMnuButtonToggle.classList.remove("active");
        topnavDropIcon.classList.remove("show");
        topnavMobileDropIcon.classList.remove("show");
        localStorage.setItem("currentHoverMenuBtnCon", "ntshw");
        topnavDropIcon.title = "Show Hover Menu";
    } else {
        hoverMnuButtonToggle.classList.toggle("active");
        topnavDropIcon.classList.toggle("show");
        topnavMobileDropIcon.classList.toggle("show");
        localStorage.setItem("currentHoverMenuBtnCon", "shw");
        topnavDropIcon.title = "Hide Hover Menu";
    }

}

function initializeCurrentHoverMenuButtonState(){
    const savedHoverMenuButtonState = localStorage.getItem("currentHoverMenuBtnCon")

    if (savedHoverMenuButtonState === "shw"){
        hoverMnuButtonToggle.classList.toggle("active");
        topnavDropIcon.classList.toggle("show");
        topnavMobileDropIcon.classList.toggle("show");
        topnavDropIcon.title = "Hide Hover Menu";
    } else {
        hoverMnuButtonToggle.classList.remove("active");
        topnavDropIcon.classList.remove("show");
        topnavMobileDropIcon.classList.remove("show");
        topnavDropIcon.title = "Show Hover Menu";
    }

}

topnavMobileDropIcon.addEventListener("click", hoverMenuButtonShowerTn);
topnavMobileDropIcon.addEventListener("touchstart", hoverMenuButtonShowerTn);

topnavDropIcon.addEventListener("click", hoverMenuButtonShowerTn);
topnavDropIcon.addEventListener("touchstart", hoverMenuButtonShowerTn);

initializeCurrentHoverMenuButtonState();

/* Hover Menu Toggle */
const hoverMenuButtonToggle = document.querySelector(".custom-btn-tgl .custom-btn-container");
const hoverMenuVisible = document.querySelector(".custom-btn-tgl .custom-btn-container .btn-options");

let tapTimeout = null; // Timeout for handling single vs double tap
let lastTapTime = 0; // To track the time of the last tap
let doubleClickDelay = 300; // Time threshold to detect double tap/click

// Function to toggle the visibility of the menu
function toggleHoverMenuContainer() {
    hoverMenuButtonToggle.classList.toggle("active");
    hoverMenuVisible.classList.toggle("show");
}

// Function to close the hover menu when clicked outside
function closeHoverMenuContainer(event) {
    if (!hoverMenuButtonToggle.contains(event.target) && !hoverMenuVisible.contains(event.target)) {
        hoverMenuButtonToggle.classList.remove("active");
        hoverMenuVisible.classList.remove("show");
    }
}

// Handle both clicks and taps with a unified approach
function handleClickOrTap(event, isTouch) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTapTime;

    if (timeDifference < doubleClickDelay && timeDifference > 0) {
        // Double tap/click detected, clear the timeout for single tap/click
        clearTimeout(tapTimeout);

        // Scroll to top action on double tap/click
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    } else {
        // Single tap/click detected, wait for potential double tap/click
        tapTimeout = setTimeout(() => {
            toggleHoverMenuContainer(); // Trigger menu toggle if no second tap/click within the delay
        }, doubleClickDelay);
    }

    lastTapTime = currentTime; // Update last tap/click time
}

// Handle click for non-touch (mouse) events
hoverMenuButtonToggle.addEventListener("click", function(event) {
    handleClickOrTap(event, false); // Passing false to indicate a non-touch event
});

// Handle touchstart for touch events
hoverMenuButtonToggle.addEventListener("touchstart", function(event) {
    handleClickOrTap(event, true); // Passing true to indicate a touch event
    event.preventDefault(); // Prevent click from firing after touch
});

// Close the hover menu when clicked outside
document.addEventListener("click", closeHoverMenuContainer); // For desktop
document.addEventListener("touchstart", closeHoverMenuContainer); // For mobile


/* Sidebar Toggle byhm */
const sidebarToggleByhmIcon = document.querySelector(".custom-btn-tgl .custom-btn-container .btn-options .sidebar-toggle-byhm");
const postsWrapperByhm = document.querySelector(".blog-sidebar-container .posts-wrapper");
const sidebarContainerSidebarByhm = document.querySelector(".blog-sidebar-container .sidebar");

function toggleSidebarContainerByhm(event){
   
    sidebarContainerSidebarByhm.style.transition = "";
    postsWrapperByhm.style.transition = "";

    const currentSidebarToggleMode = localStorage.getItem("currentSidebarToggle");

    if (currentSidebarToggleMode === "onn") {
        sidebarContainer.classList.remove("toggleon");
        postsWrapperByhm.classList.remove("widthfull");
        sidebarToggleByhmIcon.classList.remove("pressed");
        localStorage.setItem("currentSidebarToggle", "offf");
        sidebarToggleByhmIcon.title = "Hide Sidebar";
    } else {
        sidebarContainer.classList.toggle("toggleon");
        postsWrapperByhm.classList.toggle("widthfull");
        sidebarToggleByhmIcon.classList.toggle("pressed");
        localStorage.setItem("currentSidebarToggle", "onn");
        sidebarToggleByhmIcon.title = "Show Sidebar";
    }
    
    event.stopPropagation();  
    event.preventDefault();
}

function initializeCurrentSidebarToggle(){
    
    const savedSidebarToggleMode = localStorage.getItem("currentSidebarToggle");

    if (savedSidebarToggleMode === "onn"){
        sidebarContainerSidebarByhm.style.transition = "none";
        postsWrapperByhm.style.transition = "none";
        sidebarContainer.classList.toggle("toggleon");
        postsWrapperByhm.classList.toggle("widthfull");
        sidebarToggleByhmIcon.classList.toggle("pressed");
        sidebarToggleByhmIcon.title = "Show Sidebar";
    } else {
        sidebarContainer.classList.remove("toggleon");
        postsWrapperByhm.classList.remove("widthfull");
        sidebarToggleByhmIcon.classList.remove("pressed");
        sidebarToggleByhmIcon.title = "Hide Sidebar";
    }
}

sidebarToggleByhmIcon.addEventListener("click", toggleSidebarContainerByhm);
sidebarToggleByhmIcon.addEventListener("touchstart", toggleSidebarContainerByhm);

initializeCurrentSidebarToggle();

/* Top-Navigation Toggle byhm */
const navigationBarToggleByhmIcon = document.querySelector(".custom-btn-tgl .custom-btn-container .btn-options .navigation-toggle");
const topNavigationHoverState = document.querySelector(".top-nav");
const navigationBarToggleByhmIconImg = document.querySelector(".custom-btn-tgl .custom-btn-container .btn-options .navigation-toggle img");


function toggleNavigationBarByhm(event){

    topNavigationHoverState.style.transition = ""; 

    const currentNavigationBarHoverMode = localStorage.getItem("currentNavigationBarState");

    if (currentNavigationBarHoverMode === "upp"){
        topNavigationHoverState.classList.remove("hoverup");
        navigationBarToggleByhmIcon.classList.remove("pressed");
        localStorage.setItem("currentNavigationBarState", "downn");
        navigationBarToggleByhmIcon.title = "Hide Navigation Bar";
    } else {
        topNavigationHoverState.classList.toggle("hoverup");
        navigationBarToggleByhmIcon.classList.toggle("pressed");
        localStorage.setItem("currentNavigationBarState", "upp");
        navigationBarToggleByhmIcon.title = "Show Navigation Bar";
    }

    event.stopPropagation();  
    event.preventDefault();
}

function initializeCurrentNavigationBarHoverState(){
    const savedNavigationBarHoverMode = localStorage.getItem("currentNavigationBarState");

    if (savedNavigationBarHoverMode === "upp"){
        topNavigationHoverState.style.transition = "none";
        topNavigationHoverState.classList.toggle("hoverup");
        navigationBarToggleByhmIcon.classList.toggle("pressed");
        navigationBarToggleByhmIcon.title = "Show Navigation Bar";
    } else {
        topNavigationHoverState.classList.remove("hoverup");
        navigationBarToggleByhmIcon.classList.remove("pressed");
        navigationBarToggleByhmIcon.title = "Hide Navigation Bar";
    }
}

navigationBarToggleByhmIcon.addEventListener("click", toggleNavigationBarByhm);
navigationBarToggleByhmIcon.addEventListener("touchstart", toggleNavigationBarByhm);

initializeCurrentNavigationBarHoverState();
/*js################# Custom Hover Menu & Scroll to Top #################js*/
