document.querySelectorAll('[data-coming-soon]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.textContent = 'La entrada llegará con el primer render →';
    link.setAttribute('aria-live', 'polite');
  });
});
