(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),l=(a(14),a(2)),o=a(3),u=a(5),s=a(4),h=a(1),p=a(6),m=(a(15),function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.url,this.props.weather?this.props.weather.map((function(t,a){return i.a.createElement("div",{key:a},i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(t.icon,".png"),alt:"icon"}),i.a.createElement("p",null," ",i.a.createElement("b",null,"City: ")," ",e.props.city),i.a.createElement("p",null," ",i.a.createElement("b",null,"Weather: ")," ",t.main," , ",t.description),i.a.createElement("p",null," ",i.a.createElement("b",null,"Temperature:")," ",parseFloat(e.props.temp.temp-273.15).toFixed(0)," C "),i.a.createElement("p",null," ",i.a.createElement("b",null,"Humidity: ")," ",e.props.temp.humidity," %"),i.a.createElement("p",null," ",i.a.createElement("b",null,"Wind: "),e.props.wind.speed," mps "))})):i.a.createElement("p",null))}}]),t}(i.a.Component)),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={input:"",city:"",url:"",data1:"",data2:"",data3:"",blank:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.getData=a.getData.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q="+this.state.input+"&appid=ba4eac3926cb7d59a3b93b6cd25a2bee";this.setState({input:"",city:this.state.input}),this.getData(t)}},{key:"componentWillMount",value:function(){}},{key:"getData",value:function(e){var t=this;fetch(e).then((function(e){e.json().then((function(e){t.setState({weather:e.weather,temp:e.main,wind:e.wind})}))})),console.log("fetch")}},{key:"render",value:function(){return i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"quote-box"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{value:this.state.input,onChange:this.handleChange,placeholder:"Enter the city ..."}),i.a.createElement("button",{type:"submit"},"Search")),i.a.createElement(m,{city:this.state.city,weather:this.state.weather,temp:this.state.temp,wind:this.state.wind})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7b6b6c11.chunk.js.map