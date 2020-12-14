
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/me/me","pages/movie/movie","pages/cover/cover","pages/registLogin/registLogin","pages/meInfo/meInfo","pages/meFace/meFace","pages/faceCrop/faceCrop","pages/meNickname/meNickname","pages/meBirthday/meBirthday","pages/meSex/meSex"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"电影院","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#bfbfbf","selectedColor":"#515151","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabBarIco/index.png","selectedIconPath":"static/tabBarIco/index_sel.png","text":"首页"},{"pagePath":"pages/search/search","iconPath":"static/tabBarIco/search.png","selectedIconPath":"static/tabBarIco/search_sel.png","text":"搜索"},{"pagePath":"pages/me/me","iconPath":"static/tabBarIco/me.png","selectedIconPath":"static/tabBarIco/me_sel.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"电影预告","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索电影"}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的","navigationBarBackgroundColor":"#ffd655","titleNView":false}},{"path":"/pages/movie/movie","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"share"},{"type":"favorite"}]}}},{"path":"/pages/cover/cover","meta":{},"window":{}},{"path":"/pages/registLogin/registLogin","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/meInfo/meInfo","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/meFace/meFace","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"头像上传","navigationBarBackgroundColor":"#000000"}},{"path":"/pages/faceCrop/faceCrop","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"头像剪裁","navigationBarBackgroundColor":"#000000"}},{"path":"/pages/meNickname/meNickname","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"修改昵称","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/meBirthday/meBirthday","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"修改生日","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/meSex/meSex","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"修改性别","navigationBarBackgroundColor":"#ffd655"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
