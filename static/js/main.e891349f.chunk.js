(this.webpackJsonpsmarthome=this.webpackJsonpsmarthome||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(28),r=a.n(c),o=(a(36),a(37),a(15)),m=a(14),i=a(3),s=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"second-navbar"},l.a.createElement("div",{className:"addRoomTitle"},l.a.createElement("h2",null,"Add room")),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={name:c,isOn:!1,devices:[]};e.toggleShow(),e.handleAdd(a)}},l.a.createElement("label",null,l.a.createElement("input",{placeholder:"Name",type:"text",name:"name",onChange:function(e){console.log(e.currentTarget.value),r(e.currentTarget.value)}})),l.a.createElement("button",{type:"submit",value:"Send"},"\u2714")))},u=a(7),d=a(11),g=a.n(d),h=function(e){var t=Object(n.useState)(e.isOn),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"roomBlock"},l.a.createElement("h2",null,e.name),l.a.createElement("h4",{className:"devicesAmount"},"Devices:",e.device.length),l.a.createElement("div",{className:"roomOptions"},l.a.createElement(g.a,{onColor:"#f57843",offColor:"#f9a886",onChange:function(t,a){r(!c),e.handleToggle(e.id,!c)},checked:c}),l.a.createElement(u.b,{to:"/SmartHome/settings/".concat(e.id)},l.a.createElement("img",{src:"settings.png",height:"30px",width:"30px"})),l.a.createElement("div",{className:"close",onClick:function(t){window.confirm("Are you sure you wish to delete this room?")&&e.handleDelete(e.id)}},l.a.createElement("img",{src:"x.png",height:"30px",width:"30px"}))))},v=function(e){return l.a.createElement("div",{className:"flex-wrap"},e.rooms.map((function(t,a){return l.a.createElement(h,{key:a,id:a,name:t.name,device:t.devices,isOn:t.isOn,handleDelete:e.handleDelete,handleToggle:e.handleToggle})})))},E=function(){window.addEventListener("storage",(function(e){return console.log()}));var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),d=u[0],g=u[1];Object(n.useEffect)((function(){c(JSON.parse(localStorage.getItem("Rooms")||"[]"))}),[]),Object(n.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(a))}),[a]);var h=function(){g(!d)};return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar navbar-light"},l.a.createElement("img",{src:"user.png",height:"50px",width:"50px"}),l.a.createElement("h1",null,"Hi user!"),l.a.createElement("h3",null,"Welcome to home ! "),l.a.createElement("button",{className:"addButton",onClick:h},"+")),l.a.createElement("div",null,d?l.a.createElement(s,{show:d,toggleShow:h,handleAdd:function(e){c((function(t){return[].concat(Object(m.a)(t),[e])}))}}):""),l.a.createElement(v,{rooms:a,handleDelete:function(e){c(a.splice(e,1)),localStorage.setItem("Rooms",JSON.stringify(a)),c(JSON.parse(localStorage.getItem("Rooms")||"[]")),console.log(e)},handleToggle:function(e,t){c(a.map((function(t,a){return a===e?Object(o.a)({},t,{isOn:!t.isOn}):t})))}}))},f=a(2),p=a(30),b=a.n(p),O=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)("temperature"),m=Object(i.a)(o,2),s=m[0],u=m[1],d=function(e){console.log(e.currentTarget.value),u(e.currentTarget.value)};return l.a.createElement("div",{className:"second-navbar"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={device:c,isOn:!1,type:s,value:0};e.toggleShow(),e.handleAdd(a)}},l.a.createElement("label",null,"Device:",l.a.createElement("input",{type:"text",name:"name",onChange:function(e){console.log(e.currentTarget.value),r(e.currentTarget.value)}}))," ",l.a.createElement("br",null),l.a.createElement("label",null,"Choose type of device's value: ",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",value:"Temperature",name:"type",onChange:d})," Temperature",l.a.createElement("input",{type:"radio",value:"Brightness",name:"type",onChange:d})," Brightness",l.a.createElement("input",{type:"radio",value:"Volume",name:"type",onChange:d})," Volume"),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",value:"Wy\u015blij"},"Wyslij")))},S=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"deviceBlock"},l.a.createElement("div",{className:"text-left"},l.a.createElement("h3",null,e.name),l.a.createElement("h5",null,e.type,": ",e.value)),l.a.createElement("span",{className:"slider"},l.a.createElement(g.a,{onColor:"#f57843",offColor:"#f9a886",onChange:function(){r(!c),e.handleToggle(e.id,!c)},checked:c})))};var j=function(e,t){var a=e.match,c=(t.id,Object(n.useState)([])),r=Object(i.a)(c,2),s=r[0],d=r[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),v=h[0],E=h[1],f=Object(n.useState)(!0),p=Object(i.a)(f,2),j=p[0],N=p[1],y=Object(n.useState)([0,0]),w=Object(i.a)(y,2),x=w[0],T=w[1],C=Number(a.params.id);Object(n.useEffect)((function(){d(JSON.parse(localStorage.getItem("Rooms")||"[]")),N(!1)}),[]),Object(n.useEffect)((function(){b.a.get("https://www.random.org/integers/?num=2&min=1&max=100&col=2&base=10&format=plain&rnd=new").then((function(e){var t=Number(e.data.slice(0,2)),a=Number(e.data.slice(3,5));T((function(e){return[t]})),T((function(e){return[].concat(Object(m.a)(e),[a])})),console.log(e.data)})).catch((function(e){console.log(e.message)}))}),[]),Object(n.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(s)),console.log("zmiana")}),[s]);var k=function(){E(!v)};console.log(j),console.log(s);var B=function(e,t){d(s.map((function(t,a){return a===e?Object(o.a)({},t,{isOn:!t.isOn}):t})))};return l.a.createElement("div",{className:"settings"},l.a.createElement("div",{className:"  navbar-settings"},l.a.createElement(u.b,{className:"goBackLink",to:"/SmartHome/"},l.a.createElement("img",{src:"./../leftArrow.png",height:"40px",width:"40px",alt:"GoBack"})),l.a.createElement("div",{className:"navbar-info"},l.a.createElement("h1",null,j?"":s[C].name),l.a.createElement("div",{className:"navbar-temp"},l.a.createElement("img",{src:"./../temp.png",height:"50px",width:"50px"}),l.a.createElement("h3",null,x[0]," \u2103"),l.a.createElement("h4",null,"Temp")),l.a.createElement("div",{className:"navbar-humidity"},l.a.createElement("img",{src:"./../water.png",height:"50px",width:"50px"}),l.a.createElement("h3",null,x[1],"% "),l.a.createElement("h4",null,"Humidity")),l.a.createElement("div",{className:"addDeviceButton",onClick:k},l.a.createElement("h1",null,"+")))),v?l.a.createElement(O,{isShown:v,toggleShow:k,handleAdd:function(e){var t=s[C].devices;t.push(e),s[C].devices=t,console.log(s[C].devices),localStorage.setItem("Rooms",JSON.stringify(s))}}):"",l.a.createElement("div",{className:"devices"},j?"wait":s[C].devices.map((function(e,t){return l.a.createElement(S,{key:t,id:t,name:e.device,isOn:e.isOn,type:e.type,value:e.value,handleToggle:B})}))))},N=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/SmartHome/",component:E}),l.a.createElement(f.a,{exact:!0,path:"/SmartHome/settings/:id",component:j})))};r.a.render(l.a.createElement(u.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e891349f.chunk.js.map