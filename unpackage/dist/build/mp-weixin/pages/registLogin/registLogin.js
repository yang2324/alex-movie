(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registLogin/registLogin"],{1102:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"253b":function(e,t,a){"use strict";(function(e){a("600d");n(a("66fd"));var t=n(a("6f45"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"3e8d":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},methods:{appOAuthLogin:function(t){var a=this,n=t.currentTarget.dataset.logintype;e.login({provider:n,success:function(t){e.getUserInfo({provider:n,success:function(t){var r=t.userInfo,i="",u="",s="";"weixin"==n?(i=r.avatarUrl,u=r.nickName,s=r.openId):"qq"==n?(s=r.openId,u=r.nickname,i=r.figureurl_qq_2):"sinaweibo"==n&&(s=r.id,u=r.nickname,i=r.avatar_large),e.request({url:a.serverUrl+"\t/appUnionLogin/"+n+"?qq=2715705745",data:{face:i,nickname:u,openIdOrUid:s},method:"POST",success:function(t){if(200==t.data.status){var a=t.data.data;e.setStorageSync("globalUser",a),e.switchTab({url:"../me/me"})}}})}})}})},wxLogin:function(t){var a=this,n=t.detail.userInfo;e.login({provider:"weixin",success:function(t){var r=t.code,i=1;e.request({url:a.serverUrl+"/stu/mpWXLogin/"+r+"?qq=2715705745",data:{avatarUrl:n.avatarUrl,nickName:n.nickName,whichMP:i,qq:"2715705745"},method:"POST",success:function(t){if(200==t.data.status){var a=t.data.data;e.setStorageSync("globalUser",a),e.switchTab({url:"../me/me"})}}})}})},formSubmit:function(t){var a=this,n=t.detail.value.username,r=t.detail.value.password,i=a.serverUrl;e.request({url:i+"/user/registOrLogin?qq=2715705745",data:{username:n,password:r},method:"POST",success:function(t){if(200==t.data.status){var a=t.data.data;e.setStorageSync("globalUser",a),e.switchTab({url:"../me/me"})}else 500==t.data.status&&e.showToast({title:t.data.msg,duration:2e3,image:"../../static/icos/error.png"})}})}}};t.default=a}).call(this,a("543d")["default"])},"4e4d":function(e,t,a){},"6f45":function(e,t,a){"use strict";a.r(t);var n=a("1102"),r=a("8173");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("fabf");var u,s=a("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"e6ed09fe",null,!1,n["a"],u);t["default"]=o.exports},8173:function(e,t,a){"use strict";a.r(t);var n=a("3e8d"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},fabf:function(e,t,a){"use strict";var n=a("4e4d"),r=a.n(n);r.a}},[["253b","common/runtime","common/vendor"]]]);