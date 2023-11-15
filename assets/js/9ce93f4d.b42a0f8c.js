"use strict";(self.webpackChunkmidiremote_v_1_docs=self.webpackChunkmidiremote_v_1_docs||[]).push([[448],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=i,v=s["".concat(l,".").concat(u)]||s[u]||d[u]||a;return t?r.createElement(v,o(o({ref:n},m),{},{components:t})):r.createElement(v,o({ref:n},m))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8328:(e,n,t)=>{t.d(n,{b0:()=>c,jC:()=>a,kI:()=>o});var r=t(7294);const i=e=>n=>{let{children:t}=n,i=[];return r.Children.forEach(t,(e=>{const n=e.props?.children?r.Children.toArray(e.props?.children):[];0===n.length?i.push(e):n.forEach(((e,n)=>{i.push(e)}))})),r.createElement("div",{className:`admonition alert alert--${e}`},r.createElement("div",{className:"admonition-content"},i))},a=i("secondary"),o=i("info"),c=i("danger")},3060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(7462),i=(t(7294),t(3905)),a=t(8328);const o={hide_table_of_contents:!0,slug:"/examples/simpledevice",title:"Simple Device"},c=void 0,l={unversionedId:"Examples/simpledevice",id:"Examples/simpledevice",title:"Simple Device",description:"To get to know the basic semantics of the MIDI Remote API we will write a script for a fictional MIDI Controller having four encoder knobs. The visual representation in Cubase / Nuendo will appear like this:",source:"@site/docs/03-Examples/01-simpledevice.md",sourceDirName:"03-Examples",slug:"/examples/simpledevice",permalink:"/midiremote_api_doc/examples/simpledevice",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,slug:"/examples/simpledevice",title:"Simple Device"},sidebar:"tutorialSidebar",previous:{title:"Code Examples",permalink:"/midiremote_api_doc/code-examples"},next:{title:"Next Device",permalink:"/midiremote_api_doc/examples/nextdevice"}},p={},m=[],s={toc:m},d="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(d,(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(a.kI,{mdxType:"Info"},(0,i.kt)("p",null,"To get to know the basic semantics of the ",(0,i.kt)("strong",{parentName:"p"},"MIDI Remote API")," we will write a script for a fictional MIDI Controller having four encoder knobs. The visual representation in Cubase / Nuendo will appear like this:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3297).Z,width:"2116",height:"852"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's get right to the code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//-----------------------------------------------------------------------------\n// 1. DRIVER SETUP - create driver object, midi ports and detection information\n//-----------------------------------------------------------------------------\n\n// get the api's entry point\nvar midiremote_api = require('midiremote_api_v1')\n\n// create the device driver main object\nvar deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')\n\n// create objects representing the hardware's MIDI ports\nvar midiInput = deviceDriver.mPorts.makeMidiInput()\nvar midiOutput = deviceDriver.mPorts.makeMidiOutput()\n\n// define all possible namings the devices MIDI ports could have\n// NOTE: Windows and MacOS handle port naming differently\ndeviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)\n    .expectInputNameEquals('SimpleDevice IN')\n    .expectOutputNameEquals('SimpleDevice OUT')\n    \ndeviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)\n    .expectInputNameEquals('SimpleDevice (MIDI IN)')\n    .expectOutputNameEquals('SimpleDevice (MIDI OUT)')\n\n\n//-----------------------------------------------------------------------------\n// 2. SURFACE LAYOUT - create control elements and midi bindings\n//-----------------------------------------------------------------------------\n\n// create control element representing your hardware's surface\nvar knob1 = deviceDriver.mSurface.makeKnob(0, 0, 1, 1.5)\nvar knob2 = deviceDriver.mSurface.makeKnob(1, 0, 1, 1.5)\nvar knob3 = deviceDriver.mSurface.makeKnob(2, 0, 1, 1.5)\nvar knob4 = deviceDriver.mSurface.makeKnob(3, 0, 1, 1.5)\n\n// bind midi ports to surface elements\nknob1.mSurfaceValue.mMidiBinding\n    .setInputPort(midiInput)\n    .setOutputPort(midiOutput)\n    .bindToControlChange (0, 21) // channel 0, cc 21\n\nknob2.mSurfaceValue.mMidiBinding\n    .setInputPort(midiInput)\n    .setOutputPort(midiOutput)\n    .bindToControlChange (0, 22) // channel 0, cc 22\n\nknob3.mSurfaceValue.mMidiBinding\n    .setInputPort(midiInput)\n    .setOutputPort(midiOutput)\n    .bindToControlChange (0, 23) // channel 0, cc 23\n\nknob4.mSurfaceValue.mMidiBinding\n    .setInputPort(midiInput)\n    .setOutputPort(midiOutput)\n    .bindToControlChange (0, 24) // channel 0, cc 24\n\n//-----------------------------------------------------------------------------\n// 3. HOST MAPPING - create mapping pages and host bindings\n//-----------------------------------------------------------------------------\n\n// create at least one mapping page\nvar page = deviceDriver.mMapping.makePage('Example Mixer Page')\n\n// create host accessing objects\nvar hostSelectedTrackChannel = page.mHostAccess.mTrackSelection.mMixerChannel\n\n\n// bind surface elements to host accessing object values\npage.makeValueBinding(knob1.mSurfaceValue, hostSelectedTrackChannel.mValue.mVolume)\npage.makeValueBinding(knob2.mSurfaceValue, hostSelectedTrackChannel.mSends.getByIndex(0).mLevel)\npage.makeValueBinding(knob3.mSurfaceValue, hostSelectedTrackChannel.mSends.getByIndex(1).mLevel)\npage.makeValueBinding(knob4.mSurfaceValue, hostSelectedTrackChannel.mSends.getByIndex(2).mLevel)\n")))}u.isMDXComponent=!0},3297:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/remote_window_simple_device-877fd6734001e6266c3b0c4382711fd3.png"}}]);