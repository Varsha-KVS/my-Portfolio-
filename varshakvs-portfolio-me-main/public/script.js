// ===== Typing Effect =====
const typingTexts = [
  "Strongly passionate about AI & ML",
  "Building interactive web experiences",
  "Exploring deep learning & neural networks",
  "Creating innovative solutions"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;
const typingElement = document.getElementById('typingText');

function typeText() {
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2500; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typingSpeed = 500; // Pause before typing new text
  }
  
  setTimeout(typeText, typingSpeed);
}

// Start typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (typingElement) {
    setTimeout(typeText, 1000);
  }
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('mobile-open');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('mobile-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinks.classList.contains('mobile-open')) {
    navToggle.classList.remove('active');
    navLinks.classList.remove('mobile-open');
  }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.skill-card, .project-card, .experience-card, .contact-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add staggered delay for grid items
document.querySelectorAll('.skills-grid .skill-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

document.querySelectorAll('.projects-grid .project-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

document.querySelectorAll('.experience-grid .experience-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

document.querySelectorAll('.contact-links .contact-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

document.querySelectorAll('.about-stats .stat-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = 'var(--primary)';
      } else {
        navLink.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);