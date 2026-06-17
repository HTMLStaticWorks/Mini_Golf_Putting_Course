document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Scroll Effect
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    // Initial check on load
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }

  // 2. Mobile Navigation Overlay Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent body scrolling
    });
  }

  const closeMobileMenu = () => {
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 2b. Mobile Navigation Dropdown Toggle Handler
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggle.classList.toggle('active');
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('active');
      }
    });
  });

  // 3. Dynamic Gallery Filtering (For gallery.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button styling
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.classList.add('fade-in-el');
          } else {
            item.style.display = 'none';
            item.classList.remove('fade-in-el');
          }
        });
      });
    });
  }

  // 4. Contact/Newsletter Signups (Simulated UI notifications)
  const forms = document.querySelectorAll('.needs-validation-ui');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your submission was successful. (UI Simulation)');
      form.reset();
    });
  });

  // 5. Accordion / FAQ Toggle
  const accordionHeaders = document.querySelectorAll('.faq-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const icon = header.querySelector('.faq-icon i');
      
      // Close other items
      const activeItems = document.querySelectorAll('.faq-accordion-item.active');
      activeItems.forEach(activeItem => {
        if (activeItem !== item) {
          activeItem.classList.remove('active');
          activeItem.querySelector('.faq-accordion-content').style.maxHeight = null;
          header.setAttribute('aria-expanded', 'false');
          const activeIcon = activeItem.querySelector('.faq-icon i');
          if (activeIcon) activeIcon.className = 'fas fa-plus';
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
        if (icon) icon.className = 'fas fa-minus';
      } else {
        content.style.maxHeight = null;
        header.setAttribute('aria-expanded', 'false');
        if (icon) icon.className = 'fas fa-plus';
      }
    });
  });
});
