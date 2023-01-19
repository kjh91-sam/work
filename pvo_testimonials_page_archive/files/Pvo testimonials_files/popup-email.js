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

const email_track={email_impression:function(){setTimeout(function(){document.querySelector(".klaviyo_modal").style.display!="none"&&(console.log("call from email_impression"),window.dataLayer.push({event:"PopupShow"}))},1e3)},email_conversion:function(){console.log("call from email_conversion"),window.dataLayer.push({event:"PopupAdded"}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&setTimeout(function(){console.log("open new popup"),window.dataLayer.push({event:"usPopupImpression"}),window.__attentive.trigger()},15e3)}};class PopupEmail{constructor(){this.first_time=!0,this.init()}init(){this.checkingQuery(),window.addEventListener("scroll",e=>this.isScrolledPopup(e,{percentage:20}))}showPopup(e=!1){this.initSubscribePlugin(e),email_track.email_impression()}initSubscribePlugin(e){let i=KlaviyoSubscribe||MailchimpSubscribe;MailchimpSubscribe&&initMailchimpSubscribe(),i.attachToModalForm("#k_id_modal",{list:"WNdfPB",delay_seconds:0,success:function(){$(".popup-email-content").html($(".success_message").html()),$(".popup-cont.klaviyo_modal .popup-wrapper").addClass("flexCenter"),email_track.email_conversion()}},e)}isScrolledPopup(e,i){let n=i.class_name||".email_trigger",t=i.percentage,l=window.pageYOffset;var a=document.body.scrollHeight;let o;if(t)o=a*t/100;else{let s=document.querySelector(n);o=s.offsetTop+s.offsetHeight}o<=l&&this.first_time&&(this.first_time=!1,this.showPopup(),window.removeEventListener("scroll",this.isScrolledPopup,!1))}checkingQuery(){window.location.search.includes("newsletter")&&(deleteCookie("__mailChimpTest"),this.showPopup(!0))}}let popupEmail;document.addEventListener("DOMContentLoaded",()=>{popupEmail=new PopupEmail});
//# sourceMappingURL=/s/files/1/2065/8833/t/496/assets/popup-email.js.map?v=44986685332188541271648102898


}
/*
     FILE ARCHIVED ON 00:25:58 May 04, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:05:51 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 119.976
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.075
  RedisCDXSource: 0.656
  esindex: 0.007
  LoadShardBlock: 91.976 (3)
  PetaboxLoader3.datanode: 77.347 (5)
  CDXLines.iter: 21.544 (3)
  load_resource: 197.382
  PetaboxLoader3.resolve: 85.445
  loaddict: 105.465
*/