(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{115:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},137:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(35),i=c.n(s),r=c(16),o=c.n(r),l=c(20),d=c(5),j=(c(115),c(28)),u=c(13),b=(c(116),"https://image.tmdb.org/t/p/w200"),f="https://www.movienewz.com/img/films/poster-holder.jpg",p=(c(117),c(199)),O=c(197),x=c(189),h=(c(118),c(33)),m=c.n(h),v=c(71),g=(c(136),c(137),c(30)),_=c(1),w=function(e){var t=e.id,c=e.media,a=Object(n.useState)([]),s=Object(d.a)(a,2),i=s[0],r=s[1],j=function(){var e=Object(l.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/".concat(c&&c,"/").concat(t&&t,"/credits?api_key=").concat("801ba50f957f0f9e83c96ce7332f7941","&language=en-US"));case 2:n=e.sent,a=n.data,r(a.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),console.log(i),Object(_.jsx)(v.a,{breakpoints:{640:{width:230,height:320,slidesPerView:1},768:{width:700,slidesPerView:4,spaceBetween:30},1024:{width:1e3,slidesPerView:5,spaceBetween:30}},spaceBetween:10,slidesPerView:3,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:[g.a],children:i&&i.map((function(e){return Object(_.jsxs)(v.b,{className:"d-flex flex-column",children:[Object(_.jsx)("img",{src:e.profile_path?"".concat(b).concat(e.profile_path):f}),Object(_.jsx)("span",{className:"text-center color-white",children:e.original_name})]})}))})},y={width:"90%",height:"90%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgb(80 73 90)",border:"2px solid #000",boxShadow:24,p:4};function N(e){var t=e.children,c=e.media,a=e.id,s=n.useState(!1),i=Object(d.a)(s,2),r=i[0],j=i[1],u=Object(n.useState)([]),h=Object(d.a)(u,2),v=h[0],g=h[1],N=Object(n.useState)(),S=Object(d.a)(N,2),k=S[0],P=S[1],E=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/".concat(c&&c,"/").concat(a&&a,"?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US"));case 2:t=e.sent,n=t.data,g(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("  https://api.themoviedb.org/3/".concat(c&&c,"/").concat(a&&a,"/videos?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,P(null===(t=s.results[0])||void 0===t?void 0:t.key);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E(),C()}),[]),Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("div",{className:"content position-relative  ",onClick:function(){j(!0),console.log(k)},children:t}),Object(_.jsx)(O.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:function(){return j(!1)},closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(_.jsx)(x.a,{style:y,in:r,children:v&&Object(_.jsxs)("div",{className:"content-style ",children:[Object(_.jsx)("div",{className:"details-img",children:Object(_.jsx)("img",{src:v.poster_path?"".concat(b,"/").concat(v.poster_path):f})}),Object(_.jsxs)("div",{className:"d-flex flex-column w-100 scrolling  ",children:[Object(_.jsxs)("div",{className:"details-info  ",children:[Object(_.jsx)("span",{children:v.name?v.name:v.title}),Object(_.jsx)("span",{children:v.first_air_date||v.release_date})]}),Object(_.jsx)("div",{className:"details-description",children:Object(_.jsx)("p",{children:v.overview})}),Object(_.jsx)("div",{className:"details-trailer",children:Object(_.jsx)("a",{className:"btn btn-danger w-100",href:"".concat("https://www.youtube.com/watch?v","=").concat(k),target:"_self",children:"trailer"})}),Object(_.jsx)("div",{className:"",children:Object(_.jsx)(w,{i:!0,id:a,media:c})})]})]})})})]})}var S=function(e){var t=e.id,c=e.media,n=e.img,a=e.title,s=e.vote,i=e.date;e.keys;return console.log(s.toString().slice(0,3)),Object(_.jsxs)(N,{id:t,media:c,children:[Object(_.jsx)("div",{className:"content-img",children:Object(_.jsx)("img",{style:{width:"220px"},src:n?"".concat(b).concat(n):f,alt:a})}),Object(_.jsx)("div",{className:"content-title text-center",children:Object(_.jsx)("p",{className:!0,children:a.split(" ").slice(0,4).join(" ")})}),Object(_.jsxs)("div",{className:"content-info d-flex justify-content-around",children:[Object(_.jsx)("p",{className:"text-white",children:c}),Object(_.jsx)("p",{className:"text-white",children:i})]}),Object(_.jsx)("p",{className:"vote position-absolute top-0",children:s.toString().slice(0,3)})]})},k=(c(143),function(e){var t=e.page,c=e.setPage,n=e.totalPages,a=[],s=t-2;s<=0&&(s=1);var i=t+2;i>n&&(i=n);for(var r=function(e){a.push(Object(_.jsx)("div",{className:e===t?"round-effect active":"round-effect",onClick:function(){c(e)},children:e},e))},o=s;o<=i;o++)r(o);return Object(_.jsx)("div",{className:"flex-container",children:Object(_.jsxs)("div",{className:"paginate-ctn",children:[Object(_.jsx)("div",{className:"round-effect",onClick:function(){t>1&&(c(t-1),window.scroll(0,0))},children:" \u2039 "}),a,Object(_.jsx)("div",{className:"round-effect",onClick:function(){t<n&&(c(t+1),window.scroll(0,0))},children:" \u203a "})]})})}),P=c(14),E=(c(144),function(e){var t=e.selectedGenres,c=e.setSelectedGenres,a=e.genres,s=e.setGenres,i=e.setTotalPages,r=e.type,j=Object(n.useState)(""),u=Object(d.a)(j,2),b=u[0],f=(u[1],function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US"));case 2:t=e.sent,c=t.data,s(c.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){f()}),[]);var p=function(e){return e===b?"hello":"false"};return Object(_.jsxs)("div",{className:"d-flex flex-row justify-content-center flex-wrap",children:[t&&t.map((function(e){return Object(_.jsxs)("span",{onClick:function(){return function(e){c(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(P.a)(a),[e]))}(e)},className:"genres-span ",style:{background:"red",position:"relative"},children:[e.name,Object(_.jsx)("span",{style:{position:"absolute",top:0},children:"x"})]})})),a&&a.map((function(e){return Object(_.jsx)("span",{onClick:function(){return function(e){c([].concat(Object(P.a)(t),[e])),s(a.filter((function(t){return t.id!==e.id}))),i(1)}(e)},className:"genres-span ".concat(b&&p(e.name)),children:e.name})}))]})}),C=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},T=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(2),i=Object(d.a)(s,2),r=i[0],j=i[1],u=Object(n.useState)(null),b=Object(d.a)(u,2),f=b[0],p=b[1],O=Object(n.useState)([]),x=Object(d.a)(O,2),h=x[0],m=x[1],v=Object(n.useState)([]),g=Object(d.a)(v,2),w=g[0],y=g[1],N=C(w),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(r,"&with_genres=").concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results),p(c.total_pages);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){P()}),[r,N]),Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[r]),Object(_.jsxs)("div",{className:"",children:[Object(_.jsx)(E,{selectedGenres:w,setSelectedGenres:y,genres:h,setGenres:m,setTotalPages:p,type:"movie"}),Object(_.jsxs)("div",{className:"d-flex flex-wrap gap-1 ",children:[c&&c.map((function(e){return Object(_.jsx)(S,{id:e.id,img:e.poster_path,title:e.original_title,media:"movie",date:e.release_date,vote:e.vote_average},e.id)})),Object(_.jsx)(k,{page:r,setPage:j,totalPages:f})]})]})},U=(c(145),function(e){var t=e.trending,c=e.page,a=e.setPage,s=e.totalPages;return Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[c]),Object(_.jsx)("div",{className:"content-Trending mt-5 mb-5",children:Object(_.jsxs)("div",{className:"d-flex flex-wrap gap-1 justify-content-center align-items-center ",children:[t.map((function(e){return Object(_.jsx)(S,{id:e.id,img:e.poster_path,title:e.original_title?e.original_title:e.original_name,media:e.media_type,date:e.release_date,vote:e.vote_average},e.id)})),Object(_.jsx)(k,{page:c,setPage:a,totalPages:s})]})})}),B=c(202),G=c(194),A=c(200),V=c(201),z=c(196),R=c(193),I=c(203),D=c(92),M=(c(146),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(d.a)(s,2),r=i[0],j=i[1],u=Object(n.useState)(1),b=Object(d.a)(u,2),f=b[0],p=b[1],O=Object(n.useState)([]),x=Object(d.a)(O,2),h=x[0],v=x[1],g=Object(n.useState)(null),w=Object(d.a)(g,2),y=w[0],N=w[1],P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/search/".concat(r?"tv":"movie","?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US&query=").concat(c,"&page=").concat(f,"&include_adult=false"));case 2:t=e.sent,n=t.data,v(n.results),N(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){P()}),[r,f,c]);var E=Object(D.a)({palette:{type:"dark",color:"red",primary:{main:"#fff"}}});return Object(_.jsxs)("div",{className:"content-search d-flex flex-column mt-5",children:[Object(_.jsx)("div",{className:"input-search d-flex",children:Object(_.jsxs)(B.a,{theme:E,children:[Object(_.jsx)(G.a,{style:{flex:1},className:"searchBox",label:"search",onChange:function(e){return a(e.target.value)}}),Object(_.jsx)(A.a,{onClick:P,variant:"outlined",children:"search"})]})}),Object(_.jsx)("div",{className:"result-search d-flex justify-content-center",children:Object(_.jsx)(V.a,{sx:{width:"100%",typography:"body1"},children:Object(_.jsx)(R.a,{value:r,children:Object(_.jsx)(V.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(_.jsxs)(z.a,{style:{display:"flex",justifyContent:"space-around"},"aria-label":"lab API tabs example",onChange:function(e,t){j(t)},children:[Object(_.jsx)(I.a,{style:{width:"50%"},label:"MOVIES"}),Object(_.jsx)(I.a,{style:{width:"50%"},label:"TV"})]})})})})}),Object(_.jsx)("div",{className:"d-flex flex-wrap style-content",children:h.length?h.map((function(e){return Object(_.jsx)(S,{id:e.id,img:e.poster_path,title:e.original_title?e.original_title:e.name,media:r?"tv":"movie",date:e.release_date?e.release_date:e.first_air_date,vote:e.vote_average},e.id)})):Object(_.jsx)("div",{className:"empty-div"})}),y>1&&Object(_.jsx)(k,{page:f,setPage:p,totalPages:y})]})}),F=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(2),i=Object(d.a)(s,2),r=i[0],j=i[1],u=Object(n.useState)(null),b=Object(d.a)(u,2),f=b[0],p=b[1],O=Object(n.useState)([]),x=Object(d.a)(O,2),h=x[0],m=x[1],v=Object(n.useState)([]),g=Object(d.a)(v,2),w=g[0],y=g[1],N=C(w),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/tv?api_key=801ba50f957f0f9e83c96ce7332f7941&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(r,"&with_genres=").concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results),p(c.total_pages);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){P()}),[r,N]),Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[r]),Object(_.jsxs)("div",{children:[Object(_.jsx)(E,{selectedGenres:w,setSelectedGenres:y,genres:h,setGenres:m,setTotalPages:p,type:"tv"}),Object(_.jsxs)("div",{className:"d-flex flex-wrap gap-1 ",children:[c&&c.map((function(e){return Object(_.jsx)(S,{type:"tv",id:e.id,img:e.poster_path,title:e.original_title?e.original_title:e.name,media:"tv",date:e.release_date?e.release_date:e.first_air_date,vote:e.vote_average},e.id)})),Object(_.jsx)(k,{page:r,setPage:j,totalPages:f})]})]})},H=function(){return Object(_.jsx)("p",{children:"error"})},K=c(40),L=c(41),W=(c(150),function(){return Object(_.jsx)("div",{className:"content-header ",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"d-flex justify-content-center pt-5",children:[Object(_.jsx)(j.c,{to:"/",children:"Movies Owies hassan"}),Object(_.jsx)(K.a,{className:"icon-video",icon:L.e,size:"lg"})]})})})}),J=(c(151),function(){return Object(_.jsx)("div",{color:"content-footer",children:Object(_.jsxs)("div",{className:"footer-link d-flex justify-content-center  ",children:[Object(_.jsx)(j.b,{to:"/",children:Object(_.jsxs)("div",{className:"d-flex flex-column align-items-center pointer gap-3",children:[Object(_.jsx)(K.a,{icon:L.b,size:"lg"}),"Trending"]})}),Object(_.jsx)(j.b,{to:"/movies",children:Object(_.jsxs)("div",{className:"d-flex flex-column align-items-center pointer gap-3",children:[Object(_.jsx)(K.a,{icon:L.a,size:"lg"}),"Movies"]})}),Object(_.jsx)(j.b,{to:"/series",children:Object(_.jsxs)("div",{className:"d-flex flex-column align-items-center pointer gap-3",children:[Object(_.jsx)(K.a,{icon:L.d,size:"lg"}),"Series"]})}),Object(_.jsx)(j.b,{to:"/search",children:Object(_.jsxs)("div",{className:"d-flex flex-column align-items-center pointer gap-3",children:[Object(_.jsx)(K.a,{icon:L.c,size:"lg"}),"Search"]})})]})})});var q=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(1),i=Object(d.a)(s,2),r=i[0],b=i[1],f=Object(n.useState)(null),p=Object(d.a)(f,2),O=p[0],x=p[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/week?api_key=801ba50f957f0f9e83c96ce7332f7941&page=".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results),x(c.total_pages),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h()}),[r]);var m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_URL;return Object(_.jsx)(j.a,{children:Object(_.jsxs)("div",{className:"content-App",children:[Object(_.jsx)("p",{style:{color:"red"},children:m}),Object(_.jsx)(W,{}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(u.c,{basename:"/",children:[Object(_.jsx)(u.a,{exact:!0,path:"/",element:Object(_.jsx)(U,{trending:c,page:r,setPage:b,totalPages:O})}),Object(_.jsx)(u.a,{exact:!0,path:"/series",element:Object(_.jsx)(F,{})}),Object(_.jsx)(u.a,{exact:!0,path:"/movies",element:Object(_.jsx)(T,{})}),Object(_.jsx)(u.a,{exact:!0,path:"/search",element:Object(_.jsx)(M,{})}),Object(_.jsx)(u.a,{exact:!0,path:"/:any_thing",element:Object(_.jsx)(H,{})})]})}),Object(_.jsx)(J,{})]})})};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(q,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.2744ea51.chunk.js.map