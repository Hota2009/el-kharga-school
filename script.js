gsap.from(".navbar", {opacity: 0, y: -50, duration: 1, ease: "power2.out"});
gsap.from(".school-title", {opacity: 0, y: -50, duration: 1.5, ease: "power2.out"});
gsap.from(".subtitle", {opacity: 0, y: 30, duration: 1.5, delay: 0.5, ease: "power2.out"});
gsap.from(".scroll-down", {opacity: 0, y: 20, duration: 1.5, delay: 1, ease: "power2.out", repeat: -1, yoyo: true});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // تغيير لون الخلفية عند التمرير
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // تفعيل القائمة الجانبية عند الضغط على أيقونة الموبايل
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });
});