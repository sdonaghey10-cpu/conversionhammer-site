import './growth-orbit.js';
export function createHome(React,runtime,Layout,LogoStrip,Counter,Link,Stories){
 const h=(type,props,...children)=>children.length===0?runtime.jsx(type,props||{}):children.length===1?runtime.jsx(type,{...props,children:children[0]}):runtime.jsxs(type,{...props,children});
 const cta=(label='Book a growth session',href='/contact',variant='')=>h(Link,{href,className:'ed-button '+variant},h('span',{},label),h('span',{'aria-hidden':true,className:'ed-button-icon'},'↗'));
 const eyebrow=(number,text)=>h('div',{className:'ed-eyebrow'},h('span',{},number),text);
 const faqs=[
  ['Do ads work for my kind of business?','We audit your existing offer, targeting, and follow-up to find why your current marketing is underperforming. Then we improve the weak points and measure the effect.'],
  ['How do we avoid wasting more money?','We start by finding where your current spend is leaking, then make each part of the client journey more intentional.'],
  ['What if we are not a good fit?','We look at your business, market, capacity, and goals before we recommend anything. If we do not see a real path to value, we will be upfront.'],
  ['How is this different from other agencies?','You see the strategy, the actions, and the metrics behind every decision instead of getting a generic monthly report.'],
  ['What if we already get referrals?','That is a strong foundation. We improve the marketing and follow-up you already have so qualified opportunities become more consistent alongside referrals.']
 ];
 function Home(){return h(Layout,{},h('div',{className:'ed-home'},
  h('section',{className:'ch-hero ed-hero'},
   h('ch-impact-scene',{'aria-hidden':'true'}),
   h('div',{className:'ed-wrap ed-hero-inner'},
    h('div',{className:'ed-hero-top'},h('span',{className:'ed-eyebrow'},'Audit. Improve. Grow.'),h('span',{className:'ed-availability'},h('i',{}),'Open for new partnerships')),
    h('div',{className:'ed-hero-copy'},h('h1',{},'Get more clients.',h('br',{}),'Stop wasting',h('br',{}),h('span',{},'ad spend.')),
     h('p',{},'You already invest in marketing. We find what is holding it back, then improve your campaigns, follow-up, and reporting.'),
     h('div',{className:'ed-hero-actions'},cta(),h(Link,{href:'/results',className:'ed-text-link'},'See the results',h('span',{'aria-hidden':true},'↗')))),
    h('p',{className:'ed-entry-note'},'For service businesses doing over $1M in revenue, with marketing already in place.'),h('div',{className:'ed-hero-baseline'},h('span',{},'Existing marketing. Better performance.'),h('button',{type:'button',onClick:()=>document.getElementById('the-system')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})},'Explore the system',h('span',{'aria-hidden':true},'↓')))
   )
  ),
  h(LogoStrip,{}),
  h(Stories.ProofBar,{}),
  h('section',{id:'the-system',className:'ed-system ed-paper'},h('div',{className:'ed-wrap'},
   eyebrow('01','The whole system'),
   h('div',{className:'ed-intro-grid'},h('h2',{},'Better marketing.',h('br',{}),'Starts with an audit.'),h('div',{},h('p',{className:'ed-lead'},'Start with what you already have.'),h('p',{},'We audit your current campaigns, creative, follow-up, and reporting. Then we improve the weak points in that existing system to help you generate more qualified clients.'))),
   h('div',{className:'ed-service-list'},
    ...[
     ['01','Find your people.','Paid advertising & market research','Audit your current audience, offer, and ad spend. Refine who you target and where your budget goes.'],
     ['02','Turn interest into action.','Creative & conversion','Improve the ads and landing pages you already use, so your value is clearer and more of the right people respond.'],
     ['03','Keep the conversation going.','AI follow-up & appointment systems','Find the gaps in your existing CRM, follow-up, and booking process. Improve the handoff from inquiry to appointment.'],
     ['04','Make every move measurable.','Reporting & continuous improvement','Audit the tracking and reporting already in place. Get a clearer view of what your marketing produces and what to improve next.']
    ].map(([num,title,label,body])=>h('div',{className:'ed-service-row',key:num},h('span',{className:'ed-service-number'},num),h('div',{},h('h3',{},title),h('span',{className:'ed-service-label'},label)),h('p',{},body)))
   ),h('div',{className:'ed-section-end'},h('p',{},'An audit of your existing setup. A focused plan to make it work harder.'),cta('Explore our services','/services','ed-button-dark'))
  )),
  h('section',{className:'ed-fit'},h('div',{className:'ed-wrap ed-fit-grid'},
   h('div',{},eyebrow('02','A stronger next chapter'),h('h2',{},'Is this',h('br',{}),'for you?'),h('p',{className:'ed-fit-intro'},'You already have marketing in place. Now you want it to perform better.'),h('ch-growth-orbit',{'aria-hidden':'true'})),
   h('div',{className:'ed-fit-copy'},h('p',{className:'ed-lead'},'For established service businesses with an existing marketing structure.'),h('p',{},'Our work starts with an audit of your current setup. You bring the campaigns, systems, and sales process. We find what to improve.'),h('dl',{className:'ed-fit-checklist'},...[
    ['Business stage','Over $1 million in annual revenue'],['Business type','Service business'],['Team size','5–10 people'],['Years in business','5+ years in business'],['Your goal','More qualified clients'],['Commitment','Ready to invest in a growth system'],['Marketing today','Marketing and systems already in place']
   ].map(([label,value])=>h('div',{key:label},h('dt',{},label),h('dd',{},value))))),
  )),
  h('section',{className:'ed-standard'},h('div',{className:'ed-wrap'},h('span',{className:'ed-eyebrow'},'The no-waste standard'),h('h2',{},'Less noise.',h('br',{}),'More ',h('span',{},'impact.')),h('div',{className:'ed-standard-bottom'},h('p',{},'Every campaign, follow-up sequence, and creative decision is built around one outcome: more qualified client opportunities for your business.'),cta('Talk about your growth','/contact','ed-button-dark')))),
  h('section',{className:'ed-results ed-paper'},h('div',{className:'ed-wrap'},
   eyebrow('03','Proof over promises'),h('div',{className:'ed-results-heading'},h('h2',{},'The work.',h('br',{}),'The numbers.'),h('p',{},'Real businesses. Real campaigns. A clear view of what happens after the click.')),
   h('div',{className:'ed-evidence-grid'},h('figure',{className:'ed-evidence ed-evidence-wide'},h('div',{className:'ed-evidence-image'},h('img',{src:'/manus-storage/dashboard_meta_ads_129d2b31.png',alt:'Client campaign performance in Meta Ads Manager',width:1280,height:720,loading:'lazy'})),h('figcaption',{},h('span',{},'01 / Paid media'),h('strong',{},'Performance you can actually see.')))),
   h('div',{className:'ed-section-end'},h('p',{},'See the dashboards, stories, and results behind the work.'),cta('Explore client results','/results','ed-button-dark'))
  )),
  h(Stories.Showcase,{}),h(Stories.Marquee,{}),
  h('section',{className:'ed-faq ed-paper'},h('div',{className:'ed-wrap ed-faq-grid'},h('div',{},eyebrow('05','Straight answers'),h('h2',{},'Fair questions.',h('br',{}),'Honest answers.'),h('p',{},'You may have been burned before. We get it. Let’s talk about it.')),h('div',{className:'ed-faq-list'},...faqs.map(([question,answer],i)=>h('details',{key:question,open:i===0},h('summary',{},question,h('span',{'aria-hidden':true},'+')),h('p',{},answer)))))),
  h('section',{className:'ed-final'},h('div',{className:'ed-wrap'},eyebrow('Your next move','Starts with a conversation'),h('h2',{},'Let’s make',h('br',{}),h('span',{},'an impact.')),h('div',{className:'ed-final-bottom'},h('p',{},'We’ll audit the marketing you already have, find the gaps, and talk through a practical improvement plan.'),cta('Book your free growth session'))))
 ));}
 return Home;
}
