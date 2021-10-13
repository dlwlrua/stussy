$(document).ready(function(){
      var swiper = new Swiper(".mySwiper", {
          loop: true,
        cssMode: true,
        autoplay:{
            delay: 3000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        mousewheel: {
            invert: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      // 아코디언 메뉴
      $('nav > ul > li > a').click(function(){
        // 클릭한 메뉴의 class속성에 active가 설정되어 있지 않으면
        if($(this).attr('class') != 'active'){
          // 모든 서브메뉴는 들어감
          $('.sub').slideUp();
          // 모든 메뉴의 active클래스 제거
          $('nav > ul > li > a').removeClass('active');
          // 현재 클릭한 메뉴의 형제객체(.sub)만 나옴
          $(this).next().slideDown();
          // 현재 클릭한 메뉴에만 active클래스 설정
          $(this).addClass('active');
          // 클릭한 메뉴의 class속성에 active가 설정되어 있으면
        }else{
          // 현재 클릭한 메뉴의 active클래스 제거
          $(this).removeClass('active');
          // 현재 클릭한 메뉴의 형제객체(.sub)만 들어감
          $(this).next().slideUp();
        }
      })
      // 메뉴 버튼
      $('.menu_btn').click(function(){
        $('.menu').animate({'right':0});
      });
      // 닫기 버튼
      $('.close').click(function(){
        $('.menu').animate({'right': '-100vw'});
      });

});