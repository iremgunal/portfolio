// Scroll********
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetSectionId = link.getAttribute('href');
        scrollToSection(targetSectionId);
      });
    });
  });

