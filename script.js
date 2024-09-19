const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;



navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname

    if ((navLinkEl.href.includes(windowPathname)) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkEl.classList.add('active');
    }
});