
const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|ipad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  ani: function () {
      return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
      );
  }
};

if (isMobile.ani()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');

const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


//Прокрутка при клике

//Создаем массив ссылок для вызова

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


            //Здесь делаем закрытие при клике на ссылку

if (iconMenu.classList.contains('_active')) {
  document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
}

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}



$(function(){
$('.top__slider').slick({
  arrows:false,
  dots: true,
  autoplay: true,
  fade: true,

    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows:true,
            dots: false
      }
    },
  ]
});



$('.reviews__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll:1,

    responsive: [
    {
      breakpoint: 1141,
      settings: {
          slidesToShow: 3,
      }
    },
    
  
  
    {
      breakpoint: 806,
      settings: {
        arrows:true,
        dots: false,
          slidesToShow: 2,
      }
    },
 
    {
      breakpoint: 540,
      settings: {
        arrows:true,
        dots: false,
              slidesToShow: 1,
      }
    },
  ]

});

$('.menu__btn').on('click', function(){
$('.menu__list').toggleClass('menu__list--active');
});

});

// кнопка наверх
$(window).scroll(function() {
    let scrolled = $(window).scrollTop();
    
    if(scrolled > 300) {
      $('#back_to_top').addClass('active');
    }
    else {
      $('#back_to_top').removeClass('active');
    }
  });
  $('#back_to_top').click(function() {
    $('body,html').animate({scrollTop:0}, 2000)
  });


// для новой формы начало

$(document).ready(function() {
  $('.wave-btn').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.wrapper').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function() {
      $('.modal-wrapper').removeClass('open');
  })
});

// для новой формы конец









