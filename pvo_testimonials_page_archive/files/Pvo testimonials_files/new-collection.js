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

var currentPrice;
var comparePrice;
var difference;

var CURRENCY_SYMBOL = {
  KRW: {
    position: "back",
    symbol: "원"
  },
  JPY: {
    position: "back",
    symbol: "円"
  },
  EUR: {
    position: "front",
    symbol: "€"
  },
  GBP: {
    position: "front",
    symbol: "£"
  },
  MXN: {
    position: "front",
    symbol: "MXN$"
  },
  BRL: {
    position: "front",
    symbol: "R$"
  },
  RUB: {
    position: "back",
    symbol: "₽"
  }
};

function changingBRL(price) {
  var splitArr = price.split(".");
  var len = splitArr.length;
  var newArr = [];
  for (var i = 0; i < len; i += 1) {
    var leftArr = splitArr[i].split(",").join(".");
    newArr.push(leftArr);
  }
  
  return newArr[0];
}

function calcSaved() {
  var currentPrices = document.querySelectorAll(
    ".items-discount-price.discount-price-for-calc-saved"
  );
  var comparePrices = document.querySelectorAll(
    ".items-original-price.discount-price-for-calc-saved"
  );
  var priceDifferences = document.querySelectorAll(".items-save-amount");

  currentPrices = Array.prototype.slice.call(currentPrices);
  comparePrices = Array.prototype.slice.call(comparePrices);
  priceDifferences = Array.prototype.slice.call(priceDifferences);

  for (let i = 0; i < currentPrices.length; i += 1) {
    //alert(currentPrices[i].innerText);

    var targetCurrentPrice = currentPrices[i].innerText;
    var targetComparePrice = comparePrices[i].innerText;

    currentPrices[i] = parseFloat(targetCurrentPrice.replace(/[^0-9\.]+/g, ""));
    //alert(currentPrices[i]);

    comparePrices[i] = parseFloat(targetComparePrice.replace(/[^0-9\.]+/g, ""));


    if (comparePrices[i] > currentPrices[i]) {
      if (curLan == "ru") {
        difference = Number(comparePrices[i] - currentPrices[i]);
      } else {
        difference = Math.floor(Number(comparePrices[i] - currentPrices[i].toFixed())) ;
      }
      priceDifferences[i].innerText = getPriceString(difference);
    }
    
  }
}

function calcKlarna() {
  var currentPrices = document.querySelectorAll(
    ".items-discount-price.discount-price-for-calc-saved"
  );
  var priceDifferences = document.querySelectorAll(".product-klarna-value");
  var quantityEl = document.querySelector(".product-block-quantity-amount");
  var quantity = quantityEl.value ? quantityEl.value : 1;
  if (isNaN(quantity)) {
    quantity = Number(quantity);
  }

  currentPrices = Array.prototype.slice.call(currentPrices);
  priceDifferences = Array.prototype.slice.call(priceDifferences);

  if (currentPrices[0]) {
    currentPrices = parseFloat(
      currentPrices[0].innerText.replace(/[^0-9\.]+/g, "")
    );
  }

  var calcedKlarnaPrice = (currentPrices * quantity / 4).toFixed(2);
  var priceDifferences = document.querySelectorAll(".product-klarna-value");
  for (var i = 0; i < priceDifferences.length; i += 1) {
    priceDifferences[i].innerText = getKlarnaPriceString(calcedKlarnaPrice);
  }
}

function getPriceString(difference) {
  var curPriceDifference;
  if (!isNaN(difference)) {
    if (curLan == "ko") {
      curPriceDifference = difference.format() + "원 할인";
    } else if (curLan == "ja") {
      curPriceDifference = difference.format() + "円 引き ";
    } else if (curLan == "de") {
      curPriceDifference = "Du sparst €" + difference.format();
    } else if (curLanLo == "es-es") {
      curPriceDifference = "Ahorras €" + difference.format();
    } else if (curLan == "fr") {
      curPriceDifference = "Tu économises €" + difference.format();
    } else if (curLan == "nl") {
      curPriceDifference = "Bespaar €" + difference.format();
    } else if (curLanLo == "en-uk") {
      curPriceDifference = "Save £" + difference.format();
    } else if (curLanLo == "en-au") {
      curPriceDifference = "Save $" + difference + "AUD";
    } else if (curLanLo == "en-ca") {
      curPriceDifference = "Save $" + difference + "CAD";
    } else if (curLanLo == "en-eu") {
      curPriceDifference = "Save €" + difference.format();
    } else if (curLanLo == "es-spa") {
      curPriceDifference = "Ahorras $" + difference.format();
    } else if (curLan == "zh") {
      curPriceDifference = "您省了 美金$" + difference.format();
    } else if (curLan == "pt") {
      curPriceDifference = "Economiza €" + difference.format();
    } else if (curLan == "ar") {
      curPriceDifference = " تقتصد" + difference + "$";
    } else if (curLan == "ru") {
      curPriceDifference = "Вы экономите " + difference + "₽";
    } else if (curLan == "it") {
      curPriceDifference = "Risparmi €" + difference.format();
    } else {
      curPriceDifference = "Save $" + difference.format();
    }
  } else {
    curPriceDifference = "";
  }

  return curPriceDifference;
}

