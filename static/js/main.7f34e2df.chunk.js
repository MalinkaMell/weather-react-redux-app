(this["webpackJsonpweather-react-redux-app"]=this["webpackJsonpweather-react-redux-app"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"States":{"IL":{"currentdate":"04/05/2020","time":"02:59 PM","cities":[{"name":"Chicago","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":47,"feels":40},{"Date":"04/06/2020","Time":"2.59pm","temprature":57,"feels":55},{"Date":"04/07/2020","Time":"2.59pm","temprature":45,"feels":44},{"Date":"04/08/2020","Time":"2.59pm","temprature":61,"feels":50},{"Date":"04/09/2020","Time":"2.59pm","temprature":68,"feels":65}]},{"name":"Naperville","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":47,"feels":40},{"Date":"04/06/2020","Time":"2.59pm","temprature":59,"feels":54},{"Date":"04/07/2020","Time":"2.59pm","temprature":47,"feels":46},{"Date":"04/08/2020","Time":"2.59pm","temprature":63,"feels":62},{"Date":"04/09/2020","Time":"2.59pm","temprature":70,"feels":68}]}]},"NY":{"currentdate":"04/05/2020","time":"02:59 PM","cities":[{"name":"New York","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":57,"feels":50},{"Date":"04/06/2020","Time":"2.59pm","temprature":67,"feels":65},{"Date":"04/07/2020","Time":"2.59pm","temprature":55,"feels":54},{"Date":"04/08/2020","Time":"2.59pm","temprature":71,"feels":60},{"Date":"04/09/2020","Time":"2.59pm","temprature":78,"feels":75}]},{"name":"Buffalo","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":58,"feels":40},{"Date":"04/06/2020","Time":"2.59pm","temprature":68,"feels":64},{"Date":"04/07/2020","Time":"2.59pm","temprature":57,"feels":46},{"Date":"04/08/2020","Time":"2.59pm","temprature":63,"feels":62},{"Date":"04/09/2020","Time":"2.59pm","temprature":40,"feels":48}]}]},"CA":{"currentdate":"04/05/2020","time":"02:59 PM","cities":[{"name":"Los Angeles","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":67,"feels":50},{"Date":"04/06/2020","Time":"2.59pm","temprature":77,"feels":65},{"Date":"04/07/2020","Time":"2.59pm","temprature":65,"feels":54},{"Date":"04/08/2020","Time":"2.59pm","temprature":71,"feels":60},{"Date":"04/09/2020","Time":"2.59pm","temprature":78,"feels":75}]},{"name":"San francisco","forecast":[{"Date":"04/05/2020","Time":"2.59pm","temprature":68,"feels":50},{"Date":"04/06/2020","Time":"2.59pm","temprature":78,"feels":64},{"Date":"04/07/2020","Time":"2.59pm","temprature":67,"feels":66},{"Date":"04/08/2020","Time":"2.59pm","temprature":73,"feels":72},{"Date":"04/09/2020","Time":"2.59pm","temprature":70,"feels":68}]}]}}}')},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),m=a.n(l),c=(a(32),a(33),a(41)),i=a(42),s=a(43),u=a(44),p=function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,e.title))},o=function(e){return n.a.createElement(c.a,{className:"content"},n.a.createElement(i.a,{className:"justify-content-center"},n.a.createElement(s.a,{md:8,className:"text-center mt-3"},n.a.createElement(u.a,null,n.a.createElement(p,{title:"Weather App"}),e.children))))},f=function(e){return n.a.createElement("button",{onClick:e.handleSubmit,type:e.type,className:e.class},e.btnValue)},E=a(11),d=function(e){return console.log(e),0!==Object.keys(e.city).length?n.a.createElement("div",{className:"px-2 text-center"},n.a.createElement("h3",{className:"my-3"},e.city.name,", ",e.city.state),n.a.createElement("ul",{className:"list-inline d-flex"},e.city.forecast.map((function(t,a){var r=new Date(t.Date).toDateString();if(r===new Date(e.city.currentdate).toDateString())return n.a.createElement("li",{className:"list-inline-item flex-fill text-center results p-2",key:a},n.a.createElement("p",null,r),n.a.createElement("p",null,t.Time),n.a.createElement("p",null,"Temperature: ",t.temprature),n.a.createElement("p",null,t.temprature>=60?n.a.createElement("i",{className:"fas fa-sun fa-2x"}):n.a.createElement("i",{className:"fas fa-cloud fa-2x"})),n.a.createElement("p",null,"Feels: ",t.feels))}))),n.a.createElement(E.b,{to:"/fivedays"},n.a.createElement(f,{type:"button",btnValue:"5 Day Weather",class:"btn btn-primary my-4"}))):n.a.createElement("h5",{className:"my-4"},"Sorry, we don't have results for this city")},y=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{className:"form-control",type:e.type,value:e.input,onChange:e.handleChange,placeholder:e.placeholder,list:"cities"}),n.a.createElement("datalist",{id:"cities"},n.a.createElement("option",{value:"Chicago"}),n.a.createElement("option",{value:"New York"}),n.a.createElement("option",{value:"Los Angeles"})))},D=function(e){return n.a.createElement("form",{className:"w-100 px-2 mt-3"},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement(y,{handleChange:e.handleChange,input:e.input,type:"text",placeholder:"Enter City"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement(f,{handleSubmit:e.handleSubmit,type:"submit",class:"btn btn-primary",btnValue:"Search"}))))},h=a(8),T=function(e){return n.a.createElement("div",{className:"px-2 text-center"},n.a.createElement("h3",{className:"my-3"},e.city.name,", ",e.city.state),n.a.createElement("ul",{className:"list-inline d-flex"},e.city.forecast.map((function(e,t){var a=new Date(e.Date).toDateString();return n.a.createElement("li",{className:"list-inline-item flex-fill text-center results p-2",key:t},n.a.createElement("p",null,a),n.a.createElement("p",null,e.Time),n.a.createElement("p",null,"Temperature: ",e.temprature),n.a.createElement("p",null,e.temprature>=60?n.a.createElement("i",{className:"fas fa-sun fa-2x"}):n.a.createElement("i",{className:"fas fa-cloud fa-2x"})),n.a.createElement("p",null,"Feels: ",e.feels))}))),n.a.createElement(E.b,{to:"/"},n.a.createElement(f,{type:"button",btnValue:"Back",class:"btn btn-primary my-4"})))},b=a(20),N=a(15),g={display:null,input:"",data:a(25)},v=Object(N.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_ITEM":return Object(b.a)({},e,{input:t.payload});case"ADD_TO_DISPLAY":return Object(b.a)({},e,{display:t.payload,input:""});default:return e}}));v.subscribe((function(){console.log(v.getState())}));var x=v,S=a(9),w=function(){var e=Object(S.c)((function(e){return e.input})),t=Object(S.c)((function(e){return e.data})),a=Object(S.c)((function(e){return e.display})),r=Object(S.b)();return n.a.createElement(E.a,{basename:"/weather-react-redux-app"},n.a.createElement(o,null,n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/"},n.a.createElement(D,{handleChange:function(e){r({type:"INPUT_ITEM",payload:e.target.value})},handleSubmit:function(a){a.preventDefault();var n={},l=t.States,m=Object.keys(l).map((function(t){var a=[];return l[t].cities.map((function(r,n){return e.toLowerCase()===r.name.toLowerCase()&&a.push(t)})),a})),c=Object.keys(l).map((function(t){var a=[];return l[t].cities.map((function(t,r){return e.toLowerCase()===t.name.toLowerCase()&&a.push(r)})),a})),i=parseInt(c.flat().toString());""!==m.flat().toString()&&(n.state=m.flat().toString()),Object.keys(l).filter((function(e){return e===n.state&&(n.name=l[e].cities[i].name,n.state=e,n.currentdate=l[e].currentdate,n.time=l[e].time,n.forecast=l[e].cities[i].forecast),!1})),console.log(n),r({type:"ADD_TO_DISPLAY",payload:n})},input:e}),null!==a&&n.a.createElement(d,{city:a})),n.a.createElement(h.a,{path:"/fivedays"},n.a.createElement(T,{city:a})))))};m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S.a,{store:x},n.a.createElement(w,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7f34e2df.chunk.js.map