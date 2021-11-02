(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(225)),i={last_modified_on:"2021-07-20",$schema:"/.meta/.schemas/highlights.json",title:"Released gnet v1.5.2",description:"Released the official stable version of v1.5.2",author_github:"https://github.com/panjf2000",pr_numbers:["551cd5"],release:"1.5.2",hide_on_release_notes:!1,tags:["type: tag","domain: v1.5.2"]},c={date:"2021-07-20T00:00:00.000Z",description:"Released the official stable version of v1.5.2",permalink:"/highlights/2021-07-20-released-1-5-2",readingTime:"2 min read",source:"@site/highlights/2021-07-20-released-1-5-2.md",tags:[{label:"type: tag",permalink:"/highlights/tags/type-tag"},{label:"domain: v1.5.2",permalink:"/highlights/tags/domain-v-1-5-2"}],title:"Released gnet v1.5.2",truncated:!1,nextItem:{title:"Released gnet v1.5.0",permalink:"/highlights/2021-07-11-released-1-5-0"}},l=[{value:"Enhancements",id:"enhancements",children:[{value:"About poller",id:"about-poller",children:[]},{value:"About ring-buffer",id:"about-ring-buffer",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("h3",{id:"about-poller"},"About poller"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," utilizes the standard package ",Object(o.b)("inlineCode",{parentName:"p"},"golang.org/x/sys/unix")," to implement pollers with ",Object(o.b)("inlineCode",{parentName:"p"},"epoll")," or ",Object(o.b)("inlineCode",{parentName:"p"},"kqueue"),", where a HASH MAP of ",Object(o.b)("inlineCode",{parentName:"p"},"fd->conn")," is introduced to help retrieve connections by file descriptors returned from pollers, but now the user can run ",Object(o.b)("inlineCode",{parentName:"p"},"go build")," with build tags ",Object(o.b)("inlineCode",{parentName:"p"},"poll_opt"),", like this: ",Object(o.b)("inlineCode",{parentName:"p"},"go build -tags=poll_opt"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," then switch to the optimized implementations of pollers that invoke the system calls of ",Object(o.b)("inlineCode",{parentName:"p"},"epoll")," or ",Object(o.b)("inlineCode",{parentName:"p"},"kqueue")," directly and add file descriptors to the interest list along with storing the corresponding connection pointers into ",Object(o.b)("inlineCode",{parentName:"p"},"epoll_data")," or ",Object(o.b)("inlineCode",{parentName:"p"},"kevent"),", in which case ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," can get rid of the HASH MAP of ",Object(o.b)("inlineCode",{parentName:"p"},"fd->conn")," and regain each connection pointer by the conversion of ",Object(o.b)("inlineCode",{parentName:"p"},"void*")," pointer in the I/O event-looping. In theory, it ought to achieve a higher performance with this optimization. "),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/230"}),"#230")," for code details."),Object(o.b)("h3",{id:"about-ring-buffer"},"About ring-buffer"),Object(o.b)("p",null,"Adjust the growth strategy of ring-buffer, make it go more smoothly rather than simply doubling up (which may waste a huge amount of memory) in each buffer scaling. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/commit/ccd37ff254e47ed4fff3feee79d88849d9444502"}),"ccd37f")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/commit/fd8d27ba98237a44c8d37ca9c9ecf02a7365ad44"}),"fd8d27")))}b.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(f,c({ref:t},p,{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);