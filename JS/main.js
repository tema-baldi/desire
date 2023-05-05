const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsImg = document.querySelectorAll('.tabs__img-box');

tabsBtn.forEach(function (e) {
    e.addEventListener('click', open);
});


function open(evt) {
    const tabTarget = evt.currentTarget;
    const btn = tabTarget.dataset.button;

    tabsBtn.forEach(function (item) {
        item.classList.remove('tabs__btn--active');
    });
    tabTarget.classList.add('tabs__btn--active');

    tabsImg.forEach(function (item) {
        item.classList.remove('tabs__img--active');
    });
    document.querySelector(`#${btn}`).classList.add('tabs__img--active');
};

const swiper = new Swiper('.top__slider', {
    loop: true,
    pagination: {
        el: '.top__pagination',
        clickable: true
    }
});
const swiper2 = new Swiper('.blog__main', {
    cssMode: true,
    pagination: {
        el: ".blog__pag",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".blog__next",
    },
});

const swiper3 = new Swiper('.blog__img-link--slider', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".next__arrow",
        prevEl: ".prev__arrow",
    },
});

const swiper5 = new Swiper('.contact-gallery__slider', {
    loop: true,
    breakpoints: {
        1400: {
            slidesPerView: 10,
            slidesPerGroup: 10,
            spaceBetween: 18,
        },
        1000: {
            slidesPerView: 7,
            slidesPerGroup: 7,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 18,
        },

        500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 18,
        },

        320: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: '.contact__pagination',
        clickable: true
    },
});

const openBtn = document.querySelector('.menu__btn');
const closeBtn = document.querySelector('.sidemenu__btn');
const sideMenu = document.querySelector('.sidemenu');
const mobileBtn = document.querySelector('.menu__mobile-btn');
const mobileMenu = document.querySelector('.menu__mobile-list');
const blogAside = document.querySelector('.blog-aside');
const asideMobileBtn = document.querySelector('.aside-mobile__btn');

openBtn.onclick = () => {
    sideMenu.classList.remove('sidemenu--active')
};
closeBtn.onclick = () => {
    sideMenu.classList.add('sidemenu--active')
};

mobileBtn.onclick = () => {
    mobileMenu.classList.toggle('menu__mobile-list--active')
    mobileBtn.classList.toggle('menu__mobile-btn--close')
};

asideMobileBtn.onclick = () => {
    blogAside.classList.toggle('blog-aside--active')
    asideMobileBtn.classList.toggle('aside-mobile__btn--close')
};
