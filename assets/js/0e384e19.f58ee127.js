"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Introduction",sidebar_position:1},s="All About Trunk Recorder",i={unversionedId:"intro",id:"intro",title:"All About Trunk Recorder",description:"Sponsors",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/TrunkRecorder/trunkrecorder.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Linux Install",permalink:"/docs/Install/INSTALL-LINUX"}},l={},u=[{value:"Sponsors",id:"sponsors",level:2},{value:"Overview",id:"overview",level:2},{value:"Install",id:"install",level:2},{value:"Linux",id:"linux",level:3},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"MacOS",id:"macos",level:3},{value:"Setup",id:"setup",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"How Trunking Works",id:"how-trunking-works",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"all-about-trunk-recorder"},"All About Trunk Recorder"),(0,o.kt)("h2",{id:"sponsors"},"Sponsors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do you find Trunk Recorder and OpenMHz useful?"),"\nBecome a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/robotastic"},"Sponsor")," to help support continued development and operation!\nThank you to everyone who has contributed!"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Need help? Got something working? Share it!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/btJAhESnks"},"Discord Server")," - and don't forget the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/robotastic/trunk-recorder/wiki"},"Wiki")),(0,o.kt)("p",null,"Trunk Recorder is able to record the calls on trunked and conventional radio systems. It uses 1 or more Software Defined Radios (SDRs) to do this. The SDRs capture large swathes of RF and then use software to process what was received. ",(0,o.kt)("a",{parentName:"p",href:"https://gnuradio.org/"},"GNU Radio")," is used to do this processing because it provides lots of convenient RF blocks that can be pieced together to allow for complex RF processing. The libraries from the amazing ",(0,o.kt)("a",{parentName:"p",href:"http://op25.osmocom.org/trac/wiki"},"OP25")," project are used for a lot of the P25 functionality. Multiple radio systems can be recorded at the same time."),(0,o.kt)("p",null,"Trunk Recorder currently supports the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trunked P25 & SmartNet Systems"),(0,o.kt)("li",{parentName:"ul"},"Conventional P25 & analog systems, where each group has a dedicated RF channel"),(0,o.kt)("li",{parentName:"ul"},"P25 Phase 1, P25 Phase 2 & Analog voice channels")),(0,o.kt)("p",null,"Supported platforms:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ubuntu")," (18.04,  20.04, 21.04, 22.04, 23.04); ",(0,o.kt)("strong",{parentName:"p"},"Raspberry Pi")," (Raspberry OS/Raspbian & Ubuntu 21.04, 22.04); ",(0,o.kt)("strong",{parentName:"p"},"Arch Linux")," (2021.09.20); ",(0,o.kt)("strong",{parentName:"p"},"Debian")," (9.x); ",(0,o.kt)("strong",{parentName:"p"},"macOS")),(0,o.kt)("p",null,"GNU Radio 3.7 - 3.10"),(0,o.kt)("p",null,"...and SDRs:"),(0,o.kt)("p",null,"RTL-SDR dongles; HackRF; Ettus USRP B200, B210, B205; BladeRF; Airspy"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Install/INSTALL-DOCKER"},"Docker")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Install/INSTALL-LINUX"},"From Source"))),(0,o.kt)("h3",{id:"raspberry-pi"},"Raspberry Pi"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Install/INSTALL-DOCKER"},"Docker")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Install/INSTALL-PI"},"From Source")," - ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/DizBtDZ6kE8"},"Video Walkthrough"))),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Install/INSTALL-MAC#using-homebrew"},"From Source"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/CONFIGURE"},"Configuring a system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/FAQ"},"FAQ"))),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If are having trouble, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/FAQ"},"FAQ")," and/or ask a question on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/btJAhESnks"},"Discord Server")," "),(0,o.kt)("h2",{id:"how-trunking-works"},"How Trunking Works"),(0,o.kt)("p",null,"For those not familiar, trunking systems allow a large number of user groups to share a limited number of radio frequencies by temporarily, dynamically assigning radio frequencies to talkgroups (channels) on-demand. It is understood that most user groups actually use the radio very sporadically and don't need a dedicated frequency. "),(0,o.kt)("p",null,'Most trunking system types (such as SmartNet and P25) set aside one of the radio frequencies as a "control channel" that manages and broadcasts radio frequency assignments. When someone presses the Push to Talk button on their radio, the radio sends a message to the system which then assigns a voice frequency and broadcasts a Channel Grant message about it on the control channel. This lets the radio know what frequency to transmit on and tells other radios set to the same talkgroup to listen.'),(0,o.kt)("p",null,"In order to follow all of the transmissions, Trunk Recorder constantly listens to and decodes the control channel. When a frequency is granted to a talkgroup, Trunk Recorder creates a monitoring process which decodes the portion of the radio spectrum for that frequency from the SDR that is already pulling it in."),(0,o.kt)("p",null,"No message is transmitted on the control channel when a conversation on a talkgroup is over. The monitoring process keeps track of transmissions and if there has been no activity for a specified period, it ends the recording."))}d.isMDXComponent=!0}}]);