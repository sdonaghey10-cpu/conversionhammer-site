class GrowthOrbit extends HTMLElement{
 connectedCallback(){
  if(this.shadowRoot)return;
  const root=this.attachShadow({mode:'open'});
  root.innerHTML=`<style>
:host{display:block;position:relative;width:min(100%,390px);aspect-ratio:1.28;pointer-events:none;contain:layout paint}
.visual{position:absolute;inset:4%;display:grid;place-items:center;perspective:700px}
.glow{position:absolute;width:70%;height:70%;border-radius:50%;background:radial-gradient(circle,#00dee819,transparent 70%);animation:breathe 7s ease-in-out infinite}
.orbit{position:absolute;width:76%;height:76%;border:1px solid #8ddce53b;border-radius:50%;transform:rotateX(58deg) rotate(-28deg)}
.orbit.two{width:66%;height:66%;transform:rotateY(57deg) rotate(38deg);border-color:#82d5df30}
.orbit.three{width:86%;height:86%;transform:rotateX(60deg) rotate(48deg);border-color:#7fa4b424}
.track{position:absolute;inset:-1px;animation:spin 12s linear infinite;border-radius:50%}
.two .track{animation-duration:17s;animation-direction:reverse}.three .track{animation-duration:23s}
.track:before{content:'';position:absolute;top:50%;left:-4px;width:7px;height:7px;background:#a1faff;border-radius:50%;box-shadow:0 0 18px #00dee8}
.core{position:relative;width:94px;height:94px;display:grid;place-items:center;border-radius:28px;background:linear-gradient(145deg,#29444f,#0a181f 48%,#314f59);border:1px solid #9ddbe746;box-shadow:inset 1px 1px 0 #c8f8ff3b,0 16px 35px #0005;transform:rotate(-10deg);animation:float 7s ease-in-out infinite}
.core svg{width:40px;height:40px;stroke:#b6f9f6}
.label{position:absolute;font:9px ui-monospace,monospace;letter-spacing:.13em;color:#8aa8b0;text-transform:uppercase;display:flex;gap:8px;align-items:center}
.label:before{content:'';width:4px;height:4px;border-radius:50%;background:#00dee8}
.audit{left:1%;top:23%}.improve{right:0;top:40%}.measure{left:12%;bottom:8%}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes breathe{50%{opacity:.35;transform:scale(1.12)}}@keyframes float{50%{transform:translateY(-10px) rotate(-4deg)}}
:host([paused]) *{animation-play-state:paused!important}
@media(prefers-reduced-motion:reduce){*{animation:none!important}}
@media(max-width:600px){:host{max-width:330px;aspect-ratio:1.55}.label{font-size:8px}.core{width:76px;height:76px;border-radius:22px}.orbit{width:65%;height:83%}.orbit.two{width:55%;height:72%}.orbit.three{width:78%;height:90%}.audit{left:2%;top:20%}.measure{bottom:4%}}
</style><div class="visual"><div class="glow"></div><div class="orbit"><div class="track"></div></div><div class="orbit two"><div class="track"></div></div><div class="orbit three"><div class="track"></div></div><div class="core"><svg viewBox="0 0 40 40" fill="none"><path d="M8 29V23M19 29V16M30 29V8" stroke-width="4" stroke-linecap="round"/><path d="M8 15L19 8L30 3M23 3H30V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span class="label audit">Audit</span><span class="label improve">Improve</span><span class="label measure">Measure</span></div>`;
  const observer=new IntersectionObserver(([entry])=>this.toggleAttribute('paused',!entry.isIntersecting||document.hidden));observer.observe(this);
  const visibility=()=>this.toggleAttribute('paused',document.hidden);document.addEventListener('visibilitychange',visibility);
  this.cleanup=()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility)};
 }
 disconnectedCallback(){this.cleanup?.()}
}
customElements.define('ch-growth-orbit',GrowthOrbit);
