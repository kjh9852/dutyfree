(() => {
    const swiper = new Swiper('.banner_swiper', {
        effect: 'fade',
        autoplay: {
            delay: 4000,
        },
        speed: 100,
        loop: true,
    });
    const swiper2 = new Swiper('.brand_slider', {
        pagination: { // 페이징
            el: '.swiper-pagination',
            type: "progressbar",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centeredSlides: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 5,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        observer: true,
        observeParents: true,
    });
    const swiper3 = new Swiper('.branch-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
    });
    const swiper4 = new Swiper('.video-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: { // 페이징
            el: '.swiper-pagination',
            type: "progressbar",
        },
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 400,
        loop: true,
    });
    // const swiper2 = new Swiper('.banner_thumbs', {
    //     mousewheel: true,
    //     direction : 'vertical',
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //         draggable: true,
    //     },
    //     watchOverflow: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     slidesPerView: 6,
    //     speed: 100,
    //     clickable: true,
    //     loop: true,
    // });
    // swiper.controller.control = swiper2;
    // swiper2.controller.control = swiper;

    function navOpen() {
        let nav = document.querySelector('nav');
        let navWrap = document.querySelectorAll(".nav_wrap > ul > li");

        for (let i = 0; i < navWrap.length++; i++) {
            navWrap[i].addEventListener('mouseover', () => {
                nav.classList.add('open');
            });
            nav.addEventListener('mouseleave', () => {
                nav.classList.remove('open');
            });
        }
    } navOpen();

    function tabMenu() {
        let brandTab = document.querySelectorAll('.brand_tab > ul > li');
        for (let i = 0; i < brandTab.length++; i++) {
            brandTab[i].addEventListener('click', (e) => {
                e.preventDefault();
                for (let j = 0; j < brandTab.length++; j++) {
                    brandTab[j].classList.remove('active');
                }
                brandTab[i].classList.add('active');
                if (brandTab[0].classList.contains('active')) {
                    document.querySelector('.brand_imgs').classList.add('active');
                    document.querySelector('.best_imgs').classList.remove('active');
                } else if (brandTab[1].classList.contains('active')) {
                    document.querySelector('.best_imgs').classList.add('active');
                    document.querySelector('.brand_imgs').classList.remove('active');
                }
            });
        }

        let mediaTab = document.querySelectorAll('.media_tab > ul > li');
        for (let i = 0; i < mediaTab.length; i++) {
            mediaTab[i].addEventListener('click', (e) => {
                e.preventDefault();
                for (let j = 0; j < mediaTab.length; j++) {
                    mediaTab[j].classList.remove('active');
                }
                mediaTab[i].classList.add('active');
                if (mediaTab[0].classList.contains('active')) {
                    document.querySelector('.video-slider').classList.add('active');
                    document.querySelector('.photo-slider').classList.remove('active');
                } else if (mediaTab[1].classList.contains('active')) {
                    document.querySelector('.photo-slider').classList.add('active');
                    document.querySelector('.video-slider').classList.remove('active');
                }
            });
        }
    } tabMenu();

    let moreBtn = document.querySelector('.moresite_btn');
    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moreBtn.classList.toggle('active');
        $('.morefooter').slideToggle();
    });

    function ScrollBtn() {
        let topBtn = document.querySelector('.top_btn');
        if (window.pageYOffset > 0) {
            $('.top_btn').fadeIn();
        } else if (window.pageYOffset === 0) {
            $('.top_btn').fadeOut();
        }
        topBtn.addEventListener('click', () => {
            scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
        let windowHeight = window.innerHeight;
        let htmlHeight = document.body.clientHeight;
        let footerHeight = htmlHeight - document.querySelector('footer').offsetHeight - windowHeight;
        let newHeight = window.pageYOffset - footerHeight + 40;
        // console.log(newHeight);
        // console.log(window.pageYOffset,footerHeight);
        if (window.pageYOffset >= footerHeight) {
            topBtn.style.bottom = `${newHeight}px`;
        } else {
            topBtn.style.bottom = '';
        }

    }

    window.addEventListener('load', () => {
    });
    window.addEventListener('scroll', () => {
        document.querySelector('header').classList.add('scroll');
        ScrollBtn();
        if (window.pageYOffset === 0) {
            document.querySelector('header').classList.remove('scroll');
        }
    });
})();