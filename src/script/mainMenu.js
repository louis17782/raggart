document.getElementById('close-menu').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
});

document.querySelector('.menuOpen').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});

// hover on projects

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    const content = project.querySelector('.content');
    content.classList.add('show'); 
  });

  project.addEventListener('mouseout', () => {
    const content = project.querySelector('.content');
    content.classList.remove('show');
  });
});

// Close menu after navigation
const navLinks = document.querySelectorAll('.navlinks a[href="#projects"], .navlinks a[href="#about"], .navlinks a[href="#contact"], .navlinks a[href="#hola"]');

function closeMenuAfterNavigation() {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenuAfterNavigation);
});
