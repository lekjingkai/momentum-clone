(this["webpackJsonpmomentum-clone"]=this["webpackJsonpmomentum-clone"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),o=(n(11),n(3)),i=n.n(o),u=n(4),l=n(2);n(13),n.p,n(14);function j(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){s(new Date)}),1e3);return function(){clearInterval(e)}})),a}function b(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){s((new Date).getHours())}),1e3);return function(){clearInterval(e)}})),a}var d=n(0),f=function(){var e=j(new Date);return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"clock",children:e.toLocaleTimeString([],{hour12:!0,hour:"2-digit",minute:"2-digit"}).replace("AM","").replace("PM","").replace(/^0(?:0:0?)?/,"")})})},O=(n(16),function(e){return Object(d.jsxs)("div",{className:"namefieldContainer",children:[Object(d.jsx)("div",{children:e.children}),e.active?Object(d.jsx)("input",{value:e.value,onChange:e.inputChange,onKeyPress:function(t){if("Enter"===t.key)return e.blur()},onBlur:e.blur,autoFocus:!0,className:"nameInput"}):Object(d.jsx)("div",{onDoubleClick:e.doubleClick,className:"nameText",children:e.value})]})}),h=(n(17),function(){var e=Object(c.useState)(localStorage.getItem("name")||""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(c.useState)(""),j=Object(l.a)(u,2),f=j[0],h=j[1],m=b((new Date).getHours());Object(c.useEffect)((function(){h(m>=0&&m<12?"Good Morning":m>=12&&m<18?"Good Afternoon":"Good Evening")})),Object(c.useEffect)((function(){localStorage.setItem("name",n)}),[n]);return Object(d.jsx)("div",{children:Object(d.jsx)(O,{value:n,inputChange:function(e){return function(e){a(e)}(e.target.value)},doubleClick:function(){return i(!0)},blur:function(){return i(!1)},active:o,children:Object(d.jsxs)("p",{style:{fontSize:"50px"},children:[f,",\xa0"]})})})}),m=(n(18),function(){var e=function(e){return null===e?"":JSON.parse(e).goal},t=Object(c.useState)(e(localStorage.getItem("todaygoal"))),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),f=b[0],O=b[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),p=m[0],x=m[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),N=g[0],S=g[1],k=Object(c.useState)(!1),I=Object(l.a)(k,2),y=I[0],C=I[1];Object(c.useEffect)((function(){""!==e(localStorage.getItem("todaygoal"))&&0==JSON.parse(localStorage.getItem("todaygoal")).cleared&&(C(!y),x(!p),setTimeout((function(){O(!f)}),600))}),[]);return console.log(localStorage.getItem("todaygoal")),Object(d.jsxs)("div",{className:"mainFocusContainer",children:[!1===f&&Object(d.jsxs)("div",{className:"".concat(p?"fadeOutAnim":"fadeInAnim"),children:[Object(d.jsx)("p",{children:"What is your main focus for today?"}),Object(d.jsx)("input",{onChange:function(e){return s(e.target.value)},onKeyPress:function(e){if("Enter"===e.key&&""!=a){C(!y),x(!p);var t={goal:a,cleared:!1};localStorage.setItem("todaygoal",JSON.stringify(t)),setTimeout((function(){O(!f)}),600)}},disabled:y})]}),!0===f&&Object(d.jsxs)("div",{className:"".concat(p?"fadeInAnim":"fadeOutAnim"),onMouseOver:function(){return S(!0)},onMouseOut:function(){return S(!1)},children:[Object(d.jsx)("p",{children:"Today's Goal"}),Object(d.jsxs)("div",{className:"todayGoalContainer",children:[Object(d.jsxs)("label",{className:"checkmarkContainer ".concat(N?"fadeIn":"fadeOut"),children:[Object(d.jsx)("input",{type:"checkbox",onClick:function(){u(!i);var e=JSON.parse(localStorage.getItem("todaygoal")).cleared,t={goal:a,cleared:!e};localStorage.setItem("todaygoal",JSON.stringify(t))}}),Object(d.jsx)("span",{class:"checkmark"})]}),Object(d.jsx)("p",{className:"goalText ".concat(i?"strikethroughGoalText":""),children:a}),Object(d.jsx)("button",{className:"cancelBtn ".concat(i?"rotate":""," ").concat(N?"fadeIn":"fadeOut"),onClick:function(){C(!y),x(!p),localStorage.removeItem("todaygoal"),setTimeout((function(){O(!f),u(!1)}),600)},children:Object(d.jsx)("i",{className:"fa fa-times icon"})})]}),Object(d.jsx)("p",{className:"goalSuccessText ".concat(i?"fadeInOutAnim":""),children:"Nicely done!"})]})]})}),p=(n(19),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=(r[0],r[1],Object(c.useState)([])),j=Object(l.a)(o,2),b=j[0],f=j[1],O=Object(c.useState)(""),h=Object(l.a)(O,2),m=(h[0],h[1],Object(c.useState)(!0)),p=Object(l.a)(m,2),x=p[0],v=p[1],g=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes15.p.rapidapi.com/quotes/random/",{method:"GET",headers:{"x-rapidapi-key":"b60c6af483mshe2b0b094ffe5148p10ed1cjsn21883faa5b8d","x-rapidapi-host":"quotes15.p.rapidapi.com"}});case 2:return t=e.sent,v(!1),e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)("div",{children:b&&Object(d.jsxs)("div",{className:"test",children:[Object(d.jsx)("div",{className:"quoteContainer quoteBlock",children:Object(d.jsxs)("div",{className:"hoverQuote",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)},children:[!0===x&&Object(d.jsx)("p",{children:Object(d.jsx)("i",{class:"fa fa-spinner spinLoading","aria-hidden":"true"})}),Object(d.jsx)("p",{className:"quote ".concat(n?"slideUp":""," ").concat(x?"":"fadeInAnim"," "),children:!1===x&&Object(d.jsxs)("p",{children:['"',b&&b.content,'"']})})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"quoteContainer authorBlock",children:Object(d.jsx)("div",{className:"hoverQuote",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)},children:Object(d.jsxs)("div",{className:"author ".concat(n?"slideDownFadeIn":""," ").concat(x?"notLoaded":""),children:[Object(d.jsx)("span",{className:"".concat(n?"TextSlideDownFadeIn":""),children:b&&b.originator&&b.originator.name})," ",Object(d.jsx)("a",{href:b.url,children:Object(d.jsx)("i",{class:"fa fa-external-link ".concat(n?"TextSlideDownFadeIn":""),"aria-hidden":"true"})})]})})})})]})})}),x=(n(20),n(21),function(e){return Object(d.jsx)("div",{className:e.todoTextBubble,children:Object(d.jsx)("p",{className:"speech-bubble-text",children:"hi"})})}),v=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(c.useState)(!1),j=Object(l.a)(u,2),b=j[0],f=j[1],O=Object(c.useRef)(null),h=function(e){O.current&&!O.current.contains(e.target)&&(f(!1),setTimeout((function(){i(!1)})))};return Object(c.useEffect)((function(){return document.addEventListener("click",h,!0),function(){document.removeEventListener("click",h,!0)}})),Object(d.jsxs)("div",{className:"settingContainer",children:[Object(d.jsx)("p",{ref:O,className:"setting ".concat(n?"rotateSetting":""),onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)},onClick:function(){f(!b),setTimeout((function(){i(!o)}))},children:Object(d.jsx)("i",{class:"fa fa-cog settingIcon","aria-hidden":"true"})}),!0===b&&Object(d.jsx)(x,{todoTextBubble:"speech-bubble bottom-speech-bubble setting-bubble ".concat(o?"speech-bubble-show":"")})]})},g=(n(22),function(e){return Object(d.jsx)("div",{className:"settingContainer",children:Object(d.jsxs)("div",{className:"BGCreditsContainer",children:[Object(d.jsx)("p",{className:"BGtitle",children:"Photo by"}),Object(d.jsxs)("div",{className:"BGauthorContainer",children:[Object(d.jsx)("a",{className:"BGauthorLink",href:e.authorUrl,children:e.author}),"\xa0",Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{class:"fa fa-external-link BGauthorLink","aria-hidden":"true"})})]})]})})}),N=(n(23),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"todoContainer",children:[Object(d.jsxs)("p",{className:"todo",onClick:function(){return a(!n)},children:[Object(d.jsx)("i",{class:"fa fa-list-ul","aria-hidden":"true"})," Todo"]}),Object(d.jsx)(x,{todoTextBubble:"speech-bubble bottom-speech-bubble todo-bubble ".concat(n?"speech-bubble-show":"")})]})}),S=(n(24),function(e){return Object(d.jsxs)("div",{className:"bottom-row",children:[Object(d.jsxs)("div",{className:"bottom-left",children:[Object(d.jsx)(v,{}),e.children]}),Object(d.jsx)("div",{className:"bottom-center",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{className:"bottom-right",children:Object(d.jsx)(N,{})})]})}),k=(n(25),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(c.useState)(!1),j=Object(l.a)(u,2),b=j[0],f=j[1];return Object(d.jsx)("div",{children:Object(d.jsx)("form",{onSubmit:function(e){var t;e.preventDefault(),!0===(""!==(t=n)&&null===t.match(/^ *$/))&&(window.location.href="https://www.google.com/search?q=".concat(n))},className:"searchForm ".concat(o?"searchFormFocus":""),onMouseOver:function(){return f(!0)},onMouseOut:function(){return f(!1)},children:Object(d.jsxs)("label",{children:[Object(d.jsx)("i",{className:"fa fa-search searchIcon ".concat(b?"searchIconFocus":""," ").concat(o?"searchIconFocus":""),"aria-hidden":"true"}),Object(d.jsx)("input",{className:"searchInput",type:"text",value:n,onChange:function(e){return a(e.target.value)},onFocus:function(){return i(!0)},onBlur:function(){return i(!1)}}),Object(d.jsx)("i",{className:"fa fa-google searchIcon ".concat(o?"searchIconFocus":""),"aria-hidden":"true"})]})})})}),I=(n(26),n(27),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(c.useRef)(null),j=function(e){u.current&&!u.current.contains(e.target)&&(i(!1),setTimeout((function(){a(!1)})))};return Object(c.useEffect)((function(){return document.addEventListener("click",j,!0),function(){document.removeEventListener("click",j,!0)}})),Object(d.jsxs)("div",{className:"linksContainer",children:[Object(d.jsxs)("p",{ref:u,className:"links",onClick:function(){i(!o),setTimeout((function(){a(!n)}))},children:[Object(d.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})," Links"]}),Object(d.jsx)(x,{todoTextBubble:"speech-bubble top-speech-bubble link-bubble ".concat(n?"top-bubble-show":"")})]})}),y=function(){return Object(d.jsxs)("div",{className:"top-row",children:[Object(d.jsxs)("div",{className:"top-left",children:[Object(d.jsx)(I,{}),Object(d.jsx)(k,{})]}),Object(d.jsx)("div",{className:"top-center"}),Object(d.jsx)("div",{className:"top-right"})]})},C=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),p=(O[0],O[1],Object(c.useState)(0)),x=Object(l.a)(p,2),v=x[0],N=x[1],k=["landscape","nature%20wallpaper","beach"],I=["green","turquoise","blue","orange"];function C(e){return e[Math.floor(Math.random()*e.length)]}var w=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pexelsdimasv1.p.rapidapi.com/v1/search?query=".concat(C(k),"&per_page=20&orientation=landscape&color=").concat(C(I)),{method:"GET",headers:{authorization:"563492ad6f91700001000001eb0bf777570041b38dd2e09f22d3ee56","x-rapidapi-key":"b60c6af483mshe2b0b094ffe5148p10ed1cjsn21883faa5b8d","x-rapidapi-host":"PexelsdimasV1.p.rapidapi.com"}});case 2:return t=e.sent,a(!1),e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,j(t),t.photos.length>0&&N(Math.floor(Math.random()*t.photos.length-1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)("div",{children:o&&Object(d.jsxs)("div",{children:[!1===n&&Object(d.jsx)("div",{className:"gradient"}),o&&o.photos&&o.photos[v]&&o.photos[v].src&&Object(d.jsx)("div",{className:"image2 ".concat(n?"":"fadeInAnim"),style:{backgroundImage:"url(".concat(o.photos[v].src.original,")")}}),Object(d.jsx)(y,{}),Object(d.jsx)("div",{className:"headerContainer",children:Object(d.jsx)(f,{})}),Object(d.jsxs)("div",{className:"headerContainer middleContent",children:[Object(d.jsx)(h,{}),Object(d.jsx)(m,{})]}),Object(d.jsx)(S,{children:o&&o.photos&&o.photos[v]&&Object(d.jsx)(g,{author:o.photos[v].photographer,authorUrl:o.photos[v].photographer_url,url:o.photos[v].url})})]})})};n(28);var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(C,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),T()}],[[29,1,2]]]);
//# sourceMappingURL=main.6faa7623.chunk.js.map