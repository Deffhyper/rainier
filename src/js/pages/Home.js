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
      $topTitle: $('.screen-first__text h1'),
      $topSubTItle: $('.screen-first__text p'),
      $scr_sun: $('#scr_sun'),
      $scr_cloud: $('#scr_cloud'),
      $scr_cloud_r: $('#scr_cloud_r'),
      $scr_cloud_l: $('#scr_cloud_l'),
      $scr_b_small: $('.scr_b_small'),
      $scr_b_big: $('.scr_b_big'),
      $scr_m_right: $('#scr_m_right'),
      $scr_m_left: $('.fs-dec-1'),
      $scr_ground: $('.screen-first__imgs svg'),
      $scr_truck: $('#scr_truck'),
      $scr_snow: $('.fs-dec-3'),
      $scr_tree: $('.scr_tree')
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
        paddingTop: '100px',
        onLeave: function(index, nextIndex, direction){

            if(index == 1 && direction =='down'&& scrollFlag){

                TweenLite.to($('#smartDot'), 1, {
                    scale: 400,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        scrollFlag = false;
                        $('#scrollDown').addClass('active');
                        TweenLite.to($('#smartDot'), 1,{
                            scale: 0,
                            top: "auto",
                            bottom: "30px",
                            left: "30px",
                            ease:Expo.easeOut
                        });
                    }
                });



            }

        }
    });
  }

  bannerAnimation(){
    $('body').addClass('load');

      const tm = new TimelineLite({onComplete: ()=>{
              this.parallaxAnimation();
              this.fullScreenDotApped();
              $('body').addClass('mainAnimationOver');
              this.fullpagescroll();
          }});
      tm.from(this.selector.$scr_ground, 3, {bottom: -240, ease:Expo.easeOut}, "time-one")
          .from(this.selector.$menu, .5, {top: -10, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.5")
          .from(this.selector.$topTitle, 1.25, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.3")
          .from(this.selector.$topSubTItle, 1.25, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.6")

          .from(this.selector.$scr_m_right, 2.7, {xPercent: "200%", ease:Expo.easeInOut}, "time-one")
          .from(this.selector.$scr_m_left, 2.7, {xPercent: "-200%", ease:Expo.easeInOut}, "time-one")
          .from(this.selector.$scr_tree, 2.7, {x:100, y:60, autoAlpha:0, ease:Expo.easeInOut}, "time-one")

          .from(this.selector.$scr_sun, 4, {attr:{cx: 1500, cy: 300},  autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1")
          .from(this.selector.$scr_cloud, 4, {x:100, y:60, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")

          .from(this.selector.$scr_cloud_r, 4, {xPercent: "-100%", autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")
          .from(this.selector.$scr_cloud_l, 4, {xPercent: "-100%", autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")

          .from(this.selector.$scr_b_small, 4, {left: -50, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")
          .from(this.selector.$scr_truck, 4, {xPercent: "-400%", zIndex:100, ease:Expo.easeInOut}, "time-one+=1")
          .from(this.selector.$scr_b_big, 3, {left: -50, autoAlpha:0, ease:Expo.easeInOut},"time-one+=1.2")
          .from(this.selector.$scr_snow, 1, {autoAlpha:0, ease:Expo.easeInOut},"-=2");
      return tm;
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



  /**
   * Initialize Home page scripts.
   */
  init() {
    this.bannerAnimation();

  }
}
