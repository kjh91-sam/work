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

Array.from(document.getElementsByClassName("goal-test__to-shop")).forEach(e=>e.addEventListener("click",()=>{window.dataLayer.push({event:"toShop"})})),Array.from(document.getElementsByClassName("goal-test__to-cart")).forEach(e=>e.addEventListener("click",()=>{window.dataLayer.push({event:"toCart"})}));const isInView=e=>{const t=window.scrollY||window.pageYOffset,n=t+window.innerHeight,o=t+e.getBoundingClientRect().top;return!(t+e.getBoundingClientRect().bottom<t||o>n)};if(!siteType&&curLanLo=="en-default"){let o=function(){const a=n;isInView(e[a])&&(n++,window.dataLayer.push({event:t[a].event}),a>2&&document.removeEventListener("scroll",o))};var waitForTrigger=o;const e=document.getElementsByClassName("goal-test__container"),t=[{element:e[0],event:"reachedAutotracking(1)"},{element:e[1],event:"reachedCreativity(2)"},{element:e[2],event:"reachedConnect(3)"},{element:e[3],event:"reachedChoose(4)"}];let n=0}function tag(e){window.dataLayer.push({event:e})}function abtestOnShopBanner(){const e=document.querySelector(".abtest-shop-banner-red"),t=document.querySelector(".abtest-shop-banner-blue");!e||!t||!siteType&&(curLan=="de"||curLanLo=="en-default")&&(Math.random()<.5||curlan=="de"?(e.style.display="unset",t.style.display="none",tag("shopBannerRed")):(e.style.display="none",t.style.display="unset",tag("shopBannerBlue")))}const giftsPageBuyBtns=document.querySelectorAll(".giftsPage__buyBtn");giftsPageBuyBtns.length>1&&(giftsPageBuyBtns[0].addEventListener("click",()=>tag("buyGiftPackA")),giftsPageBuyBtns[1].addEventListener("click",()=>tag("buyGiftPackB")));
//# sourceMappingURL=/s/files/1/2065/8833/t/496/assets/helper-gtmTesting.js.map?v=39095103236401380431643172951


}
/*
     FILE ARCHIVED ON 00:25:27 May 04, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:05:54 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 176.934
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.068
  cdx.remote: 0.061
  esindex: 0.009
  LoadShardBlock: 137.373 (3)
  PetaboxLoader3.datanode: 101.995 (5)
  CDXLines.iter: 21.782 (3)
  PetaboxLoader3.resolve: 35.15
  load_resource: 28.234
  loaddict: 7.063
*/