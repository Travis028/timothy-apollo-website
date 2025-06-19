// Add gradient animation
const colors = [
    '#f0fdf4',  // Soft Green
    '#fff1f0',  // Soft Red
    '#fdf4ff',  // Soft Pink
    '#f0fdf4',  // Soft Green
    '#fff1f0',  // Soft Red
    '#fdf4ff'   // Soft Pink
];

let currentColorIndex = 0;
const gradientElement = document.createElement('div');
gradientElement.className = 'background-gradient';
document.body.appendChild(gradientElement);

function updateGradient() {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    const currentColor = colors[currentColorIndex];
    const nextColor = colors[nextColorIndex];
    
    gradientElement.style.background = `linear-gradient(
        135deg,
        ${currentColor} 0%,
        ${nextColor} 100%
    )`;
    
    currentColorIndex = nextColorIndex;
}

// Update gradient every 5 seconds
setInterval(updateGradient, 5000);

// Initial gradient
updateGradient();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Particle Effect
const particleContainer = document.querySelector('.particle-container');

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random color from our gradient colors
    const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    
    // Random animation duration
    const duration = Math.random() * 2 + 1;
    particle.style.animationDuration = `${duration}s`;
    
    // Random direction
    const direction = Math.random() * 360;
    particle.style.transform = `rotate(${direction}deg)`;
    
    particleContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles on scroll
window.addEventListener('scroll', () => {
    for (let i = 0; i < 3; i++) {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        createParticle(x, y);
    }
});

// Create initial particles
for (let i = 0; i < 50; i++) {
    createParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
    );
}

// Navbar background change on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset error message
        errorMessage.textContent = '';
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        
        // Validate phone number if provided
        if (phone) {
            const phoneRegex = /^\+?\d{10,15}$/;
            if (!phoneRegex.test(phone)) {
                errorMessage.textContent = 'Please enter a valid phone number.';
                return;
            }
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll animation to sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'white';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
