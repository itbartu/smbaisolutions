const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {const isOpen = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(isOpen)); toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');});
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const status = document.querySelector('#form-status');
    const button = contactForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Sending enquiry…';
    status.textContent = 'Sending your enquiry securely…';
    status.className = 'status';
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      const success = response.ok && (result.success === true || result.success === 'true');
      if (!success) throw new Error('Unable to confirm delivery');
      status.textContent = 'Thank you! Your enquiry was submitted. We’ll be in touch soon.';
      status.classList.add('status-success');
      contactForm.reset();
    } catch (error) {
      status.textContent = 'We couldn’t submit the form right now. Please email sales@smbaisolutions.com or call (754) 219-2377.';
      status.classList.add('status-error');
    } finally {
      button.disabled = false;
      button.textContent = 'Send enquiry ↗';
    }
  });
}
