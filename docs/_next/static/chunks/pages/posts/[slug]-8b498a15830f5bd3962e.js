_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(t,e,n){"use strict";var r=n("lwsE"),l=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var l=o(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return i(this,n)}}var u=n("TqRt");e.__esModule=!0,e.default=void 0;var c=u(n("q1tI")),d=u(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var f=function(t){a(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return l(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||m[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:g.error},c.default.createElement(d.default,null,c.default.createElement("title",null,t,": ",e)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?c.default.createElement("h1",{style:g.h1},t):null,c.default.createElement("div",{style:g.desc},c.default.createElement("h2",{style:g.h2},e,"."))))}}]),n}(c.default.Component);e.default=f,f.displayName="ErrorPage",f.getInitialProps=h,f.origGetInitialProps=h;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},GlJ9:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return _}));var r=n("q1tI"),l=n.n(r),a=n("nOHt"),i=n("eomm"),o=n.n(i),s=n("pJr+"),u=n("qtBi"),c=n.n(u),d=l.a.createElement,m=function(t){var e=t.content;return Object(r.useEffect)((function(){var t,e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","0ho0ho/0ho0ho.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),null===(t=document.getElementById("utterances"))||void 0===t||t.appendChild(e)})),d(l.a.Fragment,null,d("div",{className:"max-w-2xl mx-auto"},d("div",{className:c.a.markdown,dangerouslySetInnerHTML:{__html:e}})),d("div",{id:"utterances"}))},h=n("hJcT"),f=l.a.createElement,g=function(t){var e=t.children;return f("h1",{className:"max-w-2xl mx-auto text-4xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-3"},e)},p=l.a.createElement,v=function(t){var e=t.title,n=t.date;return p(l.a.Fragment,null,p(g,null,e),p("div",{className:"max-w-2xl mx-auto"},p("div",{className:"block md:hidden mb-6"}),p("div",{className:"mb-6 text-gray-700"},p(h.a,{dateString:n}))))},x=n("5M6V"),y=n("8Kt/"),b=n.n(y),E=l.a.createElement,_=!0;e.default=function(t){var e=t.post,n=(t.morePosts,t.preview),r=Object(a.useRouter)();return r.isFallback||(null===e||void 0===e?void 0:e.slug)?E(x.a,{preview:n},E(s.a,null,r.isFallback?E(g,null,"Loading\u2026"):E(l.a.Fragment,null,E("article",{className:"mb-32"},E(b.a,null,E("title",null,e.title," | Next.js Blog Example with"),E("meta",{property:"og:image",content:e.ogImage.url}),E("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css"}),E("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"}),E("script",null,"hljs.initHighlightingOnLoad();")),E(v,{title:e.title,date:e.date}),E(m,{content:e.content}))))):E(o.a,{statusCode:404})}},ZW3T:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("GlJ9")}])},eomm:function(t,e,n){t.exports=n("/a9y")},qtBi:function(t,e,n){t.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["ZW3T",0,2,1,3]]]);