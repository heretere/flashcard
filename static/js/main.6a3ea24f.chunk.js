(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(21),s=c.n(r),i=c(4),d=c(0);var o=function(){return Object(d.jsx)("header",{className:"jumbotron bg-dark",children:Object(d.jsxs)("div",{className:"container text-white",children:[Object(d.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(d.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var l=function(){return Object(d.jsx)("div",{className:"NotFound",children:Object(d.jsx)("h1",{children:"Not Found"})})},j=c(7),u=c(2),b=c(3),h=c.n(b),m=c(11),x=c(24),O=["cards"],p="https://my-json-server.typicode.com/heretere/flashcard",f=new Headers;function v(e){e.cards;return Object(x.a)(e,O)}function N(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(h.a.mark((function e(t,c,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((a=e.sent).status<200||a.status>399)){e.next=6;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 6:if(204!==a.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function w(){return(w=Object(m.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"/decks?_embed=cards"),e.next=3,N(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks"),a={method:"POST",headers:f,body:JSON.stringify(v(t)),signal:c},e.next=4,N(n,a,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(m.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t,"?_embed=cards"),e.next=3,N(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t.id,"?_embed=cards"),a={method:"PUT",headers:f,body:JSON.stringify(v(t)),signal:c},e.next=4,N(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t),a={method:"DELETE",signal:c},e.next=4,N(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(m.a)(h.a.mark((function e(t,c,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(p,"/cards"),c.deckId=Number(t),r={method:"POST",headers:f,body:JSON.stringify(c),signal:n},e.next=5,N(a,r,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(m.a)(h.a.mark((function e(t,c){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),e.next=3,N(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t.id),a={method:"PUT",headers:f,body:JSON.stringify(t)},e.next=4,N(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),a={method:"DELETE",signal:c},e.next=4,N(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.append("Content-Type","application/json");var B=function(e){var t=e.id,c=e.onComplete;return Object(d.jsx)("button",{className:"btn btn-danger text-center float-right",onClick:function(){window.confirm("Delete this deck?\n\nYou will not be able to recover it.")&&function(e,t){return F.apply(this,arguments)}(t,null).then(c).catch((function(e){}))},children:Object(d.jsx)("span",{className:"oi oi-trash"})})};var V=function(e){var t=e.deck,c=t.id,n=t.name,a=t.description,r=t.cards,s=e.setDecks;return Object(d.jsx)("div",{className:"col-12 mt-4",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"card-title",children:[Object(d.jsx)("h5",{style:{display:"inline-block"},children:n}),Object(d.jsxs)("small",{className:"text-muted float-right",children:[r.length," cards"]})]}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsxs)(u.b,{className:"btn btn-secondary mr-2",to:"/decks/".concat(c),children:[Object(d.jsx)("span",{className:"oi oi-eye"})," View"]}),Object(d.jsxs)(u.b,{className:"btn btn-primary mr-2",to:"/decks/".concat(c,"/study"),children:[Object(d.jsx)("span",{className:"oi oi-book"})," Study"]}),Object(d.jsxs)(u.b,{className:"btn btn-info",to:"/decks/".concat(c,"/edit"),children:[Object(d.jsx)("span",{className:"oi oi-list"})," Edit"]}),Object(d.jsx)(B,{id:c,onComplete:function(){return s((function(e){return e.filter((function(e){return e.id!==c}))}))}})]})})})};var H=function(e){var t=e.container,c=Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("div",{className:"spinner-border",role:"status",children:Object(d.jsx)("span",{className:"sr-only",children:"Loading..."})})});return t?Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:c})}):c};var I=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1],r=c?c.map((function(e,t){return Object(d.jsx)(V,{deck:e,setDecks:a},t)})):[];return Object(n.useEffect)((function(){var e=new AbortController;return function(e){return w.apply(this,arguments)}(e.signal).then(a).catch((function(){})),function(){return e.abort()}}),[]),c&&c.length?r:Object(d.jsx)("div",{className:"col-12",children:c?Object(d.jsx)("h1",{className:"text-center",children:"Looks like there are currently no decks."}):Object(d.jsx)(H,{container:!1})})};var A=function(){var e=Object(i.f)();return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.push("/decks/new")},children:[Object(d.jsx)("span",{className:"oi oi-plus"})," Create Deck"]})}),Object(d.jsx)(I,{})]})})},J=c(23);var P=function(e){var t=e.includeHome,c=e.navigation,n=t?[{name:Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("span",{className:"oi oi-home"}),"Home"]}),url:"/"}].concat(Object(J.a)(c)):c;return n=n.map((function(e,t){var c=e.name,a=e.url;return t===n.length-1?Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c},t):Object(d.jsx)(u.b,{to:a,className:"breadcrumb-item",children:c},t)})),Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsx)("ol",{className:"breadcrumb",children:n})})},L=c(13),Y=c(6);var _=function(e){var t=e.inputs,c=e.submit,a=(c=void 0===c?{}:c).name,r=void 0===a?"Submit":a,s=c.action,i=e.cancel,o=(i=void 0===i?{}:i).name,l=void 0===o?"Cancel":o,b=i.url,h={};t.forEach((function(e){return h[e.name]=e.defaultValue}));var m=Object(n.useState)(Object(Y.a)({},h)),x=Object(j.a)(m,2),O=x[0],p=x[1],f=t.map((function(e,t){var c=function(e){e.persist(),p((function(t){return Object(Y.a)(Object(Y.a)({},t),{},Object(L.a)({},e.target.name,e.target.value))}))};return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:e.id,children:e.formattedName}),"textarea"===e.inputType?Object(d.jsx)("textarea",{className:"form-control",id:e.id,name:e.name,placeholder:e.placeholder,value:O[e.name],onChange:c,rows:4,required:!0}):Object(d.jsx)("input",{className:"form-control",id:e.id,name:e.name,placeholder:e.placeholder,value:O[e.name],onChange:c,required:!0})]},t)}));return Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(O),p(Object(Y.a)({},h))},children:[f,Object(d.jsx)(u.b,{className:"btn btn-secondary mr-2",to:b,children:l}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:r})]})})})};var q=function(){var e=Object(i.f)(),t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],s=c[1],o=r?Object(d.jsx)(H,{container:!1}):Object(d.jsx)(_,{inputs:[{inputType:"text",id:"name",name:"name",formattedName:"Name",placeholder:"Deck Name",defaultValue:""},{inputType:"textarea",id:"description",name:"description",formattedName:"Description",placeholder:"Brief description of the deck",defaultValue:""}],submit:{action:function(t){s(!0),function(e,t){return y.apply(this,arguments)}(t,null).then((function(t){return e.push("/decks/".concat(t.id))})).then((function(){s(!1)})).catch((function(){}))}},cancel:{url:"/"}});return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:"Create Deck"}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h1",{children:"Create Deck"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:o})})]})};function U(e){var t=e.flipped,c=e.front,n=e.text,a=e.cardNumber,r=e.total,s=e.updateState,o=e.showNextButton,l=Object(i.f)();return Object(d.jsx)("div",{className:c?"card-fr":"card-bk bg-dark text-white",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h3",{className:"card-title",children:[c!==t?"Card":"Crud"," ",a+1," of ",r]}),Object(d.jsx)("p",{className:"card-text",children:n}),Object(d.jsx)("button",{className:c?"btn btn-outline-dark":"btn btn-outline-light text-white",onClick:function(){s("flipped",c),s("hasBeenFlipped",!0)},children:c!==t?"Flip":"Flop"}),o&&Object(d.jsx)("button",{className:"btn btn-outline-primary ml-2 "+(c?"":"text-white"),onClick:function(){a+1!==r?(s("flipped",!1),s("cardNumber",a+1),s("hasBeenFlipped",!1)):window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")?(s("flipped",!1),s("cardNumber",0),s("hasBeenFlipped",!1)):l.push("/")},children:c!==t?"Next":"Nuxt"})]})})}var M=function(e){var t=e.deckId,c=e.card,n=(c=void 0===c?{}:c).front,r=c.back,s=e.total,i=e.state,o=i.flipped,l=i.hasBeenFlipped,j=i.cardNumber,b=e.updateState;return s<=2?Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("h2",{children:"Not enough cards."}),Object(d.jsxs)("p",{children:["You need at least 3 cards to study. There are ",s," in this deck."]}),Object(d.jsxs)(u.b,{className:"btn btn-primary",to:"/decks/".concat(t,"/cards/new"),children:[Object(d.jsx)("span",{className:"oi oi-plus"})," Add Cards"]})]}):Object(d.jsxs)("div",{className:"card card-f h-100 "+(o?"fl":""),children:[Object(d.jsx)(U,{flipped:o,front:!0,text:n,cardNumber:j,total:s,showNextButton:l,updateState:b}),Object(d.jsx)(U,{flipped:o,front:!1,text:r,cardNumber:j,total:s,showNextButton:l,updateState:b})]})};var R=function(e){var t=e.deck,c=Object(n.useState)(Object(Y.a)({},{cardNumber:0,flipped:!1,hasBeenFlipped:!1})),r=Object(j.a)(c,2),s=r[0],i=r[1];return t?Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:t.name,url:"/decks/"+t.id},{name:"Study"}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("h1",{children:["Study: ",t.name]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(M,{deckId:t.id,card:t.cards[s.cardNumber],total:t.cards.length,state:s,updateState:function(e,t){return i((function(c){return Object(Y.a)(Object(Y.a)({},c),{},Object(L.a)({},e,t))}))}})})})]}):Object(d.jsx)(H,{container:!0})};var z=function(e){var t=e.card,c=e.setCards,n=Object(i.h)().url;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("p",{className:"card-text",children:t.front})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("p",{className:"card-text",children:t.back})})]}),Object(d.jsx)("div",{className:"row mt-4",children:Object(d.jsxs)("div",{className:"col-12 text-right",children:[Object(d.jsxs)(u.b,{className:"btn btn-secondary mr-2",to:"".concat(n,"/cards/").concat(t.id,"/edit"),children:[Object(d.jsx)("span",{className:"oi oi-pencil"})," Edit"]}),Object(d.jsx)("button",{className:"btn btn-danger text-center float-right",onClick:function(){window.confirm("Delete this card?\n\nYou will not be able to recover it.")&&function(e,t){return T.apply(this,arguments)}(t.id,null).then((function(){return c((function(e){return e.filter((function(e){return e.id!==t.id}))}))})).catch((function(e){}))},children:Object(d.jsx)("span",{className:"oi oi-trash"})})]})})]})})};var G=function(e){var t=e.setCards,c=e.cards.map((function(e,c){return Object(d.jsx)(z,{card:e,setCards:t},c)}));return Object(d.jsxs)("div",{className:"row mt-4",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h3",{children:"Cards"})}),Object(d.jsx)("div",{className:"col-12",children:c})]})};var K=function(e){var t=e.deck,c=Object(i.f)();return t?Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:t.name,url:"/decks/".concat(t.id)},{name:"Edit Deck"}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h3",{children:"Edit Deck"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(_,{inputs:[{inputType:"text",id:"name",name:"name",formattedName:"Name",placeholder:"Deck Name",defaultValue:t.name},{inputType:"textarea",id:"description",name:"description",formattedName:"Description",placeholder:"Brief description of the deck",defaultValue:t.description}],submit:{action:function(e){(function(e,t){return C.apply(this,arguments)})(Object(Y.a)({id:t.id},e)).then((function(){t.name=e.name,t.description=e.description,c.push("/decks/".concat(t.id))})).catch((function(){}))}},cancel:{url:"/decks/".concat(t.id)}})})})]}):Object(d.jsx)(H,{container:!0})};var Q=function(e){var t=e.deck,c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],i=r[1];if(!t)return Object(d.jsx)(H,{container:!0});var o=s?Object(d.jsx)(H,{}):Object(d.jsx)(_,{inputs:[{inputType:"textarea",id:"front",name:"front",formattedName:"Front",placeholder:"Front side of card",defaultValue:""},{inputType:"textarea",id:"back",name:"back",formattedName:"Back",placeholder:"Back side of card",defaultValue:""}],submit:{name:"Save",action:function(e){i(!0),function(e,t,c){return S.apply(this,arguments)}(t.id,e,null).then((function(e){return t.cards.push(e)})).then((function(){return i(!1)})).catch((function(e){}))}},cancel:{name:"Done",url:"/decks/".concat(t.id)}});return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:t.name,url:"/decks/".concat(t.id)},{name:"Add Card"}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("h3",{children:[t.name,": Add Card"]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:o})})]})};var W=function(e){var t=e.deck,c=Object(i.f)(),r=Object(i.g)().cardId,s=Object(n.useState)(t?t.cards.find((function(e){return e.id===r})):{}),o=Object(j.a)(s,2),l=o[0],u=o[1],b=Object(n.useState)(!1),h=Object(j.a)(b,2),m=h[0],x=h[1];if(Object(n.useEffect)((function(){var e=new AbortController;return function(e,t){return E.apply(this,arguments)}(r,e.signal).then(u).catch((function(e){})),function(){return e.abort()}}),[r]),!t||!l)return Object(d.jsx)(H,{container:!0});var O=m?Object(d.jsx)(H,{}):Object(d.jsx)(_,{inputs:[{inputType:"textarea",id:"front",name:"front",formattedName:"Front",placeholder:"Front side of card",defaultValue:l.front},{inputType:"textarea",id:"back",name:"back",formattedName:"Back",placeholder:"Back side of card",defaultValue:l.back}],submit:{action:function(e){x(!0),function(e,t){return D.apply(this,arguments)}(Object(Y.a)({id:r,deckId:t.id},e),null).then((function(e){var c=t.cards.find((function(t){return t.id===e.id}));return c&&(c.front=e.front,c.back=e.back),e})).then((function(){return x(!1)})).then((function(){return c.push("/decks/".concat(t.id))})).catch((function(e){console.log(e)}))}},cancel:{url:"/decks/".concat(t.id)}});return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:t.name,url:"/decks/".concat(t.id)},{name:"Edit Card "+r}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h3",{children:"Edit Card"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:O})})]})};function X(e){var t=e.setCards,c=e.deck,n=Object(i.f)();return c?Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(P,{includeHome:!0,navigation:[{name:c.name}]})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("div",{className:"card border-0",children:Object(d.jsxs)("div",{className:"card-body p-0",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h4",{children:c.name})}),Object(d.jsx)("p",{className:"card-text",children:c.description}),Object(d.jsxs)(u.b,{className:"btn btn-secondary mr-2",to:"/decks/".concat(c.id,"/edit"),children:[Object(d.jsx)("span",{className:"oi oi-pencil"})," Edit"]}),Object(d.jsxs)(u.b,{className:"btn btn-primary mr-2",to:"/decks/".concat(c.id,"/study"),children:[Object(d.jsx)("span",{className:"oi oi-book"})," Study"]}),Object(d.jsxs)(u.b,{className:"btn btn-primary",to:"/decks/".concat(c.id,"/cards/new"),children:[Object(d.jsx)("span",{className:"oi oi-plus"})," Add Cards"]}),Object(d.jsx)(B,{id:c.id,onComplete:function(){return n.push("/")}})]})})})}),Object(d.jsx)(G,{setCards:t,cards:c.cards})]}):Object(d.jsx)(H,{container:!0})}var Z=function(){var e=Object(i.g)().deckId,t=Object(i.h)().url,c=Object(n.useState)(null),r=Object(j.a)(c,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){var t=new AbortController;return function(e,t){return g.apply(this,arguments)}(e,t.signal).then(o).catch((function(){})),function(){return t.abort()}}),[e]),Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"".concat(t),children:Object(d.jsx)(X,{setCards:function(e){o((function(t){return Object(Y.a)(Object(Y.a)({},t),{},{cards:e(t.cards)})}))},deck:s})}),Object(d.jsx)(i.a,{path:"".concat(t,"/edit"),children:Object(d.jsx)(K,{deck:s})}),Object(d.jsx)(i.a,{path:"".concat(t,"/study"),children:Object(d.jsx)(R,{deck:s})}),Object(d.jsx)(i.a,{path:"".concat(t,"/cards/new"),children:Object(d.jsx)(Q,{deck:s})}),Object(d.jsx)(i.a,{path:"".concat(t,"/cards/:cardId/edit"),children:Object(d.jsx)(W,{deck:s})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(l,{})})]})})};var $=function(){return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/decks/new",children:Object(d.jsx)(q,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId",children:Object(d.jsx)(Z,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(l,{})})]})};var ee=function(){return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(A,{})}),Object(d.jsx)(i.a,{path:"/decks",children:Object(d.jsx)($,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(l,{})})]})})]})};var te=function(){return Object(d.jsx)("div",{className:"app-routes",children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(ee,{})})})})};c(39);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(te,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a3ea24f.chunk.js.map