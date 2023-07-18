"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Mac Install",sidebar_position:4},l="MacOS",i={unversionedId:"Install/INSTALL-MAC",id:"Install/INSTALL-MAC",title:"MacOS",description:'There are two main "package managers" used on MacOS: Homebrew and MacPorts. Trunk-recorder can be installed with dependencies from one or the other',source:"@site/docs/Install/INSTALL-MAC.md",sourceDirName:"Install",slug:"/Install/INSTALL-MAC",permalink:"/docs/Install/INSTALL-MAC",draft:!1,editUrl:"https://github.com/TrunkRecorder/trunkrecorder.github.io/tree/main/docs/Install/INSTALL-MAC.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Mac Install",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Raspberry Pi Install",permalink:"/docs/Install/INSTALL-PI"},next:{title:"Configure",permalink:"/docs/CONFIGURE"}},s={},u=[{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Install Homebrew",id:"install-homebrew",level:4},{value:"Install GNURadio and other dependencies",id:"install-gnuradio-and-other-dependencies",level:4},{value:"Install the OsmoSDR Package for GNURadio",id:"install-the-osmosdr-package-for-gnuradio",level:4},{value:"Building Trunk Recorder",id:"building-trunk-recorder",level:4},{value:"Using MacPorts",id:"using-macports",level:2},{value:"These instructions should work on OS X 10.10, OS X 10.11, and macOS 10.12.",id:"these-instructions-should-work-on-os-x-1010-os-x-1011-and-macos-1012",level:3},{value:"Install MacPorts",id:"install-macports",level:4},{value:"Install GNU Radio",id:"install-gnu-radio",level:4},{value:"Install tools to compile Trunk Recorder",id:"install-tools-to-compile-trunk-recorder",level:4},{value:"Install tools for OpenMHz",id:"install-tools-for-openmhz",level:4},{value:"Building Trunk Recorder",id:"building-trunk-recorder-1",level:4},{value:"Configuring Trunk Recorder",id:"configuring-trunk-recorder",level:2},{value:"Running trunk recorder.",id:"running-trunk-recorder",level:2},{value:"Runtime options",id:"runtime-options",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macos"},"MacOS"),(0,a.kt)("p",null,'There are two main "package managers" used on MacOS: ',(0,a.kt)("a",{parentName:"p",href:"#using-homebrew"},"Homebrew")," and ",(0,a.kt)("a",{parentName:"p",href:"#using-macports"},"MacPorts"),". Trunk-recorder can be installed with dependencies from one or the other"),(0,a.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,a.kt)("p",null,"Tested on macOS Ventura 13.2 with the following packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"homebrew 3.6.21"),(0,a.kt)("li",{parentName:"ul"},"cmake 3.25.2"),(0,a.kt)("li",{parentName:"ul"},"gnuradio 3.10.5.1"),(0,a.kt)("li",{parentName:"ul"},"uhd 4.4.0.0"),(0,a.kt)("li",{parentName:"ul"},"pkgconfig 0.29.2"),(0,a.kt)("li",{parentName:"ul"},"cppunit 1.15.1"),(0,a.kt)("li",{parentName:"ul"},"openssl 3.0.7"),(0,a.kt)("li",{parentName:"ul"},"fdk-aac-encoder 1.0.3"),(0,a.kt)("li",{parentName:"ul"},"sox 14.4.2"),(0,a.kt)("li",{parentName:"ul"},"pybind11 2.10.3")),(0,a.kt)("h4",{id:"install-homebrew"},"Install Homebrew"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"the Brew homepage")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')),(0,a.kt)("h4",{id:"install-gnuradio-and-other-dependencies"},"Install GNURadio and other dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install gnuradio uhd cmake pkgconfig cppunit openssl fdk-aac-encoder sox pybind11\n")),(0,a.kt)("h4",{id:"install-the-osmosdr-package-for-gnuradio"},"Install the OsmoSDR Package for GNURadio"),(0,a.kt)("p",null,"See the gr-osmosdr ",(0,a.kt)("a",{parentName:"p",href:"https://osmocom.org/projects/gr-osmosdr/wiki/GrOsmoSDR"},"homepage")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git://git.osmocom.org/gr-osmosdr\ncd gr-osmosdr\nmkdir build && cd build\ncmake ..\nmake -j\nsudo make install\nsudo update_dyld_shared_cache\n")),(0,a.kt)("p",null,"Before continuing with the build instructions, note that you will need to specify the location of the Homebrew libssl libraries during ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-DOPENSSL_ROOT_DIR="),", or you will receive an error from CMake about not finding libssl, or a linking error from ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," about not having a library for ",(0,a.kt)("inlineCode",{parentName:"p"},"-lssl"),".  "),(0,a.kt)("p",null,"This path in Homebrew will differ by system (Apple Silicon:",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/opt/openssl@3")," or macOS Intel:",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/openssl@3"),"), but it can be located automatically as used below:"),(0,a.kt)("h4",{id:"building-trunk-recorder"},"Building Trunk Recorder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir trunk-recorder && cd trunk-recorder\ngit clone https://github.com/robotastic/trunk-recorder.git source\nmkdir build && cd build\ncmake ../source -DOPENSSL_ROOT_DIR=$(brew --prefix openssl@3)\nmake -j\nsudo make install\n")),(0,a.kt)("p",null,"Continue to ",(0,a.kt)("a",{parentName:"p",href:"#configuring-trunk-recorder"},"Configuring Trunk Recorder"),"."),(0,a.kt)("h2",{id:"using-macports"},"Using MacPorts"),(0,a.kt)("h3",{id:"these-instructions-should-work-on-os-x-1010-os-x-1011-and-macos-1012"},"These instructions should work on OS X 10.10, OS X 10.11, and macOS 10.12."),(0,a.kt)("h4",{id:"install-macports"},"Install MacPorts"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.macports.org/install.php"},"the instructions from the MacPorts project to install the appropriate version of MacPorts")," for your version of macOS."),(0,a.kt)("p",null,"If you have already installed MacPorts, make sure your ports tree is up to date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo port selfupdate\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(7/24/21) Note: this has been tested and works on an M1 based Mac. Some dependencies for ",(0,a.kt)("strong",{parentName:"em"},"gr-osmosdr")," do not support ARM64 yet and can be removed by adding a -, eg: -docs")),(0,a.kt)("h4",{id:"install-gnu-radio"},"Install GNU Radio"),(0,a.kt)("p",null,"The preferred method for ",(0,a.kt)("a",{parentName:"p",href:"http://gnuradio.org/redmine/projects/gnuradio/wiki/InstallingGR"},"installing GNU Radio")," on macOS is: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo port install gnuradio uhd gr-osmosdr\n")),(0,a.kt)("h4",{id:"install-tools-to-compile-trunk-recorder"},"Install tools to compile Trunk Recorder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo port install cmake boost libusb cppunit\n")),(0,a.kt)("h4",{id:"install-tools-for-openmhz"},"Install tools for OpenMHz"),(0,a.kt)("p",null,"If you are interested in uploading recordings to OpenMHz, install FDK-AAC and Sox  to convert the Wav files to M4a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo port install sox\n")),(0,a.kt)("p",null,"Download and make ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mstorsjo/fdk-aac"},"libfdk-aac"),".\nextract the source, and cd to the source directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nautoreconf -i\n./configure\nmake\nsudo make install\n")),(0,a.kt)("p",null,"Download and make the command line ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nu774/fdkaac"},(0,a.kt)("strong",{parentName:"a"},"fdkaac")," program"),".\nextract the source, and cd to the source directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"autoreconf -i\n./configure\nmake\nsudo make install\n")),(0,a.kt)("h4",{id:"building-trunk-recorder-1"},"Building Trunk Recorder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir trunk-recorder && cd trunk-recorder\ngit clone https://github.com/robotastic/trunk-recorder.git source\nmkdir build && cd build\ncmake ../source -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl\nmake -j\nsudo make install\n")),(0,a.kt)("h2",{id:"configuring-trunk-recorder"},"Configuring Trunk Recorder"),(0,a.kt)("p",null,"The next step is to ",(0,a.kt)("a",{parentName:"p",href:"/docs/CONFIGURE"},"configure Trunk Recorder")," for the system you are trying to capture."),(0,a.kt)("h2",{id:"running-trunk-recorder"},"Running trunk recorder."),(0,a.kt)("p",null,"If all goes well you should now have the executable named ",(0,a.kt)("inlineCode",{parentName:"p"},"trunk-recorder"),", and created the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," configuration file as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robotastic/trunk-recorder/wiki/Configuring-a-System"},"Wiki")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robotastic/trunk-recorder/blob/master/README.md#configure"},"README"),"."),(0,a.kt)("p",null,"From your build directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"trunk-build"),") you can now run\n",(0,a.kt)("inlineCode",{parentName:"p"},"./trunk-recorder")),(0,a.kt)("h3",{id:"runtime-options"},"Runtime options"),(0,a.kt)("p",null,"Trunk Recorder will look for a ",(0,a.kt)("em",{parentName:"p"},"config.json")," file in the same directory as it is being run in. You can point it to a different config file by using the ",(0,a.kt)("em",{parentName:"p"},"--config")," argument on the command line, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"./trunk-recorder --config=examples/config-wmata-rtl.json"),"."))}p.isMDXComponent=!0}}]);