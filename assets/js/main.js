;(function ($) {
  'use strict'

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // Login pop-up
  $(document).ready(function () {
    $('.signIn').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom',

      callbacks: {
        open: function () {
          $('body').css('overflow', 'hidden')
        },
        close: function () {
          $('body').css('overflow', '')
        },
      },
    })
  })
})(jQuery)

new Swiper('.swiper', {
  loop: true, // Turn on cycle scrolling
  autoplay: {
    delay: 0, // Set it to 0 to make it scroll without intervals
    disableOnInteraction: true, // Whether to stop auto-scrolling after user interaction
  },
  speed: 8000, // Scroll speed (ms) for smoother adjustments
  slidesPerView: 'auto', // Adapts to the size of the content
  spaceBetween: 30, // Slide spacing
  centeredSlides: true, // Center the current item
})
