// Universal UI Fix: Force all UI plugins to initialize after window load, regardless of what theme.js does
jQuery(window).on('load', function() {
  // Gallery Masonry/Isotope
  jQuery('.gallery .ld-media-row, [data-liquid-masonry]').each(function(){
    var $grid = jQuery(this);
    if (typeof imagesLoaded === 'function' && typeof Isotope === 'function') {
      $grid.imagesLoaded(function(){
        $grid.isotope({
          itemSelector: '.masonry-item',
          layoutMode: 'packery'
        });
      });
    }
  });

  // Flickity sliders (if present)
  if (typeof Flickity === 'function') {
    jQuery('.flickity-slider, .carousel, .lqd-flickity').each(function(){
      var $carousel = jQuery(this);
      if (!$carousel.data('flickity')) {
        $carousel.flickity({
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          autoPlay: false
        });
      }
    });
  }

  // GSAP Animations (if present)
  if (typeof gsap === 'object' || typeof gsap === 'function') {
    jQuery('.gsap-animate').each(function(){
      gsap.fromTo(this, {opacity:0, y:40}, {opacity:1, y:0, duration:1});
    });
  }

  // Lity overlays (if present)
  if (typeof lity === 'function') {
    jQuery('[data-lity]').on('click', function(e){
      e.preventDefault();
      lity(this.href);
    });
  }
  // Fresco overlays (if present)
  if (typeof Fresco === 'object') {
    if (typeof Fresco.refresh === 'function') {
      Fresco.refresh();
    }
  }

  // Custom: trigger a global event for any other scripts to hook into
  jQuery(document).trigger('lqd-all-ui-loaded');
});
