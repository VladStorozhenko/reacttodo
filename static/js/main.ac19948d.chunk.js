(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(8),r=a.n(c),l=(a(63),a(13)),i=a(52),s=a(30),m=a(108),d=a(106),u=a(102);var f=function(e){var t=e.addTodo,a=e.toggleComplete,c=Object(o.useState)({id:"",task:"",completed:!1}),r=Object(s.a)(c,2),i=r[0],f=r[1];return n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.task.trim()&&(t(Object(l.a)(Object(l.a)({},i),{},{id:Object(m.a)()})),f(Object(l.a)(Object(l.a)({},i),{},{task:""})))},className:"form",autoComplete:"off"},n.a.createElement(d.a,{label:"Task",name:"task",type:"text",value:i.task,onChange:function(e){f(Object(l.a)(Object(l.a)({},i),{},{task:e.target.value}))},toggleComplete:a}),n.a.createElement(u.a,{className:"add-button",type:"submit"},"Add")))},p=a(103),b=a(107),v=a(105),g=a(104),E=a(51),O=a.n(E);var j=function(e){var t=e.todo,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(p.a,{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement(b.a,{checked:t.completed,onClick:function(){a(t.id)}}),n.a.createElement(v.a,{className:"todo-body",variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task),n.a.createElement(g.a,{onClick:function(){o(t.id)}},n.a.createElement(O.a,null)))},h=a(101);var k=function(e){var t=e.todos,a=e.removeTodo,o=e.toggleComplete;return n.a.createElement(h.a,{className:"todo-list",component:"ol",style:{listStyleType:"disc"}},t.map((function(e){return n.a.createElement(j,{key:e.id,todo:e,removeTodo:a,toggleComplete:o})})))};a(69);var y=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)({numerateTodos:!1}),m=Object(s.a)(r,2),d=m[0];return m[1],Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),n.a.createElement("div",null,n.a.createElement("header",{id:"header"},n.a.createElement(v.a,{variant:"h2",className:"title"},"Todo"),n.a.createElement(f,{addTodo:function(e){c([e].concat(Object(i.a)(a)))}})),n.a.createElement("div",{id:"todo"},n.a.createElement(k,{todos:a,toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))},settings:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.ac19948d.chunk.js.map