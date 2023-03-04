"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[161],{161:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),o=t(87),u=t(689),v=t(390),l={detailsWrap:"MovieDetails_detailsWrap__9Q+4M",score:"MovieDetails_score__67zDg",desc:"MovieDetails_desc__3wF2C",imgWrap:"MovieDetails_imgWrap__o-tMY"},d=t(184),p=function(e){var r=e.posterPath,t=e.title,n=e.voteAverage,a=e.overview,s=e.genres,i=void 0===s?[]:s,c="".concat("https://image.tmdb.org/t/p/w500"+r),o=Number((10*n).toFixed(0)),u=i.map((function(e){return e.name})).join(", ");return(0,d.jsxs)("div",{className:l.detailsWrap,children:[(0,d.jsx)("div",{className:l.imgWrap,children:r&&(0,d.jsx)("img",{src:c,alt:"poster of ".concat(t," movie")})}),(0,d.jsxs)("div",{className:l.about,children:[(0,d.jsx)("h2",{children:t}),(0,d.jsxs)("p",{className:l.score,children:["User Score: ",o,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{className:l.desc,children:a}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{className:l.desc,children:u})]})]})},f=t(673),h="MovieDetailsPage_buttonBack__CEsdx";var x=function(){var e,r,t,s,l,x,m=(0,c.useState)({}),_=(0,a.Z)(m,2),g=_[0],j=_[1],w=(0,c.useState)(!1),b=(0,a.Z)(w,2),k=b[0],y=b[1],Z=(0,c.useState)(""),N=(0,a.Z)(Z,2),M=N[0],U=N[1],D=(0,u.UO)().id,S=(0,u.TH)(),W=null!==(e=null===S||void 0===S||null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,v.Y5)(D);case 4:r=e.sent,j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),U(e.t0.message);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e(D)}),[D]),(0,d.jsxs)("section",{children:[k&&(0,d.jsx)(f.a,{}),M&&(0,d.jsxs)("p",{children:["Sorry, an error occurred! Error: ",M," Please try again later!"]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:h,children:(0,d.jsx)(o.rU,{to:W,children:"Go back"})}),(0,d.jsx)(p,{posterPath:g.poster_path,title:g.original_title,voteAverage:g.vote_average,overview:g.overview,genres:g.genres}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",state:{from:null!==(t=null===S||void 0===S||null===(s=S.state)||void 0===s?void 0:s.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",state:{from:null!==(l=null===S||void 0===S||null===(x=S.state)||void 0===x?void 0:x.from)&&void 0!==l?l:"/"},children:"Reviews"})})]}),(0,d.jsx)(u.j3,{})]})]})]})}},390:function(e,r,t){t.d(r,{Hx:function(){return l},PQ:function(){return v},SU:function(){return o},Y5:function(){return u},mv:function(){return d}});var n=t(861),a=t(757),s=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="a1c58729dd9d07a228419b3d2b553cbb",o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/credits?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=161.948f1538.chunk.js.map