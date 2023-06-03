"use strict";(self.webpackChunkav_1_wiki=self.webpackChunkav_1_wiki||[]).push([[3899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={label:"hdr10plus_tool",order:197,date:new Date("2023-05-07T00:00:00.000Z")},i="hdr10plus_tool",a={unversionedId:"utilities/hdr10plus_tool",id:"utilities/hdr10plus_tool",title:"hdr10plus_tool",description:"hdr10plus_tool is a command line tool written in Rust for working with HDR10+ in HEVC files. Previously named `hdr10plus_parser`, now it's more than just a parser.",source:"@site/docs/utilities/hdr10plus_tool.md",sourceDirName:"utilities",slug:"/utilities/hdr10plus_tool",permalink:"/av1-wiki.github.io/docs/utilities/hdr10plus_tool",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/utilities/hdr10plus_tool.md",tags:[],version:"current",frontMatter:{label:"hdr10plus_tool",order:197,date:"2023-05-07T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"eac3to",permalink:"/av1-wiki.github.io/docs/utilities/eac3to"},next:{title:"VapourSynth",permalink:"/av1-wiki.github.io/docs/utilities/vapoursynth"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hdr10plus_tool"},"hdr10plus_tool"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"hdr10plus_tool")," is a command line tool written in Rust for working with HDR10+ in HEVC files. Previously named ",(0,o.kt)("inlineCode",{parentName:"p"},"hdr10plus_parser"),", now it's more than just a parser."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download pre-built binaries from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/quietvoid/hdr10plus_tool/releases"},"here"))),(0,o.kt)("p",null,"or"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compile yourself (Rust must be installed, minimum v1.57.0 at the time of writing)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/quietvoid/hdr10plus_tool.git\ncd hdr10plus_tool\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n')),(0,o.kt)("p",null,"on Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/quietvoid/hdr10plus_tool.git\ncd hdr10plus_tool\nset RUSTFLAGS=-C target-cpu=native \ncargo build --release\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdr10plus_tool [OPTIONS] <SUBCOMMAND>\n")),(0,o.kt)("p",null,"To get more detailed options for a subcommand"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdr10plus_tool <SUBCOMMAND> --help\n")))}d.isMDXComponent=!0}}]);