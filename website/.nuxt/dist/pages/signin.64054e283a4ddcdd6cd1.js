webpackJsonp([26],{"1nuA":function(t,e,r){"use strict";e.decode=e.parse=r("kMPS"),e.encode=e.stringify=r("xaZU")},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"9oAv":function(t,e,r){"use strict";var n=r("FhoZ"),s=r.n(n);if(s.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+s.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},IgDG:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return s});var n=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},s=function(t,e){var r=t.split("."),s=e,o=r.length-1,a=r[o];r.map(function(t,e){e!==o&&(s=s[t])}),s[a]=n(s[a])}},MA1N:function(t,e,r){var n=r("tc6I");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("d9df2afe",n,!0)},MsCo:function(t,e,r){(function(t,n){var s;!function(o){function a(t){throw new RangeError(_[t])}function i(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function h(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(k,"."),n+i(t.split("."),e).join(".")}function c(t){for(var e,r,n=[],s=0,o=t.length;s<o;)e=t.charCodeAt(s++),e>=55296&&e<=56319&&s<o?(r=t.charCodeAt(s++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),s--)):n.push(e);return n}function u(t){return i(t,function(t){var e="";return t>65535&&(t-=65536,e+=P(t>>>10&1023|55296),t=56320|1023&t),e+=P(t)}).join("")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:C}function f(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function p(t,e,r){var n=0;for(t=r?F(t/A):t>>1,t+=F(t/e);t>N*w>>1;n+=C)t=F(t/N);return F(n+(N+1)*t/(t+O))}function m(t){var e,r,n,s,o,i,h,c,f,m,d=[],g=t.length,v=0,y=U,b=I;for(r=t.lastIndexOf(q),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&a("not-basic"),d.push(t.charCodeAt(n));for(s=r>0?r+1:0;s<g;){for(o=v,i=1,h=C;s>=g&&a("invalid-input"),c=l(t.charCodeAt(s++)),(c>=C||c>F((x-v)/i))&&a("overflow"),v+=c*i,f=h<=b?j:h>=b+w?w:h-b,!(c<f);h+=C)m=C-f,i>F(x/m)&&a("overflow"),i*=m;e=d.length+1,b=p(v-o,e,0==o),F(v/e)>x-y&&a("overflow"),y+=F(v/e),v%=e,d.splice(v++,0,y)}return u(d)}function d(t){var e,r,n,s,o,i,h,u,l,m,d,g,v,y,b,O=[];for(t=c(t),g=t.length,e=U,r=0,o=I,i=0;i<g;++i)(d=t[i])<128&&O.push(P(d));for(n=s=O.length,s&&O.push(q);n<g;){for(h=x,i=0;i<g;++i)(d=t[i])>=e&&d<h&&(h=d);for(v=n+1,h-e>F((x-r)/v)&&a("overflow"),r+=(h-e)*v,e=h,i=0;i<g;++i)if(d=t[i],d<e&&++r>x&&a("overflow"),d==e){for(u=r,l=C;m=l<=o?j:l>=o+w?w:l-o,!(u<m);l+=C)b=u-m,y=C-m,O.push(P(f(m+b%y,0))),u=F(b/y);O.push(P(f(u,0))),o=p(r,v,n==s),r=0,++n}++r,++e}return O.join("")}function g(t){return h(t,function(t){return S.test(t)?m(t.slice(4).toLowerCase()):t})}function v(t){return h(t,function(t){return R.test(t)?"xn--"+d(t):t})}var y=("object"==typeof e&&e&&e.nodeType,"object"==typeof t&&t&&t.nodeType,"object"==typeof n&&n);var b,x=2147483647,C=36,j=1,w=26,O=38,A=700,I=72,U=128,q="-",S=/^xn--/,R=/[^\x20-\x7E]/,k=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=C-j,F=Math.floor,P=String.fromCharCode;b={version:"1.4.1",ucs2:{decode:c,encode:u},decode:m,encode:d,toASCII:v,toUnicode:g},void 0!==(s=function(){return b}.call(e,r,e,t))&&(t.exports=s)}()}).call(e,r("3IRH")(t),r("DuR2"))},UZ5h:function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(t,e,r){if(t&&c.isObject(t)&&t instanceof n)return t;var s=new n;return s.parse(t,e,r),s}function o(t){return c.isString(t)&&(t=s(t)),t instanceof n?t.format():n.prototype.format.call(t)}function a(t,e){return s(t,!1,!0).resolve(e)}function i(t,e){return t?s(t,!1,!0).resolveObject(e):e}var h=r("MsCo"),c=r("qOJP");e.parse=s,e.resolve=a,e.resolveObject=i,e.format=o,e.Url=n;var u=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],m=["{","}","|","\\","^","`"].concat(p),d=["'"].concat(m),g=["%","/","?",";","#"].concat(d),v=["/","?","#"],y=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},C={javascript:!0,"javascript:":!0},j={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},w=r("1nuA");n.prototype.parse=function(t,e,r){if(!c.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),s=-1!==n&&n<t.indexOf("#")?"?":"#",o=t.split(s),a=/\\/g;o[0]=o[0].replace(a,"/"),t=o.join(s);var i=t;if(i=i.trim(),!r&&1===t.split("#").length){var l=f.exec(i);if(l)return this.path=i,this.href=i,this.pathname=l[1],l[2]?(this.search=l[2],this.query=e?w.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var p=u.exec(i);if(p){p=p[0];var m=p.toLowerCase();this.protocol=m,i=i.substr(p.length)}if(r||p||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===i.substr(0,2);!O||p&&C[p]||(i=i.substr(2),this.slashes=!0)}if(!C[p]&&(O||p&&!j[p])){for(var A=-1,I=0;I<v.length;I++){var U=i.indexOf(v[I]);-1!==U&&(-1===A||U<A)&&(A=U)}var q,S;S=-1===A?i.lastIndexOf("@"):i.lastIndexOf("@",A),-1!==S&&(q=i.slice(0,S),i=i.slice(S+1),this.auth=decodeURIComponent(q)),A=-1;for(var I=0;I<g.length;I++){var U=i.indexOf(g[I]);-1!==U&&(-1===A||U<A)&&(A=U)}-1===A&&(A=i.length),this.host=i.slice(0,A),i=i.slice(A),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var k=this.hostname.split(/\./),I=0,_=k.length;I<_;I++){var N=k[I];if(N&&!N.match(y)){for(var F="",P=0,E=N.length;P<E;P++)N.charCodeAt(P)>127?F+="x":F+=N[P];if(!F.match(y)){var M=k.slice(0,I),z=k.slice(I+1),Z=N.match(b);Z&&(M.push(Z[1]),z.unshift(Z[2])),z.length&&(i="/"+z.join(".")+i),this.hostname=M.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=h.toASCII(this.hostname));var $=this.port?":"+this.port:"",K=this.hostname||"";this.host=K+$,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!x[m])for(var I=0,_=d.length;I<_;I++){var L=d[I];if(-1!==i.indexOf(L)){var T=encodeURIComponent(L);T===L&&(T=escape(L)),i=i.split(L).join(T)}}var H=i.indexOf("#");-1!==H&&(this.hash=i.substr(H),i=i.slice(0,H));var D=i.indexOf("?");if(-1!==D?(this.search=i.substr(D),this.query=i.substr(D+1),e&&(this.query=w.parse(this.query)),i=i.slice(0,D)):e&&(this.search="",this.query={}),i&&(this.pathname=i),j[m]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var $=this.pathname||"",G=this.search||"";this.path=$+G}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,o="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(o=w.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||j[e])&&!1!==s?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),e+s+r+a+n},n.prototype.resolve=function(t){return this.resolveObject(s(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(c.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,s=Object.keys(this),o=0;o<s.length;o++){var a=s[o];r[a]=this[a]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),h=0;h<i.length;h++){var u=i[h];"protocol"!==u&&(r[u]=t[u])}return j[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!j[t.protocol]){for(var l=Object.keys(t),f=0;f<l.length;f++){var p=l[f];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||C[t.protocol])r.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),r.pathname=m.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var d=r.pathname||"",g=r.search||"";r.path=d+g}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var v=r.pathname&&"/"===r.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=y||v||r.host&&t.pathname,x=b,w=r.pathname&&r.pathname.split("/")||[],m=t.pathname&&t.pathname.split("/")||[],O=r.protocol&&!j[r.protocol];if(O&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),b=b&&(""===m[0]||""===w[0])),y)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=m;else if(m.length)w||(w=[]),w.pop(),w=w.concat(m),r.search=t.search,r.query=t.query;else if(!c.isNullOrUndefined(t.search)){if(O){r.hostname=r.host=w.shift();var A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");A&&(r.auth=A.shift(),r.host=r.hostname=A.shift())}return r.search=t.search,r.query=t.query,c.isNull(r.pathname)&&c.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var I=w.slice(-1)[0],U=(r.host||t.host||w.length>1)&&("."===I||".."===I)||""===I,q=0,S=w.length;S>=0;S--)I=w[S],"."===I?w.splice(S,1):".."===I?(w.splice(S,1),q++):q&&(w.splice(S,1),q--);if(!b&&!x)for(;q--;q)w.unshift("..");!b||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),U&&"/"!==w.join("/").substr(-1)&&w.push("");var R=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(O){r.hostname=r.host=R?"":w.length?w.shift():"";var A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");A&&(r.auth=A.shift(),r.host=r.hostname=A.shift())}return b=b||r.host&&w.length,b&&!R&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),c.isNull(r.pathname)&&c.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=l.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},a5ps:function(t,e,r){"use strict";function n(t){r("MA1N")}Object.defineProperty(e,"__esModule",{value:!0});var s=r("wUt5"),o=r("sm8/"),a=r("VU/8"),i=n,h=a(s.a,o.a,!1,i,null,null);e.default=h.exports},kMPS:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,o){e=e||"&",r=r||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var c=t.length;h>0&&c>h&&(c=h);for(var u=0;u<c;++u){var l,f,p,m,d=t[u].replace(i,"%20"),g=d.indexOf(r);g>=0?(l=d.substr(0,g),f=d.substr(g+1)):(l=d,f=""),p=decodeURIComponent(l),m=decodeURIComponent(f),n(a,p)?s(a[p])?a[p].push(m):a[p]=[a[p],m]:a[p]=m}return a};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},qOJP:function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},"sm8/":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"golang-signin-container",attrs:{type:"flex",align:"middle",justify:"center"}},[r("Col",{attrs:{xs:24,lg:6,md:14}},[r("a",{staticClass:"golang-signin-title",attrs:{href:"/"}},[t._v("GOLANG123")]),r("p",{staticClass:"golang-signin-desc"},[t._v("和地鼠们分享你的知识、经验和见解")]),r("Form",{ref:"formCustom",staticClass:"signup-form",attrs:{model:t.formCustom,rules:t.ruleCustom}},[r("Form-item",{attrs:{prop:"username"}},[r("i-input",{attrs:{size:"large",placeholder:"用户名 / 邮箱"},on:{"on-blur":function(e){t.blur("formCustom.username")}},model:{value:t.formCustom.username,callback:function(e){t.formCustom.username=e},expression:"formCustom.username"}})],1),r("Form-item",{attrs:{prop:"passwd"}},[r("i-input",{attrs:{size:"large",type:"password",placeholder:"密码"},nativeOn:{keydown:function(e){t.handleKeyUp(e)}},model:{value:t.formCustom.passwd,callback:function(e){t.formCustom.passwd=e},expression:"formCustom.passwd"}})],1),r("div",{staticStyle:{"min-height":"44px"}},[r("div",{staticClass:"l-captcha",attrs:{"data-width":"319","data-site-key":t.luosimaoSiteKey,"data-callback":"luosimaoCallback"}})]),r("p",{staticStyle:{"text-align":"right","padding-right":"2px","margin-top":"10px"}},[r("a",{staticClass:"golang-common-link",staticStyle:{"margin-right":"12px"},attrs:{href:"/signup"}},[t._v("立即注册")]),r("a",{staticClass:"golang-common-link",attrs:{href:"/ac/pwdReset"}},[t._v("忘记密码")])]),r("Form-item",{staticStyle:{"margin-top":"10px"}},[r("i-button",{staticStyle:{width:"100%"},attrs:{size:"large",type:"primary"},on:{click:function(e){t.handleSubmit("formCustom")}}},[t._v("登  录")])],1)],1)],1),r("script",{attrs:{type:"text/javascript",color:"51,133,255",opacity:"0.7",zIndex:"1",count:"80",src:"/javascripts/canvasnest/canvas-nest.min.js"}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},tc6I:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"body,html{background-color:#f7fafc}#__nuxt{position:relative;z-index:2}#__nuxt,.golang-signin-container{height:100%}.golang-signin-title{display:block;color:#2d8cf0;font-size:36px;font-style:italic;letter-spacing:3px;text-align:center}.golang-signin-title:hover{color:#2d8cf0;text-decoration:none}.golang-signin-desc{color:#959595;margin:10px 0 20px;text-align:center;letter-spacing:3px;font-size:14px}a:hover{text-decoration:underline}",""])},wUt5:function(t,e,r){"use strict";var n=r("y8ae"),s=r("V8bM"),o=r("FhoZ"),a=r.n(o),i=r("UZ5h"),h=r.n(i),c=r("IgDG");r("9oAv");e.a={data:function(){return{luosimaoRes:"",luosimaoSiteKey:a.a.luosimaoSiteKey,loading:!1,formCustom:{passwd:"",username:""},success:!1,ruleCustom:{passwd:[{required:!0,message:"请输入密码",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},asyncData:function(t){var e=t.user,r=void 0,n=h.a.parse(t.req.url,!0);if(n.query&&n.query.ref){r=decodeURIComponent(n.query.ref);var s=h.a.parse(r,!0),o=s.pathname;(o.match(/\/reset\/.+/)||o.match(/\/active\/.+/))&&(r="/")}else r="/";return e?void t.redirect(r):{user:e,ref:n.query.ref,redirectURL:r}},layout:"signin",middleware:"userInfo",head:function(){return{title:"登录",script:[{src:"//captcha.luosimao.com/static/js/api.js"}]}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.loading)return;e.loading=!0,s.a.signin({body:{signinInput:Object(c.a)(e.formCustom.username),password:Object(c.a)(e.formCustom.passwd),luosimaoRes:e.luosimaoRes}}).then(function(t){e.loading=!1,t.errNo===n.a.SUCCESS?window.location.href=e.redirectURL:t.errNo===n.a.IN_ACTIVE?window.location.href="/verify/mail?e="+encodeURIComponent(t.data.email):(window.LUOCAPTCHA.reset(),e.$Message.error(t.msg))}).catch(function(t){e.loading=!1,e.$Message.error(t.message)})}})},handleKeyUp:function(t){if(13===t.keyCode)return this.handleSubmit("formCustom")},blur:function(t){Object(c.b)(t,this)}},mounted:function(){var t=this;window.luosimaoCallback=function(e){t.luosimaoRes=e}}}},xaZU:function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,i){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(a(t),function(a){var i=encodeURIComponent(s(a))+r;return o(t[a])?n(t[a],function(t){return i+encodeURIComponent(s(t))}).join(e):i+encodeURIComponent(s(t[a]))}).join(e):i?encodeURIComponent(s(i))+r+encodeURIComponent(s(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},a=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}}});
//# sourceMappingURL=signin.64054e283a4ddcdd6cd1.js.map