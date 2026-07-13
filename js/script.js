/* ==========================================================
   BISNIS ONLINE SHUANGHOR
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.getElementById("header");
/* ==========================================
   VIDEO POPUP
========================================== */

const videoCards = document.querySelectorAll(".video-card");
const popup = document.querySelector(".video-popup");
const frame = document.getElementById("videoFrame");
const closeVideo = document.querySelector(".video-close");

if (videoCards.length && popup && frame) {

    videoCards.forEach(card => {

        card.addEventListener("click", () => {

            frame.src = card.dataset.video + "?autoplay=1";

            popup.classList.add("show");

        });

    });

    if (closeVideo) {

        closeVideo.addEventListener("click", () => {

            popup.classList.remove("show");

            frame.src = "";

        });

    }

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.classList.remove("show");

            frame.src = "";

        }

    });



}
    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuToggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

    /* ==========================================
       TUTUP MENU SETELAH KLIK
    ========================================== */

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            faqItems.forEach(f => {

                if (f !== item) {

                    f.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================================
       SCROLL ANIMATION
    ========================================== */

    const fadeElements = document.querySelectorAll(

        ".problem-card," +
        ".feature-card," +
        ".product-card," +
        ".testimonial-card," +
        ".video-card," +
        ".activity-card," +
        ".profil-wrapper," +
        ".visi," +
        ".misi"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    fadeElements.forEach(el => {

        observer.observe(el);

    });

    /* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = parseInt(counter.dataset.target);

    let count = 0;

    const speed = target / 80;

    function updateCounter(){

        count += speed;

        if(count < target){

            if(counter.textContent.includes("%")){

                counter.textContent = Math.floor(count) + "%";

            }else{

                counter.textContent = Math.floor(count) + "+";

            }

            requestAnimationFrame(updateCounter);

        }else{

            if(counter.dataset.target == "100"){

                counter.textContent = "100%";

            }else{

                counter.textContent = target + "+";

            }

        }

    }

    updateCounter();

});

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       FLOATING WA EFFECT
    ========================================== */

    const floating = document.querySelector(".floating-wa");

    if (floating) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                floating.style.opacity = "1";

                floating.style.visibility = "visible";

            } else {

                floating.style.opacity = "0.95";

            }

        });

    }

    /* ==========================================
       HERO IMAGE PARALLAX
    ========================================== */

    const heroImage = document.querySelector(".hero-right img");

    if (heroImage) {

        window.addEventListener("mousemove", e => {

            const x = (window.innerWidth / 2 - e.clientX) / 40;

            const y = (window.innerHeight / 2 - e.clientY) / 40;

            heroImage.style.transform =

                `translate(${x}px, ${y}px)`;

        });

    }
/* ==========================================
   FORM PENDAFTARAN KE WHATSAPP
========================================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const wa = document.getElementById("wa").value.trim();
        const kota = document.getElementById("kota").value.trim();
        const pekerjaan = document.getElementById("pekerjaan").value;

        if (!nama) {
            alert("Silakan isi nama lengkap.");
            return;
        }

        if (!wa) {
            alert("Silakan isi nomor WhatsApp.");
            return;
        }

        const pesan =
`Halo Admin BISNIS ONLINE SHUANGHOR,

Saya ingin melakukan PENDAFTARAN GRATIS.

Nama : ${nama}
WhatsApp : ${wa}
Kota : ${kota}
Pekerjaan : ${pekerjaan}`;

        const nomorAdmin = "6281222770407"; // Ganti dengan nomor admin Anda

        window.open(
            `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`,
            "_blank"
        );

        registerForm.reset();

    });

}
/* ==========================================
   LIGHTBOX GALERI
========================================== */

const galleryImages = document.querySelectorAll(".activity-card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

if (galleryImages.length && lightbox && lightboxImage) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("show");

            lightboxImage.src = img.src;

        });

    });

}

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

}
/* ==========================================
BACK TO TOP
========================================== */

