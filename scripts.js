
    // Personalize defaults (change these values to your real name/title easily)
    document.getElementById('site-name').innerText = 'Bradley Mark Gerarcas';
    document.getElementById('hname').innerText = 'Bradley Mark Gerarcas';
    document.getElementById('site-niche').innerText = 'Creative IT & Multimedia Specialist';
    document.getElementById('hniche').innerText = 'Creative IT & Multimedia Specialist';

    // Simple project viewer logic
    const modal = document.getElementById('modal');
    const modalMedia = document.getElementById('modalMedia');
    const modalDesc = document.getElementById('modalDesc');
    const closeBtn = document.getElementById('modalClose');

    function openModal(type, id){
      modalMedia.innerHTML = '';
      if(type === 'image'){
        // create a big SVG placeholder or image
        const img = document.createElement('img');
        img.alt = 'Project full';
        img.src = `images/${id}.jpg`;
        modalMedia.appendChild(img);
        modalDesc.textContent = 'Branding Poster';
      } else if(type === 'video'){
        const video = document.createElement('video');
        video.controls = true;
        video.src = 'images/brand.mp4';
        video.poster = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'><rect width='100%' height='100%' fill='#050505'/><text x='50%' y='48%' fill='#00e6ff' font-size='48' text-anchor='middle' font-family='Arial'>Click play button</text></svg>`);
        // Add a small inline fallback animation
        modalMedia.appendChild(video);
        modalDesc.textContent = 'Brand Video';
      }
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    }

    document.querySelectorAll('.view-btn').forEach((btn)=>{
      btn.addEventListener('click', (e)=>{
        // find closest card's thumb
        const card = e.target.closest('.proj');
        const thumb = card.querySelector('.thumb');
        const type = thumb.getAttribute('data-type');
        const src = thumb.getAttribute('data-src');
        openModal(type, src || 'project');
      })
    })

    closeBtn.addEventListener('click', ()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')});
    modal.addEventListener('click',(e)=>{if(e.target === modal) {modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}})

    // contact form (no backend) - small animation and reset
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const btn = this.querySelector('.send');
      btn.disabled = true; btn.innerText = 'Sending...';
      setTimeout(()=>{btn.innerText='Sent!';this.reset();setTimeout(()=>{btn.disabled=false;btn.innerText='Send Message'},1200)},900);
    });

    // Smooth scrolling for header links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      })
    })

    // Small accessibility: trap focus in modal when open (basic)
    document.addEventListener('keydown',(e)=>{
      if(e.key === 'Escape' && modal.classList.contains('show')){
        modal.classList.remove('show');modal.setAttribute('aria-hidden','true');
      }
    })
function showTab(tab) {
  document.getElementById('contact').style.display = (tab === 'contact') ? 'block' : 'none';
  document.getElementById('edu').style.display = (tab === 'edu') ? 'block' : 'none';
  document.getElementById('contactBtn').style.background = (tab === 'contact') ? 'var(--glass)' : 'transparent';
  document.getElementById('eduBtn').style.background = (tab === 'edu') ? 'var(--glass)' : 'transparent';
  document.getElementById('contactBtn').style.color = (tab === 'contact') ? '#fff' : '#aaa';
  document.getElementById('eduBtn').style.color = (tab === 'edu') ? '#fff' : '#aaa';
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))) {
    return false;
  }
}

