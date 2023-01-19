var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function updateProgressBarForDrawer(s,t){t&&(s="$150 USD"),console.log("updating freeshipping bar from cart drawer with ",s);const n=document.querySelector(".free-shipping-bar"),l=n.offsetWidth,i=document.querySelector(".free-shipping-bar-message.message-progress"),e=document.querySelector(".free-shipping-bar-in-drawer .insufficient-amount");e.innerHTML=INITIAL_PRICE_TEXT;const o=document.querySelector(".free-shipping-bar-message.message-success"),c=document.querySelector(".free-shipping-success-message"),r=document.querySelector(".free-shipping-bar-progress"),a=s.match(/[0-9,.]+/)[0].replace(",","").split(".")[0]*1,g=GOAL-a*1<0?0:GOAL-a*1,p=a*100/GOAL;r.style.backgroundSize=l*10+"px",p===0?(o.style.opacity=0,i.style.opacity=0,r.style.width=p+"%",animateValue(e,e.innerHTML,150,1e3),n.style.visibility="hidden"):(n.style.visibility="visible",p<100?(o.style.opacity=0,i.style.opacity=1,setTimeout(()=>{animateValue(e,e.innerHTML,g,1e3),r.style.width=p+"%"},300)):(i.style.opacity=0,o.style.opacity=1,setTimeout(()=>{animateValue(e,e.innerHTML,0,500),r.style.width="calc(100% - 6px)",r.style.backgroundSize="100%"},300)))}function updateProgressBar(s,t){t&&(s="$150 USD"),console.log("updating freeshipping bar from cart page");const l=document.querySelector(".free-shipping-bar").offsetWidth,i=document.querySelector(".free-shipping-bar-message.message-progress"),e=document.querySelector(".free-shipping-bar-in-cart .insufficient-amount");e.innerHTML=INITIAL_PRICE_TEXT;let o=document.querySelectorAll("[data-display-us]");o=[...o];const c=document.querySelector(".free-shipping-bar-message.message-success"),r=document.querySelector(".free-shipping-bar-progress"),a=s.match(/[0-9,.]+/)[0].replace(",","").split(".")[0]*1,g=GOAL-a*1<0?0:GOAL-a*1,p=a*100/GOAL;r.style.backgroundSize="1000%",p<100?(console.log(c,i),setTimeout(()=>{c.style.opacity=0,i.style.opacity=1,animateValue(e,e.innerHTML,g,1e3),r.style.width=p+"%",r.style.backgroundSize="1000%"},300)):(console.log(c,i),setTimeout(()=>{i.style.opacity=0,c.style.opacity=1,animateValue(e,e.innerHTML,0,500),r.style.width="calc(100% - 8px)",r.style.backgroundSize="100%"},300))}function animateValue(s,t,n,l){typeof t!="number"&&(t=t.match(/[0-9,.]+/)[0].replace(",","").split(".")[0]*1),typeof n!="number"&&(n=n.match(/[0-9,.]+/)[0].replace(",","").split(".")[0]*1);let i=null;const e=o=>{i||(i=o);const c=Math.min((o-i)/l,1);s.innerHTML=s.innerHTML.replace(s.innerHTML.match(/[0-9,.]+/)[0],Math.floor(c*(n-t)+t)),c<1&&window.requestAnimationFrame(e)};window.requestAnimationFrame(e)}function initializePriceText(s){s.innerHTML=INITIAL_PRICE_TEXT,console.log("insufficientAmountElement.innerHTML",s.innerHTML)}
//# sourceMappingURL=/s/files/1/2065/8833/t/496/assets/freeshipping-bar.js.map?v=21207449480362501091650004293


}
/*
     FILE ARCHIVED ON 00:26:03 May 04, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:05:47 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.471
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.059
  cdx.remote: 0.05
  esindex: 0.006
  LoadShardBlock: 97.541 (3)
  PetaboxLoader3.datanode: 84.587 (5)
  CDXLines.iter: 18.246 (3)
  load_resource: 218.49
  PetaboxLoader3.resolve: 117.707
  loaddict: 94.913
*/