(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,12,22],{272:function(t,e,l){var content=l(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(46).default)("3bd7481e",content,!0,{sourceMap:!1})},275:function(t,e,l){"use strict";l(272)},276:function(t,e,l){var n=l(45)(!1);n.push([t.i,".plyr{--plyr-color-main:var(--color-wheat);--plyr-video-background:transparent}.plyr,.plyr__video-wrapper{background:transparent!important}.plyr__control.plyr__tab-focus{outline:medium solid var(--plyr-color-main)}.video-player--initial .plyr__controls{display:none}",""]),t.exports=n},282:function(t,e,l){"use strict";l.r(e);l(80);var n={props:{videoName:{type:String,required:!0}},data:function(){return{plyr:null,initial:!0,base:"video-player"}},computed:{classList:function(){return[this.base,"".concat(this.base,"--").concat(this.initial?"initial":"playing")]}},created:function(){this.onVideoPlayerClick=this.onVideoPlayerClick.bind(this)},mounted:function(){this.plyr=this.$refs.video.closest(".plyr"),this.plyr&&(this.plyr.tabIndex="-1",this.plyr.addEventListener("click",this.onVideoPlayerClick))},beforeDestroy:function(){this.plyr&&this.plyr.addEventListener("click",this.onVideoPlayerClick)},methods:{onVideoPlayerClick:function(t){this.initial=!1,t.currentTarget.removeEventListener("click",this.onVideoPlayerClick)}}},o=(l(275),l(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:t.classList},[l("vue-plyr",[l("video",{ref:"video",staticClass:"video-player__video",attrs:{preload:"metadata",width:"431",height:"231",poster:"."}},[l("source",{attrs:{type:"video/webm",src:"video/"+t.videoName+".webm"}}),t._v(" "),l("source",{attrs:{type:"video/mp4",src:"video/"+t.videoName+".mp4"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,l){"use strict";l.r(e);var n={},o=l(9),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("BaseVideoPlayer",{attrs:{"video-name":"big_buck_bunny"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseVideoPlayer:l(282).default})},289:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{classes:{text:["about__text","text","text--basic"],lead:["about__text-lead","text","text--lead"],video:"about__video-player"}}}},o=l(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"about",attrs:{id:"about"}},[l("div",{staticClass:"container bg-decor bg-decor--about"},[l("h2",{staticClass:"about__title title"},[t._t("title")],2),t._v(" "),l("div",{staticClass:"about__wrapper"},[l("div",{staticClass:"about__column about__column--text"},[t._t("text-column",null,{text:t.classes.text,lead:t.classes.lead})],2),t._v(" "),l("div",{staticClass:"about__column about__column--video"},[t._t("video-column",null,{text:t.classes.text,lead:t.classes.lead,video:t.classes.video})],2)])])])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,l){"use strict";l.r(e);var n={},o=l(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("BaseAbout",{staticClass:"about text text--basic",attrs:{id:"about"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Как проходит обучение")]},proxy:!0},{key:"text-column",fn:function(e){var n=e.lead,text=e.text;return[l("p",{class:n},[t._v("Играя — обучаем, обучая — развиваем")]),t._v(" "),l("p",{class:text},[t._v("\n      Мы взяли все самое лучшее из традиционных и современных методик обучения\n      и развития детей. Обучение английскому языку происходит легко и\n      интересно, ведь малыши не зубрят материал по учебникам, а познают его\n      через игру, сказки, книги и музыку.\n    ")]),t._v(" "),l("p",{class:text},[t._v("\n      Наша методика также включает в себя обучение по программе Cambridge.\n      Благодаря этому, наши ученики без труда сдают международные и\n      государственные экзамены.\n    ")])]}},{key:"video-column",fn:function(e){var n=e.lead,video=e.video;return[l("p",{class:n},[t._v("Посмотрите, как проходят наши занятия")]),t._v(" "),l("TheVideoPlayer",{class:video})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheVideoPlayer:l(288).default,BaseAbout:l(289).default})}}]);