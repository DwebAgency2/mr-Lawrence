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
      resumeTabContents[resumeTabClick].classList.add("active");
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

document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");

   const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn")

   const cardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal")


   portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const Filter = tabBtn.getAttribute("data-filter");


         cardWithModals.forEach((cardWithModals) => {
            if(Filter === "all" || cardWithModals.classList.contains(Filter)) {
               
               cardWithModals.classList.remove("hidden");


               setTimeout(() => {
                  cardWithModals.style.opacity = "1";
                  cardWithModals.style.transition = ".5s ease";
               },1)

            }
            else {
               
               cardWithModals.classList.add("hidden")

               setTimeout(() => {
                  cardWithModals.style.opacity = "0";
                  cardWithModals.style.transition = ".5s ease";
               },1)
            }
         })

         //this will add active class to the clicked tab button

         portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active")
      })
   })
})

// Open/Close Portfolio modals.

const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal")


portfolioCardsWithModals.forEach((portfolioCardsWithModal) => {
   const portfolioCard = portfolioCardsWithModal.querySelector(".portfolio-card");

   const portfolioBackdrop = portfolioCardsWithModal.querySelector(".portfolio-modal-backdrop");


   const portfolioModal = portfolioCardsWithModal.querySelector(".portfolio-modal");

   
   const modalCloseBtn = portfolioCardsWithModal.querySelector(".modal-close-btn");



   portfolioCard.addEventListener("click", () => {
      portfolioBackdrop.style.display = "flex";

      setTimeout(() => {
         portfolioBackdrop.classList.add("active");
      }, 300)
     

      setTimeout(() => {
         portfolioModal.classList.add("active");
      }, 300)
      

   })


   modalCloseBtn.addEventListener("click", () => {
      

      setTimeout(() => {
         portfolioBackdrop.style.display = "none";
      }, 500)
     

      setTimeout(() => {
         portfolioBackdrop.classList.remove("active");

         portfolioModal.classList.remove("active");
      }, 100)
   })

})


/* =====================================================
   Testimonial Swiper
===================================================== */

var swiper = new Swiper(".sue-client-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0)
})

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSections.forEach((navMenuSection) => {
      let sectionHight =  navMenuSection.offsetHeight;
      let sectionTop =  navMenuSection.offsetTop - 50;

      let id = navMenuSection.getAttribute("id")


      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
         document.querySelector(".bottom-nav .menu li a[href*=" + id +"]").classList.add("current")
      }else{
         document.querySelector(".bottom-nav .menu li a[href*=" + id +"]").classList.remove("current")
      }
   })


})

// Javascript to show bottom navigation menu on home(page load).

window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav")


   bottomNav.classList.toggle("active", window.scrollY < 10)
})

// Javascript to show/hide bottom navigation menu on home(scroll).

const bottomNav = document.querySelector(".bottom-nav")

const menuHideBtn = document.querySelector(".menu-hide-btn")


const menuShowBtn = document.querySelector(".menu-show-btn");

var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active")
   menuShowBtn.classList.remove("active")

   if (window.scrollY < 10) {
      menuHideBtn.classList.remove("acitve")


      function scrollStopped(){
         bottomNav.classList.add("active")
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500)
   }

   if (window.scrollY > 10) {

      menuHideBtn.classList.add("acitve")


      function scrollStopped(){
         bottomNav.classList.remove("active")

         menuShowBtn.classList.add("active")
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500)
   }
})
// Hide bottom navigation menu on click of menu-hide-btn.

menuHideBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.toggle("active");
   menuShowBtn.classList.toggle("active");
   
})

// Show bottom navigation menu on click of menu-show-btn.

menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
   
})

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

window.addEventListener("scroll", () => {
   const toTopBtn = document.querySelector(".to-top-btn")


   toTopBtn.classList.toggle("active", window.scrollY > 0);

   //scroll indicator bar

   const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

   const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;

   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   const scrollValue = (pageScroll / height) * 100;

   scrollIndicatorBar.style.height = scrollValue + "%"
})


/* =====================================================
   Customized cursor on mousemove
===================================================== */

const cursor = document.querySelector(".cursor")

const cursorDot = document.querySelector(".cursor-dot")

const cursorCircle = document.querySelector(".cursor-circle")

document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;

   cursorDot.style.top = y + "px";
   cursorDot.style.left = x + "px";

   cursorCircle.style.top = y + "px"
   cursorCircle.style.left = x + "px"
})

// Cursor effects on hover website elements.

const cursorHoverLinks = document.querySelectorAll("body a, .theme-btn, .sue-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form, .submit-btn, .menu-show-btn, .menu-hide-btn") 

cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseover", () => {
      cursorDot.classList.add("large")
      cursorCircle.style.display = "none"
   })
})


cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseout", () => {
      cursorDot.classList.remove("large")
      cursorCircle.style.display = "block"
   })
})

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
   //change theme icon and theme button on click
   themeBtn.classList.toggle("active-sun-icon");

   document.body.classList.toggle("light-theme");

   //save theme icon and theme on click theme button

   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";

   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

   localStorage.setItem("sue-saved-icon", getCurrentIcon());

   localStorage.setItem("sue-saved-theme", getCurrentTheme());
   
})

// Get saved theme icon and theme on document loaded.

const savedIcon = localStorage.getItem("sue-saved-icon");

const savedTheme = localStorage.getItem("sue-saved-theme")

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");


   document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme")
})
/* =====================================================
   ScrollReveal JS animations
===================================================== */

ScrollReveal({ 
   reset: true,
   distance: '60px',
   duration: 2500,
   delay: 400
});

// Common reveal options to create reveal animations.

/* Target elements and specify options to create reveal animations*/
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });


ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });

ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.about-img', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.about-info, .sue-footer, .sue-logo', { delay: 300, origin: 'bottom' });

ScrollReveal().reveal('.pro-card, .sue-main-btn, .about-buttons,.resume-tabs, .tab-btn, .portfolio-tabs, .tab-btn', { delay: 500, origin: 'right', interval: 200 });

ScrollReveal().reveal('#resume, .section-content', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu,', { delay: 300, origin: 'bottom', interval: 300});

ScrollReveal().reveal('.sue-client-swiper, .contact-form-body', { delay: 700, origin: 'right'});

ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300});

