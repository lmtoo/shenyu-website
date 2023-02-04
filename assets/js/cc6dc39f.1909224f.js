"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71321],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=d(r),g=a,k=m["".concat(o,".").concat(g)]||m[g]||s[g]||i;return r?n.createElement(k,l(l({ref:e},c),{},{components:r})):n.createElement(k,l({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:a,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},92252:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"Client Property Config",keywords:["Config"],description:"Client Property Config"},l=void 0,p={unversionedId:"user-guide/property-config/client-property-config",id:"version-2.5.1/user-guide/property-config/client-property-config",isDocsHomePage:!1,title:"Client Property Config",description:"Client Property Config",source:"@site/versioned_docs/version-2.5.1/user-guide/property-config/client-property-config.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/client-property-config",permalink:"/docs/user-guide/property-config/client-property-config",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/user-guide/property-config/client-property-config.md",version:"2.5.1",frontMatter:{title:"Client Property Config",keywords:["Config"],description:"Client Property Config"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Admin Property Config",permalink:"/docs/user-guide/property-config/admin-property-config"},next:{title:"Gateway Property Config",permalink:"/docs/user-guide/property-config/gateway-property-config"}},o=[{value:"Property Config",id:"property-config",children:[]},{value:"Property Detail",id:"property-detail",children:[]}],d={toc:o},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This paper mainly explains how to configure the properties of Apache ShenYu when the client accesses the gateway."),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu")," property in your microservice, for example, in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")," :"),(0,a.kt)("img",{src:"/img/shenyu/config/shenyu_client_application_config.png",width:"80%",height:"70%"}),(0,a.kt)("h3",{id:"property-config"},"Property Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,a.kt)("h3",{id:"property-detail"},"Property Detail"),(0,a.kt)("h5",{id:"shenyuclient-config"},"shenyu.client config"),(0,a.kt)("p",null,"This section describes configurations related to client access. For details about client access principles, see: ",(0,a.kt)("a",{parentName:"p",href:"../../design/register-center-design"},"Application Client Access")," , for client access configuration, see: ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"registerType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"http"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Which mode to use for registry. Currently, http, zookeeper, etcd, consul and nacos are supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serverLists"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure the address of the registry. In clustering, multiple addresses are separated by commas (,).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of the property varies according to the registerType.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props")," config")),(0,a.kt)("p",null,"When microservices are built by different protocols, the property configuration is slightly different. The general attributes are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"contextPath"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The route prefix of the microservice in the gateway.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"appName"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"microservice name. ",(0,a.kt)("inlineCode",{parentName:"td"},"springcloud")," service don't set, please set ",(0,a.kt)("inlineCode",{parentName:"td"},"spring.application.name"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"host"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"microservice address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"port"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"microservice port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isFull"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to proxy the all service, currently just applies to ",(0,a.kt)("inlineCode",{parentName:"td"},"springmvc"),"/ ",(0,a.kt)("inlineCode",{parentName:"td"},"springcloud"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ipAndPort"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Service IP and port address, currently just applies to ",(0,a.kt)("inlineCode",{parentName:"td"},"gRPC")," Proxy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"shutdownWaitTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"shutdown wait time(millisecond)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"delayOtherHooksExecTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hook")," execute time(millisecond)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"applicationShutdownHooksClassName"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"java.lang.ApplicationShutdownHooks")),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hook")," execute class name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"applicationShutdownHooksFieldName"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"hooks")),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hook")," execute field name")))),(0,a.kt)("p",null,"The value of the property varies according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerType"),"."),(0,a.kt)("p",null,"When the registerType is ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),", there has no other properties."),(0,a.kt)("p",null,"When the registerType is ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper"),", the supported properties are as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"30000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"session time out(millisecond)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connection time out(millisecond)")))),(0,a.kt)("p",null,"When the registerType is ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", the supported properties are as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"etcdTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"30000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"etcd time out(millisecond)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"etcdTTL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"client lease time to live(second)")))),(0,a.kt)("p",null,"When the registerType is ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),", the supported properties are as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nacosNameSpace"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"username"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},'""'),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"password"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},'""'),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},'""'),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},'""'),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,a.kt)("p",null,"When the registerType is ",(0,a.kt)("inlineCode",{parentName:"p"},"consul"),", no other property configuration is provided. please set ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.cloud.consul")," for the configuration."))}m.isMDXComponent=!0}}]);