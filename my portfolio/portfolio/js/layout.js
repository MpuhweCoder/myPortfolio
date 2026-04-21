/* ============================================
   ANGE PORTFOLIO — NAV & FOOTER INJECT
   js/layout.js
   (Injects nav and footer into every page)
   ============================================ */

const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">Ange<span>.</span></a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="skills.html">Skills</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="education.html">Education</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav-toggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <span>© 2025  Uwimpuhwe Umutoni Ange — All rights reserved</span>
  <span>Built with HTML · CSS · JavaScript</span>
  <div style="display:flex;gap:1rem;">
    <a href="https://github.com/Mpuhwecoder" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/umutoniange" target="_blank">LinkedIn</a>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
