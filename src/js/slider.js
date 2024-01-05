import $ from "jquery";
import "slick-carousel";

$(".main__slider").slick({
  arrows: false,
  dots: true,
});


$(".reviews__slider").slick({
  slidesToShow: 3,
  nextArrow: '<button class="reviews__slider-nextBtn"><img class="reviews__slider-nextArrow" src="assets/images/assets/icons/next-arrow.svg" alt=""></button>',
  prevArrow: '<button class="reviews__slider-prevBtn"><img class="reviews__slider-prevArrow" src="assets/images/assets/icons/prev-arrow.svg" alt=""></button>'
})