function getKlarnaPriceString(difference) {
  var curPriceDifference;
  let valueStr = difference.format();
  let value = parseFloat(valueStr);

  console.log("???", value, difference);

  if (valueStr.split(".")[1]) {
    value = value.toFixed(2);
  }
  if (!isNaN(difference)) {
    if (curLan == "ko") {
      curPriceDifference = value + "원";
    } else if (curLan == "ja") {
      curPriceDifference = value + "円";
    } else if (
      curLan == "de" ||
      curLanLo == "es-es" ||
      curLan == "fr" ||
      curLan == "nl" ||
      curLan == "nl" ||
      curLan == "pt" ||
      curLan == "it" ||
      curLanLo == "en-eu"
    ) {
      curPriceDifference = "€" + value;
    } else if (curLanLo == "en-uk") {
      curPriceDifference = "£" + value;
    } else if (curLanLo == "es-spa") {
      curPriceDifference = "$" + difference;
    } else if (curLan == "ru") {
      curPriceDifference = "Вы экономите " + difference + "₽";
    } else if (curLanLo == "en-au") {
      curPriceDifference = "Save $" + difference + "AUD";
    } else if (curLanLo == "en-ca") {
      curPriceDifference = "Save $" + difference + "CAD";
    } else if (curLan == "zh") {
      curPriceDifference = "美金$" + value;
    } else if (curLan == "ar") {
      curPriceDifference = difference + "$";
    } else {
      curPriceDifference = "$" + value;
    }
  } else {
    curPriceDifference = "";
  }

  return curPriceDifference;
}

document.addEventListener("DOMContentLoaded", function() {
  if (curLan == "ko" || curLanLo == "en-uk") {
    setTimeout(function() {
      // calcSaved();
      calcKlarna();
    }, 1000);
  } else {
    // calcSaved();
    calcKlarna();
  }
  
});

// document.addEventListener("DOMContentLoaded", function(event) {
//   setTimeout(function() {
//     if (
//       curLan == "it" ||
//       curLan == "de" ||
//       curLanLo == "es-es" ||
//       curLan == "nl" ||
//       curLan == "fr" ||
//       curLan == "pt" ||
//       curLan == "br"
//     ) {
//       currentPrice = parseFloat(
//         $(".items-discount-price")
//           .eq(0)
//           .text()
//           .replace(/[^0-9\,]+/g, "")

//         // $(".items-discount-price")
//         //   .eq(0)
//         //   .text()
//         //   .replace(",", ".")
//         //   .replace(/[^0-9\.]+/g, "")
//       );
//       comparePrice = parseFloat(
//         $(".items-original-price")
//           .eq(0)
//           .text()
//           .replace(/[^0-9\,]+/g, "")

//         // $(".items-original-price")
//         //   .eq(0)
//         //   .text()
//         //   .replace(",", ".")
//         //   .replace(/[^0-9\.]+/g, "")
//       );
//     } else {
//       currentPrice = parseFloat(
//         $(".items-discount-price")
//           .eq(0)
//           .text()
//           .replace(/[^0-9\.]+/g, "")
//       );
//       comparePrice = parseFloat(
//         $(".items-original-price")
//           .eq(0)
//           .text()
//           .replace(/[^0-9\.]+/g, "")
//       );
//     }

//     if (curLan == "ko" || curLan == "ru") {
//       difference = Number(comparePrice - currentPrice);
//     } else {
//       difference = Number(comparePrice - currentPrice).toFixed(2);
//     }

