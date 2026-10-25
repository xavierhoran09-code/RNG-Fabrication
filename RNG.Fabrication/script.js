const nav=document.getElementById('nav'),mb=document.querySelector('.menu');
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.gal button').forEach(b=>b.addEventListener('click',()=>{li.src=b.dataset.full;li.alt=b.dataset.alt;lb.showModal()}));
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('x'))lb.close()});
const f=document.getElementById('enq'),st=f.querySelector('.status');
document.querySelectorAll('[data-type]').forEach(a=>a.addEventListener('click',()=>{f.type.value=a.dataset.type}));
f.addEventListener('submit',e=>{e.preventDefault();
 if(!f.checkValidity()){st.textContent='Please fill in your name, phone and a valid email.';f.reportValidity();return}
 const d=Object.fromEntries(new FormData(f));
 const body=`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nEnquiry: ${d.type}\n\n${d.details||''}`;
 location.href='mailto:rngfab@outlook.com?subject='+encodeURIComponent('Website enquiry: '+d.type)+'&body='+encodeURIComponent(body);
 st.textContent='Your email app should open with this enquiry filled in. Nothing is sent until you press send there.'});
