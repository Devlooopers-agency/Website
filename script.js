(function(){
  const body=document.body;
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}

  const scene=document.getElementById('heroScene');
  if(scene && window.matchMedia('(pointer:fine)').matches){
    let tx=0,ty=0,cx=0,cy=0;
    window.addEventListener('pointermove',e=>{tx=(e.clientX/window.innerWidth-.5)*10;ty=(e.clientY/window.innerHeight-.5)*7},{passive:true});
    function tick(){cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;scene.style.transform=`rotateX(${-cy}deg) rotateY(${cx}deg)`;requestAnimationFrame(tick)} tick();
  }

  const form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=document.getElementById('formStatus');status.textContent='Thanks — this demo form is ready to be connected to your preferred email/API endpoint.';form.reset()});}

  document.querySelectorAll('a[href]').forEach(link=>{
    const href=link.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
    link.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;e.preventDefault();document.querySelector('.page-wipe')?.classList.add('leave');setTimeout(()=>window.location.href=href,220)});
  });

  // Small touch interaction for cards on mobile
  document.querySelectorAll('.project-card,.service-panel').forEach(card=>{card.addEventListener('pointerdown',()=>card.style.transform='scale(.992)');card.addEventListener('pointerup',()=>card.style.transform='');card.addEventListener('pointercancel',()=>card.style.transform='')});
})();
