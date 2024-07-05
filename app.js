    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navList = document.querySelector(".nav-list");

        hamburger.addEventListener("click", function() {
            navList.classList.toggle("show");
        });
    });
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    
    hamburger.addEventListener("click", () => nav.classList.toggle("active"));