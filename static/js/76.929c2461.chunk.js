"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,r,e){e.r(r),e.d(r,{default:function(){return m}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(689),o=e(390),p="Cast_actorList__0r4HV",f="Cast_actorBox__tYU0K",v="Cast_actorImg__T6qL2",d="Cast_actorName__XabVA",h=e(673),l=e(184),m=function(){var t=(0,s.useState)(!1),r=(0,a.Z)(t,2),e=r[0],c=r[1],m=(0,s.useState)(""),_=(0,a.Z)(m,2),x=_[0],w=_[1],g=(0,s.useState)([]),b=(0,a.Z)(g,2),k=b[0],y=b[1],Z=(0,i.UO)().id;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,(0,o.PQ)(Z);case 4:r=t.sent,e=r.cast,y(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w(t.t0.message);case 12:return t.prev=12,c(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t(Z)}),[Z]),(0,l.jsxs)(l.Fragment,{children:[e&&(0,l.jsx)(h.a,{}),x&&(0,l.jsxs)("p",{children:["Sorry, an error occurred! Error: ",x," Please try again later!"]}),(0,l.jsx)("ul",{className:p,children:k.slice(0,10).map((function(t){var r=t.id,e=t.original_name,n=t.profile_path;return(0,l.jsxs)("li",{className:f,children:[n&&(0,l.jsx)("img",{className:v,src:"".concat("https://image.tmdb.org/t/p/w500"+n),alt:"poster of ".concat(e)}),(0,l.jsx)("p",{className:d,children:e})]},r)}))})]})}},390:function(t,r,e){e.d(r,{Hx:function(){return f},PQ:function(){return p},SU:function(){return i},Y5:function(){return o},mv:function(){return v}});var n=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="a1c58729dd9d07a228419b3d2b553cbb",i=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.929c2461.chunk.js.map