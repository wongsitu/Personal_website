
$(document).ready(function(){
    $(document).on("scroll", onScroll);

//--------------------------------------------

    $(function(){
        var images = ['#imgone', '#imgtwo', '#imgthree', '#imgfour','#imgfive'],
            imgIx = 0;
    
        (function nextImage(){
            $(images[imgIx++] || images[imgIx = 0, imgIx++]).attr({width:"100%",height:"100%"}).fadeIn().delay(3500).fadeOut(nextImage);
        })();
    });

//--------------------------------------------

    $('nav ul a').on('click', function(e) {
        // prevent the standard link operation on click
        e.preventDefault();
        // use the href of the link to identify what
        // section to scroll to
        var thisTarget = $(this).attr("href");
            // get that section's top offset
            var targetOffset = $(thisTarget).offset().top;
        // use jQuery.animate() to animate the body's
        // scrollTop to the targetOffest
        $('html, body').animate({
            scrollTop: targetOffset
        }, 700);
    });
//--------------------------------------------

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#mainNav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#mainNav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
//--------------------------------------------
    
    if( ! $('#myCanvas').tagcanvas({
        textColour : '#ffffff',
        outlineThickness : 1,
        maxSpeed : 0.03,
        depth : 0.75
    })) {
        // TagCanvas failed to load
        $('#myCanvasContainer').hide();
    }

});


