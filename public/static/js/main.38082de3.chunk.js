(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{76:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(38),r=s.n(c),o=s(17),i=s(1),l=s(9),m=s(10),u=s(12),j=s(11),h=s(39),d=s.n(h).a.connect("https://omgui.herokuapp.com",{transports:["websocket"]}),p=n.a.createContext(),b=s(0),O=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).updateState=e.props.updateState,e.socket=e.props.socket,e.sendNickname=function(t){t.preventDefault(),e.props.state.nickname.trim().length>0&&e.socket.emit("nickname",e.props.state.nickname)},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("nickname-response",(function(t){t.success?e.updateState("screen","chat"):alert("Nickname already exists!")}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"center-absolute",children:Object(b.jsxs)("div",{className:"card card-body w-420",children:[Object(b.jsx)("h2",{style:{marginBottom:"20px"},children:"Create nickname"}),Object(b.jsxs)("form",{className:"form",onSubmit:function(t){return e.sendNickname(t)},children:[Object(b.jsx)("input",{type:"text",onChange:function(t){return e.updateState("nickname",t.target.value)},placeholder:"Enter your nickname"}),Object(b.jsx)("button",{children:"Send"})]})]})})}}]),s}(a.Component),g=s(22),f=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={message:"",messages:[],room:{},scrolled:!1,mate:""},e.updateState=e.props.updateState,e.socket=e.props.socket,e.sendMessage=function(t){if(t.preventDefault(),e.state.message.trim().length>0){var s={room:e.state.room.id,nickname:e.props.state.nickname,message:e.state.message};e.socket.emit("new-message",s),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{message:"",messages:[].concat(Object(g.a)(e.state.messages),[s])}),(function(){e.scrollToEnd()}))}},e.checkScroll=function(t){var s=t.target,a=s.scrollTop;s.scrollHeight-s.clientHeight-a>20?e.setState(Object(i.a)(Object(i.a)({},e.state),{},{scrolled:!0})):e.setState(Object(i.a)(Object(i.a)({},e.state),{},{scrolled:!1}))},e.scrollToEnd=function(){e.state.scrolled||document.querySelector("#message-recipent").scrollTo(0,document.querySelector("#message-recipent").scrollHeight)},e.message=function(t){return e.setState(Object(i.a)(Object(i.a)({},e.state),{},{message:t}))},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.socket.emit("find-room",this.props.state.nickname),this.socket.on("find-room-response",(function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{room:t})),t.participants.forEach((function(t){e.props.state.nickname!==t&&e.setState(Object(i.a)(Object(i.a)({},e.state),{},{mate:t}))}))})),this.socket.on("new-mate",(function(t){return e.setState(Object(i.a)(Object(i.a)({},e.state),{},{mate:t}))})),this.socket.on("new-message",(function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{messages:[].concat(Object(g.a)(e.state.messages),[t])}),(function(){e.scrollToEnd()}))}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"chat-container",children:Object(b.jsxs)("div",{className:"chat-content",children:[Object(b.jsxs)("div",{className:"chat-header",children:[Object(b.jsx)("h1",{children:this.state.room.name}),""===this.state.mate?Object(b.jsxs)("h4",{className:"chat-status",children:[Object(b.jsx)("span",{className:"spinner"})," Waiting for someone..."]}):Object(b.jsxs)("h4",{children:["With ",this.state.mate]})]}),Object(b.jsx)("div",{id:"message-recipent",className:"message-recipent",onScroll:function(t){return e.checkScroll(t)},children:this.state.messages.map((function(e,t){return Object(b.jsxs)("p",{className:"message",id:"message-"+t,children:[Object(b.jsx)("b",{children:e.nickname})," ",e.message]})}))}),Object(b.jsxs)("form",{className:"message-box",onSubmit:function(t){return e.sendMessage(t)},children:[Object(b.jsx)("input",{type:"text",onChange:function(t){return e.message(t.target.value)},placeholder:"Write something",value:this.state.message}),Object(b.jsx)("button",{children:"Send"})]})]})})}}]),s}(a.Component),k=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={screen:"main",nickname:""},e.updateState=function(t,s){return e.setState(Object(i.a)(Object(i.a)({},e.state),{},Object(o.a)({},t,s)))},e}return Object(m.a)(s,[{key:"render",value:function(){return"main"===this.state.screen?Object(b.jsx)(O,{state:this.state,updateState:this.updateState,socket:this.context}):"chat"===this.state.screen?Object(b.jsx)(f,{state:this.state,updateState:this.updateState,socket:this.context}):void 0}}]),s}(a.Component);k.contextType=p;var v=k;r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p.Provider,{value:d,children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.38082de3.chunk.js.map