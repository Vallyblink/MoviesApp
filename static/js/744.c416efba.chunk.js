"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{540:function(r,t,n){n.d(t,{Df:function(){return i},d0:function(){return s},tx:function(){return f},z1:function(){return v},zv:function(){return p}});var e=n(861),c=n(687),a=n.n(c),o="b88a88f6d693c3f898a66b1a92673ff7",u=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(t);case 3:return n=r.sent,r.next=6,n.json();case 6:return e=r.sent,r.abrupt("return",e);case 10:throw r.prev=10,r.t0=r.catch(0),console.error("Error:",r.t0),new Error("An error occurred while fetching data from the API.");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://api.themoviedb.org/3/trending/all/week?api_key=".concat(o),r.abrupt("return",u(t));case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o),r.abrupt("return",u(n));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o),r.abrupt("return",u(n));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o),r.abrupt("return",u(n));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t),r.abrupt("return",u(n));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},242:function(r,t,n){n(791);var e=n(87),c=n(184);t.Z=function(r){var t=r.movie;return(0,c.jsxs)("div",{children:[(0,c.jsx)(e.OL,{to:"/movies/".concat(t.id),children:(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})}),(0,c.jsx)("h3",{children:t.title})]})}},744:function(r,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(861),c=n(439),a=n(687),o=n.n(a),u=n(791),i=n(540),s=n(242),p="HomePage_moviesContainer__wsLav",f="HomePage_title__C3KFX",v=n(184),h=function(){var r=(0,u.useState)([]),t=(0,c.Z)(r,2),n=t[0],a=t[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,e.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Df)();case 3:t=r.sent,a(t.results),console.log(t.results),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching movies:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:f,children:"Trending  Now"}),(0,v.jsx)("div",{className:p,children:n.map((function(r){return(0,v.jsx)(s.Z,{movie:r},r.id)}))})]})}},861:function(r,t,n){function e(r,t,n,e,c,a,o){try{var u=r[a](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(e,c)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=r.apply(t,n);function u(r){e(o,c,a,u,i,"next",r)}function i(r){e(o,c,a,u,i,"throw",r)}u(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=744.c416efba.chunk.js.map