(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cover-cover"],{7831:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".black[data-v-ef59b132]{background-color:#000;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:fixed}.cover[data-v-ef59b132]{-webkit-align-self:center;align-self:center}",""]),e.exports=t},"969d":function(e,t,n){"use strict";n.r(t);var o=n("d9fc"),i=n("ff8e");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("eb1a");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"ef59b132",null,!1,o["a"],r);t["default"]=u.exports},a3c9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{cover:""}},onLoad:function(e){var t=e.cover;this.cover=t,uni.setNavigationBarColor({backgroundColor:"#000000",frontColor:"#ffffff"})},methods:{operator:function(){var e=this;uni.showActionSheet({itemList:["保存图片到本地","分享"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片保存中。。。"}),uni.downloadFile({url:e.cover,success:function(e){var t=e.tempFilePath;uni.saveImageToPhotosAlbum({filePath:t,success:function(){uni.showToast({title:"保存成功",duration:2e3})},complete:function(){uni.hideLoading()}})}}))}})}}};t.default=o},d9fc:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"black"},[n("v-uni-image",{staticClass:"cover",attrs:{src:e.cover,mode:"widthFix"},on:{longpress:function(t){arguments[0]=t=e.$handleEvent(t),e.operator.apply(void 0,arguments)}}})],1)},a=[]},e1d1:function(e,t,n){var o=n("7831");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("15f68bf2",o,!0,{sourceMap:!1,shadowMode:!1})},eb1a:function(e,t,n){"use strict";var o=n("e1d1"),i=n.n(o);i.a},ff8e:function(e,t,n){"use strict";n.r(t);var o=n("a3c9"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a}}]);