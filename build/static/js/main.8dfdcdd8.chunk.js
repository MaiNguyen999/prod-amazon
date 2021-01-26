(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c(20),s=c.n(a),i=(c(45),c.p,c(46),c(10)),d=c(14),o=c.n(d),l=c(9),u=c(12),j=c.n(u),b=c(17),h="PRODUCT_LIST_REQUEST",p="PRODUCT_LIST_SUCCESS",O="PRODUCT_LIST_FAIL",m="PRODUCT_DETAILS_REQUEST",x="PRODUCT_DETAILS_SUCCESS",v="PRODUCT_DETAILS_FAIL";var f=function(e){var t=Object(l.c)((function(e){return e.productList})),c=t.products,a=t.loading,s=t.error,d=Object(l.b)();return Object(n.useEffect)((function(){return d(function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:h}),e.next=4,o.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:p,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:O,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),function(){}}),[]),a?Object(r.jsx)("div",{children:"Loading..."}):s?Object(r.jsx)("div",{children:"Error"}):Object(r.jsx)("ul",{className:"products",children:c.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"product",children:[Object(r.jsx)(i.b,{to:"/products/"+e.id,children:Object(r.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),Object(r.jsx)("div",{className:"product-name",children:Object(r.jsx)(i.b,{to:"/products/"+e.id,children:e.name})}),Object(r.jsx)("div",{className:"product-brand",children:e.brand}),Object(r.jsx)("div",{className:"product-price",children:e.price}),Object(r.jsxs)("div",{className:"product-rating",children:[e.rating," Stars (",e.numReviews," Reviews)"]})]})},e.id)}))})},g=c(15),y=c(39);var S=function(e){var t=Object(n.useState)(1),c=Object(y.a)(t,2),a=c[0],s=c[1],d=Object(l.c)((function(e){return e.productDetails})),u=d.product,h=d.loading,p=d.error,O=Object(l.b)();return Object(n.useEffect)((function(){var t;return O((t=e.match.params.id,function(){var e=Object(b.a)(j.a.mark((function e(c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:m,payload:t}),e.next=4,o.a.get("/api/products/"+t);case 4:r=e.sent,n=r.data,c({type:x,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c({type:v,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),function(){}}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(i.b,{className:"back-to-result",to:"/",children:"Back to result"})}),h?Object(r.jsx)("div",{children:"Loading..."}):p?Object(r.jsx)("div",{children:p}):Object(r.jsxs)("div",{className:"details",children:[Object(r.jsx)("div",{className:"details-image",children:Object(r.jsx)("img",{src:u.image,alt:"product"})}),Object(r.jsx)("div",{className:"details-info",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("h4",{children:u.name})}),Object(r.jsxs)("li",{children:[u.rating," Stars (",u.numReviews," Reviews)"]}),Object(r.jsxs)("li",{children:["Price: ",Object(r.jsxs)("b",{children:["$",u.price]})]}),Object(r.jsxs)("li",{children:["Description:",Object(r.jsx)("div",{children:u.description})]})]})}),Object(r.jsx)("div",{className:"details-action",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Price: ",u.price]}),Object(r.jsxs)("li",{children:["Status: ",u.countInStock>0?"In Stock":"Out of stock"]}),Object(r.jsxs)("li",{children:["Qty:"," ",Object(r.jsx)("select",{value:a,onChange:function(e){s(e.target.value)},children:Object(g.a)(Array(u.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(r.jsx)("li",{children:u.countInStock>0&&Object(r.jsx)("button",{className:"button",onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+a)},children:"Add to Cart"})})]})})]})]})},I=c(3),N="CART_ADD_ITEM",C="CART_REMOVE_ITEM",k=c(19),E=c.n(k),T=function(e,t){return function(){var c=Object(b.a)(j.a.mark((function c(r,n){var a,s,i,d;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,o.a.get("/api/products/"+e);case 3:a=c.sent,s=a.data,r({type:N,payload:{product:s.id,name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),i=n(),d=i.cart.cartItems,E.a.set("cartItems",JSON.stringify(d)),c.next=12;break;case 10:c.prev=10,c.t0=c.catch(0);case 12:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e,t){return c.apply(this,arguments)}}()};var _=function(e){var t=Object(l.c)((function(e){return e.cart}));console.log(t);var c=t.cartItems,a=e.match.params.id,s=e.location.search?Number(e.location.search.split("=")[1]):1,d=Object(l.b)();Object(n.useEffect)((function(){a&&d(T(a,s))}),[]);var o=function(e){d(function(e){return function(t,c){t({type:C,payload:e});var r=c().cart.cartItems;E.a.set("cartItems",JSON.stringify(r))}}(e))};return Object(r.jsxs)("div",{className:"cart",children:[Object(r.jsx)("div",{className:"cart-list",children:Object(r.jsxs)("ul",{className:"cart-list-container",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Shopping Cart"}),Object(r.jsx)("div",{children:"Price"})]}),0===c.length?Object(r.jsx)("div",{children:"Cart is empty"}):c.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{className:"cart-image",children:Object(r.jsx)("img",{src:e.image,alt:"product"})}),Object(r.jsxs)("div",{className:"cart-name",children:[Object(r.jsx)("div",{children:Object(r.jsx)(i.b,{to:"/product/"+e.product,children:e.name})}),Object(r.jsxs)("div",{children:["Qty:",Object(r.jsx)("select",{value:e.qty,onChange:function(t){return d(T(e.product,t.target.value))},children:Object(g.a)(Array(e.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return o(e.product)},children:"Delete"})]})]}),Object(r.jsxs)("div",{children:["$",e.price]})]})}))]})}),Object(r.jsxs)("div",{className:"cart-action",children:[Object(r.jsxs)("h3",{children:["Subtotal ( ",c.reduce((function(e,t){return e+t.qty}),0)," items) : $ ",c.reduce((function(e,t){return e+t.price*t.qty}),0)]}),Object(r.jsx)("button",{className:"button primary full-width",disabled:0===c.length,children:"Proceed to checkout"})]})]})};var w=function(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{className:"grid-container",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsxs)("div",{className:"brand",children:[Object(r.jsx)("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")},children:"\u2630"}),Object(r.jsx)(i.b,{to:"/",children:"amazon"})]}),Object(r.jsxs)("div",{className:"header-links",children:[Object(r.jsx)("a",{href:"cart.html",children:"Cart"}),Object(r.jsx)("a",{href:"signin.html",children:"Sign In"})]})]}),Object(r.jsxs)("aside",{className:"sidebar",children:[Object(r.jsx)("h3",{children:"Shopping Catergories"}),Object(r.jsx)("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")},children:"x"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"index.html",children:"Pants"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"index.html",children:"Shirts"})})]})]}),Object(r.jsx)("main",{className:"main",children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(I.a,{path:"/products/:id",component:S}),Object(r.jsx)(I.a,{path:"/",exact:!0,component:f}),Object(r.jsx)(I.a,{path:"/cart/:id?",component:_})]})}),Object(r.jsx)("footer",{className:"footer",children:"All rights reserved."})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},L=c(11);var R=c(38);var P={cart:{cartItems:E.a.getJSON("cartItems")||[]}},A=Object(L.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0,products:[]};case p:return{loading:!1,products:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case x:return{loading:!1,product:t.payload};case v:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}:{cartItems:[].concat(Object(g.a)(e.cartItems),[c])};case C:return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};default:return e}}}),U=(window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||L.d,Object(L.e)(A,P,Object(L.d)(Object(L.a)(R.a))));s.a.render(Object(r.jsxs)(l.a,{store:U,children:[" ",Object(r.jsx)(w,{})," "]}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.8dfdcdd8.chunk.js.map