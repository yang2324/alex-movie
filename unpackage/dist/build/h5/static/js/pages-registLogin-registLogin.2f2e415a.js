(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registLogin-registLogin"],{"29de":function(t,e,i){t.exports=i.p+"static/img/default-face.c80ae62e.png"},"6eca":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{appOAuthLogin:function(t){var e=this,i=t.currentTarget.dataset.logintype;uni.login({provider:i,success:function(t){uni.getUserInfo({provider:i,success:function(t){var a=t.userInfo,n="",r="",o="";"weixin"==i?(n=a.avatarUrl,r=a.nickName,o=a.openId):"qq"==i?(o=a.openId,r=a.nickname,n=a.figureurl_qq_2):"sinaweibo"==i&&(o=a.id,r=a.nickname,n=a.avatar_large),uni.request({url:e.serverUrl+"\t/appUnionLogin/"+i+"?qq=2715705745",data:{face:n,nickname:r,openIdOrUid:o},method:"POST",success:function(t){if(200==t.data.status){var e=t.data.data;uni.setStorageSync("globalUser",e),uni.switchTab({url:"../me/me"})}}})}})}})},wxLogin:function(t){var e=this,i=t.detail.userInfo;uni.login({provider:"weixin",success:function(t){var a=t.code,n=1;uni.request({url:e.serverUrl+"/stu/mpWXLogin/"+a+"?qq=2715705745",data:{avatarUrl:i.avatarUrl,nickName:i.nickName,whichMP:n,qq:"2715705745"},method:"POST",success:function(t){if(200==t.data.status){var e=t.data.data;uni.setStorageSync("globalUser",e),uni.switchTab({url:"../me/me"})}}})}})},formSubmit:function(t){var e=this,i=t.detail.value.username,a=t.detail.value.password,n=e.serverUrl;uni.request({url:n+"/user/registOrLogin?qq=2715705745",data:{username:i,password:a},method:"POST",success:function(t){if(200==t.data.status){var e=t.data.data;uni.setStorageSync("globalUser",e),uni.switchTab({url:"../me/me"})}else 500==t.data.status&&uni.showToast({title:t.data.msg,duration:2e3,image:"../../static/icos/error.png"})}})}}};e.default=a},"6f45":function(t,e,i){"use strict";i.r(e);var a=i("a82e"),n=i("8173");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bdf8");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"59cb344b",null,!1,a["a"],o);e["default"]=c.exports},8173:function(t,e,i){"use strict";i.r(e);var a=i("6eca"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a82e:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"face-wapper"},[a("v-uni-image",{staticClass:"face",attrs:{src:i("29de")}})],1),a("v-uni-view",{staticClass:"info-wapper"},[a("v-uni-label",{staticClass:"words-lbl"},[t._v("账号")]),a("v-uni-input",{staticClass:"input",attrs:{name:"username",type:"text",value:"",placeholder:"请输入用户名","placeholder-class":"graywords"}})],1),a("v-uni-view",{staticClass:"info-wapper",staticStyle:{"margin-top":"40upx"}},[a("v-uni-label",{staticClass:"words-lbl"},[t._v("密码")]),a("v-uni-input",{staticClass:"input",attrs:{name:"password",type:"text",value:"",password:"true",placeholder:"请输入密码","placeholder-class":"graywords"}})],1),a("v-uni-button",{staticStyle:{"margin-top":"60upx",width:"90%"},attrs:{type:"primary","form-type":"submit"}},[t._v("注册/登录")])],1)],1)},r=[]},bdf8:function(t,e,i){"use strict";var a=i("deab"),n=i.n(a);n.a},d637:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".body[data-v-59cb344b]{border-top:solid 1px #dbdbda;padding:0 %?40?%}\n\n/* 头像 start */.face-wapper[data-v-59cb344b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?120?%;margin-bottom:%?120?%}.face[data-v-59cb344b]{width:%?160?%;height:%?160?%}\n\n/* 头像 end */\n\n/* 注册登录 start */.info-wapper[data-v-59cb344b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-bottom:solid 1px #dbdbda;padding-bottom:%?20?%}.words-lbl[data-v-59cb344b]{color:grey}.input[data-v-59cb344b]{width:%?500?%;margin-left:%?40?%}.graywords[data-v-59cb344b]{color:#eaeaea}\n\n/* 注册登录 end */\n\n/* 第三方登录 start */.third-wapper[data-v-59cb344b]{width:100%;\n\t/* 固定底部 */\n\t/* bottom: 0;\n\tposition: fixed; */margin-top:%?60?%}.third-line[data-v-59cb344b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.third-words[data-v-59cb344b]{color:#a9a9a9;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.single-line[data-v-59cb344b]{padding:%?15?% %?20?%;width:25%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.third-icos-wapper[data-v-59cb344b]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.third-ico[data-v-59cb344b]{width:%?60?%;height:%?60?%}.third-btn-ico[data-v-59cb344b]{background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);width:%?60?%;height:%?60?%;background-color:#fff;background-size:%?60?% %?60?%;background-repeat:no-repeat;border:none;padding:0}uni-button[data-v-59cb344b]::after{border:none}\n\n/* 第三方登录 end */",""]),t.exports=e},deab:function(t,e,i){var a=i("d637");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7424815c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);