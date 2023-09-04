"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31672],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=s,m=u["".concat(r,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80018:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=t(87462),s=(t(67294),t(3905));const i={title:"SPI Source Code Analysis",author:"Throwable",author_url:"https://github.com/zjcscut/",tags:["SPI","Apache ShenYu"],date:new Date("2022-09-12T00:00:00.000Z")},o=void 0,l={permalink:"/blog/SPI-SourceCode-Analysis-SPI",editUrl:"https://github.com/apache/shenyu-website/edit/main/blog/SPI-SourceCode-Analysis-SPI.md",source:"@site/blog/SPI-SourceCode-Analysis-SPI.md",title:"SPI Source Code Analysis",description:"Apache ShenYu is an asynchronous, high-performance, cross-language, responsive API gateway.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"SPI",permalink:"/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:17.335,truncated:!1,prevItem:{title:"RateLimiter SPI code analysis",permalink:"/blog/SPI-SourceCode-Analysis-RateLimiter-SPI"}},r=[{value:"background",id:"background",children:[]},{value:"what is SPI",id:"what-is-spi",children:[]},{value:"source code of shenyu-spi",id:"source-code-of-shenyu-spi",children:[{value:"@SPI",id:"spi",children:[]},{value:"@Join",id:"join",children:[]},{value:"ExtensionLoader",id:"extensionloader",children:[]},{value:"ExtensionFactory",id:"extensionfactory",children:[]}]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]}],c={toc:r},d="wrapper";function u(e){let{components:n,...i}=e;return(0,s.kt)(d,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/index"},"Apache ShenYu")," is an asynchronous, high-performance, cross-language, responsive API gateway.")),(0,s.kt)("h2",{id:"background"},"background"),(0,s.kt)("p",null,"Recently,when I read the source code of open source project Apache Shenyu API gateway,I find and many core components of the gateway are loaded with the SPI module. Here I will analyzes the source code of ",(0,s.kt)("inlineCode",{parentName:"p"},"SPI")," module in ",(0,s.kt)("inlineCode",{parentName:"p"},"Shenyu")," gateway."),(0,s.kt)("h2",{id:"what-is-spi"},"what is SPI"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SPI")," means 'Service Provider Interface', which is a dynamic Service discovery mechanism. We can dynamically load the implementation class of the Interface based on the runtime of the Interface (that is, a development mode of Interface programming + strategy  pattern + configuration file) with it. The most common is the built-in database Driver interface 'java.sql.Driver' in JDK. Different vendors can implement this interface differently. For example, 'MySQL' ('com.mysql.jdbc.Driver' in the 'MySQL' Driver package),' PostgreSQL' ('org.postgresql.driver' in the 'PostgreSQL' Driver package), etc."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spi-jdk-api-diagram",src:t(99403).Z})),(0,s.kt)("p",null,"The JDK's built-in 'SPI' can be used as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In the 'META-INF/services' directory of the classpath, create a file named with the fully qualified name of the interface (essentially a 'properties' file) whose implementation classes you want the SPI loader to load , for example if you want to load the SQL driver implementation classes mentioned above then create a file named 'java.sql.Driver' since those classes implement the 'java.sql.driver' interface.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In this file we can add entries for all the specific implementations of the interface . For example for the above driver class scenario we would add entries as shown in below code snippet in the file ",(0,s.kt)("inlineCode",{parentName:"p"},"META-INF/services/java.sql.Driver")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"# content of file META-INF/services/java.sql.Driver\ncom.mysql.jdbc.Driver\norg.postgresql.Driver\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Finally load the file with 'java.util.ServiceLoader' to instantiate the corresponding implementation class of the interface")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\nServiceLoader<Driver> loader = ServiceLoader.load(Driver.class)\n")),(0,s.kt)("p",null,"The underlying implementation involves classloading, the parent delegate model, and so on, which I won't expand here. Based on this design idea, many mainstream frameworks self-implemented a set of 'SPI' extension, such as 'Dubbo SPI' extension module, which would read the 'META-INF/services/dubbo' directory file content in the classppath for class loading. The 'shenyu-spi' module also follows this similar design idea."),(0,s.kt)("h2",{id:"source-code-of-shenyu-spi"},"source code of shenyu-spi"),(0,s.kt)("p",null,"The 'shenyu-spi' module is very concise, and the code structure is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"- shenyu-spi[module]\n  - org.apache.shenyu.spi[package]\n    -- ExtensionFactory\n    -- ExtensionLoader\n    -- Join\n    -- SPI\n    -- SpiExtensionFactory\n")),(0,s.kt)("p",null,"\u8fd9\u4e9b\u7c7b\u529f\u80fd\u5982\u4e0b\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'ExtensionFactory' : 'SPI' loader Factory, used to load an 'ExtensionLoader' instance based on the 'SPI' mechanism and to obtain the default 'SPI' identity implementation based on the 'ExtensionLoader' instance"),(0,s.kt)("li",{parentName:"ul"},"'SpiExtensionFactory' : is an implementation of 'ExtensionFactory'"),(0,s.kt)("li",{parentName:"ul"},"'SPI' : identification annotation, used to identify 'SPI', used on the interface"),(0,s.kt)("li",{parentName:"ul"},"'Join' : identification annotation, used on the implementation class, used to identify the class joining the SPI system"),(0,s.kt)("li",{parentName:"ul"},"'ExtensionLoader' : 'SPI' loader, analogous to 'java.util.ServiceLoader', used to load the implementation class of the interface in 'SPI'")),(0,s.kt)("h3",{id:"spi"},"@SPI"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.spi.SPI")," is an identification annotation which is used for identifying an interface as a 'SPI' interface.That is, only interfaces that use '@SPI' annotation can be loaded by 'shenyu-spi'. The class's annotation describes the implementation of Apache Dubbo, a reference to all the SPI systems (which makes sense, since the SPI extension is already a mature scheme with much the same implementation). This annotation has only one method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface SPI {\n\n    /**\n     * Value string.\n     *\n     * @return the string\n     */\n    String value() default "";\n}\n')),(0,s.kt)("p",null,"The unique 'value()' method is used to specify the default 'SPI' implementation (optional), as will be shown later when analyzing 'ExtensionLoader'."),(0,s.kt)("h3",{id:"join"},"@Join"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.spi.Join")," is an identification annotation too. When this annotation is used on a class it specifies that  the class contains 'SPI' implementation and to indicate that the class is added to the SPI system and can be loaded by ExtensionLoader. This annotation has two methods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface Join {\n    \n    /**\n     * It will be sorted according to the current serial number..\n     * @return int.\n     */\n    int order() default 0;\n\n    /**\n     * Indicates that the object joined by @Join is a singleton,\n     * otherwise a completely new instance is created each time.\n     * @return true or false.\n     */\n    boolean isSingleton() default true;\n}\n")),(0,s.kt)("p",null,"The unique 'order()' method is used to specify the specific sequence number. If a single interface that annotated with '@SPI' has multiple implementation classes that annotated with '@Join', the sequence number determines the order of these implementation class instances (the smaller one comes first)."),(0,s.kt)("p",null,"The isSingleton() method indicates whether the class that the implementation class is a singleton class or not. That is if it is a singleton class it will be instantiated only once else it will create a new instance everytime . "),(0,s.kt)("h3",{id:"extensionloader"},"ExtensionLoader"),(0,s.kt)("p",null,"'ExtensionLoader' is the core of the 'SPI' module. Look at it's attributes first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public final class ExtensionLoader<T> {\n    \n    // SLF4J\u65e5\u5fd7\u53e5\u67c4\n    private static final Logger LOG = LoggerFactory.getLogger(ExtensionLoader.class);\n    \n    // SPI\u914d\u7f6e\u6587\u4ef6\u57fa\u4e8e\u7c7b\u8def\u5f84\u4e0b\u7684\u76f8\u5bf9\u76ee\u5f55\n    private static final String SHENYU_DIRECTORY = "META-INF/shenyu/";\n    \n    // @SPI\u6807\u8bc6\u63a5\u53e3\u7c7b\u578b -> ExtensionLoader\u5b9e\u4f8b\u7684\u7f13\u5b58 => \u6ce8\u610f\u8fd9\u4e2a\u662f\u4e00\u4e2a\u5168\u5c40\u7684\u9759\u6001\u53d8\u91cf\n    private static final Map<Class<?>, ExtensionLoader<?>> LOADERS = new ConcurrentHashMap<>();\n    \n    // \u5f53\u524d@SPI\u6807\u8bc6\u63a5\u53e3\u7c7b\u578b\n    private final Class<T> clazz;\n    \n    // \u7c7b\u52a0\u8f7d\u5668\u5b9e\u4f8b\n    private final ClassLoader classLoader;\n    \n    // \u5f53\u524dExtensionLoader\u7f13\u5b58\u7684\u5df2\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u4fe1\u606f\uff0c\u4f7f\u7528\u503c\u6301\u6709\u5668\u5305\u88c5\uff0c\u662f\u4e00\u4e2aHashMap\uff0c\u6620\u5c04\u5173\u7cfb\uff1a\u5b9e\u73b0\u7c7b\u522b\u540d -> \u5b9e\u73b0\u7c7b\u4fe1\u606f\n    private final Holder<Map<String, ClassEntity>> cachedClasses = new Holder<>();\n    \n    // \u5f53\u524dExtensionLoader\u7f13\u5b58\u7684\u5df2\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\u7684\u503c\u5305\u88c5\u5668\uff0c\u4f7f\u7528\u503c\u6301\u6709\u5668\u5305\u88c5\uff0c\u6620\u5c04\u5173\u7cfb\uff1a\u5b9e\u73b0\u7c7b\u522b\u540d -> \u503c\u6301\u6709\u5668\u5305\u88c5\u7684\u5b9e\u73b0\u7c7b\u5b9e\u4f53\n    private final Map<String, Holder<Object>> cachedInstances = new ConcurrentHashMap<>();\n    \n    // \u5f53\u524dExtensionLoader\u7f13\u5b58\u7684\u5df2\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\uff0c\u4f7f\u7528\u503c\u6301\u6709\u5668\u5305\u88c5\uff0c\u6620\u5c04\u5173\u7cfb\uff1a\u5b9e\u73b0\u7c7b\u7c7b\u578b -> \u5b9e\u73b0\u7c7b\u5b9e\u4f53\n    private final Map<Class<?>, Object> joinInstances = new ConcurrentHashMap<>();\n    \n    // \u7f13\u5b58\u9ed8\u8ba4\u540d\u79f0\uff0c\u6765\u6e90\u4e8e@SPI\u6ce8\u89e3\u7684value()\u65b9\u6cd5\u975e\u7a7a\u767d\u8fd4\u56de\u503c\uff0c\u7528\u4e8e\u52a0\u8f7d\u9ed8\u8ba4\u7684\u63a5\u53e3\u5b9e\u73b0\n    private String cachedDefaultName;\n    \n    // Holder\u6bd4\u8f83\u5668\uff0c\u6309\u7167Holder\u7684order\u964d\u5e8f\uff0c\u4e5f\u5c31\u662f\u987a\u5e8f\u53f7\u5c0f\u7684\u6392\u5728\u524d\u9762\n    private final Comparator<Holder<Object>> holderComparator = Comparator.comparing(Holder::getOrder);\n    \n    // ClassEntity\u6bd4\u8f83\u5668\uff0c\u6309\u7167ClassEntity\u7684order\u964d\u5e8f\uff0c\u4e5f\u5c31\u662f\u987a\u5e8f\u53f7\u5c0f\u7684\u6392\u5728\u524d\u9762\n    private final Comparator<ClassEntity> classEntityComparator = Comparator.comparing(ClassEntity::getOrder);\n    \n    // \u6682\u65f6\u7701\u7565\u5176\u4ed6\u4ee3\u7801\n\n    // \u503c\u6301\u6709\u5668\uff0c\u7b80\u5355VO\uff0c\u7528\u6765\u5b58\u50a8\u6cdb\u578b\u503c\u548c\u503c\u52a0\u8f7d\u987a\u5e8f\n    public static class Holder<T> {\n        \n        // \u8fd9\u91cc\u7684\u503c\u5f15\u7528\u662fvolatile\u4fee\u9970\uff0c\u4fbf\u4e8e\u67d0\u7ebf\u7a0b\u66f4\u53d8\u53e6\u4e00\u7ebf\u7a0b\u9a6c\u4e0a\u8bfb\u5230\u6700\u65b0\u7684\u503c\n        private volatile T value;\n        \n        private Integer order;\n\n        private boolean isSingleton;\n        \n        // \u7701\u7565setter\u548cgetter\u4ee3\u7801\n    }\n    \n    // \u7c7b\u5b9e\u4f53\uff0c\u4e3b\u8981\u5b58\u653e\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u7684\u4fe1\u606f\n    static final class ClassEntity {\n        \n        // \u540d\u79f0\uff0c\u8fd9\u91cc\u662f\u6307SPI\u5b9e\u73b0\u7c7b\u7684\u522b\u540d\uff0c\u4e0d\u662f\u7c7b\u540d\n        private String name;\n        \n        // \u52a0\u8f7d\u987a\u5e8f\u53f7\n        private Integer order;\n\n        private Boolean isSingleton;\n        \n        // SPI\u5b9e\u73b0\u7c7b\n        private Class<?> clazz;\n\n        private ClassEntity(final String name, final Integer order, final Class<?> clazz, final boolean isSingleton) {\n            this.name = name;\n            this.order = order;\n            this.clazz = clazz;\n            this.isSingleton = isSingleton;\n        }\n        \n        // \u7701\u7565setter\u548cgetter\u4ee3\u7801\n    }\n}\n')),(0,s.kt)("p",null,"After analyzing the attributes, it is not difficult to find the following points:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'ExtensionLoader' There will be a global static cache 'LOADERS' to cache already created instances of 'ExtensionLoader' to prevent the performance overhead of repeated creation"),(0,s.kt)("li",{parentName:"ul"},"Each '@SPI' interface that is loaded using 'ExtensionLoader' generates a new instance of 'ExtensionLoader'"),(0,s.kt)("li",{parentName:"ul"},"'@SPI' interfaces that have multiple implementations are eventually acquired in order")),(0,s.kt)("p",null,"Then look at it's constructors and static factory methods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// \u79c1\u6709\u6784\u9020\u51fd\u6570\uff0c\u9700\u8981\u5165\u53c2\u4e3a@SPI\u6807\u8bc6\u7684\u63a5\u53e3\u7c7b\u578b\u548c\u7c7b\u52a0\u8f7d\u5668\u5b9e\u4f8b\nprivate ExtensionLoader(final Class<T> clazz, final ClassLoader cl) {\n    // \u6210\u5458\u53d8\u91cfclazz\u8d4b\u503c\n    this.clazz = clazz;\n    // \u6210\u5458\u53d8\u91cfclassLoader\u8d4b\u503c\n    this.classLoader = cl;\n    // \u8fd9\u91cc\u5bf9\u4e8e\u975eExtensionFactory\u63a5\u53e3\u7c7b\u578b\u4f1a\u61d2\u52a0\u8f7d\u4e00\u4e2a\u7528\u4e8e\u52a0\u8f7dExtensionFactory\u7684ExtensionLoader\n    if (!Objects.equals(clazz, ExtensionFactory.class)) {\n        ExtensionLoader.getExtensionLoader(ExtensionFactory.class).getExtensionClassesEntity();\n    }\n}\n\n// \u5b9e\u4f8b\u5316getExtensionLoader\uff0c\u9759\u6001\u5de5\u5382\u65b9\u6cd5\uff0c\u9700\u8981\u5165\u53c2\u4e3a@SPI\u6807\u8bc6\u7684\u63a5\u53e3\u7c7b\u578b\u548c\u7c7b\u52a0\u8f7d\u5668\u5b9e\u4f8b\npublic static <T> ExtensionLoader<T> getExtensionLoader(final Class<T> clazz, final ClassLoader cl) {\n    // \u524d\u7f00\u6821\u9a8c\uff0c\u63a5\u53e3\u7c7b\u578b\u5fc5\u987b\u975e\u7a7a\u5e76\u4e14\u5fc5\u987b\u5b58\u5728@SPI\u6ce8\u89e3\uff0c\u5426\u5219\u629b\u51fa\u5f02\u5e38\u4e2d\u65ad\n    Objects.requireNonNull(clazz, "extension clazz is null");\n    if (!clazz.isInterface()) {\n        throw new IllegalArgumentException("extension clazz (" + clazz + ") is not interface!");\n    }\n    if (!clazz.isAnnotationPresent(SPI.class)) {\n        throw new IllegalArgumentException("extension clazz (" + clazz + ") without @" + SPI.class + " Annotation");\n    }\n    // \u4ece\u7f13\u5b58LOADERS\u4e2d\u52a0\u8f7dExtensionLoader\u5b9e\u4f8b\uff0c\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u5178\u578b\u7684\u61d2\u52a0\u8f7d\u6a21\u5f0f\n    ExtensionLoader<T> extensionLoader = (ExtensionLoader<T>) LOADERS.get(clazz);\n    if (Objects.nonNull(extensionLoader)) {\n        return extensionLoader;\n    }\n    LOADERS.putIfAbsent(clazz, new ExtensionLoader<>(clazz, cl));\n    return (ExtensionLoader<T>) LOADERS.get(clazz);\n}\n\n// \u5b9e\u4f8b\u5316getExtensionLoader\uff0c\u9759\u6001\u5de5\u5382\u65b9\u6cd5\uff0c\u9700\u8981\u5165\u53c2\u4e3a@SPI\u6807\u8bc6\u7684\u63a5\u53e3\u7c7b\u578b\uff0c\u4f7f\u7528ExtensionLoader\u7c7b\u7684\u7c7b\u52a0\u8f7d\u5668\npublic static <T> ExtensionLoader<T> getExtensionLoader(final Class<T> clazz) {\n    return getExtensionLoader(clazz, ExtensionLoader.class.getClassLoader());\n}\n')),(0,s.kt)("p",null,"'ExtensionLoader' uses a private constructor, static factory methods, and lazy loading mode. Class loading is not triggered after initializing 'ExtensionLoader'. The actual scanning and loading is delayed until the 'getJoin' series methods are called, where the code is swept and all the method call chains that implement class information are loaded:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// \u52a0\u8f7d\u6240\u6709\u6269\u5c55\u7c7b\u4fe1\u606f\uff0c\u8fd9\u91cc\u91c7\u7528\u4e86DCL\uff08\u53cc\u91cd\u9501\u6821\u9a8c\uff09\u9632\u6b62\u5e76\u53d1\u52a0\u8f7d\nprivate Map<String, ClassEntity> getExtensionClassesEntity() {\n    // \u7f13\u5b58\u4e0d\u5b58\u5728\n    Map<String, ClassEntity> classes = cachedClasses.getValue();\n    if (Objects.isNull(classes)) {\n        // \u52a0\u9501\u540e\u518d\u68c0\u67e5\u4e00\u6b21\u7f13\u5b58\n        synchronized (cachedClasses) {\n            classes = cachedClasses.getValue();\n            if (Objects.isNull(classes)) {\n                // \u6700\u7ec8\u786e\u8ba4\u7f13\u5b58\u4e0d\u5b58\u5728\uff0c\u5219\u8fdb\u884c\u52a0\u8f7d\uff0c\u5e76\u4e14\u6807\u8bb0\u987a\u5e8f\u53f7\u4e3a0\n                classes = loadExtensionClass();\n                cachedClasses.setValue(classes);\n                cachedClasses.setOrder(0);\n            }\n        }\n    }\n    return classes;\n}\n\n// \u52a0\u8f7d\u5f53\u524dExtensionLoader\u4e2dclazz\u7684\u6240\u6709SPI\u7cfb\u7edf\u5185\u7684\u5b9e\u73b0\u7c7b\nprivate Map<String, ClassEntity> loadExtensionClass() {\n    SPI annotation = clazz.getAnnotation(SPI.class);\n    if (Objects.nonNull(annotation)) {\n        // \u8fd9\u91cc\u5c31\u662f\u524d\u9762\u63d0\u5230\uff0c\u5982\u679c@SPI\u6ce8\u89e3\u7684value()\u65b9\u6cd5\u975e\u7a7a\u767d\u8fd4\u56de\u503c\u4f1a\u4f5c\u4e3a\u9ed8\u8ba4\u5b9e\u73b0\u7684\u522b\u540d\n        // \u4e5f\u5c31\u662f\u5982\u679c\u53ea\u4f7f\u7528\u4e86@SPI\uff0c\u90a3\u4e48\u5c31\u65e0\u6cd5\u83b7\u53d6\u9ed8\u8ba4\u5b9e\u73b0\n        // \u5982\u679c\u4f7f\u7528\u4e86@SPI("foo")\uff0c\u53ef\u4ee5\u901a\u8fc7\u522b\u540dfoo\u53bb\u6620\u5c04\u548c\u83b7\u53d6\u9ed8\u8ba4\u5b9e\u73b0\n        String value = annotation.value();\n        if (StringUtils.isNotBlank(value)) {\n            cachedDefaultName = value;\n        }\n    }\n    // \u521d\u59cb\u5316\u4e00\u4e2aHashmap\u5bb9\u5668\u7528\u4e8e\u5b58\u50a8\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u4fe1\u606f\uff0c\u8fd9\u4e2a\u53d8\u91cf\u4f1a\u900f\u4f20\u5230\u4e0b\u4e00\u4e2a\u65b9\u6cd5\u94fe\n    Map<String, ClassEntity> classes = new HashMap<>(16);\n    // \u52a0\u8f7d\u76ee\u5f55\u4e2d\u7684\u5c5e\u6027\u6587\u4ef6\n    loadDirectory(classes);\n    return classes;\n}\n\n// \u52a0\u8f7d\u76ee\u5f55\u4e2d\u7684\u5c5e\u6027\u6587\u4ef6\uff0c\u5e76\u4e14\u52a0\u8f7d\u6587\u4ef6\u4e2d\u7684\u5b9e\u73b0\u7c7b\uff0c\u76ee\u6807\u76ee\u5f55\uff1aMETA-INF/shenyu/\nprivate void loadDirectory(final Map<String, ClassEntity> classes) {\n    // \u6587\u4ef6\u540d => META-INF/shenyu/$className\n    String fileName = SHENYU_DIRECTORY + clazz.getName();\n    try {\n        // \u8fd9\u91cc\u4f7f\u7528\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u6587\u4ef6\u8d44\u6e90\uff0c\u5982\u679c\u4f20\u5165\u7684\u7c7b\u52a0\u8f7d\u5668\u4e3a\u7a7a\u4f1a\u4f7f\u7528\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\n        Enumeration<URL> urls = Objects.nonNull(this.classLoader) ? classLoader.getResources(fileName)\n                : ClassLoader.getSystemResources(fileName);\n        // \u904d\u5386\u89e3\u6790\u7684\u6587\u4ef6URL\u96c6\u5408\n        if (Objects.nonNull(urls)) {\n            while (urls.hasMoreElements()) {\n                URL url = urls.nextElement();\n                // \u901a\u8fc7\u6587\u4ef6URL\u52a0\u8f7d\u8d44\u6e90\n                loadResources(classes, url);\n            }\n        }\n    } catch (IOException t) {\n        LOG.error("load extension class error {}", fileName, t);\n    }\n}\n\n// \u52a0\u8f7d\u6587\u4ef6\u8d44\u6e90\uff0c\u89e3\u6790\u6587\u4ef6\u5e76\u4e14\u52a0\u8f7d\u5b9e\u73b0\u7c7b\u5b58\u50a8\u5230classes\u4e2d\nprivate void loadResources(final Map<String, ClassEntity> classes, final URL url) throws IOException {\n    // \u8bfb\u53d6URL\u6587\u4ef6\u8d44\u6e90\uff0c\u52a0\u8f7d\u5230Properties\u4e2d\uff0c\u6bcf\u884c\u683c\u5f0f\u4e3aname=classPath\n    try (InputStream inputStream = url.openStream()) {\n        Properties properties = new Properties();\n        properties.load(inputStream);\n        properties.forEach((k, v) -> {\n            String name = (String) k;\n            String classPath = (String) v;\n            if (StringUtils.isNotBlank(name) && StringUtils.isNotBlank(classPath)) {\n                try {\n                    // \u57fa\u4e8ename\u548cclassPath\u8fdb\u884c\u7c7b\u52a0\u8f7d\n                    loadClass(classes, name, classPath);\n                } catch (ClassNotFoundException e) {\n                    throw new IllegalStateException("load extension resources error", e);\n                }\n            }\n        });\n    } catch (IOException e) {\n        throw new IllegalStateException("load extension resources error", e);\n    }\n}\n\n// \u57fa\u4e8ename\uff08\u522b\u540d\uff09\u548cclassPath\uff08\u7c7b\u5168\u9650\u5b9a\u540d\u79f0\uff09\u8fdb\u884c\u7c7b\u52a0\u8f7d\nprivate void loadClass(final Map<String, ClassEntity> classes,\n                        final String name, final String classPath) throws ClassNotFoundException {\n    // \u7c7b\u521d\u59cb\u5316\uff0c\u5e76\u4e14\u786e\u5b9a\u5b9e\u73b0\u7c7b\u5fc5\u987b\u662f\u5f53\u524d@SPI\u6ce8\u89e3\u6807\u8bc6\u63a5\u53e3\u7684\u5b50\u7c7b\n    Class<?> subClass = Objects.nonNull(this.classLoader) ? Class.forName(classPath, true, this.classLoader) : Class.forName(classPath);\n    if (!clazz.isAssignableFrom(subClass)) {\n        throw new IllegalStateException("load extension resources error," + subClass + " subtype is not of " + clazz);\n    }\n    // \u5b9e\u73b0\u7c7b\u5fc5\u987b\u5b58\u5728\u6ce8\u89e3@Join\n    if (!subClass.isAnnotationPresent(Join.class)) {\n        throw new IllegalStateException("load extension resources error," + subClass + " without @" + Join.class + " annotation");\n    }\n    // \u5982\u679c\u7f13\u5b58\u4e2d\u4e0d\u5b58\u5728\u540c\u6837\u522b\u540d\u7684\u5b9e\u73b0\u7c7b\u624d\u8fdb\u884c\u7f13\u5b58\uff0c\u5df2\u7ecf\u5b58\u5728\u5219\u6821\u9a8c\u65e7\u7684\u7c7b\u578b\u548c\u5f53\u524d\u5b9e\u73b0\u7c7b\u578b\u662f\u5426\u4e00\u81f4\n    ClassEntity oldClassEntity = classes.get(name);\n    if (Objects.isNull(oldClassEntity)) {\n        // \u521b\u5efa\u7c7b\u4fe1\u606f\u5b9e\u4f53\u4fdd\u5b58\u522b\u540d\u3001\u987a\u5e8f\u53f7\u548c\u5b9e\u73b0\u7c7b\u5e76\u4e14\u7f13\u5b58\uff0c\u6620\u5c04\u5173\u7cfb\uff1a\u522b\u540d -> \u7c7b\u4fe1\u606f\u5b9e\u4f53\n        Join joinAnnotation = subClass.getAnnotation(Join.class);\n        ClassEntity classEntity = new ClassEntity(name, joinAnnotation.order(), subClass);\n        classes.put(name, classEntity);\n    } else if (!Objects.equals(oldClassEntity.getClazz(), subClass)) {\n        throw new IllegalStateException("load extension resources error,Duplicate class " + clazz.getName() + " name "\n                + name + " on " + oldClassEntity.getClazz().getName() + " or " + subClass.getName());\n    }\n}\n')),(0,s.kt)("p",null,"Processing with the chain of method 'getExtensionClassesEntity - > loadExtensionClass - > loadDirectory - > loadResources - > LoadClass',it will create a mapping of 'alias' to 'implementation class information' for subsequent instantiations, as shown in the 'getJoin()' method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// \u57fa\u4e8e\u522b\u540d\u83b7\u53d6\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\npublic T getJoin(final String name) {\n    // \u522b\u540d\u5fc5\u987b\u4e3a\u975e\u7a7a\u767d\u5b57\u7b26\u4e32\n    if (StringUtils.isBlank(name)) {\n        throw new NullPointerException("get join name is null");\n    }\n    // \u8fd9\u91cc\u4e5f\u4f7f\u7528DCL\u53bbcachedInstances\u7f13\u5b58\u4e2d\u53d6\u522b\u540d\u5bf9\u5e94\u7684\u503c\u6301\u6709\u5668\uff0c\u503c\u6301\u6709\u5668\u4e3a\u7a7a\u5219\u521b\u5efa\n    Holder<Object> objectHolder = cachedInstances.get(name);\n    if (Objects.isNull(objectHolder)) {\n        cachedInstances.putIfAbsent(name, new Holder<>());\n        objectHolder = cachedInstances.get(name);\n    }\n    Object value = objectHolder.getValue();\n    if (Objects.isNull(value)) {\n        synchronized (cachedInstances) {\n            // \u52a0\u9501\u540e\u518d\u6b21\u5224\u65ad\u503c\u6301\u6709\u5668\u4e2d\u7684\u503c\u662f\u5426\u5b58\u5728\uff0c\u4e0d\u5b58\u5728\u7684\u65f6\u5019\u5219\u8fdb\u884c\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\u5316\n            value = objectHolder.getValue();\n            if (Objects.isNull(value)) {\n                Holder<T> pair = createExtension(name);\n                value = pair.getValue();\n                int order = pair.getOrder();\n                // \u5b9e\u4f8b\u5316\u5b8c\u6210\u540e\u66f4\u65b0\u503c\u6301\u6709\u5668\u7f13\u5b58\n                objectHolder.setValue(value);\n                objectHolder.setOrder(order);\n            }\n        }\n    }\n    return (T) value;\n}\n\n// \u57fa\u4e8e\u522b\u540d\u641c\u7d22\u5df2\u7ecf\u52a0\u8f7d\u7684\u5b9e\u73b0\u7c7b\u4fe1\u606f\uff0c\u5e76\u4e14\u5b9e\u4f8b\u5316\u5bf9\u5e94\u7684\u5b9e\u73b0\u7c7b\u8fdb\u884c\u503c\u5305\u88c5\nprivate Holder<T> createExtension(final String name) {\n    // \u52a0\u8f7d\u8be5@SPI\u6807\u8bc6\u63a5\u53e3\u7684\u6240\u6709\u5b9e\u73b0\u7c7b\u4fe1\u606f\u5e76\u4e14\u83b7\u53d6\u5bf9\u5e94\u522b\u540d\u7684\u5b9e\u73b0\u7c7b\u4fe1\u606f\n    ClassEntity classEntity = getExtensionClassesEntity().get(name);\n    if (Objects.isNull(classEntity)) {\n        throw new IllegalArgumentException("name is error");\n    }\n    Class<?> aClass = classEntity.getClazz();\n    // \u5982\u679c\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\u7f13\u5b58\u4e2d\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u76f4\u63a5\u5c01\u88c5\u4e3a\u503c\u5305\u88c5\u5668\u8fd4\u56de\uff0c\u5426\u5219\u8fdb\u884c\u5b9e\u4f8b\u5316\n    Object o = joinInstances.get(aClass);\n    if (Objects.isNull(o)) {\n        try {\n            // \u53cd\u5c04\u5b9e\u4f8b\u5316\u5e76\u4e14\u7f13\u5b58\u8be5\u5b9e\u73b0\u7c7b\u5b9e\u4f8b\n            joinInstances.putIfAbsent(aClass, aClass.newInstance());\n            o = joinInstances.get(aClass);\n        } catch (InstantiationException | IllegalAccessException e) {\n            throw new IllegalStateException("Extension instance(name: " + name + ", class: "\n                    + aClass + ")  could not be instantiated: " + e.getMessage(), e);\n            \n        }\n    }\n    Holder<T> objectHolder = new Holder<>();\n    objectHolder.setOrder(classEntity.getOrder());\n    objectHolder.setValue((T) o);\n    return objectHolder;\n}\n')),(0,s.kt)("p",null,"As you can see from the 'createExtension()' method, we end up using reflection to instantiate the implementation class. The reflection method 'newInstance()' requires that the class must provide a no-argument constructor because of an implicit convention: The 'SPI' implementation class ",(0,s.kt)("strong",{parentName:"p"},"must provide a no-argument constructor")," or the instantiation will fail. The rest methods, such as 'getDefaultJoin()' and 'getJoins()' are uncomplicated extensions of 'getJoin()', so we won't analyze them here. In addition, the 'getJoin()' method uses a multilevel cache:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'cachedInstances' : Search for the corresponding implementation class instance by alias"),(0,s.kt)("li",{parentName:"ul"},"'joinInstances' : If the alias lookup fails, load all the implementation class information, locate the implementation class type by the alias, and update the' cachedInstances' cache by either finding the implementation class type or creating and caching the implementation class instance")),(0,s.kt)("p",null,"This completes the source code analysis of 'ExtensionLoader'. Here's another example of an 'ExtensionLoader' instance member property memory layout diagram to help you understand:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"spi-attr-memory-debug",src:t(59895).Z})),(0,s.kt)("h3",{id:"extensionfactory"},"ExtensionFactory"),(0,s.kt)("p",null,"'ExtensionFactory' is the factory interface inside the factory pattern, which defines a method to get an instance of the 'SPI' implementation (the ",(0,s.kt)("strong",{parentName:"p"},"default implementation, or the only implementation"),") :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@SPI("spi")\npublic interface ExtensionFactory {\n\n    /**\n     * Gets Extension.\n     *\n     * @param <T>   the type parameter\n     * @param key   \u6b64\u53c2\u6570\u6682\u65f6\u6ca1\u6709\u4f7f\u7528\uff0c\u731c\u6d4b\u662f\u9884\u7559\u7528\u4e8e\u6620\u5c04@SPI\u7684value()\n     * @param clazz @SPI\u6807\u8bc6\u7684\u63a5\u53e3\u7c7b\u578b\n     * @return the extension\n     */\n    <T> T getExtension(String key, Class<T> clazz);\n}\n')),(0,s.kt)("p",null,"Let's look the class 'SpiExtensionFactory' :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@Join\npublic class SpiExtensionFactory implements ExtensionFactory {\n\n    @Override\n    public <T> T getExtension(final String key, final Class<T> clazz) {\n        return Optional.ofNullable(clazz)   // \u5165\u53c2clazz\u975e\u7a7a\n                .filter(Class::isInterface)  // \u5165\u53c2clazz\u5fc5\u987b\u662f\u63a5\u53e3\n                .filter(cls -> cls.isAnnotationPresent(SPI.class))  // \u5165\u53c2clazz\u5fc5\u987b\u88ab@SPI\u6807\u8bc6\n                .map(ExtensionLoader::getExtensionLoader)  // \u57fa\u4e8eclazz\u8fd9\u4e2a\u63a5\u53e3\u7c7b\u578b\u5b9e\u4f8b\u5316ExtensionLoader\n                .map(ExtensionLoader::getDefaultJoin)  // \u83b7\u53d6\u8be5@SPI\u6807\u8bc6\u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u4e0d\u5b58\u5728\u5219\u8fd4\u56deNULL\n                .orElse(null);\n    }\n}\n")),(0,s.kt)("p",null,"It's worth noting here that the 'ExtensionFactory' itself is part of the 'SPI' system. So when using 'ExtensionFactory' you can instantiate it directly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"ExtensionFactory extensionFactory = new SpiExtensionFactory();\n")),(0,s.kt)("p",null,"It can also be loaded based on an 'ExtensionLoader':"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"# the content of META-INF/services/shenyu/org.apache.shenyu.spi.ExtensionFactory\nspi=org.apache.shenyu.spi.SpiExtensionFactory\n\n# then load it with ExtensionLoader\nExtensionFactory extensionFactory = ExtensionLoader.getExtensionLoader(ExtensionFactory.class).getDefaultJoin();\n")),(0,s.kt)("p",null,"Once you have an 'ExtensionFactory' instance, you can load an instance of its default implementation class based on the '@SPI' interface."),(0,s.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,s.kt)("p",null,"The 'SPI' extension framework based on the design idea of 'Java' native 'SPI' has the characteristics of loose coupling, high usability and high scalability, a loading instance cache system, concurrency security and other features to fill some defects of 'SPI' in the native 'JDK', Shenyu SPI module is the same. Base on this powerful 'SPI' module, other modules in 'Shenyu' such as the 'Plugin' module can be configured quickly and pluggable, making it easier to load a newly developed Plugin instance."))}u.isMDXComponent=!0},59895:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/spi-attr-memory-debug-fbcf742eb342ba1aa47e9395bf8ffc0c.png"},99403:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/spi-jdk-api-diagram-en-a4e0940e14c7a579fafb7727894d905f.png"}}]);