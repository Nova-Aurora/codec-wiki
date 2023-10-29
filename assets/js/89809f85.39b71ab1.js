"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9578],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>u});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,u=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return i?o.createElement(u,s(s({ref:t},h),{},{components:i})):o.createElement(u,s({ref:t},h))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<n;d++)s[d]=i[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2414:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=i(7462),a=(i(7294),i(3905));const n={title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},s=void 0,r={permalink:"/blog/embedding-the-un-embeddable",source:"@site/blog/2023-10-29-embedding-the-un-embeddable.md",title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"video",permalink:"/blog/tags/video"},{label:"discord",permalink:"/blog/tags/discord"}],readingTime:8.91,hasTruncateMarker:!0,authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],frontMatter:{title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},nextItem:{title:"AV1 Encoding for Dummies",permalink:"/blog/av1-encoding-for-dummies"}},l={authorsImageUrls:[void 0]},d=[{value:"A Scenario",id:"a-scenario",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"The Website&#39;s End",id:"the-websites-end",level:3},{value:"Discord&#39;s End",id:"discords-end",level:3},{value:"Strengths &amp; Limitations",id:"strengths--limitations",level:2},{value:"Strengths",id:"strengths",level:4},{value:"Limitations",id:"limitations",level:4},{value:"Differences between Sites",id:"differences-between-sites",level:2},{value:"The Lore",id:"the-lore",level:2},{value:"Dwayne",id:"dwayne",level:3},{value:"Discovery",id:"discovery",level:3},{value:"The Experiments &amp; Interactive Site",id:"the-experiments--interactive-site",level:3},{value:"Virality",id:"virality",level:3},{value:"Closing",id:"closing",level:2}],h={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Copyright Disclosure",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Codec Wiki unequivocally condemns any form of piracy, including the unauthorized distribution of copyrighted content. This blog post is intended to educate & inform. You may not use the tools discussed to infringe upon the intellectual property rights of content creators without serious legal risk. We encourage our readers to respect copyright laws & use the tools we discuss here appropriately.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Feature image",src:i(1403).Z,width:"1920",height:"1080"}),"\n",(0,a.kt)("strong",{parentName:"p"},'A 567.14 MB, 12 min 11 s, 2K (2,048 x 858), VP9 + Opus, 6.51 Mbps average, Blender short film "Cosmos Laundromat"')),(0,a.kt)("h2",{id:"a-scenario"},"A Scenario"),(0,a.kt)("p",null,"While chatting in your favorite Discord servers & group chats, you may see a friend send a weird link. You might even consider it suspicious on first glance. It is a video featuring an image of a movie poster with a play button that is almost begging to be clicked. Naturally, you click it."),(0,a.kt)("p",null,"It loads for a second, and to your surprise it is a full-length, 90-minute (sometimes even two hour)-long unauthorized copy of a movie. If you don't know exactly what is going on, you probably sit there dumbfounded as a pixel perfect HD movie plays back. You may have expected a stereotypically muddy, blocky, laggy shitpost, but this has defied your expectations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stolen.shoes",src:i(8224).Z,width:"1088",height:"318"})),(0,a.kt)("p",null,"The truth is, there are ",(0,a.kt)("em",{parentName:"p"},"multiple")," site that do this. Currently, there are five at the time of writing. Below is a list the ones I am currently familiar with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stolen.shoes"},"https://stolen.shoes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.nfp.is"},"https://discord.nfp.is")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://embeds.video"},"https://embeds.video")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://x266.mov/discord-embed"},"https://x266.mov/discord-embed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://autocompressor.net/av1"},"https://autocompressor.net/av1"))),(0,a.kt)("p",null,"The big question is, ",(0,a.kt)("strong",{parentName:"p"},"how do they work?")," Let's get to dissecting."),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"The entire scheme is actually very simple, as it is all just HTML meta tags (If you are familiar with web development, this is all a walk in the park)."),(0,a.kt)("p",null,"The technology's inner working can be divided into two distinct parts. First, let's see how it works on the website's end."),(0,a.kt)("h3",{id:"the-websites-end"},"The Website's End"),(0,a.kt)("p",null,"If you view each website's source, you will find this specific line in each one but they may have a different order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:image" content="https://example.com/i/someimageforthumbnail.jpg">\n<meta property="og:type" content="video.other">\n<meta property="og:video:url" content="https://example.com/v/video.mp4">\n<meta property="og:video:width" content="1920">\n<meta property="og:video:height" content="1080">\n')),(0,a.kt)("p",null,"These are the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," parts of HTML, which dictate metadata for the document itself such as what the website title/name is, cosmetic embed, defining the site's icon, etc. They are usually found in between the ",(0,a.kt)("inlineCode",{parentName:"p"},"<html>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tags. Here's an example of a static HTML site serving one specific video:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico"/>\n  <title>some embed site</title>\n  <meta property="og:image" content="https://www.themoviedb.org/t/p/original/3U0vksjSY9LWe3Dqfr6xkgd3iQP.jpg">\n  <meta property="og:type" content="video.other">\n  <meta property="og:video:url" content="https://upload.wikimedia.org/wikipedia/commons/3/36/Cosmos_Laundromat_-_First_Cycle_-_Official_Blender_Foundation_release.webm">\n  <meta property="og:video:width" content="2048">\n  <meta property="og:video:height" content="858">\n</head>\n<body>\n  <h1>Hi</h1>\n  <p>Just your friendly neighborhood video embed site</p>\n  </body>\n</html>\n')),(0,a.kt)("br",null),"These interactive sites usually deploy a live script, like a Javascript framework. Examples are NodeJS, ExpressJS, Svelte, etc. These are used to parse video and thumbnails realtime so they can be embedded on Discord (or potentially other platforms).",(0,a.kt)("h3",{id:"discords-end"},"Discord's End"),(0,a.kt)("p",null,'Traditionally, Discord\'s media embedder will impose it\'s own video embed size limit (50 MiB) when a user sends a direct video link as usual. But in this case Discord will embed the thumbnail first, not the video. You could say the link "tricks" Discord by showing a "false face" first.'),(0,a.kt)("h2",{id:"strengths--limitations"},"Strengths & Limitations"),(0,a.kt)("p",null,"After a combination of countless hours of observation, rigorous testing throughout the period of a year, and conversations with the sites' creators, the current strengths & limitations of this exploit are enumerated below."),(0,a.kt)("h4",{id:"strengths"},"Strengths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can embed non-web compatible codecs such as ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.x266.mov/docs/video/HEVC"},"HEVC")," in ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.x266.mov/docs/introduction/terminology#mp4--m4v"},"MP4/MOV"),", but the user must be using a compatible browser. ",(0,a.kt)("a",{parentName:"li",href:"https://thorium.rocks"},"Thorium")," or Safari version 13 or greater will work for HEVC playback."),(0,a.kt)("li",{parentName:"ul"},"There is no maximum size. You could embed a video the size of a raw Bluray, although I do not condone this unless you have the necessary legal permissions to do so or you're uploading a Creative Commons licensed movie like Big Buck Bunny while adhering to the restrictions of the applicable Creative Commons license. This also means you can send high bitrate gaming clips to your friends without any restrictions, assuming you already have a place to upload them.")),(0,a.kt)("h4",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can only use ",(0,a.kt)("a",{parentName:"li",href:"https://simple.wikipedia.org/wiki/Hotlinking"},"hotlinks"),", which means direct linking to the video itself ending in the appropriate file extension such as ",(0,a.kt)("inlineCode",{parentName:"li"},".mp4"),". Cloud services like Google Drive or OneDrive will not work for storage."),(0,a.kt)("li",{parentName:"ul"},"You cannot use Discord's CDN (cdn.discordapp.com) as the video source. I assume this is because of Discord's proxy blocking embeds over 50 MiB, but ",(0,a.kt)("strong",{parentName:"li"},"only discord.nfp.is can do this"),", as it ",(0,a.kt)("strong",{parentName:"li"},"proxies cdn.discordapp.com")," itself."),(0,a.kt)("li",{parentName:"ul"},"You cannot embed videos in any resolutions higher than 3840 x 2160, Discord imposes a hard limit for this on all video after it was discovered that some videos could play normally but then be maliciously scaled to ridiculous resolutions during playback to crash Discord.")),(0,a.kt)("h2",{id:"differences-between-sites"},"Differences between Sites"),(0,a.kt)("p",null,"As mentioned before, there are five known sites at the time of writing. They all serve the same function, but one may interest you more than another due to slight differences in features & functionality."),(0,a.kt)("p",null,"Here are the sites, each with one noteworthy special benefit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stolen.shoes"},"https://stolen.shoes")," - Recognition, as it is the OG."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.nfp.is"},"https://discord.nfp.is")," - You can use Discord CDN as video source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://embeds.video"},"https://embeds.video")," - Immediately input video source into the URL (",(0,a.kt)("inlineCode",{parentName:"li"},"https://embeds.video/https://example.com/v/video.mp4"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://x266.mov/discord-embed"},"https://x266.mov/discord-embed")," - Attractive domain, simple layout."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://autocompressor.net/av1"},"https://autocompressor.net/av1")," - Lots of info dump, pretty advanced features.")),(0,a.kt)("p",null,"That concludes the technical overview! Next, let's cover the history of this exploit."),(0,a.kt)("h2",{id:"the-lore"},"The Lore"),(0,a.kt)("h3",{id:"dwayne"},"Dwayne"),(0,a.kt)("p",null,"In around April of 2022, a Reddit user going by the name of u/CreativeGamer03 ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/discordapp/comments/u96kky/someone_sent_this_in_the_memes_channel_and_bruh"},"posted a video on r/discordapp"),' of a link where a GIF of Dwayne "The Rock" Johnson plays caption with "Is this a GIF or is it a video?" When played, a low-quality music video of Rick Astley\'s "Never Gonna Give You Up" plays.'),(0,a.kt)("p",null,"The link used is now unfortunately ",(0,a.kt)("a",{parentName:"p",href:"https://archuser.de/the-rock"},"removed"),"."),(0,a.kt)("h3",{id:"discovery"},"Discovery"),(0,a.kt)("p",null,"On 23rd June 2022, a Discord user ",(0,a.kt)("em",{parentName:"p"},"Clybius")," on the AV1 Community server asked people for ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/video/VP9"},"VP9")," or ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/video/AVC"},"H.264")," videos that were over 100 MB in size. At the time the current 500 MB nitro tier did not exist. They then decided to use a 59 minute 1080p sample video of nature scenery from around the world with a thumbnail featuring a GIF of a waterfall to test the exploit. It worked."),(0,a.kt)("p",null,"He tried shortly afterward with ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/video/AV1"},"AV1"),". Eureka, it also worked:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AV1",src:i(3100).Z,width:"497",height:"421"})),(0,a.kt)("p",null,"Clybius confirmed that this could be patched if discovered. He cites having had the idea from the Dwayne Johnson example above, but forgetting about it for a couple of months. So, it seems this entire concept stemmed from a silly rickroll."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dwayne",src:i(9532).Z,width:"1108",height:"98"})),(0,a.kt)("h3",{id:"the-experiments--interactive-site"},"The Experiments & Interactive Site"),(0,a.kt)("p",null,"After the discovery of AV1 embedding, experimentation brought about the discovery that ",(0,a.kt)("em",{parentName:"p"},"any")," video codec will work as long as the user can decode/play the codec and the container/extension is an MP4, MOV, or WebM. These are all traditionally web-compatible containers. If you're interested in learning about containers, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/introduction/terminology#container"},"Containers")," section on the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/introduction/terminology"},"Terminology")," page."),(0,a.kt)("p",null,"This applies to HEVC, ProRes, ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.x266.mov/docs/audio/AAC#xhe-aac"},"xHE-AAC"),", and other bizarre codecs that are rarely seen on the Web."),(0,a.kt)("p",null,"While experimentating, Clybius converted one their idle domains ",(0,a.kt)("inlineCode",{parentName:"p"},"stolen.shoes")," into an interactive embedder that provided a textbox for a video URL, a thumbnail URL, a width value, & a height value for the desired video. This would be the first website for Discord embedding."),(0,a.kt)("h3",{id:"virality"},"Virality"),(0,a.kt)("p",null,"It's not long before people outside of the AV1 Community discovered ",(0,a.kt)("inlineCode",{parentName:"p"},"stolen.shoes"),", and its popularity increased rapidly. Its use usually involved the illicit distribution of full-length, unauthorized copies of movies; this sometimes happened very shortly after some movies were released. There were a couple notable instances of this happenening that caused quite the stir online each time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The first instance featured the DreamWorks sequel of "Puss in Boots (2011)", "Puss in Boots: The Last Wish (2022)". A 1080p video sourced from a streaming site was the first wake up call that attracted attention to the existence of these embed sites. This example used ',(0,a.kt)("inlineCode",{parentName:"li"},"stolen.shoes"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"puss",src:i(8224).Z,width:"1088",height:"318"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The second instance was when highly-anticipated animated film "The Super Mario Bros. Movie (2023)" produced by Illumination, Universal Studios, and Nintendo was spread around Discord. It was first spotted as a Cam (A camera recording by someone in theaters), then as it went out on streaming services a different link appeared but spread faster and with upgraded 1080p quality. Both used ',(0,a.kt)("inlineCode",{parentName:"li"},"stolen.shoes")," as the embed site.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mario",src:i(4556).Z,width:"1307",height:"335"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The third instance is very recent as of the day this was posted. A streaming-service sourced "Five Nights at Freddy\'s (2023)" was spread around since the movie released both in theaters and streaming service (Peacock) day one, and it gained steam extremely fast as most people had not seen it yet. Currently, this illegal novelty is gaining ',(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/discordapp/comments/17hx45y/is_discordnfp_an_ip_grabber/"},"hundreds of upvotes within the r/discordapp subreddit"),". The copy seems to be a compressed 720p encode. This example used ",(0,a.kt)("inlineCode",{parentName:"li"},"discord.nfp.is"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fnaf",src:i(8722).Z,width:"1044",height:"409"})),(0,a.kt)("p",null,"Note the ones listed here are the ones that I saw become extremely popular. There may be lesser known links that have been spread around privately or just did not cause enough noise for me to notice. Some less popular examples I've noticed, featuring more illicit copyrighted content distribution: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Top Gun Maverick (2022)"),(0,a.kt)("li",{parentName:"ul"},"The SpongeBob trilogy (2005/2015/2020)"),(0,a.kt)("li",{parentName:"ul"},"Spider-Man: Across the Spider-Verse (2023)")),(0,a.kt)("h2",{id:"closing"},"Closing"),(0,a.kt)("p",null,"The ability to embed unusually large videos on Discord has enabled both positive and negative use cases. On the one hand, it allows high-quality content to be shared easily among friends. However, it has also facilitated mass copyright infringement by empowering virtually anyone with a Discord accound to freely spread pirated movies."),(0,a.kt)("p",null,"While this is fascinating from a technical perspective, embedding techniques like these tread a fine ethical line. As with anything, it is important to be mindful of how our actions affect others, and I should remind everyone that content creators deserve to be compensated for their work. As users, we should support them by accessing their content via legitimate platforms."),(0,a.kt)("p",null,"It is hard to say how long this exploit will continue to be usable. Instead of enabling piracy, which may cause Discord to be more likely to patch this exploit if they see it as a serious threat, let's instead use these capabilities responsibly to share our own creations, gaming highlights, and other media which we can share legally. Given some thoughtfulness, perhaps we can find a fair balance between respecting copyright law and appeasing Discord's sensibilities while allowing some creative flexibility on the platform."),(0,a.kt)("p",null,"Thank you for reading this blog post, I hope you learned something!"))}c.isMDXComponent=!0},3100:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/clybius-av1-28dcfefe8d58784301332b8119d2e926.webp"},9532:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/clybius-dwayne-15341f187cb8e7dbfd5c4ee00451eabd.webp"},1403:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/discord-embed-blog-image-2bcaf4f73f5fa33664328756753f3041.webp"},8722:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/discordnfpis-fnaf-dab5b24a63605605e7c7882d20a992a3.webp"},4556:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/stolenshoes-mario-6de3b4071d4c09064d7323fec40530f4.webp"},8224:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/stolenshoes-puss-842a1f9165b7571d293a74be89da25c2.webp"}}]);