(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(29),r=n.n(i),s=(n(80),n(9)),l=n(10),c=n(12),d=n(11),u=n(13),m=(n(81),n(82),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("h1",null,"Ciudad de M\xe9xico"))}}]),t}(a.Component)),p=n(58),y=n(44),h=(n(97),function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if("undefined"!==typeof this.props.name){var e=this.props.name;return o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",null,e)}))}return o.a.createElement("p",null,"Sin Informaci\xf3n")}}]),t}(a.Component)),g=n(20),v=n.n(g),E=(n(177),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={data:[],name:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onMarkerClick",value:function(e){var t=[],n=!1;(v.a.database().ref().on("value",function(a){a.forEach(function(a){t.push(a.val().name+","+a.val().address),a.val().correo===document.getElementById("usersLogin").value&&a.val().address===e.address&&a.val().name===e.name&&(n=!0)})}),n)?alert("La tienda ya esta agregada"):v.a.database().ref().push({name:e.name,correo:document.getElementById("usersLogin").value,address:e.address});this.setState(function(e){return{favorites:[].concat(Object(p.a)(e.name),t)}})}},{key:"showTienda",value:function(){document.getElementById("lista").style.display="block"}},{key:"componentDidMount",value:function(){var e=this;fetch("./store_directory.json").then(function(t){return t.json().then(function(t){for(var n=[],a=0;a<t.length;a++){var o=t[a];o.key=a,o.address=t[a].Address,o.name=t[a].Name,n.push(o)}e.setState(function(e){return{data:[].concat(Object(p.a)(e.data),n)}})})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"mapa"},o.a.createElement(y.Map,{google:this.props.google,zoom:13,initialCenter:{lat:19.419444,lng:-99.145556},onClick:this.onMapClicked},this.state.data.map(function(t){return o.a.createElement(y.Marker,{position:{lat:t.Coordinates.lat,lng:t.Coordinates.lng},onClick:e.onMarkerClick.bind(e),name:t.name,address:t.address})}))),o.a.createElement("button",{id:"tiendas",onClick:this.showTienda.bind()},"Ver Tiendas"),o.a.createElement("div",{id:"lista",className:"lista",style:{display:"none"}},o.a.createElement("p",null," Mis Tiendas Favoritas"),o.a.createElement(h,{name:this.state.favorites})))}}]),t}(a.Component)),f=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"})(E),b={apiKey:"AIzaSyDYyQy8YEUepOHUbr_HBEF3aUDd-uziugo",authDomain:"storesfavorytes.firebaseapp.com",databaseURL:"https://storesfavorytes.firebaseio.com",projectId:"storesfavorytes",storageBucket:"storesfavorytes.appspot.com",messagingSenderId:"393673143639"},k=(n(178),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"divLogin"},o.a.createElement("div",{className:"divForm",id:"sesionInit",style:{display:"block"}},o.a.createElement("h2",null,"Iniciar Sesi\xf3n"),o.a.createElement("input",{type:"text",id:"usersLogin",placeholder:"Usuario",required:!0}),o.a.createElement("input",{type:"password",id:"passwordLogin",placeholder:"Contrase\xf1a",required:!0})),o.a.createElement("div",{className:"divForm",id:"createAccount",style:{display:"none"}},o.a.createElement("h2",null,"Crea tu Cuenta"),o.a.createElement("input",{type:"email",placeholder:"Correo Electr\xf3nico",id:"emailRegister",required:!0}),o.a.createElement("input",{type:"password",placeholder:"Contrase\xf1a",id:"passwordRegister",required:!0}),o.a.createElement("input",{type:"password",placeholder:"Tel\xe9fono",required:!0})))}}]),t}(a.Component)),I=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(c.a)(this,Object(d.a)(t).call(this,e)),v.a.initializeApp(b),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"loginFunction",value:function(){var e=document.getElementById("usersLogin").value,t=document.getElementById("passwordLogin").value;v.a.auth().signInWithEmailAndPassword(e,t).then(function(){document.getElementById("home").style.display="block",document.getElementById("login").style.display="none"}).catch(function(e){console.log(e),alert("Usuario o Contrase\xf1a no Existe")})}},{key:"createAccount",value:function(){document.getElementById("sesionInit").style.display="none",document.getElementById("createAccount").style.display="block",document.getElementById("buttonLogin").style.display="none",document.getElementById("registerUser").style.display="block"}},{key:"buttonRegisterUser",value:function(){var e=document.getElementById("emailRegister").value,t=document.getElementById("passwordRegister").value;v.a.auth().createUserWithEmailAndPassword(e,t).then(function(){alert("Usuario creado correctamente"),document.getElementById("sesionInit").style.display="block",document.getElementById("createAccount").style.display="none"}).catch(function(e){}),document.getElementById("sesionInit").style.display="block",document.getElementById("createAccount").style.display="none",document.getElementById("buttonLogin").style.display="block",document.getElementById("registerUser").style.display="none"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"container-form",id:"login"},o.a.createElement("div",{className:"toggle"},o.a.createElement("span",{id:"buttonAccount",onClick:this.createAccount},"Crear Cuenta")),o.a.createElement(k,null),o.a.createElement("input",{type:"button",id:"buttonLogin",value:"Iniciar sesi\xf3n",onClick:this.loginFunction}),o.a.createElement("input",{type:"button",value:"Registrarse",style:{display:"none"},id:"registerUser",onClick:this.buttonRegisterUser}),o.a.createElement("div",{className:"reset-password"},o.a.createElement("a",{href:!0},"Olvide mi Contrase\xf1a")))),o.a.createElement("div",{className:"App",style:{display:"none"},id:"home"},o.a.createElement(m,{title:"Tiendas Favoritas"}),o.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,n){e.exports=n(179)},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},97:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.d3b7786c.chunk.js.map