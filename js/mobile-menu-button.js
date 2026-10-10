const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
});

nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});