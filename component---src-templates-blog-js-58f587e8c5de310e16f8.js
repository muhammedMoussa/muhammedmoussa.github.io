(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4M6O":function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,u=function(){r=null,n||e.apply(o,i)},a=n&&!r;window.clearTimeout(r),r=setTimeout(u,t),a&&e.apply(o,i)}},t.isReactElement=u,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!u(t[r]))return!0})).length};var o=r(n("R7tm")),i=r(n("q1tI"));function u(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},ORnI:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var i=r(n("qASQ"));t.CommentCount=i.default;var u=r(n("vAJ3"));t.CommentEmbed=u.default;var a=o.default;t.default=a},R7tm:function(e,t,n){var r=n("qHws"),o=n("gC2u"),i=n("dQcQ"),u=n("m7BV");e.exports=function(e){return r(e)||o(e)||i(e)||u()}},R8uD:function(e,t,n){"use strict";(function(e){n("RUBk"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var c,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==a?a:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,i,u,c="object",l=function(e){return e&&e.Math==Math&&e},s=l(typeof globalThis==c&&globalThis)||l(typeof window==c&&window)||l(typeof self==c&&self)||l(typeof n==c&&n)||Function("return this")(),f=function(e){try{return!!e()}catch(t){return!0}},d=!f((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),p={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,h={f:m&&!p.call({1:2},1)?function(e){var t=m(this,e);return!!t&&t.enumerable}:p},E=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y={}.toString,g="".split,v=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return y.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,b=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},w=function(e){return"object"==typeof e?null!==e:"function"==typeof e},I=function(e,t){if(!w(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!w(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!w(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!w(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},D=s.document,T=w(D)&&w(D.createElement),O=function(e){return T?D.createElement(e):{}},N=!d&&!f((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,L={f:d?A:function(e,t){if(e=b(e),t=I(t,!0),N)try{return A(e,t)}catch(n){}if(_(e,t))return E(!h.f.call(e,t),e[t])}},M=function(e){if(!w(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,C={f:d?j:function(e,t,n){if(M(e),t=I(t,!0),M(n),N)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=d?function(e,t,n){return C.f(e,t,E(1,n))}:function(e,t,n){return e[t]=n,e},R=function(e,t){try{P(s,e,t)}catch(n){s[e]=t}return t},q=r((function(e){var t=s["__core-js_shared__"]||R("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),B=q("native-function-to-string",Function.toString),H=s.WeakMap,U="function"==typeof H&&/native code/.test(B.call(H)),k=0,x=Math.random(),G=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++k+x).toString(36)},K=q("keys"),Y=function(e){return K[e]||(K[e]=G(e))},Q={},F=s.WeakMap;if(U){var V=new F,W=V.get,J=V.has,X=V.set;o=function(e,t){return X.call(V,e,t),t},i=function(e){return W.call(V,e)||{}},u=function(e){return J.call(V,e)}}else{var z=Y("state");Q[z]=!0,o=function(e,t){return P(e,z,t),t},i=function(e){return _(e,z)?e[z]:{}},u=function(e){return _(e,z)}}var $={set:o,get:i,has:u,enforce:function(e){return u(e)?i(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!w(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Z=r((function(e){var t=$.get,n=$.enforce,r=String(B).split("toString");q("inspectSource",(function(e){return B.call(e)})),(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||P(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==s?(u?!c&&e[t]&&(a=!0):delete e[t],a?e[t]=o:P(e,t,o)):a?e[t]=o:R(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||B.call(this)}))})),ee=s,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(s[e]):ee[e]&&ee[e][t]||s[e]&&s[e][t]},re=Math.ceil,oe=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,ae=Math.max,ce=Math.min,le=function(e){return function(t,n,r){var o,i,u=b(t),a=(o=u.length)>0?ue(ie(o),9007199254740991):0,c=function(e,t){var n=ie(e);return n<0?ae(n+t,0):ce(n,t)}(r,a);if(e&&n!=n){for(;a>c;)if((i=u[c++])!=i)return!0}else for(;a>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}},se={includes:le(!0),indexOf:le(!1)},fe=se.indexOf,de=function(e,t){var n,r=b(e),o=0,i=[];for(n in r)!_(Q,n)&&_(r,n)&&i.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~fe(i,n)||i.push(n));return i},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=pe.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return de(e,me)}},Ee={f:Object.getOwnPropertySymbols},ye=ne("Reflect","ownKeys")||function(e){var t=he.f(M(e)),n=Ee.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=ye(t),r=C.f,o=L.f,i=0;i<n.length;i++){var u=n[i];_(e,u)||r(e,u,o(t,u))}},ve=/#|\.prototype\./,be=function(e,t){var n=Ie[we(e)];return n==_e||n!=Se&&("function"==typeof t?f(t):!!t)},we=be.normalize=function(e){return String(e).replace(ve,".").toLowerCase()},Ie=be.data={},Se=be.NATIVE="N",_e=be.POLYFILL="P",De=be,Te=L.f,Oe=function(e,t){var n,r,o,i,u,a=e.target,c=e.global,l=e.stat;if(n=c?s:l?s[a]||R(a,{}):(s[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=Te(n,r))&&u.value:n[r],!De(c?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),Z(n,r,i,e)}},Ne=Object.keys||function(e){return de(e,pe)},Ae=h.f,Le=function(e){return function(t){for(var n,r=b(t),o=Ne(r),i=o.length,u=0,a=[];i>u;)n=o[u++],d&&!Ae.call(r,n)||a.push(e?[n,r[n]]:r[n]);return a}},Me={entries:Le(!0),values:Le(!1)}.values;Oe({target:"Object",stat:!0},{values:function(e){return Me(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Ce=s.Symbol,Pe=q("wks"),Re=d?Object.defineProperties:function(e,t){M(e);for(var n,r=Ne(t),o=r.length,i=0;o>i;)C.f(e,n=r[i++],t[n]);return e},qe=ne("document","documentElement"),Be=Y("IE_PROTO"),He=function(){},Ue=function(){var e,t=O("iframe"),n=pe.length;for(t.style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ue=e.F;n--;)delete Ue.prototype[pe[n]];return Ue()},ke=Object.create||function(e,t){var n;return null!==e?(He.prototype=M(e),n=new He,He.prototype=null,n[Be]=e):n=Ue(),void 0===t?n:Re(n,t)};Q[Be]=!0;var xe,Ge=Pe[xe="unscopables"]||(Pe[xe]=je&&Ce[xe]||(je?Ce:G)("Symbol."+xe)),Ke=Array.prototype;null==Ke[Ge]&&P(Ke,Ge,ke(null));var Ye,Qe=se.includes;Oe({target:"Array",proto:!0},{includes:function(e){return Qe(this,e,arguments.length>1?arguments[1]:void 0)}}),Ye="includes",Ke[Ge][Ye]=!0;var Fe,Ve,We,Je=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Xe=Function.call;Fe="includes",Je(Xe,s["Array"].prototype[Fe],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(We||(We={}));var ze,$e=We;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ze||(ze={}));var Ze,et=ze,tt=[$e.PARAGRAPH,$e.HEADING_1,$e.HEADING_2,$e.HEADING_3,$e.HEADING_4,$e.HEADING_5,$e.HEADING_6,$e.OL_LIST,$e.UL_LIST,$e.HR,$e.QUOTE,$e.EMBEDDED_ENTRY,$e.EMBEDDED_ASSET],nt=[$e.HR,$e.EMBEDDED_ENTRY,$e.EMBEDDED_ASSET],rt=((Ze={})[$e.OL_LIST]=[$e.LIST_ITEM],Ze[$e.UL_LIST]=[$e.LIST_ITEM],Ze[$e.LIST_ITEM]=tt.slice(),Ze[$e.QUOTE]=[$e.PARAGRAPH],Ze);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values($e).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=$e,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(c=l)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var s,f,d=l.BLOCKS,p=(l.CONTAINERS,l.INLINES),m=l.MARKS,h=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function E(e,t){return e.map((function(e,n){return r=y(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function y(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(h.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=E(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var g=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[d.HR]=function(){return i.createElement("hr",null)},s[p.ASSET_HYPERLINK]=function(e){return b(p.ASSET_HYPERLINK,e)},s[p.ENTRY_HYPERLINK]=function(e){return b(p.ENTRY_HYPERLINK,e)},s[p.EMBEDDED_ENTRY]=function(e){return b(p.EMBEDDED_ENTRY,e)},s[p.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),v=((f={})[m.BOLD]=function(e){return i.createElement("b",null,e)},f[m.ITALIC]=function(e){return i.createElement("i",null,e)},f[m.UNDERLINE]=function(e){return i.createElement("u",null,e)},f[m.CODE]=function(e){return i.createElement("code",null,e)},f);function b(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:u({},g,t.renderNode),renderMark:u({},v,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},VUT9:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var o=r(n("j8BX")),i=r(n("uDP2")),u=r(n("XEEL")),a=r(n("q1tI")),c=r(n("17x9")),l=n("4M6O"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="muhammedmoussa",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,u.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return a.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(a.default.Component);t.default=s,s.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string,language:c.default.string,remoteAuthS3:c.default.string,apiKey:c.default.string})}},c851:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("R8uD"),u=n("ORnI"),a=n("Bl7J"),c=n("hIod"),l="4059376694";t.default=function(e){var t={renderNode:{"embedded-asset-block":function(e){var t,n,r,i,u,a,c=(null==e||null===(t=e.data)||void 0===t||null===(n=t.target)||void 0===n||null===(r=n.fields)||void 0===r?void 0:r.title["en-US"])||"",l=(null==e||null===(i=e.data)||void 0===i||null===(u=i.target)||void 0===u||null===(a=u.fields)||void 0===a?void 0:a.file["en-US"].url)||"";return o.a.createElement("img",{alt:c,src:l})}}},n={identifier:e.data.contentfulBlogPost.slug,title:e.data.contentfulBlogPost.title};return o.a.createElement(a.a,null,o.a.createElement(c.a,{title:e.data.contentfulBlogPost.title}),o.a.createElement(u.CommentCount,{config:n,placeholder:" "}),o.a.createElement("h1",null,e.data.contentfulBlogPost.title),o.a.createElement("p",null,e.data.contentfulBlogPost.publishedDate)," ",o.a.createElement("br",null),o.a.createElement("br",null),Object(i.documentToReactComponents)(e.data.contentfulBlogPost.body.json,t),o.a.createElement(u.Disqus,{config:n}))}},dQcQ:function(e,t,n){var r=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qASQ:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var o=r(n("j8BX")),i=r(n("uDP2")),u=r(n("XEEL")),a=r(n("q1tI")),c=r(n("17x9")),l=n("4M6O"),s=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="muhammedmoussa",n}(0,u.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return a.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(a.default.Component);t.default=f,f.defaultProps={placeholder:"..."},f.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string}},qHws:function(e,t,n){var r=n("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}},vAJ3:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var o=r(n("XEEL")),i=r(n("q1tI")),u=r(n("17x9")),a=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=a,a.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},a.propTypes={commentId:u.default.string.isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}}}]);
//# sourceMappingURL=component---src-templates-blog-js-58f587e8c5de310e16f8.js.map