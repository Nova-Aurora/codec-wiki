"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[3146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={label:"rav1e",sidebar_position:5,date:new Date("2023-05-09T00:00:00.000Z")},o="rav1e",l={unversionedId:"encoders/rav1e",id:"encoders/rav1e",title:"rav1e",description:"rav1e is a command line application for encoding AV1 written in Rust & Assembly co-developed by Xiph.org and Mozilla.",source:"@site/docs/encoders/rav1e.md",sourceDirName:"encoders",slug:"/encoders/rav1e",permalink:"/codec-wiki/docs/encoders/rav1e",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/encoders/rav1e.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{label:"rav1e",sidebar_position:5,date:"2023-05-09T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"SVT-AV1",permalink:"/codec-wiki/docs/encoders/SVT-AV1"},next:{title:"Kvaazar",permalink:"/codec-wiki/docs/encoders/Kvaazar"}},p={},s=[{value:"Building",id:"building",level:2},{value:"Linux/macOS",id:"linuxmacos",level:3},{value:"Windows",id:"windows",level:3},{value:"AV1",id:"av1",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rav1e"},"rav1e"),(0,r.kt)("p",null,"rav1e is a command line application for encoding AV1 written in Rust & Assembly co-developed by Xiph.org and Mozilla."),(0,r.kt)("p",null,"rav1e is available in FFmpeg via ",(0,r.kt)("inlineCode",{parentName:"p"},"librav1e"),". You can check if you have it by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ffmpeg -h encoder=librav1e"),". You can input non-FFmpeg standard rav1e parameters via ",(0,r.kt)("inlineCode",{parentName:"p"},"-rav1e-params"),". Please keep in mind that unless you build FFmpeg yourself, you are using the most vanilla version of rav1e."),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("h3",{id:"linuxmacos"},"Linux/macOS"),(0,r.kt)("p",null,"Pre-built binaries can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiph/rav1e/releases"},"releases page")," on Github. rav1e can also be installed with Cargo by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo install rav1e"),". "),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For stability & a proper version number, please reset the source to the correct release commit. In the releases page, click the icon to the right of the release tag & copy the commit in the url bar. Then, in the cloned rav1e directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"git reset --hard [commit hash]"))),(0,r.kt)("p",null,"Here are instructions for resetting to release 0.6.6. Omit the git reset command to use the latest git, if you have a ",(0,r.kt)("em",{parentName:"p"},"specific")," reason to use the latest git instead of an official tagged release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'git clone https://github.com/xiph/rav1e.git\ncd rav1e\ngit reset --hard 7c9db10494c2fffa98a572027d756e55bf754036\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n')),(0,r.kt)("p",null,"When done, the binary can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/target/release"),". You can then ",(0,r.kt)("inlineCode",{parentName:"p"},"cp /target/release/rav1e /usr/local/bin")," or wherever you desire the binary to go."),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/xiph/rav1e.git\ncd rav1e\ngit reset --hard 7c9db10494c2fffa98a572027d756e55bf754036\nset RUSTFLAGS=-C target-cpu=native\ncargo build --release\n")),(0,r.kt)("p",null,"When done, the binary can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installation with HDR10+ support")),(0,r.kt)("p",null,"rav1e currently has an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiph/rav1e/pull/3000"},"unmerged pull request")," by quietvoid, the person behind ",(0,r.kt)("inlineCode",{parentName:"p"},"hdr10plus_tool")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dovi_tool"),". The PR adds a new parameter called ",(0,r.kt)("inlineCode",{parentName:"p"},"--hdr10plus-json")," for HDR10+ JSON dynamic metadata input. To merge it locally, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"git clone https://github.com/xiph/rav1e.git\ncd rav1e\ngit reset --hard [release commit]\ngit fetch origin pull/3000/head:HDR10+\n")),(0,r.kt)("p",null,"now the patch should be applied, build as usual"),(0,r.kt)("h3",{id:"av1"},"AV1"),(0,r.kt)("p",null,"For AV1 encoding, rav1e has very sane defaults. It is very hard to go wrong with parameters if you modify as few as possible."),(0,r.kt)("p",null,"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"rav1e -i input.y4m -o output.ivf --quantizer 60 --photon-noise 8\n")),(0,r.kt)("p",null,"Basic usage with FFmpeg piping, 10bit input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 80 --photon-noise 8\n")),(0,r.kt)("p",null,"Basic usage with FFmpeg piping, 10bit input and assuming 4K:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 68 --tile-columns 2 --tile-rows 1 --photon-noise 8\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use 2x1 tiles or ",(0,r.kt)("inlineCode",{parentName:"li"},"tile-columns 2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tile-rows 1")," for 4K (2160p) encoding, this will help with both encoding and decoding.")))}d.isMDXComponent=!0}}]);