(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{36:function(e,t,a){e.exports=a(57)},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(33),l=a.n(c),u=a(8),o=a(20),s=a(5),i=a(35),m=a(6),p=a.n(m),d=a(61),f=a(22);a(42),a(59),a(58);f.a.initializeApp({apiKey:"AIzaSyAISdt2j4ZjLHvzLuIxO_AdQ9P38Qy1bes",authDomain:"twitter-clone-7b0dc.firebaseapp.com",projectId:"twitter-clone-7b0dc",storageBucket:"twitter-clone-7b0dc.appspot.com",messagingSenderId:"167997565486",appId:"1:167997565486:web:bc90b2e76de475b42f8dbf",measurementId:"G-EWTXQDF96L"});var E=f.a,b=f.a.auth(),h=f.a.firestore(),v=f.a.storage(),g=a(11),y=a(17),w=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],f=i[1];return r.a.createElement("form",{onSubmit:function(e){var a,n,r,c;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e.preventDefault(),""!==l){u.next=3;break}return u.abrupt("return");case 3:if(a="",""===m){u.next=12;break}return n=v.ref().child("".concat(t.uid,"/").concat(Object(d.a)())),u.next=8,p.a.awrap(n.putString(m,"data_url"));case 8:return r=u.sent,u.next=11,p.a.awrap(r.ref.getDownloadURL());case 11:a=u.sent;case 12:return c={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},u.next=15,p.a.awrap(h.collection("nweets").add(c));case 15:o(""),f("");case 17:case"end":return u.stop()}}),null,null,null,Promise)},className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:y.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;f(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),m&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:m,style:{backgroundImage:m},alt:""}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return f("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:y.c}))))},x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],s=l[1];console.log(t);var i=Object(n.useState)(t.text),m=Object(u.a)(i,2),d=m[0],f=m[1],E=function(){return s((function(e){return!e}))};return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.next=3,p.a.awrap(h.doc("nweets/".concat(t.id)).update({text:d}));case 3:s(!1);case 4:case"end":return a.stop()}}),null,null,null,Promise)},className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:E,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:""}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,p.a.awrap(h.doc("nweets/".concat(t.id)).delete());case 4:return e.next=6,p.a.awrap(v.refFromURL(t.attachmentUrl).delete());case 6:case"end":return e.stop()}}),null,null,null,Promise)}},r.a.createElement(g.a,{icon:y.d})),r.a.createElement("span",{onClick:E},r.a.createElement(g.a,{icon:y.a})))))},N=function(e){var t=e.user,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(w,{userObj:t}),r.a.createElement("div",{style:{marginTop:30,width:"320px"}},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},O=function(e){var t=e.refreshUser,a=e.user,c=e.logout,l=Object(s.f)(),o=Object(n.useState)(a.displayName),i=Object(u.a)(o,2),m=i[0],d=i[1];return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),a.displayName===m){n.next=5;break}return n.next=4,p.a.awrap(a.updateProfile({displayName:m}));case 4:t();case 5:case"end":return n.stop()}}),null,null,null,Promise)},className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:m,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){c(),l.push("/")}},"Log Out"))},j=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)(!0),d=Object(u.a)(m,2),f=d[0],E=d[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),g=v[0],y=v[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&i(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),t.prev=1,!f){t.next=9;break}return t.next=5,p.a.awrap(b.createUserWithEmailAndPassword(a,s));case 5:t.sent,y(""),t.next=13;break;case 9:return t.next=11,p.a.awrap(b.signInWithEmailAndPassword(a,s));case 11:t.sent,y("");case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),y(t.t0.message);case 18:case"end":return t.stop()}}),null,null,[[1,15]],Promise)},className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:s,className:"authInput",onChange:w}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:f?"Create Account":"Sign In"}),g&&r.a.createElement("span",{className:"authError"},g)),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))},className:"authSwitch"},f?"Sign In":"Create Account"))},S=a(21),I=function(){var e=function(e){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.target.name,n.prev=1,"google"===t?a=new E.auth.GoogleAuthProvider:"github"===t&&(a=new E.auth.GithubAuthProvider),n.next=5,p.a.awrap(b.signInWithPopup(a));case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),null,null,[[1,7]],Promise)};return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:S.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(j,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:S.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:S.a}))))},A=function(e){var t=e.user;return console.log(t.displayName),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:S.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:y.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName," Profile"):"Profile")))))},C=a(34),F=a.n(C),k=function(){return r.a.createElement("div",{className:"container",style:{marginTop:"300px"}},r.a.createElement(F.a,{color:"#00FFCA",size:15}))},P=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),m=i[0],p=i[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),E=f[0],h=f[1];Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){e?(p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)):p(null),h(!0)}))}),[]);return r.a.createElement(r.a.Fragment,null,E?r.a.createElement(o.a,null,a&&r.a.createElement(A,{user:m}),r.a.createElement(s.c,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(N,{user:m})),r.a.createElement(s.a,{exact:!0,path:"/profile"},r.a.createElement(O,{user:m,refreshUser:function(){var e=b.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},logout:function(){c(!1),b.signOut()}}))):r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(I,null)))):r.a.createElement(k,null))};a(55);l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b2efeed8.chunk.js.map