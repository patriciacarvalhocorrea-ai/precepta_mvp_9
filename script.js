
function demoNotice(message){
  const old=document.querySelector('.demo-toast'); if(old) old.remove();
  const n=document.createElement('div'); n.className='demo-toast'; n.textContent=message+' — integração com backend ainda não conectada.';
  document.body.appendChild(n); setTimeout(()=>n.remove(),3200);
}
document.querySelectorAll('.show-pass').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const input=document.getElementById(btn.dataset.target);
    input.type=input.type==='password'?'text':'password';
    btn.textContent=input.type==='password'?'Mostrar':'Ocultar';
  });
});
const profileButtons=[...document.querySelectorAll('.profile-select button')];
let profile=null;
function selectProfile(p){
  profile=p;
  profileButtons.forEach(b=>b.classList.toggle('selected',b.dataset.profile===p));
  const next=document.querySelector('#signup-step-1 .next-signup'); if(next) next.disabled=false;
}
profileButtons.forEach(b=>b.addEventListener('click',()=>selectProfile(b.dataset.profile)));
const params=new URLSearchParams(location.search); if(params.get('perfil')) selectProfile(params.get('perfil'));
let currentStep=1;
function showStep(n){
  currentStep=n;
  document.querySelectorAll('.signup-step').forEach((el,i)=>el.classList.toggle('active',i===n-1));
  document.querySelectorAll('.step').forEach((el,i)=>el.classList.toggle('active',i<=n-1));
}
document.querySelectorAll('.next-signup').forEach(btn=>btn.addEventListener('click',()=>{ if(currentStep<3) showStep(currentStep+1); }));
document.querySelectorAll('.back-signup').forEach(btn=>btn.addEventListener('click',()=>{ if(currentStep>1) showStep(currentStep-1); }));
document.querySelectorAll('.start-options button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.start-options button').forEach(x=>x.classList.remove('selected')); b.classList.add('selected');
}));
