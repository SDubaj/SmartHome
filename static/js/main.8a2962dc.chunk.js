(this.webpackJsonpsmarthome=this.webpackJsonpsmarthome||[]).push([[0],{31:function(e,t,n){e.exports=n(62)},36:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(26),o=n.n(l),r=(n(36),n(37),n(30)),u=n(10),i=n(6),m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],o=n[1];return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={name:l,isOn:!1};e.toggleShow(),e.handleAdd(n)}},c.a.createElement("label",null,"Nazwa Pokoju:",c.a.createElement("input",{type:"text",name:"name",onChange:function(e){console.log(e.currentTarget.value),o(e.currentTarget.value)}})),c.a.createElement("button",{type:"submit",value:"Wy\u015blij"},"Wyslij")))},s=n(8),f=n(27),d=n.n(f),g=function(e){var t=Object(a.useState)(e.isOn),n=Object(i.a)(t,2),l=n[0],o=n[1];return c.a.createElement("div",{className:"roomBlock"},c.a.createElement("h3",null,e.name),c.a.createElement("div",{onClick:function(t){window.confirm("Are you sure you wish to delete this room?")&&e.handleDelete(e.id)}},"X"),c.a.createElement("label",null,c.a.createElement("span",null,"ON/OFF"),c.a.createElement(d.a,{onChange:function(t,n){o(!l),e.handleToggle(e.id,!l)},checked:l})),c.a.createElement(s.b,{to:"/settings/".concat(e.id)},"Settings"),c.a.createElement(s.b,{to:{pathname:"settings/".concat(e.id),query:{id:e.id}}}))},E=function(e){return c.a.createElement("ul",null,e.rooms.map((function(t,n){return c.a.createElement(g,{key:n,id:n,name:t.name,isOn:t.isOn,handleDelete:e.handleDelete,handleToggle:e.handleToggle})})))},b=function(){window.addEventListener("storage",(function(e){return console.log()}));var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!1),s=Object(i.a)(o,2),f=s[0],d=s[1];Object(a.useEffect)((function(){l(JSON.parse(localStorage.getItem("Rooms")||"[]"))}),[]),Object(a.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(n)),console.log(n)}),[n]);var g=function(){d(!f)};return c.a.createElement("div",null,c.a.createElement("div",{className:"blocks",onClick:g},c.a.createElement("h1",null,"+")),f?c.a.createElement(m,{show:f,toggleShow:g,handleAdd:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}):"",c.a.createElement(E,{rooms:n,handleDelete:function(e){l(n.splice(e,1)),localStorage.setItem("Rooms",JSON.stringify(n)),l(JSON.parse(localStorage.getItem("Rooms")||"[]")),console.log(e)},handleToggle:function(e,t){l(n.map((function(t,n){return n===e?Object(r.a)({},t,{isOn:!t.isOn}):t})))}}))},O=n(2),h=n(29),p=n.n(h);var v=function(e,t){var n=e.match,l=(t.id,Object(a.useState)([])),o=Object(i.a)(l,2),r=o[0],m=o[1],s=Object(a.useState)(""),f=Object(i.a)(s,2),d=f[0],g=f[1],E=Object(a.useState)(!1),b=Object(i.a)(E,2),O=b[0],h=(b[1],Object(a.useState)([])),v=Object(i.a)(h,2),j=v[0],S=v[1],y=Number(n.params.id);return Object(a.useEffect)((function(){p.a.get("https://www.random.org/integers/?num=2&min=1&max=100&col=2&base=10&format=plain&rnd=new").then((function(e){var t=Number(e.data.slice(0,2)),n=Number(e.data.slice(3,5));S((function(e){return[].concat(Object(u.a)(e),[t])})),S((function(e){return[].concat(Object(u.a)(e),[n])})),console.log(e.data)})).catch((function(e){console.log(e.message)}))}),[]),console.log(j),Object(a.useEffect)((function(){m(JSON.parse(localStorage.getItem("Rooms")||"[]"))}),[]),Object(a.useEffect)((function(){localStorage.setItem("Rooms",JSON.stringify(r)),console.log("zmiana")}),[r]),c.a.createElement("div",null,c.a.createElement("div",null,"Temp:",j[0]," Humidity: ",j[1]),O?c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={device:d,isOn:!1};r[y].devices=[t],localStorage.setItem("Rooms",JSON.stringify(r))}},c.a.createElement("label",null,c.a.createElement("input",{type:"text",name:"name",onChange:function(e){console.log(e.currentTarget.value),g(e.currentTarget.value)}})),c.a.createElement("button",{type:"submit",value:"Wy\u015blij"},"Wyslij")):"")},j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Hi user")),c.a.createElement("div",null,c.a.createElement("h5",null,"Welcome Home ! ")),c.a.createElement(O.c,null,c.a.createElement(O.a,{path:"/",exact:!0,component:b}),c.a.createElement(O.a,{exact:!0,path:"/settings/:id",component:v}))))};o.a.render(c.a.createElement(s.a,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8a2962dc.chunk.js.map