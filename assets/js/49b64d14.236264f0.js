"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5993],{7490:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=i(4848),s=i(8453),r=i(1470),o=i(9365);const a={title:"SVT-AV1",sidebar_position:5},l="SVT-AV1",c={id:"encoders/SVT-AV1",title:"SVT-AV1",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/encoders/SVT-AV1.mdx",sourceDirName:"encoders",slug:"/encoders/SVT-AV1",permalink:"/docs/encoders/SVT-AV1",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/SVT-AV1.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SVT-AV1",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"aomenc",permalink:"/docs/encoders/aomenc"},next:{title:"rav1e",permalink:"/docs/encoders/rav1e"}},d={},h=[{value:"Community Forks",id:"community-forks",level:2},{value:"SVT-AV1-PSY",id:"svt-av1-psy",level:3},{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Supported Color Space",id:"supported-color-space",level:2},{value:"Installation",id:"installation",level:2},{value:"Encoding",id:"encoding",level:2},{value:"Strengths",id:"strengths",level:3},{value:"Weaknesses",id:"weaknesses",level:3},{value:"Encoder Optimization",id:"encoder-optimization",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"svt-av1",children:"SVT-AV1"}),"\n",(0,n.jsx)(t.admonition,{title:"Under Maintenance",type:"info",children:(0,n.jsx)(t.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,n.jsxs)(t.p,{children:['SVT-AV1 (Scalable Video Technology for AV1) is an AV1-compliant software encoder/decoder library. Jointly developed by Intel and Netflix, SVT-AV1 is written almost entirely in C with some parts written in C++ and Assembly. As the name suggests, it is part of the "',(0,n.jsx)(t.a,{href:"https://www.intel.com/content/www/us/en/developer/articles/technical/scalable-video-technology.html",children:"Scalable Video Technology"}),'" project lineup by Intel.']}),"\n",(0,n.jsxs)(t.p,{children:['This entry discusses the SVT-AV1 encoder, also known as the "Production" AV1 encoder (while ',(0,n.jsx)(t.a,{href:"/docs/encoders/aomenc",children:"aomenc"}),' is the "reference" AV1 encoder), & refers to SVT-AV1 as such. SVT-AV1 is known for its parallelization, high coding efficiency, & active development. SVT-AV1 scales across multiple CPU cores much more effectively than aomenc or ',(0,n.jsx)(t.a,{href:"/docs/encoders/rav1e",children:"rav1e"}),", so the use of tools like ",(0,n.jsx)(t.a,{href:"/docs/utilities/av1an",children:"Av1an"})," is less helpful albeit still helpful for scene detection."]}),"\n",(0,n.jsx)(t.h2,{id:"community-forks",children:"Community Forks"}),"\n",(0,n.jsxs)(t.p,{children:["Currently, there is only one noteworthy community fork of SVT-AV1 called ",(0,n.jsx)(t.a,{href:"https://github.com/gianni-rosato/svt-av1-psy",children:"SVT-AV1-PSY"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"svt-av1-psy",children:"SVT-AV1-PSY"}),"\n",(0,n.jsxs)(t.p,{children:["SVT-AV1-PSY is a community fork of SVT-AV1 that strives to improve the perceptual fidelity and quality of life provided by the encoder. The goal of this project is to create the best encoding implementation for perceptual quality with AV1, and it aims to surpass previous community forks of ",(0,n.jsx)(t.a,{href:"/docs/encoders/aomenc#choosing-forks",children:"aomenc"})," in speed and visual quality."]}),"\n",(0,n.jsxs)(t.p,{children:["SVT-AV1-PSY has a number of feature additions to the mainline SVT-AV1 encoder as well as modified defaults that aim to make it easier to produce a more perceptually optimal bistream. For a full list of the encoder's feature additions and modifications to defaults, see the ",(0,n.jsx)(t.a,{href:"https://github.com/gianni-rosato/svt-av1-psy/blob/master/README.md#feature-additions",children:"project's README"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["SVT-AV1-PSY is used by default in ",(0,n.jsx)(t.a,{href:"/docs/utilities/Aviator",children:"Aviator"})," and can be used in ",(0,n.jsx)(t.a,{href:"/docs/utilities/rav1ator-cli",children:"rAV1ator CLI"})," by using the pre-compiled binaries available with the tool or by building a binary yourself."]}),"\n",(0,n.jsx)(t.p,{children:"SVT-AV1-PSY is a superset of SVT-AV1, meaning any valid SVT-AV1 command will work with SVT-AV1-PSY given the modified defaults do not conflict with the settings provided."}),"\n",(0,n.jsx)(t.h2,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,n.jsxs)(t.p,{children:["SVT-AV1 is available in FFmpeg via ",(0,n.jsx)(t.code,{children:"libsvtav1"}),", to check if you have it, run ",(0,n.jsx)(t.code,{children:"ffmpeg -h encoder=libsvtav1"}),". You can input non-FFmpeg standard SVT-AV1 parameters via ",(0,n.jsx)(t.code,{children:"-svtav1-params"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"supported-color-space",children:"Supported Color Space"}),"\n",(0,n.jsx)(t.p,{children:"SVT-AV1 supports the following color spaces:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Format"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chroma Subsampling"}),(0,n.jsx)(t.th,{children:"Supported Bit Depth(s)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"YUV420P"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,n.jsx)(t.td,{children:"8-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"YUV420P10LE"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,n.jsx)(t.td,{children:"10-bit"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsxs)(o.A,{value:"unixlike",label:"Linux & macOS",children:[(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["A precompiled AVX2-optimized binary of SVT-AV1-PSY can be installed for x86_64 Linux via ",(0,n.jsx)(t.a,{href:"/docs/utilities/rav1ator-cli",children:"rAV1ator CLI"}),". However, it is always recommended to build from source."]})}),(0,n.jsx)(t.p,{children:"To build SVT-AV1 from source, first clone the desired SVT-AV1 repository & enter the build directory."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Clone mainline SVT-AV1"',children:"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ngit reset --hard 2aeeb4f1a1d495b84bf5c21dbb60ae10e991fada # Reset to release 2.0.0\ncd SVT-AV1/Build/linux\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Clone SVT-AV1-PSY"',children:"git clone https://github.com/gianni-rosato/svt-av1-psy\ncd SVT-AV1/Build/linux\n"})}),(0,n.jsxs)(t.p,{children:["In the directory, simply run ",(0,n.jsx)(t.code,{children:"./build.sh [flags]"})," to build. Be aware that building requires CMake version 3.16 or higher and either GCC or Clang. It is recommended to use clang when building SVT-AV1."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Build release"',children:"./build.sh release\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Statically build just the encoder with clang and enable link-time optimization"',children:"./build.sh jobs=8 all cc=clang cxx=clang++ no-dec enable-lto static native\n"})}),(0,n.jsxs)(t.p,{children:["The compiled binaries will be in the ",(0,n.jsx)(t.code,{children:"Bin/Release"})," directory, including SvtAv1EncApp. If you just want the encoder, adding the ",(0,n.jsx)(t.code,{children:"no-dec"})," flag will skip building SvtAv1DecApp and save on compilation time."]}),(0,n.jsxs)(t.p,{children:["If you'd like to build from the latest release (2.0.0 at the time of writing - last updated 16 Apr 2024) please run ",(0,n.jsx)(t.code,{children:"git reset --hard 2aeeb4f1a1d495b84bf5c21dbb60ae10e991fada"})," in the cloned directory. It is recommended that you do this, as new changes to git aren't always stable right away & a release will guarantee more stability."]}),(0,n.jsxs)(t.p,{children:["If you want extra performance, it is possible to build SVT-AV1 using PGO (Profile-guided Optimization). ",(0,n.jsxs)(t.strong,{children:["Be aware that this particular script infers that you have a .y4m file (or multiple) in ",(0,n.jsx)(t.code,{children:"/dev/shm"})," for transcoding"]}),". You can compile statically linked SVT-AV1 with PGO (and LTO, or link-time optimization) by following this script:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Bulding SVT-AV1 with profile guided optimization"',children:"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ncd SVT-AV1/Build/linux\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-videos=/dev/shm release\n"})}),(0,n.jsx)(t.p,{children:"If you wish to store videos elsewhere or provide custom parameters to the SvtAv1EncApp binary, try this script:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ncd SVT-AV1/Build/linux\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-gen release\n../../Bin/Release/SvtAv1EncApp # Run this binary as many times as you'd like with arguments of your choice to collect data\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-use release\n"})})]}),(0,n.jsx)(o.A,{value:"windows",label:"Windows",children:(0,n.jsxs)(t.p,{children:["To be filled. If you believe you can help, see our ",(0,n.jsx)(t.a,{href:"/docs/contribution-guide",children:"Contribution Guide"}),"."]})})]}),"\n",(0,n.jsx)(t.h2,{id:"encoding",children:"Encoding"}),"\n",(0,n.jsx)(t.h3,{id:"strengths",children:"Strengths"}),"\n",(0,n.jsx)(t.p,{children:"SVT-AV1's greatest strength is its parallelization capability, where it outclasses other AV1 encoders by a significant margin. SVT-AV1's parallelization techniques do not involve tiling & don't harm video quality, & can comfortably utilize up to 16 cores given 1080p source video. This is while maintaining competitive coding efficiency to mainline aomenc. Perceptually, mainline SVT-AV1 is outperformed by well-tuned community forks of aomenc, but according to many the gap has begun to close with the introduction of SVT-AV1-PSY."}),"\n",(0,n.jsx)(t.h3,{id:"weaknesses",children:"Weaknesses"}),"\n",(0,n.jsxs)(t.p,{children:["SVT-AV1 is strongest on x86 CPUs, & while ARM NEON assembly is ",(0,n.jsx)(t.a,{href:"https://gitlab.com/AOMediaCodec/SVT-AV1/-/commit/ba13fac241f1b54954935f2cb200efc07f3de13a",children:"available"})," and has been slowly improving since its introduction in version 1.8.0, SVT-AV1 still underperforms on ARM. For this reason, it is not a good cross-architecture CPU benchmark. SVT-AV1's support for various AV1 features is also limited; it only supports up to 4:2:0 chroma subsampling with no support for 12-bit color, and it does not support scene change detection (there are no plans to implement this, either). The smallest possible video that SVT-AV1 can produce is 64x64."]}),"\n",(0,n.jsx)(t.h3,{id:"encoder-optimization",children:"Encoder Optimization"}),"\n",(0,n.jsxs)(t.p,{children:["Aside from build optimizations for speed, there is further tweaking to be done to the ",(0,n.jsx)(t.code,{children:"SvtAv1EncApp"})," binary parameters when encoding. The following applies to mainline SVT-AV1, but does not apply to SVT-AV1-PSY."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--film-grain"})," & ",(0,n.jsx)(t.code,{children:"--film-grain-denoise"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Most live-action sources feature hard-to-compress digital noise that is easily smoothed out by AV1 compression. To add this grain back, or even denoise through the encoder and then add grain, it is possible to use the ",(0,n.jsx)(t.code,{children:"--film-grain"})," parameter to specify an amount of film grain to add to the encode (& ",(0,n.jsx)(t.code,{children:"--film-grain-denoise"})," to specify how to denoise the input video before encoding for potentially better appeal). Denoising a video always removes fine details, so sticking with just ",(0,n.jsx)(t.code,{children:"--film-grain"})," is recommended in most cases. According to ",(0,n.jsx)(t.a,{href:"https://gitlab.com/AOMediaCodec/SVT-AV1/-/blob/master/Docs/CommonQuestions.mdx#practical-advice-on-grain-synthesis",children:"SVT-AV1 documentation"}),", a level of 8 should be used for live-action content with a normal amount of grain while a level of 4 works well for hand-drawn animation or other smoother-looking sources that still stand to benefit from some grain synthesis."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--input-depth 10"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"10-bit output from AV1 encoding is always desirable for coding efficiency, even if your source is 8-bit. This option only produces a 10-bit AV1 bitstream if the source provided to the encoder is 10-bit."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--tune 2"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There are three tunes in mainline SVT-AV1: Tune 1 is for ",(0,n.jsx)(t.a,{href:"/docs/metrics/PSNR",children:"PSNR"})," ",(0,n.jsx)(t.a,{href:"/docs/introduction/psychovisual",children:"RDO"}),", Tune 2 is for ",(0,n.jsx)(t.a,{href:"/docs/metrics/SSIM",children:"SSIM"})," RDO, & Tune 0 is a ",(0,n.jsx)(t.a,{href:"/docs/introduction/psychovisual",children:"psychovisual"})," tune labeled VQ. It has been common practice to lean away from the PSNR tune, as it is not designed for visual quality but rather to perform better on the PSNR metric which is widely considered to be inconsistent with our human perception of fidelity. Using the VQ tune is a safe bet for now, but many believe the newer SSIM tune provides better visual fidelity. Using SVT-AV1-PSY, the custom Subjective SSIM tune (Tune 3) provides the best of both Tune 2 & Tune 0 with additional improvements as well."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--enable-qm 1"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Enables quantization matrices, disabled by default. Improves coding efficiency mainly by improving encoding speed while producing similar quality video."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--qm-min 0"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Sets the minimum flatness of quantization matrices to 0, down from the default 8. This is recommended unless you are dealing with extremely heavy grain. The maximum quantization matrix flatness is 15 by default, and should be left alone"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--keyint [FPS*10]"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.code,{children:"--kf-max-dist"})," in ",(0,n.jsx)(t.a,{href:"/docs/encoders/vpxenc",children:"vpxenc"}),", this tells the encoder when to place keyframes. Because SVT-AV1 doesn't have scene detection, this isn't the maximum distance between keyframes, but rather a fixed interval for placing keyframes. If using Av1an, set to -1 to disable keyframe insertion as Av1an handles that instead."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--irefresh-type 2"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Intra refresh is specified through this option, & lets the user decide between Closed GOP & Open GOP. GOP stands for Group of Pictures. Open GOP allows GOPs to ",(0,n.jsx)(t.a,{href:"https://ottverse.com/closed-gop-open-gop-idr/",children:"reference one another"}),", but support for this feature is currently incomplete. Therefore, it is recommended to use Closed GOP for the time being via ",(0,n.jsx)(t.code,{children:"--irefresh-type 2"})," until this is rectified."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--preset X"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"SVT-AV1 can be used in 14 different presets, labeled -1 through 13. Preset -1 is the slowest, but provides the best coding efficiency; it is also dubbed a research preset that is not recommended for regular use. Preset 13 is the fastest, and is also not recommended for regular use as it makes serious trade-offs to achieve unrealistically fast speeds at the cost of the encoder's coding efficiency. Using presets 2 through 8 is the best course of action for non-realtime applications if you desire reasonable speed, while 9 through 12 are useful for real-time encoding at 1080p or lower, even on low-end consumer computer hardware."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"--crf X"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"CRF is the best way to target quality for optimal visual fidelity. VBR & CBR lose efficiency due to their inherently limited rate control capabilities."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var n=i(8215);const s={tabItem:"tabItem_Ymn6"};var r=i(4848);function o(e){let{children:t,hidden:i,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:i,children:t})}},1470:(e,t,i)=>{i.d(t,{A:()=>j});var n=i(6540),s=i(8215),r=i(3104),o=i(6347),a=i(205),l=i(7485),c=i(1682),d=i(9466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function p(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,r=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,h]=m({queryString:i,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,r]),tabValues:r}}var b=i(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(4848);function x(e){let{className:t,block:i,selectedValue:n,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),s=a[i].value;s!==n&&(c(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:a.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function V(e){let{lazy:t,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(V,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(t))}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);