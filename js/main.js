// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skills Data
const skillsData = {
    'Front-End': [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 82 },
        { name: 'Vue.js', level: 75 }
    ],
    'Back-End': [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 78 },
        { name: 'SQL', level: 82 }
    ],
    'Mobile Development': [
        { name: 'Kotlin', level: 75 },
        { name: 'Android Studio', level: 70 },
        { name: 'React Native', level: 72 }
    ],
    'Machine-Level': [
        { name: 'C', level: 85 },
        { name: 'Assembly', level: 70 },
        { name: 'Computer Architecture', level: 75 }
    ]
};

// Populate Skills
Object.entries(skillsData).forEach(([category, skills]) => {
    const categoryElement = document.querySelector(`.skill-category h3:contains('${category}')`).parentElement;
    const skillItems = categoryElement.querySelector('.skill-items');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillItems.appendChild(skillElement);
    });
});

// Project Data
const projects = [
    {
        title: 'AI-Powered Task Manager',
        description: 'Smart task management system with AI prioritization and natural language processing',
        technologies: ['React', 'Python', 'TensorFlow', 'Node.js'],
        image: 'https://source.unsplash.com/random/800x600/?tech',
        demo: '#',
        github: '#'
    },
    {
        title: 'Crypto Trading Bot',
        description: 'Automated cryptocurrency trading bot with real-time market analysis',
        technologies: ['Python', 'Machine Learning', 'Binance API'],
        image: 'https://source.unsplash.com/random/800x600/?cryptocurrency',
        demo: '#',
        github: '#'
    },
    {
        title: 'AR Interior Designer',
        description: 'Augmented reality app for visualizing furniture in real space',
        technologies: ['Unity', 'ARKit', 'C#', 'iOS'],
        image: 'https://source.unsplash.com/random/800x600/?interior',
        demo: '#',
        github: '#'
    },
    {
        title: 'Smart Home Hub',
        description: 'IoT platform for controlling and automating home devices',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'IoT'],
        image: 'https://source.unsplash.com/random/800x600/?smarthome',
        demo: '#',
        github: '#'
    },
    {
        title: 'Social Media Analytics',
        description: 'Real-time social media sentiment analysis and trend prediction',
        technologies: ['Python', 'NLP', 'React', 'D3.js'],
        image: 'https://source.unsplash.com/random/800x600/?social',
        demo: '#',
        github: '#'
    },
    {
        title: 'Health Tracking Platform',
        description: 'AI-powered health monitoring and prediction system',
        technologies: ['Flutter', 'Firebase', 'TensorFlow'],
        image: 'https://source.unsplash.com/random/800x600/?health',
        demo: '#',
        github: '#'
    },
    {
        title: 'Game Development Engine',
        description: 'Custom 2D game engine with physics simulation',
        technologies: ['C++', 'OpenGL', 'Python'],
        image: 'https://source.unsplash.com/random/800x600/?game',
        demo: '#',
        github: '#'
    },
    {
        title: 'Cloud DevOps Dashboard',
        description: 'Unified dashboard for monitoring cloud infrastructure',
        technologies: ['Vue.js', 'AWS', 'Docker', 'Kubernetes'],
        image: 'https://source.unsplash.com/random/800x600/?cloud',
        demo: '#',
        github: '#'
    },
    {
        title: 'Blockchain Voting System',
        description: 'Secure and transparent voting system using blockchain',
        technologies: ['Solidity', 'Ethereum', 'Web3.js'],
        image: 'https://source.unsplash.com/random/800x600/?blockchain',
        demo: '#',
        github: '#'
    },
    {
        title: 'AI Music Composer',
        description: 'Neural network-based music generation system',
        technologies: ['Python', 'TensorFlow', 'Web Audio API'],
        image: 'https://source.unsplash.com/random/800x600/?music',
        demo: '#',
        github: '#'
    }
];

// Populate Projects
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-card';
    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demo}" target="_blank">Live Demo</a>
                <a href="${project.github}" target="_blank">GitHub</a>
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectElement);
});

// Create particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Project Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectBubbles = document.querySelectorAll('.project-bubble');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showProject(index) {
        // Hide all projects first
        projectBubbles.forEach((bubble, idx) => {
            if (idx === index) {
                bubble.style.display = 'block';
                bubble.classList.remove('hidden');
                bubble.classList.add('active');
            } else {
                bubble.style.display = 'none';
                bubble.classList.remove('active');
                bubble.classList.add('hidden');
            }
        });

        // Update navigation buttons
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === projectBubbles.length - 1;
    }

    // Show first project on load
    showProject(0);

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectBubbles.length - 1) {
            currentIndex++;
            showProject(currentIndex);
        }
    });

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showProject(currentIndex);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIndex < projectBubbles.length - 1) {
            currentIndex++;
            showProject(currentIndex);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            showProject(currentIndex);
        }
    });

    // Initialize buttons state
    updateButtonStates();

    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === projectBubbles.length - 1;
        
        // Add visual feedback for disabled state
        if (prevBtn.disabled) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (nextBtn.disabled) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
});

// Enhanced GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-text', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    stagger: 0.2
});

gsap.from('.hero-image', {
    duration: 1.5,
    x: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

// Scroll Animations for Projects
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});

// Skills Animation
gsap.utils.toArray('.skill-category').forEach((category, i) => {
    gsap.from(category, {
        scrollTrigger: {
            trigger: category,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Progress bar animation
gsap.utils.toArray('.progress').forEach(progress => {
    const width = progress.style.width;
    progress.style.width = 0;
    
    ScrollTrigger.create({
        trigger: progress,
        start: 'top bottom-=100',
        onEnter: () => {
            gsap.to(progress, {
                width: width,
                duration: 1.5,
                ease: 'power2.out'
            });
        }
    });
});

// Smooth scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// GSAP Animations
// Hero Section Animation
gsap.from('.hero-text', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Scroll Animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    if(body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Toast Notification Function
function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon;
    switch(type) {
        case 'info':
            icon = 'info-circle';
            break;
        case 'warning':
            icon = 'exclamation-circle';
            break;
        case 'success':
            icon = 'check-circle';
            break;
        default:
            icon = 'info-circle';
    }

    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span class="message">${message}</span>
        <span class="close-btn">
            <i class="fas fa-times"></i>
        </span>
    `;

    toastContainer.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Add click event to close button
    const closeBtn = toast.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }
    }, 5000);
}

// Add click event listeners to certification view buttons
document.addEventListener('DOMContentLoaded', () => {
    const certButtons = document.querySelectorAll('.view-cert');
    
    certButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Certifications will be available soon. Please check back later!', 'warning');
        });
    });
});
