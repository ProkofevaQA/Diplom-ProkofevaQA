$(document).ready(function () {
  /*Burger*/
  $('#nav-menu-burger').on('click', function () {
    $(this)[0].classList.toggle("change");
    $('.menu-list').slideToggle(800, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });
  });

  /*Gallery*/
  $('.img-gallery').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  /*Smooth Scroll*/
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    navElement = $(elementClick)
    if (navElement.length) {
      destination = navElement.offset().top;
      if ($.browser.safari) {
        $('body').animate({ scrollTop: destination }, 800);
      } else {
        $('html').animate({ scrollTop: destination }, 800);
      }
    }
    
    return false;
  });

  /*Masks*/
  $("#form_phone").mask("8(999) 999-9999");
  $("#info-phone").mask("8(999) 999-9999");
});

/*Popup*/
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll('.close-popup');

let unlock = true;

const timeout = 800;

console.log(popupLinks.length)
popupLinks.forEach(popuplink => popuplink.addEventListener('click', function (e) {
  const popupName = popuplink.getAttribute('href').replace('#', '');
  const curentPopup = document.getElementById(popupName);
  popupOpen(curentPopup);
  e.preventDefault();
}))

console.log(popupCloseIcon.length)
popupCloseIcon.forEach(icon => icon.addEventListener('click', function (e) {
  popupClose(icon.closest('.popup'));
  e.preventDefault();
}))

function popupOpen(curentPopup) {
  $('body').css('overflow','hidden')
  curentPopup.classList.add('open');
  curentPopup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__content')) {
      popupClose(e.target.closest('.popup'));
    }
  });
}

function popupClose(popupActive, dounlock = true) {
  $('body').css('overflow','auto')
  popupActive.classList.remove('open');
}

/*Close Esc*/
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
