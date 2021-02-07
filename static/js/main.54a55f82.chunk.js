(this.webpackJsonpsmarthome=this.webpackJsonpsmarthome||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(27),o=a.n(l),r=(a(37),a(38),a(31)),i=a(14),m=a(3),s=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],o=a[1];return c.a.createElement("div",{className:"second-navbar"},c.a.createElement("div",{className:"addRoomTitle"},c.a.createElement("h2",null,"Add room")),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={name:l,isOn:!1,devices:[]};e.toggleShow(),e.handleAdd(a)}},c.a.createElement("label",null,c.a.createElement("input",{placeholder:"Name",type:"text",name:"name",onChange:function(e){o(e.currentTarget.value)}})),c.a.createElement("button",{type:"submit",value:"Send"},"\u2714")))},u=a(7),d=a(11),h=a.n(d),g=function(e){var t=Object(n.useState)(e.isOn),a=Object(m.a)(t,2),l=a[0],o=a[1];return c.a.createElement("div",{className:"roomBlock"},c.a.createElement("h2",null,e.name),c.a.createElement("h4",{className:"devicesAmount"},"Devices:",e.device.length),c.a.createElement("div",{className:"roomOptions"},c.a.createElement(h.a,{onColor:"#f57843",offColor:"#f9a886",onChange:function(t,a){o(!l),e.handleToggle(e.id,!l)},checked:l}),c.a.createElement(u.b,{to:"/SmartHome/settings/".concat(e.id)},c.a.createElement("img",{src:"settings.png",height:"30px",width:"30px",alt:"settingsIcon"})),c.a.createElement("div",{className:"close",onClick:function(t){window.confirm("Are you sure you wish to delete this room?")&&e.handleDelete(e.id)}},c.a.createElement("img",{src:"x.png",height:"30px",width:"30px",alt:"closeIcon"}))))},f=function(e){return c.a.createElement("div",{className:"flex-wrap"},e.rooms.map((function(t,a){return c.a.createElement(g,{key:a,id:a,name:t.name,device:t.devices,isOn:t.isOn,handleDelete:e.handleDelete,handleToggle:e.handleToggle})})))},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],h=u[1];Object(n.useEffect)((function(){l(JSON.parse(localStorage.getItem("Rooms")||"[]"))}),[]),Object(n.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(a))}),[a]);var g=function(){h(!d)};return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar navbar-light"},c.a.createElement("img",{src:"user.png",height:"50px",width:"50px",alt:"userIcon"}),c.a.createElement("h1",null,"Hi user!"),c.a.createElement("h3",null,"Welcome to home ! "),c.a.createElement("button",{className:"addButton",onClick:g},"+")),c.a.createElement("div",null,d?c.a.createElement(s,{show:d,toggleShow:g,handleAdd:function(e){l((function(t){return[].concat(Object(i.a)(t),[e])}))}}):""),c.a.createElement(f,{rooms:a,handleDelete:function(e){l(a.splice(e,1)),localStorage.setItem("Rooms",JSON.stringify(a)),l(JSON.parse(localStorage.getItem("Rooms")||"[]"))},handleToggle:function(e,t){l(a.map((function(t,a){return a===e?Object(r.a)({},t,{isOn:!t.isOn}):t}))),a.map((function(e){return e.devices.map((function(e){return e.isOn=t}))}))}}))},p=a(2),E=a(29),b=a.n(E),O=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)("temperature"),i=Object(m.a)(r,2),s=i[0],u=i[1],d=function(e){u(e.currentTarget.value)};return c.a.createElement("div",{className:"secondNavbarSettings"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={device:l,isOn:!1,type:s,value:0};e.toggleShow(),e.handleAdd(a)}},c.a.createElement("label",null,c.a.createElement("input",{className:"deviceInput",placeholder:"Device",type:"text",name:"name",onChange:function(e){o(e.currentTarget.value)}}))," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("h4",null,"Choose type of device's value:"),c.a.createElement("input",{className:"radioButton",type:"radio",value:"Temperature",name:"type",onChange:d,defaultChecked:!0})," Temperature",c.a.createElement("input",{className:"radioButton",type:"radio",value:"Brightness",name:"type",onChange:d})," Brightness",c.a.createElement("input",{className:"radioButton",type:"radio",value:"Volume",name:"type",onChange:d})," Volume"),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",value:"Wy\u015blij"}," \u2714")))},S=a(30),N=a.n(S),j=function(e){var t=Object(n.useState)(e.isOn),a=Object(m.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(e.value),i=Object(m.a)(r,2),s=i[0],u=i[1];return c.a.createElement("div",{className:"deviceBlock"},c.a.createElement("div",{className:"text-left"},c.a.createElement("h3",null,e.name),c.a.createElement("h5",null,e.type,": ",s)),c.a.createElement("span",{className:"slider"},c.a.createElement(h.a,{onColor:"#f57843",offColor:"#f9a886",onChange:function(){o(!l),e.handleToggle(e.id,!l)},checked:l})),c.a.createElement("div",{className:"addButton",onClick:function(t){window.confirm("Are you sure you wish to delete this room?")&&e.handleDelete(e.id)}},c.a.createElement("img",{src:"./../x.png",height:"30px",width:"30px",alt:"closeIcon"})),c.a.createElement(N.a,{value:s,onChange:function(t,a){u(a),e.handleSetValue(e.id,a)},variant:"warning",tooltip:"off"}))};var y=function(e,t){var a=e.match,l=(t.id,Object(n.useState)([])),o=Object(m.a)(l,2),r=o[0],s=o[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),g=h[0],f=h[1],v=Object(n.useState)(!0),p=Object(m.a)(v,2),E=p[0],S=p[1],N=Object(n.useState)([0,0]),y=Object(m.a)(N,2),w=y[0],x=y[1],I=Number(a.params.id);Object(n.useEffect)((function(){s(JSON.parse(localStorage.getItem("Rooms")||"[]")),S(!1)}),[]),Object(n.useEffect)((function(){b.a.get("https://www.random.org/integers/?num=2&min=0&max=50&col=2&base=10&format=plain&rnd=new").then((function(e){var t=Number(e.data.slice(0,2)),a=Number(e.data.slice(3,5));x((function(e){return[t]})),x((function(e){return[].concat(Object(i.a)(e),[a])}))})).catch((function(e){console.log(e.message)}))}),[]),Object(n.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(r))}),[r]);var C=function(){f(!g)},k=function(e,t){console.log(r[I].devices[e].value),r[I].devices[e].value=t,localStorage.setItem("Rooms",JSON.stringify(r))},B=function(e){r[I].devices.splice(e,1),localStorage.setItem("Rooms",JSON.stringify(r)),s(JSON.parse(localStorage.getItem("Rooms")||"[]"))},J=function(e,t){r[I].devices[e].isOn=t,localStorage.setItem("Rooms",JSON.stringify(r))};return c.a.createElement("div",{className:"settings"},c.a.createElement("div",{className:"  navbar-settings"},c.a.createElement(u.b,{className:"goBackLink",to:"/SmartHome/"},c.a.createElement("img",{src:"./../leftArrow.png",height:"40px",width:"40px",alt:"GoBack"})),c.a.createElement("div",{className:"navbar-info"},c.a.createElement("h1",null,E?"":r[I].name),c.a.createElement("div",{className:"navbar-temp"},c.a.createElement("img",{src:"./../temp.png",height:"50px",width:"50px",alt:"tempIcon"}),c.a.createElement("h3",null,w[0]," \u2103"),c.a.createElement("h4",null,"Temp")),c.a.createElement("div",{className:"navbar-humidity"},c.a.createElement("img",{src:"./../water.png",height:"50px",width:"50px",alt:"waterIcon"}),c.a.createElement("h3",null,w[1],"% "),c.a.createElement("h4",null,"Humidity")),c.a.createElement("div",{className:"addDeviceButton",onClick:C},c.a.createElement("h1",null,"+")))),g?c.a.createElement(O,{isShown:g,toggleShow:C,handleAdd:function(e){var t=r[I].devices;t.push(e),r[I].devices=t,localStorage.setItem("Rooms",JSON.stringify(r))}}):"",c.a.createElement("div",{className:"devices"},E?"wait":r[I].devices.map((function(e,t){return c.a.createElement(j,{key:t,id:t,name:e.device,isOn:e.isOn,type:e.type,value:e.value,handleToggle:J,handleSetValue:k,handleDelete:B})}))))},w=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/SmartHome/",component:v}),c.a.createElement(p.a,{exact:!0,path:"/SmartHome/settings/:id",component:y})))};o.a.render(c.a.createElement(u.a,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.54a55f82.chunk.js.map