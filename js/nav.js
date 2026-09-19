/* nav.js — shared navbar behaviour across all pages */

(function () {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function handleScroll() {
      if (window.scrollY < 8) {
        navbar.classList.add('at-top');
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.remove('at-top');
        navbar.classList.add('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
    // Close on link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      });
    });
  }
})();
