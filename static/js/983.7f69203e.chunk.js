"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{694:function(r,t,e){e.d(t,{O:function(){return s}});var n=e(87),a=e(689),c="Movie_movieList__edbJ5",u="Movie_movieListTitle__9zwYr",i=e(184),s=function(r){var t=r.movies,e=(0,a.TH)();return(0,i.jsx)("ul",{className:c,children:t.map((function(r){return(0,i.jsx)("li",{children:(0,i.jsx)(n.rU,{to:"/movies/".concat(r.id),state:{from:e},children:(0,i.jsx)("div",{className:u,children:r.title})})},r.id)}))})}},983:function(r,t,e){e.r(t);var n=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),s=e(694),o=e(390),f=e(673),p=e(184);t.default=function(){var r=(0,i.useState)(!1),t=(0,a.Z)(r,2),e=t[0],c=t[1],v=(0,i.useState)([]),d=(0,a.Z)(v,2),h=d[0],l=d[1],m=(0,i.useState)(""),x=(0,a.Z)(m,2),_=x[0],w=x[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(!0),r.prev=1,c(!0),r.next=5,(0,o.SU)();case 5:t=r.sent,e=t.data.results,l(e),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),w(r.t0.message);case 13:return r.prev=13,c(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,10,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("section",{children:[(0,p.jsx)("h2",{children:"Trending today:"}),e&&(0,p.jsx)(f.a,{}),_&&(0,p.jsxs)("p",{children:["Sorry, an error occurred! Error: ",_," Please try again later!"]}),(0,p.jsx)(s.O,{movies:h})]})}},390:function(r,t,e){e.d(t,{Hx:function(){return p},PQ:function(){return f},SU:function(){return s},Y5:function(){return o},mv:function(){return v}});var n=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="a1c58729dd9d07a228419b3d2b553cbb",s=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.7f69203e.chunk.js.map