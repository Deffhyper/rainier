/**
 * Home page scripts.
 *
 * @module Home
 */

import { Resp } from '../modules/dev/_helpers';
import {randomDigit} from '../modules/dev/_helpers';

export default class Home {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  constructor() {
    this.message = do {
      const message = 'Home page scripts initialized on';

      if (Resp.isDesk) {
        `${message} Desktop`;
      } else if (Resp.isTablet) {
        `${message} Tablet`;
      } else if (Resp.isMobile) {
        `${message} Mobile`;
      }
    };

    this.selector = {
      $menu: $('.header'),
      $topTitle: $('.screen__text h1'),
      $topSubTItle: $('.screen__text p'),
      $scr_sun: $('#scr_sun'),
      $scr_cloud: $('#scr_cloud'),
      $scr_cloud_r: $('#scr_cloud_r'),
      $scr_cloud_l: $('#scr_cloud_l'),
      $scr_b_small: $('.scr_b_small'),
      $scr_b_big: $('.scr_b_big'),
      $scr_m_right: $('#scr_m_right'),
      $scr_m_left: $('.fs-dec-1'),
      $scr_ground: $('#first_stage_svg'),
      $scr_truck: $('#scr_truck'),
      $scr_snow: $('.fs-dec-3'),

      $st_second_text: $('.screen-second .text-block > *')



    };


    // initialize after construction
    this.init();
  }

  console(){

      console.log('console');

  }




  fullpagescroll(){
      let scrollFlag = true;

    $('#fullpage').fullpage({
        // paddingTop: '100px',
        onLeave: (index, nextIndex, direction)=>{

            if(index == 1 && direction =='down'&& scrollFlag){

                const tm = new TimelineLite({onComplete: ()=>{
                        this.citiesTabParallaxAnimation();
                }});

                tm.to($('#smartDot'), 1, {
                        scale: 400,
                        ease: Expo.easeOut
                    })
                    .add(()=> scrollFlag = false)
                    .add(()=> $('#scrollDown').addClass('active'))
                    .to($('.screen-second .text-block > *'),0,{
                        opacity: 0,
                        y: -15,
                    })
                    .to($('#smartDot'), 1,{
                        scale: 0,
                        top: "auto",
                        bottom: "30px",
                        left: "30px",
                        ease:Expo.easeOut
                    })
                    .staggerTo($('.screen-second .text-block > *'), 1, {
                        opacity: 1,
                        y: 0,
                        ease:Expo.easeInOut
                    }, 0.1, "-=1")
                    .from($('.decor_truck'), 1.5, {
                        x: -300,
                        ease:Expo.easeInOut
                    }, "-=1.7");

            } else if(index == 1 && direction =='up'){
                this.bannerAnimation();
            }

        }
    });
  }

