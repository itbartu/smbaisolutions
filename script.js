const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {const isOpen = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(isOpen)); toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');});
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const contactForm = document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(contactForm);
    const subject='SMB AI Solutions enquiry — '+(data.get('business')||'New inquiry');
    const body=`Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`;
    const mail='hello@smbaisolutions.com';
    window.location.href=`mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent='Your email app should open with your message. Please press Send there to finish.';
  });
}
