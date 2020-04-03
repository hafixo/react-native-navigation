(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),b=(n(0),n(171)),c={id:"button-options",title:"Button Options",sidebar_label:"Button"},o={id:"button-options",title:"Button Options",description:"```js",source:"@site/docs/options-button.mdx",permalink:"/react-native-navigation/docs/button-options",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/options-button.mdx",sidebar_label:"Button",sidebar:"api",previous:{title:"Back Button Options",permalink:"/react-native-navigation/docs/backButton-options"},next:{title:"IconInsets Options",permalink:"/react-native-navigation/docs/iconInsets-options"}},l=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>text</code>",id:"text",children:[]},{value:"<code>showAsAction</code>",id:"showasaction",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>iconInsets</code>",id:"iconinsets",children:[]},{value:"<code>systemItem</code>",id:"systemitem",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const options = {\n  topBar: {\n    leftButtons: [\n      {\n        id: "id",\n        text: "Button"\n      }\n    ]\n  }\n};\n')),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"Buttons are identified by their id property. When a button is clicked, a buttonPress event is emitted to js, containing the id of the clicked button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"icon"},Object(b.b)("inlineCode",{parentName:"h3"},"icon")),Object(b.b)("p",null,"Button icon. If the button is pushed to the overflow menu, the button ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#text"}),"text")," is used instead."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"text"},Object(b.b)("inlineCode",{parentName:"h3"},"text")),Object(b.b)("p",null,"Button text. Ignored if an icon is specified, unless the button is displayed in the overflow menu."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"showasaction"},Object(b.b)("inlineCode",{parentName:"h3"},"showAsAction")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('always', 'never', 'withText', 'ifRoom')"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ifRooom")," - Only add button to the TopBar if there is room for it, otherwise add it to the overflow menu."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"never")," - Never place this button in the TopBar. Instead, list the button in the overflow menu."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"always")," - Always place this button in the app bar.")),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"component")),Object(b.b)("p",null,"Set a react ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"component-layout"}),"component")," as this button's view which will be displayed instead of the regular view."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"component-layout"}),"Component")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"iconinsets"},Object(b.b)("inlineCode",{parentName:"h3"},"iconInsets")),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"iconInsets-options"}),"IconInsets")," are applied to the icon to translate its original position on the screen."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IconInsets"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(b.b)("h3",{id:"systemitem"},Object(b.b)("inlineCode",{parentName:"h3"},"systemItem")),Object(b.b)("p",null,"System icon; ignored if an ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#icon-number"}),"icon")," is specified. For more information, see ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/system-icons/"}),"apple's guidelines"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('done', 'cancel', 'edit', 'save', 'add', 'flexibleSpace', 'fixedSpace', 'compose', 'reply', 'action', 'organize', 'bookmarks', 'search', 'refresh', 'stop', 'camera', 'trash', 'play', 'pause', 'rewind', 'fastForward', 'undo', 'redo')"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},O=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=p(n),u=a,j=O["".concat(c,".").concat(u)]||O[u]||d[u]||b;return n?r.a.createElement(j,o({ref:t},i,{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);