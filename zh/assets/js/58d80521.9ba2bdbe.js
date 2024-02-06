"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45284],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>g});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||y[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2740:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const i={title:"\u521b\u5efa Git \u4ed3\u5e93",sidebar_position:12,description:"\u521b\u5efa Git \u4ed3\u5e93",cover:"/img/architecture/shenyu-framework.png"},o=void 0,l={unversionedId:"create-repository",id:"create-repository",isDocsHomePage:!1,title:"\u521b\u5efa Git \u4ed3\u5e93",description:"\u521b\u5efa Git \u4ed3\u5e93",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/12-create-repository.md",sourceDirName:".",slug:"/create-repository",permalink:"/zh/community/create-repository",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/12-create-repository.md",version:"current",lastUpdatedBy:"hql0312",lastUpdatedAt:1707209242,formattedLastUpdatedAt:"2024/2/6",sidebarPosition:12,frontMatter:{title:"\u521b\u5efa Git \u4ed3\u5e93",sidebar_position:12,description:"\u521b\u5efa Git \u4ed3\u5e93",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"\u793e\u533a",permalink:"/zh/community/community"},next:{title:"FAQ",permalink:"/zh/community/faq"}},c=[{value:"\u521b\u5efa Git \u4ed3\u5e93",id:"\u521b\u5efa-git-\u4ed3\u5e93",children:[]},{value:"\u521d\u59cb\u5316 GitHub \u4ed3\u5e93",id:"\u521d\u59cb\u5316-github-\u4ed3\u5e93",children:[]}],p={toc:c},s="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(s,(0,r.c)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u53ea\u6709 PMC \u6210\u5458\u6709\u6743\u9650\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\u3002")),(0,a.yg)("h2",{id:"\u521b\u5efa-git-\u4ed3\u5e93"},"\u521b\u5efa Git \u4ed3\u5e93"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"GitBox")," ","[1]"," \u586b\u5199\u65b0\u4ed3\u5e93\u4fe1\u606f\u3002\u4ee5 incubator-shenyu-helm-chart \u4e3a\u4f8b\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"GitBox",src:n(66904).c})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PMC"),": \u9009\u62e9 shenyu"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Repository name"),": helm-chart \uff08\u5199\u540e\u7f00\uff0c\u4e0d\u8981\u5199\u5168\u540d\uff09"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Generated name"),": incubator-shenyu-helm-chart.git \uff08\u81ea\u52a8\u751f\u6210\u5168\u540d\uff0c\u4e0d\u9700\u8981\u586b\u5199\uff09"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Commit notification list")," \u548c ",(0,a.yg)("inlineCode",{parentName:"li"},"GitHub notification list"),": \u90fd\u586b ",(0,a.yg)("a",{parentName:"li",href:"mailto:notifications@shenyu.apache.org"},"notifications@shenyu.apache.org"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Yes")," \u5b8c\u6210\u521b\u5efa\uff0cGitHub \u4ed3\u5e93\u7684\u521b\u5efa\u8fc7\u7a0b\u4f1a\u6301\u7eed\u4e00\u5c0f\u65f6\u5de6\u53f3\u3002")),(0,a.yg)("h2",{id:"\u521d\u59cb\u5316-github-\u4ed3\u5e93"},"\u521d\u59cb\u5316 GitHub \u4ed3\u5e93"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"GitHub \u4ed3\u5e93\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u6309\u7167\u9875\u9762\u7684\u6307\u5f15\uff0c\u5b8c\u6210\u7b2c\u4e00\u6b21\u63d0\u4ea4\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"li"},"LICENSE"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"NOTICE")," \u548c ",(0,a.yg)("inlineCode",{parentName:"li"},"DISCLAIMER")," \u6587\u4ef6\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"li"},".asf.yaml")," \u81ea\u5b9a\u4e49\u4ed3\u5e93\u914d\u7f6e\u3002.asf.yaml \u7684\u8be6\u7ec6\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"\u8fd9\u91cc")," ","[2]","\u3002")),(0,a.yg)("p",null,"helm-chart \u7684 .asf.yaml\uff0c\u5f00\u542f\u4e86\u4e3b\u5e72\u4fdd\u62a4\uff0cpush \u4e4b\u540e\uff0c\u4ee5\u540e\u7684\u4ee3\u7801\u9700\u8981\u7528\u8fc7PR\u63d0\u4ea4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"github:\n  description: ShenYu is High-Performance Java API Gateway.\n  homepage: https://shenyu.apache.org/\n  labels:\n    - shenyu\n    - helm chart\n  features:\n    wiki: true\n    issues: true\n    projects: true\n  ghp_branch: main\n    ghp_path: /docs\n  enabled_merge_buttons:\n    squash: true\n    merge: false\n    rebase: false\n  protected_branches:\n    main:\n      required_status_checks:\n        strict: true\n      required_pull_request_reviews:\n        dismiss_stale_reviews: true\n        required_approving_review_count: 1\nnotifications:\n  commits: notifications@shenyu.apache.org\n  issues: notifications@shenyu.apache.org\n  pullrequests: notifications@shenyu.apache.org\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4ee5\u4e0a\u5185\u5bb9\u53c2\u8003")),(0,a.yg)("p",null,"[1]"," ",(0,a.yg)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"https://gitbox.apache.org/setup/newrepo.html")),(0,a.yg)("p",null,"[2]"," ",(0,a.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features")))}u.isMDXComponent=!0},66904:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/create_repo-5943e2a67d3d70100e5dd0a949772fc5.png"}}]);