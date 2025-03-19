;(function ($) {
  'use strict'

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // 滚动吸顶
  // $(window).on('scroll', function () {
  //   let scrollY = window.scrollY
  //   let $sticky = $('#sticky')
  //   let $scrollArea = $('.scroll-area')

  //   const offset = 150

  //   let stickyHeight = $sticky.outerHeight() // 获取 .videos 的高度
  //   let areaTop = $scrollArea.offset().top - offset // 获取 .scroll-area 的顶部距离
  //   let areaHeight = $scrollArea.outerHeight() // 获取 .scroll-area 的高度
  //   let areaBottom = areaTop + areaHeight - stickyHeight // 计算 .scroll-area 的底部距离
  //   // console.log("sticky 高度:", stickyHeight);
  //   // console.log("sticky 高度:", stickyHeight);
  //   // console.log("areaTop:", scrollY, areaBottom, scrollY >= areaBottom);

  //   if (scrollY > areaTop && scrollY < areaBottom) {
  //     // 在 .scroll-area 范围内，固定吸顶
  //     $sticky.addClass('active').css({ position: 'fixed', top: offset + 'px', bottom: 'auto' })
  //   } else if (scrollY >= areaBottom) {
  //     // 超过 .scroll-area，跟随滚动
  //     $sticky.removeClass('active').css({ position: 'absolute', top: 'auto', bottom: 0 })
  //   } else {
  //     // 低于 .scroll-area，取消固定
  //     $sticky.removeClass('active').css({ position: '', top: '' })
  //   }
  // })


  // 登录弹窗
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
        open: function() {
            $('body').css('overflow', 'hidden');
        },
        close: function() {
            $('body').css('overflow', '');
        }
    }
    })
  })
})(jQuery)

new Swiper('.swiper', {
  loop: true, // 开启循环滚动
  autoplay: {
    delay: 0, // 设置为 0 使其无间隔滚动
    disableOnInteraction: true, // 用户交互后是否停止自动滚动
  },
  speed: 8000, // 滚动速度（ms），调整更流畅
  slidesPerView: 'auto', // 适应内容大小
  spaceBetween: 30, // 幻灯片间距
  centeredSlides: true, // 使当前项居中
})