//     if (!isNaN(difference)) {
//       if (curLan == "ko") {
//         $(".items-save-amount").text(difference.format() + "원 할인");
//       } else if (curLan == "ja") {
//         $(".items-save-amount").text(difference.format() + "円 引き ");
//       } else if (curLan == "de") {
//         $(".items-save-amount").text("Du sparst €" + difference.format());
//       } else if (curLanLo == "es-es") {
//         $(".items-save-amount").text("Ahorras €" + difference.format());
//       } else if (curLan == "fr") {
//         $(".items-save-amount").text("Tu économises €" + difference.format());
//       } else if (curLan == "nl") {
//         $(".items-save-amount").text("Bespaar €" + difference.format());
//       } else if (curLanLo == "en-uk") {
//         $(".items-save-amount").text("save £" + difference.format());
//       } else if (curLanLo == "en-au") {
//         $(".items-save-amount").html("save $" + difference + "AUD");
//       } else if (curLanLo == "en-ca") {
//         $(".items-save-amount").html("save $" + difference + "CAD");
//       } else if (curLanLo == "es-mx") {
//         difference = Math.abs(difference);
//         $(".items-save-amount").html("Ahorras MXN$ " + difference.format());
//       } else if (curLanLo == "es-spa") {
//         $(".items-save-amount").html("Ahorras $" + difference.format());
//       } else if (curLan == "zh") {
//         $(".items-save-amount").html("您省了 美金$" + difference.format());
//       } else if (curLan == "pt") {
//         $(".items-save-amount").text("Você economiza €" + difference.format());
//       } else if (curLan == "br") {
//         $(".items-save-amount").text(
//           "Você economiza R$" + changingBRL(difference)
//         );
//       } else if (curLan == "ar") {
//         $(".items-save-amount").text(" تقتصد" + difference + "$");
//       } else if (curLan == "ru") {
//         $(".items-save-amount").html("Вы экономите $" + difference);
//       } else if (curLan == "it") {
//         $(".items-save-amount").text("Risparmi €" + difference.format());
//       } else {
//         $(".items-save-amount").text("save $" + difference.format());
//       }
//     } else {
//       $("span.compare-price-section").html("");
//     }
//   }, 500);
// });

$(".change-product-preview").click(function() {
  $(".change-product-preview").css("border", "black solid 1px");
  $(this).css("border", "red solid 1px");

  $(".product__image")[0].srcset = this.srcset;
});

$(document).ready(function() {
  $("ul.spec-tabs").each(function() {
    var container = $(this).find("li");
    var active,
      content,
      links = $(this).find("a");
    active = links.first().addClass("active");
    content = $(active.attr("href"));
    links.not(":first").each(function() {
      $($(this).attr("href")).hide();
    });
    $(this)
      .find("a")
      .click(function(e) {
        container.css("border-bottom", "none");
        links.css("color", "black");
        active.removeClass("active");
        content.hide();
        active = $(this);
        container = $(this).closest("li");
        content = $($(this).attr("href"));
        active.addClass("active");
        content.show();
        active.css("color", "red");
        container.css("border-bottom", "1px solid red");
        return false;
      });
  });
});

// if (skipOldProcess && skipOldProcess == "N") {
//   $(document).ready(function() {
//     $(document).on("click", ".add_reco_product", function() {
//       var quantity = 1; //add quantity selector here
//       var clickedItem = $(this);
//       var clickedItemWrapper = clickedItem.closest(".card__wrapper");
//       var id = $(this).attr("id");

//       $.ajax({
//         type: "POST",
//         url: "/cart/add.js",
//         dataType: "json",
//         data: { id: id, quantity: quantity },
//         success: function(response) {
//           clickedItem.removeClass("add_reco_product");

//           clickedItem.val(added);

//           clickedItemWrapper.addClass("added_reco_item");

