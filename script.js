/* =====================================================
   Resume section tabs and tab contents
===================================================== */

const resumeTab = document.querySelector(".resume-tabs");

const resumePortfolioTabBtns = resumeTab.querySelectorAll(".tab-btn");

const resumeTabContents = document.querySelectorAll(".resume-tab-content");


var resumeTabNav = function(resumeTabClick){

   //this will remove active class from tabs not clicked
   resumeTabContents.forEach((resumeTabContents) => {
   resumeTabContents.style.display = "none";
   resumeTabContents.classList.remove("active");
   })


   resumePortfolioTabBtns.forEach((resumePortfolioTabBtns) => {
   resumePortfolioTabBtns.classList.remove("active");
   })



   //this adds the active class to the tab content that is clicked.
   resumeTabContents[resumeTabClick].style.display = "flex";


   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add(".active");
   }, 100)


   
   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}


resumePortfolioTabBtns.forEach((resumePortfolioTabBtns, i)=>{
   resumePortfolioTabBtns.addEventListener("click", () => {
      resumeTabNav(i);
   })
})



/* =====================================================
   Service modal open/close function
===================================================== */

const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");

   const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");

   const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");


   const serviceModal = serviceCardWithModal.querySelector(".service-modal");



   serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";

      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100)

      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 300)

   })


   modalCloseBtn.addEventListener("click", () => {

      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500)

      setTimeout(() => {
         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100)

     
   })
})





/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.

// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

/* Target elements and specify options to create reveal animations*/
