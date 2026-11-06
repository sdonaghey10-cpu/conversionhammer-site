export function createLayout(React, runtime, Link, useLocation, BrandMark) {
 const h=(type,props,...children)=>children.length===0?runtime.jsx(type,props||{}):children.length===1?runtime.jsx(type,{...props,children:children[0]}):runtime.jsxs(type,{...props,children});
 const link=(href,label,cls='')=>h(Link,{href,className:cls},label);
 const links=[['/services','Services'],['/results','Results'],['/about','About']];
 function Navigation(){
  const [path]=useLocation();const [open,setOpen]=React.useState(false);const button=React.useRef(null);
  React.useEffect(()=>{setOpen(false)},[path]);
  React.useEffect(()=>{
   if(!open)return;
   const key=e=>{if(e.key==='Escape'){setOpen(false);button.current?.focus()}};
   document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);
  },[open]);
  return h('header',{className:'ed-header'},h('nav',{className:'ed-nav','aria-label':'Main navigation'},
   h(Link,{href:'/',className:'ed-brand','aria-label':'Conversion Hammer home'},h(BrandMark,{size:34}),h('span',{},'conversion',h('br',{}),'hammer',h('span',{className:'ed-brand-dot'},'.'))),
   h('div',{className:'ed-desktop-links'},...links.map(([href,label])=>h(Link,{href,key:href,'aria-current':path===href?'page':undefined},label))),
   h('div',{className:'ed-nav-actions'},h('a',{href:'https://app.conversionhammer.com/',target:'_blank',rel:'noopener noreferrer',className:'ed-login'},'Client login'),link('/contact',"Let’s talk",'ed-nav-cta')),
   h('button',{ref:button,className:'ed-menu-toggle',type:'button','aria-label':open?'Close menu':'Open menu','aria-expanded':open,'aria-controls':'ed-mobile-menu',onClick:()=>setOpen(!open)},h('span',{className:open?'is-open':''}),h('span',{className:open?'is-open':''})),
   open?h('div',{id:'ed-mobile-menu',className:'ed-mobile-menu'},...links.map(([href,label],i)=>h(Link,{href,key:href,onClick:()=>setOpen(false)},h('span',{},'0'+(i+1)),label)),link('/contact',"Let’s talk",'ed-mobile-cta'),h('a',{href:'https://app.conversionhammer.com/',target:'_blank',rel:'noopener noreferrer'},'Client login')):null
  ));
 }
 function Footer(){return h('footer',{className:'ed-footer'},h('div',{className:'ed-wrap'},
  h('div',{className:'ed-footer-top'},h('div',{},h(Link,{href:'/',className:'ed-brand'},h(BrandMark,{size:36}),h('span',{},'conversion',h('br',{}),'hammer',h('span',{className:'ed-brand-dot'},'.'))),h('p',{},'Better marketing for service businesses.',h('br',{}),'Improve what you already have.')),
   h('div',{className:'ed-footer-links'},h('span',{className:'ed-eyebrow'},'Explore'),link('/services','Services'),link('/results','Results'),link('/about','About'),link('/contact','Contact')),
   h('div',{className:'ed-footer-links'},h('span',{className:'ed-eyebrow'},'Find us'),h('a',{href:'https://www.instagram.com/stephen_donaghey/',target:'_blank',rel:'noopener noreferrer'},'Instagram'),h('a',{href:'https://www.facebook.com/Stephend410',target:'_blank',rel:'noopener noreferrer'},'Facebook'),h('a',{href:'https://www.youtube.com/@donagheystephen',target:'_blank',rel:'noopener noreferrer'},'YouTube'))),
  h('div',{className:'ed-footer-wordmark','aria-hidden':true},'MAKE AN IMPACT.'),
  h('div',{className:'ed-footer-bottom'},h('span',{},'© '+new Date().getFullYear()+' Conversion Hammer. Ceramic Scaling LLC.'),h('a',{href:'mailto:stephen@conversionhammer.com'},'stephen@conversionhammer.com'))
 ));}
 return {Navigation,Footer};
}
