"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[6492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={label:"Opus",sidebar_position:2},r="Opus",s={unversionedId:"audio/Opus",id:"audio/Opus",title:"Opus",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/audio/Opus.md",sourceDirName:"audio",slug:"/audio/Opus",permalink:"/docs/audio/Opus",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/audio/Opus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{label:"Opus",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AAC",permalink:"/docs/audio/AAC"},next:{title:"Dolby Digital",permalink:"/docs/audio/Dolby"}},l={},p=[{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"SILK",id:"silk",level:3},{value:"CELT",id:"celt",level:3},{value:"Encoders",id:"encoders",level:2},{value:"Opusenc",id:"opusenc",level:3},{value:"FFopus",id:"ffopus",level:3},{value:"vac-enc",id:"vac-enc",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opus"},"Opus"),(0,o.kt)("admonition",{title:"Under Maintenance",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The content in this entry is incomplete & is in the process of being completed.")),(0,o.kt)("p",null,"Opus is an open-source audio codec that has largely replaced ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/Vorbis"},"Vorbis")," as the standard open audio codec. It is the recommended codec for usage in WebM video containers in tandem with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/video/VP9"},"VP9")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/video/AV1"},"AV1")," video codecs."),(0,o.kt)("p",null,"Opus is known for its incredible coding efficiency and unique multi-channel optimizations. Stereo Opus audio reaches ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transparency_(data_compression)"},"transparency")," (psychoacoustically lossless audio quality) at 128kb/s, compared to ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/AAC"},"AAC"),"'s generally agreed upon 256kb/s and ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/MP3"},"MP3"),"'s 320kb/s. Transparency varies based on the type of content & the encoding implementation used, especially for codecs other than Opus, and the values provided above may be debated to a degree."),(0,o.kt)("p",null,"Opus is described on ",(0,o.kt)("a",{parentName:"p",href:"https://opus-codec.org/"},"opus-codec.org"),' as a "totally open, royalty-free, highly versatile audio codec. Opus is unmatched for interactive speech and music transmission over the Internet, but is also intended for storage and streaming applications. It is standardized by the Internet Engineering Task Force (IETF) as ',(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6716"},"RFC 6716"),' which incorporated technology from Skype\u2019s SILK codec and Xiph.Org\u2019s CELT codec."'),(0,o.kt)("p",null,"Opus supports the following features:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Bitrates from 6 kb/s to 510 kb/s"),(0,o.kt)("li",{parentName:"ul"},"Sampling rates from 8 kHz (narrowband) to 48 kHz (fullband)"),(0,o.kt)("li",{parentName:"ul"},"Frame sizes from 2.5 ms to 60 ms"),(0,o.kt)("li",{parentName:"ul"},"Support for both constant bitrate (CBR) and variable bitrate (VBR)"),(0,o.kt)("li",{parentName:"ul"},"Audio bandwidth from narrowband to fullband"),(0,o.kt)("li",{parentName:"ul"},"Support for speech and music"),(0,o.kt)("li",{parentName:"ul"},"Support for mono and stereo"),(0,o.kt)("li",{parentName:"ul"},"Support for up to 255 channels (multistream frames)"),(0,o.kt)("li",{parentName:"ul"},"Dynamically adjustable bitrate, audio bandwidth, and frame size"),(0,o.kt)("li",{parentName:"ul"},"Good loss robustness and packet loss concealment (PLC)"),(0,o.kt)("li",{parentName:"ul"},"Floating point and fixed-point implementation"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"via opus-codec.org"),"."),(0,o.kt)("h2",{id:"format-breakdown"},"Format Breakdown"),(0,o.kt)("p",null,"Opus is a hybrid audio codec, composed of two codecs as mentioned above. These are Skype's SILK codec for voice & Xiph.Org's CELT codec. Opus's initial name, Harmony, may have been because of the \"harmony\" of these two codecs and the musical connotation of harmony."),(0,o.kt)("h3",{id:"silk"},"SILK"),(0,o.kt)("p",null,"SILK, initially from Skype, was designed to be used for voice calls on Microsoft products like Skype. The first stable release of the codec was in 2009, and since then it has been freely licensed under the BSD 2-Clause license which has allowed for its adoption into Opus. The version of SILK used in Opus is substantially modified from - and not compatible with - the standalone SILK codec previously described here."),(0,o.kt)("p",null,"SILK is optimized for speech, and so has limited sample rates as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Narrowband: 3-4000hz\nMediumband: 3-6000hz\nWideband: 3-8000hz")),(0,o.kt)("p",null,"SILK's latency is 10 to 60ms based on the desired framesize + 5ms lookahead to estimate noise shaping + (potentially) 1.5ms sampling rate conversion overhead if the input audio needs to be resampled."),(0,o.kt)("h3",{id:"celt"},"CELT"),(0,o.kt)("p",null,'Much like SILK, CELT is under the BSD 2-Clause license. The preview release came out in 2011. CELT stands for "Code-Excited Lapped Transform" and was designed to be the true successor to Vorbis, even being dubbed as "Vorbis II" during its initial development as part og Xiph.Org\'s "Ghost" project in 2005.'),(0,o.kt)("p",null,"CELT was designed to be a full-band general purpose codec without a particular specialization for a certain kind of audio, making it distinctly different from Xiph's ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/Speex"},"Speex")," codec & more similar to Vorbis. It is computationally simple relative to competing codec technologies like ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/AAC"},"AAC")," & even Vorbis, enabling extremely low latency that is competitive with ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/AAC#aac-ld--aac-eld"},"AAC-LD"),"."),(0,o.kt)("p",null,"CELT can work with the following sample rates:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Narrowband: 3-4000hz\nMediumband: 3-6000hz\nWideband: 3-8000hz\nSuperWideband: 3-12000hz\nFullband: 3-20000hz")),(0,o.kt)("h2",{id:"encoders"},"Encoders"),(0,o.kt)("h3",{id:"opusenc"},"Opusenc"),(0,o.kt)("p",null,"Opus's reference encoder is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xiph/opus"},"opusenc"),", which is known for its fantastic performance and versatility. It is licensed under the BSD 3-clause license as part of the reference libopus library. There are a myriad of options that may be used to encode with opusenc, but the utility is considered to have sane encoding defaults for local storage & playback. The best options will be outlined below."),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"opusenc [options] input_file output_file.opus")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--bitrate #.###")," Sets the overall target bitrate in kbit/s. Most encoders use ",(0,o.kt)("em",{parentName:"p"},"bits"),' per second, meaning you have to specify "128K" for 128kbit/s for example. Opus doesn\'t follow this, so you\'d just have to type "128" though keep in mind using efficient VBR encoding means the final bitrate may be different than the target. Opus supports bitrates from 6 kb/s to 510 kb/s.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--vbr")," Tells the encoder to encode using a variable bit rate, allocating more or less bits when necessary to preserve overall fidelity per bit. This is the best option for local storage & playback, and is ",(0,o.kt)("em",{parentName:"p"},"enabled by default."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--cvbr")," Tells the encoder that it is allowed to vary the bitrate like with VBR, but it must constrain the maximum bitrate at any given moment to the value provided.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--hard-cbr")," Tells the encoder to use a constant bitrate the whole time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--music")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"--speech")," Forces the AI content-detector built into opusenc to treat the input as either speech or music. The bitrate range where this is relevant is around 12-40kb/s.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--comp #")," Sets the encoder complexity to a value from 0 to 10, 0 being the least complex & 10 being the most. ",(0,o.kt)("em",{parentName:"p"},"The default is 10."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--framesize #")," Sets the maximum encoder frame size in milliseconds. Lowering this is useful for improving latency at the expense of audio quality per bit. It is worth noting that 40 & 60ms framesizes are just multiple 20ms frames stitched together via opusenc's default behavior, and are not considered useful as they just lower the encoder's adaptability which can worsen both latency & coding efficiency. ",(0,o.kt)("em",{parentName:"p"},"The default value is 20."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--expect-loss #")," Percentage value for expected packet loss. Not useful for local encoding & playback, but useful for real-time applications. ",(0,o.kt)("em",{parentName:"p"},"Default value is 0."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--downmix-mono")," Downmixes multiple channels into a single channel.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--downmix-stereo")," Downmixes multiple channels into two channels, left & right, given more than two channels are provided to the encoder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--no-phase-inv")," Disables phase inversion. Helpful when downmixing stereo to mono, although this is the default behavior in that scenario since libopus 1.3. Slightly decreases stereo audio quality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--max-delay #")," Sets maximum container delay in milliseconds, from 0-1000. ",(0,o.kt)("em",{parentName:"p"},"Default is 1000.")))),(0,o.kt)("p",null,"Looking at the default values for the encoder flags, opusenc almost always follows the best practices for every default value. This makes it very easy to use, and it is as simple as plugging in a source of some kind and using only the most basic commands to encode with opus."),(0,o.kt)("p",null,"An example opusenc command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'opusenc "input.wav" "output.opus" --bitrate 96\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/utilities/ffmpeg"},"FFmpeg")," using libopus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -i "input.flac" -c:a libopus -b:a 128K "output.ogg"\n')),(0,o.kt)("p",null,"If you'd like to learn more about opusenc & its recommended default behavior, read this article on ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.xiph.org/Opus_Recommended_Settings#Bandwidth_Transition_Thresholds"},"Opus Recommended Settings"),"."),(0,o.kt)("h3",{id:"ffopus"},"FFopus"),(0,o.kt)("p",null,"FFopus is an experimental native opus encoder from FFmpeg. It is not widely regarded as providing any decent uplift in coding efficiency compared to libopus, and is usually considered worse; its only merit is being able to handle 5.1(side) streams while libopus in FFmpeg cannot. It only implements the CELT part of the Opus codec."),(0,o.kt)("p",null,"FFopus usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -i "input.wma" -c:a opus -b:a 128K -strict -2  "output.opus"\n')),(0,o.kt)("h3",{id:"vac-enc"},"vac-enc"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gianni-rosato/vac-enc"},"VAC"),", or Value Added Codec, is a libopus encoder that uses SoX to resample inputs & supports output to ",(0,o.kt)("inlineCode",{parentName:"p"},".ogg")," rather than exclusively ",(0,o.kt)("inlineCode",{parentName:"p"},".opus"),". Better resampling theoretically leads to better coding efficiency, but vac-enc hasn't been thoroughly tested."),(0,o.kt)("p",null,"Encoding a 16-bit signed little endian ",(0,o.kt)("inlineCode",{parentName:"p"},"pcm_s16le")," WAV to 128kbit/s Opus in an OGG container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vac-enc input.wav output.ogg 128\n")))}d.isMDXComponent=!0}}]);