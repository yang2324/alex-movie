(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cover/cover"],{"1ff9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{cover:""}},onLoad:function(n){var e=n.cover;this.cover=e,t.setNavigationBarColor({backgroundColor:"#000000",frontColor:"#ffffff"})},methods:{operator:function(){var n=this;t.showActionSheet({itemList:["保存图片到本地","分享"],success:function(e){0==e.tapIndex&&(t.showLoading({title:"图片保存中。。。"}),t.downloadFile({url:n.cover,success:function(n){var e=n.tempFilePath;t.saveImageToPhotosAlbum({filePath:e,success:function(){t.showToast({title:"保存成功",duration:2e3})},complete:function(){t.hideLoading()}})}}))}})}}};n.default=e}).call(this,e("543d")["default"])},"693f":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"84da":function(t,n,e){"use strict";(function(t){e("600d");o(e("66fd"));var n=o(e("969d"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"969d":function(t,n,e){"use strict";e.r(n);var o=e("693f"),a=e("ff8e");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("9c57");var f,u=e("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"608ace9f",null,!1,o["a"],f);n["default"]=r.exports},"9c57":function(t,n,e){"use strict";var o=e("d5af"),a=e.n(o);a.a},d5af:function(t,n,e){},ff8e:function(t,n,e){"use strict";e.r(n);var o=e("1ff9"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a}},[["84da","common/runtime","common/vendor"]]]);