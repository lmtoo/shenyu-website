"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[26052],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=c(t),y=o,h=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return t?r.createElement(h,a(a({ref:e},l),{},{components:t})):r.createElement(h,a({ref:e},l))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s[p]="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},70028:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"2.6.0-release",id:"2.6.0-release",isDocsHomePage:!1,title:"2.6.0-release",description:"2.6.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.6.0-release.md",sourceDirName:".",slug:"/2.6.0-release",permalink:"/zh/event/2.6.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.6.0-release.md",version:"current",lastUpdatedBy:"MeepoGod",lastUpdatedAt:1692263538,formattedLastUpdatedAt:"2023/8/17",frontMatter:{}},u=[{value:"2.6.0",id:"260",children:[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"API \u53d8\u66f4",id:"api-\u53d8\u66f4",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}]}],c={toc:u},l="wrapper";function p(n){let{components:e,...t}=n;return(0,o.kt)(l,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"260"},"2.6.0"),(0,o.kt)("h3",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,o.kt)("p",null,"1.\u652f\u6301 shenyu-admin\u66b4\u9732",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u6307\u6807\n2.\u6dfb\u52a0shenyu\u4e00\u7ea7\u7f13\u5b58\u548c\u4e8c\u7ea7\u7f13\u5b58\n3.\u5c06\u6269\u5c55\u63d2\u4ef6jar\u4fdd\u5b58\u5230shenyu admin\n4.\u652f\u6301\u7f51\u5173\u4e2d\u7684 Shenyu \u4e0a\u4f20\u63d2\u4ef6\u70ed\u52a0\u8f7d\n5.\u652f\u6301apollo\u540c\u6b65\u6570\u636e\u548c\u6ce8\u518c\u6570\u636e\n6.\u521d\u59cb\u5316\u5ba2\u6237\u4fe1\u606f\u6536\u96c6\n7.Shenyu\u5ba2\u6237\u7aef\u652f\u6301spring-boot-client\u81ea\u52a8\u914d\u7f6e\n8.\u6dfb\u52a0TCP\u4ee3\u7406\u63d2\u4ef6\n9.\u8d85\u7ea7\u7ba1\u7406\u5458\u5f3a\u5236\u66f4\u6539\u5bc6\u7801\n10.Spring-mvc(boot)\u5ba2\u6237\u7aef\u652f\u6301\u6536\u96c6api-meta\n11.\u6dfb\u52a0zookeeper\u53d1\u73b0\u540c\u6b65\n12.\u521d\u59cb\u5316\u795e\u5b87\u5165\u53e3\u63a7\u5236\u5668\n13.\u6dfb\u52a0\u53d1\u73b0\u4e0a\u6e38\u548c\u4ee3\u7406\u9009\u62e9\u5668\u4ee3\u7406\n14.\u66b4\u9732shenyu\u6267\u884c\u5668\u7aef\u70b9\n15.\u6dfb\u52a0naocs\u53d1\u73b0\u540c\u6b65\n16.\u6dfb\u52a0apollo\u53d1\u73b0\u540c\u6b65\n17.\u6dfb\u52a0HttpLongPolling\u53d1\u73b0\u540c\u6b65\n18.\u6dfb\u52a0consul\u53d1\u73b0\u540c\u6b65\n19.\u6dfb\u52a0\u534e\u4e3a\u4e91lts\u65e5\u5fd7\u63d2\u4ef6\n20.Shenyu admin\u652f\u6301openGauss\u6570\u636e\u5e93\n21.\u652f\u6301polaris\u914d\u7f6e\u540c\u6b65\u548c\u6ce8\u518c\u4e2d\u5fc3"),(0,o.kt)("h3",{id:"api-\u53d8\u66f4"},"API \u53d8\u66f4"),(0,o.kt)("h3",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,o.kt)("p",null,"1.\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Shenyu api doc"),"\u5ba2\u6237\u7aef\u6dfb\u52a0\u6807\u7b7e\n2.\u6dfb\u52a0brpc\u96c6\u6210\u6d4b\u8bd5\n3.Brpc\u652f\u6301\u5171\u4eab\u7ebf\u7a0b\u6c60\n4.\u5c06mapType\u6dfb\u52a0\u5230cryptor\u8bf7\u6c42\u548c\u54cd\u5e94\u63d2\u4ef6\u4e2d\n5.Crypto\u63d2\u4ef6\u652f\u6301\u591a\u5b57\u6bb5\u540d\u79f0\n6.\u6dfb\u52a0p2c\u8d1f\u8f7d\u5747\u8861\u5668\n7.\u5c06\u63d2\u4ef6jar\u4fee\u6539\u4e3a\u63d2\u4ef6\u6570\u636e\u4e2d\u7684Base64\u5b57\u7b26\u4e32\n8.\u6dfb\u52a0\u6700\u77ed\u54cd\u5e94\u8d1f\u8f7d\u5747\u8861\u5668\n9.\u6dfb\u52a0\u54c8\u5e0c\u8d1f\u8f7d\u5747\u8861\u5668\u6d4b\u8bd5\u7528\u4f8b\n10.\u6dfb\u52a0DetailService\u6d4b\u8bd5\u7528\u4f8b\n11.Shenyu\u5bb9\u5fcd\u591a\u4e2a\u8def\u5f84\u659c\u7ebf\n12.\u6dfb\u52a0shenyu-common enums\u6d4b\u8bd5\u7528\u4f8b\n13.\u6dfb\u52a0shenyu-common dto\u6d4b\u8bd5\u7528\u4f8b\n14.\u6dfb\u52a0sheyu-admin\u6a21\u578b\u6d4b\u8bd5\u7528\u4f8b\n15.\u6dfb\u52a0\u795e\u9c7c\u5339\u914d\u7f13\u5b58\u6d4b\u8bd5\u7528\u4f8b\n16.\u652f\u6301k8s\u63a2\u9488\n17.\u6dfb\u52a0 Shenyu-admin \u670d\u52a1\u6d4b\u8bd5\u7528\u4f8b\n18.\u5728api doc\u4e2d\u6dfb\u52a0\u6587\u6863json\u6570\u636e\n19.mock\u63d2\u4ef6\u4e2d\u7684SPEL\u9ed8\u8ba4\u662f\u5b89\u5168\u7684\n20.\u4e3aShenyuClientApiDocExecutorSubscriber\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b\n21.\u6dfb\u52a0shenyu-client-sofa\u6a21\u5757\u7684\u6d4b\u8bd5\u7528\u4f8b\n22.\u4e3ashenyu api doc\u6dfb\u52a0\u6807\u7b7e\u5173\u7cfb\n23.\u652f\u6301windows\u4e0b\u7684shenyu admin\u3001bootstrap\u670d\u52a1\u505c\u6b62\u811a\u672cbat\n24.\u4e3aShenyuSdkClientFactory\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b\n25.\u6dfb\u52a0e2e-springcloud\u7684websocket\u540c\u6b65\u65b9\u6cd5\n26.\u652f\u6301divide\u63d2\u4ef6\u79bb\u7ebf\u6fc0\u6d3b\n27.\u6dfb\u52a0springcloud\u670d\u52a1\u5b9e\u4f8b\u7f13\u5b58\n28.\u4fee\u6539\u5bc6\u7801\u652f\u6301i18n\n29.\u4e3ashenyu discovery\u6dfb\u52a0websocket\u540c\u6b65\n30.\u66f4\u65b0springboot\u52302.7.13\n31.\u6dfb\u52a0\u5176\u4ed6syn\u65b9\u6cd5e2e-spring-cloud\n32.\u6dfb\u52a0api doc\u5ba2\u6237\u7aef\u751f\u6210\u7684\u6ce8\u89e3\u5c5e\u6027\n33.\u66f4\u65b0zookeeper\u5ba2\u6237\u7aef\u6ce8\u518c\u5b58\u50a8\u5e93\u79bb\u7ebf\u6fc0\u6d3b\n34.\u66f4\u65b0apollo\u5ba2\u6237\u7aef\u6ce8\u518c\u5b58\u50a8\u5e93\u79bb\u7ebf\u6fc0\u6d3b\n35.swagger\u7c7b\u578bAPI\u6587\u6863\u5b58\u50a8\u8c03\u6574\uff0c\u7531\u672c\u5730\u7f13\u5b58\u6539\u4e3a\u6570\u636e\u5e93\n36.\u652f\u6301nacos\u5ba2\u6237\u7aef\u79bb\u7ebf\n37.\u6dfb\u52a0e2e alibaba dubbo\u6d4b\u8bd5\u7528\u4f8b\n38.\u6dfb\u52a0e2e apache dubbo\u6d4b\u8bd5\u7528\u4f8b\n39.\u6dfb\u52a0shenyu-spring-sdk\u6d4b\u8bd5\u7528\u4f8b\n40.\u6dfb\u52a0e2e sofa\u6d4b\u8bd5\u7528\u4f8b\n41.\u6dfb\u52a0apollo\u914d\u7f6e\u540c\u6b65\u6d4b\u8bd5\u7528\u4f8b\n42.\u6dfb\u52a0\u6570\u636e\u5e93\u8fde\u63a5\u6c60\n43.\u4e3ashenyu\u9879\u76ee\u6dfb\u52a0idea\u56fe\u6807"),(0,o.kt)("h3",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,o.kt)("p",null,"1.\u4f18\u5316sheyu-admin\n2.\u91cd\u6784\u6700\u5c0f\u6d3b\u8dc3\u5e73\u8861\u7b97\u6cd5\n3\u3001sign-plugin\u4f18\u5316\u7248\u672c\u4e00\n4.\u4f18\u5316\u4e0a\u6e38\u68c0\u67e5\u670d\u52a1\n5.\u89e3\u51b3shenyu\u9879\u76ee\u5168\u7403\u7248\u672c\n6.\u91cd\u6784ShenyuConsulConfigWatch\u4ee3\u7801\n7.\u91cd\u6784sheyu trie\u4ee3\u7801\n8.\u4fdd\u5b58\u65f6\u68c0\u67e5\u89c4\u5219\u7684uri\u6761\u4ef6\n9.\u4f18\u5316 shenyu-client-websocket \u7684 shenyu-client \u4ee3\u7801\n10.\u6dfb\u52a0\u7ba1\u7406\u5458\u4f9d\u8d56Micrometer\u7684\u8bb8\u53ef\u8bc1\n11.\u66f4\u65b0maven-assemble-plugin\u52303.5.0\n12.\u4f18\u5316\u5168\u5c40\u63d2\u4ef6\u6392\u5e8f\n13.\u5728 shenyu-admin \u4e2d\u4f7f\u7528 BearerToken \u66ff\u6362 StatelessToken\n14.\u91cd\u6784sheyu-logging\u6a21\u5757\n15.\u6dfb\u52a0api\u6587\u6863\u9a8c\u8bc1\n16.\u4f18\u5316Trie\u4ee3\u7801\uff0c\u5b8c\u5584\u901a\u914d\u7b26",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"\u652f\u6301\n17.\u91cd\u6784\u81ea\u5b9a\u4e49\u63d2\u4ef6\u652f\u6301\u70ed\u52a0\u8f7d\n18.\u91cd\u6784ShenyuWebHandler putPlugin\u65b9\u6cd5\n19.\u91cd\u6784shenyu webfilter\n20.Reactor oauth2 \u63d2\u4ef6\n21.\u91cd\u6784 Shenyu \u9009\u62e9\u5668\u6570\u636e\u7eed\u5b57\u6bb5\n22.\u91cd\u6784 Shenyu \u9009\u62e9\u5668\u548c\u89c4\u5219\u7f13\u5b58\n23.\u5220\u9664\u4e86shenyu\u5ba2\u6237\u7aef\u4e2d\u672a\u4f7f\u7528\u7684\u6cdb\u578b\n24.\u91cd\u6784 shenyu-plugin-sentinel \u63d2\u4ef6\n25.\u91cd\u6784\u7f13\u5b58\u5e76\u6dfb\u52a0\u7aef\u70b9\u4ee5\u516c\u5f00\u7f13\u5b58\n26.\u91cd\u6784checkUserPassword\uff0c\u542f\u52a8\u65f6\u4e0d\u6253\u5370\u5df2\u77e5\u9519\u8bef\u65e5\u5fd7\n27.\u6dfb\u52a0\u4e00\u4e9b\u65e5\u5fd7\u53c2\u6570\n28.\u91cd\u6784 Shenyu \u5168\u5c40\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\n29.\u6dfb\u52a0shenyu\u4e0a\u4f20\u63d2\u4ef6\u96c6\u6210\u6d4b\u8bd5\u7528\u4f8b\n30.\u4f18\u5316\u4e00\u4e9b\u8bed\u6cd5\u7cd6\n31.\u66f4\u6539discovery_upstream discovery_handler_id\n32.\u91cd\u6784 Shenyu \u5168\u5c40\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\n33.\u91cd\u6784sheyu\u63d2\u4ef6\u6a21\u5757\n34.\u91cd\u6784AlibabaDubboConfigCache\n35.\u5220\u9664hutool\u7684\u4f9d\u8d56\n36.\u91cd\u6784ShenyuClientShutdownHook\n37.\u63d0\u53d6\u5668\u6dfb\u52a0BaseAnnotationApiBeansExtractor\n38.\u652f\u6301\u591a\u5ba2\u6237\u7aef\u6ce8\u518c\n39.\u91cd\u6784 Shenyu-e2e \u652f\u6301 Shenyu \u68c0\u67e5\u6837\u5f0f\n40.\u91cd\u6784\u795e\u5b87\u5ba2\u6237\u7aef\u6ce8\u518c\u5e93\n41.\u4e3a shenyu div \u63d2\u4ef6\u6dfb\u52a0\u57df\u6d4b\u8bd5\n42.\u66f4\u65b0\u540c\u4e00\u670d\u52a1\u7684\u5176\u4ed6rpc_ext\n43.\u4f18\u5316consul connect\u64cd\u4f5c\n44.\u91cd\u6784sheyu e2e springcloud yaml\u66f4\u6539\n45.\u6dfb\u52a0k8s ingress\u63a7\u5236\u5668\u96c6\u6210\u6d4b\u8bd5\n46.\u62c6\u5206apidoc\u660e\u7ec6\u63a5\u53e3\u7684document\u5b57\u6bb5\uff0c\u589e\u52a0requestHeaders\u3001responseParameters\u7b49\u5b57\u6bb5\n47.\u6dfb\u52a0swagger\u793a\u4f8b\u9879\u76ee\uff0c\u6d4b\u8bd5API\u6587\u6863\u7684\u76f8\u5173\u529f\u80fd\n48.\u4f18\u5316json\u683c\u5f0f\u8868\u5355\u5b57\u6bb5\u7684\u663e\u793a\n49.\u91cd\u6784shenyu\u65e5\u5fd7\u53ef\u89c2\u6d4b\u6027\n50.\u6dfb\u52a0bootstrap\u542f\u52a8\u65e5\u5fd7\n51.\u91cd\u6784swagger\u7684api\u6587\u6863\n52.\u5347\u7ea7grpc\u7248\u672c\u81f31.53.0\n53.\u91cd\u6784api\u5143\u6570\u636e\u5904\u7406\u51fd\u6570\n54.\u4f18\u5316\u4ee3\u7801\u548cpom"),(0,o.kt)("h3",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,o.kt)("p",null,"1.h2\u8def\u5f84\u6821\u9a8c\n2.\u4fee\u590d\u52a0\u5bc6\u54cd\u5e94\u63d2\u4ef6\n3.\u4fee\u590djdk8 MapcomputeIfAbsent\u6027\u80fdbug\n4.\u4fee\u590dzombieRemovalTimes\u4ee3\u7801\n5.\u4fee\u590d\u5347\u7ea7\u540e\u7684sql\u6587\u4ef6\n6.\u5220\u9664detectorOfflineLinks\u6807\u7b7e\n7.\u5ffd\u7565\u6241\u5e73\u5316\u7684pom\n8.\u4fee\u590dLOG\u8c03\u7528\u65b9\u6cd5\n9.\u4f7f\u7528nacos\u4fee\u590dsheyu-example-springcloud\u7684NPE\n10.\u4fee\u590d Shenyu-admin\u540d\u79f0\u7684\u7c7b\u578b\u4e89\u8bba\n11.\u4fee\u590d\u8d1f\u8f7d\u5e73\u8861spi\u8d44\u6e90\n12.\u4fee\u590dsql\u811a\u672c\u9519\u8bef\n13.\u4fee\u590djackson\u768424\u5c0f\u65f6\u683c\u5f0f\u548c\u65f6\u533a\n14.\u4fee\u590dJwtUtils\u9519\u8bef\n15.\u4fee\u590ddubbo\u8c03\u7528\u8005\u7f13\u5b58bug\n16.\u4fee\u590d\u4e22\u5931HOST\u5220\u9664\u64cd\u4f5c\n17.\u4fee\u590dSpringMvcClientEventListener\u6d4b\u8bd5\u7528\u4f8b\n18.\u4fee\u590dzombie\u7684\u901a\u884c\u8bc1\u66f4\u65b0PENDING_SYNC\n19.\u4fee\u590d\u5185\u5b58\u6cc4\u6f0f\n20.\u4fee\u590d\u56e0\u89c4\u5219\u8fc7\u591a\u5bfc\u81f4\u89c4\u5219\u67e5\u8be2\u5931\u8d25\u7684\u95ee\u9898\n21.\u4fee\u590d\u793a\u4f8bhttp\u4e2d\u7f3a\u5c11\u6267\u884c\u5668\u4f9d\u8d56\u9879\u548c\u7aef\u53e3\u9519\u8bef\n22.\u4fee\u590dUpstreamCheckUtils http\u548chttps\n23.\u4fee\u590dFileFilter\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\n24.\u4fee\u590dzookeeper\u540c\u6b65\u9519\u8bef\n25.\u4fee\u590dMemorySafeWindowTinyLFUMap\u5185\u5b58\u6cc4\u6f0f\u9519\u8bef\n26.\u4fee\u590dApiDoc\u8def\u5f84\u7f3a\u5c11\u5206\u9694\u7b26\u7684\u95ee\u9898\n27.\u4fee\u590d shenyu trie\u7684NPE\n28.\u4fee\u590d\u63d2\u4ef6\u8df3\u8fc7\u9519\u8bef\n29.\u4fee\u590doracle sql\u9519\u8bef\n30.\u4fee\u590dshenyu admin\u4e2d\u65e0\u6cd5\u52a0\u8f7dshenyu\u56fe\u6807\u7684\u95ee\u9898\n31.\u4fee\u590dhystrix\u56de\u9000bug\n32.\u4fee\u590ddivide\u548cspringcloud\u7684\u9884\u70ed\u65f6\u95f4\n33.\u4fee\u590dspringcloud\u670d\u52a1\u9009\u62e9\u5668\n34.\u4fee\u590d shenyu-spring-boot-starter-plugin-mock\u6dfb\u52a0spring.factories\n35.\u4fee\u590d shenyu-client-mvc\u548cshenyu-client-springcloud\u4e22\u5931ip\n36.\u4fee\u590d\u7f13\u5b58\u4e2d\u89c4\u5219\u6570\u636e\u548c\u9009\u62e9\u5668\u6570\u636e\u4e3a\u7a7a\u7684\u95ee\u9898\n37.\u4fee\u590dapi\u6587\u6863\u6a21\u5757\u66f4\u65b0api\u8be6\u60c5\u9519\u8bef\n38.\u4fee\u590d\u4eceKafkaLogCollectClient\u4e2d\u7684\u914d\u7f6e\u83b7\u53d6\u4e3b\u9898\n39.\u4fee\u590d\u65e5\u5fd7\u63a7\u5236\u53f0\u7ebf\u7a0b\u5b89\u5168\n40.\u4fee\u590dbrpc\u96c6\u6210\u6d4b\u8bd5\u54cd\u5e94\u5927\u5c0f\n41.\u4fee\u590dplugn-dubbo-common\u7684\u9009\u62e9\u5668\u66f4\u65b0\u7070\u8272\u5220\u9664\u7f13\u5b58\n42.\u4fee\u590dshenyu\u7ba1\u7406\u83dc\u5355\u540d\u79f0bug\n43.\u4fee\u590dshenyu admin\u65e0\u6cd5\u914d\u7f6econsul\u7aef\u53e3\u7684\u95ee\u9898\n44.\u4fee\u590dshenyu\u5ba2\u6237\u7aef\u5143\u6570\u636e\u548curi\u65e0\u6cd5\u4e0eapollo\u540c\u6b65\u5230admin\u7684\u95ee\u9898\n45.\u4fee\u590dPathVariable\u6ce8\u89e3url\u65e0\u6cd5\u5339\u914d\u7684\u95ee\u9898\n46.\u4fee\u590dPathPattern\u6a21\u5f0f\u4e0b\u65e0\u6cd5\u66f4\u65b0uri\u7684\u95ee\u9898\n47.\u4fee\u590d\u5ba2\u6237\u7aef\u5173\u95ed\u65b9\u6cd5\u8c03\u7528\u4e24\u6b21\n48.\u4fee\u590d shenyu \u9519\u8bef\u5904\u7406 consul \u914d\u7f6e\n49.\u4eceRequest\u3001modifyResponse\u63d2\u4ef6\u4e2d\u5220\u9664\u672a\u4f7f\u7528\u7684\u914d\u7f6e\n50.\u4fee\u590dhttp\u6ce8\u518c\u5143\u6570\u636e\n51.\u4fee\u590dwebsocket\u4e22\u5931\u7528\u6237\u81ea\u5b9a\u4e49\u5173\u95ed\u72b6\u6001\u7684\u95ee\u9898\n52.\u4fee\u590dconsul\u5bc4\u5b58\u5668\u5728\u7279\u6b8a\u7b26\u53f7\u65f6\u4e22\u5931\u5143\u8def\u5f84\u7684\u5c5e\u6027\n53.\u4fee\u590detcd\u540c\u6b65\u9519\u8bef\n54.\u4fee\u590d\u7ba1\u7406\u540c\u6b65\u9519\u8bef\n55.\u4fee\u590d Shenyu motan\u63d2\u4ef6\u6267\u884c\u9519\u8bef"))}p.isMDXComponent=!0}}]);