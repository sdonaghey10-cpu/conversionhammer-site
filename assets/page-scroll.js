export function mountPageScroll(){
 if('scrollRestoration' in history)history.scrollRestoration='manual';
 let interacted=false;let frame=0;
 const events=['wheel','touchstart','pointerdown','keydown'];
 const intent=()=>{interacted=true};
 const reset=()=>{if(!interacted)window.scrollTo({top:0,left:0,behavior:'instant'})};
 events.forEach(type=>window.addEventListener(type,intent,{passive:true,once:true}));
 reset();frame=requestAnimationFrame(reset);
 const loaded=()=>reset();
 if(document.readyState!=='complete')window.addEventListener('load',loaded,{once:true});
 const shown=event=>{if(event.persisted&&!interacted)reset()};
 window.addEventListener('pageshow',shown);
 return()=>{cancelAnimationFrame(frame);events.forEach(type=>window.removeEventListener(type,intent));window.removeEventListener('load',loaded);window.removeEventListener('pageshow',shown)};
}
