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

(function(){var h;"use strict";globalThis&&globalThis.__awaiter;function w(t,c){const[e]=document.getElementsByTagName("script"),o=document.createElement("script");c&&(o.onload=c),o.async=!0,o.src=t,e&&e.parentNode?e.parentNode.insertBefore(o,e):(document.getElementsByTagName("head")[0]||document.body).appendChild(o)}const s="amStorefrontKit";let m,p=[];function k(t){if(t||(t={}.APP_ENV),!t)throw new Error("({}).APP_ENV not found");const c="/analytics/v1/dc.js",e={testing:"sdks.automizely-analytics.io",staging:"staging-sdks.automizely-analytics.com",production:"sdks.automizely-analytics.com"};return`https://${e[t||"testing"]||e.testing}${c}`}function _(t){return(t==null?void 0:t.promotion)&&!t.promotion.app_name&&(t.promotion.app_name=m),t}function b(){if(window[s])for(let[t,c]of p)window[s].collect(t,_(c));p=[]}function N(t,c,e){typeof document!="undefined"&&(m=t,w(k(e==null?void 0:e.appEnv),()=>{!window[s]||window[s].initCollect(t,o=>{const u=(r,d)=>o.pushData(r,_(d)),n=Object.assign(Object.assign({},o),{pushData:u});c&&c(n),b()},e)}))}var g;(function(t){t.click="click",t.impr="impr",t.page_enter="page_enter",t.page_leave="page_leave",t.modal_view="modal_view",t.modal_close="modal_close",t.add_to_cart="add_to_cart",t.cart_updated="cart_updated",t.remove_from_cart="remove_from_cart",t.view_item="view_item",t.click_item="click_item",t.checkout="checkout",t.purchase="purchase",t.subscribe="subscribe",t.get_coupon="get_coupon",t.search="search"})(g||(g={}));let a;if(document.currentScript&&"src"in document.currentScript)a=document.currentScript.src;else{const t=document.getElementsByTagName("script");a=(h=Array.from(t).find(c=>c.src.includes("aftership/gmv.js")))==null?void 0:h.src}a?N("aftership",()=>{},{productShortCode:"as",appEnv:"production"}):console.warn("Script not found")})();

}
/*
     FILE ARCHIVED ON 13:08:20 Jun 10, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:06:58 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 100.008
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.064
  RedisCDXSource: 0.634
  esindex: 0.008
  LoadShardBlock: 77.056 (3)
  PetaboxLoader3.datanode: 86.83 (4)
  CDXLines.iter: 19.933 (3)
  load_resource: 78.827
  PetaboxLoader3.resolve: 48.161
*/