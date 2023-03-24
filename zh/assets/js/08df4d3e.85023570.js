"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[74632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2513:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Zookeeper\u793a\u4f8b"},i=void 0,l={unversionedId:"zookeeper",id:"zookeeper",isDocsHomePage:!1,title:"Zookeeper\u793a\u4f8b",description:"\u4ee5Zookeeper\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientGolang/current/zookeeper.md",sourceDirName:".",slug:"/zookeeper",permalink:"/zh/shenyuClientGolang/next/zookeeper",version:"current",lastUpdatedBy:"moremind",lastUpdatedAt:1679639884,formattedLastUpdatedAt:"2023/3/24",frontMatter:{title:"Zookeeper\u793a\u4f8b"},sidebar:"community",previous:{title:"Nacos\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/next/nacos"}},s=[{value:"\u4ee5Zookeeper\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",id:"\u4ee5zookeeper\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173",children:[]},{value:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ee5zookeeper\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173"},"\u4ee5Zookeeper\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.\u9996\u5148\u786e\u4fdd\u4f60\u7684Zookeeper\u73af\u5883\u662f\u6b63\u786e\uff0c\u7136\u540e\u8bbe\u7f6e\u8fd9\u4e9bZookeeper\u5fc5\u8981\u7684\u53c2\u6570 .")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //\u5f00\u59cb\u521b\u5efaShenYuZkClient \n    zcp := &zk_client.ZkClientParam{\n    ZkServers: []string{"127.0.0.1:2181"}, //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    ZkRoot:    "/api",                     //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n    \n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.ZOOKEEPER_CLIENT)\n    client, createResult, err := sdkClient.NewClient(zcp)\n    \n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuZkClient error : %v", err)\n    }\n    \n    zc := client.(*zk_client.ShenYuZkClient)\n    defer zc.Close()\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.  \u51c6\u5907\u4f60\u8981\u6ce8\u518c\u670d\u52a1\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//\u5143\u6570\u636e\u662f\u5fc5\u8981\u7684\u53c2\u6570\uff0c\u8fd9\u5c06\u6ce8\u518c\u5230shenyu\u7f51\u5173\u4f7f\u7528\n    metaData1 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister1", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:    "your/path1",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled: true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:    "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:    "8080",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n    \n    metaData2 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister2", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:    "your/path2",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled: true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:    "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:    "8181",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u8282\u70b9\u4fe1\u606f\u6ce8\u518c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'   //\u53ef\u4ee5\u8fdb\u884c\u591a\u4e2a\u5b9e\u4f8b\u6ce8\u518c\n    registerResult1, err := zc.RegisterServiceInstance(metaData1)\n        if !registerResult1 && err != nil {\n             logger.Fatal("Register zk Instance error : %v", err)\n        }\n    \n    registerResult2, err := zc.RegisterServiceInstance(metaData2)\n        if !registerResult2 && err != nil {\n             logger.Fatal("Register zk Instance error : %v", err)\n        }\n    //\u505a\u4f60\u7684\u903b\u8f91\u5904\u7406\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u6ce8\u518c\u8282\u70b9\u4fe1\u606f\u5220\u9664")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    //\u9009\u62e9\u6027\u8c03\u7528\n    deRegisterResult1, err := zc.DeregisterServiceInstance(metaData1)\n        if err != nil {\n            panic(err)\n        }\n\n    deRegisterResult2, err := zc.DeregisterServiceInstance(metaData2)\n        if err != nil {\n            panic(err)\n        }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.\u4f7f\u7528\u5ba2\u6237\u7aef\u83b7\u53d6\u6ce8\u518c\u8282\u70b9\u7684\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'   //\u5f00\u59cb\u8c03\u7528GetServiceInstanceInfo\n    instanceDetail, err := zc.GetServiceInstanceInfo(metaData1)\n    nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n    if !ok {\n    logger.Fatal("get zk client metaData error %v:", err)\n    }\n    \n    //range nodes\n    for index, node := range nodes1 {\n        nodeJson, err := json.Marshal(node)\n        if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n}\n\n    instanceDetail2, err := zc.GetServiceInstanceInfo(metaData2)\n    nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n    if !ok {\n    logger.Fatal("get zk client metaData error %v:", err)\n    }\n\n')),(0,a.kt)("h2",{id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"},"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:105] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"your/path1","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:119] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"your/path2","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:132] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister3","path":"your/path3","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8282","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:139] > DeregisterServiceInstance start\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister1\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister2\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister3\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:156] DeregisterServiceInstance success !\n')))}p.isMDXComponent=!0}}]);