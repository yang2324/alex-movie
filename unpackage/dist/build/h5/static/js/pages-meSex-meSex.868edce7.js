(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meSex-meSex"],{"34c5":function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{globalUser:{},sex:"-1"}},onLoad:function(){var n=this,e=n.getGlobalUser("globalUser");n.globalUser=e,n.sex=e.sex},methods:{sexChange:function(n){this.sex=n.detail.value},formSubmitSex:function(){var n=this,e=n.sex;uni.request({url:n.serverUrl+"/user/modifyUserinfo?qq=2715705745",data:{userId:n.globalUser.id,sex:e},header:{headerUserId:n.globalUser.id,headerUserToken:n.globalUser.userUniqueToken},method:"POST",success:function(n){var e=n.data;if(200==e.status){var a=e.data;uni.setStorageSync("globalUser",a),uni.navigateBack({delta:1})}else 502!=e.status&&500!=e.status||uni.showToast({title:n.data.msg,image:"../../static/icos/error.png",duration:2e3})}})}}};e.default=t},"6b81":function(n,e,a){var t=a("24fb");e=t(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 页面铺满屏幕 */.page-fill[data-v-15e0d3a8]{width:100%;height:100%;position:absolute}.radio-sex[data-v-15e0d3a8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}.radio-single[data-v-15e0d3a8]{padding:%?20?% %?20?%}.submitBtn[data-v-15e0d3a8]{width:95%;margin-top:%?40?%}",""]),n.exports=e},"96ea":function(n,e,a){"use strict";var t=a("dc3e"),i=a.n(t);i.a},afb1:function(n,e,a){"use strict";var t;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return t}));var i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-uni-view",{staticClass:"page page-fill"},[a("v-uni-form",{on:{submit:function(e){arguments[0]=e=n.$handleEvent(e),n.formSubmitSex.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"page-block",staticStyle:{"margin-top":"20upx"}},[a("v-uni-radio-group",{staticClass:"radio-sex",on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sexChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"radio-single"},[a("v-uni-radio",{attrs:{value:"1",checked:1==n.sex}}),n._v("男")],1),a("v-uni-label",{staticClass:"radio-single"},[a("v-uni-radio",{attrs:{value:"0",checked:0==n.sex}}),n._v("女")],1)],1)],1),a("v-uni-button",{staticClass:"submitBtn",attrs:{type:"primary","form-type":"submit"}},[n._v("提交")])],1)],1)},s=[]},dc3e:function(n,e,a){var t=a("6b81");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var i=a("4f06").default;i("04c76e8a",t,!0,{sourceMap:!1,shadowMode:!1})},e383:function(n,e,a){"use strict";a.r(e);var t=a("34c5"),i=a.n(t);for(var s in t)"default"!==s&&function(n){a.d(e,n,(function(){return t[n]}))}(s);e["default"]=i.a},f66b:function(n,e,a){"use strict";a.r(e);var t=a("afb1"),i=a("e383");for(var s in i)"default"!==s&&function(n){a.d(e,n,(function(){return i[n]}))}(s);a("96ea");var r,o=a("f0c5"),u=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"15e0d3a8",null,!1,t["a"],r);e["default"]=u.exports}}]);