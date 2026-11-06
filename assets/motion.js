const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

const hammer = `<svg viewBox="0 0 520 640" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="metal" x1="100" y1="100" x2="420" y2="280" gradientUnits="userSpaceOnUse"><stop stop-color="#354b57"/><stop offset=".22" stop-color="#b0c8ce"/><stop offset=".32" stop-color="#f1fdff"/><stop offset=".37" stop-color="#617d89"/><stop offset=".62" stop-color="#253640"/><stop offset=".8" stop-color="#91acb6"/><stop offset="1" stop-color="#26333c"/></linearGradient>
 <linearGradient id="face" x1="100" y1="70" x2="320" y2="210" gradientUnits="userSpaceOnUse"><stop stop-color="#e7f7fa"/><stop offset=".2" stop-color="#7a959e"/><stop offset=".5" stop-color="#263d48"/><stop offset="1" stop-color="#8db7c1"/></linearGradient>
 <linearGradient id="handle" x1="237" y1="240" x2="288" y2="560" gradientUnits="userSpaceOnUse"><stop stop-color="#667f89"/><stop offset=".3" stop-color="#15272f"/><stop offset=".6" stop-color="#385963"/><stop offset="1" stop-color="#101b23"/></linearGradient>
 <linearGradient id="edge" x1="110" y1="100" x2="420" y2="260" gradientUnits="userSpaceOnUse"><stop stop-color="#ecffff"/><stop offset=".3" stop-color="#00dee8"/><stop offset="1" stop-color="#007881"/></linearGradient>
</defs>
<g transform="rotate(-29 260 310)">
 <path d="M239 213H282V550L270 571H250L239 550V213Z" fill="url(#handle)" stroke="#68838c" stroke-width="1.5"/>
 <path d="M247 240V542" stroke="#9ab9c0" stroke-opacity=".4" stroke-width="3"/>
 <path d="M239 395L282 380M239 418L282 403M239 441L282 426M239 464L282 449M239 487L282 472M239 510L282 495M239 533L282 518" stroke="#0a161e" stroke-width="10"/>
 <path d="M239 391L282 376M239 414L282 399M239 437L282 422M239 460L282 445M239 483L282 468M239 506L282 491M239 529L282 514" stroke="#53737d" stroke-opacity=".5" stroke-width="1.5"/>
 <path d="M230 228H292V258H230V228Z" fill="#13242e" stroke="#00dee8" stroke-opacity=".8"/>
 <path d="M108 107L146 77H373L411 108V213L374 243H146L108 213V107Z" fill="url(#metal)" stroke="url(#edge)" stroke-width="2"/>
 <path d="M108 107L146 77H373L411 108H108Z" fill="url(#face)" stroke="#c1e5eb" stroke-opacity=".7"/>
 <path d="M108 107L146 130V243L108 213V107Z" fill="#607b85" stroke="#b1d6dc" stroke-opacity=".5"/>
 <path d="M373 130L411 108V213L374 243L373 130Z" fill="#122a34" stroke="#00dee8" stroke-opacity=".6"/>
 <path d="M146 130H373" stroke="#edffff" stroke-opacity=".7"/>
 <path d="M157 220H362" stroke="#00dee8" stroke-opacity=".6"/>
 <path d="M167 148H351V205H167V148Z" fill="#10242d" fill-opacity=".4" stroke="#9fc1c8" stroke-opacity=".35"/>
 <path d="M155 87H365" stroke="#e9ffff" stroke-opacity=".75"/>
</g></svg>`;

