(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,8,19],{274:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("b778c170",content,!0,{sourceMap:!1})},279:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAzMiAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMxMzggMjcuNTc3MUwxNiAzOUw0LjY4NjIzIDI3LjU3NzFDMi40NDg2MSAyNS4zMTc5IDAuOTI0Nzc2IDIyLjQzOTQgMC4zMDc0MjggMTkuMzA1OEMtMC4zMDk5MTkgMTYuMTcyMiAwLjAwNjk0NTUgMTIuOTI0MSAxLjIxNzk1IDkuOTcyMjlDMi40Mjg5NiA3LjAyMDQ4IDQuNDc5NzIgNC40OTc1MyA3LjExMDkgMi43MjI0OEM5Ljc0MjA4IDAuOTQ3NDMgMTIuODM1NSAwIDE2IDBDMTkuMTY0NSAwIDIyLjI1NzkgMC45NDc0MyAyNC44ODkxIDIuNzIyNDhDMjcuNTIwMyA0LjQ5NzUzIDI5LjU3MSA3LjAyMDQ4IDMwLjc4MiA5Ljk3MjI5QzMxLjk5MzEgMTIuOTI0MSAzMi4zMDk5IDE2LjE3MjIgMzEuNjkyNiAxOS4zMDU4QzMxLjA3NTIgMjIuNDM5NCAyOS41NTE0IDI1LjMxNzkgMjcuMzEzOCAyNy41NzcxWk0xNiAxOS43NDRDMTYuOTQzIDE5Ljc0NCAxNy44NDc0IDE5LjM2NTggMTguNTE0MiAxOC42OTI2QzE5LjE4MSAxOC4wMTk0IDE5LjU1NTYgMTcuMTA2MyAxOS41NTU2IDE2LjE1NDJDMTkuNTU1NiAxNS4yMDIxIDE5LjE4MSAxNC4yODkgMTguNTE0MiAxMy42MTU4QzE3Ljg0NzQgMTIuOTQyNiAxNi45NDMgMTIuNTY0MyAxNiAxMi41NjQzQzE1LjA1NyAxMi41NjQzIDE0LjE1MjYgMTIuOTQyNiAxMy40ODU4IDEzLjYxNThDMTIuODE5IDE0LjI4OSAxMi40NDQ0IDE1LjIwMjEgMTIuNDQ0NCAxNi4xNTQyQzEyLjQ0NDQgMTcuMTA2MyAxMi44MTkgMTguMDE5NCAxMy40ODU4IDE4LjY5MjZDMTQuMTUyNiAxOS4zNjU4IDE1LjA1NyAxOS43NDQgMTYgMTkuNzQ0WiIgZmlsbD0iIzU4NzlFOCIvPgo8L3N2Zz4K"},280:function(t,e,n){"use strict";n(274)},281:function(t,e,n){var c=n(45)(!1);c.push([t.i,".map{transition:box-shadow .3s}.map:focus{box-shadow:0 0 5px 0 var(--color-navy)}",""]),t.exports=c},284:function(t,e,n){"use strict";n.r(e);n(33);var c={props:{isMapLoaded:{type:Boolean,default:!1},center:{type:Array,required:!0,validator:function(t){return 2===t.length&&("number"==typeof t[0]&&"number"==typeof t[1])}},address:{type:String,default:""}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:16}},mounted:function(){var t=this;delete this.$L.Icon.Default.prototype._getIconUrl,this.$L.Icon.Default.mergeOptions({iconRetinaUrl:null,iconUrl:n(279),shadowUrl:null,iconSize:[40,40],iconAnchor:[20,40]}),this.isMapLoaded&&this.$nextTick((function(){t.$refs.root.querySelectorAll("a").forEach((function(link){link.tabIndex="-1"}))}))}},o=(n(280),n(9)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"contacts__map-wrapper"},[t.isMapLoaded?n("client-only",[n("l-map",{ref:"map",staticClass:"contacts__map map",attrs:{center:t.center,zoom:t.zoom}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution},on:{tileerror:function(e){return t.$emit("error")}}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.center,tabindex:"-1",options:{keyboard:!1}}})],1)],1):n("picture",[n("source",{attrs:{type:"image/webp",srcset:"img/map-768w.webp 1x, img/map-768w-2x.webp 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),n("source",{attrs:{type:"image/webp",srcset:"img/map-1366w.webp 1x, img/map-1366w-2x.webp 2x",sizes:"1366px"}}),t._v(" "),n("source",{attrs:{type:"image/jpeg",srcset:"img/map-768w.jpg 1x, img/map-768w-2x.jpg 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),n("img",{staticClass:"contacts__map-fallback",attrs:{srcset:"img/map-1366w.jpg 1x, img/map-1366w-2x.jpg 2x",sizes:"1366px",alt:t.address}})])],1)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{isMapLoaded:!0,center:[59.9397027199454,30.323531627655033],address:"Санкт-Петербург, ул. Большая Конюшенная, 19"}},methods:{onError:function(t){this.isMapLoaded=!1}}},o=n(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseMap",{attrs:{"is-map-loaded":t.isMapLoaded,center:t.center,address:t.address},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseMap:n(284).default})},295:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{sectionTitle:"Блок с контактами",title:"Мы ждем вас",address:"Санкт-Петербург,\n ул. Большая Конюшенная, 19",contactList:[{term:"",definition:""}],socials:[{label:"Facebook",link:"https://www.facebook.com/",icon:{link:"#icon-fb",width:"6",height:"12"}},{label:"Вконтакте",link:"https://vk.com/",icon:{link:"#icon-vk",width:"14",height:"8"}},{label:"Instagram",link:"https://www.instagram.com/",icon:{link:"#icon-inst",width:"12",height:"12"}}]}}},o=n(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contacts",attrs:{id:"contacts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"contacts__wrapper"},[n("h2",{staticClass:"ally-hidden"},[t._v("Блок с контактами")]),t._v(" "),n("p",{staticClass:"contacts__title title"},[t._v("Мы ждем вас")]),t._v(" "),n("dl",{staticClass:"contacts__list text"},[n("div",{staticClass:"contacts__item contacts__item--address"},[n("dt",{staticClass:"contacts__key"},[t._v("Приходите к нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("address")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--regime"},[n("dt",{staticClass:"contacts__key"},[t._v("Режим работы:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("regime")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--phone"},[n("dt",{staticClass:"contacts__key"},[t._v("Позвоните нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("phone")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--email"},[n("dt",{staticClass:"contacts__key"},[t._v("Напишите нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("email")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--socials"},[n("dt",{staticClass:"contacts__key"},[t._v("Мы в соцсетях:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[n("ul",{staticClass:"contacts__socials socials"},t._l(t.socials,(function(e){return n("li",{key:e.link,staticClass:"socials__item"},[n("a",{staticClass:"socials__link link",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"socials_icon",attrs:{width:e.icon.width,height:e.icon.height}},[n("use",{attrs:{href:e.icon.link}})]),t._v(" "),n("span",{staticClass:"ally-hidden"},[t._v(t._s(e.label))])])])})),0)])])])])]),t._v(" "),t._t("map")],2)}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var c={},o=n(9),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseContacts",{scopedSlots:t._u([{key:"address",fn:function(){return[n("address",[t._v("\n      Санкт-Петербург,"),n("br"),t._v("\n      ул. Большая Конюшенная, 19\n    ")])]},proxy:!0},{key:"regime",fn:function(){return[t._v("Пн-Сб, с 9-00 до 20-00")]},proxy:!0},{key:"phone",fn:function(){return[n("address",[n("a",{staticClass:"link",attrs:{href:"tel:+74959834719"}},[t._v("+ 7 (495) 983-47-19")])])]},proxy:!0},{key:"email",fn:function(){return[n("address",[n("a",{staticClass:"link",attrs:{href:"mailto:info@cleverbaby.ru"}},[t._v("info@cleverbaby.ru")])])]},proxy:!0},{key:"map",fn:function(){return[n("TheMap")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheMap:n(294).default,BaseContacts:n(295).default})}}]);