/**
 * Glamora theme — base JS (smooth scroll, validation, scroll animations, images).
 * Native lazy-loaded images are left to the browser; we only observe img[data-src].
 */
(function () {
  'use strict';

  function debounce(func, wait) {
    var timeout;
    return function () {
      var ctx = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(ctx, args);
      }, wait);
    };
  }

  function throttle(func, limit) {
    var inThrottle;
    return function () {
      if (!inThrottle) {
        func.apply(this, arguments);
        inThrottle = true;
        setTimeout(function () {
          inThrottle = false;
        }, limit);
      }
    };
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initFormValidation() {
    var forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!validateForm(form)) e.preventDefault();
      });
      form.querySelectorAll('input, textarea, select').forEach(function (input) {
        input.addEventListener('blur', function () {
          validateField(input);
        });
      });
    });
  }

  function validateForm(form) {
    var ok = true;
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(function (input) {
      if (!validateField(input)) ok = false;
    });
    return ok;
  }

  function validateField(field) {
    var value = field.value.trim();
    var type = field.type;
    var isValid = true;
    var errorMessage = '';
    var existingError = field.parentElement.querySelector('.field-error');
    if (existingError) existingError.remove();
    field.classList.remove('error');
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }
    if (type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
    if (type === 'tel' && value && (!/^[\d\s\-+()]+$/.test(value) || value.length < 10)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number';
    }
    if (!isValid) {
      field.classList.add('error');
      var err = document.createElement('span');
      err.className = 'field-error';
      err.textContent = errorMessage;
      field.parentElement.appendChild(err);
    }
    return isValid;
  }

  function initScrollAnimations() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var sel = '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale';
    if (prefersReducedMotion) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add('animated');
      });
      return;
    }
    if ('IntersectionObserver' in window) {
      var animationObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) entry.target.classList.add('animated');
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      document.querySelectorAll(sel).forEach(function (el) {
        animationObserver.observe(el);
      });
    } else {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add('animated');
      });
    }
  }

  function markImageLoaded(img) {
    img.classList.add('loaded');
    if (img.getAttribute('loading') === 'lazy') img.style.opacity = '1';
  }

  function initImages() {
    function handleImageError(img) {
      img.classList.add('image-error');
      if (!img.alt || img.alt === '') img.alt = 'Image failed to load';
    }

    document.querySelectorAll('img').forEach(function (img) {
      if (img.dataset.errorHandlerAdded) return;
      img.dataset.errorHandlerAdded = 'true';
      img.addEventListener(
        'error',
        function () {
          handleImageError(this);
        },
        { once: true }
      );
      img.addEventListener(
        'load',
        function () {
          markImageLoaded(this);
        },
        { once: true }
      );
      if (img.complete && img.naturalHeight !== 0) markImageLoaded(img);
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            obs.unobserve(img);
          });
        },
        { rootMargin: '80px' }
      );
      document.querySelectorAll('img[data-src], img[data-srcset]').forEach(function (img) {
        io.observe(img);
      });
    } else {
      document.querySelectorAll('img[data-src]').forEach(function (img) {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
      document.querySelectorAll('img[data-srcset]').forEach(function (img) {
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
      });
    }
  }

  function init() {
    initSmoothScroll();
    initFormValidation();
    initScrollAnimations();
    initImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.SarvitalTheme = {
    debounce: debounce,
    throttle: throttle
  };
})();
