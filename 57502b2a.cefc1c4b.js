(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),o=(n(0),n(171)),i={id:"theme",title:"Themes",sidebar_label:"Themes"},c={id:"theme",title:"Themes",description:"A theme is a type of style which is applied to the entire app. It allows you to declare",source:"@site/docs/theme.mdx",permalink:"/react-native-navigation/docs/theme",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/theme.mdx",sidebar_label:"Themes",sidebar:"docs",previous:{title:"Overlay",permalink:"/react-native-navigation/docs/docs-overlay"},next:{title:"StatusBar",permalink:"/react-native-navigation/docs/statusBar-docs"}},l=[{value:"Applying a theme",id:"applying-a-theme",children:[]},{value:"Changing theme dynamically",id:"changing-theme-dynamically",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A theme is a type of style which is applied to the entire app. It allows you to declare\na consistent style to all Navigation components such as the TopBar and BottomTabs and also\nto system elements like the StatusBar and NavigationBar."),Object(o.b)("h2",{id:"applying-a-theme"},"Applying a theme"),Object(o.b)("p",null,"Themes are applied using ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," which must be called ",Object(o.b)("strong",{parentName:"p"},"before")," ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()")," is called."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Set the default topBar background color to red\nNavigation.setDefaultOptions({\n  topBar: {\n    background: {\n      color: 'red'\n    }\n  }\n});\n\n// That stack's topBar background color will be red, as is set in default options\nNavigation.setRoot({\n  root: {\n    stack :{\n      children: [\n        ...\n      ]\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"changing-theme-dynamically"},"Changing theme dynamically"),Object(o.b)("p",null,"Apps can have multiple themes and sometimes you might need to change theme dynamically. To change current theme, simply call ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," with updated theme options, following that with a call to ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()"),". The reason we need to setRoot once more is because ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," does not apply options to screens which had already been created."))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,c({ref:t},p,{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);