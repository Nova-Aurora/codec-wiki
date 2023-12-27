"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[268],{825:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(5893),s=n(1151);const r={label:"ffmpeg",sidebar_position:3},o="FFmpeg",d={id:"utilities/ffmpeg",title:"FFmpeg",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/utilities/ffmpeg.mdx",sourceDirName:"utilities",slug:"/utilities/ffmpeg",permalink:"/docs/utilities/ffmpeg",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/ffmpeg.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{label:"ffmpeg",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Av1an",permalink:"/docs/utilities/av1an"},next:{title:"MKVToolNix",permalink:"/docs/utilities/MKVToolNix"}},l={},c=[{value:"Linux &amp; macOS",id:"linux--macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Transmux a video",id:"transmux-a-video",level:4},{value:"Filter a video",id:"filter-a-video",level:4}];function a(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,t.jsx)(i.admonition,{title:"Help Wanted",type:"danger",children:(0,t.jsxs)(i.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,t.jsx)(i.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"//ffmpeg.org",children:"FFmpeg"})," is a multimedia framework that has utilities for transcoding, transmuxing, and filtering audio and video. It provides the ",(0,t.jsx)(i.code,{children:"ffmpeg"}),", ",(0,t.jsx)(i.code,{children:"ffprobe"}),", and ",(0,t.jsx)(i.code,{children:"ffplay"})," command-line utilities. It also features the libav* libraries, which allow you to use the functionality of FFmpeg without the programs."]}),"\n",(0,t.jsx)(i.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i.p,{children:"There are a number of ways to install FFmpeg depending on the operating system you're using."}),"\n",(0,t.jsx)(i.h3,{id:"linux--macos",children:"Linux & macOS"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Package Manager"})}),"\n",(0,t.jsxs)(i.p,{children:["The easiest way to obtain FFmpeg is through your package manager. On most package managers, the package is simply named ",(0,t.jsx)(i.code,{children:"ffmpeg"}),", however ",(0,t.jsx)(i.code,{children:"ffprobe"})," and ",(0,t.jsx)(i.code,{children:"ffplay"})," may have their own packages. Note that the packages may be outdated."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Compiling from source"})}),"\n",(0,t.jsxs)(i.p,{children:["A more complete guide is available at the ",(0,t.jsx)(i.a,{href:"https://trac.ffmpeg.org/wiki/CompilationGuide",children:"FFmpeg Compilation Guide"}),". Simplifying things a bit, what you need to do is:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["grab ",(0,t.jsx)(i.a,{href:"https://ffmpeg.org/download.html",children:"the sources"})," or clone from FFmpeg's git: ",(0,t.jsx)(i.code,{children:"git clone https://git.ffmpeg.org/ffmpeg.git ffmpeg"})]}),"\n",(0,t.jsxs)(i.li,{children:["Enter the directory & run ",(0,t.jsx)(i.code,{children:"./configure --help"})," to see a list of features and libraries you can choose to build with."]}),"\n",(0,t.jsx)(i.li,{children:"Install all libraries you want to build FFmpeg with."}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"./configure"})," with all ",(0,t.jsx)(i.code,{children:"--enable-"})," flags you want."]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"make"}),", or ",(0,t.jsx)(i.code,{children:"make -j $(nproc)"})," on Linux to properly make use of multiple cores. on macOS, this would be ",(0,t.jsx)(i.code,{children:"make -j $(sysctl -n hw.ncpu)"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"make install"}),". May require root."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(i.p,{children:"To be filled."}),"\n",(0,t.jsx)(i.h1,{id:"using-ffmpeg",children:"Using FFmpeg"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ffmpeg"})," is the primary command-line tool of FFmpeg. It takes 0 or more bitstreams as inputs & outputs."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ffmpeg"}),"'s command-line arguments are positional, meaning it matters where you put each option. Each input and output has its own arguments. For example, ",(0,t.jsx)(i.code,{children:"ffmpeg -r 24 -i file1 file2"})," applies the ",(0,t.jsx)(i.code,{children:"-r 24"})," option to the input ",(0,t.jsx)(i.code,{children:"file1"}),", interpreting the video as having that frame rate, while ",(0,t.jsx)(i.code,{children:"ffmpeg -i file1 -r 24 file2"})," applies the ",(0,t.jsx)(i.code,{children:"-r 24"})," option to ",(0,t.jsx)(i.code,{children:"file2"}),". To get a list of options, refer to the ",(0,t.jsx)(i.a,{href:"//ffmpeg.org/ffmpeg-all.html",children:"FFmpeg documentation"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Video Transcoding"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"ffmpeg -i input -c:v video_codec -b:v video_bitrate -c:a audio_codec -b:a audio_bitrate output"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Meaning"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-c:v video_encoder"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"c"}),"odec for the automatically selected ",(0,t.jsx)(i.strong,{children:"v"}),"ideo stream"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-b:v video_bitrate"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"b"}),"itrate for the automatically selected ",(0,t.jsx)(i.strong,{children:"v"}),"ideo stream"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-c:a audio_codec"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"c"}),"odec for the automatically selected ",(0,t.jsx)(i.strong,{children:"a"}),"udio stream"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-b:a audio_bitrate"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"b"}),"itrate for the automatically selected ",(0,t.jsx)(i.strong,{children:"a"}),"udio stream"]})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"transmux-a-video",children:"Transmux a video"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"ffmpeg -i input -c copy output"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Meaning"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-c copy"})}),(0,t.jsxs)(i.td,{children:["set the ",(0,t.jsx)(i.strong,{children:"c"}),"odec to ",(0,t.jsx)(i.strong,{children:"copy"})]})]})})]}),"\n",(0,t.jsx)(i.h4,{id:"filter-a-video",children:"Filter a video"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"ffmpeg -i input -c:v video_encoder -c:a audio_codec (...) -vf filter_name output"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Meaning"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"-vf filter_name"})}),(0,t.jsxs)(i.td,{children:["set the ",(0,t.jsx)(i.strong,{children:"v"}),"ideo ",(0,t.jsx)(i.strong,{children:"f"}),"ilter to ",(0,t.jsx)(i.strong,{children:"filter_name"})]})]})})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"References:"}),"\n",(0,t.jsxs)(i.em,{children:["[^multimediawiki-howtos]: ",(0,t.jsx)(i.a,{href:"//wiki.multimedia.cx/index.php?search=HOWTO&title=Special%3ASearch&go=Go",children:"HOWTO Search Results - MultimediaWiki"})]})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["Special thanks to ",(0,t.jsx)(i.a,{href:"https://encoding.bluefalcon.cc/",children:"bluefalcon's encoding guide"})," for this material, licensed under CC BY-SA 4.0. Our adaptation features formatting changes & content changes, specifically regarding the titles of some headings."]})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>o});var t=n(7294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);