//           var price;
//           var originalPrice;
//           if (
//             curLan == "it" ||
//             curLan == "de" ||
//             curLanLo == "es-es" ||
//             curLan == "nl" ||
//             curLan == "fr" ||
//             curLan == "pt" ||
//             curLan == "br"
//           ) {
//             price = parseFloat(
//               clickedItemWrapper
//                 .find(".items-discount-price")
//                 .text()
//                 .replace(",", ".")
//                 .replace(/[^0-9\.]+/g, "")
//             );
//             originalPrice =
//               Math.round(
//                 (parseFloat(
//                   clickedItemWrapper
//                     .find(".discount-price")
//                     .text()
//                     .replace(",", ".")
//                     .replace(/[^0-9\.]+/g, "")
//                 ) -
//                   parseFloat(
//                     clickedItemWrapper
//                       .find(".items-discount-price")
//                       .text()
//                       .replace(",", ".")
//                       .replace(/[^0-9\.]+/g, "")
//                   )) *
//                   100
//               ) / 100;
//           } else {
//             price = parseFloat(
//               clickedItemWrapper
//                 .find(".items-discount-price")
//                 .text()
//                 .replace(/[^0-9\.]+/g, "")
//             );
//             originalPrice =
//               Math.round(
//                 (parseFloat(
//                   clickedItemWrapper
//                     .find(".discount-price")
//                     .text()
//                     .replace(/[^0-9\.]+/g, "")
//                 ) -
//                   parseFloat(
//                     clickedItemWrapper
//                       .find(".items-discount-price")
//                       .text()
//                       .replace(/[^0-9\.]+/g, "")
//                   )) *
//                   100
//               ) / 100;
//           }
//           price = Math.round(price * 100) / 100;
//           price = String(price);
//           addTotalItem(1, price);
//           var totalDiscount = $(".exact-discounts");

//           //originalPrice = parseFloat(clickedItemWrapper.find('.discount-price').text().replace(/[^0-9\.]+/g,""));

//           if (!isNaN(originalPrice)) {
//             originalPrice =
//               originalPrice +
//               Number(totalDiscount.text().replace(/[^0-9\.]+/g, ""));
//             totalDiscount.text(originalPrice.format());
//           }

//           var imgSrc = clickedItemWrapper.find("img")[0].srcset;
//           if (
//             !$(".reco-product__subimage-list > div ").hasClass("selected-item")
//           ) {
//             $(".reco-product__subimage-list").append(
//               "<div class=selected-item>" + selected_products + "</div>"
//             );
//           }
//           $(".reco-product__subimage-list").append(
//             "<div class=sub-item-box> <img srcset=" + imgSrc + "> </div>"
//           );
//         },
//         error: function(response) {
//           console.log(response.responseJSON.description);
//         }
//       });
//     });

//     $(document).on("click", ".product__add-to-cart-button", function() {
//       //recommended items

//       //$('.popup-offer .content').html(content);

//       //show fixed-footer
//       $(".product-body-footer").show();

//       //hide spec tab
//       $(".spec-section").hide();

//       $(".item-info").show();

//       jQuery("#product-detail").hide();

//       $(".product__content").append(content);

//       var quantity = $(".product-form__quantity-input").val();
//       var price;
//       if (
//         curLan == "it" ||
//         curLan == "de" ||
//         curLanLo == "es-es" ||
//         curLan == "nl" ||
//         curLan == "fr" ||
//         curLan == "pt" ||
//         curLan == "br"
//       ) {
//         price = parseFloat(
//           changingBRL(
//             $(".items-discount-price")
//               .eq(0)
//               .text()
//               .replace(/[^0-9\.]+/g, "")
//           )
//           // $(".items-discount-price")
//           //   .eq(0)
//           //   .text()
//           //   .replace(",", ".")
//           //   .replace(/[^0-9\.]+/g, "")
//         );
//       } else {
//         price = parseFloat(
//           $(".items-discount-price")
//             .eq(0)
//             .text()
//             .replace(/[^0-9\.]+/g, "")
//         );
//       }
//       price = Math.round(price * 100) / 100;
//       price = String(price);
//       $(".adding__quantity").append(quantity);
//       $(".adding__alert").show();
//       addTotalItem(quantity, price);
//       $(".product__subimage-list").html("");
//       $(".product__subimage-list").addClass("reco-product__subimage-list");
//       $(".reco-product__subimage-list").removeClass("product__subimage-list");
//       $(".saved-money").show();
//       if (!isNaN(difference)) {
//         $(".exact-discounts").text((difference * quantity).format());
//       } else {
//         $(".exact-discounts").text("0");
//       }

//       $(".recommended-product-snippet").show();

//       setTimeout(function() {
//         var targetOffset = $("#shopify-section-footer").offset().top;
//         var scrollBarHeight =
//           $(document).height() *
//           (window.innerHeight / document.body.offsetHeight);
//         var bodyFooter = $(".product-body-footer");

//         var $w = $(window).scroll(function() {
//           if ($w.scrollTop() + scrollBarHeight > targetOffset) {
//             bodyFooter.removeClass("footer--fixed");
//           } else {
//             if (bodyFooter.hasClass("footer--fixed")) {
//               return;
//             }
//             bodyFooter.addClass("footer--fixed");
//           }
//         });
//       }, 500);
//     });

