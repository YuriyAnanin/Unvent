//Слайдер сертификатов
$(function () {
    var title_slider = $('.js_title_slider'); 
    title_slider.slick({
        dots:  false,
        speed: 300,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true 
    })
});

//Выпадающее меню
$(function () {
    var btn = $('.js_open_menu'), 
        menu = $('.js_menu'), 
        body = $('body'),
        close_btn = $('.js_close_menu');
     
    btn.click(function () {
        menu.addClass('is-active'); 
    });

    close_btn.click(function () {
        menu.removeClass('is-active');
    });
});

// Попап Карты
$(function () {
    $('.js_map_popup').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-with-anim',
        removalDelay: 300,
        tClose: 'Закрыть (Esc)',
        midClick: true,
        callbacks: {
            open: function () { 
                DG.then(function () {
                    var mainIcon = DG.icon({
                        iconUrl: '/img/map-i.png', 
                        iconSize: [24, 30],
                        iconAnchor: [0, 0]
                    });  

                    var map = DG.map('map', {  
                        center: [43.226260, 76.884151],
                        zoom: 16,
                        scrollWheelZoom: false,
                        fullscreenControl: false
                    }); 
                    DG.marker([43.226260, 76.884151], { icon: mainIcon, riseOnHover: true }) 
                        .addTo(map)
                })
            },
        }
    });
});

$(function () {
    $('.js_title_popup').magnificPopup({   
        type: 'inline', 
        mainClass: 'mfp-with-anim',
        removalDelay: 300,
        tClose: 'Закрыть (Esc)',  
        midClick: true,
        autoFocusLast: false,
    });
});

$(function () {
    $('.js_zoom_img').zoom({  
        on: 'click',  
        magnify: '0.5'  
    });

    $('.js_zoom_img').click(function () {
        console.log("Hello");  
        $(this).toggleClass('is-active');
    }) 
})

