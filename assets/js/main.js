
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


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/