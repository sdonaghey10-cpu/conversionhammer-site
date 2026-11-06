import './growth-orbit.js';
export function createHome(React,runtime,Layout,LogoStrip,Counter,Link,Stories){
 const h=(type,props,...children)=>children.length===0?runtime.jsx(type,props||{}):children.length===1?runtime.jsx(type,{...props,children:children[0]}):runtime.jsxs(type,{...props,children});
 const cta=(label='See if you qualify',href='/qualify',variant='')=>h(href==='/qualify'?'a':Link,{href,className:'ed-button '+variant},h('span',{},label),h('span',{'aria-hidden':true,className:'ed-button-icon'},'↗'));
 const eyebrow=(number,text)=>h('div',{className:'ed-eyebrow'},h('span',{},number),text);
 const faqs=[
  ['Do ads work for my kind of business?','It depends on your offer, your market, and how your team follows up. We review all three first, then tell you honestly whether ads make sense for you.'],
  ['How do we avoid wasting more money?','We start by finding where your current spend is leaking, then tighten each step between a click and a conversation with your sales team.'],
  ['What if we are not a good fit?','We look at your business, market, sales team, and goals before recommending anything. If we do not see a real path to value, we will tell you.'],
  ['How is this different from other agencies?','We build around your sales team, and you see the strategy, the actions, and the metrics behind every decision instead of a generic monthly report.'],
  ['What if we already get referrals?','That is a strong foundation. We add a steadier stream of qualified opportunities alongside your referrals.']
 ];
 function Home(){return h(Layout,{},h('div',{className:'ed-home'},
  h('section',{className:'ch-hero ed-hero'},
   h('ch-impact-scene',{'aria-hidden':'true'}),
   h('div',{className:'ed-wrap ed-hero-inner'},
    h('div',{className:'ed-hero-top'},h('span',{className:'ed-eyebrow'},'Sales teams. Qualified opportunities.'),h('span',{className:'ed-availability'},h('i',{}),'Taking on a limited number of partners')),
    h('div',{className:'ed-hero-copy'},h('h1',{},'Fill your sales team’s',h('br',{}),'calendar with',h('br',{}),h('span',{},'qualified opportunities.')),
     h('p',{},'You already have a sales team and you already spend on marketing. We make the marketing feed your team better opportunities, then tighten follow-up and reporting so you can see what works.'),
     h('div',{className:'ed-hero-actions'},cta(),h(Link,{href:'/results',className:'ed-text-link'},'See the results',h('span',{'aria-hidden':true},'↗')))),
    h('p',{className:'ed-entry-note'},'Built for service businesses doing over $1M in revenue with a sales team in place.'),h('div',{className:'ed-hero-baseline'},h('span',{},'Your sales team. Better opportunities.'),h('button',{type:'button',onClick:()=>document.getElementById('the-system')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})},'Explore the system',h('span',{'aria-hidden':true},'↓')))
   )
  ),
  h(LogoStrip,{}),
  h(Stories.ProofBar,{}),
  h('section',{id:'the-system',className:'ed-system ed-paper'},h('div',{className:'ed-wrap'},
   eyebrow('01','The whole system'),
   h('div',{className:'ed-intro-grid'},h('h2',{},'Better opportunities.',h('br',{}),'Built around your sales team.'),h('div',{},h('p',{className:'ed-lead'},'Start with the team you already have.'),h('p',{},'We look at how leads reach your sales team today: campaigns, creative, follow-up, and reporting. Then we fix the weak points so your team spends its time on qualified opportunities.'))),
   h('div',{className:'ed-service-list'},
    ...[
     ['01','Find your people.','Paid advertising & market research','Review your audience, offer, and ad spend. Refine who you target and where your budget goes.'],
     ['02','Turn interest into action.','Creative & conversion','Sharpen the ads and landing pages you already use so the right people respond and the wrong ones filter themselves out.'],
     ['03','Keep the conversation going.','AI follow-up & appointment systems','Find the gaps in your CRM, follow-up, and booking process so more inquiries turn into appointments on your team’s calendar.'],
     ['04','Make every move measurable.','Reporting & continuous improvement','Clean up tracking and reporting. See what your marketing produces and what to improve next.']
    ].map(([num,title,label,body])=>h('div',{className:'ed-service-row',key:num},h('span',{className:'ed-service-number'},num),h('div',{},h('h3',{},title),h('span',{className:'ed-service-label'},label)),h('p',{},body)))
   ),h('div',{className:'ed-section-end'},h('p',{},'A review of your current setup. A focused plan to make it work harder.'),cta('Explore our services','/services','ed-button-dark'))
  )),
  h('section',{className:'ed-fit'},h('div',{className:'ed-wrap ed-fit-grid'},
   h('div',{},eyebrow('02','A stronger next chapter'),h('h2',{},'Is this',h('br',{}),'for you?'),h('p',{className:'ed-fit-intro'},'You have a sales team. Now you want marketing that keeps it busy with the right people.'),h('ch-growth-orbit',{'aria-hidden':'true'})),
   h('div',{className:'ed-fit-copy'},h('p',{className:'ed-lead'},'For established service businesses with a sales team and marketing already running.'),h('p',{},'We start with a review of your current setup. You bring the sales team, the campaigns, and the systems. We find what to improve.'),h('dl',{className:'ed-fit-checklist'},...[
    ['Business stage','Over $1 million in annual revenue'],['Business type','Service business'],['Sales team','Someone other than the owner sells'],['Years in business','5+ years in business'],['Your goal','More qualified clients'],['Ad spend','Already investing in paid ads'],['Systems','A CRM and marketing already in place']
   ].map(([label,value])=>h('div',{key:label},h('dt',{},label),h('dd',{},value))))),
  )),
  h('section',{className:'ed-standard'},h('div',{className:'ed-wrap'},h('span',{className:'ed-eyebrow'},'The no-waste standard'),h('h2',{},'Less noise.',h('br',{}),'More ',h('span',{},'impact.')),h('div',{className:'ed-standard-bottom'},h('p',{},'Every campaign, follow-up sequence, and creative decision is built around one outcome: more qualified opportunities in front of your sales team.'),cta('See if you qualify','/qualify','ed-button-dark')))),
  h('section',{className:'ed-results ed-paper'},h('div',{className:'ed-wrap'},
   eyebrow('03','Proof over promises'),h('div',{className:'ed-results-heading'},h('h2',{},'The work.',h('br',{}),'The numbers.'),h('p',{},'Real businesses. Real campaigns. A clear view of what happens after the click.')),
   h('div',{className:'ed-evidence-grid'},h('figure',{className:'ed-evidence ed-evidence-wide'},h('div',{className:'ed-evidence-image'},h('img',{src:'/manus-storage/dashboard_meta_ads_129d2b31.png',alt:'Client campaign performance in Meta Ads Manager',width:1280,height:720,loading:'lazy'})),h('figcaption',{},h('span',{},'01 / Paid media'),h('strong',{},'Performance you can actually see.')))),
   h('div',{className:'ed-section-end'},h('p',{},'See the dashboards, stories, and results behind the work.'),cta('Explore client results','/results','ed-button-dark'))
  )),
  h(Stories.Showcase,{}),h(Stories.Marquee,{}),
  h('section',{className:'ed-faq ed-paper'},h('div',{className:'ed-wrap ed-faq-grid'},h('div',{},eyebrow('05','Straight answers'),h('h2',{},'Fair questions.',h('br',{}),'Honest answers.'),h('p',{},'You may have been burned before. We get it. Let’s talk about it.')),h('div',{className:'ed-faq-list'},...faqs.map(([question,answer],i)=>h('details',{key:question,open:i===0},h('summary',{},question,h('span',{'aria-hidden':true},'+')),h('p',{},answer)))))),
  h('section',{className:'ed-final'},h('div',{className:'ed-wrap'},eyebrow('Your next move','Starts with a conversation'),h('h2',{},'Let’s make',h('br',{}),h('span',{},'an impact.')),h('div',{className:'ed-final-bottom'},h('p',{},'Answer a few quick questions. If it looks like a fit, we’ll review the marketing you already have and talk through a practical plan for your sales team.'),cta('See if you qualify'))))
 ));}
 return Home;
}
