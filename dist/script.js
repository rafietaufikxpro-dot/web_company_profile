const navBar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    const posisi = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", posisi)
   
})