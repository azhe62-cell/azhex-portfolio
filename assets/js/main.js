(function(){
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('yr').textContent=new Date().getFullYear();
  // theme
  var root=document.documentElement;
  document.getElementById('theme').onclick=function(){
    var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme=dark?'light':'dark';
  };
  // reveal
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window && !rm){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});
  if(rm) return;
  // hero parallax
  var layers=document.querySelectorAll('#stage [data-d]');
  addEventListener('pointermove',function(e){
    var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
    layers.forEach(function(l){var d=+l.dataset.d;l.style.transform='translate3d('+(x*d)+'px,'+(y*d)+'px,0)'});
  },{passive:true});
  // magnetic buttons
  document.querySelectorAll('.mag').forEach(function(b){
    b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();
      b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.28)+'px)'});
    b.addEventListener('pointerleave',function(){b.style.transform=''});
  });
  // glass highlight follows pointer
  document.querySelectorAll('.glass').forEach(function(g){
    g.addEventListener('pointermove',function(e){var r=g.getBoundingClientRect();
      g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });
})();

// certificate lightbox
(function(){var d=document.getElementById('lb'),i=document.getElementById('lbi');
  document.querySelectorAll('.thumb').forEach(function(t){t.onclick=function(){var im=t.querySelector('img');i.src=im.src;i.alt=im.alt;d.showModal()}});
  document.getElementById('lbx').onclick=function(){d.close()};
  d.addEventListener('click',function(e){if(e.target===d)d.close()});})();
// rule-based chatbot
(function(){
  var btn=document.getElementById('chatBtn'),box=document.getElementById('chat'),log=document.getElementById('log'),inp=document.getElementById('q');
  var A=[
    [/project|work|toolmetri|shopify|store|urban/,'I have two live projects: ToolMetri (interactive web tools, toolmetri.com/tools.html) and Urban Clutch, a password-protected Shopify store design. Message Aijaz for store access.'],
    [/skill|stack|tech|can you|service|design/,'Web and frontend development, UI/UX, graphic design, AI-assisted (vibe) development, SaaS tools, Shopify with basic Custom Liquid, e-commerce SEO, GitHub and Vercel.'],
    [/cert|train|course|nic|pitp|muet|educat/,'E-Commerce Professional (PITP at MUET, 2025), Vibe Development (No Code) at NIC Hyderabad (2026), and Graphic Designing. Open the Certificates page and click one to view it.'],
    [/contact|email|whatsapp|phone|hire|reach/,'WhatsApp: +92 313 4088103. Email: azheknows62@gmail.com.'],
    [/hi|hello|hey/,'Hello! I’m the AZHEX assistant. Ask me about projects, skills, certificates or contact details.']
  ];
  function add(t,c){var d=document.createElement('div');d.className='m '+c;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
  function ask(t){add(t,'me');var s=t.toLowerCase(),r='I only know a few topics: projects, skills, certificates and contact. For anything else, please message Aijaz directly.';
    for(var i=0;i<A.length;i++){if(A[i][0].test(s)){r=A[i][1];break}} setTimeout(function(){add(r,'bot')},250)}
  add('Hi! I’m a simple keyword bot. Pick a topic below.','bot');
  btn.onclick=function(){var o=box.classList.toggle('open');btn.setAttribute('aria-expanded',o);if(o)inp.focus()};
  box.addEventListener('keydown',function(e){if(e.key==='Escape'){box.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus()}});
  box.querySelectorAll('.qs button').forEach(function(b){b.onclick=function(){ask(b.textContent)}});
  box.querySelector('form').onsubmit=function(e){e.preventDefault();var v=inp.value.trim();if(v){ask(v);inp.value=''}};
})();

(function(){var n=document.querySelector('nav'),m=document.getElementById('menu');if(!m)return;
 m.onclick=function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)};
 n.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');m.setAttribute('aria-expanded','false')})});
 addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');m.setAttribute('aria-expanded','false')}});})();
