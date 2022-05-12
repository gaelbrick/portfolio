
/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 50) header.classList.add('header-list')
}
window-addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalCLick){
  modalViews[modalCLick].classList.add('active-modal')
}

modalBtns.forEach((mb,i) =>{
  mb.addEventListener('click', () =>{
    modal(i)
  })
})

modalClose.forEach((mc) =>{
  mc.addEventListener('click', ()=>{
    modalViews.forEach((mv) =>{
      mv.classList.remove('active-modal')
    })
  })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});

/* Link active work */ 

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
  linkWork.forEach(L=> L.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/