(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{273:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("6c8f20b5",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(273)},278:function(t,e,n){var r=n(45)(!1);r.push([t.i,".slick-slider{z-index:0;padding-bottom:30px}.slick-arrow{position:absolute;z-index:1;bottom:0;left:50%;display:flex;padding:5px;cursor:pointer;transition:opacity .5s;border:none;outline:none;background:none;stroke:#122659;justify-content:center;align-items:center}.slick-arrow:hover{opacity:.75}.slick-prev{transform:translateX(-50%) translateX(-75%)}.slick-next{transform:translateX(-50%) translateX(75%)}@media(max-width:767px){.slick-slider{padding-bottom:0}.slick-arrow{transform:translateY(-50%);left:auto}.slick-prev{left:0}.slick-next{right:0}}",""]),t.exports=r},283:function(t,e,n){"use strict";n.r(e);var r=n(285),o=n.n(r),l=(n(286),{components:{VueSlickCarousel:o.a},data:function(){return{sliderOptions:{accessibility:!1,slidesToShow:4,slidesToScroll:4,infinite:!0,responsive:[{breakpoint:1365,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}}},methods:{onSliderFocus:function(){this.$refs.sliderWrapper.focus()},onKeydownLeft:function(){this.$refs.slider.prev()},onKeydownRight:function(){this.$refs.slider.next()}}}),c=(n(277),n(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sliderWrapper",attrs:{"aria-live":"polite","aria-labelledby":"teachers-title",tabindex:"0"},on:{focusin:t.onSliderFocus,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onKeydownLeft(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])||"button"in e&&2!==e.button?null:t.onKeydownRight(e)}]}},[n("VueSlickCarousel",t._b({ref:"slider",scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},{key:"prevArrow",fn:function(){return[n("button",{attrs:{type:"button","aria-label":"Назад",tabindex:"-1"}},[n("svg",{staticClass:"teacher__slider-icon",attrs:{width:"15",height:"8"}},[n("use",{attrs:{href:"#icon-arrow-left"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[n("button",{attrs:{type:"button","aria-label":"Вперед",tabindex:"-1"}},[n("svg",{staticClass:"teacher__slider-icon",attrs:{width:"15",height:"8"}},[n("use",{attrs:{href:"#icon-arrow-right"}})])])]},proxy:!0}],null,!0)},"VueSlickCarousel",t.sliderOptions,!1))],1)}),[],!1,null,null,null);e.default=component.exports}}]);