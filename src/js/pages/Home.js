/**
 * Home page scripts.
 *
 * @module Home
 */

import { Resp } from '../modules/dev/_helpers';

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
    $('#fullpage').fullpage({
      anchors:['fp-1', 'fp-2']
    });
  }

  bannerAnimation(){

    // top text animation

    TweenMax.to($('.screen-first__text h1'), 1, {delay:.3, top:0, autoAlpha:1, ease:Power4.easeOut});
    TweenMax.to($('.screen-first__text p'), 1.5, {delay:.7, top:0, autoAlpha:1, ease:Back.easeOut});

    TweenMax.to($('.decor-1'), 1,  {delay: .4, bottom:290, ease:Back.easeOut});
    TweenMax.to($('.decor-2'), 1,  {delay: .4, left:240, autoAlpha:1, ease:Back.easeOut});
    TweenMax.to($('.decor-3'), 1,  {delay: .5, left:640, autoAlpha:1, ease:Back.easeOut});
    TweenMax.to($('.decor-4'), 1,  {delay: .8, left:600, autoAlpha:1, ease:Back.easeOut});
    TweenMax.to($('.decor-6'), 1.2,  {left:0, ease:Power4.easeOut});
    TweenMax.to($('.decor-5'), 1.4, {right:0, ease:Power4.easeOut});
    TweenMax.to($('.decor-8'), 1.9, {left: 600, ease:Power4.easeOut});
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




      $('.decor').each(function (index) {
        TweenLite.to($(this), 1, {
          x: dx/index+10,
          y: dy/index+10,
          ease:Power2.easeOut
        });
      })


    }
  }


  /**
   * Initialize Home page scripts.
   */
  init() {
    this.example();
    // this.fullpagescroll();
    this.bannerAnimation();
    this.parallaxAnimation();
  }
}
