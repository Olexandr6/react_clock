(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),l=c(5),s=c(4),r=c(1),u=c.n(r),h=(c(12),c(0)),k=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={date:new Date},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(t){var e=[t.clockName,this.props.clockName],c=e[0],n=e[1];c!==n&&console.log("The Clock was renamed from ".concat(c," to ").concat(n))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"tick",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"render",value:function(){return Object(h.jsx)("p",{children:"Current time: ".concat(this.state.date.toLocaleTimeString())})}}]),c}(u.a.Component),d=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:120},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:Math.floor(120*Math.random())})},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(h.jsx)(k,{clockName:this.state.clockName}),Object(h.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.setRandomName,children:"Set Random Name"})]})}}]),c}(u.a.Component),m=d;o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6f9ab4b3.chunk.js.map