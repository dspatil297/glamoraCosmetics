/**
 * Glamora theme — base JS (smooth scroll, validation, image load styling).
 * Native lazy-loaded images use loading="lazy"; no data-src / lazysizes.
 */
(function () {
  'use strict';

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
  }

  function init() {
    initSmoothScroll();
    initFormValidation();
    initImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
