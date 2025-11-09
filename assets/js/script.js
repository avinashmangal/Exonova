// Basic interactivity: mobile nav toggle, smooth scroll, form stub, year
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      if(getComputedStyle(mainNav).display === 'flex' || mainNav.style.display === 'flex'){
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
      }
    });
  }

  // Smooth anchor scrolling for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Formspree submission feedback (graceful fallback)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      // Let Formspree handle submission; show quick feedback
      setTimeout(()=>{
        alert('Thanks — your message was submitted. If you used the placeholder Formspree ID, replace it with your real form ID to receive emails.');
      }, 400);
    });
  }
});
