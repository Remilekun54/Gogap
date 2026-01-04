

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#8B1A3E',    // Deep Burgundy (The Bar)
        secondary: '#FFD700',  // Bright Gold (The Text)
        accent: '#F5A623',     // Amber (The Oil Drop)
        brandLight: '#FFF8E1', // A very light cream for backgrounds
      },
      animation: {
                        'bounce-slow': 'bounce 3s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
    }
  }
}
// Init Lucide
        lucide.createIcons();

        // Nav Logic
        function navigateTo(pageId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const pages = document.querySelectorAll('.page-transition');
            pages.forEach(page => {
                page.classList.remove('active-page');
                if(page.id === `${pageId}-page`) {
                    gsap.fromTo(page, 
                        { opacity: 0, y: 30 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
                    );
                    page.classList.add('active-page');
                }
            });

            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Mobile Toggle
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) {
                nav.classList.add('h-16', 'shadow-2xl');
                nav.classList.remove('h-20');
            } else {
                nav.classList.remove('h-16', 'shadow-2xl');
                nav.classList.add('h-20');
            }
        });

        // Entrance
        window.onload = () => {
            gsap.from("nav", { y: -100, opacity: 0, duration: 1.2, ease: "power4.out" });
            gsap.from(".serif", { 
                y: 80, 
                opacity: 0, 
                duration: 1.5, 
                ease: "expo.out",
                stagger: 0.3
            });
        };
// Bulletproof Carousel Logic
window.addEventListener('load', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot-progress');
    let currentIndex = 0;
    const slideDuration = 6; // seconds

    if (slides.length === 0) return; // Safety check

    function playSlide(index) {
        // 1. Handle Slide Visibility
        slides.forEach((slide, i) => {
            if (i === index) {
                gsap.to(slide, { opacity: 1, zIndex: 10, duration: 1 });
                
                // 2. Ken Burns Effect (Zoom)
                const img = slide.querySelector('.ken-burns');
                gsap.fromTo(img, 
                    { scale: 1 }, 
                    { scale: 1.15, duration: slideDuration, ease: "none" }
                );

                // 3. Text Content Animation
                const content = slide.querySelector('.slide-content');
                if (content) {
                    gsap.fromTo(content.children, 
                        { y: 50, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5, ease: "power3.out" }
                    );
                }
            } else {
                gsap.to(slide, { opacity: 0, zIndex: 0, duration: 1 });
            }
        });

        // 4. Dot Progress Animation
        dots.forEach((dot, i) => {
            gsap.set(dot, { width: 0 });
            if (i === index) {
                gsap.to(dot, { width: "100%", duration: slideDuration, ease: "none" });
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        playSlide(currentIndex);
    }

    // Initialize first slide
    playSlide(0);

    // Set interval for auto-play
    setInterval(nextSlide, slideDuration * 1000);
});



const content = currentSlide.querySelector('.slide-content');
gsap.fromTo(content, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
);





// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// // 1. Sermon Cards Animation (Staggered fade up)
// gsap.from(".sermon-card", {
//     scrollTrigger: {
//         trigger: "#sermons-preview",
//         start: "top 75%",
//     },
//     y: 60,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out"
// });

// 2. Store Section (Image slides left, Text slides right)
// const storeTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#store-preview",
//         start: "top 70%",
//     }
// });
// storeTl.from(".store-image", { x: -80, opacity: 0, duration: 1.2, ease: "power4.out" })
//        .from(".store-text", { x: 80, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=1");

// 3. Pastor Section (Reveal with a scale-in image)
// gsap.from(".pastor-info", {
//     scrollTrigger: {
//         trigger: "#pastor-section",
//         start: "top 70%",
//     },
//     x: -50,
//     opacity: 0,
//     duration: 1.2
// });
// gsap.from(".pastor-image img", {
//     scrollTrigger: {
//         trigger: "#pastor-section",
//         start: "top 70%",
//     },
//     scale: 1.2,
//     opacity: 0,
//     duration: 1.5,
//     ease: "expo.out"
// });

// 4. Events Stagger
// gsap.from(".event-card", {
//     scrollTrigger: {
//         trigger: "#events",
//         start: "top 80%",
//     },
//     scale: 0.9,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "back.out(1.7)"
// });

// 5. Family Portfolio (Horizontal Entrance)
// gsap.from(".portfolio-track img", {
//     scrollTrigger: {
//         trigger: ".portfolio-track",
//         start: "top 85%",
//     },
//     x: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.1,
//     ease: "power2.out"
// });

// 6. Contact Form (Fade in)
// gsap.from("#contact-preview form", {
//     scrollTrigger: {
//         trigger: "#contact-preview",
//         start: "top 75%",
//     },
//     y: 40,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out"
// });