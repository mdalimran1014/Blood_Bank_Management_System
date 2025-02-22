document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
    
    // Adjust section positioning for fixed header
    const headerOffset = document.querySelector("header").offsetHeight + document.querySelector("nav").offsetHeight;
    document.querySelectorAll("section").forEach(section => {
        section.style.scrollMarginTop = ${headerOffset}px;
    });
    
    console.log("Oxygen Blood Bank Loaded");
});