class ImpactScene extends HTMLElement {
 connectedCallback() {
  if (this.shadowRoot) return;
  const root = this.attachShadow({mode:'open'});
  root.innerHTML = `<style>
:host{position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none;--mx:70%;--my:42%;contain:layout paint}
.scene{position:absolute;inset:0;background:#090e13;overflow:hidden}
.ambient{position:absolute;inset:-20%;background:radial-gradient(ellipse at 80% 40%,#06434c70,transparent 44%),radial-gradient(ellipse at 30% 80%,#062e3d60,transparent 50%);animation:atmosphere 16s ease-in-out infinite alternate}
.grid{position:absolute;inset:0;background-image:linear-gradient(#74e8ef12 1px,transparent 1px),linear-gradient(90deg,#74e8ef12 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(100deg,transparent 4%,#000 70%);opacity:.55}
.floor{position:absolute;width:180%;height:70%;left:-40%;bottom:-40%;background-image:linear-gradient(#00dee828 1px,transparent 1px),linear-gradient(90deg,#00dee828 1px,transparent 1px);background-size:78px 78px;transform:perspective(450px) rotateX(57deg);mask-image:linear-gradient(transparent,#000 45%);opacity:.6}
.light{position:absolute;inset:0;background:radial-gradient(400px circle at var(--mx) var(--my),#00dee817,transparent 70%)}
.art{position:absolute;right:-8%;top:4%;width:min(57vw,800px);height:88%;opacity:.85;mask-image:linear-gradient(90deg,transparent,#000 25%);filter:drop-shadow(0 0 38px #00dee81a)}
.hammer{position:absolute;inset:0;animation:arrival 1.2s cubic-bezier(.16,1,.3,1) both,float 9s ease-in-out 1.2s infinite;transform-origin:55% 65%}
.hammer svg{width:100%;height:100%}
.halo{position:absolute;width:72%;aspect-ratio:1;left:18%;top:15%;border:1px solid #00dee821;border-radius:50%;box-shadow:0 0 80px #00dee811,inset 0 0 80px #00dee80c}
.halo::after{content:'';position:absolute;inset:12%;border:1px dashed #00dee827;border-radius:50%;animation:orbit 80s linear infinite}
.wave{position:absolute;left:77%;top:41%;width:160px;height:160px;margin:-80px;border:2px solid #7affff;border-radius:50%;box-shadow:0 0 30px #00dee865,inset 0 0 20px #00dee82b;animation:impact 1.8s cubic-bezier(.1,.4,.3,1) .35s both}
.wave.two{animation-delay:.53s;border-width:1px}
.specks{position:absolute;inset:0}
.specks i{position:absolute;width:2px;height:2px;border-radius:50%;background:#85f8ff;box-shadow:0 0 10px #00dee8;opacity:.45;animation:drift 11s ease-in-out infinite alternate}
.specks i:nth-child(1){left:58%;top:30%}.specks i:nth-child(2){left:88%;top:18%;animation-delay:-3s}.specks i:nth-child(3){left:65%;top:72%;animation-delay:-6s}.specks i:nth-child(4){left:91%;top:61%;animation-delay:-8s}.specks i:nth-child(5){left:48%;top:61%;animation-delay:-1s}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,#090e13ee 0%,#090e13c0 34%,#090e1330 65%,transparent),linear-gradient(0deg,#090e13,transparent 22%)}
@keyframes impact{0%{transform:scale(.2);opacity:0}12%{opacity:.8}100%{transform:scale(8);opacity:0}}
@keyframes arrival{from{opacity:0;transform:translate(40px,-70px) rotate(12deg)}to{opacity:1;transform:translate(0,0) rotate(0)}}
@keyframes float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-16px) rotate(2deg)}}
@keyframes atmosphere{to{transform:translate(-3%,4%);opacity:.7}}
@keyframes orbit{to{transform:rotate(360deg)}}
@keyframes drift{to{transform:translate(12px,-35px);opacity:.15}}
@media(max-width:900px){.art{right:-19%;width:78vw;top:12%;opacity:.5}.shade{background:linear-gradient(90deg,#090e13f0,#090e13b0 50%,#090e1330),linear-gradient(0deg,#090e13,transparent 25%)}.grid{background-size:48px 48px}.wave{left:82%}}
@media(max-width:600px){.art{right:-52%;width:130vw;top:9%;height:70%;opacity:.32}.ambient{background:radial-gradient(ellipse at 95% 20%,#07596570,transparent 55%)}.shade{background:linear-gradient(90deg,#090e13da,#090e1380 70%,#090e1330),linear-gradient(0deg,#090e13,transparent 30%)}.wave{left:78%;top:26%;animation-duration:1.4s}.grid{opacity:.35}.floor{opacity:.25}.specks i:nth-child(n+4){display:none}.light{display:none}}
@media(prefers-reduced-motion:reduce){*{animation:none!important}.wave{display:none}.hammer{opacity:1}.halo::after{transform:rotate(12deg)}}
:host([paused]) *{animation-play-state:paused!important}
</style><div class="scene"><div class="ambient"></div><div class="grid"></div><div class="floor"></div><div class="light"></div><div class="art"><div class="halo"></div><div class="hammer">${hammer}</div></div><div class="wave"></div><div class="wave two"></div><div class="specks"><i></i><i></i><i></i><i></i><i></i></div><div class="shade"></div></div>`;
  const hero = this.parentElement;
  let frame = 0;
  const pointer = event => {
   if (motionPreference.matches || !finePointer.matches || frame) return;
   frame = requestAnimationFrame(() => {
    const rect=hero.getBoundingClientRect();
    this.style.setProperty('--mx',`${((event.clientX-rect.left)/rect.width)*100}%`);
    this.style.setProperty('--my',`${((event.clientY-rect.top)/rect.height)*100}%`);frame=0;
   });
  };
  hero.addEventListener('pointermove',pointer,{passive:true});
  const visibility = () => this.toggleAttribute('paused',document.hidden);
  document.addEventListener('visibilitychange',visibility);
  const observer = new IntersectionObserver(([entry])=>this.toggleAttribute('paused',!entry.isIntersecting||document.hidden));
  observer.observe(this);visibility();
  this.cleanup=()=>{hero.removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',visibility);observer.disconnect();cancelAnimationFrame(frame)};
 }
 disconnectedCallback(){this.cleanup?.()}
}
customElements.define('ch-impact-scene',ImpactScene);

export function mountMotion(){
 const scope=document.getElementById('root');
 if(scope?.querySelector('iframe[src*="leadconnectorhq.com"]')&&!document.getElementById('ghl-calendar-embed-script')){const embed=document.createElement('script');embed.id='ghl-calendar-embed-script';embed.src='https://link.msgsndr.com/js/form_embed.js';document.body.appendChild(embed)}
 const cleanups=[];
 if(!scope) return;
 const headings=[...scope.querySelectorAll('section h2,section h3')];
 const cards=[...scope.querySelectorAll('section [class*="rounded-2xl"][class*="border"]')].filter(el=>!el.querySelector('iframe,video')&&!el.closest('.ch-hero'));
 const buttons=[...scope.querySelectorAll('a[class*="rounded"][class*="uppercase"],button[class*="rounded"]')];
 cards.forEach(el=>el.classList.add('ch-card'));
 buttons.forEach(el=>el.classList.add('ch-button'));
 const revealTargets=[...new Set([...headings,...cards])];
 if(!motionPreference.matches && 'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('ch-visible');observer.unobserve(entry.target)}})
  },{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  revealTargets.forEach(el=>{el.classList.add('ch-reveal');observer.observe(el)});
  const onPreference=()=>{if(motionPreference.matches){revealTargets.forEach(el=>el.classList.add('ch-visible'));observer.disconnect()}};
  motionPreference.addEventListener('change',onPreference);
  cleanups.push(()=>{observer.disconnect();motionPreference.removeEventListener('change',onPreference)});
 }
 const pulse=event=>{
  const button=event.target.closest('.ch-button');
  if(!button||motionPreference.matches) return;
  button.classList.remove('ch-pulsing');void button.offsetWidth;button.classList.add('ch-pulsing');
 };
 scope.addEventListener('pointerdown',pulse);
 scope.addEventListener('keydown',keyPulse);
 function keyPulse(event){if(event.key==='Enter'||event.key===' ')pulse(event)}
 cleanups.push(()=>{scope.removeEventListener('pointerdown',pulse);scope.removeEventListener('keydown',keyPulse)});
 return ()=>{cleanups.forEach(fn=>fn());revealTargets.forEach(el=>el.classList.remove('ch-reveal','ch-visible'));cards.forEach(el=>el.classList.remove('ch-card'));buttons.forEach(el=>el.classList.remove('ch-button','ch-pulsing'))};
}
