// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observeElements = document.querySelectorAll('.service-card, .location-card');
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

observeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});


// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-menu a[href^="#"]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
    }
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Service Modal Functionality
const serviceCards = document.querySelectorAll('.service-card');
const modals = {
    kindergarten: document.getElementById('kindergarten-modal'),
    'speech-therapist': document.getElementById('speech-therapist-modal')
};

const closeButtons = document.querySelectorAll('.modal-close');

// Open modal when clicking on service card or button
serviceCards.forEach(card => {
    const serviceType = card.getAttribute('data-service');
    const modal = modals[serviceType];
    const button = card.querySelector('.service-details-btn');
    
    if (modal) {
        // Click on card or button opens modal
        const openModal = () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };
        
        card.addEventListener('click', (e) => {
            // Don't open if clicking directly on the button (button has its own handler)
            if (!e.target.closest('.service-details-btn')) {
                openModal();
            }
        });
        
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click event
                openModal();
            });
        }
    }
});

// Close modal functions
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.service-modal');
        if (modal) {
            closeModal(modal);
        }
    });
});

// Close modal when clicking on overlay
Object.values(modals).forEach(modal => {
    if (modal) {
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                closeModal(modal);
            });
        }
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        Object.values(modals).forEach(modal => {
            if (modal && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

// Prevent modal content click from closing modal
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Photo Viewer for Modals
function initPhotoViewer(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const photoContainer = modal.querySelector('.photo-container');
    const indicators = modal.querySelectorAll('.photo-indicator');
    const slides = modal.querySelectorAll('.photo-slide');
    const progressBar = modal.querySelector('.photo-progress-bar');

    if (!photoContainer || !slides.length) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;
    let progressAnimationFrame = null;
    let progressStartTime = null;
    const SLIDE_DURATION = 10000; // 10 seconds

    function showSlide(index) {
        // Ensure index is within bounds
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentIndex = index;
    }

    function animateProgress() {
        if (!progressBar) return;
        
        const currentTime = Date.now();
        const elapsed = currentTime - progressStartTime;
        const progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
        
        progressBar.style.width = progress + '%';
        
        if (progress < 100) {
            progressAnimationFrame = requestAnimationFrame(animateProgress);
        } else {
            // Progress complete, will be reset when slide changes
            progressBar.style.width = '0%';
        }
    }

    function startProgressAnimation() {
        if (!progressBar) return;
        
        // Stop any existing animation
        if (progressAnimationFrame) {
            cancelAnimationFrame(progressAnimationFrame);
        }
        
        // Reset and start progress bar
        progressBar.style.width = '0%';
        progressStartTime = Date.now();
        animateProgress();
    }

    function stopProgressAnimation() {
        if (progressAnimationFrame) {
            cancelAnimationFrame(progressAnimationFrame);
            progressAnimationFrame = null;
        }
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    function startAutoSlide() {
        // Clear any existing interval
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        
        // Start progress animation
        startProgressAnimation();
        
        // Start auto-sliding every 10 seconds
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
            startProgressAnimation(); // Restart progress bar for new slide
        }, SLIDE_DURATION);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
        stopProgressAnimation();
    }

    // Indicator clicks - allow manual navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            // Restart auto-slide after manual navigation
            startAutoSlide();
        });
    });

    // Reset to first slide and start auto-slide when modal opens
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (modal.classList.contains('active')) {
                    showSlide(0);
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            }
        });
    });

    observer.observe(modal, {
        attributes: true,
        attributeFilter: ['class']
    });

    // Stop auto-slide when modal is closed (cleanup)
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            stopAutoSlide();
        });
    }
}

// Initialize photo viewers for both modals when DOM is ready
function initAllPhotoViewers() {
    initPhotoViewer('kindergarten-modal');
    initPhotoViewer('speech-therapist-modal');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllPhotoViewers);
} else {
    initAllPhotoViewers();
}