  bannerAnimation(){
      if(!$('body').hasClass('load')){
          $('body').addClass('load');
      }
      const tm = new TimelineLite({onComplete: ()=>{
              this.parallaxAnimation();
              this.fullScreenDotApped();
              $('body').addClass('mainAnimationOver');
              this.fullpagescroll();
          }});
      tm.from(this.selector.$scr_ground, 2, {bottom: -500, ease:Expo.easeOut}, "time-one")
          .from(this.selector.$menu, .5, {top: -10, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.5")
          .from(this.selector.$topTitle, 2, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.3")
          .from(this.selector.$topSubTItle, 2, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.6")

          .from(this.selector.$scr_m_right, 2.7, {xPercent: "200%", ease:Expo.easeInOut}, "time-one")
          .from(this.selector.$scr_m_left, 2.7, {xPercent: "-200%", ease:Expo.easeInOut}, "time-one")


          .from(this.selector.$scr_sun, 4, {attr:{cx: 1500, cy: 300},  autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1")
          .from(this.selector.$scr_cloud, 4, {x:100, y:60, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")

          .from(this.selector.$scr_cloud_r, 4, {xPercent: "-100%", autoAlpha:0, ease:Expo.easeInOut}, "time-one+=.4")
          .from(this.selector.$scr_cloud_l, 4, {xPercent: "-100%", autoAlpha:0, ease:Expo.easeInOut}, "time-one+=.4")

          .from(this.selector.$scr_b_small, 4, {left: -50, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=.2")
          .from(this.selector.$scr_truck, 4, {xPercent: "-400%", zIndex:100, ease:Expo.easeInOut}, "time-one+=.2")
          .from(this.selector.$scr_b_big, 3, {left: -50, autoAlpha:0, ease:Expo.easeInOut},"time-one+=1.2")
          .from(this.selector.$scr_snow, 1, {autoAlpha:0, ease:Expo.easeInOut},"-=2");
  }

  parallaxAnimation(){
    let request = null;
    let mouse = { x: 0, y: 0 };
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    $('body').on('mousemove', function(event){
      mouse.x = event.pageX;
      mouse.y = event.pageY;
      cancelAnimationFrame(request);
      request = requestAnimationFrame(update);
    });

    const update = ()=> {
      let dx = mouse.x - cx;
      let dy = mouse.y - cy;

        TweenLite.to(this.selector.$scr_sun, .5, {
            x: dx / 10,
            y: dy / 15,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_cloud, .5, {
            x: dx / 14,
            y: dy / 15,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_b_small, .5, {
            x: dx / 10,
            y: dy / 15,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_b_big, .5, {
            x: dx / 20,
            y: dy / 15,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_m_left, .5, {
            x: dx / 40,
            y: dy / 30,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_m_right, .5, {
            x: dx / 40,
            y: dy / 30,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_snow, .5, {
            x: dx / 40,
            y: dy / 30,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_cloud_r, .5, {
            x: dx / 10,
            y: dy / 15,
            ease: Power1.easeOut
        });
        TweenLite.to(this.selector.$scr_cloud_l, .5, {
            x: dx / 14,
            y: dy / 15,
            ease: Power1.easeOut
        });
    }
  }


    fullScreenDotApped() {
        const $dot = $('.dot-first a');
        let smartDot = $('<div/>', {
            id: 'smartDot',
            css: {
                position: "fixed",
                top: $dot.offset().top,
                left: $dot.offset().left,
            }
        });
        $('body').append(smartDot);
    }

    citiesTabParallaxAnimation(){
        let request = null;
        let mouse = { x: 0, y: 0 };
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;

        $('body').on('mousemove', function(event){
            mouse.x = event.pageX;
            mouse.y = event.pageY;
            cancelAnimationFrame(request);
            request = requestAnimationFrame(update);
        });

        const update = ()=> {
            let dx = mouse.x - cx;
            let dy = mouse.y - cy;

            TweenLite.to($('.canada_bg, .america_bg, .mexica_bg'), .5, {
                x: dx / 40,
                y: dy / 70,
                ease: Power1.easeOut
            });
            TweenLite.to($('.canada_clouds, .america_clouds_sun, .mexica_clouds'), .5, {
                x: dx / 30,
                y: dy / 70,
                ease: Power1.easeOut
            });
            TweenLite.to($('.canada_forest, .america_buildings, .mexica_buildings'), .5, {
                x: dx / 20,
                y: dy / 70,
                ease: Power1.easeOut
            });
            TweenLite.to($('.canada_ground, .america_ground, .mexica_ground'), .5, {
                x: dx / 50,
                y: dy / 50,
                ease: Power1.easeOut
            });
            TweenLite.to($('.canada_truck, .america_truck, .mexica_truck'), .5, {
                x: dx / 50,
                y: dy / 60,
                ease: Power1.easeOut
            });
        }
    }

    tabSwith(){
      $('.tabs-nav').find('li').on('click', function () {
        let index = $(this).index();
        const tl = new TimelineLite();
          if (!$(this).hasClass('active')) {
              tl.to($('.cities-tab .decor_tabs_wrapper'), .5, {
                  opacity: 0,
                  x: 50,
                  ease: Power1.easeOut
              })
                  .to($('.decor_truck'), .1, {
                      opacity: 0,
                      ease: Power1.easeOut
                  }, "-=.5")
                  .add(() => {
                      checkTab()
                  })
                  .to($('.decor_truck'), 0, {
                      x: -300,
                      opacity: 0,
                  },"-=1")
                  .to($('.cities-tab .decor_tabs_wrapper'), .5, {
                      opacity: 1,
                      x: 0,
                      ease: Power1.easeOut
                  })
                  .to($('.decor_truck'), 2, {
                      opacity: 1,
                      x: 0,
                      ease: Expo.easeOut
                  }, "-=.5");
        }

        const checkTab = ()=>{
            $(this).addClass('active').siblings().removeClass('active');
            $('.cities-tabs-wrapper').find('.cities-tab').eq(index).addClass('active').siblings().removeClass('active');

            let elem = $('.tabs-nav').find('li.active');
            let offsetLeft = elem.offset().left;
            let elemWidthHalf = elem.innerWidth()/7;

            $('.tabs-label').css({
                left: offsetLeft+elemWidthHalf
            });
        }

      });
    }

    checkTsbLabel(){
      let elem = $('.tabs-nav').find('li.active');
      let offsetLeft = elem.offset().left;
      let elemWidthHalf = elem.innerWidth()/7;

        $('.tabs-label').css({
            left: offsetLeft+elemWidthHalf
        });
    }

    scrollDownArrow(){
        $(document).on('click', '#scrollDown', function(){
            $.fn.fullpage.moveSectionDown();
        });
    }

    modalInit(){

        $('[data-target="modal"]').click(function (event) {
            event.preventDefault();

            let current = $(this).data('modal');

            alert(current);
        });

        //     $('#overlay').fadeIn(400,
        //         function () {
        //             $('#modal_form')
        //                 .css('display', 'block')
        //                 .animate({opacity: 1, top: '50%'}, 200);
        //         });
        // });
        //
        // $('#modal_close, #overlay').click(function () {
        //     $('#modal_form')
        //         .animate({opacity: 0, top: '45%'}, 200,
        //             function () {
        //                 $(this).css('display', 'none');
        //                 $('#overlay').fadeOut(400);
        //             }
        //         );
        // });

    };


  openMobMrnu(){
      $('.mob-menu-trigger').on('click', function () {

          const tm = new TimelineLite();

          tm.to($('.header-nav'), .5, {
              left: 0,
              ease: Expo.easeOut
          }).add(()=>{$('.header').addClass('mob-menu-open')});
      });
  }

  closeMobMenu(){
      $('.mob-close-menu').on('click', function (e) {
          e.preventDefault();
          const tm = new TimelineLite();
          tm.to($('.header-nav'), 0, {
              left: -380,
              ease: Expo.easeOut
          }).add(()=>{$('.header').removeClass('mob-menu-open')});
      })
  }





  /**
   * Initialize Home page scripts.
   */
  init(){
    this.bannerAnimation();
    this.tabSwith();
    this.scrollDownArrow();
    this.checkTsbLabel();
    this.modalInit();
    this.openMobMrnu();
    this.closeMobMenu();
  }
}
