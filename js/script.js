(function(){
var caps=[
["Mobile App Development","Flutter apps for both Android and iOS.","Flutter · Dart · GetX · Bloc · Provider · Riverpod · REST APIs · Firebase · Push notifications · Authentication · Maps and location · Payment integrations · Android & iOS deployment"],
["Backend & API Development","Server-side systems and integrations.","Laravel · PHP · Node.js · NestJS · REST APIs · Authentication · MySQL · Prisma · Third-party integrations · Payment integrations"],
["Web Applications","Responsive front ends and admin tools.","React.js · Next.js · JavaScript · TypeScript · Responsive web applications · Admin panels · API integration"],
["Marketplace Systems","Multi-sided platforms.","Multi-vendor marketplaces · Vendor management · Customer applications · Provider applications · Orders · Payments · Delivery workflows · Notifications"],
["Food Delivery Platforms","Customer, vendor, rider and admin systems.","Customer apps · Restaurant/vendor apps · Rider/driver apps · Admin systems · Orders · Delivery · Payments · Firebase · Real-time status updates · API integrations"],
["On-Demand Service Platforms","Booking and service workflows.","Service booking · Providers · Service staff · Scheduling · Time slots · Location/address management · Notifications · Service management · Booking workflows"],
["E-commerce","Multi-vendor commerce systems.","Multi-vendor e-commerce · Products · Categories · Vendors · Orders · Payments · Delivery · Customer applications · Admin systems"],
["Real Estate","Property discovery applications.","Property listings · Property search · Filters · Property details · Location · User accounts · API integration · Mobile applications"],
["Classified Platforms","Listing-based applications.","Listings · Categories · Search · Filters · User accounts · Location · Item details · Backend APIs"],
["Ride-Hailing & Transportation","Customer and driver applications.","Customer applications · Driver applications · Booking · Ride workflows · Maps · Location · Driver/customer interaction · Notifications · Backend APIs"]];
var projs=[
["Therapy Marketplace","Custom Marketplace Platform","A custom therapy marketplace system consisting of a Flutter mobile application, web application, administration panel and NestJS backend.",["Mobile application","Web application","Admin panel","Backend APIs","User onboarding","Marketplace workflows","Booking/session management","Messaging","File sharing","Notifications","Database integration","Role-based functionality"],["Flutter","Next.js","NestJS","TypeScript","Prisma","MySQL"],1],
["Food Delivery & Marketplace","Food Delivery","Experience developing and customizing production food delivery and multi-vendor marketplace systems.",["Customer application","Vendor application","Rider/driver application","Admin management","Ordering","Delivery workflows","Payments","Notifications","Firebase","API integration","UI customization","Production deployment"],["Flutter","Laravel","PHP","MySQL","Firebase","REST APIs"]],
["On-Demand Service Platform","Service Marketplace","Experience building and customizing on-demand service applications connecting customers with service providers and field staff.",["Service booking","Provider management","Staff/service personnel","Scheduling","Time slots","Location/address","Notifications","Booking workflows","Service management","Backend APIs"],["Flutter","Laravel","PHP","MySQL","Firebase","REST APIs"]],
["Multi-Vendor E-commerce","E-commerce","Multi-vendor e-commerce experience covering customer applications, vendor management, product catalogs, orders and delivery workflows.",["Customer app","Vendor functionality","Products","Categories","Orders","Payments","Delivery","Notifications","Admin management","API integrations"],["Flutter","Laravel","REST APIs","Firebase","MySQL"]],
["Real Estate Platform","Real Estate","Experience developing real estate applications focused on property discovery, listings and location-based functionality.",["Property listings","Property search","Filters","Property details","Location","User accounts","API integration","Responsive interfaces"],["Flutter","REST APIs","Laravel / Backend APIs"]],
["Ride-Hailing & Transportation","Transportation","Experience with mobile transportation systems connecting customers and drivers through booking, location and ride workflows.",["Customer application","Driver application","Ride booking","Maps","Location","Ride status","Notifications","Backend APIs"],["Flutter","REST APIs","Firebase","Maps / Location Services"]]];
var tech={"Mobile":["Flutter (Android & iOS)","Dart","GetX","Bloc","Provider","Riverpod"],"Backend":["Laravel","PHP","Node.js","NestJS","REST APIs"],"Web":["React.js","Next.js","JavaScript","TypeScript"],"Database":["MySQL","Prisma"],"Services & Tools":["Firebase","Git","GitHub","Postman","Payment APIs","Maps APIs"]};
var prod=["Flutter development","Backend/API development","Firebase configuration","Server configuration","Production deployment","Google Play publishing","Apple App Store publishing","App signing","Production builds","Third-party integrations","Payment gateway integrations","Push notifications","Existing application customization","Bug fixing and maintenance","Version updates"];
var $=function(i){return document.getElementById(i)},q=function(s){return document.querySelector(s)};
function b(a){return a.map(function(x){return "<span>"+x+"</span>"}).join("")}
function pad(n){return (n<9?"0":"")+(n+1)}
var burst='<svg viewBox="-20 -20 40 40" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">';
for(var k=0;k<16;k++)burst+='<path d="M0 -7V-'+(k%2?14:18)+'" transform="rotate('+k*22.5+')"/>';burst+="</svg>";
[].forEach.call(document.querySelectorAll(".burst"),function(e){e.innerHTML=burst});
var cl=$("cl"),cd=$("cd");
cl.innerHTML=caps.map(function(c,i){return '<button role="tab" aria-selected="'+(i==0)+'" data-i="'+i+'"><i>'+pad(i)+"</i><span>"+c[0]+'</span><em aria-hidden="true">→</em></button>'}).join("");
function show(i){var c=caps[i];cd.innerHTML='<h3>'+c[0]+'</h3><p>'+c[1]+'</p><div class="badges">'+b(c[2].split(" · "))+'</div><a class="go" href="#contact"><span>Have a project in mind?</span><b>Let\'s discuss it <em>↗</em></b></a>';
[].forEach.call(cl.children,function(x,n){x.setAttribute("aria-selected",n==i)})}
cl.onclick=function(e){var t=e.target.closest("button");if(t)show(+t.dataset.i)};show(0);
$("projs").innerHTML=projs.map(function(p,n){var m="";for(var i=0;i<7;i++)m+='<i style="height:'+(25+((i*37+n*23)%65))+'%"></i>';
return '<article class="proj'+(p[5]?" hl":"")+'"><div class="mock" aria-hidden="true">'+m+'</div><div class="pb"><div class="cat">'+p[1]+"</div><h3>"+p[0]+"</h3><p>"+p[2]+"</p><ul>"+p[3].map(function(f){return "<li>"+f+"</li>"}).join("")+'</ul><div class="badges">'+b(p[4])+"</div></div></article>"}).join("");
$("tech").innerHTML=Object.keys(tech).map(function(k){return '<div class="tg"><h3>'+k+'</h3><div class="badges">'+b(tech[k])+"</div></div>"}).join("");
$("prod").innerHTML=prod.map(function(x){return "<li>"+x+"</li>"}).join("");
var all=[].concat.apply([],Object.keys(tech).map(function(k){return tech[k]})),tp=all.join(" ✦ ")+" ✦ ";$("tape").innerHTML="<span>"+tp+"</span><span>"+tp+"</span>";
var th=q(".theme");th.onclick=function(){var t=document.documentElement.dataset.theme=="dark"?"light":"dark";document.documentElement.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}};
var burger=q(".burger"),pn=q(".pn");
burger.onclick=function(){var o=pn.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
pn.onclick=function(e){if(e.target.tagName=="A"){pn.classList.remove("open");burger.setAttribute("aria-expanded",false)}};
var links=[].slice.call(pn.querySelectorAll("nav a[href^='#']")),secs=links.map(function(a){return $(a.hash.slice(1))}),toTop=q(".totop");
function onScroll(){var y=scrollY+140,cur=-1;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});links.forEach(function(a,i){a.classList.toggle("on",i==cur)});toTop.classList.toggle("show",scrollY>700)}
addEventListener("scroll",onScroll,{passive:true});onScroll();
var rv=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.06});rv.forEach(function(r){io.observe(r)})}else rv.forEach(function(r){r.classList.add("in")});
})();
