_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),d=s(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p=function(e){l(n,e);var t=u(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:g.error},c.default.createElement(d.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:g.h1},e):null,c.default.createElement("div",{style:g.desc},c.default.createElement("h2",{style:g.h2},t,"."))))}}]),n}(c.default.Component);t.default=p,p.displayName="ErrorPage",p.getInitialProps=f,p.origGetInitialProps=f;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},GlJ9:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return E}));var r=n("q1tI"),a=n.n(r),l=n("nOHt"),i=n("eomm"),o=n.n(i),u=n("pJr+"),s=n("qtBi"),c=n.n(s),d=a.a.createElement,m=function(e){var t=e.content;return d("div",{className:"max-w-2xl mx-auto"},d("div",{className:c.a.markdown,dangerouslySetInnerHTML:{__html:t}}))},f=n("hJcT"),p=a.a.createElement,g=function(e){var t=e.children;return p("h1",{className:"max-w-2xl mx-auto text-6xl md:text-7xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-3"},t)},h=a.a.createElement,v=function(e){var t=e.title,n=e.date;return h(a.a.Fragment,null,h(g,null,t),h("div",{className:"max-w-2xl mx-auto"},h("div",{className:"block md:hidden mb-6"}),h("div",{className:"mb-6 text-gray-700"},h(f.a,{dateString:n}))))},x=n("5M6V"),y=n("8Kt/"),_=n.n(y),w=a.a.createElement,E=!0;t.default=function(e){var t=e.post,n=(e.morePosts,e.preview),r=Object(l.useRouter)();return r.isFallback||(null===t||void 0===t?void 0:t.slug)?w(x.a,{preview:n},w(u.a,null,r.isFallback?w(g,null,"Loading\u2026"):w(a.a.Fragment,null,w("article",{className:"mb-32"},w(_.a,null,w("title",null,t.title," | Next.js Blog Example with"),w("meta",{property:"og:image",content:t.ogImage.url})),w(v,{title:t.title,date:t.date}),w(m,{content:t.content}))))):w(o.a,{statusCode:404})}},ZW3T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("GlJ9")}])},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["ZW3T",0,2,1,3]]]);