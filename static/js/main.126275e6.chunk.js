(this["webpackJsonpquotegenerator-react"]=this["webpackJsonpquotegenerator-react"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(12),o=n.n(a),s=(n(22),n(23),n(0));function i(){return Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h1",{children:"Quote Generator"})})}var u=n(13),j=n(14),h=n(17),b=n(16),d=n(15),l=n.n(d),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).randomBtn=function(t){t.preventDefault(),l.a.get("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((function(t){c.setState({quote:t.data.data[0]})}))},c.state={quote:""},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"quote",children:this.state.quote.quoteText}),Object(s.jsx)("h3",{className:"author",children:this.state.quote.quoteAuthor}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",onClick:this.randomBtn,className:"p-3 mb-2 bg-warning text-white",children:Object(s.jsx)("b",{children:"  New Quote  "})})]})}}]),n}(c.Component);var p=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{}),Object(s.jsx)(O,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.126275e6.chunk.js.map