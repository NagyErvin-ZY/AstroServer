(this.webpackJsonpastroweb=this.webpackJsonpastroweb||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},124:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(59),r=a.n(l),c=(a(69),a(70),a(33),a(12)),u=a(11),o=a(18),i=a.n(o),m=(a(71),function(){return s.a.createElement("nav",{className:"Nav-main"},s.a.createElement("div",{className:"Nav-logo"},s.a.createElement("h2",null,"Angyalvonal")),s.a.createElement("div",{className:"Nav-logo"},s.a.createElement("img",{className:"logo",src:"/images/logo.png"})),s.a.createElement("div",{className:"Nav-contect"},s.a.createElement(i.a,{href:"#user",className:"link"},"J\xf3sok"),s.a.createElement(i.a,{href:"#social",className:"link"},"K\xf6z\xf6ss\xe9g"),s.a.createElement(i.a,{href:"#kapcsolat",className:"link"},"Kapcsolat")))}),d=function(){return s.a.createElement("section",{className:"u-clearfix u-image u-shading u-section-1",src:"",id:"sec-7353","data-image-width":"1068","data-image-height":"601"},s.a.createElement("div",{className:"u-clearfix u-sheet u-valign-middle u-sheet-1"},s.a.createElement("div",{className:"u-align-center u-border-2 u-border-white u-container-style u-group u-group-1"},s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-1"},s.a.createElement("h1",{className:"u-heading-font u-text u-title u-text-1"},"J\xf3sl\xe1s? Angyalvonal"),s.a.createElement("p",{className:"u-large-text u-text u-text-font u-text-variant u-text-2"},"Az Astroweb tapasztalt j\xf3saival egy egyszer\u0171 telefonh\xedv\xe1ssal kapcsolatba l\xe9phet \xe9s megtudhatja a j\xf6v\u0151 rejtelmeit"),s.a.createElement(i.a,{href:"#user",className:"u-btn u-button-style u-btn-1 jumbotronbutton"},"J\xf3sl\xe1st szeretn\xe9k")))))},p=a(2),h=a(3),g=a(17),E=a(5),v=a(4),f=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state=e,n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(this.props)}},{key:"render",value:function(){return s.a.createElement("div",{classNameName:"u-container-layout u-valign-top u-container-layout-1",style:{display:"flex",justifyContent:"center",maxWidth:"max-content"}},s.a.createElement("div",{className:"u-align-center-xs u-container-style u-expanded-width-xs u-group u-group-1",style:{margin:"20px",height:"max-content"}},s.a.createElement("div",{className:"u-container-layout u-valign-bottom-xs u-container-layout-2",style:{padding:"0px",height:"max-content"}},s.a.createElement("div",{className:"u-container-style u-expanded-width u-group u-image u-image-1","data-image-width":"1280","data-image-height":"941",style:{backgroundImage:'url("'.concat(this.state.udata.avatar,'")')}},s.a.createElement("div",{className:"u-container-layout u-container-layout-3"},s.a.createElement("div",{className:"u-align-center u-container-style u-custom-color-3 u-group u-shape-rectangle u-group-3"},function(e){switch(e){case 0:return s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-4",style:{backgroundColor:"grey"}},s.a.createElement("h4",{className:"u-text u-text-default u-text-2"},"Nem el\xe9rhet\u0151"));case 1:return s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-4",style:{backgroundColor:"green"}},s.a.createElement("h4",{className:"u-text u-text-default u-text-2"},"El\xe9rhet\u0151"));case 2:return s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-4",style:{backgroundColor:"red"}},s.a.createElement("h4",{className:"u-text u-text-default u-text-2"},"Vonalban"));default:return s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-4",style:{backgroundColor:"grey"}},s.a.createElement("h4",{className:"u-text u-text-default u-text-2"},"Nem el\xe9rhet\u0151"))}}(this.state.udata.status)))),s.a.createElement("h3",{className:"u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-text u-text-default u-text-3"},this.state.udata.name),s.a.createElement("blockquote",{className:"u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-text u-text-default u-text-4",style:{width:"100%",alignSelf:"flex-end !important"}},'"',this.state.udata.quote,'"'),s.a.createElement("h4",{className:"u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-text u-text-default u-text-5"},"+36900000000"),s.a.createElement("h4",{className:"u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-text u-text-custom-color-3 u-text-default u-text-6"},"499 Ft/Perc"),s.a.createElement("h3",{className:"u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-text u-text-7"},"K\xf3d: ",this.state.udata.code))))}}]),a}(s.a.Component),N=a(60),y=a.n(N).a.connect("",{secure:!0});y.on("connect",(function(e){console.log("Socket connecteed")}));var b=y;b.on("event",(function(e){x.setState({users:e}),e.map((function(e,t){console.log(e)}))}));var x={setState:function(){}},k=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).ResolveUsers=function(){return null!=n.state?n.state.users.map((function(e,t){return s.a.createElement(f,{udata:e})})):s.a.createElement("h1",null,"T\xf6lt\xe9s...")},x=Object(g.a)(n),n}return Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{className:"u-align-center u-clearfix u-section-2",id:"user"},s.a.createElement("div",{className:"u-clearfix u-sheet u-valign-bottom u-sheet-1",style:{minWidth:"75%",paddingBottom:"50px"}},s.a.createElement("h1",{className:"u-text u-text-default u-title u-text-1"},"J\xf3saink"),s.a.createElement("div",{className:"u-border-3 u-border-grey-dark-1 u-line u-line-horizontal u-line-1",style:{marginBottom:"25px"}}),s.a.createElement("div",{className:"u-clearfix u-gutter-28 u-layout-wrap u-layout-wrap-1",style:{minWidth:"100%"}},s.a.createElement("div",{className:"u-layout"},s.a.createElement("div",{className:"u-layout-col"},s.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",minHeight:"37rem",minWidth:"100%"}},s.a.createElement(this.ResolveUsers,null)))))))}}]),a}(s.a.Component),C=a(61),w=a.n(C),S=(a(106),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state=e,n}return Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{className:"skrollable skrollable-between u-align-left u-clearfix u-image u-shading u-section-3",src:"","data-image-width":"800","data-image-height":"533",id:"sec-cc44"},s.a.createElement("div",{className:"u-clearfix u-sheet u-sheet-1 main"},s.a.createElement("div",{className:"u-clearfix u-layout-wrap u-layout-wrap-1"},s.a.createElement("div",{className:"u-layout"},s.a.createElement("div",{className:"u-layout-row"},this.props.imput.records.map((function(e,t){return s.a.createElement("div",{className:"u-align-center u-container-style u-layout-cell u-size-20 u-layout-cell-2"},s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-2"},s.a.createElement("h1",{className:"u-text u-title u-text-3","data-animation-name":"counter","data-animation-event":"scroll","data-animation-duration":"3000"},s.a.createElement(w.a,{start:0,end:e.value,delay:0,duration:7.5},(function(e){var t=e.countUpRef;return s.a.createElement("div",null,s.a.createElement("span",{ref:t}))}))),s.a.createElement("p",{className:"u-text u-text-4"},e.name)))})))))))}}]),a}(s.a.Component)),j=function(){return s.a.createElement("section",{classname:"u-align-center u-clearfix u-section-4",id:"social"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"15px"}},s.a.createElement("div",{style:{width:"50px"}},s.a.createElement("a",{href:"https://www.facebook.com/"},s.a.createElement("svg",{className:"u-svg-link",preserveAspectRatio:"xMidYMin slice",viewBox:"0 0 112 112",style:{}},s.a.createElement("use",{xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"#svg-6dae"})),s.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 112 112",id:"svg-6dae",className:"u-svg-content"},s.a.createElement("path",{fill:"#3B5998",d:"M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"}))))))},z=(a(107),a(8)),B=a.n(z),I={email:"",name:"",message:""},O=function(e){B.a.post("/email",{name:I.name,email:I.email,message:I.message})},M=function(e){switch(e.target.id){case"name":I.name=e.target.value;break;case"email":I.email=e.target.value;break;case"message":I.message=e.target.value}},U=function(){return s.a.createElement("section",{className:"u-clearfix u-expanded-width-xl u-section-5",id:"kapcsolat"},s.a.createElement("div",{className:"u-clearfix u-sheet u-sheet-1"},s.a.createElement("div",{className:"u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1"},s.a.createElement("div",{className:"u-gutter-0 u-layout"},s.a.createElement("div",{className:"u-layout-row"},s.a.createElement("div",{className:"u-size-27"},s.a.createElement("div",{className:"u-layout-col"},s.a.createElement("div",{className:"u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1"},s.a.createElement("div",{className:"padded u-container-layout u-valign-middle u-container-layout-1"},s.a.createElement("h2",{className:"u-text u-text-grey-70 u-text-1"},"Astroweb"),s.a.createElement("p",{className:"u-text u-text-grey-50 u-text-2"},"J\xf3sl\xe1s? Astroweb"))),s.a.createElement("div",{className:"u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2"},s.a.createElement("div",{className:"u-container-layout u-container-layout-2"},s.a.createElement("h2",{className:"u-text u-text-grey-70 u-text-3"},"K\xf6vess minket"),s.a.createElement("div",{className:"u-social-icons u-spacing-20 u-text-grey-80 u-social-icons-1"},s.a.createElement("a",{className:"u-social-url",href:"https://facebook.com"},s.a.createElement("span",{className:"u-icon u-icon-circle u-social-facebook u-social-type-fill u-icon-1"},s.a.createElement("svg",{className:"u-svg-link",preserveAspectRatio:"xMidYMin slice",viewBox:"0 0 112 112",style:{}},s.a.createElement("use",{xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"#svg-44d7"})),s.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 112 112",id:"svg-44d7",className:"u-svg-content"},s.a.createElement("path",{d:"M56.1,0C25.1,0,0,25.1,0,56.1c0,31,25.1,56.1,56.1,56.1c31,0,56.1-25.1,56.1-56.1C112.2,25.1,87.1,0,56.1,0z M71.6,34.3h-8.2c-1.3,0-3.2,0.7-3.2,3.5v7.6h11.3l-1.3,12.9h-10V95H45V58.3h-7.2V45.4H45v-8.3c0-6,2.8-15.3,15.3-15.3l11.2,0V34.3z "}))))),s.a.createElement("p",{className:"u-text u-text-4"},"\xa92020 Minden jog fenntartva"))))),s.a.createElement("div",{className:"u-size-33"},s.a.createElement("div",{className:"u-layout-row"},s.a.createElement("div",{className:"u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-3"},s.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-3"},s.a.createElement("h2",{className:"u-text u-text-grey-70 u-text-5"},"Kapcsolat"),s.a.createElement("div",{className:"u-expanded-width u-form u-form-1"},s.a.createElement("div",{className:"u-block-3fe9-21 u-clearfix u-form-spacing-25 u-form-vertical u-inner-form"},s.a.createElement("div",{className:"u-form-group u-form-name"},s.a.createElement("label",{htmlFor:"name-e4cc",className:" u-form-control-hidden u-label"},"Name"),s.a.createElement("input",{onChange:M,type:"text",placeholder:"Az \xf6n neve",id:"name",name:"name",className:"inputr u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-grey-5 u-input u-input-rectangle",required:!0})),s.a.createElement("div",{className:"u-form-email u-form-group"},s.a.createElement("label",{htmlFor:"email-e4cc",className:" u-form-control-hidden u-label"},"Email"),s.a.createElement("input",{onChange:M,type:"email",id:"email",name:"email",className:"inputr u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-grey-5 u-input u-input-rectangle",required:!0,placeholder:"Az \xf6n E-mail c\xedme"})),s.a.createElement("div",{className:"u-form-group u-form-message"},s.a.createElement("label",{htmlFor:"message-e4cc",className:"u-form-control-hidden u-label"},"Message"),s.a.createElement("textarea",{onChange:M,placeholder:"Az \xfczenete",rows:4,cols:50,name:"message",id:"message",className:"inputr u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-grey-5 u-input u-input-rectangle",required:!0,defaultValue:""})),s.a.createElement("div",{className:"u-form-group u-form-submit"},s.a.createElement("input",{type:"submit",onClick:O,defaultValue:"submit",name:"Elk\xfcld\xe9s",value:"Elk\xfcld\xe9s",className:"u-btn u-btn-submit u-button-style"})),s.a.createElement("div",{className:"u-form-send-message u-form-send-success"}," Thank you! Your message has been sent. "),s.a.createElement("div",{className:"u-form-send-error u-form-send-message"}," Unable to send your message. Please fix errors then try again. "))))))))))))},V=(a(124),function(){return s.a.createElement("section",{className:"adminfooter"},s.a.createElement("p",null,"Copyright \xa9 2020 Astroweb"),s.a.createElement(c.b,{to:"/login"},s.a.createElement("p",null,"User")))}),A={records:[{key:3,name:"J\xf3sok",value:4},{key:4,name:"\xd3r\xe1nyi j\xf3sl\xe1s",value:1e3},{key:5,name:"Embercentrikus j\xf3sok",value:1}]};var F=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,null),s.a.createElement(d,null),s.a.createElement(k,null),s.a.createElement(S,{imput:A,cancount:!1}),s.a.createElement(j,null),s.a.createElement(U,null),s.a.createElement(V,null))},D=(a(127),{loggedIn:!1}),H=(a(128),function(e){return console.log(e),s.a.createElement("div",{className:"mainmessage"},function(e){return e.map((function(e,t){return s.a.createElement("div",{className:"messagediv"},s.a.createElement("h6",null,e.title),s.a.createElement("p",null,e.message))}))}(e.messages))}),P=(a(129),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).dropMessagedialoge=function(){console.log("drp"),"none"==n.state.dropped?n.setState({dropped:"flex"}):n.setState({dropped:"none"})},n.processMessage=function(){n.dropMessagedialoge()},n.SendMessage=function(){B.a.post("/message",{code:n.state.user.code,title:n.state.title,message:n.state.message,socketid:b.id,adminpass:n.state.adminpass})},n.processMessageChange=function(e){switch(e.target.id){case"title":n.setState({title:e.target.value});break;case"message":n.setState({message:e.target.value})}},n.SovleStatus=function(){switch(n.state.user.status){case 0:return s.a.createElement("p",{style:{color:"grey"}},"\xc1llapot: Nem el\xe9rhet\u0151");case 1:return s.a.createElement("p",{style:{color:"green"}},"\xc1llapot: El\xe9rhet\u0151");case 2:return s.a.createElement("p",{style:{color:"red"}},"\xc1llapot: Vonalban");default:return s.a.createElement("p",null,"Ismeretlen \xc1llapot")}},n.state={adminpass:n.props.pass,message:"",title:"",user:n.props.user,dropped:"none"},n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e){this.props!=e&&this.setState({user:this.props.user})}},{key:"render",value:function(){return this.state.user.admin?s.a.createElement("div",{className:"user"},s.a.createElement("div",{className:"usermain"},s.a.createElement("h5",null,this.state.user.name),s.a.createElement("div",{className:"separator"}),s.a.createElement("p",null,"Ledolgozott: ",this.state.user.minutes," Perc"),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"money"},s.a.createElement("p",null,"Bev\xe9tel "),s.a.createElement("p",{className:"huf"}," ",Math.round(499*this.state.user.minutes,2)," HUF")),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"money"},s.a.createElement("p",null,"Fizet\xe9s "),s.a.createElement("p",{className:"huf"}," ",Math.round(499*this.state.user.minutes/3,2)," HUF")),s.a.createElement("div",{className:"separator"}),s.a.createElement("p",null,"K\xf3d: ",this.state.user.code),s.a.createElement("div",{className:"separator"}),s.a.createElement(this.SovleStatus,null))):s.a.createElement("div",{className:"user"},s.a.createElement("div",{className:"usermain"},s.a.createElement("h5",null,this.state.user.name),s.a.createElement("div",{className:"separator"}),s.a.createElement("p",null,"Ledolgozott: ",this.state.user.minutes," Perc"),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"money"},s.a.createElement("p",null,"Bev\xe9tel "),s.a.createElement("p",{className:"huf"}," ",Math.round(499*this.state.user.minutes,2)," HUF")),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"money"},s.a.createElement("p",null,"Fizet\xe9s "),s.a.createElement("p",{className:"huf"}," ",Math.round(499*this.state.user.minutes/3,2)," HUF")),s.a.createElement("div",{className:"separator"}),s.a.createElement("p",null,"K\xf3d: ",this.state.user.code),s.a.createElement("div",{className:"separator"}),s.a.createElement(this.SovleStatus,null),s.a.createElement("button",{onClick:this.dropMessagedialoge,className:"messageButton"},s.a.createElement("img",{src:"/public/static/media/mail.png",className:"messagButtonIamge"}))),s.a.createElement("div",{className:"messagedialog",style:{display:this.state.dropped}},s.a.createElement("input",{onChange:this.processMessageChange,type:"text",name:"title",id:"title",placeholder:"C\xedm"}),s.a.createElement("input",{onChange:this.processMessageChange,type:"textfield",name:"message",id:"message",placeholder:"\xdczenet"}),s.a.createElement("button",{onClick:this.SendMessage},"Elk\xfcld")))}}]),a}(s.a.Component)),R=(a(130),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).deleteuser=function(){B.a.post("/modify",{socketid:b.id,toDeleteID:parseInt(n.state.toDeleteID),adminpass:n.state.password,mode:"delete"})},n.ChangeValueInState=function(e){switch(e.target.id){case"toDeleteID":n.setState({toDeleteID:e.target.value});break;case"createUserName":n.state.toCreate.name=e.target.value,n.setState(n.state);break;case"createUserQuoute":n.state.toCreate.quote=e.target.value,n.setState(n.state);break;case"createUserMinutes":n.state.toCreate.minutes=e.target.value,n.setState(n.state);break;case"createUserCode":n.state.toCreate.code=e.target.value,n.setState(n.state);break;case"createUserPicture":n.state.toCreate.image=e.target.files[0],n.state.toCreate.fileext="."+e.target.files[0].type.split("/")[1],n.setState(n.state)}},n.CreateUser=function(){var e=new FormData;e.append("avatar",n.state.toCreate.image),e.append("code",n.state.toCreate.code),e.append("name",n.state.toCreate.name),e.append("quote",n.state.toCreate.quote),e.append("minutes",n.state.toCreate.minutes),e.append("fileext",n.state.toCreate.fileext),e.append("socketid",b.id);B.a.post("/upload",e,{headers:{"content-type":"multipart/form-data"}})},n.ResolveState=function(){switch(n.state.option){case"new":return s.a.createElement("div",{className:"createform"},s.a.createElement("h6",null,"Felhaszn\xe1l\xf3 l\xe9trehoz\xe1s"),s.a.createElement("form",null),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"text",id:"createUserName",name:"createUserName",placeholder:"Felhaszn\xe1l\xf3 neve"}),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"text",id:"createUserQuoute",name:"createUserQuoute",placeholder:"Felhaszn\xe1l\xf3 id\xe9zete"}),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"number",id:"createUserMinutes",name:"createUserMinutes",placeholder:"Ledolgozott percek"}),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"number",id:"createUserCode",name:"createUserCode",placeholder:"k\xf3d"}),s.a.createElement("div",{className:"profliePictureDiv"},s.a.createElement("p",null,"Profilk\xe9p"),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"file",id:"createUserPicture",name:"createUserPicture",placeholder:"Profilk\xe9p"})),s.a.createElement("button",{onClick:n.CreateUser},"l\xe9trehoz\xe1s"));case"delete":return s.a.createElement("div",{className:"deleteform"},s.a.createElement("h6",null,"Felhaszn\xe1l\xf3 t\xf6rl\xe9s"),s.a.createElement("input",{onChange:n.ChangeValueInState,type:"number",id:"toDeleteID",name:"toDeleteID",placeholder:"k\xf3d"}),s.a.createElement("button",{onClick:n.deleteuser},"T\xf6rl\xe9s"));default:return s.a.createElement("h1",null,"new")}},n.state={option:"new",password:n.props.password,toDeleteID:0,toCreate:{name:"",code:"",quote:"",minutes:"",image:null,fileext:"",socketid:b.id}},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"mainsolver"},s.a.createElement("div",{className:"Micronav"},s.a.createElement("button",{onClick:function(t){e.setState({option:t.target.id})},id:"new"},"\xdaj"),s.a.createElement("button",{onClick:function(t){e.setState({option:t.target.id})},id:"delete"},"T\xf6rl\xe9s")),s.a.createElement(this.ResolveState,null))}}]),a}(s.a.Component));b.on("logincheck",(function(e){q.setState({user:e}),q.setState({loggedIn:e.loggedIn}),q.setState({attempt:1}),1==e.loggedIn&&1==q.state.admin&&B.a.post("/adminow",{adminpass:q.state.password,sockedid:b.id})})),b.on("modifyanswer",(function(e){q.setState({response:e}),0==e.status&&B.a.post("/adminow",{adminpass:q.state.password,sockedid:b.id})})),b.on("adminow",(function(e){console.log("Adminow"),console.log("data"),q.setState({users:e});var t=0;q.state.users.forEach((function(e){t+=parseInt(e.minutes)})),q.setState({sumMinutes:t})}));var q="",J=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).redirect=function(){},n.state=e,n}return Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"render",value:function(){return console.log(this.state.store),this.state.attempt>0?s.a.createElement("div",{className:"wrongholder"},s.a.createElement("p",{className:"wrongLogin"},"Felhaszn\xe1l\xf3i k\xf3d vagy a jelsz\xf3 helytelen"),s.a.createElement("button",{onClick:this.state.process},"Bejelentkez\xe9s")):s.a.createElement("button",{onClick:this.state.process},"Bejelentkez\xe9s")}}]),a}(s.a.Component),T=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).processlogin=function(){B.a.post("/loginverify",{userid:parseInt(n.state.userid),password:n.state.password,admin:n.state.admin,socketid:b.id})},n.onInputChange=function(e){switch(e.target.id){case"userid":n.setState({userid:e.target.value});break;case"password":n.setState({password:e.target.value});break;case"admin":n.setState({admin:!n.state.admin})}},n.processStatusChage=function(e){B.a.post("/statuschange",{code:parseInt(n.state.userid),status:parseInt(e.target.id),hash:n.state.user.hash}),console.log(e.target.id),n.state.user.status=parseInt(e.target.id),n.setState(n.state)},n.SetButtonFrameAdmin=function(){switch(console.log(parseInt(n.state.user.userid)),n.state.user.status){case 0:return s.a.createElement("div",{className:"Adminstatus"},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton activeButton"},"Nem El\xe9rhet\u0151"));case 1:return s.a.createElement("div",{className:"Adminstatus"},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton activeButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton"},"Nem El\xe9rhet\u0151"));case 2:return s.a.createElement("div",{className:"Adminstatus"},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton activeButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton"},"Nem El\xe9rhet\u0151"));default:return s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("p",null,"Status error try reloading page or contact administrator"))}},n.SetButtonFrame=function(){switch(console.log(parseInt(n.state.user.userid)),n.state.user.status){case 0:return s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton activeButton"},"Nem El\xe9rhet\u0151"));case 1:return s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton activeButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton"},"Nem El\xe9rhet\u0151"));case 2:return s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("button",{id:"1",onClick:n.processStatusChage,className:"onlineButton"},"El\xe9rhet\u0151"),s.a.createElement("button",{id:"2",onClick:n.processStatusChage,className:"busyButton activeButton"},"Vonalban"),s.a.createElement("button",{id:"0",onClick:n.processStatusChage,className:"offlineButton"},"Nem El\xe9rhet\u0151"));default:return s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("p",null,"Status error try reloading page or contact administrator"))}},n.UserDisplaySolver=function(){return""!=n.state.users?n.state.users.map((function(e,t){return s.a.createElement(P,{pass:n.state.password,user:e})})):s.a.createElement("h1",null,"T\xf6lt\xe9s...")},n.PerformanceSolver=function(){return s.a.createElement("div",{className:"sumprop"},s.a.createElement("div",{className:"sumpropElment"},s.a.createElement("h5",null,"\xd6sszbev\xe9tel"),s.a.createElement("h5",{className:"cash"},Math.round(499*n.state.sumMinutes,2)," HUF")),s.a.createElement("div",{className:"sumpropElment"},s.a.createElement("h5",null,"\xd6sszfizet\xe9s"),s.a.createElement("h5",{className:"cash"},Math.round(499*n.state.sumMinutes/3,2)," HUF")))},n.ServerResponsve=function(){switch(parseInt(n.state.response.status)){case-1:return s.a.createElement("div",{style:{padding:"10px",width:"100vw",backgroundColor:"red"}},s.a.createElement("p",{style:{color:"white"}},n.state.response.message));case 0:return s.a.createElement("div",{style:{padding:"10px",width:"100vw",backgroundColor:"green"}},s.a.createElement("p",{style:{color:"white"}},n.state.response.message));case 1:return s.a.createElement("div",{style:{padding:"10px",width:"100vw",backgroundColor:"yellow"}},s.a.createElement("p",null,n.state.response.message));default:return s.a.createElement("div",null)}},n.state={userid:"",password:"",admin:!1,loggedIn:!1,attempt:0,response:{status:4,message:"testponse"},users:"",sumMinutes:0},q=Object(g.a)(n),n}return Object(h.a)(a,[{key:"render",value:function(){return 0==this.state.loggedIn?s.a.createElement("div",{className:"logindiv"},s.a.createElement("nav",{className:"userNav",style:{justifyContent:"center"}},s.a.createElement("h1",null,"Angyalvonal Alkalmazott")),s.a.createElement("div",{class:"formholder"},s.a.createElement("h1",{className:"logintitle"},"Bejelentkez\xe9s"),s.a.createElement("input",{onChange:this.onInputChange,type:"text",id:"userid",name:"userid",placeholder:"Felhaszn\xe1l\xf3 k\xf3d"}),s.a.createElement("input",{onChange:this.onInputChange,type:"password",id:"password",name:"password",placeholder:"Jelsz\xf3"}),s.a.createElement("div",{className:"adminbutton"},s.a.createElement("input",{onChange:this.onInputChange,type:"checkbox",id:"admin",name:"admin"}),s.a.createElement("p",null,"Admin")),s.a.createElement(J,{attempt:this.state.attempt,store:this.state.loggedIn,process:this.processlogin}))):1==this.state.admin?s.a.createElement("div",null,s.a.createElement("nav",{className:"userNav adminav"},s.a.createElement("h1",null,"Angyalvonal admin"),s.a.createElement(this.SetButtonFrameAdmin,null),s.a.createElement(this.PerformanceSolver,null)),s.a.createElement("div",{className:"adminuseroverview",style:{backgroundImage:'url("/public/static/media/sky.png")'}},s.a.createElement("h4",{style:{color:"white"}},"Felhaszn\xe1l\xf3k"),s.a.createElement("div",{className:"adminoverviewScroll"},s.a.createElement(this.UserDisplaySolver,null))),s.a.createElement("div",{className:"adminusermanage"},s.a.createElement(this.ServerResponsve,null),s.a.createElement(R,{password:this.state.password}))):null!=this.state.user?s.a.createElement("div",null,s.a.createElement("nav",{className:"userNav alkalmazott"},s.a.createElement("h1",null,"Hell\xf3 ",this.state.user.name.split(" ")[1]," j\xf3 \xfajra itt l\xe1tni")),s.a.createElement("div",{className:"userContentHolder"},s.a.createElement("div",{className:"uchLeft"},s.a.createElement("h1",null,"\xdczenetek"),s.a.createElement(H,{messages:this.state.user.messages})),s.a.createElement("div",{className:"uchRight"},s.a.createElement("div",{className:"uchRightTop"},s.a.createElement("h1",{className:"stateTitle"},"\xc1llapotkezel\xe9s"),s.a.createElement(this.SetButtonFrame,null),s.a.createElement("h6",null,"Eddig ledolgozott percek sz\xe1ma: ",this.state.user.minutes," perc")),s.a.createElement("div",{className:"uchRightBottom"},s.a.createElement("p",null,"A kezel\u0151fel\xfclet nem megfelel\u0151 haszn\xe1lata k\xf6vetkezm\xe9nyeket von maga ut\xe1n"))))):s.a.createElement("h1",null,"T\xf6lt\xe9s..")}}]),a}(s.a.Component),W=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state=e,n}return Object(h.a)(a,[{key:"render",value:function(){return console.log("logged",D.getStore),s.a.createElement("div",null,s.a.createElement("nav",{className:"userNav"},s.a.createElement("h1",null,"test")))}}]),a}(s.a.Component);var K=function(){return s.a.createElement(c.a,null,s.a.createElement(u.c,null,s.a.createElement(c.a,{path:"/user"},s.a.createElement(W,null)),s.a.createElement(c.a,{path:"/login"},s.a.createElement(T,null)),s.a.createElement(u.a,{path:"/home"},s.a.createElement(F,null)),s.a.createElement(u.a,{path:""},s.a.createElement(F,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(K,null),s.a.createElement("script",{className:"u-script",type:"text/javascript",src:"jquery.js",defer:""}),s.a.createElement("script",{className:"u-script",type:"text/javascript",src:"nicepage.js",defer:""})),document.getElementById("root")),document.body.classList.add(["u-body","u-overlap","u-overlap-contrast"]),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){},64:function(e,t,a){e.exports=a(131)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},99:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.dcfd4d55.chunk.js.map