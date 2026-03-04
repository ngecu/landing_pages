 // State variables
    let mobileMenuOpen = false;
    let isLoading = true;
    let showScrollToTop = false;
    const scrollThreshold = 300;
    let currentSlide = 0;
    const totalSlides = 3;
    let autoSlideInterval;

    // DOM Elements
    const loadingOverlay = document.getElementById('loadingOverlay');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerLines = document.getElementById('hamburgerLines');
    const closeIcon = document.getElementById('closeIcon');
    const testimonialSlider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.dot');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const currentYearSpan = document.getElementById('currentYear');

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        // Set current year in footer
        currentYearSpan.textContent = new Date().getFullYear();

        // Hide loading after 1 second
        setTimeout(() => {
            isLoading = false;
            loadingOverlay.classList.add('hidden');
        }, 1000);

        // Initialize scroll animations
        initScrollAnimations();

        // Add scroll listener for FAB
        addScrollListener();

        // Start auto-slide for testimonials
        startAutoSlide();

        // Update slider position initially
        updateSliderPosition();
        updateDots();

        // Add event listeners
        setupEventListeners();
        
        // Add Learn More button event
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', scrollToNextSection);
        }
    });

    function setupEventListeners() {
        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', toggleMobileMenu);

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                scrollToSection(sectionId);
            });
        });

        // Mobile navigation links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                scrollToSection(sectionId);
                closeMobileMenu();
            });
        });

        // Testimonial slider dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });

        // Scroll to top button
        scrollToTopBtn.addEventListener('click', scrollToTop);

        // Stop auto-slide on hover
        testimonialSlider?.addEventListener('mouseenter', stopAutoSlide);
        testimonialSlider?.addEventListener('mouseleave', startAutoSlide);
    }

    // Testimonial slider functions
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSliderPosition();
        updateDots();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
        updateDots();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSliderPosition();
        updateDots();
    }

    function updateSliderPosition() {
        if (testimonialSlider) {
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-[#FFFFFF29]', 'w-3', 'hover:bg-[#FFFFFF4D]');
                dot.classList.add('bg-[#836EFF]', 'w-8');
            } else {
                dot.classList.remove('bg-[#836EFF]', 'w-8');
                dot.classList.add('bg-[#FFFFFF29]', 'w-3', 'hover:bg-[#FFFFFF4D]');
            }
        });
    }

    function startAutoSlide() {
        stopAutoSlide(); // Clear any existing interval
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Scroll to next section function
    function scrollToNextSection() {
        const whoWeAreSection = document.getElementById('whoWeAre');
        if (whoWeAreSection) {
            const sectionTop = whoWeAreSection.getBoundingClientRect().top + window.pageYOffset;
            const offset = 80;
            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth'
            });
        }
    }

    // Mobile menu functions
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        
        if (mobileMenuOpen) {
            mobileMenu.classList.remove('hidden');
            hamburgerLines.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        } else {
            mobileMenu.classList.add('hidden');
            hamburgerLines.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
        mobileMenu.classList.add('hidden');
        hamburgerLines.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }

    // Scroll functions
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function initScrollAnimations() {
        setTimeout(() => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            }, observerOptions);

            // Observe all sections
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                // Add initial hidden state
                section.classList.add('opacity-0', 'translate-y-8');
                observer.observe(section);
            });
        }, 100);
    }

    function addScrollListener() {
        window.addEventListener('scroll', handleScroll);
        // Initial check on load
        handleScroll();
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShow = scrollTop > scrollThreshold;
        
        if (shouldShow !== showScrollToTop) {
            showScrollToTop = shouldShow;
            if (scrollToTopBtn) {
                if (showScrollToTop) {
                    scrollToTopBtn.classList.remove('hidden');
                } else {
                    scrollToTopBtn.classList.add('hidden');
                }
            }
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }