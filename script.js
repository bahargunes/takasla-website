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
                    // Switch to a shorter transition so scroll movement feels smooth
                    leftHand.style.transition = 'transform 0.75 ease-out, opacity 0.75 ease-out';
                    rightHand.style.transition = 'transform 0.75 ease-out, opacity 0.75 ease-out';
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

    // ===== Phone Stack: Viewport-Center Proximity Animation =====
    const phoneStack = document.getElementById('phone-stack');
    const phoneLeft = document.querySelector('.phone-left');
    const phoneRight = document.querySelector('.phone-right');
    const phoneCenter = document.querySelector('.phone-center');

    if (phoneStack && phoneLeft && phoneRight && phoneCenter) {
        // Easing: smooth deceleration
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        let ticking = false;

        const updatePhoneAnimation = () => {
            const rect = phoneStack.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const stackCenter = rect.top + rect.height / 2;

            // Distance from viewport center, normalized to viewport half-height
            // 0 = phone stack is perfectly centered, 1 = phone stack is one viewport away
            const rawDistance = Math.abs(stackCenter - viewportCenter) / (window.innerHeight * 0.6);
            const distance = Math.min(1, rawDistance);

            // Invert: 1 when centered (fully open), 0 when far (fully closed)
            const openness = easeOutCubic(1 - distance);

            // === Reference-image style: stacked leaning left, fan out to the right ===
            // Closed state: all phones lean left at baseRotation
            // Open state: they fan out like cards — left stays left, center straightens, right goes right
            const baseRotation = -18;  // initial lean (degrees, negative = left)

            // Left phone (bottom of stack): stays leaned left, shifts slightly down-left
            const leftRotate = baseRotation - openness * 5;        // -12° → -17°
            const leftX = -openness * 25;                           // shift left
            const leftY = -openness * 5;                            // shift down
            const leftScale = 1 - openness * 0.03;
            phoneLeft.style.transform = `translateX(${leftX}%) translateY(${leftY}px) rotate(${leftRotate}deg) scale(${leftScale})`;

            // Center phone (middle): straightens up, slight shift right
            const centerRotate = baseRotation + openness * 10;    // -12° → -2°
            const centerX = openness * 8;                          // slight right shift
            const centerY = -openness * 15;                        // lift up
            const centerScale = 1 + openness * 0.03;
            phoneCenter.style.transform = `translateX(${centerX}%) translateY(${centerY}px) rotate(${centerRotate}deg) scale(${centerScale})`;

            // Right phone (top of stack): rotates clockwise, shifts up-right
            const rightRotate = baseRotation + openness * 25;     // -12° → +13°
            const rightX = openness * 30;                          // shift right
            const rightY = -openness * 25;                         // shift up
            const rightScale = 1 + openness * 0.03;
            phoneRight.style.transform = `translateX(${rightX}%) translateY(${rightY}px) rotate(${rightRotate}deg) scale(${rightScale})`;

            // Dynamic shadow depth based on spread
            const shadowBlur = 20 + openness * 25;
            const shadowOpacity = 0.12 + openness * 0.1;
            phoneLeft.style.filter = `drop-shadow(0 ${shadowBlur}px ${shadowBlur * 1.5}px rgba(0,0,0,${shadowOpacity}))`;
            phoneRight.style.filter = `drop-shadow(0 ${shadowBlur}px ${shadowBlur * 1.5}px rgba(0,0,0,${shadowOpacity}))`;
            phoneCenter.style.filter = `drop-shadow(0 ${shadowBlur}px ${shadowBlur * 1.5}px rgba(0,0,0,${shadowOpacity + 0.05}))`;

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updatePhoneAnimation);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        // Initial state
        updatePhoneAnimation();
    }
});
