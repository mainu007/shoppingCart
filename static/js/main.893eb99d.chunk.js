(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{71:function(e,t,a){e.exports=a(83)},76:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(14),i=a(11),m=a(42),s=a(28),u=a(17),d=a(40),p=a(39),g=[{id:1,model:"Pixel - Black",name:"Google",image:"images/product-1.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:460,count:0,total:0,memory:"64GB storage, 4GB ram"},{id:2,model:"Samsung S7",name:"Samsung",image:"images/product-2.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:287,count:0,total:0,memory:"128GB storage, 6GB ram"},{id:3,model:"HTC 10 - Black",name:"HTC",image:"images/product-3.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:369,count:0,total:0,memory:"64GB storage, 4GB ram"},{id:4,model:"HTC 10 - White",name:"HTC",image:"images/product-4.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:379,count:0,total:0,memory:"64GB storage, 3GB ram"},{id:5,model:"Desire 626s",name:"HTC",image:"images/product-5.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:510,count:0,total:0,memory:"128GB storage, 4GB ram"},{id:6,model:"Vintage Iphone",name:"Iphone",image:"images/product-6.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:640,count:0,total:0,memory:"256GB storage, 6GB ram"},{id:7,model:"Iphone 7",name:"Iphone",image:"images/product-7.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:510,count:0,total:0,memory:"128GB storage, 4GB ram"},{id:8,model:"Smashed Iphone",name:"Iphone",image:"images/product-8.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:510,count:0,total:0,memory:"64GB storage, 3GB ram"}],E={id:1,model:"Pixel - Black",name:"Google",image:"images/product-1.png",description:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.",display:"Fluid AMOLED 6.67 inches",inCart:!1,price:460,count:0,total:0,memory:"64GB storage, 4GB ram"},h=r.a.createContext(),f=h.Provider,x=h.Consumer,y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],detailProduct:E,cartProduct:[],openModal:!1,calculate:{totalItem:0,subtotal:0,totalTax:0,total:0}},e.setProducts=function(){var t=[];g.forEach((function(e){var a=Object(m.a)({},e);t=[].concat(Object(i.a)(t),[a])})),e.setState({products:t})},e.addAProduct=function(t){return Object(i.a)(e.state.products).find((function(e){return e.id===t}))},e.handleDetail=function(t){var a=e.addAProduct(t);e.setState({detailProduct:a})},e.addToCart=function(t){var a=e.addAProduct(t);a.inCart=!0,a.count=1,a.total=a.price;var n=[].concat(Object(i.a)(e.state.cartProduct),[a]);e.setState({cartProduct:n,openModal:!0},(function(){e.totalCal()}))},e.deleteProduct=function(t){var a=Object(i.a)(e.state.cartProduct).filter((function(e){return e.id!==t})),n=e.addAProduct(t);n.inCart=!1,n.count=0,n.total=0,e.setState({cartProduct:a},(function(){e.totalCal()}))},e.increment=function(t){var a=Object(i.a)(e.state.products),n=a.indexOf(e.addAProduct(t));a[n].count++,a[n].total=a[n].price*a[n].count,e.setState([a],(function(){e.totalCal()}))},e.decrement=function(t){var a=Object(i.a)(e.state.products),n=a.indexOf(e.addAProduct(t));a[n].count>1&&(a[n].count--,a[n].total=a[n].price*a[n].count,e.setState([a],(function(){e.totalCal()})))},e.totalCal=function(){var t=0,a=0;e.state.cartProduct.map((function(e){t+=e.total,a+=e.count}));var n=parseFloat((.2*t).toFixed(2)),r=t+n;e.setState({calculate:{subtotal:t,totalItem:a,totalTax:n,total:r}})},e.clearCart=function(){e.setState({cartProduct:[]},(function(){e.setProducts()}))},e.modalClose=function(){e.setState({openModal:!1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(f,{value:Object(m.a)(Object(m.a)({},this.state),{},{handleDetail:this.handleDetail,addToCart:this.addToCart,modalOnClose:this.modalClose,deleteProduct:this.deleteProduct,increment:this.increment,decrement:this.decrement,clearCart:this.clearCart})},this.props.children)}}]),a}(n.Component),b=(a(76),a(23)),v=a(111),_=a(113),C=a(114),N=a(115),O=a(112),B=a(60),j=a.n(B),P=a(110),k=a(4),T=a(59),A=a.n(T),S=Object(k.a)((function(e){return{badge:{right:-3,top:14,padding:"0 4px"}}}))(P.a),G=Object(v.a)({align_right:{marginLeft:"auto"},color_style:{color:"#fff"}});function L(){var e=G();return r.a.createElement(x,null,(function(t){return r.a.createElement(O.a,{component:l.b,to:"/cart","aria-label":"cart",className:e.align_right},r.a.createElement(S,{badgeContent:t.cartProduct.length,color:"secondary"},r.a.createElement(A.a,{className:e.color_style})))}))}var D=Object(v.a)({padding_x:{padding:"0 50px"}});function M(){var e=D();return r.a.createElement("div",null,r.a.createElement(_.a,{position:"static"},r.a.createElement(C.a,{className:e.padding_x},r.a.createElement(O.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",component:l.b,to:"/"},r.a.createElement(j.a,null)),r.a.createElement(N.a,{color:"inherit",component:l.b,to:"/"},"Products"),r.a.createElement(L,null))))}var I=a(116),F=a(43),W=Object(v.a)((function(e){return{container:{paddingTop:80},title_h4:{paddingBottom:10,marginBottom:15,borderBottom:"1px solid #ddd",fontWeight:500},button_style:{fontSize:20,lineHeight:"20px"},description_text:{fontSize:"1.25rem",color:"#757575"},text_container:{margin:"15px 0"},text_container_end:{borderBottom:"1px solid #ddd",margin:"15px 0",paddingBottom:10},button_margin:{marginBottom:60},images_style:{maxWidth:"100%"}}}));function q(){var e=W();return r.a.createElement(x,null,(function(t){var a=t.detailProduct,n=a.id,c=a.image,o=a.model,l=a.price,i=a.description,m=a.memory,s=a.display,u=a.inCart;return r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,xs:1,md:2}),r.a.createElement(I.a,{item:!0,xs:10,md:8},r.a.createElement(I.a,{container:!0,className:e.container},r.a.createElement(I.a,{item:!0,md:6},r.a.createElement("img",{className:e.images_style,src:"".concat("/shoppingCart","/").concat(c),alt:"product"})),r.a.createElement(I.a,{item:!0,md:6},r.a.createElement(F.a,{className:e.title_h4,variant:"h4"},"Product Title"),r.a.createElement(N.a,{className:e.button_style,size:"small",variant:"contained",color:"primary"},l,"$"),r.a.createElement(I.a,{container:!0,className:e.text_container},r.a.createElement(I.a,{item:!0,xs:4},r.a.createElement(F.a,{variant:"h6"},"Model")),r.a.createElement(I.a,{item:!0,xs:8},r.a.createElement(F.a,{className:e.description_text,text:"secondary",variant:"subtitle1"},o))),r.a.createElement(I.a,{container:!0,className:e.text_container},r.a.createElement(I.a,{item:!0,xs:4},r.a.createElement(F.a,{variant:"h6"},"Description")),r.a.createElement(I.a,{item:!0,xs:8},r.a.createElement(F.a,{className:e.description_text,text:"secondary",variant:"subtitle1"},i))),r.a.createElement(I.a,{container:!0,className:e.text_container},r.a.createElement(I.a,{item:!0,xs:4},r.a.createElement(F.a,{variant:"h6"},"Memory")),r.a.createElement(I.a,{item:!0,xs:8},r.a.createElement(F.a,{className:e.description_text,text:"secondary",variant:"subtitle1"},m))),r.a.createElement(I.a,{container:!0,className:e.text_container_end},r.a.createElement(I.a,{item:!0,xs:4},r.a.createElement(F.a,{variant:"h6"},"Display")),r.a.createElement(I.a,{item:!0,xs:8},r.a.createElement(F.a,{className:e.description_text,text:"secondary",variant:"subtitle1"},s))),r.a.createElement(x,null,(function(t){var a=t.addToCart;return r.a.createElement(N.a,{className:e.button_margin,onClick:function(){return a(n)},variant:"contained",color:"secondary",disabled:!!u},u?"In Cart":"Add to cart")}))))),r.a.createElement(I.a,{item:!0,xs:1,md:2}))}))}var z=a(117),$=a(118),w=a(121),H=a(120),J=a(119),R=a(38),Y=a.n(R),U=Object(v.a)({root:{maxWidth:"100%"},media:{height:140,backgroundSize:"contain",marginBottom:30},margin_left:{marginLeft:8},margin_bottom:{marginBottom:10},padding_some:{paddingTop:50}});function V(e){var t=e.product,a=t.id,n=t.image,c=t.model,o=t.price,i=t.description,m=t.inCart,s=U();return r.a.createElement(x,null,(function(e){var t=e.handleDetail,u=e.addToCart;return r.a.createElement(I.a,{item:!0,lg:3,md:6,sm:6},r.a.createElement(z.a,{className:s.root},r.a.createElement($.a,{className:s.padding_some,component:l.b,to:"/details",onClick:function(){return t(a)}},r.a.createElement(J.a,{className:s.media,image:"".concat("/shoppingCart","/").concat(n),title:"Contemplative Reptile"}),r.a.createElement(H.a,null,r.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},c),r.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},i.slice(0,130)))),r.a.createElement(w.a,{className:s.margin_bottom},r.a.createElement(F.a,{className:s.margin_left,variant:"h6"},o,"$"),r.a.createElement(O.a,{onClick:function(){return u(a)},size:"small",color:"primary",disabled:m},r.a.createElement(Y.a,null)))))}))}var K=Object(v.a)({title:{marginTop:50,fontWeight:500,marginBottom:40},product_container:{marginBottom:60}}),Q=function(){var e=K();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.product_container},r.a.createElement(F.a,{className:e.title,variant:"h2",mt:50,align:"center"},"Our Products"),r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,lg:1,md:2,sm:1,xs:1}),r.a.createElement(I.a,{item:!0,lg:10,md:8,sm:10,xs:10},r.a.createElement(I.a,{container:!0,spacing:4},r.a.createElement(x,null,(function(e){return e.products.map((function(e){return r.a.createElement(V,{key:e.id,product:e})}))})))),r.a.createElement(I.a,{item:!0,lg:1,md:2,sm:1,xs:1}))))},X=a(61),Z=a.n(X),ee=a(62),te=a.n(ee),ae=a(63),ne=a.n(ae),re=Object(v.a)((function(e){return{image_style:{maxWidth:"50px"},text_right:{textAlign:"right",paddingRight:10},padding_none:{padding:0},text_center:{textAlign:"center"}}}));function ce(e){var t=e.product,a=t.id,n=t.image,c=t.model,o=t.price,l=t.total,i=t.count,m=re();return r.a.createElement(x,null,(function(e){var t=e.deleteProduct,s=e.increment,u=e.decrement;return r.a.createElement(I.a,{item:!0,lg:9,md:12,sm:12},r.a.createElement(I.a,{container:!0,alignItems:"center"},r.a.createElement(I.a,{item:!0,xs:2,spacing:2},r.a.createElement("img",{className:m.image_style,src:"".concat("/shoppingCart","/").concat(n),alt:"image"})),r.a.createElement(I.a,{item:!0,xs:2},r.a.createElement(F.a,{variant:"h6"},c)),r.a.createElement(I.a,{item:!0,xs:2},r.a.createElement(I.a,{container:!0,alignItems:"center"},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{className:m.text_right},i)),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(I.a,{item:!0},r.a.createElement(O.a,{onClick:function(){return s(a)},className:m.padding_none},r.a.createElement(Z.a,null))),r.a.createElement(I.a,{item:!0},r.a.createElement(O.a,{onClick:function(){return u(a)},className:m.padding_none,disabled:1===i},r.a.createElement(te.a,null))))))),r.a.createElement(I.a,{item:!0,xs:2,className:m.text_center},r.a.createElement(O.a,{onClick:function(){return t(a)},className:m.padding_none},r.a.createElement(ne.a,null))),r.a.createElement(I.a,{item:!0,xs:2},r.a.createElement(F.a,{variant:"h6",className:m.text_right},"Unit: ",o,"$")),r.a.createElement(I.a,{item:!0,xs:2},r.a.createElement(F.a,{variant:"h6",className:m.text_right},"Total: ",l,"$"))))}))}var oe=Object(v.a)({root:{minWidth:"100%",padding:"15px 20px",marginTop:100},right_style:{textAlign:"right"},margin_style:{marginBottom:10},margin_style2:{marginBottom:10,borderBottom:"1px solid #eee",paddingBottom:15}});function le(){var e=oe();return r.a.createElement(x,null,(function(t){var a=t.calculate,n=a.totalItem,c=a.subtotal,o=a.total,l=a.totalTax;return r.a.createElement(z.a,{className:e.root},r.a.createElement(H.a,null,r.a.createElement(I.a,{container:!0,className:e.margin_style},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6"},"Total item:")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6",className:e.right_style},n))),r.a.createElement(I.a,{container:!0,className:e.margin_style},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6"},"Subtotal:")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6",className:e.right_style},"$",c))),r.a.createElement(I.a,{container:!0,className:e.margin_style2},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6"},"Total tax:")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6",className:e.right_style},"$",l))),r.a.createElement(I.a,{container:!0,className:e.margin_style},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6"},"Total:")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(F.a,{variant:"h6",className:e.right_style},"$",o)))),r.a.createElement(w.a,null,r.a.createElement(N.a,{size:"small",variant:"contained",color:"primary"},"Checkout"),r.a.createElement(N.a,{onClick:t.clearCart,size:"small",variant:"contained",color:"secondary"},"clear cart")))}))}var ie=Object(v.a)({style_h3:{fontWeight:500,textAlign:"center",marginTop:60},margin_bottom:{marginBottom:60}}),me=function(){var e=ie();return r.a.createElement(x,null,(function(t){return t.cartProduct.length?r.a.createElement("div",{className:e.margin_bottom},r.a.createElement(F.a,{variant:"h3",className:e.style_h3},"Your cart"),r.a.createElement(I.a,{container:!0,direction:"row"},r.a.createElement(I.a,{item:!0,xs:1}),r.a.createElement(I.a,{item:!0,xs:10},r.a.createElement(I.a,{container:!0,spacing:4},t.cartProduct.map((function(e){return r.a.createElement(ce,{key:e.id,product:e})})),r.a.createElement(I.a,{item:!0,xs:12,lg:3},r.a.createElement(le,null)))),r.a.createElement(I.a,{item:!0,xs:1}))):r.a.createElement(F.a,{variant:"h3",className:e.style_h3},"Your cart is currently empty.")}))},se=a(85),ue=Object(se.a)({text_center:{textAlign:"center"},margin_top:{textAlign:"center",marginTop:80,fontWeight:700}}),de=function(){var e=ue();return r.a.createElement("div",null,r.a.createElement(F.a,{className:e.margin_top,variant:"h2"},"404"),r.a.createElement(F.a,{className:e.text_center,variant:"h3"},"page not found."))},pe=a(41),ge=a(124),Ee=a(123),he=a(86),fe=a(122),xe=a(64),ye=a.n(xe),be=Object(v.a)({root:{minWidth:400},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},header_style:{backgroundColor:"#eee"},image_style:{maxWidth:"40px"},name_style:{display:"flex"},item_style:{borderBottom:"1px solid #eee",padding:"5px 0"},footer_style:{padding:16},content_style:{padding:"16px 16px 0"}});function ve(e){var t=e.cartProduct,a=e.handleClose,n=be();return r.a.createElement(z.a,{className:n.root,variant:"outlined"},r.a.createElement(fe.a,{className:n.header_style,avatar:r.a.createElement(Y.a,null),action:r.a.createElement(O.a,{onClick:a},r.a.createElement(ye.a,{color:"secondary"})),title:"Shopping Cart",subheader:(new Date).toDateString()}),r.a.createElement(H.a,{className:n.content_style},t.map((function(e){var t=e.image,a=e.model,c=e.price,o=e.id;return r.a.createElement(I.a,{key:o,container:!0,className:n.item_style},r.a.createElement(I.a,{item:!0,xs:3},r.a.createElement("img",{className:n.image_style,src:"".concat("/shoppingCart","/").concat(t),alt:"img"})),r.a.createElement(I.a,{item:!0,xs:6,className:n.name_style},r.a.createElement(I.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(F.a,{color:"textSecondary",variant:"h6"},a))),r.a.createElement(I.a,{item:!0,xs:3,className:n.name_style},r.a.createElement(I.a,{container:!0,direction:"row",alignItems:"center",justify:"flex-end"},r.a.createElement(F.a,{variant:"h6"},"$",c))))}))),r.a.createElement(w.a,{className:n.footer_style},r.a.createElement(N.a,{component:l.b,to:"/cart",size:"small",color:"secondary",variant:"contained",onClick:a},"Go To Cart")))}var _e=Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"}}}));function Ce(e){var t=e.openModal,a=e.modalOnClose,n=e.cartProduct,c=_e(),o=r.a.useState(!1),l=Object(pe.a)(o,2),i=l[0],m=l[1],s=function(){m(!1)};return r.a.useEffect((function(){t&&(a(),m(!0))})),r.a.createElement("div",null,r.a.createElement(ge.a,{className:c.modal,open:i,onClose:s,closeAfterTransition:!0,BackdropComponent:Ee.a,BackdropProps:{timeout:200}},r.a.createElement(he.a,{in:i},r.a.createElement(ve,{cartProduct:n,handleClose:s}))))}var Ne=function(){return r.a.createElement(x,null,(function(e){return r.a.createElement(Ce,{openModal:e.openModal,modalOnClose:e.modalOnClose,cartProduct:e.cartProduct})}))},Oe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:Q}),r.a.createElement(b.a,{path:"/details",component:q}),r.a.createElement(b.a,{path:"/cart",component:me}),r.a.createElement(b.a,{path:"",component:de})),r.a.createElement(Ne,null))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(y,null,r.a.createElement(Oe,null)))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.893eb99d.chunk.js.map