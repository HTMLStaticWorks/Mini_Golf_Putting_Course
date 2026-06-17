document.addEventListener('DOMContentLoaded', () => {
  // Gracefully verify if GSAP is available in the browser window context
  if (typeof gsap !== 'undefined') {
    
    // Register ScrollTrigger if it was loaded via CDN
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 1. Hero Content Fade-Up Intro (Runs on Page Load)
    const heroElements = document.querySelectorAll('.hero-animate');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }

    // 2. Scroll-triggered Single Reveal (Standard Fade-Up)
    const reveals = document.querySelectorAll('.gsap-reveal');
    reveals.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 3. Staggered Reveals (For Grid Cards, Lists, etc.)
    const staggerGrids = document.querySelectorAll('.gsap-stagger-grid');
    staggerGrids.forEach(grid => {
      const items = grid.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        gsap.from(items, {
          opacity: 0,
          y: 35,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      }
    });
  }
});
