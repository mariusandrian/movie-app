(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),s=(a(16),a(17),a(18),a(6)),l=a.n(s),c=a(9),u=a(10),m=a(2),h=a(3),p=a(1),v=a(5),d=a(4),b=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Title: ",this.props.movie.Title),i.a.createElement("h2",null,"Year: ",this.props.movie.Year),i.a.createElement("img",{src:this.props.movie.Poster,alt:this.props.movie.Title}),i.a.createElement("h3",null,"Genre: ",this.props.movie.Genre),i.a.createElement("h4",null,"Plot: ",this.props.movie.Plot))}}]),a}(i.a.Component),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={baseURL:"http://www.omdbapi.com/?",apikey:"apikey=98e3fb1f",query:"&t=",movieTitle:"",searchURL:"",movie:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({searchURL:this.state.baseURL+this.state.apikey+this.state.query+this.state.movieTitle},Object(c.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.state.searchURL);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t.setState({movie:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{for:"movieTitle"},"Title"),i.a.createElement("input",{id:"movieTitle",type:"text",value:this.state.movieTitle,onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"Find Movie Info"})),this.state.movie?i.a.createElement(b,{movie:this.state.movie}):"")}}]),a}(i.a.Component);var E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c636960b.chunk.js.map