//     function addTotalItem(numOfItem, itemPrice) {
//       var totalItemNum = $(".total-item__num");
//       var totalItemPrice = $(".total-item__price");

//       numOfItem = Number(totalItemNum.text()) + Number(numOfItem);
//       if (totalItemPrice.text() != "0") {
//         if (
//           curLan == "it" ||
//           curLan == "de" ||
//           curLanLo == "es-es" ||
//           curLan == "nl" ||
//           curLan == "fr" ||
//           curLan == "pt" ||
//           curLan == "br"
//         ) {
//           itemPrice = Number(
//             parseFloat(
//               totalItemPrice
//                 .text()
//                 .replace(",", ".")
//                 .replace(/[^0-9\.]+/g, "")
//             ) + parseFloat(itemPrice)
//           )
//             .toFixed(2)
//             .format()
//             .replace(".", ",");
//         } else {
//           itemPrice = Number(
//             parseFloat(totalItemPrice.text().replace(/[^0-9\.]+/g, "")) +
//               parseFloat(itemPrice)
//           ).format();
//         }
//       } else {
//         if (
//           curLan == "it" ||
//           curLan == "de" ||
//           curLanLo == "es-es" ||
//           curLan == "nl" ||
//           curLan == "fr" ||
//           curLan == "pt" ||
//           curLan == "br"
//         ) {
//           itemPrice = (
//             parseFloat(itemPrice) *
//             Number($(".product-form__quantity-input")[0].value)
//           )
//             .format()
//             .replace(".", ",");
//         } else {
//           itemPrice = (
//             parseFloat(itemPrice) *
//             Number($(".product-form__quantity-input")[0].value)
//           ).format();
//         }
//       }

//       $(".total-item__num").text(numOfItem);
//       $(".total-item__price").text(itemPrice);
//     }
//   });
// }

var firstReview = document.querySelector(".jdgm-rev");

if (firstReview) {
  var maxRating = 5;
  var starsWrapper;
  var averageRating;
  var reviewNums;
  var reviewFormHeader;
  var writeReviewWrapper;
  var reviewSortingWrapper;
  var attachmentLabel;

  runAfterElementLoaded(
    ".jdgm-rev-widg__sort-wrapper select",
    function() {

      var oldReview = document.querySelectorAll(
        ".product-block-productInfo .jdgm-widget.jdgm-review-widget.jdgm--done-setup-widget"
      );
      oldReview = Array.prototype.slice.call(oldReview);

      var newReview = document.querySelectorAll(
        ".review-containter .jdgm-widget.jdgm-review-widget.jdgm--done-setup-widget"
      );
      newReview = Array.prototype.slice.call(newReview);

      var checkHowManyReviewDivs = oldReview.length > 0 ? oldReview : newReview

      for (
        var targetReviewCont = 0;
        targetReviewCont < checkHowManyReviewDivs.length;
        targetReviewCont += 1
      ) {
        starsWrapper = document.createElement("div");
        starsWrapper.className = "jdgm-histogram__star";
        var averagerating = checkHowManyReviewDivs[targetReviewCont].querySelector(
          "[data-average-rating]"
        ).dataset.averageRating;
        reviewNums = checkHowManyReviewDivs[targetReviewCont].querySelector(
          "[data-number-of-reviews]"
        ).dataset.numberOfReviews;
        

        for (var i = 0; i < maxRating; i++) {
          if (0.5 < averagerating) {
            starsWrapper.innerHTML += '<a class="jdgm-star jdgm--on h3"></a>';
          } else {
            starsWrapper.innerHTML += '<a class="jdgm-star jdgm--off h3"></a>';
          }
          averagerating--;
        }
        averagerating += i;

        var starHistogramWrappers = checkHowManyReviewDivs[
          targetReviewCont
        ].getElementsByClassName("jdgm-histogram__star");
        for (var k = 0; k < starHistogramWrappers.length; k++) {
          var numOfStars = 0;
          var star;

          for (var j = 0; j < starHistogramWrappers[k].childElementCount; j++) {
            if (
              starHistogramWrappers[k].children[j].classList.contains(
                "jdgm--on"
              )
            )
              numOfStars += 1;
          }
          if (numOfStars === 1) star = " star ";
          else star = " stars";

          starHistogramWrappers[k].innerHTML = numOfStars + star;
        }

        var ratingWrapper = makeElement({
          elementType: "div",
          id: "",
          classes: "jdgm-rating__wrapper",
          content:
            '<span class="h3 jdgm-average-rate-label">' +
            averagerating +
            "</span>" +
            starsWrapper.innerHTML
        });
        checkHowManyReviewDivs[targetReviewCont]
          .querySelector(".jdgm-histogram")
          .prepend(ratingWrapper);

        attachmentLabel = checkHowManyReviewDivs[
          targetReviewCont
        ].querySelector(".jdgm-picture-fieldset-title");
        if (attachmentLabel) {
          attachmentLabel.innerText = "Attachments";
        }

        if (detectMobile()) {
          reviewFormHeader = checkHowManyReviewDivs[
            targetReviewCont
          ].querySelector(".jdgm-rev-widg__header");
          writeReviewWrapper = reviewFormHeader.querySelector(
            ".jdgm-widget-actions-wrapper"
          );
          reviewSortingWrapper = reviewFormHeader.querySelector(
            ".jdgm-rev-widg__sort-wrapper"
          );
          reviewSortingWrapper.before(writeReviewWrapper);

          writeReviewWrapper.style.width = "60%";
          writeReviewWrapper.style.float = "left";
          writeReviewWrapper.firstElementChild.style =
            "max-width: 100% !important";

          reviewSortingWrapper.style.width = "40%";
          reviewSortingWrapper.style.clear = "none";
          reviewSortingWrapper.firstElementChild.style =
            "margin-top: 20px !important";
          reviewSortingWrapper.firstElementChild.firstElementChild.style.width =
            "90%";
          reviewSortingWrapper.firstElementChild.firstElementChild.style.padding =
            "5px 15px 5px 10px";
        }
      }

      // red 2092
      // silver 2447
      // lite 300
      // 240
      // 85

      if(document.URL.indexOf("pod-one") >= 0){ 
        reviewNums = parseInt(reviewNums) +  2092;
      }else if(document.URL.indexOf("pod-active") >= 0){
        reviewNums = parseInt(reviewNums) +  2447;
      }else if(document.URL.indexOf("pod-lite") >= 0){
        reviewNums = parseInt(reviewNums) +  300;
      }else if(document.URL.indexOf("pod-gold") >= 0){
        reviewNums = parseInt(reviewNums) +  85;
      }else if(document.URL.indexOf("pod-black") >= 0){
        reviewNums = parseInt(reviewNums) +  240;
      }

      makingStarRating(averagerating, reviewNums);
    },
    250
  );
} else {
  //No reivew yet
  if (document.querySelector(".product-rv-container")) {
    document.querySelector(".product-rv-container").innerHTML = "";
  }
}


