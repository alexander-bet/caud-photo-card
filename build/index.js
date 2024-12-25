(()=>{"use strict";var e,a={326:()=>{const e=window.wp.blocks,a=window.wp.i18n,o=window.wp.blockEditor,t=window.wp.components,s=window.ReactJSXRuntime;(0,e.registerBlockType)("caudena/photo-card",{title:(0,a.__)("Caudena Photo Card","caudena"),description:(0,a.__)("This is the photo card block for Caudena theme","caudena"),category:"widgets",icon:"format-image",supports:{html:!1},attributes:{photo:{type:"string",default:""},position:{type:"string",default:""},backgroundColor:{type:"string",default:"#ffffff"},socialLinks:{type:"object",default:{X:"",LinkedIn:"",Facebook:"",Instagram:"",Reddit:"",HackerNews:""}},content:{type:"string",default:""}},edit:function({attributes:e,setAttributes:n}){const{photo:i,position:r,socialLinks:c,content:l}=e;return(0,s.jsxs)("div",{...(0,o.useBlockProps)(),children:[(0,s.jsxs)(o.InspectorControls,{children:[(0,s.jsxs)(t.PanelBody,{title:(0,a.__)("Photo Settings","caudena"),children:[(0,s.jsx)(o.MediaUploadCheck,{children:(0,s.jsx)(o.MediaUpload,{onSelect:e=>{n({photo:e.url})},allowedTypes:["image"],render:({open:e})=>(0,s.jsx)(t.Button,{onClick:e,isPrimary:!0,children:(0,a.__)("Upload Photo","caudena")})})}),i&&(0,s.jsx)("img",{src:i,alt:(0,a.__)("Photo","caudena"),style:{marginTop:"10px",maxWidth:"100%"}}),(0,s.jsx)(t.TextControl,{label:(0,a.__)("Position","caudena"),value:r,onChange:e=>{n({position:e})},style:{marginTop:"10px"}})]}),(0,s.jsx)(t.PanelBody,{title:(0,a.__)("Social Links","caudena"),children:Object.keys(c).map((e=>(0,s.jsx)(t.TextControl,{label:e,value:c[e],onChange:a=>((e,a)=>{n({socialLinks:{...c,[e]:a}})})(e,a),style:{marginTop:"10px"}},e)))})]}),(0,s.jsxs)("div",{className:"caudena-photo-card",children:[(0,s.jsxs)("div",{className:"front",children:[i&&(0,s.jsx)("img",{src:i,alt:(0,a.__)("Photo","caudena")}),(0,s.jsx)("div",{className:"position",children:r})]}),(0,s.jsxs)("div",{className:"back",children:[(0,s.jsx)(o.RichText,{tagName:"div",className:"content",value:l,onChange:e=>{n({content:e})},placeholder:(0,a.__)("Add content here...","caudena")}),(0,s.jsx)("div",{className:"social-links",children:Object.keys(c).map((e=>c[e]&&(0,s.jsx)("a",{href:c[e],className:`icon-${e.toLowerCase()}`,target:"_blank",rel:"noopener noreferrer"},e)))})]})]})]})},save:function({attributes:e}){const{photo:a,position:t,socialLinks:n,content:i}=e;return(0,s.jsxs)("div",{...o.useBlockProps.save(),className:"caudena-photo-card",children:[(0,s.jsxs)("div",{className:"front",children:[a&&(0,s.jsx)("img",{src:a,alt:"Photo"}),(0,s.jsx)("div",{className:"position",children:t})]}),(0,s.jsxs)("div",{className:"back",children:[(0,s.jsx)(o.RichText.Content,{tagName:"div",className:"content",value:i}),(0,s.jsx)("div",{className:"social-links",children:Object.keys(n).map((e=>n[e]&&(0,s.jsx)("a",{href:n[e],className:`icon-${e.toLowerCase()}`,target:"_blank",rel:"noopener noreferrer"},e)))})]})]})}})}},o={};function t(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.m=a,e=[],t.O=(a,o,s,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,s,n]=e[d],r=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(r=!1,n<i&&(i=n));if(r){e.splice(d--,1);var l=s();void 0!==l&&(a=l)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={57:0,350:0};t.O.j=a=>0===e[a];var a=(a,o)=>{var s,n,[i,r,c]=o,l=0;if(i.some((a=>0!==e[a]))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(c)var d=c(t)}for(a&&a(o);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},o=globalThis.webpackChunkcaudena_photo_card=globalThis.webpackChunkcaudena_photo_card||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))})();var s=t.O(void 0,[350],(()=>t(326)));s=t.O(s)})();