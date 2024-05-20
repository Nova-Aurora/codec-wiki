"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7754],{6820:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),n=t(8453);const r={title:"Vapoursynth",sidebar_position:2},o="Vapoursynth",a={id:"filtering/vapoursynth",title:"Vapoursynth",description:"<source",source:"@site/docs/filtering/vapoursynth.mdx",sourceDirName:"filtering",slug:"/filtering/vapoursynth",permalink:"/docs/filtering/vapoursynth",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/filtering/vapoursynth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Vapoursynth",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/filtering/intro"},next:{title:"Basics of Filtering",permalink:"/docs/filtering/basics"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Microsoft Windows",id:"microsoft-windows",level:3},{value:"Arch Linux",id:"arch-linux",level:3},{value:"Other Linux",id:"other-linux",level:3},{value:"Previewing",id:"previewing",level:2},{value:"Output",id:"output",level:2},{value:"Source Filters",id:"source-filters",level:2},{value:"LSmashSource",id:"lsmashsource",level:3},{value:"ffms2",id:"ffms2",level:3},{value:"BestSource",id:"bestsource",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"vapoursynth",children:"Vapoursynth"}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/vs_edit_script.avif?token=GHSAT0AAAAAACEZPDXJ6SHSUQIMUOGQXQTEZHY7K4A",type:"image/avif"}),(0,s.jsx)("img",{src:"https://autumn.revolt.chat/attachments/g7DucEq3aRGWVH0MHQe-A21GkyDVln9IHzRlfjEYEh/vs_edit_script.png",alt:"Vapoursynth script",width:"520",height:"632"})]}),"\n"," ","\n",(0,s.jsx)(i.p,{children:'"VapourSynth is an application for video manipulation. Or a plugin. Or a library. It\u2019s hard to tell because it has a core library written in C++ and a Python module to allow video scripts to be created."'}),"\n",(0,s.jsx)(i.p,{children:"-- Fredrik Mellbin, creator of VapourSynth"}),"\n",(0,s.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.h3,{id:"microsoft-windows",children:"Microsoft Windows"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["At the current time of writing, Python 3.12 is required. This will change in the future so consult from ",(0,s.jsx)(i.a,{href:"http://www.vapoursynth.com/doc/installation.html",children:"their website"})]}),"\n",(0,s.jsxs)(i.li,{children:["Download the installer (",(0,s.jsx)(i.code,{children:".exe"}),") unless you have a reason for using portable"]}),"\n",(0,s.jsx)(i.li,{children:"Install it"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,s.jsxs)(i.p,{children:["Currently, Arch is the best Linux distribution for working with Vapoursynth due to the fact that\nthe vast majority of filters and plugins are available in the AUR. This makes installing and updating filters easy.\nIf you are not already, we recommend using an AUR helper such as\n",(0,s.jsx)(i.a,{href:"https://github.com/Morganamilo/paru",children:"paru"})," or ",(0,s.jsx)(i.a,{href:"https://github.com/Jguer/yay",children:"yay"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["To install vapoursynth, simply install the ",(0,s.jsx)(i.code,{children:"vapoursynth"})," package from the official repositories using pacman or your preferred AUR helper."]}),"\n",(0,s.jsxs)(i.p,{children:["Plugins are all prefixed with ",(0,s.jsx)(i.code,{children:"vapoursynth-plugin-"}),", such as ",(0,s.jsx)(i.code,{children:"vapoursynth-plugin-lsmashsource-git"}),", and as such can be discovered easily."]}),"\n",(0,s.jsx)(i.h3,{id:"other-linux",children:"Other Linux"}),"\n",(0,s.jsx)(i.p,{children:"Vapoursynth is supported on all Linux distributions. Installation methods may vary by distribution."}),"\n",(0,s.jsx)(i.p,{children:"Contributions would be helpful to provide instructions for more distributions."}),"\n",(0,s.jsx)(i.h2,{id:"previewing",children:"Previewing"}),"\n",(0,s.jsx)(i.p,{children:"There are currently two leading previewers for Vapoursynth. If you want to preview your scripts with capabilities such as seeking,\nyou will need to use one of these applications."}),"\n",(0,s.jsxs)(i.p,{children:["The first is YomkioR's ",(0,s.jsx)(i.a,{href:"https://github.com/YomikoR/VapourSynth-Editor/",children:"Vapoursynth Editor"}),", which includes a built-in code editor alongside a video previewer.\nThis makes it extremely easy to set up for users who are new to Vapoursynth."]}),"\n",(0,s.jsxs)(i.p,{children:["The second is JET's fork of ",(0,s.jsx)(i.a,{href:"https://github.com/Jaded-Encoding-Thaumaturgy/vs-preview",children:"vs-preview"}),", which is a standalone previewer with utilities for\ntasks such as cropping, screenshotting, and uploading comparisons. This tool is more advanced than Vapoursynth Editor, but does not include an editor,\nso you will need to pair it with an editor such as Visual Studio Code. The Github for vs-preview includes instructions for setting this up."]}),"\n",(0,s.jsx)(i.h2,{id:"output",children:"Output"}),"\n",(0,s.jsxs)(i.p,{children:["Vapoursynth provides a command-line utility called ",(0,s.jsx)(i.code,{children:"vspipe"})," for outputting filtered video. Using this utility to pipe y4m video\nis the preferred way to use Vapoursynth with an encoder."]}),"\n",(0,s.jsx)(i.p,{children:"For example, the following command would pipe the output from a Vapoursynth script into x264:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"vspipe -c y4m input.vpy - | x264 --demuxer y4m -o output.mkv -"})}),"\n",(0,s.jsx)(i.h2,{id:"source-filters",children:"Source Filters"}),"\n",(0,s.jsx)(i.p,{children:"For Vapoursynth to produce output, it has to load a video in some way. This way is with source filters."}),"\n",(0,s.jsxs)(i.p,{children:["The most basic method is using ",(0,s.jsx)(i.code,{children:"BlankClip"})," to create a clip of a certain resolution and frame rate. For example, the following\nscript would give us a blank clip at 640x480:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.std.BlankClip(width=640, height=480)\n\nclip.set_output(0)\n"})}),"\n",(0,s.jsx)(i.p,{children:"But a plain black video isn't very useful, is it? We want to load real videos so we can do filtering on them.\nFor this, there are a few different source filters we can look at."}),"\n",(0,s.jsx)(i.h3,{id:"lsmashsource",children:"LSmashSource"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/HomeOfAviSynthPlusEvolution/L-SMASH-Works",children:"LSmashSource"})," is a source filter using lsmash as the underlying source library.\nIt is the most commonly used source filter, and is generally reliable for most source formats, though may have frame accuracy issues\nwhen seeking with certain input formats, such as VC-1. If this is a concern, it can be recommended to encode to lossless first before\nusing any encoding methods that require seeking, such as av1an."]}),"\n",(0,s.jsx)(i.p,{children:"Here is an example of loading a video file using LSmashSource:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.lsmas.LWLibavSource(source="input.mkv")\n\nclip.set_output(0)\n'})}),"\n",(0,s.jsx)(i.h3,{id:"ffms2",children:"ffms2"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/FFMS/ffms2",children:"ffms2"})," is a source filter based on ffmpeg. It generally should give the same results as LSmashSource,\nespecially when using the git version which has fixed support for newer formats such as AV1. If having issues with a source file with LSmashSource,\nffms2 can be a good fallback to try."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.ffms2.Source(source="input.mkv")\n\nclip.set_output(0)\n'})}),"\n",(0,s.jsx)(i.h3,{id:"bestsource",children:"BestSource"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/vapoursynth/bestsource/",children:"BestSource"})," is also based on ffmpeg, but uses additional techniques\nto ensure frame accuracy in all scenarios with all input formats. The downside is that it must decode the entire video\nduring indexing, which means the first load of a given video will take longer. Subsequent loads will be quick, because\nBestSource caches the index in a file."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import vapoursynth as vs\n\ncore = vs.core\n\nclip = core.bs.VideoSource(\n    source="input.mkv",\n    cachepath="/"\n)\n\nclip.set_output(0)\n'})}),"\n",(0,s.jsxs)(i.p,{children:["We add the ",(0,s.jsx)(i.code,{children:'cachepath="/"'})," setting to emulate the behavior of the other source filters, which is to place the index file next to the source video.\nThis helps with portability and cleaning up after ourselves. The default behavior is to place the index file in a temporary directory local to the machine."]})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(6540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);