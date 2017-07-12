webpackJsonp([1],[,,,,,function(t,e,n){"use strict";e.a={api:"https://poll.now.sh"}},,,,,,function(t,e,n){function i(t){n(46)}var o=n(1)(n(35),n(60),i,null,null);t.exports=o.exports},,function(t,e){},,,,function(t,e,n){function i(t){n(47)}var o=n(1)(n(37),n(61),i,null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in o||(i.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),o[e]=n}},icons:o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"alert",data:function(){return{message:"",type:"",timeout:null}},methods:{notify:function(t,e){"success"!==t&&clearTimeout(this.timeout),this.type=t,this.message=e,"success"!==t&&(this.timeout=setTimeout(this.remove,5e3))},remove:function(){this.type="",this.message=""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),o=n.n(i),r=n(51),s=n.n(r),a=n(5),c=n(42),l=n(65),u=n.n(l),h=n(54),d=n.n(h),f=n(55),p=n.n(f),v=n(56),m=n.n(v),g=n(57),_=n.n(g);e.default={name:"app",data:function(){return{options:[{text:""}],loading:!1,generated:!1,errors:{},counter:0,id:""}},methods:{trigger:function(){this.$refs.add.click()},add:function(){var t=this;this.counter=this.counter+1,this.options.push({id:this.counter+1,text:""}),this.$nextTick(function(){t.$refs.options[t.$refs.options.length-1].focus()})},rm:function(t){this.options.length>1&&this.options.splice(t,1)},generate:function(){var t=this;if(!this.loading)return this.options.some(function(t){return!t.text.length})?(this.errors=c.a(this.options.filter(function(t){return!t.text.length}).map(function(t){return t.id}),!0),void this.$refs.alert.notify("error","You forgot to fill up some options.")):(this.errors={},this.loading=!0,o.a.post("/poll",{options:this.options.map(function(t){return t.text.trim()})}).then(function(e){t.$refs.alert.notify("success","The poll was successfully generated!"),t.loading=!1,t.generated=!0,t.id=e.data.id},function(e){t.$refs.alert.notify("error","An error occured trying to generate a poll."),t.loading=!1}))}},computed:{markdown:function(){var t=this;return this.options.map(function(e){return e=encodeURIComponent(e.text),"[![]("+a.a.api+"/poll/"+t.id+"/o/"+e+")]("+a.a.api+"/poll/"+t.id+"/o/"+e+"/vote)"}).join("\n")},preview:function(){return s()(this.markdown)}},components:{Alert:d.a,Copy:p.a,Loader:_.a,Draggable:u.a,"ui-footer":m.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),o=n.n(i);e.default={name:"copy",props:{text:String},data:function(){return{show:!1,timeout:null}},methods:{click:function(){var t=this;o()(this.text),this.show=!1,clearTimeout(this.timeout),this.$nextTick(function(){t.show=!0,t.timeout=setTimeout(function(){return t.show=!1},250)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-footer"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loader"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(17),r=n.n(o),s=n(13),a=(n.n(s),n(14)),c=n.n(a),l=(n(16),n(15),n(4)),u=n.n(l),h=n(5);i.default.component("icon",c.a),u.a.defaults.baseURL=h.a.api,i.default.config.productionTip=!1,new i.default({el:"#app",template:"<App/>",components:{App:r.a}})},function(t,e,n){"use strict";function i(t,e){var n={};return t.forEach(function(t){n[t]=e}),n}e.a=i},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){function i(t){n(49)}var o=n(1)(n(36),n(63),i,"data-v-8ee48436",null);t.exports=o.exports},function(t,e,n){function i(t){n(48)}var o=n(1)(n(38),n(62),i,"data-v-6cfa6508",null);t.exports=o.exports},function(t,e,n){function i(t){n(45)}var o=n(1)(n(39),n(59),i,"data-v-3e0390e2",null);t.exports=o.exports},function(t,e,n){function i(t){n(44)}var o=n(1)(n(40),n(58),i,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dot-loader"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("p",{staticClass:"text"},[t._v("\n    Web front-end for Fly-poll "),n("a",{attrs:{href:"https://github.com/rhiokim/fly-poll",target:"_blank"}},[t._v("GitHub Polls")]),t._v(".\n  ")]),t._v(" "),n("div",{staticClass:"linkset"},[n("a",{attrs:{href:"https://github.com/rhiokim/fly-poll-web",target:"_blank"}},[t._v("GitHub")]),t._v(" "),n("a",{attrs:{href:"https://github.com/rhiokim",target:"_blank"}},[t._v("@rhiokim")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title-heading"},[t._v("Fly Polls")]),t._v(" "),t.generated?n("div",[n("header",{staticClass:"menu-heading"},[n("h5",{staticClass:"title"},[t._v("Generated Poll")]),t._v(" "),n("copy",{attrs:{text:t.markdown}})],1),t._v(" "),n("div",{staticClass:"preview-box",domProps:{innerHTML:t._s(t.preview)}}),t._v(" "),n("alert",{ref:"alert"})],1):n("div",[n("header",{staticClass:"menu-heading"},[n("h5",{staticClass:"title"},[t._v("Poll Options")])]),t._v(" "),n("div",{staticClass:"panel-box"},[n("draggable",{staticClass:"inner",attrs:{options:{group:"options",handle:".handle"}},model:{value:t.options,callback:function(e){t.options=e},expression:"options"}},t._l(t.options,function(e,i){return n("div",{key:e,staticClass:"item"},[n("div",{staticClass:"handle",attrs:{title:"Drag item around to sort"}},[n("icon",{attrs:{name:"ellipsis-v"}})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"option.text"}],ref:"options",refInFor:!0,class:{"form-input":!0,"-danger":t.errors[e.id]},attrs:{type:"text",placeholder:"Enter option..."},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),t._v(" "),n("button",{staticClass:"remove",attrs:{type:"button",title:"Remove this option",tabindex:"-1"},on:{click:function(e){t.rm(i)}}},[n("icon",{attrs:{name:"remove"}})],1)])})),t._v(" "),n("button",{ref:"add",staticClass:"add",attrs:{type:"button"},on:{focus:t.trigger,click:t.add}},[t._v("\n        Add another option\n      ")])],1),t._v(" "),n("alert",{ref:"alert"}),t._v(" "),n("div",{staticClass:"generate-action"},[n("button",{staticClass:"button",attrs:{type:"button",disabled:t.loading},on:{click:t.generate}},[t.loading?n("loader"):n("span",[t._v("Generate")])],1)])],1),t._v(" "),n("ui-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"copy",attrs:{type:"button",title:"Copy to clipboard"},on:{click:t.click}},[t._v("\n  Copy\n  "),t.show?n("span",{staticClass:"textee"},[t._v("\n    Copied!\n  ")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{class:{"alert-box":!0,"-danger":"error"===t.type,"-success":"success"===t.type}},[n("transition",{attrs:{name:"fade"}},[t.message?n("span",[t._v(t._s(t.message))]):t._e()])],1)},staticRenderFns:[]}}],[41]);
//# sourceMappingURL=app.8855388b5e4fda999c2d.js.map