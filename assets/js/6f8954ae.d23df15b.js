"use strict";(self.webpackChunkmidiremote_v_1_docs=self.webpackChunkmidiremote_v_1_docs||[]).push([[636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},8328:(e,t,r)=>{r.d(t,{b0:()=>i,jC:()=>o,kI:()=>l});var a=r(7294);const n=e=>t=>{let{children:r}=t,n=[];return a.Children.forEach(r,(e=>{const t=e.props?.children?a.Children.toArray(e.props?.children):[];0===t.length?n.push(e):t.forEach(((e,t)=>{n.push(e)}))})),a.createElement("div",{className:`admonition alert alert--${e}`},a.createElement("div",{className:"admonition-content"},n))},o=n("secondary"),l=n("info"),i=n("danger")},4435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(5162),i=r(8328);const s={title:"Getting Started",slug:"/getting-started",hide_table_of_contents:!0},u=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"To get started please perform these steps:",source:"@site/docs/02-getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/midiremote_api_doc/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started",slug:"/getting-started",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/midiremote_api_doc/"},next:{title:"Code Examples",permalink:"/midiremote_api_doc/code-examples"}},p={},d=[],m={toc:d},f="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(f,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("span",{style:{fontSize:24}},"To get started please perform these steps:"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure you have ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")," installed.")),(0,n.kt)(i.b0,{mdxType:"Danger"},(0,n.kt)("p",null,"We highly recommend using ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," for writing MIDI Remote API Scripts. We provide a ",(0,n.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"JSDoc")," based auto-completion setup. You will not have to look up types and methods in a separate documentation. Visual Studio Code will help you write scripts intuitively.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5371).Z,width:"1930",height:"832"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the folder of the Visual Studio Code executable is added to the PATH environment variable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure you have the newest ",(0,n.kt)("strong",{parentName:"p"},"Cubase / Nuendo")," installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start ",(0,n.kt)("strong",{parentName:"p"},"Cubase / Nuendo"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a project with audio and/or instrument tracks.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Remote tab in the lower zone."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8772).Z,width:"3002",height:"1872"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Open the MIDI Remote Driver Scripts folder.")),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"C:\\Users\\<Username>\\Documents\\Steinberg<Cubase or Nuendo>\\MIDI Remote\\Driver Scripts\n"))),(0,n.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/Users/<Username>/Documents/Steinberg/<Cubase or Nuendo>/MIDI Remote/Driver Scripts\n")))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a console (win: cmd, mac: terminal) and go to the MIDI Remote Driver Scripts folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," from the command line like this:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"code .\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1218).Z,width:"2160",height:"938"})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Create a script file.")),(0,n.kt)("p",null,"The MIDI Remote API Script file follows the structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<Driver Scripts Folder>/Local/<vendor>/<device>/<vendor>_<device>.js\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<Driver Scripts Folder>/Local/Nektar/Impact_LX49Plus/Nektar_Impact_LX49Plus.js\n")),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your MIDI hardware controller.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Script Console."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8046).Z,width:"2220",height:"770"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"Script Console")," appears like this:")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1468).Z,width:"1836",height:"1486"})),(0,n.kt)(i.jC,{mdxType:"Note"},"After modifying a script file press the 'Reload Scripts' button for the channges to apply."))}h.isMDXComponent=!0},8046:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/open_script_console-9d5a3240ef36fd148ed4385f6515e89d.png"},8772:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/project_window_with_overlays-6e39f835749d2e5a9ddb43901b74f1a1.png"},1468:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scripting_console-bf2836d3980128ff16e3fe16e65f13c7.png"},5371:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vscode_autocompletion-f730ccffa2426ccbe4f039a91805e611.png"},1218:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vscode_open_scripts_folder-effd2ddc4444c7e5dbf7d6d7c1c8a4cc.png"}}]);