$(document).ready(function() {
    
    $('#top_slider, #gal').lightSlider({
        item:1,
        slideMove:1,
        speed:1200,
        mode: 'fade',
        pauseOnHover: true,
        auto: true,
        loop:true
    });
    $('#partners').lightSlider({
        item:6,
        slideMove:3,
        speed:1200,
        // mode: 'fade',
        pauseOnHover: true,
        auto: true,
        loop:true,
        responsive : [
            {
                breakpoint:960,
                settings: {
                    item:5,
                    slideMove:2
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:3,
                    slideMove:1
                  }
            }
        ]
    });
    $('.js-gal a').featherlightGallery({
		gallery: {
            fadeIn: 300,
            fadeOut: 300,
            next: ' »',
            previous: '« '
        },
        openSpeed:    300,
        closeSpeed:   300,
        afterContent: function(event){
            //this.$content.parent().fadeTo(0, 0);
            // this.$content.parent().removeClass('xxxx');
            this.$content.closest('.featherlight').removeClass('preload');
        },
        beforeContent: function(event){
            console.log(this); // this contains all related elements
            this.$instance.addClass('preload');
            // this.$content.addClass('xxx');
            //this.$content.parent().fadeTo(this.galleryFadeIn, 1);
       }
	});
})