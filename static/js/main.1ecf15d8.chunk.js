(this["webpackJsonpbeer-shop"]=this["webpackJsonpbeer-shop"]||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},242:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),i=n.n(c),s=n(62),l=(n(165),n(166),n(22)),o=n(47),u=n(271),j=n(269),b=n(46),d=n(270),p=(n(167),n(21)),h=n(268),m=n(266),O=(n(168),n(6)),f={rules:[{type:"object",required:!0,message:"Please select birth date!"}]},x={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},v={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function g(e){var t=e.isVisible,n=h.a.useForm(),r=Object(o.a)(n,1)[0];return Object(O.jsxs)(h.a,Object(p.a)(Object(p.a)({},x),{},{form:r,name:"register",onFinish:function(e){console.log("Received values of form: ",e),r.resetFields(),t()},scrollToFirstError:!0,children:[Object(O.jsx)(h.a.Item,{name:"firstname",label:"First name",rules:[{required:!0,message:"Please input your first name!",whitespace:!0},{pattern:"^[a-zA-Z]{1,20}$",message:"Please use only latin letters!"}],children:Object(O.jsx)(j.a,{})}),Object(O.jsx)(h.a.Item,{name:"secondname",label:"Second name",rules:[{required:!0,message:"Please input your second name!",whitespace:!0},{pattern:"^[a-zA-Z]{1,20}$",message:"Please use only latin letters!"}],children:Object(O.jsx)(j.a,{})}),Object(O.jsx)(h.a.Item,Object(p.a)(Object(p.a)({name:"date-picker",label:"Birth Date"},f),{},{children:Object(O.jsx)(m.a,{})})),Object(O.jsx)(h.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"},function(){return{validator:function(e,t){return!t||t.length>=6?Promise.resolve():Promise.reject(new Error("Please input 6 or more symbols in your password"))}}}],hasFeedback:!0,children:Object(O.jsx)(j.a.Password,{})}),Object(O.jsx)(h.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(O.jsx)(j.a.Password,{})}),Object(O.jsx)(h.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(O.jsx)(j.a,{})}),Object(O.jsx)(h.a.Item,Object(p.a)(Object(p.a)({},v),{},{children:Object(O.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))}var y=n(20),w="SET_API_DATA",_="SET_BEER_NAME",P="SET_CART_ITEMS",N="SET_CURRENT_PAGE",I="SET_FILTER",E=function(e){return{type:N,payload:e}};function C(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.pagination.currentPage})),n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1],l=Object(r.useState)(!1),p=Object(o.a)(l,2),h=p[0],m=p[1];return Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)(u.b,{direction:"vertical",children:Object(O.jsx)(j.a,{placeholder:"Type name of beer",onChange:function(n){var r,a=n.target;""===a.value.trim()&&""!==a.value||e((r=a.value,{type:_,payload:r})),1===t&&""!==a.value||e(E(1))}})}),Object(O.jsxs)("div",{className:"buttons_wrapper",children:[Object(O.jsx)(s.b,{to:"/cart",children:Object(O.jsx)(b.a,{id:"cart_btn",children:"Cart"})}),Object(O.jsx)(b.a,{id:"sign_up_btn",type:"primary",onClick:function(){!1===h&&(console.log("\u041b\u041e\u0413 \u0414\u041b\u042f \u0414\u0415\u041d\u0418\u0421\u0410: \u0412\u043e\u0440\u043d\u0438\u043d\u0433 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0437-\u0437\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 Ant design(\u043b\u0438\u0431\u0430 \u043f\u043e \u0442\u0438\u043f\u0443 material ui). \u041c\u043e\u0436\u043d\u043e \u0443\u0431\u0440\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0443\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0440\u0438\u043a\u0442 \u043c\u043e\u0434, \u043d\u043e \u044d\u0442\u043e \u0433\u043b\u0443\u043f\u043e. \u041b\u0438\u0431\u043e \u0443\u0431\u0438\u0440\u0430\u0442\u044c \u0440\u0435\u0444\u0430\u043c\u0438 \u0433\u0434\u0435-\u0442\u043e \u0432 \u043d\u043e\u0434 \u043c\u043e\u0434\u0443\u043b\u044f\u0445."),m(!0)),i(!0)},children:"Sign up"})]}),Object(O.jsx)(d.a,{visible:c,title:"Registration",onOk:function(){setTimeout((function(){i(!1)}),1e3)},onCancel:function(){i(!1)},footer:null,children:Object(O.jsx)(g,{isVisible:function(){return i(!1)}})})]})}var k=n(82),T=n.n(k),S=n(124),A=(n(242),n(151)),R=n.n(A).a.create({baseURL:"https://api.punkapi.com/v2",responseType:"json"}),F=n(157),D=function(e){return{type:P,payload:e}};n(260);function B(e){var t=e.item,n=Object(y.b)(),a=Object(y.c)((function(e){return e.catalogItem.cartItems})),c=t.image_url,i=t.id,s=t.name,l=t.abv,u=t.ibu,j=t.target_fg,b=t.target_og,d=t.ebc,p=t.srm,h=t.ph,m=t.attenuation_level,f=function(){return void 0!==a.find((function(e){return e.id===i?1:0}))},x=Object(r.useState)(f()),v=Object(o.a)(x,2),g=v[0],w=v[1];return Object(O.jsxs)("div",{className:"wrapper_item",children:[Object(O.jsx)("img",{src:c||"https://clck.ru/U9RrJ",alt:""}),Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("h4",{children:s}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"ABV: "}),l]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"IBU: "}),null===u?0:u]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"FG/OG: "}),j,"/",b]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"EBC: "}),null===d?0:d]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"SRM: "}),null===p?0:p]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Ph: "}),h]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Attenuation level: "}),m]}),Object(O.jsxs)("div",{className:"checkbox_wrapper",children:[Object(O.jsx)("input",{type:"checkbox",name:"Add to cart",id:i,checked:f(),onChange:!1===g?function(){w(!0),0===a.filter((function(e){return e.id!==i?0:1})).length&&n(D([].concat(Object(F.a)(a),[{id:i,name:s,image_url:c}])))}:function(){w(!1);var e=a.filter((function(e){return e.id!==i?e:null}));n(D(e))}}),Object(O.jsx)("label",{htmlFor:"add_to_cart",children:"Add to cart"})]})]})]},i)}var q=n(267);function U(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e})),n=Object(r.useState)(1),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(O.jsx)("div",{className:"pagination",children:Object(O.jsx)(q.a,{showSizeChanger:!1,current:t.header.beerName.length>=1&&1===t.pagination.currentPage||0===t.header.beerName.length&&1===t.pagination.currentPage?1:c,onChange:function(t){i(t),e(E(t))},total:t.main.apiData.length?t.main.apiData.length:1})})}n(261);function V(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.filter.filter}));return Object(O.jsx)("div",{className:"filter",children:Object(O.jsxs)("select",{onChange:function(t){var n,r=t.target;e((n=r.value,{type:I,payload:n}))},value:t,children:[Object(O.jsx)("option",{value:"",children:"Choose a filter"}),Object(O.jsx)("option",{value:"abv",children:"ABV"}),Object(O.jsx)("option",{value:"ibu",children:"IBU"}),Object(O.jsx)("option",{value:"ebc",children:"EBC"})]})})}var z=function(e){return{type:w,payload:e}},M=function(e,t){switch(t){case"abv":return e.sort((function(e,t){return e.abv>t.abv?1:-1}));case"ibu":return e.sort((function(e,t){return e.ibu>t.ibu?1:-1}));case"ebc":return e.sort((function(e,t){return e.ebc>t.ebc?1:-1}));default:return e}};function G(){var e,t=Object(y.b)(),n=Object(y.c)((function(e){return e})),a=n.filter,c=n.header,i=n.catalogItem,s=n.pagination,l=n.main;Object(r.useEffect)((function(){function e(){return(e=Object(S.a)(T.a.mark((function e(){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c.beerName){e.next=6;break}return e.next=3,R.get("beers?per_page=80");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,R.get("beers?page=1&per_page=80&beer_name=".concat(c.beerName));case 8:e.t0=e.sent;case 9:n=e.t0,r=M(n.data,a.filter),t(z(r));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(S.a)(T.a.mark((function e(){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c.beerName){e.next=6;break}return e.next=3,R.get("beers?per_page=80");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,R.get("beers?page=1&per_page=80&beer_name=".concat(c.beerName));case 8:e.t0=e.sent;case 9:n=e.t0,r=M(n.data,a.filter),t(z(r));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.filter,c.beerName,i.cartItems,s.currentPage,t]);var o=l.apiData.slice(10*(s.currentPage-1),10*s.currentPage);return Object(O.jsxs)("div",{id:"main",children:[Object(O.jsx)("h3",{children:"Catalog"}),Object(O.jsx)("div",{className:"filters",children:Object(O.jsx)(V,{})}),Object(O.jsx)("div",{className:"items_wrapper",children:0!==(null===(e=l.apiData)||void 0===e?void 0:e.length)?o.map((function(e){return Object(O.jsx)(B,{item:e},e.id)})):Object(O.jsx)("div",{style:{fontWeight:"700",fontSize:"2rem"},children:"Catalog has no items now"})}),Object(O.jsx)(U,{item:s.currentPage})]})}n(262),n(263);function J(e){var t=e.item,n=t.image_url,r=t.name,a=t.id,c=Object(y.b)(),i=Object(y.c)((function(e){return e.catalogItem.cartItems}));return Object(O.jsx)("div",{className:"cart_wrapper",children:Object(O.jsxs)("div",{className:"cart_item",children:[Object(O.jsx)("img",{src:n,alt:""}),Object(O.jsx)("div",{className:"description",children:Object(O.jsx)("h4",{children:r})}),Object(O.jsx)("div",{className:"cart_button",children:Object(O.jsx)("button",{onClick:function(e){var t=e.target,n=i.filter((function(e){return e.id!==Number(t.id)?e:null}));c(D(n))},id:a,children:"Remove item"})})]})})}function L(){var e=Object(y.c)((function(e){return e.catalogItem.cartItems}));return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(s.b,{to:"/main",style:{textDecoration:"none"},children:Object(O.jsx)("div",{id:"arrow",title:"Return to catalog",children:"\u2190"})}),Object(O.jsx)("h3",{children:"Cart"}),Object(O.jsx)("div",{id:"cart",children:0===e.length?null:e.map((function(e){return Object(O.jsx)(J,{item:e},e.id)}))})]})}var W=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(C,{}),Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{path:"/main",component:G}),Object(O.jsx)(l.b,{path:"/cart",component:L}),Object(O.jsx)(l.a,{to:"/main"})]})]})},Z=n(61),$={cartItems:[]};var H={filter:""};var K={beerName:""};var Q={apiData:[]};var X={currentPage:1};var Y=Object(Z.combineReducers)({catalogItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(p.a)(Object(p.a)({},e),{},{cartItems:t.payload});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(p.a)(Object(p.a)({},e),{},{filter:t.payload});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{beerName:t.payload});default:return e}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(p.a)(Object(p.a)({},e),{},{apiData:t.payload});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.payload});default:return e}}}),ee=n(153),te=Object(Z.createStore)(Y,Object(ee.composeWithDevTools)());i.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y.a,{store:te,children:Object(O.jsx)(W,{})})})}),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.1ecf15d8.chunk.js.map