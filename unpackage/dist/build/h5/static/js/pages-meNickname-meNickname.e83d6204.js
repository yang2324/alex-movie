(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meNickname-meNickname"],{"1b8a":function(n,a,e){"use strict";var t=e("62a4"),i=e.n(t);i.a},2098:function(n,a,e){var t=e("24fb");a=t(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 页面铺满屏幕 */.page-fill[data-v-bc2906ae]{width:100%;height:100%;position:absolute}.graywords[data-v-bc2906ae]{color:#eaeaea}.page-block[data-v-bc2906ae]{background-color:#fff}.input[data-v-bc2906ae]{height:%?80?%;line-height:%?80?%;width:%?500?%;margin-left:%?40?%}.submitBtn[data-v-bc2906ae]{width:95%;margin-top:%?40?%}",""]),n.exports=a},"62a4":function(n,a,e){var t=e("2098");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var i=e("4f06").default;i("207ff753",t,!0,{sourceMap:!1,shadowMode:!1})},7142:function(n,a,e){"use strict";var t;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return t}));var i=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("v-uni-view",{staticClass:"page page-fill"},[e("v-uni-form",{on:{submit:function(a){arguments[0]=a=n.$handleEvent(a),n.formSubmitNickname.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-block",staticStyle:{"margin-top":"20upx"}},[e("v-uni-input",{staticClass:"input",attrs:{type:"text",value:n.globalUser.nickname,name:"nickname",placeholder:"请输入昵称","placeholder-class":"graywords",maxlength:"10"}})],1),e("v-uni-button",{staticClass:"submitBtn",attrs:{type:"primary","form-type":"submit"}},[n._v("提交")])],1)],1)},r=[]},"7e4a":function(n,a,e){"use strict";e.r(a);var t=e("7142"),i=e("ab42");for(var r in i)"default"!==r&&function(n){e.d(a,n,(function(){return i[n]}))}(r);e("1b8a");var s,o=e("f0c5"),u=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"bc2906ae",null,!1,t["a"],s);a["default"]=u.exports},ab42:function(n,a,e){"use strict";e.r(a);var t=e("b38e"),i=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(a,n,(function(){return t[n]}))}(r);a["default"]=i.a},b38e:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{globalUser:{}}},onLoad:function(){var n=this,a=n.getGlobalUser("globalUser");n.globalUser=a},methods:{formSubmitNickname:function(n){var a=this,e=n.detail.value.nickname;uni.request({url:a.serverUrl+"/user/modifyUserinfo?qq=2715705745",data:{userId:a.globalUser.id,nickname:e},header:{headerUserId:a.globalUser.id,headerUserToken:a.globalUser.userUniqueToken},method:"POST",success:function(n){var a=n.data;if(200==a.status){var e=a.data;uni.setStorageSync("globalUser",e),uni.navigateBack({delta:1})}else 502!=a.status&&500!=a.status||uni.showToast({title:n.data.msg,image:"../../static/icos/error.png",duration:2e3})}})}}};a.default=t}}]);