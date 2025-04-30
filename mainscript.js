document.addEventListener("mousemove", parallax)
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_val = move.getAttribute("data-value");
        var x = (e.clientX * moving_val) / 250;
        var y = (e.clientY * moving_val) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
};

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 90) 
});
const addEventonElem = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType,callback);
    }
};
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector(".overlay");
const toggleNavbar = function(){
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
} 
addEventonElem(navTogglers, "click", toggleNavbar);
document.addEventListener("click", function(e){
    if(e.target.closest(".navbar_item")){
        toggleNavbar();
    }
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', function(){
    let fromTop = window.scrollY;
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if(section.offsetTop - 150 <= fromTop && section.offsetTop + section.offsetHeight - 150 > fromTop){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        let target = document.querySelector(this.hash);
        let offset = 150;
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

const skills = document.getElementById('skill');
const progressbar = document.querySelectorAll('.progressbar');
function showprogress(){
    progressbar.forEach(progressbars => {
        const value = progressbars.dataset.progress;
        progressbars.style.opacity = 1;
        progressbars.style.width = `${value}%`;
    });
}
function hideprogress(){
    progressbar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll',() => {
    const sectionpos = skills.getBoundingClientRect().top;
    const screenpos = window.innerHeight / 2;
    if(sectionpos < screenpos){
        showprogress();
    } else{
        hideprogress();
    }
});
//circular progress bar
const circleSection = document.querySelector('.proff_wrapper');
const circles = document.querySelectorAll('.circle');
const progressCircles = document.querySelectorAll('.cir_progress');
const progressText = document.querySelectorAll('.proff_wrapper .sub_heading');

let bol = false;
window.addEventListener("scroll", function(){
    if(pageYOffset > circleSection.offsetTop - 600 && bol === false){
        for(let cir = 0; cir < circles.length; cir++){
            let radius = progressCircles[cir].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;
            progressCircles[cir].style.strokeDasharray = circumference;
            function setProgress(percent){
                progressCircles[cir].style.strokeDashoffset = circumference - 
                (percent / 100) * circumference;
            }
            const progg = circles[cir].dataset.cirprog;
            progressText[cir].innerHTML = progg + "%";
            setProgress(progg);
            bol = true;
        }
    }
});

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.p_images img');
for(let i = 1; i < btns.length; i++){
    btns[i].addEventListener('click', filterImagez);
}
function setActiveBtn(e){
    btns.forEach(btn => {
        btn.classList.remove('btn_clicked');
    });
    e.target.classList.add('btn_clicked');
}
function filterImagez(e){
    setActiveBtn(e);
    imgs.forEach(img => {
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);
        if(imgType !== btnType){
            img.classList.remove('img_expand');
            img.classList.add('img_shrink');
        }
    });
}
btns[0].addEventListener('click', (e) => {
    setActiveBtn(e);
    imgs.forEach(img => {
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector(".tabs");
    tabs.addEventListener("click", (event) => {
        if (event.target.classList.contains("tab_item") && !event.target.classList.contains("active")){
            const activeTab = tabs.querySelector(".active");
            const activeContent = document.querySelector('.tab_content.active');
            const targetContent = document.querySelector(event.target.dataset.target);

            activeTab.classList.remove("active");
            event.target.classList.add("active");

            activeContent.classList.remove("active");
            targetContent.classList.add("active");
        }
    })
})

var TestimonialSlider = new Swiper('.testimonial-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

function mess(event){
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    if (name.value === '' || email.value === '' || phone.value === ''
        || msg.value === ''){
        fail.style.display = 'block';
    }
    else {
        setTimeout(() => {
            name.value = '';
            email.value = '';
            phone.value = '';
            msg.value = '';
            success.style.display = 'block';
        }, 2000);
    }
    setTimeout(() => {
        fail.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}
