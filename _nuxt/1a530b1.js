(window.webpackJsonp=window.webpackJsonp||[]).push([[23,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22],{272:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("3bd7481e",content,!0,{sourceMap:!1})},273:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("6c8f20b5",content,!0,{sourceMap:!1})},274:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("b778c170",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n(272)},276:function(t,e,n){var r=n(45)(!1);r.push([t.i,".plyr{--plyr-color-main:var(--color-wheat);--plyr-video-background:transparent}.plyr,.plyr__video-wrapper{background:transparent!important}.plyr__control.plyr__tab-focus{outline:medium solid var(--plyr-color-main)}.video-player--initial .plyr__controls{display:none}",""]),t.exports=r},277:function(t,e,n){"use strict";n(273)},278:function(t,e,n){var r=n(45)(!1);r.push([t.i,".slick-slider{z-index:0;padding-bottom:30px}.slick-arrow{position:absolute;z-index:1;bottom:0;left:50%;display:flex;padding:5px;cursor:pointer;transition:opacity .5s;border:none;outline:none;background:none;stroke:#122659;justify-content:center;align-items:center}.slick-arrow:hover{opacity:.75}.slick-prev{transform:translateX(-50%) translateX(-75%)}.slick-next{transform:translateX(-50%) translateX(75%)}@media(max-width:767px){.slick-slider{padding-bottom:0}.slick-arrow{transform:translateY(-50%);left:auto}.slick-prev{left:0}.slick-next{right:0}}",""]),t.exports=r},279:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAzMiAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMxMzggMjcuNTc3MUwxNiAzOUw0LjY4NjIzIDI3LjU3NzFDMi40NDg2MSAyNS4zMTc5IDAuOTI0Nzc2IDIyLjQzOTQgMC4zMDc0MjggMTkuMzA1OEMtMC4zMDk5MTkgMTYuMTcyMiAwLjAwNjk0NTUgMTIuOTI0MSAxLjIxNzk1IDkuOTcyMjlDMi40Mjg5NiA3LjAyMDQ4IDQuNDc5NzIgNC40OTc1MyA3LjExMDkgMi43MjI0OEM5Ljc0MjA4IDAuOTQ3NDMgMTIuODM1NSAwIDE2IDBDMTkuMTY0NSAwIDIyLjI1NzkgMC45NDc0MyAyNC44ODkxIDIuNzIyNDhDMjcuNTIwMyA0LjQ5NzUzIDI5LjU3MSA3LjAyMDQ4IDMwLjc4MiA5Ljk3MjI5QzMxLjk5MzEgMTIuOTI0MSAzMi4zMDk5IDE2LjE3MjIgMzEuNjkyNiAxOS4zMDU4QzMxLjA3NTIgMjIuNDM5NCAyOS41NTE0IDI1LjMxNzkgMjcuMzEzOCAyNy41NzcxWk0xNiAxOS43NDRDMTYuOTQzIDE5Ljc0NCAxNy44NDc0IDE5LjM2NTggMTguNTE0MiAxOC42OTI2QzE5LjE4MSAxOC4wMTk0IDE5LjU1NTYgMTcuMTA2MyAxOS41NTU2IDE2LjE1NDJDMTkuNTU1NiAxNS4yMDIxIDE5LjE4MSAxNC4yODkgMTguNTE0MiAxMy42MTU4QzE3Ljg0NzQgMTIuOTQyNiAxNi45NDMgMTIuNTY0MyAxNiAxMi41NjQzQzE1LjA1NyAxMi41NjQzIDE0LjE1MjYgMTIuOTQyNiAxMy40ODU4IDEzLjYxNThDMTIuODE5IDE0LjI4OSAxMi40NDQ0IDE1LjIwMjEgMTIuNDQ0NCAxNi4xNTQyQzEyLjQ0NDQgMTcuMTA2MyAxMi44MTkgMTguMDE5NCAxMy40ODU4IDE4LjY5MjZDMTQuMTUyNiAxOS4zNjU4IDE1LjA1NyAxOS43NDQgMTYgMTkuNzQ0WiIgZmlsbD0iIzU4NzlFOCIvPgo8L3N2Zz4K"},280:function(t,e,n){"use strict";n(274)},281:function(t,e,n){var r=n(45)(!1);r.push([t.i,".map{transition:box-shadow .3s}.map:focus{box-shadow:0 0 5px 0 var(--color-navy)}",""]),t.exports=r},282:function(t,e,n){"use strict";n.r(e);n(80);var r={props:{videoName:{type:String,required:!0}},data:function(){return{plyr:null,initial:!0,base:"video-player"}},computed:{classList:function(){return[this.base,"".concat(this.base,"--").concat(this.initial?"initial":"playing")]}},created:function(){this.onVideoPlayerClick=this.onVideoPlayerClick.bind(this)},mounted:function(){this.plyr=this.$refs.video.closest(".plyr"),this.plyr&&(this.plyr.tabIndex="-1",this.plyr.addEventListener("click",this.onVideoPlayerClick))},beforeDestroy:function(){this.plyr&&this.plyr.addEventListener("click",this.onVideoPlayerClick)},methods:{onVideoPlayerClick:function(t){this.initial=!1,t.currentTarget.removeEventListener("click",this.onVideoPlayerClick)}}},l=(n(275),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classList},[n("vue-plyr",[n("video",{ref:"video",staticClass:"video-player__video",attrs:{preload:"metadata",width:"431",height:"231",poster:"."}},[n("source",{attrs:{type:"video/webm",src:"video/"+t.videoName+".webm"}}),t._v(" "),n("source",{attrs:{type:"video/mp4",src:"video/"+t.videoName+".mp4"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r=n(285),l=n.n(r),o=(n(286),{components:{VueSlickCarousel:l.a},data:function(){return{sliderOptions:{accessibility:!1,slidesToShow:4,slidesToScroll:4,infinite:!0,responsive:[{breakpoint:1365,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}}},methods:{onSliderFocus:function(){this.$refs.sliderWrapper.focus()},onKeydownLeft:function(){this.$refs.slider.prev()},onKeydownRight:function(){this.$refs.slider.next()}}}),c=(n(277),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sliderWrapper",attrs:{"aria-live":"polite","aria-labelledby":"teachers-title",tabindex:"0"},on:{focusin:t.onSliderFocus,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onKeydownLeft(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])||"button"in e&&2!==e.button?null:t.onKeydownRight(e)}]}},[n("VueSlickCarousel",t._b({ref:"slider",scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},{key:"prevArrow",fn:function(){return[n("button",{attrs:{type:"button","aria-label":"Назад",tabindex:"-1"}},[n("svg",{staticClass:"teacher__slider-icon",attrs:{width:"15",height:"8"}},[n("use",{attrs:{href:"#icon-arrow-left"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[n("button",{attrs:{type:"button","aria-label":"Вперед",tabindex:"-1"}},[n("svg",{staticClass:"teacher__slider-icon",attrs:{width:"15",height:"8"}},[n("use",{attrs:{href:"#icon-arrow-right"}})])])]},proxy:!0}],null,!0)},"VueSlickCarousel",t.sliderOptions,!1))],1)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{isMapLoaded:{type:Boolean,default:!1},center:{type:Array,required:!0,validator:function(t){return 2===t.length&&("number"==typeof t[0]&&"number"==typeof t[1])}},address:{type:String,default:""}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:16}},mounted:function(){var t=this;delete this.$L.Icon.Default.prototype._getIconUrl,this.$L.Icon.Default.mergeOptions({iconRetinaUrl:null,iconUrl:n(279),shadowUrl:null,iconSize:[40,40],iconAnchor:[20,40]}),this.isMapLoaded&&this.$nextTick((function(){t.$refs.root.querySelectorAll("a").forEach((function(link){link.tabIndex="-1"}))}))}},l=(n(280),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"contacts__map-wrapper"},[t.isMapLoaded?n("client-only",[n("l-map",{ref:"map",staticClass:"contacts__map map",attrs:{center:t.center,zoom:t.zoom}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution},on:{tileerror:function(e){return t.$emit("error")}}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.center,tabindex:"-1",options:{keyboard:!1}}})],1)],1):n("picture",[n("source",{attrs:{type:"image/webp",srcset:"img/map-768w.webp 1x, img/map-768w-2x.webp 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),n("source",{attrs:{type:"image/webp",srcset:"img/map-1366w.webp 1x, img/map-1366w-2x.webp 2x",sizes:"1366px"}}),t._v(" "),n("source",{attrs:{type:"image/jpeg",srcset:"img/map-768w.jpg 1x, img/map-768w-2x.jpg 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),n("img",{staticClass:"contacts__map-fallback",attrs:{srcset:"img/map-1366w.jpg 1x, img/map-1366w-2x.jpg 2x",sizes:"1366px",alt:t.address}})])],1)}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro text",attrs:{id:"intro"}},[n("div",{staticClass:"container bg-decor bg-decor--intro"},[n("h2",{staticClass:"ally-hidden"},[t._t("section-title")],2),t._v(" "),n("h3",{staticClass:"intro__title title title--intro"},[t._t("title"),t._v(" "),n("span",{staticClass:"intro__subtitle title__subtitle"},[t._t("subtitle")],2)],2),t._v(" "),n("p",{staticClass:"intro__text"},[t._t("text")],2),t._v(" "),n("nuxt-link",{staticClass:"intro__reserve-btn btn btn--reserve",attrs:{to:"/"}},[t._t("reserve-btn")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("BaseVideoPlayer",{attrs:{"video-name":"big_buck_bunny"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseVideoPlayer:n(282).default})},289:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{classes:{text:["about__text","text","text--basic"],lead:["about__text-lead","text","text--lead"],video:"about__video-player"}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about",attrs:{id:"about"}},[n("div",{staticClass:"container bg-decor bg-decor--about"},[n("h2",{staticClass:"about__title title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"about__wrapper"},[n("div",{staticClass:"about__column about__column--text"},[t._t("text-column",null,{text:t.classes.text,lead:t.classes.lead})],2),t._v(" "),n("div",{staticClass:"about__column about__column--video"},[t._t("video-column",null,{text:t.classes.text,lead:t.classes.lead,video:t.classes.video})],2)])])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r={props:{features:{type:Array,required:!0,validator:function(t){return 4===t.length&&t.every((function(t){return t.title&&t.text}))}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"features"},[n("div",{staticClass:"container container--features"},[n("h2",{staticClass:"ally-hidden"},[t._t("title")],2),t._v(" "),n("ul",{staticClass:"features__list"},t._l(t.features,(function(e,r){return n("li",{key:"features__item--"+(r+1),staticClass:"features__item",class:"features__item--"+(r+1)},[n("p",{staticClass:"features__text-lead text text--lead"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"features__text text text--basic"},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var r={props:{groups:{type:Array,required:!0,validator:function(t){return t.every((function(t){return t.title&&t.timesInWeek&&t.lessonDuration&&t.monthPrice}))}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"groups",attrs:{id:"groups"}},[n("div",{staticClass:"container bg-decor bg-decor--groups"},[n("header",{staticClass:"groups__header"},[n("h2",{staticClass:"groups__title title"},[t._t("header-title")],2),t._v(" "),n("p",{staticClass:"groups__text text text--basic"},[t._t("header-text")],2)]),t._v(" "),n("ul",{staticClass:"groups__list"},t._l(t.groups,(function(e,r){return n("li",{key:"group-item--babik-"+(r+1),staticClass:"groups__item"},[n("div",{staticClass:"group-item text",class:"group-item--babik-"+(r+1)},[n("h3",{staticClass:"group-item__name text text--lead"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"group-item__text"},[t._v(t._s(e.timesInWeek)+" в неделю")]),t._v(" "),n("p",{staticClass:"group-item__text"},[t._v(t._s(e.lessonDuration)+" занятие")]),t._v(" "),n("p",{staticClass:"group-item__text"},[n("b",{staticClass:"group-item__price"},[t._v(" "+t._s(e.monthPrice)+" ₽")]),t._v("\n            в месяц\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"group-item__reserve-btn btn btn--reserve",attrs:{to:"/"}},[t._t("reserve-btn")],2)],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var r={props:{teachers:{type:Array,required:!0,validator:function(){return!0}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"teachers text text--basic",attrs:{id:"teachers"}},[n("div",{staticClass:"container bg-decor bg-decor--teachers"},[n("header",{staticClass:"teachers__header"},[n("h2",{staticClass:"teachers__title title",attrs:{id:"teachers-title"}},[t._t("header-title")],2),t._v(" "),n("p",{staticClass:"teachers__header-text"},[t._t("header-text")],2)]),t._v(" "),n("BaseTeachersCarousel",{staticClass:"teachers__slider"},t._l(t.teachers,(function(e){return n("figure",{key:e.id,staticClass:"teacher-card"},[n("picture",[n("source",{attrs:{type:"image/webp",srcset:"img/"+e.img+"-220w.webp 1x, img/"+e.img+"-220w-2x.webp 2x"}}),t._v(" "),n("img",{staticClass:"teacher-card__img",attrs:{srcset:"img/"+e.img+"-220w.jpg 1x, img/"+e.img+"-220w-2x.jpg 2x",src:"img/"+e.img+"-220w.jpg",width:"220",height:"219",alt:"Преподаватель "+e.name}})]),t._v(" "),n("figcaption",[n("p",{staticClass:"teacher-card__name text text--teacher-name"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"teacher-card__country text text--teacher-country"},[t._v("\n            "+t._s(e.country)+"\n          ")])])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTeachersCarousel:n(283).default})},293:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"trial text text--basic"},[n("div",{staticClass:"container bg-decor bg-decor--trial"},[n("div",{staticClass:"trial__wrapper"},[n("h2",{staticClass:"trial__title title title--trial"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"trial__text"},[t._t("text")],2),t._v(" "),n("nuxt-link",{staticClass:"trial__reserve-btn btn btn--reserve",attrs:{to:"/"}},[t._t("reserve-btn")],2)],1)])])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isMapLoaded:!0,center:[59.9397027199454,30.323531627655033],address:"Санкт-Петербург, ул. Большая Конюшенная, 19"}},methods:{onError:function(t){this.isMapLoaded=!1}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseMap",{attrs:{"is-map-loaded":t.isMapLoaded,center:t.center,address:t.address},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseMap:n(284).default})},295:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{sectionTitle:"Блок с контактами",title:"Мы ждем вас",address:"Санкт-Петербург,\n ул. Большая Конюшенная, 19",contactList:[{term:"",definition:""}],socials:[{label:"Facebook",link:"https://www.facebook.com/",icon:{link:"#icon-fb",width:"6",height:"12"}},{label:"Вконтакте",link:"https://vk.com/",icon:{link:"#icon-vk",width:"14",height:"8"}},{label:"Instagram",link:"https://www.instagram.com/",icon:{link:"#icon-inst",width:"12",height:"12"}}]}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contacts",attrs:{id:"contacts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"contacts__wrapper"},[n("h2",{staticClass:"ally-hidden"},[t._v("Блок с контактами")]),t._v(" "),n("p",{staticClass:"contacts__title title"},[t._v("Мы ждем вас")]),t._v(" "),n("dl",{staticClass:"contacts__list text"},[n("div",{staticClass:"contacts__item contacts__item--address"},[n("dt",{staticClass:"contacts__key"},[t._v("Приходите к нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("address")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--regime"},[n("dt",{staticClass:"contacts__key"},[t._v("Режим работы:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("regime")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--phone"},[n("dt",{staticClass:"contacts__key"},[t._v("Позвоните нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("phone")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--email"},[n("dt",{staticClass:"contacts__key"},[t._v("Напишите нам:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[t._t("email")],2)]),t._v(" "),n("div",{staticClass:"contacts__item contacts__item--socials"},[n("dt",{staticClass:"contacts__key"},[t._v("Мы в соцсетях:")]),t._v(" "),n("dd",{staticClass:"contacts__value"},[n("ul",{staticClass:"contacts__socials socials"},t._l(t.socials,(function(e){return n("li",{key:e.link,staticClass:"socials__item"},[n("a",{staticClass:"socials__link link",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"socials_icon",attrs:{width:e.icon.width,height:e.icon.height}},[n("use",{attrs:{href:e.icon.link}})]),t._v(" "),n("span",{staticClass:"ally-hidden"},[t._v(t._s(e.label))])])])})),0)])])])])]),t._v(" "),t._t("map")],2)}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseIntro",{scopedSlots:t._u([{key:"section-title",fn:function(){return[t._v(" Вводный блок ")]},proxy:!0},{key:"title",fn:function(){return[t._v(" Английский язык ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" для детей от 2 до 7 лет ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n    Гармоничное развитие детей и обучение"),n("br"),t._v("\n    через полное погружение в языковую среду\n  ")]},proxy:!0},{key:"reserve-btn",fn:function(){return[t._v(" Записаться ")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIntro:n(287).default})},297:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseAbout",{staticClass:"about text text--basic",attrs:{id:"about"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Как проходит обучение")]},proxy:!0},{key:"text-column",fn:function(e){var r=e.lead,text=e.text;return[n("p",{class:r},[t._v("Играя — обучаем, обучая — развиваем")]),t._v(" "),n("p",{class:text},[t._v("\n      Мы взяли все самое лучшее из традиционных и современных методик обучения\n      и развития детей. Обучение английскому языку происходит легко и\n      интересно, ведь малыши не зубрят материал по учебникам, а познают его\n      через игру, сказки, книги и музыку.\n    ")]),t._v(" "),n("p",{class:text},[t._v("\n      Наша методика также включает в себя обучение по программе Cambridge.\n      Благодаря этому, наши ученики без труда сдают международные и\n      государственные экзамены.\n    ")])]}},{key:"video-column",fn:function(e){var r=e.lead,video=e.video;return[n("p",{class:r},[t._v("Посмотрите, как проходят наши занятия")]),t._v(" "),n("TheVideoPlayer",{class:video})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheVideoPlayer:n(288).default,BaseAbout:n(289).default})},298:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{features:[{title:"Языковое погружение",text:"Занятия проходят полностью на английском языке, независимо от типа задания"},{title:"Развитие 10 видов интеллекта",text:"Учимся общаться, развивать эмоциональный, творческий интеллект и многое другое"},{title:"Небольшие группы",text:"Дети занимаются в группах до 5 человек, что позволяет применять индивидуальный подход к каждому"},{title:"Педагоги — носители языка",text:"Занятия ведут преподаватели из США, Великобритании и Канады, для которых английский язык является родным"}]}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseFeatures",{attrs:{features:t.features},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Особоенности нашей методики обучения")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseFeatures:n(290).default})},299:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{groups:[{title:"Бэбики-1",timesInWeek:"1 раз",lessonDuration:"1,5 часа",monthPrice:2500},{title:"Бэбики-2",timesInWeek:"2 раз",lessonDuration:"1,5 часа",monthPrice:4e3},{title:"Бэбики-3",timesInWeek:"3 раза",lessonDuration:"1 час",monthPrice:4e3}]}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseGroups",{attrs:{groups:t.groups},scopedSlots:t._u([{key:"header-title",fn:function(){return[t._v(" Наши группы ")]},proxy:!0},{key:"header-text",fn:function(){return[t._v("\n    В группах занимается до 5 человек. Все дети в группе примерно одного\n    возраста и уровня знаний.\n  ")]},proxy:!0},{key:"reserve-btn",fn:function(){return[t._v(" Записаться ")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseGroups:n(291).default})},300:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{teachers:[{id:"teacher-1",img:"teacher-1",name:"Kate Smith",country:"США"},{id:"teacher-2",img:"teacher-2",name:"Samuel King",country:"США"},{id:"teacher-3",img:"teacher-3",name:"Nikole Young",country:"Канада"},{id:"teacher-4",img:"teacher-4",name:"Karoline Bush",country:"Канада"},{id:"teacher-5",img:"teacher-1",name:"Kate Smith",country:"Канада"},{id:"teacher-6",img:"teacher-2",name:"Samuel King",country:"США"},{id:"teacher-7",img:"teacher-3",name:"Nikole Young",country:"Канада"},{id:"teacher-8",img:"teacher-4",name:"Karoline Bush",country:"США"},{id:"teacher-9",img:"teacher-1",name:"Kate Smith",country:"США"},{id:"teacher-10",img:"teacher-2",name:"Samuel King",country:"Канада"},{id:"teacher-11",img:"teacher-3",name:"Nikole Young",country:"Канада"},{id:"teacher-12",img:"teacher-4",name:"Karoline Bush",country:"Канада"}]}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseTeachers",{attrs:{id:"teachers",teachers:t.teachers},scopedSlots:t._u([{key:"header-title",fn:function(){return[t._v(" Наши преподаватели ")]},proxy:!0},{key:"header-text",fn:function(){return[t._v("\n    Все наши преподаватели — носители английского языка и имеют необходимое\n    образование и опыт работы с детьми\n  ")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTeachers:n(292).default})},301:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseTrial",{attrs:{id:"trial"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Запишитесь на бесплатное пробное занятие ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n    Приходите к нам в гости и мы познакомим вас с педагогами, расскажем о\n    школе и ответим на все ваши вопросы\n  ")]},proxy:!0},{key:"reserve-btn",fn:function(){return[t._v(" Записаться ")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTrial:n(293).default})},302:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseContacts",{scopedSlots:t._u([{key:"address",fn:function(){return[n("address",[t._v("\n      Санкт-Петербург,"),n("br"),t._v("\n      ул. Большая Конюшенная, 19\n    ")])]},proxy:!0},{key:"regime",fn:function(){return[t._v("Пн-Сб, с 9-00 до 20-00")]},proxy:!0},{key:"phone",fn:function(){return[n("address",[n("a",{staticClass:"link",attrs:{href:"tel:+74959834719"}},[t._v("+ 7 (495) 983-47-19")])])]},proxy:!0},{key:"email",fn:function(){return[n("address",[n("a",{staticClass:"link",attrs:{href:"mailto:info@cleverbaby.ru"}},[t._v("info@cleverbaby.ru")])])]},proxy:!0},{key:"map",fn:function(){return[n("TheMap")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheMap:n(294).default,BaseContacts:n(295).default})},304:function(t,e,n){"use strict";n.r(e);var r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"ally-hidden"},[t._v("\n    Страница учебного центра «Clever Baby»\n  ")]),t._v(" "),n("TheIntro"),t._v(" "),n("TheAbout"),t._v(" "),n("TheFeatures"),t._v(" "),n("TheGroups"),t._v(" "),n("TheTeachers"),t._v(" "),n("TheTrial"),t._v(" "),n("TheContacts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheIntro:n(296).default,TheAbout:n(297).default,TheFeatures:n(298).default,TheGroups:n(299).default,TheTeachers:n(300).default,TheTrial:n(301).default,TheContacts:n(302).default})}}]);