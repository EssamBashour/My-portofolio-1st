const menu = document.querySelector('#nav_items');
const menuBtn = document.querySelector('#open_nav-btn');
const closeBtn = document.querySelector('#close_nav-btn');

const bodyItems = document.querySelector('body');

// click open navbar
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

});

// click close navbar
const closeNav = () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}
closeBtn.addEventListener('click', closeNav);

// for closing navbar from anywhere
document.onclick = function (e) {
    if (!menuBtn.contains(e.target)) {
        closeNav()
    }
}

//  add and remove active class
const navItems = document.querySelectorAll('#nav_items li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})


// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show Less"
    } else {
        readMoreBtn.textContent = "Show More"
    }
})

// expand skill
const skillItems = document.querySelectorAll('section.skills .container .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

// add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
})
// const skillHead = document.querySelectorAll('section.skills .container .skill .head');
// const skillItem = document.querySelectorAll('section.skills .container .skill .items');

// skillHead.forEach(skill => {
//     skill.addEventListener('click', () => {
//         skillItem.classList.toggle('show-items')
//     })
// })

//close nave menu when a menu item is clicked
// if (window.innerWidth < 1024) {
//     document.querySelectorAll('#nav_items li a').forEach(navItem => {
//         navItem.addEventListener('click', () => {
//             closeNav();
//         })
//     })
// }


// change navbar style on scroll
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
// })

//  Swiper js

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});