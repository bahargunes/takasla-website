document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Reveal Animation on Scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Active Section Highlighting
    const sections = document.querySelectorAll('section');
    const navLinksDesktop = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.mobile-nav-link');

    const highlightActiveSection = () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset to account for fixed header
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        // Update desktop links
        navLinksDesktop.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Update mobile links
        navLinksMobile.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightActiveSection);
    // Trigger once on load
    highlightActiveSection();

    // Hand slide-in on mount + scroll-driven parallax
    const homeSection = document.getElementById('home');
    const leftHand = document.querySelector('.hand-left');
    const rightHand = document.querySelector('.hand-right');

    if (homeSection && leftHand && rightHand) {
        let scrollDriven = false;

        // Phase 1: Slide hands in using CSS transition (triggered after brief delay)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Setting inline styles triggers the CSS transition from the initial off-screen state
                leftHand.style.transform = 'translateX(0)';
                leftHand.style.opacity = '1';
                rightHand.style.transform = 'translateX(0)';
                rightHand.style.opacity = '1';

                // Phase 2: After the CSS transition completes (~1s), switch to scroll-driven mode
                setTimeout(() => {
                    // Remove CSS transitions so scroll feels instant/responsive
                    leftHand.style.transition = 'none';
                    rightHand.style.transition = 'none';
                    scrollDriven = true;
                    updateHandsFromScroll();
                }, 1050);
            });
        });

        // Scroll-driven parallax — maps scroll position to hand offset
        const updateHandsFromScroll = () => {
            if (!scrollDriven) return;

            const rect = homeSection.getBoundingClientRect();
            const sectionHeight = homeSection.offsetHeight;

            // scrollProgress: 0 when home is fully in view, 1 when scrolled fully past
            const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight * 0.5)));

            const leftOffset = -scrollProgress * 100;
            const rightOffset = scrollProgress * 100;
            const opacity = 1 - scrollProgress;

            leftHand.style.transform = `translateX(${leftOffset}%)`;
            leftHand.style.opacity = `${opacity}`;
            rightHand.style.transform = `translateX(${rightOffset}%)`;
            rightHand.style.opacity = `${opacity}`;
        };

        window.addEventListener('scroll', updateHandsFromScroll);
    }
});
