"use strict";(self.webpackChunkmihirchronicles=self.webpackChunkmihirchronicles||[]).push([[720],{5431:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1883),r=n.p+"static/mehere-1c10259b2b25a3b5db518539891972a1.png";var i=e=>{let{location:t,title:n,children:i}=e;const o="/"===t.pathname;let c=a.createElement("div",null,a.createElement(l.Link,{className:"nav-link",to:"/notes"},"Notes"),a.createElement(l.Link,{className:"nav-link",to:"/bookshelf"},"Books"),a.createElement(l.Link,{className:"nav-link",to:"/essays"},"Essays"),a.createElement(l.Link,{className:"nav-link",to:"/work"},"Work"),a.createElement(l.Link,{className:"nav-link",to:"/art"},"Art"),a.createElement(l.Link,{className:"nav-link",to:"/about"},"Me"));return a.createElement("div",{className:"global-wrapper","data-is-root-path":o},a.createElement(l.Link,{to:"/",className:"bio-avatar-link"},a.createElement("img",{src:r,className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],width:32,height:32,quality:95,alt:"The Mihir Chronicles"})),a.createElement("header",{className:"global-header"},c),a.createElement("main",null,i),a.createElement("footer",null,a.createElement("hr",null),a.createElement("p",null,a.createElement("i",null,"Drop me a note if you are curious to chat. Newsletter goes out once a year in December.")),a.createElement("a",{href:"https://twitter.com/mihirchronicles"},a.createElement("strong",null,"Twitter"))," ",a.createElement("span",null," | "),a.createElement("a",{href:"https://www.linkedin.com/in/mihirchronicles/"},a.createElement("strong",null,"Linkedin"))," ",a.createElement("span",null," | "),a.createElement("a",{href:"https://eepurl.com/hRGv2D"},a.createElement("strong",null,"Newsletter"))))}},9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:o,siteImage:c,children:s}=e;const{site:m}=(0,l.useStaticQuery)("3204476847"),u=i||m.siteMetadata.description,h=null===(t=m.siteMetadata)||void 0===t?void 0:t.title,E=c||m.siteMetadata.siteImage;return a.createElement(a.Fragment,null,a.createElement("title",null,h?o+" | "+h:o),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"image",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:image",content:E}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:u}),s)}},2535:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),l=n(1883),r=n(5431),i=n(9357);t.default=e=>{var t;let{data:n,location:i}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=n.allMarkdownRemark.nodes;return 0===c.length?a.createElement(r.Z,{location:i,title:o},a.createElement("p",null,"No blog posts found.")):a.createElement(r.Z,{location:i,title:o},a.createElement("h1",null,"Essays"),a.createElement("p",null,"These essays are the reflection of my observation—both from personal and professional experiences. There is no specific theme. I explore whatever comes to mind or topics I am being challenged by. Each essay peels the onion of my own ignorance by asking the hard questions. They help me enhance my own clarity and forces cohesive thought."),a.createElement("ul",null,c.map((e=>{const t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement(l.Link,{to:e.fields.slug,itemProp:"url",className:"post-link"},a.createElement("span",{itemProp:"headline"},t)),a.createElement("small",null,a.createElement("span",null," | "),e.frontmatter.date))}))))};const o=()=>a.createElement(i.Z,{title:"Essays"})}}]);
//# sourceMappingURL=component---src-pages-essays-js-2a4088ca0c49b3f5a6fa.js.map