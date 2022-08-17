$(function(){


// <!-- ドロワーメニューの利用宣言 -->
  $(document).ready(function() {
  $('.drawer').drawer();
});



//   スムーススクロール //

  
  var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#js-header'
  });

  // スワイパー


  var swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 400,
    spaceBetween: 24,
    width: 274,
    loopedSlides: 6,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
          breakpoints: {//breakpoints
            768: {
              spaceBetween: 40,
			      	width: 400,
            }
          }
  });

// ドロワーメニュー

$(function() {
  $(".drawer-toggle").click(function() {
    // cssで背景色を切り替え
    $(".header__title").toggleClass("is-pc");
    $(".floating").toggleClass("is-pc");
    $(".header__inner").toggleClass("is-transparent");
  });
});


  $('.header__nav__item__link').on('click',function(){
    $('.drawer-toggle').trigger("click");
  })


  //フローティングアイテム

  jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.floating').show();
    } else {
      jQuery('.floating').hide();
    }
  });
  
  jQuery('.floating').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //アコーディオン
  $(function(){
    $('.accordion_one .ac_header').click(function(){
      $(this).next('.ac_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });
  


  //wowjs
 new WOW().init()

 //formの入力確認
let $submit = $('#form-submit,#top-button')
$(' #js-form input, #js-form textarea').on('change', function() {
  if(
    $( '#js-form input[name="entry.846442754"]').val() !== "" &&
    $( '#js-form input[name="entry.1883602457"]').val() !== "" &&
    $( '#js-form input[name="entry.2082896637"]').prop( 'checked') === true
  ) {
    $submit.prop ( 'disabled',false)
    $submit.addClass ( '-active')
  } else {
    $submit.prop ( 'disabled',true)
    $submit.removeClass( '-active')
  }
  }) 

 //googleform
 let $form = $( '#js-form' )
 $form.submit(function(e) { 
  console.log('ほげほげ'); //クリックイベントが走っているか確認する
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error' ).slideDown()

      }
    } 
  });
  return false; 
  }); 

})