(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),c=(a(14),a(2)),o=a(3),s=a(5),u=a(4),h=a(1),p=a(6),d=(a(15),function(t){function e(t){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,this.props.url,this.props.data1?this.props.data1.map((function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(e.icon,".png"),alt:"icon"}),i.a.createElement("p",null," ",i.a.createElement("b",null,"City: ")," ",t.props.city),i.a.createElement("p",null," ",i.a.createElement("b",null,"Weather: ")," ",e.main," , ",e.description),i.a.createElement("p",null," ",i.a.createElement("b",null,"Temperature:")," ",parseFloat(t.props.data2.temp-273.15).toFixed(0)," C "),i.a.createElement("p",null," ",i.a.createElement("b",null,"Humidity: ")," ",t.props.data2.humidity," %"),i.a.createElement("p",null," ",i.a.createElement("b",null,"Wind: "),t.props.data3.speed," mps "))})):i.a.createElement("p",null))}}]),e}(i.a.Component)),m=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={input:"",city:"",url:"",data1:"",data2:"",data3:"",blank:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState({city:this.state.input,url:this.state.blank.concat("https://api.openweathermap.org/data/2.5/weather?q=",this.state.input,"&appid=ba4eac3926cb7d59a3b93b6cd25a2bee"),input:""}),console.log(this.state.url,"url"),console.log(this.state.city,"submit"),console.log(this.state.input,"input")}},{key:"render",value:function(){var t=this;fetch(this.state.url).then((function(e){e.json().then((function(e){t.setState({data1:e.weather,data2:e.main,data3:e.wind})}))}));return i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"quote-box"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{value:this.state.input,onChange:this.handleChange,placeholder:"Enter the city ..."}),i.a.createElement("button",{type:"submit"},"Search")),i.a.createElement(d,{city:this.state.city,data1:this.state.data1,data2:this.state.data2,data3:this.state.data3})))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d4b8012b.chunk.js.map