/*Вывод прайса на печать*/
$(document).ready(function () {
    $('.print_bat').click(function (event) {
        event.preventDefault();
        $(this).parents('.table-price').addClass('printing');
        window.print();
    });

    $('.slider-sale-item').setMaxHeights()
});

/*Расшариваем ресурсы. social buttons. Added Rising13*/
Share = {
    vkontakte: function (purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function (purl, text) {
        url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function (purl, ptitle, pimg, text) {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function (purl, ptitle) {
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    mailru: function (purl, ptitle, pimg, text) {
        url = 'http://connect.mail.ru/share?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl=' + encodeURIComponent(pimg);
        Share.popup(url)
    },

    googleplus: function (purl) {
        url = 'https://plus.google.com/share?';
        url += 'url=' + encodeURIComponent(purl);
        Share.popup(url)
    },

    popup: function (url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};


$(document).ready(function () {
    //добавление поля для промежуточной точки
    function intermediatePoint() {
        var itemInput = 1;

        $('.form-transfer').on('click', '.form-transfer__add-point', function () {
            var cloneWrap = $('.clone-wrap:first').clone(true);
            var delAddress = '<div class="del-adress">отменить</div>';
            var input = cloneWrap.find('input');

            if (itemInput = 1) {
                cloneWrap.append(delAddress);
            }

            input.attr('name', function () {
                itemInput++;
                return 'address' + itemInput;
            });
            input.val('');
            cloneWrap.appendTo('#add-input');
        });


        $('.form-transfer').on('click', '.del-adress', function () {
            $(this).parent('.clone-wrap').remove();
        });

    }

    intermediatePoint();

    $(".datepicker").datepicker({
        weekStart: 1,
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        format: 'dd/mm/yyyy',
        autoPick: true
    });

    /*Раскрываем левое меню*/
    $('.main-menu-left ul.dropdown li.active').parents('li').addClass('active');
    $('.main-menu-left li.active > ul.dropdown').show();
    $('.main-menu-left li.active > .wrap > span').addClass('uk-icon-angle-up');
    $('.main-menu-left li.active > .wrap > span').addClass('uk-icon-angle-up');


    /*цвет блока availability*/
    function availabilityColor() {
        $('span.in-stock').parent().css({"color": "#1bcc7b"});
        $('span.reservation').parent().css({"color": "#e2821b"});
        $('span.not-available').parent().css({"color": "#e51528"});
    }

    availabilityColor();

    /*определение высоты элемента каталога*/
    var elCard = $('.outside-product:first').children();

    //верхний и нижний отступы + border
    var sumHeight = 0;

    elCard.each(function (i, item) {
        sumHeight += item.clientHeight;
    });

    sumHeight += "px";

    $('.preview-product-element').css({"height": sumHeight});

    /*стрелки в меню + активный верхний пункт*/
    $('ul.menu-sub').parent('li').addClass('nav-arrow');
    $('li.active').parents('li').addClass('active');


    //цветные изображения при ховере
    function hoverColorImg(target, dataName) {
        var newSrc, src, oldSrc, thisImg;

        $(document).on('mouseenter', target, function () {
            thisImg = $(this).find('img');
            newSrc = thisImg.attr(dataName);
            oldSrc = thisImg.attr('src');
            src = thisImg.attr('src', newSrc);
        });

        $(document).on('mouseleave', target, function () {
            thisImg.attr('src', oldSrc);
        });

        if ($(window).width() <= 768 && !~target.indexOf('footer')) {

            $(target).each(function () {
                thisImg = $(this).find('img');
                newSrc = thisImg.attr(dataName);
                src = thisImg.attr('src', newSrc);
            });
        }
    }

    hoverColorImg('div.company-element', 'data-srchover');
    hoverColorImg('.footer-var-1 div.footer-top div.social a', 'data-src_soc_icon_bottom');
    hoverColorImg('.footer .develop a', 'data-srchover');


    function flexMenuTxt(header) {
        $(header + ' #menu-flex').flexMenu({
            linkText: "• • •"
        });
    }

    setTimeout(function () {
        flexMenuTxt('.header-top-var-1');
        flexMenuTxt('.header-top-var-2');
        flexMenuTxt('.header-top-var-1_1');
        flexMenuTxt('.header-top-var-1_2');
        flexMenuTxt('.header-top-var-1_3');
        flexMenuTxt('.header-top-var-1_4');
        flexMenuTxt('.header-top-var-2_1');
        flexMenuTxt('.header-top-var-2_2');
        flexMenuTxt('.header-top-var-2_3');
        flexMenuTxt('.header-top-var-3_1');
        flexMenuTxt('.header-top-var-3_2');
        flexMenuTxt('.header-top-var-4_1');
        flexMenuTxt('.header-top-var-4_2');
        flexMenuTxt('.header-top-var-4_3');
        flexMenuTxt('.header-top-var-4_4');
        flexMenuTxt('.header-top-var-4_5');
        flexMenuTxt('.header-top-var-5_1');
        flexMenuTxt('.header-top-var-5_2');
        flexMenuTxt('.header-top-var-5_3');
        flexMenuTxt('.header-top-var-5_4');
        flexMenuTxt('.header-top-var-6_1');
        flexMenuTxt('.header-top-var-6_2');
        flexMenuTxt('.header-top-var-6_3');
        flexMenuTxt('.header-top-var-7_1');
        flexMenuTxt('.header-top-var-7_2');

        $('#menu-flex').flexMenu({
            linkText: "Ещё"
        });

        $('#menu-flex-scroll, #header-trim-nav').flexMenu({
            linkText: "Меню"
        });

        $('.header-variable-2__nav .menu').flexMenu({
            linkText: "• • •"
        });

        // $('.wrap-menu, #menu-flex-scroll, .header-top-var-7_1, .header-top-var-7_2').css({"opacity": "1"});
    }, 0);

    if ($(document).width() < 1025) {
        $('.wrap-menu').css({"opacity": "1"});
    }


    //перемещение корзины в мобильный хеадер
    if ($('.flex-center-bar #shopCart').length && $(window).width() <= 1024) {
        var cart = $('#shopCart');

        cart.appendTo($('.search-wrap'));
    }

    // -------------------------------------------------------------------------------

    //определение расширения файла
    function fileType(el, target) {
        if (el.length) {
            el.each(function () {
                var text = $(this).attr('href'),
                    arr = text.split('.'),
                    extention = arr[arr.length - 1];

                $(this).parents(target).addClass(extention);
            });
        }
    }

    fileType($('a[download]'), '.card-documents__el');

    //выпадающая корзина в header
    $(".scroll-floating-basket-items, .side-basket tbody").mCustomScrollbar({
        axis: "y",
        scrollInertia: 300,
        scrollbarPosition: "outside",
        mouseWheel: {preventDefault: true}
    });

    var leaveBasket = true;

    function checkLeaveBasket() {
        setTimeout(function () {
            if (leaveBasket) {
                $('.basket-under-header').removeClass('active');
            }
        }, 500);
    }

    $('body').on('mouseenter', '#cartInner, .basket-under-header', function () {
        leaveBasket = false;
        $('.basket-under-header').addClass('active');
    });

    $('body').on('mouseleave', '#cartInner, .basket-under-header', function () {
        leaveBasket = true;
        checkLeaveBasket();
    });


    //боковая плавающая корзина-----------------------
    //отключение выпадающей корзины в header
    if ($('.side-basket').hasClass('enabled')) {
        $('.basket-under-header').remove();
    }

    $('.side-basket__label').on('click', function () {
        $('.side-basket').toggleClass('show');
    });

    $(document).on('click', function (e) {
        if ($('.side-basket.enabled').hasClass('show')
            && !$(e.target).closest('.side-basket').length) {
            e.preventDefault();
            $('.side-basket').removeClass('show');
        }
    });


    //обрезка текста по длине
    function cropText(item, size) {

        item.each(function () {
            var newsText = $(this).text();
            if (newsText.length > size) {
                $(this).text(newsText.slice(0, size) + '...');
            }
        });
    }

    cropText($('.side-basket__lnk'), 62);



    //вычисляем top для заголовка услуг
    if ($(document).width() > 1025) {
        servicesTop();

        $(document).on('click', '.services-main .view-more', function () {
            setTimeout(function () {
                servicesTop();
            }, 500);
        });
    }

    function servicesTop() {
        $('div.services-element div.content').each(function (i, item) {
            var topPosition = $(this).position().top + "px";
            $(this).css({"top": topPosition});
        });
    }

    if ($(document).width() < 1025) {
        $('.dignity-main-element').setMaxHeights();

    }

    //вычисляем bottom и right для выполненых проектов
    //задержка задана из-за слайдера
    setTimeout(function () {
        $('div.completed-project-content').each(function (i, item) {

            var projectBottom = $(this).prev().height() - $(this).height() + "px";

            //-1px из-за дробной части в пикселях
            var projectRight = $(this).prev().outerWidth() - $(this).outerWidth() - 1 + "px";

            $(this).css({"bottom": projectBottom, "right": projectRight});
        });
    }, 500);

    //отмена центрирования при переполнении контента услуг
    function overflowInfo(el, maxHeight) {
        $(el).each(function (i, item) {

            var innerBlocks = $(this).children();
            var infoHeight = 0;

            innerBlocks.each(function () {
                infoHeight += $(this).outerHeight(true);
            });

            if (infoHeight > maxHeight) {
                $(this).addClass('flex-start');
            }
        });
    }

    overflowInfo('.projects-page .completed-projects-slider__info', 159);
    overflowInfo('.catalog-element__info', 122);


    //scroll-menu
    function scrollMenu() {
        var showPosition = $('.header').outerHeight() - $('.header-scroll').outerHeight();

        $(window).scroll(function () {
            $('#search-panel-top').removeClass('fix').hide();

            if ($(this).scrollTop() >= showPosition) {
                $('.header-scroll.active').addClass('show');
            }
            else {
                $('.header-scroll.active').removeClass('show');
                $('.basket-under-header').stop().removeClass('active');
            }
        });

        if ($(window).scrollTop() >= showPosition) {
            $('.header-scroll.active').addClass('show');
        }
    }

    setTimeout(function () {
        scrollMenu();
    }, 1200);

    //удаление лишних scroll-menu
    function delScrollMenu() {
        var scrollMenus = $('.header-scroll');

        scrollMenus.each(function () {
            if (!$(this).hasClass('active')) {
                $(this).remove();
            }
        });
    }

    delScrollMenu();


    //кнопка поиска скролл-меню
    $('.header-scroll').on('click', '.header-scroll__search-btn', function () {
        $('#search-panel-top').toggleClass('fix').show();
    });

    //аккордеон
    $('.question-wrap').on('click', '.question-el', function (e) {
        var el = $(this);

        if (!$(e.target).closest('.upload-file').length) {
            if (el.hasClass('active')) {
                el.removeClass('active').find('.question-answer').slideUp();
                return false;
            }

            $('.question-el').removeClass('active').find('.question-answer').slideUp();
            el.addClass('active').find('.question-answer ').slideToggle();
        }
    });


    //страница проекты, поверка на пустой правый блок
    function projectBlocks() {

        $('.projects-card').each(function () {
            var elems = $(this).find($('.projects-card-info-wrap > *').not($('.projects-card-info-lnk-wrap')));

            if (!elems.length && $(this).find($('.projects-card-info-lnk-wrap')).length) {
                $('.projects-card-info-wrap').addClass('empty');
            }
        });
    }

    projectBlocks();

    //копирование телефонов в мобильную версию из шапки
    mobilePhone();

    function mobilePhone() {
        var $phonesSource = $('.center-bar .header-phone-wrap a'),
            $ul = $('<ul class="mobile-menu__phones-list"></ul>');

        $phonesSource.each(function () {
            $ul.append($('<li>' + $(this).get(0).outerHTML + '</li>'));
        });

        $('.mobile-menu__callback-hidden').prepend($ul);

        $('.mobile-menu__phones-list').find('a').removeClass().addClass('mobile-menu__phones');
    }

    //проверка наличия корзины
    function hasBasket() {
        if ($('.header #shopCart').length) {

            $('.header').addClass('has-basket');
            return true;

        } else {

            $('.header').addClass('no-basket');
            return false;

        }
    }

    hasBasket();

    //мобильное меню
    var mobileMenuBtn = $('span.button-mobile-menu');
    var menuMobileContainer = $('div.wrap-menu');
    var mobileMenuInner = $('div.mobile-menu-inner');
    var scrollAxisY = 0;

    mobileMenuBtn.on('click', function () {

        if (!$('body').hasClass('mobile-active')) {
            scrollAxisY = $(window).scrollTop();
        }

        $(this).toggleClass('active');
        menuMobileContainer.toggleClass('active');
        $('body').toggleClass('mobile-active');

        if (mobileMenuInner.hasClass('active')) {

            mobileMenuInner.removeClass('active');
            $(window).scrollTop(scrollAxisY);

        } else {

            mobileMenuInner.addClass('active');

        }
    });

    $(document).on('click', function (e) {
        if (menuMobileContainer.hasClass('active')
            && !$(e.target).closest(menuMobileContainer).length
        ) {

            mobileMenuBtn.removeClass('active');
            menuMobileContainer.removeClass('active');
            mobileMenuInner.removeClass('active');
            $('body').removeClass('mobile-active');

            e.preventDefault();
            e.stopPropagation();
        }
    });


    $('div.mobile-menu-inner').on('click', '.mob-button', function () {
        $(this).toggleClass('active').parent().next('ul.menu-sub').slideToggle();
    });

    //скролл хлебных крошек в мобилке
    $(".breadcrumbs-wrap").mCustomScrollbar({
        axis: "x",
        scrollInertia: 300,
        scrollbarPosition: "inside"
    });

    //телефоны хеадера мобилка
    $('div.mobile-menu__callback').on('click', function () {
        $('.mobile-menu__callback-hidden-wrap').toggleClass('active');
    });

    $(document).on('click', function (e) {
        if ($('.mobile-menu__callback-hidden-wrap').hasClass('active')
            && !$(e.target).closest('.mobile-menu__callback').length
        ) {

            $('.mobile-menu__callback-hidden-wrap').removeClass('active');
        }
    });

    //ширина слайдера новинок
    function prewievSliderWidth() {
        if ($(document).width() <= 1300 && $('.preview-product').length) {

            var doubleMargin = parseFloat($('.preview-product')
                    .find('.container')
                    .css('margin-left')) * 2 + 'px';

            $('.preview-product .preview-product-slider, .preview-product .preview-product-slider-second')
                .css({'width': 'calc(100% + ' + doubleMargin + ')'});
        }
    }

    //меняем z-index кнопки получить консультаию при ховере на слайдер
    $('.preview-product-element').hover(
        function () {
            $('.callback-main__button').css({'z-index': '0'});
        },

        function () {
            $('.callback-main__button').css({'z-index': ''});
        });


    //слайдер карточки товара
    $('.main-first-image-slider').slick({
        prevArrow: '<div class="customPrevBtn">' +
        '<img src="assets/templates/market/img/sprite/arr-slider-prev.png" alt="">' +
        '</div>',
        nextArrow: '<div class="customNextBtn">' +
        '<img src="assets/templates/market/img/sprite/arr-slider-next.png" alt="">' +
        '</div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        customPaging: function (slider, i) {
            var source = $(slider.$slides[i]).find('img').attr('src') + "";
            return '<a class="pager__item"><img src=' + source + '></a>';
        },
        responsive: [
            {
                breakpoint: 960,
                dots: false
            }
        ]
    });

    cropText($('.completed-project-content__title p'), 90);
    //слайдер выполненных проектов
    if ($(document).width() < 990) {
        $('.index-completed-project-slider .completed-project-inner').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        centerPadding: '20px'
                    }
                },

                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20px'
                    }
                }
            ]
        });
    }

    $('.news-wrap-mobile').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    });


    //слайдер отзывов
    if ($(document).width() <= 769) {

        $('.card-reviews-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            dots: false,
            centerPadding: '20px'
        });

        $('.card-reviews-el').setMaxHeights();
        $('.news-element .text').setMaxHeights();
    }

  // if ($(document).width() <= 480) {
  //       $('.news-mobile-slider').slick({
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           centerMode: true,
  //           arrows: false,
  //           dots: false,
  //           responsive: [
  //               {
  //                   breakpoint: 481,
  //                   settings: {
  //                       slidesToShow: 1,
  //                       centerMode: true,
  //                       centerPadding: '20px'
  //                   }
  //               }
  //           ]
  //       });
  //   }


    (function () {
        var slider = $('.card-gallery-slider');

        slider.each(function (i) {

            $(this).addClass('card-gallery-slider-' + i).slick({
                asNavFor: '.card-gallery-slider-pager-' + i,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            asNavFor: null,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            arrows: true

                        }
                    },

                    {
                        breakpoint: 481,
                        settings: {
                            dots: true,
                            asNavFor: null,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            arrows: false

                        }
                    }
                ]

            });

            if ($(window).width() > 767) {
                $(this).next('.card-gallery-slider-pager')
                    .addClass('card-gallery-slider-pager-' + i).slick({
                    asNavFor: '.card-gallery-slider-' + i,
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    infinite: true,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1301,
                            settings: {
                                arrows: false,
                                slidesToShow: 8,
                                variableWidth: true

                            }
                        }
                    ]
                });
            }
        })
    })();

    //слайдер выполненных проектов
    $('.completed-projects-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        infinite: true,
        arrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },

            {
                breakpoint: 561,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px'
                }
            }
        ]
    });

    //кастомное управление для completed-projects-slider-wrap
    $('.completed-projects-slider-wrap .customNextBtn').on('click', function () {
        $('.completed-projects-slider').slick('slickNext');
    });
    $('.completed-projects-slider-wrap .customPrevBtn').on('click', function () {
        $('.completed-projects-slider').slick('slickPrev');
    });

    //пэйджер страницы проектов
    (function () {
        var slider = $('.projects-card-slider');

        slider.each(function (i) {

            $(this).addClass('projects-card-slider-' + i).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                asNavFor: '.projects-card-slider-pager-' + i,
                prevArrow: '<div class="customPrevBtn"><img src="assets/templates/market/img/left-progect.svg" alt=""></div>',
                nextArrow: '<div class="customNextBtn"><img src="assets/templates/market/img/right-progect.svg" alt=""></div>',
            });

            $(this).next('.projects-card-slider-pager')
                .addClass('projects-card-slider-pager-' + i).slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                focusOnSelect: true,
                asNavFor: '.projects-card-slider-' + i,
                arrows: false
            });
        })
    })();

    //


    //слайдер услуг
    $('.card-services-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            }
        ]
    });
    $('.card-services-slider-wrap .customNextBtn').on('click', function () {
        $('.card-services-slider').slick('slickNext');
    });
    $('.card-services-slider-wrap .customPrevBtn').on('click', function () {
        $('.card-services-slider').slick('slickPrev');
    });

    //слайдер услуг
    $('.recomended-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            }
        ]
    });
    $('.recomended-slider-wrap .customNextBtn').on('click', function () {
        $('.recomended-slider').slick('slickNext');
    });
    $('.recomended-slider-wrap .customPrevBtn').on('click', function () {
        $('.recomended-slider').slick('slickPrev');
    });


    //слайдер новостей
    $('.news-element-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            },

            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            }
        ]
    });
    $('.news-date.news-slider-wrap .customNextBtn').on('click', function () {
        $('.news-date .news-element-slider').slick('slickNext');
    });
    $('.news-date.news-slider-wrap .customPrevBtn').on('click', function () {
        $('.news-date .news-element-slider').slick('slickPrev');
    });

    //слайдер новостей без даты
    $('.no-date.news-element-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            },

            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            }
        ]
    });
    $('.no-date.news-slider-wrap .customNextBtn').on('click', function () {
        $('.no-date .news-element-slider').slick('slickNext');
    });
    $('.no-date.news-slider-wrap .customPrevBtn').on('click', function () {
        $('.no-date .news-element-slider').slick('slickPrev');
    });


    //слайдер сертификатов
    $('.sertificates-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            },

            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            },

            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '30px'
                }
            }
        ]
    });
    $('.sertificates-slider-wrap .customNextBtn').on('click', function () {
        $('.sertificates-slider').slick('slickNext');
    });
    $('.sertificates-slider-wrap .customPrevBtn').on('click', function () {
        $('.sertificates-slider').slick('slickPrev');
    });

    //слайдер сертификатов планшет
    if ($(window).width() < 768) {
        $('.sertificates').slick({
            slidesToShow: 4,
            slideToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
            arrows: false,
            responsive: [
                {
                    breakpoint: 561,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false,
                        centerPadding: '30px'
                    }
                },

                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        arrows: false,
                        centerPadding: '30px'
                    }
                }
            ]
        });
    }



    // if ($(window).width() < 1201) {
    //     $('.completed-project-wrapper .completed-project-inner').slick({
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         // centerMode: true,
    //         arrows: false,
    //         // centerPadding: '30px'
    //         responsive: [
    //             {
    //                 breakpoint: 870,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     centerMode: true,
    //                     arrows: false,
    //                     centerPadding: '30px'
    //                 }
    //             }
    //         ]
    //     });
    // }


    //слайдер сотрудников
    if ($(window).width() < 1025) {
        $('.our-specialists-wrap').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="customPrevBtn"><img src="assets/templates/market/img/sprite/arr-slider-prev.png" alt=""></div>',
            nextArrow: '<div class="customNextBtn"><img src="assets/templates/market/img/sprite/arr-slider-next.png" alt=""></div>',
            centerMode: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false
                    }
                },

                {
                    breakpoint: 581,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false
                    }
                }
            ]
        });
    }

    $(
        ' .fancyshow,' +
        // ' div.projects-card-slider-el a,' +
        ' div.card-gallery-slider__el a'
    ).fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.7)'
                }
            }
        }
    });

    //подчеркнутый текст из админки
    function underlineTxt() {
        var arrSpan = $('span[style]');
        arrSpan.each(function () {
            var attr = $(this).attr('style');

            if (~attr.indexOf('text-decoration: underline;')) {
                $(this).addClass('underline-txt');
            }
        });

        var arrTable = $('table[border]');
        arrTable.each(function () {
            $(this).removeAttr('border').addClass('table-border');
        });
    }

    underlineTxt();

    //удаление стрелки для выпадающего списка в телефонах header
    (function () {
        var phone = document.querySelectorAll('.header-phone-wrap');

        phone.forEach(function (item) {
            if (!item.querySelector('.header-phones')) {
                item.classList.add('single-phone')
            }
        })
    })();

    //буквица
    var paragraphCap = $('.cap-fill');

    paragraphCap.each(function () {
        var letter = $(this).text().charAt(0);

        if (letter === 'Q' || letter === 'Д'
            || letter === 'Ц' || letter === 'Щ') {

            $(this).addClass('letter-padding-bottom');

        } else if (letter === 'Ё' || letter === 'Й') {

            $(this).addClass('letter-padding-top');

        } else if (letter === 'J') {
            $(this).addClass('letter-padding-bottom letter-padding-left');
        }
    });


    //перемещение блоков в карточке товара
    if ($(window).width() < 1025) {
        //сокращене слова "артикул" в карточке товара
        var artNo = $('.main-first-info__articul span').text();

        $('.main-first-info__articul').html('Арт.: ' + '<span>' + artNo + '</span>');


        //перемещение блока экономии в карточке товара
        var $mobileCardPrice = $('<div class="mobile-price-wrap"></div>'),
            $cardPrice = $('.main-first-info-presence-wrap-inner .price'),
            $economy = $('.card-buy-economy');

        $('.main-first-info').after($mobileCardPrice.append($cardPrice, $economy));


        //перемещение блоков акции и нашли дешевле
        var $actionMobie = $('<div class="action-mobile-wrap"></div>'),
            $timer = $('.card-buy__promo'),
            $lowCost = $('.card-buy__low-cost');

        $('.main-first-info-presence-wrap-inner .buy-block').before($actionMobie.append($timer, $lowCost));

    }


    //расписание дилеры, разбивка строк по разделителю
    function dividerString(el) {
        el.each(function () {
            var self = $(this),
                newArr = self.text().trim().split(';');

            self.empty();

            newArr.forEach(function (item) {
                var newEl = '<div><div class="contact-dealers-region__schedule-item">' +
                    item + '</div></div>';
                self.append(newEl);
            });

            self.css({'opacity': '1'});
        });
    }

    dividerString($('.contact-dealers-region__schedule'));


    $('#js-select-region').select2({
        placeholder: "Выберите область",
        minimumResultsForSearch: Infinity,
        allowClear: true

    });

    $('#js-select-city').select2({
        placeholder: "Выберите город",
        minimumResultsForSearch: Infinity,
        allowClear: true
    });


    //центрирование по высоте кнопок слайдера карточки товара
    var cardSliderTop = $('div.main-first-image-slider-el a').height() / 2 + 'px';
    $('div.main-first-image-slider .slick-arrow').css({'top': cardSliderTop});

    //какрточка товара, сворачивание таблицы
    var tableMoreTxt = $('.table-more').text();
    $('.card-description').on('click', '.table-more', function () {
        $(this).prev('.card-description__table-wrap').toggleClass('hidden')
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).text('Свернуть')
                .prev('.card-description__table-wrap')
                .css({'max-height': ''});
        } else {
            $(this).text(tableMoreTxt);
            descriptionTableMaxHeight();
        }
    });

    //max-height таблицы характеристик
    function descriptionTableMaxHeight() {
        if ($('.card-description__table').length) {
            var maxHeight = 0;

            $('.card-description__table tr').each(function (i) {

                if (i < 9) {
                    maxHeight += $(this).height();
                }

            });

            $('.card-description__table-wrap.hidden').css({'max-height': maxHeight + 1 + 'px'});
        }
    }

    descriptionTableMaxHeight();

    //карточка товара
    function cardMore() {
        //карточка товара - описание - кнопка подробнее
        var moreBtnTxt = $('.card-description-more__btn').text();
        $('.card-description-more').on('click', '.card-description-more__btn', function () {

            $(this).prev('.card-description-more__txt').toggleClass('hidden');

            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $(this).text('Свернуть');
            } else {
                $(this).text(moreBtnTxt);
            }
        });

        //карточка товара - краткое описание - клик по кнопке "подробнее"
        $('body').on('click', 'span.presence-description-more', function () {

            var scrollToDescription = $('.card-description-more').offset().top -
                $('.header-scroll').height();

            $('.card-description-more__txt').removeClass('hidden');
            $('.card-description-more__btn').addClass('active').text('Свернуть');
            // $('.card-description-more__btn').text('Свернуть');

            $('body, html').animate({scrollTop: scrollToDescription}, 500);

        });
    }

    cardMore();

    //скролл кнопки все характеристики для страницы проектов
    $('body').on('click', '.projects-card-description-more', function () {
        var scrollToDescription = $('.card-description.progect-page').offset().top -
            $('.header-scroll').height();

        $('body, html').animate({scrollTop: scrollToDescription}, 500);

    });

    //кнопка открытия карты для мобилок
    var mapButton = $('.map-button-mobile').html();
    var mapButtonActive =
        '<img src="assets/templates/market/img/update/map-loc-cl__m.svg" alt="">'
        + 'ЗАКРЫТЬ КАРТУ';

    $('.main-map-wrapper').on('click', '.map-button-mobile', function () {

        $(this).prev().find('.content').fadeToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).html(mapButtonActive);
        } else {
            $(this).html(mapButton);
        }
    });


    //печать документа
    $('.main-first-info__print').on('click', function () {
        window.print();
    });

    //custom scroll table
    $("table[data-table='scroll']").wrap('<div class="table-scroll"></div>');

    $(".table-scroll, .cost-table-scroll").mCustomScrollbar({
        axis: "x",
        scrollInertia: 300,
        scrollbarPosition: "outside",
        mouseWheel: {preventDefault: true}
    });

    //галочка для кастомного input
    $('label.checkbox').on('click', function () {
        if ($(this).find('input').prop("checked")) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    //кнопка наверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('#toup').show();
        } else {
            $('#toup').hide();
        }
    });

    $(document).on('click', '#toup', function () {
        $('html, body').animate({scrollTop: 0}, 500);
    });

    //кастомный двухцветный placeholder
    $("form").on('click', '.placeholder_custom, input[name="fiocont"]', function () {
        $(this).removeClass('active');
        $(this).prev().focus();
    });

    $("form").on('focusout', 'input[name="fiocont"], .js_custom-input', function () {
        if ($(this).val().trim() == '') {
            $(this).next().addClass('active');
        }
    });

    $(".contact-page-feedback-form").on('focus', '.contact-page-feedback__textarea', function () {
        // $(this).focus().attr('placeholder', '');
        // $(this).next('.placeholder_custom').text('');
    });

    //блок вы смотрели, белый фон если элемент не пустой
    $('.watched-el').each(function () {
        var $self = $(this);

        if ($self.find('img').length) {
            $self.css({'background-color': '#fff'});
        }
    });

    //тултип на знаке вопроса
    $('table').on('click', '.tooltip-wrap img', function () {
        $(this).parent().toggleClass('active');
    });


    $(document).on('click', function (e) {
        if (!$(e.target).closest('.tooltip-wrap').length && $('.tooltip-wrap').hasClass('active')) {
            $('.tooltip-wrap').removeClass('active');
        }
    });


    //показываем содержимое svg image
    function svgInner() {
        jQuery('img.svg').each(function (i, item) {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            console.log($img, i)

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }

    svgInner();

    //удаление пустых параграфов в услугах
    $('.completed-projects-slider__info').each(function () {
        var strInfo = $(this).find('p.description').text();

        if (!strInfo.length) {
            $(this).find('p.description').hide();
        }
    })

});

//появление изображений на слайдерах после загрузки
jQuery(window).bind('load', function () {
    var hiddenBeforLoad = '.slider-main li, ' +
        '.certificates-element, ' +
        '.company-element, ' +
        '.main-first-image-slider-el, ' +
        '.projects-card-slider-pager-el, ' +
        '.projects-card-slider-el, ' +
        '.card-gallery-slider__el, ' +
        '.card-gallery-slider-pager__el, ' +
        '.slider-sale-wrap, ' +
        '.custom-select, ' +
        '.slider-sale ';
    $(hiddenBeforLoad).css({'opacity': '1'})
});

//определение максимальной высоты
$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};


//Промотать до верха по клику на логотип скролменю на главной
$(document).on('click', '.logo_scroll_toup', function () {
    $('html, body').animate({scrollTop: 0}, 500);
});