const backTop=document.getElementById("backToTop");

if(backTop){

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.style.opacity="1";
        backTop.style.visibility="visible";

    }else{

        backTop.style.opacity="0";
        backTop.style.visibility="hidden";

    }

});

backTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}
/* ==========================================
AOS
========================================== */

if(typeof AOS !== "undefined"){

AOS.init({

    duration:1000,

    once:true,

    offset:120,

    easing:"ease-in-out"

});

}
/* ==========================================
SWIPER TESTIMONI
========================================== */

if (document.querySelector(".testimonialSwiper")) {

    new Swiper(".testimonialSwiper", {

        loop: true,

        spaceBetween: 30,

        autoplay: {

            delay: 4000,

            disableOnInteraction: false

        },

        pagination: {

            el: ".swiper-pagination",

            clickable: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1

            },

            768: {

                slidesPerView: 2

            },

            1200: {

                slidesPerView: 3

            }

        }

    });

}
/* ==========================================
LIVE NOTIFICATION
========================================== */

const members = [

{
    nama:"Supriyadi",
    kota:"Bandung",
    foto:"assets/testimoni/a1.webp"
},

{
    nama:"Bambang",
    kota:"Makassar",
    foto:"assets/testimoni/a2.webp"
},

{
    nama:"Nurhayati",
    kota:"Yogyakarta",
    foto:"assets/testimoni/a3.webp"
},

{
    nama:"Dewi Puspita",
    kota:"Surabaya",
    foto:"assets/testimoni/a4.webp"
},

{
    nama:"Putri Utami",
    kota:"Cianjur",
    foto:"assets/testimoni/a5.webp"
},

{
    nama:"Kadek Maharani",
    kota:"Denpasar",
    foto:"assets/testimoni/a6.webp"
},

{
    nama:"Sri Wahyuni",
    kota:"Yogyakarta",
    foto:"assets/testimoni/a7.webp"
},

{
    nama:"Ayu Lestari",
    kota:"Pemalang",
    foto:"assets/testimoni/a8.webp"
},
{
    nama:"Clarissa",
    kota:"Bandung",
    foto:"assets/testimoni/a9.webp"
},

{
    nama:"Mauren",
    kota:"Sleman",
    foto:"assets/testimoni/a10.webp"
},

{
    nama:"Nirmala",
    kota:"Sukabumi",
    foto:"assets/testimoni/a11.webp"
},

{
    nama:"Nabila",
    kota:"Banten",
    foto:"assets/testimoni/a12.webp"
},

{
    nama:"Arunika",
    kota:"Cianjur",
    foto:"assets/testimoni/a13.webp"
},

{
    nama:"Laras",
    kota:"Ponorogo",
    foto:"assets/testimoni/a14.webp"
},

{
    nama:"Amanda",
    kota:"Sumedang",
    foto:"assets/testimoni/a15.webp"
},

{
    nama:"Adinda",
    kota:"Majalengka",
    foto:"assets/testimoni/a16.webp"
},

];

const liveBox = document.getElementById("liveNotification");

if(liveBox){

const liveName = document.getElementById("liveName");
const liveText = document.getElementById("liveText");
const liveAvatar = document.getElementById("liveAvatar");

let index = 0;

function showNotification(){

    const item = members[index];

    liveName.textContent = item.nama;

    liveText.textContent =
        `dari ${item.kota} baru saja bergabung.`;

    liveAvatar.src = item.foto;

    liveBox.classList.add("show");

    setTimeout(()=>{

        liveBox.classList.remove("show");

    },5000);

    index++;

    if(index >= members.length){

        index = 0;

    }

}

setTimeout(showNotification,3000);

setInterval(showNotification,10000);

}
    /* ==========================================
PRELOADER
========================================== */

window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

if(preloader){

setTimeout(()=>{

preloader.classList.add("hide");

},700);

}

});

});

/* ==========================================================
   END SCRIPT
========================================================== */