// make consistent, dynamic review score, nums
function makingStarRating(score, nums, el, starColor, backColor) {
  // rating score
  // rating nums

  var targetElStr = el || "product-rv-container";
  var targetEl = document.querySelector("." + targetElStr);
  console.log("nums", nums)
  if (targetEl) {
    if (nums) {
      const scoreArr = (score + "").split(".");
      const scoreInt = Number(scoreArr[0]);
      const scoreDecimal = score - scoreInt;
      const scoreDecimalPer = scoreDecimal * 100;
      const scoreInt_remain = 5 - Math.ceil(score);

      let sup = "<sup style='font-size:90%; color:#ec2544'>*</sup>"

      let result = '<div style="transform: translateY(2px); --starColor: #EC2544; --starBackColor: #FFF;">';

      for (let i = 0; i < scoreInt; i += 1) {
        result += '<div class="clip-rating-star clip-rating-star-fill" style="--rating: 100%;"></div>';
      }

      if (scoreDecimalPer) {
        result += '<div class="clip-rating-star clip-rating-star-fill" style="--rating: ' + scoreDecimalPer + '%;"><span><i></i></span></div>'
      }
      
      
      for (let i = 0; i < scoreInt_remain; i += 1) {
        result += '<div class="clip-rating-star"><span></span></div>';
      }

      result += '</div><div class="rating-score">' + score + '</div><div class="rating-nums">' + nums + ' reviews</div>' + sup;

      targetEl.innerHTML = result;
    } else {
      targetEl.innerHTML = "";
    }
  }

  
}


}
/*
     FILE ARCHIVED ON 01:45:06 May 24, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:05:50 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 164.709
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.096
  cdx.remote: 0.084
  esindex: 0.011
  LoadShardBlock: 119.061 (3)
  PetaboxLoader3.datanode: 123.709 (5)
  CDXLines.iter: 17.9 (3)
  load_resource: 57.951
  PetaboxLoader3.resolve: 34.463
  loaddict: 6.607
*/