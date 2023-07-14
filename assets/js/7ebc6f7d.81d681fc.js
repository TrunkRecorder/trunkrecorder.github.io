"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Raspberry Pi Install",sidebar_position:3},l="Raspberry Pi / Debian",i={unversionedId:"Install/INSTALL-PI",id:"Install/INSTALL-PI",title:"Raspberry Pi / Debian",description:"Smaller radio systems can be covered using a Raspberry Pi. If you are interested in doing this, you should really get a Pi 4. It maybe possible to get things running on an older Pi, but you often get unexpect behavior and errors. A Pi 4 can handle 3-4 simulatanious recordings. Make sure you have a good power supply. Also pay attention to heat. If the Pi gets too hot, it will slow down. A good case or fan can help keep it going full tilt. You can also just run debian on a NUC or Miniform PC. These commands will work with a vaneilla debian install as well.",source:"@site/docs/Install/INSTALL-PI.md",sourceDirName:"Install",slug:"/Install/INSTALL-PI",permalink:"/docs/Install/INSTALL-PI",draft:!1,editUrl:"https://github.com/TrunkRecorder/trunkrecorder.github.io/tree/main/docs/Install/INSTALL-PI.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Raspberry Pi Install",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker Install",permalink:"/docs/Install/INSTALL-DOCKER"},next:{title:"Mac Install",permalink:"/docs/Install/INSTALL-MAC"}},s={},u=[{value:"RaspberryOS (aka Raspbian)",id:"raspberryos-aka-raspbian",level:2},{value:"Setup Raspbian",id:"setup-raspbian",level:3},{value:"Download and burn the image",id:"download-and-burn-the-image",level:4},{value:"Setup for headless boot",id:"setup-for-headless-boot",level:4},{value:"Remote Access",id:"remote-access",level:4},{value:"Setup",id:"setup",level:3},{value:"Profile",id:"profile",level:2},{value:"Configuring Trunk Recorder",id:"configuring-trunk-recorder",level:2},{value:"Running trunk recorder.",id:"running-trunk-recorder",level:2},{value:"Runtime options",id:"runtime-options",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raspberry-pi--debian"},"Raspberry Pi / Debian"),(0,a.kt)("p",null,"Smaller radio systems can be covered using a Raspberry Pi. If you are interested in doing this, you should really get a Pi 4. It maybe possible to get things running on an older Pi, but you often get unexpect behavior and errors. A Pi 4 can handle 3-4 simulatanious recordings. Make sure you have a good power supply. Also pay attention to heat. If the Pi gets too hot, it will slow down. A good case or fan can help keep it going full tilt. You can also just run debian on a NUC or Miniform PC. These commands will work with a vaneilla debian install as well."),(0,a.kt)("h2",{id:"raspberryos-aka-raspbian"},"RaspberryOS (aka Raspbian)"),(0,a.kt)("h3",{id:"setup-raspbian"},"Setup Raspbian"),(0,a.kt)("p",null,"This is a ",(0,a.kt)("a",{parentName:"p",href:"https://desertbot.io/blog/headless-raspberry-pi-4-ssh-wifi-setup"},"good guide")," on how to setup a Raspberry Pi in headless mode. This means that you do not have to attach a monitor, keyboard or mouse to it to get it working. The steps below are pulled from this guide."),(0,a.kt)("h4",{id:"download-and-burn-the-image"},"Download and burn the image"),(0,a.kt)("p",null,"The first step is to put the Raspberry Pi OS onto a MicroSD card. You will need to have a USB MicroSD card adaptor, so you can connect it to your computer. Either of these approaches should work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-64-bit"},"Raspberry Pi OS Lite")," image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/software/"},"Install Raspberry Pi OS using Raspberry Pi Imager")," which can download and burn the image above.")),(0,a.kt)("h4",{id:"setup-for-headless-boot"},"Setup for headless boot"),(0,a.kt)("p",null,"After the OS has been written to MicroSD card, we need to change a few files so that the Pi can get on Wifi and also allow for SSH connections. See the ",(0,a.kt)("a",{parentName:"p",href:"https://desertbot.io/blog/headless-raspberry-pi-4-ssh-wifi-setup"},"guide")," for how to do it using Windows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"On a Mac")," ",(0,a.kt)("inlineCode",{parentName:"li"},"touch /Volumes/boot/ssh")),(0,a.kt)("li",{parentName:"ul"},"Next, add the WiFi info",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nano /Volumes/boot/wpa_supplicant.conf"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'country=US\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n\nnetwork={\n    ssid="NETWORK-NAME"\n    psk="NETWORK-PASSWORD"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Eject the MicroSD card (first in the OS and then physhically from the reader)"),(0,a.kt)("li",{parentName:"ul"},"Put the MicroSD card in the Pi and power it on.")),(0,a.kt)("h4",{id:"remote-access"},"Remote Access"),(0,a.kt)("p",null,"This is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/computers/remote-access.html"},"good guide")," for how to find and connect to a Pi on your network. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"These steps should work on a Mac and assume you only have one Pi on the Network")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check to see if it is up: ",(0,a.kt)("inlineCode",{parentName:"li"},"ping raspberrypi.local")),(0,a.kt)("li",{parentName:"ul"},"Clear old known hosts: ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh-keygen -R raspberrypi.local")),(0,a.kt)("li",{parentName:"ul"},"See if you can connect: ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh pi@raspberrypi.local"),"  ",(0,a.kt)("em",{parentName:"li"},"default password is: ",(0,a.kt)("strong",{parentName:"em"},"raspberry")," ")),(0,a.kt)("li",{parentName:"ul"},"Exit: ",(0,a.kt)("inlineCode",{parentName:"li"},"exit")),(0,a.kt)("li",{parentName:"ul"},"Create your SSH keys if you don't have them yet: ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh-keygen")),(0,a.kt)("li",{parentName:"ul"},"Send over you keys: ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh-copy-id pi@raspberrypi.local"))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The following steps setup all of the libraries needed to build Trunk Recorder."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the Debian Multimedia source and include non-free libraries, like ",(0,a.kt)("strong",{parentName:"li"},"fdkaac"),". Edit the sources.list file: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/apt/sources.list\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"and add this line to the end:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deb http://www.deb-multimedia.org/ bullseye main non-free\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the keys for the apt source and install them:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.deb-multimedia.org/pool/main/d/deb-multimedia-keyring/deb-multimedia-keyring_2016.8.1_all.deb\nsudo dpkg -i deb-multimedia-keyring_2016.8.1_all.deb\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the OS:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt upgrade\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add all of the libraries needed:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -y install libssl-dev openssl curl git fdkaac sox libcurl3-gnutls libcurl4 libcurl4-openssl-dev gnuradio gnuradio-dev gr-osmosdr libhackrf-dev libuhd-dev cmake make build-essential libboost-all-dev libusb-1.0-0-dev libsndfile1-dev\n")),(0,a.kt)("p",null,"Configure RTL-SDRs to load correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://raw.githubusercontent.com/osmocom/rtl-sdr/master/rtl-sdr.rules ~/rtl-sdr.rules\nsudo mv ~/rtl-sdr.rules /etc/udev/rules.d/20.rtlsdr.rules\n")),(0,a.kt)("p",null,"You will need to restart for the rules to take effect. Logging out and logging back in will not be enough."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo shutdown -r now\n")),(0,a.kt)("p",null,"Now go ",(0,a.kt)("a",{parentName:"p",href:"#build-trunk-recorder"},"Build")," Trunk Recorder!"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"ubuntu-2204-server-64-bit-support"},"Ubuntu 22.04 Server (64-bit support!)"),(0,a.kt)("p",null,"Ubuntu has a very good ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#1-overview"},"guide")," on setting up Ubuntu Server to run on a Raspberry Pi. Follow this to get started."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt upgrade\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y apt-transport-https build-essential ca-certificates fdkaac git gnupg gnuradio gnuradio-dev gr-osmosdr libboost-all-dev libcurl4-openssl-dev libgmp-dev libhackrf-dev liborc-0.4-dev libpthread-stubs0-dev libssl-dev libuhd-dev libusb-dev pkg-config software-properties-common cmake sox libsndfile1-dev\n")),(0,a.kt)("p",null,"If you are using a HackRF:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y hackrf libhackrf-dev libhackrf0\n")),(0,a.kt)("p",null,"Configure RTL-SDRs to load correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://raw.githubusercontent.com/osmocom/rtl-sdr/master/rtl-sdr.rules  /etc/udev/rules.d/20.rtlsdr.rules\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"building-trunk-recorder"},"Building Trunk Recorder"),(0,a.kt)("p",null,'In order to keep your copy of the Trunk Recorder source code free of build artifacts created by the build process, it is suggested to create a separate "out-of-tree" build directory. We will use ',(0,a.kt)("inlineCode",{parentName:"p"},"trunk-build")," as our build directory."),(0,a.kt)("p",null,"Assuming you are in the desired directory to place both trunk-recorder and trunk-build folders to, perform the following..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\nmkdir trunk-build\ngit clone https://github.com/robotastic/trunk-recorder.git\ncd trunk-build\ncmake ../trunk-recorder\nmake -j `nproc`\nsudo make install\n")),(0,a.kt)("p",null,"Note:  If the Pi hangs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"make -j 'nproc'")," command, try ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," instead (it may take longer but may also prevent locking up the Pi due to all processor cores being 100% in use)"),(0,a.kt)("h2",{id:"profile"},"Profile"),(0,a.kt)("p",null,"(It takes about 15 minutes for this section.)"),(0,a.kt)("p",null,"Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"volk_profile")," to ensure that ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.gnuradio.org/index.php/Volk"},"VOLK (Vector-Optimized Library of Kernels)")," uses the best ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SIMD"},"SIMD (Single instruction, multiple data)")," architecture for your processor."),(0,a.kt)("h2",{id:"configuring-trunk-recorder"},"Configuring Trunk Recorder"),(0,a.kt)("p",null,"The next step is to ",(0,a.kt)("a",{parentName:"p",href:"/docs/CONFIGURE"},"configure Trunk Recorder")," for the system you are trying to capture."),(0,a.kt)("h2",{id:"running-trunk-recorder"},"Running trunk recorder."),(0,a.kt)("p",null,"If all goes well you should now have the executable named ",(0,a.kt)("inlineCode",{parentName:"p"},"trunk-recorder"),", and created the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," configuration file as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robotastic/trunk-recorder/wiki/Configuring-a-System"},"Wiki")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robotastic/trunk-recorder/blob/master/README.md#configure"},"README"),"."),(0,a.kt)("p",null,"From your build directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"trunk-build"),") you can now run\n",(0,a.kt)("inlineCode",{parentName:"p"},"./trunk-recorder")),(0,a.kt)("h3",{id:"runtime-options"},"Runtime options"),(0,a.kt)("p",null,"Trunk Recorder will look for a ",(0,a.kt)("em",{parentName:"p"},"config.json")," file in the same directory as it is being run in. You can point it to a different config file by using the ",(0,a.kt)("em",{parentName:"p"},"--config")," argument on the command line, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"./trunk-recorder --config=examples/config-wmata-rtl.json"),"."))}c.isMDXComponent=!0}}]);