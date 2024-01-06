"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[80369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65664:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"Consul",sidebar_position:5,title:"Consul Example"},l="Consul Registration get start",i={unversionedId:"consul",id:"version-1.0.0/consul",isDocsHomePage:!1,title:"Consul Example",description:"Consul",source:"@site/shenyuClientDotnet_versioned_docs/version-1.0.0/consul.md",sourceDirName:".",slug:"/consul",permalink:"/shenyuClientDotnet/consul",version:"1.0.0",lastUpdatedBy:"dragon-zhang",lastUpdatedAt:1704540184,formattedLastUpdatedAt:"1/6/2024",sidebarPosition:5,frontMatter:{description:"Consul",sidebar_position:5,title:"Consul Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Etcd Example",permalink:"/shenyuClientDotnet/etcd"}},p=[{value:"ASP.NET Core project",id:"aspnet-core-project",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consul-registration-get-start"},"Consul Registration get start"),(0,o.kt)("h2",{id:"aspnet-core-project"},"ASP.NET Core project"),(0,o.kt)("p",null,"For ASP.NET Core project, we can refer to the example code at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-dotnet/tree/main/examples/AspNetCoreExample"},"example code"),". What you need to do is quite\nsimple and straightforward."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"add the Shenyu ASP.NET Core dependency into project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package Apache.ShenYu.AspNetCore\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"Startup.ConfigureServices")," method, add the ",(0,o.kt)("inlineCode",{parentName:"li"},"ShenyuRegister")," service.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},"public void ConfigureServices(IServiceCollection services)\n{\n    ...\n    services.AddShenyuRegister(this.Configuration);\n    ...\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"set your ",(0,o.kt)("inlineCode",{parentName:"li"},"Shenyu")," configurations in ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Shenyu": {\n    "Register": {\n      "RegisterType": "consul",\n      "ServerList": "localhost:8500",\n      "Props": {\n        "Id": "shenyuAdmin",\n        "Name": "shenyuAdmin",\n        "Tags": "test1,test2",\n        "Port": 8500,\n        "EnableTagOverride": false,\n        "Token": ""\n      }\n    },\n    "Client": {\n      "AppName": "dotnet-example",\n      "ContextPath": "/dotnet",\n      "IsFull": false,\n      "ClientType": "http"\n    }\n  }\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"enable calling via ip.")),(0,o.kt)("p",null,"When running on your local machine, ASP.NET Core service can only be called from ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),". To enable calling by IP,\nyou can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:{port};http://localhost:{port}")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://*:{port};http://*:{port}")),(0,o.kt)("p",null,"Setting by environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"ASPNETCORE_URLS"),". e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'ASPNETCORE_URLS "http://*:5000"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export ASPNETCORE_URLS=http://+:5000\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"start the application.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# build project\ndotnet build --configuration Release\n# start project\ncd examples/AspNetCoreExample/bin/Release/netcoreapp3.1\ndotnet AspNetCoreExample.dll\n")),(0,o.kt)("p",null,"That's all! After finished above steps, you can start your project in IDE or below commands and you can\nvisit ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," portal to see the APIs have been registered in Shenyu."))}u.isMDXComponent=!0}}]);