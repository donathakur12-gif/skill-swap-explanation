(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '✕' : '☰';
    });
  }
  const revealItems = document.querySelectorAll('.feature-card, .process-row, .values-grid article, .faq-item');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    revealItems.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
  }
  const matchButton = document.getElementById('matchButton');
  const matchResult = document.getElementById('matchResult');
  if (matchButton && matchResult) {
    matchButton.addEventListener('click', () => {
      matchResult.textContent = 'A complementary match! Maya can teach photography while Arjun teaches coding. They can take turns learning from one another.';
      matchButton.textContent = 'Exchange revealed ✓';
      matchButton.disabled = true;
    });
  }
  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (contactForm && feedback) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      feedback.textContent = 'Preview ready! This is a visual demo only; your message has not been sent or saved.';
      feedback.classList.add('feedback-active');
    });
  }
})();
