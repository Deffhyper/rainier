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

    console.log(randomDigit(2,9));

    // initialize after construction
    this.init();


  }

  /**
   * Example method.
   */
  example() {
    console.log(this.message);
  };

  fullpagescroll(){
    $('#fullpage').fullpage();
  }

  bannerAnimation(){
    $('body').addClass('load');

    // top text animation
      const $menu = $('.header'),
            $topTitle = $('.screen-first__text h1'),
            $topSubTItle = $('.screen-first__text p'),
            $decor_1 = $('.decor-1'),
            $decor_2 = $('.decor-2'),
            $decor_3 = $('.decor-3'),
            $decor_4 = $('.decor-4'),
            $decor_5 = $('.decor-5'),
            $decor_6 = $('.decor-6'),
            $decor_7 = $('.decor-7'),
            $decor_8 = $('.decor-8');

      const tm = new TimelineLite({onComplete:this.parallaxAnimation});

      tm.from($decor_7, 1, {bottom: -240, ease:Expo.easeOut}, "time-one")
          .from($menu, .5, {top: -10, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.5")
          .from($topTitle, 1.25, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.3")
          .from($topSubTItle, 1.25, {top:-40, autoAlpha:0, ease:Expo.easeOut}, "time-one+=.6")

          .from($decor_5, 2.7, {right: -740, autoAlpha:0, ease:Expo.easeInOut}, "time-one")
          .from($decor_6, 2.7, {left: -1040, autoAlpha:0, ease:Expo.easeInOut}, "time-one")

          .from($decor_1, 2.5, {bottom: 200, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1")
          .from($decor_2, 3, {left: -100, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")
          .from($decor_3, 3, {left: -50, autoAlpha:0, ease:Expo.easeInOut}, "time-one+=1.2")
          .from($decor_8, 4, {left: -300, ease:Expo.easeInOut}, "time-one+=1")
          .from($decor_4, 3, {left: -50, autoAlpha:0, ease:Expo.easeInOut},"time-one+=1.2");
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

    function update(){
      let dx = mouse.x - cx;
      let dy = mouse.y - cy;

        TweenLite.to($('.decor-1'), 0, {
            x: dx / 10,
            y: dy / 12,
            ease: Power1.easeOut
        });

        TweenLite.to($('.decor-2'), 0, {
            x: dx / 14,
            y: dy / 12,
            ease: Power1.easeOut
        });

        TweenLite.to($('.decor-3'), 0, {
            x: dx / 10,
            y: dy / 12,
            ease: Power1.easeOut
        });

        TweenLite.to($('.decor-4'), 0, {
            x: dx / 20,
            y: dy / 12,
            ease: Power1.easeOut
        });

        TweenLite.to($('.decor-6'), 0, {
            x: dx / 40,
            y: dy / 20,
            ease: Power1.easeOut
        });

        TweenLite.to($('.decor-5'), 0, {
            x: dx / 40,
            y: dy / 20,
            ease: Power1.easeOut
        });



    }
  }


  /**
   * Initialize Home page scripts.
   */
  init() {
    this.example();
    // this.fullpagescroll();
    this.bannerAnimation();

  }
}
