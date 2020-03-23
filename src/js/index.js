import $ from 'jquery'
// import router from './modules/Router'
import '../scss/app.scss'
import Swiper from 'swiper';
// スワイパーのボタン使用の為必須
const mySwiper = new Swiper('.swiper-container', { // eslint-disable-line
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // スワイパーのスクロールバー使用の為必須
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// NEW LSテキスト表示処理// LS HISTORY表示処理________________
'use strict'
const $allText = $('.p-top__text--left, .p-top__text--right, .p-history__text--title, .p-story__title, .p-first__model__years');

$($allText).each(function() {
  //一文字ずつ<span>で括る
  $(this).children().addBack().contents().each(function() {
    if (this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
  });
  for (let i = 0; i <= $($allText).children('span').length; i++) {
    $('.p-top__text--left').children('span').eq(i).delay(100 * i).slideDown(1000).height(32);
    $('.p-top__text--right').children('span').eq(i).delay(200 * i).slideDown(2000).height(98);
  }
});
$(window).scroll(function() { // eslint-disable-line
  const $storyTextAll = $('.p-story__title'),
    windowScrollTop = $(window).scrollTop();

  for (let i = 0; i <= $($storyTextAll).children('span').length; i++) {
    if (windowScrollTop >= 2500) {
      $('.p-story__title').children('span').eq(i).delay(100 * i).slideDown(1000).height(35);
    }
    if (windowScrollTop >= 40) {
      $('.p-history__text--title').children('span').eq(i).delay(100 * i).slideDown(1000).height(35);
    }
  }
  // NEW LSテキスト表示処理// LS HISTORY表示処理_________________end
  // 伸びる縦棒の表示処理_______________________________________
  if (windowScrollTop >= 300) {
    $('.p-history__textCenter--line').slideDown(1300);
  }
  if (windowScrollTop >= 2700) {
    $('.p-story__textCenter--line').slideDown(1300);
  }
  // 伸びる縦棒の表示処理_______________________________________end
  // 伸びる縦棒下のテキスト表示処理_______________________________
  if (windowScrollTop >= 300) {
    $('.p-history__text--infoWrap').css('display', 'block');
  }
  if (windowScrollTop >= 2700) {
    $('.p-story__text--infoWrap').css('display', 'block');
  }
  // 伸びる縦棒下のテキスト表示処理________________________________end
  // スワイパー内の処理a--animation.cssと連動_____________________

  // 車画像フェードイン処理
  $('.swiper-top-image').css('visibility', 'hidden');
  if (windowScrollTop >= 900) {
    $('.swiper-top-image').addClass("fadeInDown")
  }
  if (windowScrollTop >= 1200) {
    $('.swiper-bottom-image').addClass("fadeInDown");
  }
  for (let i = 0; i <= $('.p-first__model__years').children('span').length; i++) {
    if (windowScrollTop >= 800) {
      $('.p-first__model__years').children('span').eq(i).delay(200 * i).height(142).slideDown(1000);
    }
  }
  // スワイパー内の処理a--animation.cssと連動_____________________end

  $('.p-story__img--innerTop').css('visibility', 'hidden');

  if (windowScrollTop >= 3350) {
    $('.p-story__img--innerTop').addClass("fadeInDown");
  }
  $('.p-story__img--innerMiddle').css('visibility', 'hidden');
  if (windowScrollTop >= 5000) {
    $('.p-story__img--innerMiddle').addClass("fadeInDown");
  }
  $('.p-story__img--innerBottom').css('visibility', 'hidden');
  if (windowScrollTop >= 6500) {
    $('.p-story__img--innerBottom').addClass("fadeInDown");
  }
});
$('.c-accordion__container').hide();
$('.c-accordion__btn').click(function() {
  $('.c-accordion__container').slideToggle();
  $(this).toggleClass('open');
});
