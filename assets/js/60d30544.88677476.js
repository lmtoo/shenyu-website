"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39049:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"2.4.2",sidebar_position:5,keywords:["release-notes"],description:"release-notes"},o="2.4.2",l={unversionedId:"2.4.2-release",id:"2.4.2-release",isDocsHomePage:!1,title:"2.4.2",description:"release-notes",source:"@site/event/2.4.2-release.md",sourceDirName:".",slug:"/2.4.2-release",permalink:"/event/2.4.2-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.4.2-release.md",version:"current",lastUpdatedBy:"dragon-zhang",lastUpdatedAt:1704540184,formattedLastUpdatedAt:"1/6/2024",sidebarPosition:5,frontMatter:{title:"2.4.2",sidebar_position:5,keywords:["release-notes"],description:"release-notes"}},p=[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"242"},"2.4.2"),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add Mqtt plugin"),(0,i.kt)("li",{parentName:"ol"},"Add Shenyu-Agent module support observability"),(0,i.kt)("li",{parentName:"ol"},"Add opentelemetry plugin on Shenyu-Agent module"),(0,i.kt)("li",{parentName:"ol"},"Add jaeger plugin on Shenyu-Agent module"),(0,i.kt)("li",{parentName:"ol"},"Add zipkin plugin on Shenyu-Agent module"),(0,i.kt)("li",{parentName:"ol"},"Support Shenyu instance register by zookeeper"),(0,i.kt)("li",{parentName:"ol"},"Support Shenyu response data custom format"),(0,i.kt)("li",{parentName:"ol"},"Support https for upstream check"),(0,i.kt)("li",{parentName:"ol"},"Add RpcContextPlugin to transmit header to rpc context"),(0,i.kt)("li",{parentName:"ol"},"Support cluster model for dubbo plugin"),(0,i.kt)("li",{parentName:"ol"},"Support Shenyu instance register by ETCD")),(0,i.kt)("h3",{id:"api-changes"},"API Changes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add configuration properties for HTTP synchronization data"),(0,i.kt)("li",{parentName:"ol"},"Remove'/shenyu-client/",(0,i.kt)("strong",{parentName:"li"},"','/configs/"),"','/plugin'interface from the whitelist interface of Shenyu admin")),(0,i.kt)("h3",{id:"enhancement"},"Enhancement"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Optimize global error handler for flexible processing"),(0,i.kt)("li",{parentName:"ol"},"Optimized the database access in the loop"),(0,i.kt)("li",{parentName:"ol"},"Optimize result media type and reset response header"),(0,i.kt)("li",{parentName:"ol"},"Enhancement crossfilter filter the same headers"),(0,i.kt)("li",{parentName:"ol"},"Optimize shenyu context module data"),(0,i.kt)("li",{parentName:"ol"},"Optimize dubbo plugin"),(0,i.kt)("li",{parentName:"ol"},"Optimize admin db operation"),(0,i.kt)("li",{parentName:"ol"},"Refactor Response and Cryptor plugin"),(0,i.kt)("li",{parentName:"ol"},"Optimize Admin Resource Permission loader"),(0,i.kt)("li",{parentName:"ol"},"Add authentication on shenyu admin when register by http"),(0,i.kt)("li",{parentName:"ol"},"Optimize netty config."),(0,i.kt)("li",{parentName:"ol"},"Optimize SQL files for resource,permission"),(0,i.kt)("li",{parentName:"ol"},"Add ExcludeOperatorJudge for selector and rule"),(0,i.kt)("li",{parentName:"ol"},"Add docker-compose on Shenyu-dist"),(0,i.kt)("li",{parentName:"ol"},"Enhance the ability of jwt plugin")),(0,i.kt)("h3",{id:"refactor"},"Refactor"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove SpEL and Groovy plugins"),(0,i.kt)("li",{parentName:"ol"},"Optimization prompt of ExtensionLoader"),(0,i.kt)("li",{parentName:"ol"},"Add http client strategy property"),(0,i.kt)("li",{parentName:"ol"},"Refactor shenyu client")),(0,i.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fix sentinel Plugin-exception number is not effective"),(0,i.kt)("li",{parentName:"ol"},"Fix HttpClientProperties.javaresponseTimeout can not config in yaml"),(0,i.kt)("li",{parentName:"ol"},"Fix Connection reset by peer Exception on webclient"),(0,i.kt)("li",{parentName:"ol"},"Fix register metadata and uri order"),(0,i.kt)("li",{parentName:"ol"},"Fix Admin when press the Add button"),(0,i.kt)("li",{parentName:"ol"},"Fix Spi config"),(0,i.kt)("li",{parentName:"ol"},"Support Dubbo Plugin Single Parameter Primitive Type"),(0,i.kt)("li",{parentName:"ol"},"Fix using etcd cluster to sync data init failed"),(0,i.kt)("li",{parentName:"ol"},"Fix Shiro get white list is null bug"),(0,i.kt)("li",{parentName:"ol"},"Fix zookeeper sync error handling event bug"),(0,i.kt)("li",{parentName:"ol"},"Fix modify-response-plugin and cryptor-response-plugin are used in combination, and no information is returned"),(0,i.kt)("li",{parentName:"ol"},"Fix the bug of missing some field in cryptor rule handler using h2")))}c.isMDXComponent=!0}}]);