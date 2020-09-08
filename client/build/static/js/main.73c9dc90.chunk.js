(this["webpackJsonpapp-factory"]=this["webpackJsonpapp-factory"]||[]).push([[0],{122:function(e){e.exports=JSON.parse('[{"title":"HTML"},{"title":"JavaScript"},{"title":"Css"},{"title":"jQuery"},{"title":"React"},{"title":"Angular"},{"title":"Bootstrap"},{"title":"MongoDB"},{"title":"Express"},{"title":"Node"},{"title":"CLI"}]')},125:function(e,t,a){e.exports=a.p+"static/media/google-logo.cea6dc4b.webp"},147:function(e,t,a){e.exports=a(209)},152:function(e,t,a){},176:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(152),a(13)),l=a(11),s=a(256),u=a(9),m=a(36),p=a(84),d=a.n(p),b=a(115),f=a.n(b),g=a(260),h=a(60),E=a(261),v=a(262),O=a(296),j=a(129),k=a(297),x=a(265),y=a(17),C=a.n(y),w=a(33),N=a(39),P=a.n(N),R=Object(n.createContext)(),S=function(e){var t=e.children,a=Object(n.useState)({}),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],p=u[1],d=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/user",{withCredentials:!0});case 3:t=e.sent,console.log(t.data.user),l(t.data.user),p(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("ERROR - UserState.js - getUser",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),r.a.createElement("div",null,r.a.createElement(R.Provider,{value:{user:c,setUser:l,isLoaded:m,setIsLoaded:p}},t))},I=a(4),B=a(259),L=a(295),A=Object(s.a)((function(e){return{link:{textDecoration:"none !important",color:"black"},pointer:{cursor:"pointer"}}})),T=Object(I.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(B.a);function D(e){var t=e.handleMenu,a=Object(n.useContext)(R).user,o=A();return r.a.createElement("div",null,r.a.createElement(T,{className:o.pointer,overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:t},r.a.createElement(L.a,{alt:a.displayName,src:a.avatar||"Open Menu"})))}var M=Object(s.a)((function(e){return{root:{flexGrow:1},homeButton:{color:"#fff",padding:"5px",paddingTop:"0"},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleMobile:Object(l.a)({flexGrow:1,display:"block",textAlign:"center",marginTop:e.spacing(1)},e.breakpoints.up("sm"),{display:"none"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.c)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),link:{textDecoration:"none !important",color:"black"},pointer:{cursor:"pointer"}}}));function F(){var e=Object(n.useContext)(R),t=e.user,a=e.isLoaded,o=M(),c=r.a.useState(null),l=Object(i.a)(c,2),s=l[0],u=l[1],p=Boolean(s),b=function(){u(null)};return r.a.createElement("div",{className:o.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(h.a,{className:o.titleMobile,variant:"h6",noWrap:!0},r.a.createElement(E.a,{component:m.b,to:"/","aria-label":"Home",className:o.homeButton},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:o.title,variant:"h6",noWrap:!0},r.a.createElement(E.a,{component:m.b,to:"/","aria-label":"Home",className:o.homeButton},r.a.createElement(d.a,null)),"App Factory"),r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(f.a,null)),r.a.createElement(O.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),t&&a?r.a.createElement("div",null,r.a.createElement(D,{handleMenu:function(e){u(e.currentTarget)}}),r.a.createElement(j.a,{id:"menu-appbar",className:o.pointer,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},keepMounted:!0,getContentAnchorEl:null,transformOrigin:{vertical:"top",horizontal:"center"},open:p,onClose:b},r.a.createElement(k.a,{onClick:b},"Profile"),r.a.createElement(k.a,{component:m.b,to:"/dashboard",onClick:b},"My dashboard"),r.a.createElement("a",{href:"https://app-factory-api.herokuapp.com/auth/logout",className:o.link},r.a.createElement(k.a,{onClick:function(){b()}},"Logout")))):r.a.createElement(x.a,{component:m.b,to:"/login","aria-label":"Login",color:"inherit"},"Login"))))}var W=a(14),G=a(266),H=Object(s.a)((function(){return{root:{textAlign:"center"}}}));function _(){var e=H(),t=r.a.useState(null),a=Object(i.a)(t,2),n=a[0],o=a[1],c=function(){o(null)};return r.a.createElement(G.a,{item:!0,xs:12,className:e.root},r.a.createElement(x.a,{"aria-controls":"filter-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},"Filter Apps"),r.a.createElement(j.a,{id:"filter-menu",anchorEl:n,open:Boolean(n),onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"center"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(k.a,{onClick:c},"Field"),r.a.createElement(k.a,{onClick:c},"Age"),r.a.createElement(k.a,{onClick:c},"User")))}var z=a(3),J=a(267),q=a(268),U=a(269),Y=a(270),K=a(271),$=a(76),Q=a(117),V=a.n(Q),X=a(116),Z=a.n(X),ee=a(85),te=a.n(ee),ae=a(293),ne=a(292);function re(e){return r.a.createElement(ne.a,Object.assign({elevation:6,variant:"filled"},e))}var oe=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function ce(e){var t=e.open,a=e.setOpen,n=oe(),o=function(e,t){"clickaway"!==t&&a(!1)};return r.a.createElement("div",{className:n.root},r.a.createElement(ae.a,{open:t,autoHideDuration:6e3,onClose:o},r.a.createElement(re,{onClose:o,severity:"info"},"Login to like a post!")))}var ie={allPosts:function(){var e=Object(w.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/posts");case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("ERROR - API.js - allPosts",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),likePost:function(){var e=Object(w.a)(C.a.mark((function e(t,a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.put("/api/posts/like",{postId:t,userId:a});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("ERROR - API.js - likePost",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},le=Object(s.a)((function(e){return{root:{width:"100%",marginBottom:20},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]},control:{padding:e.spacing(2)},score:{marginLeft:5},liked:{fill:"#52b202"}}}));function se(e){var t=e.id,a=e.title,o=e.description,c=e.details,s=e.score,u=e.likedBy,m=le(),p=Object(n.useContext)(R),d=p.user,b=p.isLoaded,f=r.a.useState(!1),g=Object(i.a)(f,2),v=g[0],O=g[1],j=Object(n.useState)(s),k=Object(i.a)(j,2),x=k[0],y=k[1],N=Object(n.useState)(null),S=Object(i.a)(N,2),I=S[0],B=S[1],A=r.a.useState(!1),T=Object(i.a)(A,2),D=T[0],M=T[1];Object(n.useEffect)((function(){d&&(u.includes(d._id)&&b?B(!0):B(!1))}),[b]);var F=function(){var e=Object(w.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=4;break}M(!0),e.next=15;break;case 4:return e.prev=4,y(x+1),B(!0),e.next=9,P.a.put("https://app-factory-api.herokuapp.com/api/posts/like",{postId:t,userId:d._id});case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error("ERROR - PostCard.js - likeHandler",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(w.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(x-1),B(!1),console.log(t),console.log(d._id),e.next=7,P.a.put("https://app-factory-api.herokuapp.com/api/posts/unlike",{postId:t,userId:d._id});case 7:a=e.sent,console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("ERROR - PostCard.js - unlikeHandler",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(J.a,{className:m.root},r.a.createElement(q.a,{avatar:r.a.createElement(L.a,{"aria-label":"post",className:m.avatar},"P"),action:r.a.createElement(E.a,{"aria-label":"settings"},r.a.createElement(Z.a,null)),key:a,title:a,subheader:"September 14, 2016"}),r.a.createElement(U.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},o)),r.a.createElement(Y.a,{disableSpacing:!0},b?[I&&b?r.a.createElement(E.a,{"aria-label":"thumb down",onClick:W},r.a.createElement(te.a,{className:m.liked}),r.a.createElement(h.a,{variant:"h6",className:m.score},x)):r.a.createElement(E.a,{"aria-label":"thumb up",onClick:F},r.a.createElement(te.a,null),r.a.createElement(h.a,{variant:"h6",className:m.score},x))]:null,r.a.createElement(E.a,{className:Object(z.a)(m.expand,Object(l.a)({},m.expandOpen,v)),onClick:function(e){e.stopPropagation(),O(!v)},"aria-expanded":v,"aria-label":"show more"},r.a.createElement(V.a,null))),r.a.createElement(K.a,{in:v,timeout:"auto",unmountOnExit:!0},r.a.createElement(U.a,null,r.a.createElement(h.a,{paragraph:!0},"More About:"),r.a.createElement(h.a,{paragraph:!0},c))),r.a.createElement(ce,{open:D,setOpen:M}))}var ue=a(289),me=Object(s.a)((function(e){return{root:Object(l.a)({"& > *":{marginTop:e.spacing(2),marginBottom:e.spacing(2)}},e.breakpoints.up(780),{position:"fixed",right:0,left:0,bottom:e.spacing(1)}),ul:{placeContent:"center"}}}));function pe(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.handleChange,o=me(),c=[],i=1;i<=Math.ceil(a/t);i++)c.push(i);return r.a.createElement("div",{className:o.root},r.a.createElement(ue.a,{count:c.length,onChange:n,color:"secondary",classes:o}))}function de(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(5),p=Object(i.a)(m,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.allPosts();case 3:t=e.sent,console.log(t),o(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("ERROR - PostResults.js - fetchPosts",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var d=s*p,b=d-p,f=a.slice(b,d);return r.a.createElement(r.a.Fragment,null,f.map((function(e){return r.a.createElement(G.a,{key:e.title,item:!0,xs:10},r.a.createElement(se,{id:e._id,title:e.title,description:e.summary,details:e.description,score:e.score,likedBy:e.likedBy}))})),r.a.createElement(G.a,{item:!0,xs:10},r.a.createElement(pe,{postsPerPage:p,totalPosts:a.length,handleChange:function(e,t){u(t)}})))}a(176);var be=a(272),fe=a(273),ge=a(118),he=a.n(ge),Ee=Object(s.a)((function(e){return{root:{marginTop:e.spacing(4)},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function ve(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{container:!0,justify:"center",alignItems:"center",className:e.root},r.a.createElement(_,null),r.a.createElement(de,null)),r.a.createElement(be.a,{in:!0},r.a.createElement(fe.a,{component:m.b,to:"/posts/new",className:e.fab,color:"secondary","aria-label":"New Post"},r.a.createElement(he.a,null))))}var Oe=a(119),je=a.n(Oe),ke=a(28),xe=a(55),ye=a(285);function Ce(e){var t=e.children,a=e.value,n=e.index,o=Object(xe.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),a===n&&r.a.createElement(ye.a,{p:3},t))}var we=a(287),Ne=a(274),Pe=a(131),Re=Object(s.a)((function(e){return{root:{flexGrow:1,height:"100%"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function Se(){var e=Re(),t=Object(n.useContext)(R),a=t.user,o=(t.isLoaded,Object(n.useState)([])),c=Object(i.a)(o,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/posts/user/".concat(t));case 2:a=e.sent,console.log(a.data),s(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(a._id)}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(Pe.a,{className:e.paper},r.a.createElement(h.a,{className:e.title,variant:"h1"},l.length),r.a.createElement(h.a,{variant:"body1"},"Your total number of posts"))),r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(Pe.a,{className:e.paper},"xs=6")),r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(Pe.a,{className:e.paper},"xs=6")),r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(Pe.a,{className:e.paper},"xs=3"))))}var Ie=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},Be=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));function Le(){var e=Be(),t=Object(ke.a)(),a=r.a.useState(0),n=Object(i.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static",color:"default"},r.a.createElement(we.a,{value:o,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(Ne.a,Object.assign({label:"Summary"},Ie(0))),r.a.createElement(Ne.a,Object.assign({label:"Posts"},Ie(1))))),r.a.createElement(je.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){c(e)}},r.a.createElement(Ce,{value:o,index:0,dir:t.direction},r.a.createElement(Se,null)),r.a.createElement(Ce,{value:o,index:1,dir:t.direction},"This can just be the simple listing of posts")))}function Ae(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,null))}var Te=a(128),De=a(20),Me=a(77),Fe=a(120),We=a.n(Fe),Ge=a(121),He=a.n(Ge),_e=a(288),ze=a(122),Je=a(286),qe=a(275),Ue=a(276),Ye=a(277),Ke=a(278),$e=a(291);function Qe(e){var t=e.postData,a=e.setPostData,n=e.handleChange,o=e.handleCategory,c=e.err,i=e.setErr,l=e.inputErrCheck;return r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12,sm:3},r.a.createElement(Je.a,{required:!0,fullWidth:!0,id:"title",name:"title",label:"Title",value:t.title,onChange:n,onBlur:l,error:c.title})),r.a.createElement(G.a,{item:!0,xs:12,sm:12},r.a.createElement(Je.a,{required:!0,fullWidth:!0,id:"summary",name:"summary",label:"Brief summary",value:t.summary,onChange:n,onBlur:l,error:c.summary})),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"h6"},"Select all categories that apply:"),r.a.createElement(qe.a,{required:!0,fullWidth:!0,error:c.categories||c.categoriesOverLimit,component:"fieldset"},r.a.createElement(Ue.a,{component:"legend"},"Pick up to two"),r.a.createElement(Ye.a,{row:!0},t.categories.map((function(e){var t=e.name,a=e.checked;return r.a.createElement(Ke.a,{key:t,label:t,control:r.a.createElement($e.a,{name:t,checked:a,onChange:o,inputProps:{"aria-label":"primary checkbox"}})})}))))),r.a.createElement(G.a,{item:!0,xs:12,sm:12},r.a.createElement(h.a,{variant:"h6",color:c.description?"error":"initial"},"Enter detailed description*:"),r.a.createElement(We.a,{editor:He.a,onChange:function(e,n){var r=n.getData();a(Object(De.a)(Object(De.a)({},t),{},{description:r})),i(Object(De.a)(Object(De.a)({},c),{},{description:0===r.length}))},onBlur:function(e,t){0===t.getData().length&&i(Object(De.a)(Object(De.a)({},c),{},{description:!0}))}})),r.a.createElement(G.a,{item:!0,xs:12,sm:12},r.a.createElement(_e.a,{multiple:!0,id:"tags-standard",options:ze,getOptionLabel:function(e){return e.title},renderInput:function(e){return r.a.createElement(Je.a,Object.assign({},e,{variant:"standard",label:"Technologies required (optional)"}))},onChange:function(e,n){return a(Object(De.a)(Object(De.a)({},t),{},{technologies:n}))}})))}var Ve=a(294),Xe=a(281),Ze=a(279),et=a(280);function tt(e){var t=e.isAlertOpen,a=e.setAlert,n=e.errorKey,o=function(){a({open:!1,key:""})};return r.a.createElement("div",null,r.a.createElement(Ve.a,{open:t,onClose:o,"aria-labelledby":"Error","aria-describedby":"There is something wrong."},r.a.createElement(Ze.a,null,"categoriesOverLimit"===n?r.a.createElement(et.a,{id:"alert-dialog-description"},"Too many categories selected."):r.a.createElement(et.a,{id:"alert-dialog-description"},"You need to add ".concat("categories"===n||"something"===n?"":"a ").concat(n))),r.a.createElement(Xe.a,null,r.a.createElement(x.a,{onClick:o,color:"primary",autoFocus:!0},"Okay"))))}var at=a(263),nt=a(282),rt=a(124),ot=a.n(rt),ct=Object(s.a)((function(e){return{root:Object(l.a)({marginTop:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,backgroundColor:Me.a[500],"&:hover":{backgroundColor:Me.a[600]}}}}));function it(){var e=ct(),t=Object(n.useState)({title:"",summary:"",description:"",categories:[{name:"Business",checked:!1},{name:"Design",checked:!1},{name:"Gaming",checked:!1},{name:"Journalism",checked:!1},{name:"Marketing",checked:!1}],technologies:[]}),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)({title:!1,summary:!1,categories:!1,categoriesOverLimit:!1,description:!1}),u=Object(i.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)({open:!1,key:""}),b=Object(i.a)(d,2),f=b[0],g=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(at.a,{in:!0,style:{transitionDelay:"300ms"}},r.a.createElement(nt.a,{component:Pe.a,className:e.root},r.a.createElement(h.a,{variant:"h4"},"Enter Your New App Idea:"),r.a.createElement("br",null),r.a.createElement(Qe,{postData:o,setPostData:c,handleChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(De.a)(Object(De.a)({},o),{},Object(l.a)({},a,n)))},handleCategory:function(e){var t=e.target,a=t.name,n=t.checked,r=o.categories,i=r.findIndex((function(e){return e.name===a})),l=Object(Te.a)(r);l[i]={name:a,checked:n},c(Object(De.a)(Object(De.a)({},o),{},{categories:l}));var s=l.filter((function(e){return e.checked})).length;p((function(e){return Object(De.a)(Object(De.a)({},e),{},{categories:0===s,categoriesOverLimit:s>2})}))},inputErrCheck:function(e){var t=e.target,a=t.name,n=t.value;p(Object(De.a)(Object(De.a)({},m),{},Object(l.a)({},a,0===n.length)))},err:m,setErr:p}))),r.a.createElement(tt,{isAlertOpen:f.open,setAlert:g,errorKey:f.key}),r.a.createElement(be.a,{in:!0},r.a.createElement(fe.a,{onClick:function(){var e=function(e,t){var a=t.title,n=t.summary,r=t.description,o=t.categories;if(a+n+r==="")return"something";if(0===a.length)return"title";if(0===n.length)return"summary";if(0===r.length)return"description";if(0===o.filter((function(e){return e.checked})).length)return"categories";for(var c in e)if(e.hasOwnProperty(c)&&!0===e[c])return c;return!1}(m,o);if(!1===e){var t=o.categories.filter((function(e){return e.checked})).map((function(e){return e.name})),a=Object(De.a)(Object(De.a)({},o),{},{categories:t});console.log(a)}else g({open:!0,key:e})},className:e.fab,color:"secondary","aria-label":"New Post"},r.a.createElement(ot.a,null))))}var lt=a(126),st=a.n(lt),ut=a(125),mt=a.n(ut),pt=Object(s.a)((function(e){return{facebook:{color:"#ffffff",backgroundColor:"#3b5998",margin:15,width:270,"&:hover, &:focus":{backgroundColor:"#003069"}},btnContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},icon:{marginRight:10},google:{width:270},img:{height:22,marginRight:10},poster:Object(l.a)({},e.breakpoints.up(780),{width:"50%"})}}));function dt(){var e=pt();return r.a.createElement("div",{className:e.poster},r.a.createElement(h.a,{variant:"h6"},"Sign up or login as a poster"),r.a.createElement("div",{className:e.btnContainer},r.a.createElement(x.a,{variant:"contained",className:e.facebook,href:"/auth/facebook"},r.a.createElement(st.a,{className:e.icon}),"Continue with Facebook"),r.a.createElement(x.a,{variant:"outlined",href:"/auth/google",className:e.google},r.a.createElement("img",{src:mt.a,alt:"google",className:e.img}),"Continue with Google")))}var bt=a(127),ft=a.n(bt),gt=Object(s.a)((function(e){return{github:{color:"#ffffff",backgroundColor:"#333",margin:15,width:270,"&:hover, &:focus":{backgroundColor:"#0c0c0c"}},btnContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},icon:{marginRight:10},developer:Object(l.a)({},e.breakpoints.up(780),{width:"50%"})}}));function ht(){var e=gt();return r.a.createElement("div",{className:e.developer},r.a.createElement(h.a,{variant:"h6"},"Sign up or login as a developer"),r.a.createElement("div",{className:e.btnContainer},r.a.createElement(x.a,{variant:"contained",className:e.github,color:"primary",href:"/auth/github"},r.a.createElement(ft.a,{className:e.icon}),"Continue with Github")))}var Et=a(283),vt=Object(s.a)((function(e){var t;return{container:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",width:"90%",flexGrow:1},root:(t={minWidth:"90%"},Object(l.a)(t,e.breakpoints.up(780),{minWidth:"60%"}),Object(l.a)(t,"textAlign","center"),Object(l.a)(t,"display","flex"),Object(l.a)(t,"justifyContent","center"),Object(l.a)(t,"flexDirection","column"),t),divider:{marginTop:20,marginBottom:20},dividerContainer:Object(l.a)({display:"flex",alignItems:"center",marginTop:20,marginBottom:20},e.breakpoints.up(780),{display:"none"}),border:{borderBottom:"1px solid black",width:"50%"},content:{paddingLeft:10,paddingRight:10},flex:Object(l.a)({display:"flex",flexDirection:"column"},e.breakpoints.up(780),{flexDirection:"row",justifyContent:"space-evenly"}),vertical:Object(l.a)({display:"none"},e.breakpoints.up(780),{display:"block",border:"1px solid ".concat(e.palette.divider),marginTop:20}),title:{marginBottom:20}}}));function Ot(){var e=vt();return r.a.createElement("div",{className:e.container},r.a.createElement(at.a,{in:!0,timeout:2e3},r.a.createElement(J.a,{className:e.root,variant:"outlined"},r.a.createElement(U.a,null,r.a.createElement(h.a,{variant:"h5",component:"h2",className:e.title},"Welcome to App Factory"),r.a.createElement("div",{className:e.flex},r.a.createElement(dt,null),r.a.createElement("div",{className:e.dividerContainer},r.a.createElement("div",{className:e.border}),r.a.createElement(h.a,{component:"span",className:e.content},"or"),r.a.createElement("div",{className:e.border})),r.a.createElement(Et.a,{className:e.vertical,orientation:"vertical",flexItem:!0}),r.a.createElement(ht,null))))))}function jt(e){var t=e.component,a=Object(xe.a)(e,["component"]),o=Object(n.useContext)(R),c=o.user,i=o.isLoaded;return r.a.createElement(W.b,Object.assign({},a,{render:function(e){return i?!c&&i?r.a.createElement(W.a,{to:{pathname:"/login",state:{from:e.location}}}):r.a.createElement(t,e):null}}))}var kt=a(284);function xt(e){var t=e.component,a=Object(xe.a)(e,["component"]),o=Object(n.useContext)(R),c=o.user,i=o.isLoaded;return r.a.createElement(W.b,Object.assign({},a,{render:function(e){return i?c&&i?r.a.createElement(W.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(t,e):null}}))}function yt(){return r.a.createElement("div",{className:"App"},r.a.createElement(kt.a,null),r.a.createElement(m.a,null,r.a.createElement(W.d,null,r.a.createElement(xt,{path:"/login",component:Ot}),r.a.createElement(W.b,{path:"*",component:F})),r.a.createElement(W.b,{exact:!0,path:"/",component:ve}),r.a.createElement(jt,{path:"/dashboard",component:Ae}),r.a.createElement(jt,{path:"/posts/new",component:it})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null,r.a.createElement(yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.73c9dc90.chunk.js.map