(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(t,e,M){var content=M(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,M(46).default)("b778c170",content,!0,{sourceMap:!1})},279:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCAzMiAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMxMzggMjcuNTc3MUwxNiAzOUw0LjY4NjIzIDI3LjU3NzFDMi40NDg2MSAyNS4zMTc5IDAuOTI0Nzc2IDIyLjQzOTQgMC4zMDc0MjggMTkuMzA1OEMtMC4zMDk5MTkgMTYuMTcyMiAwLjAwNjk0NTUgMTIuOTI0MSAxLjIxNzk1IDkuOTcyMjlDMi40Mjg5NiA3LjAyMDQ4IDQuNDc5NzIgNC40OTc1MyA3LjExMDkgMi43MjI0OEM5Ljc0MjA4IDAuOTQ3NDMgMTIuODM1NSAwIDE2IDBDMTkuMTY0NSAwIDIyLjI1NzkgMC45NDc0MyAyNC44ODkxIDIuNzIyNDhDMjcuNTIwMyA0LjQ5NzUzIDI5LjU3MSA3LjAyMDQ4IDMwLjc4MiA5Ljk3MjI5QzMxLjk5MzEgMTIuOTI0MSAzMi4zMDk5IDE2LjE3MjIgMzEuNjkyNiAxOS4zMDU4QzMxLjA3NTIgMjIuNDM5NCAyOS41NTE0IDI1LjMxNzkgMjcuMzEzOCAyNy41NzcxWk0xNiAxOS43NDRDMTYuOTQzIDE5Ljc0NCAxNy44NDc0IDE5LjM2NTggMTguNTE0MiAxOC42OTI2QzE5LjE4MSAxOC4wMTk0IDE5LjU1NTYgMTcuMTA2MyAxOS41NTU2IDE2LjE1NDJDMTkuNTU1NiAxNS4yMDIxIDE5LjE4MSAxNC4yODkgMTguNTE0MiAxMy42MTU4QzE3Ljg0NzQgMTIuOTQyNiAxNi45NDMgMTIuNTY0MyAxNiAxMi41NjQzQzE1LjA1NyAxMi41NjQzIDE0LjE1MjYgMTIuOTQyNiAxMy40ODU4IDEzLjYxNThDMTIuODE5IDE0LjI4OSAxMi40NDQ0IDE1LjIwMjEgMTIuNDQ0NCAxNi4xNTQyQzEyLjQ0NDQgMTcuMTA2MyAxMi44MTkgMTguMDE5NCAxMy40ODU4IDE4LjY5MjZDMTQuMTUyNiAxOS4zNjU4IDE1LjA1NyAxOS43NDQgMTYgMTkuNzQ0WiIgZmlsbD0iIzU4NzlFOCIvPgo8L3N2Zz4K"},280:function(t,e,M){"use strict";M(274)},281:function(t,e,M){var r=M(45)(!1);r.push([t.i,".map{transition:box-shadow .3s}.map:focus{box-shadow:0 0 5px 0 var(--color-navy)}",""]),t.exports=r},284:function(t,e,M){"use strict";M.r(e);M(33);var r={props:{isMapLoaded:{type:Boolean,default:!1},center:{type:Array,required:!0,validator:function(t){return 2===t.length&&("number"==typeof t[0]&&"number"==typeof t[1])}},address:{type:String,default:""}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:16}},mounted:function(){var t=this;delete this.$L.Icon.Default.prototype._getIconUrl,this.$L.Icon.Default.mergeOptions({iconRetinaUrl:null,iconUrl:M(279),shadowUrl:null,iconSize:[40,40],iconAnchor:[20,40]}),this.isMapLoaded&&this.$nextTick((function(){t.$refs.root.querySelectorAll("a").forEach((function(link){link.tabIndex="-1"}))}))}},o=(M(280),M(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("div",{ref:"root",staticClass:"contacts__map-wrapper"},[t.isMapLoaded?M("client-only",[M("l-map",{ref:"map",staticClass:"contacts__map map",attrs:{center:t.center,zoom:t.zoom}},[M("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution},on:{tileerror:function(e){return t.$emit("error")}}}),t._v(" "),M("l-marker",{attrs:{"lat-lng":t.center,tabindex:"-1",options:{keyboard:!1}}})],1)],1):M("picture",[M("source",{attrs:{type:"image/webp",srcset:"img/map-768w.webp 1x, img/map-768w-2x.webp 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),M("source",{attrs:{type:"image/webp",srcset:"img/map-1366w.webp 1x, img/map-1366w-2x.webp 2x",sizes:"1366px"}}),t._v(" "),M("source",{attrs:{type:"image/jpeg",srcset:"img/map-768w.jpg 1x, img/map-768w-2x.jpg 2x",sizes:"768px",media:"(max-width: 768px)"}}),t._v(" "),M("img",{staticClass:"contacts__map-fallback",attrs:{srcset:"img/map-1366w.jpg 1x, img/map-1366w-2x.jpg 2x",sizes:"1366px",alt:t.address}})])],1)}),[],!1,null,null,null);e.default=component.exports}}]);