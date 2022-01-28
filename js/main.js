//----------------fixed-header-------------------//

$(window).scroll(function() {
    if ($(window).scrollTop() >= 75) {
        $('nav').addClass('fixed-header');
    } else {
        $('nav').removeClass('fixed-header');
    }
});
//----------------fixed-header-End-------------------//
// follow us carousel 
$('.follow-us-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            dots: true,
            loop: true
        }
    }
})

// webinar 
$('.webinar-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            }
        }
    })
    // agenda 
$('.agenda-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: true,
    dots: false,
    margin: 24,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            dots: false,
            loop: true
        }
    }
})

// company logo 

$('.company-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 4,
            nav: false
        },
        1000: {
            items: 6,
            nav: false,
            dots: true,
            loop: true
        }
    }
})

// video message js
$(document).ready(function() {

    let $slider = $(".slider");
    let sliderItem = $slider.children(".item.active");
    let i = $slider.children(".item");
    let ind = 0;

    $slider
        .children(".item")
        .each(function() {
            $(this).attr("data-index", ind++);
        });

    i.on("click", function(e) {
        const that = $(this);
        let dataIndex = that.data("index");
        $(".item").removeClass("active");
        that.addClass("active");
    });

});



// captcha js 
function get_action(form) {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
        document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
        return false;
    } else {
        document.getElementById('captcha').innerHTML = "Captcha completed";
        return true;
    }
}