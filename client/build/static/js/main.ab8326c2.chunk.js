(this.webpackJsonpstankwolf_ui=this.webpackJsonpstankwolf_ui||[]).push([[0],{118:function(e,a){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),m=t.n(o),l=(t(85),t(63)),i=t(64),s=t(65),c=t(70),u=t(69),p=(t(86),t(66)),d=t.n(p),v=t(179),E=t(128),h=t(177),f=t(178),g=(t(171),t(173)),y=t(172),S=t(127),_=t(4),b=t(180),N=t(174),w=t(176),k=t(68),x=t.n(k),I=t(175);var R=d()("http://localhost:8011/"),C=["werewolf","seer","bodyguard"],V={werewolf:0,villager:0,seer:0,bodyguard:0},A=["werewolf","seer","bodyguard","villager"],q=["Werewolf : choose player to be eliminate","Seer : choose player to check werewolf","Bodyguard : pok pong kai krub?"],z=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),m=0;m<n;m++)o[m]=arguments[m];return(e=a.call.apply(a,[this].concat(o))).state={name:"",room:"",role:"",Res_eff:"",IsAlive:!0,rGameEnd:"who win",rJumlei:"",log:"default",rState:"",lState:"select",aName:[],Next:"Ready",IsVote:!1,IsValidate:!1,ls_role:V,seerEye:""},e.res=function(){R.on("change rState",(function(a){a.room_name==e.state.room&&(a.rState!=e.state.rState&&(R.emit("myStatus",{player_name:e.state.name,room_name:e.state.room}),"Effect"!=a.rState&&"Result"!=a.rState&&""!=a.rState||(R.emit("get name",{room_name:e.state.room}),e.setState({IsVote:!1,IsValidate:!1})),""==a.rState&&e.setState({seerEye:""}),0==e.state.IsAlive&&R.emit("ghost zone",{room_name:e.state.room}),e.setState({rState:a.rState,log:a.log})),e.setState({Next:"Ready"}))})),R.on("get room",(function(e){})),R.on("get name",(function(a){a.room_name==e.state.room&&(e.setState({aName:a.aName}),(0==a.aName.length||-1==a.aName.indexOf(e.state.name)&&""==e.state.rState&&"inRoom"==e.state.lState)&&window.location.reload(!1))})),R.on("myStatus",(function(a){e.setState({role:a.role,IsAlive:a.IsAlive})})),R.on("roleList",(function(a){a.room_name==e.state.room&&e.setState({ls_role:a.role})})),R.on("eye of seer",(function(a){var t=a.player_name+" is "+a.result;e.setState({seerEye:t})})),R.on("Effect",(function(a){a.room_name==e.state.room&&e.setState({Res_eff:a.res})})),R.on("End game",(function(a){a.room_name==e.state.room&&e.setState({rGameEnd:a.message,IsVote:!1,IsValidate:!1,rJumlei:""})})),R.on("Jumlei",(function(a){a.room_name==e.state.room&&e.setState({rJumlei:a.player_name})})),R.on("ghost zone",(function(a){e.setState({log:a.log})}))},e.nameChange=function(a){e.setState({name:a.target.value})},e.roomChange=function(a){e.setState({room:a.target.value})},e.eventCreate=function(){R.emit("wolfroom",{player_name:e.state.name,room_name:e.state.room}),R.emit("get name",{room_name:e.state.room}),e.setState({lState:"inRoom"})},e.eventJoin=function(){R.emit("wolfjoin",{player_name:e.state.name,room_name:e.state.room}),R.emit("get name",{room_name:e.state.room}),e.setState({lState:"inRoom"})},e.eventReady=function(a){e.setState({Next:"Waiting..."}),R.emit("Ready",{player_name:e.state.name,room_name:e.state.room})},e.eventChangeRole=function(a){var t={};t[a.target.id]=""==a.target.value?0:parseInt(a.target.value),R.emit("roleList",{room_name:e.state.room,role:t})},e.eventPlayAction=function(a){R.emit("playAction",{player_name:e.state.name,room_name:e.state.room,who_name:e.state.aName[a.currentTarget.id]})},e.eventVote=function(a){e.setState({IsVote:!0}),R.emit("Vote",{player_name:e.state.name,room_name:e.state.room,who_name:a.currentTarget.id})},e.eventValidate=function(a){var t=parseInt(a.currentTarget.id);e.setState({IsValidate:!0}),R.emit("Validate",{player_name:e.state.name,room_name:e.state.room,yesno:t})},e.eventReset=function(a){R.emit("wolfreset",{room_name:e.state.room})},e.eventDel=function(a){R.emit("delete player",{room_name:e.state.room,player_name:a})},e.myGame=function(a){var t=e.props.classes,n=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(v.a,{className:t.avatar},"S"),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Stankwolf"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(f.a,{onChange:e.nameChange,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Your name",name:"name",autoComplete:"name",autoFocus:!0}),r.a.createElement(f.a,{onChange:e.roomChange,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Room name",name:"room",autoComplete:"room",autoFocus:!0}),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(E.a,{onClick:e.eventCreate,fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Create")),r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(E.a,{onClick:e.eventJoin,fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Join")))))),o=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement(N.a,null,r.a.createElement(S.a,{component:"h1",variant:"h5"},"Room : ",e.state.room),r.a.createElement(S.a,{component:"h3",variant:"h5"},"Name : ",e.state.name),r.a.createElement("div",{className:t.papers},e.state.aName.map((function(a,t){return r.a.createElement(b.a,{id:a,label:a,onDelete:function(){return e.eventDel(a)},variant:"outlined",color:"secondary",icon:r.a.createElement(x.a,null)})}))),r.a.createElement(I.a,null),r.a.createElement("div",{className:t.paper2},r.a.createElement("form",{className:t.form,noValidate:!0},A.map((function(a,n){return r.a.createElement("div",{className:t.papers},r.a.createElement(f.a,{id:a,label:a,type:"number",InputLabelProps:{shrink:!0},onChange:e.eventChangeRole,size:"small"}),r.a.createElement(S.a,{variant:"subtitle1"},e.state.ls_role[a]))})),r.a.createElement(E.a,{onClick:e.eventReady,fullWidth:!0,variant:"contained",color:"primary",className:t.submit},e.state.Next))))),m=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement(N.a,null,r.a.createElement(S.a,{component:"h2",variant:"h5"},"Name : ",e.state.name),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Role : ",e.state.role),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Status : ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22"),"seer"==e.state.role?r.a.createElement(S.a,{variant:"body1"},"Seer message : ",e.state.seerEye):r.a.createElement(r.a.Fragment,null),r.a.createElement(I.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{variant:"body1"},e.state.role==e.state.rState?q[C.indexOf(e.state.role)]:"\u0e23\u0e2d "+e.state.rState),r.a.createElement(I.a,null),e.state.role==e.state.rState?r.a.createElement(r.a.Fragment,null,e.state.aName.map((function(a,t){return r.a.createElement(E.a,{id:t,color:"primary",variant:"contained",size:"medium",onClick:e.eventPlayAction},a)}))):r.a.createElement(S.a,{component:"h5",variant:"h5"},"\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e43\u0e2b\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e33")))),i=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"\u0e04\u0e38\u0e13 ",e.state.name," \u0e40\u0e1b\u0e47\u0e19 ",e.state.role),r.a.createElement(S.a,{component:"h1",variant:"h5"},r.a.createElement("div",null,"\u0e2a\u0e16\u0e32\u0e19\u0e30 ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22")),"seer"==e.state.role?r.a.createElement(S.a,{variant:"body1"},"Seer message : ",e.state.seerEye):r.a.createElement(r.a.Fragment,null),r.a.createElement(I.a,null),""==e.state.Res_eff?r.a.createElement(S.a,null,"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19"):r.a.createElement(r.a.Fragment,null),e.state.Res_eff.split("\n").map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null," ",e,"  "),r.a.createElement(I.a,{light:!0}))})),r.a.createElement(S.a,{variant:"body1"},"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d"),r.a.createElement(E.a,{variant:"contained",size:"medium",color:"primary",onClick:e.eventReady}," ",e.state.Next," "))),s=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement(N.a,null,r.a.createElement(S.a,{component:"h2",variant:"h5"},"Name : ",e.state.name),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Role : ",e.state.role),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Status : ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22"),r.a.createElement(I.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{component:"h5",variant:"h5"},"\u0e04\u0e38\u0e13\u0e04\u0e34\u0e14\u0e27\u0e48\u0e32\u0e43\u0e04\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e32\u0e1b\u0e48\u0e32?"),r.a.createElement(I.a,null),e.state.IsVote?r.a.createElement(S.a,{component:"h5",variant:"h5"},"\u0e23\u0e2d\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e42\u0e2b\u0e27\u0e15\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30\u0e08\u0e48\u0e30"):r.a.createElement(w.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained"},e.state.aName.map((function(a,t){return r.a.createElement(E.a,{id:a,onClick:e.eventVote}," ",a," ")})))))),c=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement(N.a,null,r.a.createElement(S.a,{component:"h2",variant:"h5"},"Name : ",e.state.name),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Role : ",e.state.role),r.a.createElement(S.a,{component:"h2",variant:"h5"},"Status : ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22"),r.a.createElement(I.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{component:"h5",variant:"h5"},"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e42\u0e2b\u0e27\u0e15\u0e06\u0e48\u0e32\u0e08\u0e33\u0e40\u0e25\u0e22 ",e.state.rJumlei," \u0e44\u0e2b\u0e21?"),r.a.createElement(I.a,null),e.state.IsValidate?r.a.createElement(S.a,{component:"h5",variant:"h5"},"\u0e23\u0e2d\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e41\u0e1b\u0e1b\u0e19\u0e30\u0e08\u0e48\u0e30"):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{color:"primary",variant:"contained",size:"medium",id:"1",onClick:e.eventValidate},"  YES "),r.a.createElement(E.a,{color:"secondary",variant:"contained",size:"medium",id:"-1",onClick:e.eventValidate},"  NO  "))))),u=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"\u0e04\u0e38\u0e13 ",e.state.name," \u0e40\u0e1b\u0e47\u0e19 ",e.state.role),r.a.createElement(S.a,{component:"h1",variant:"h5"},r.a.createElement("div",null,"\u0e2a\u0e16\u0e32\u0e19\u0e30 ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22")),r.a.createElement(I.a,null),r.a.createElement(S.a,{variant:"body1"},e.state.Res_eff),r.a.createElement(E.a,{color:"primary",variant:"contained",size:"medium",onClick:e.eventReady}," ",e.state.Next," "))),p=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"\u0e04\u0e38\u0e13 ",e.state.name," \u0e40\u0e1b\u0e47\u0e19 ",e.state.role),r.a.createElement(S.a,{component:"h1",variant:"h5"},"\u0e2a\u0e16\u0e32\u0e19\u0e30 ",e.state.IsAlive?"\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e15\u0e32\u0e22":"\u0e15\u0e32\u0e22"),r.a.createElement(I.a,null),r.a.createElement(S.a,{variant:"body1"},"\u0e1c\u0e35 zone"),r.a.createElement(I.a,null),e.state.log.split("\n").map((function(e,a){return r.a.createElement(S.a,{variant:"body1",key:a},e)})))),d=r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(v.a,{className:t.avatar},"End"),r.a.createElement(S.a,{variant:"h4"},"End Game"),r.a.createElement(S.a,{variant:"body1"},"Result : ",e.state.rGameEnd),r.a.createElement(E.a,Object(l.a)({variant:"contained",size:"large",color:"primary",onClick:e.eventReset},"color","primary"),e.state.Next)));return""!=a?"End"==a?d:0==e.state.IsAlive?p:-1!=C.indexOf(a)?m:"Effect"==a?i:"Vote"==a?s:"Validate"==a?c:"Result"==a?u:r.a.createElement("div",null,"Hello world , let's fix bug man"):"select"==e.state.lState?n:"inRoom"==e.state.lState?o:void 0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.res()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.a,{container:!0,component:"main",className:e.root},r.a.createElement(h.a,null),r.a.createElement(y.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),this.myGame(this.state.rState))}}]),t}(r.a.Component),J=Object(_.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},paper2:{margin:e.spacing(1,1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},papers:{margin:e.spacing(4,8),display:"flex",flexDirection:"row",alignItems:"center"}}}))(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){e.exports=t(126)},85:function(e,a,t){},86:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.ab8326c2.chunk.js.map