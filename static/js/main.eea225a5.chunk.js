(this["webpackJsonpreact-typescript-quiz"]=this["webpackJsonpreact-typescript-quiz"]||[]).push([[0],{27:function(t,n,e){"use strict";e.r(n);var r,a=e(0),c=e.n(a),i=e(15),s=e.n(i),o=e(3),u=e(4),l=e.n(u),d=e(9),b=e(2),p=e(13);!function(t){t.EASY="easy",t.MEDIUM="medium",t.HARD="hard"}(r||(r={}));var x,f,j,g,h=function(){var t=Object(d.a)(l.a.mark((function t(n,e){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(e,"&type=multiple"),t.next=3,fetch(r);case 3:return t.next=5,t.sent.json();case 5:return a=t.sent,t.abrupt("return",a.results.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{answers:(n=[].concat(Object(o.a)(t.incorrect_answers),[t.correct_answer]),Object(o.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),O=e(5),m=e(6),w=m.b.div(x||(x=Object(O.a)(["\n\tmax-width: 1100px;\n\tbackground: #ebfeff;\n\tborder-radius: 10px;\n\tborder: 2px solid #0085a3;\n\tpadding: 20px;\n\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\ttext-align: center;\n\tmargin: 20px 0;\n\n\tp {\n\t\tfont-size: 1rem;\n\t}\n"]))),v=m.b.div(f||(f=Object(O.a)(["\n\ttransition: all 0.3s ease;\n\n\t:hover {\n\t\topacity: 0.8;\n\t}\n\n\tbutton {\n\t\tcursor: pointer;\n\t\tuser-select: none;\n\t\tfont-size: 0.8rem;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tmargin: 5px 0;\n\t\tbackground: ",";\n\t\tborder: 3px solid white;\n\t\tbox-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 10px;\n\t\tcolor: white;\n\t\ttext-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n\t}\n"])),(function(t){var n=t.correct,e=t.userClicked;return n?"linear-gradient(90deg, #56ffa4, #59bc86)":!n&&e?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),k=e(1),y=function(t){var n=t.question,e=t.answers,r=t.callback,a=t.userAnswer,c=t.questionNr,i=t.totalQuestions;return Object(k.jsxs)(w,{children:[Object(k.jsxs)("p",{className:"number",children:["Question: ",c," / ",i]}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),Object(k.jsx)("div",{children:e.map((function(t){return Object(k.jsx)(v,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===t,userClicked:(null===a||void 0===a?void 0:a.answer)===t,children:Object(k.jsx)("button",{disabled:!!a,value:t,onClick:r,children:Object(k.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})},t)}))})]})},S=e.p+"static/media/mountains.6df27a9d.jpeg",z=Object(m.a)(j||(j=Object(O.a)(["\n    html {\n        height: 100%; \n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0; \n        padding: 0 20px; \n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box; \n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n"])),S),q=m.b.div(g||(g=Object(O.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t> p {\n\t\tcolor: #fff;\n\t}\n\n\t.score {\n\t\tcolor: #fff;\n\t\tfont-size: 2rem;\n\t\tmargin: 0;\n\t}\n\n\th1 {\n\t\tbackground-image: linear-gradient(180deg, #fff, #87f1ff);\n\t\tbackground-size: 100%;\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\t-moz-background-clip: text;\n\t\t-moz-text-fill-color: transparent;\n\t\tfilter: drop-shadow(2px 2px #0085a3);\n\t\tfont-size: 70px;\n\t\tfont-weight: 400;\n\t\tmargin: 20px;\n\t}\n\n\t.start,\n\t.next {\n\t\tcursor: pointer;\n\t\tbackground: linear-gradient(180deg, #fff, #ffcc91);\n\t\tborder: 2px solid #d38558;\n\t\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 10px;\n\t\theight: 40px;\n\t\tmargin: 20px 0;\n\t\tpadding: 0 40px;\n\t}\n\n\t.start {\n\t\tmax-width: 400px;\n\t}\n"]))),C=function(){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),e=n[0],c=n[1],i=Object(a.useState)([]),s=Object(b.a)(i,2),u=s[0],p=s[1],x=Object(a.useState)(0),f=Object(b.a)(x,2),j=f[0],g=f[1],O=Object(a.useState)([]),m=Object(b.a)(O,2),w=m[0],v=m[1],S=Object(a.useState)(0),C=Object(b.a)(S,2),N=C[0],_=C[1],A=Object(a.useState)(!0),M=Object(b.a)(A,2),F=M[0],I=M[1],Q=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),I(!1),t.next=4,h(10,r.EASY);case 4:n=t.sent,p(n),_(0),v([]),g(0),c(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z,{}),Object(k.jsxs)(q,{children:[Object(k.jsx)("h1",{children:"React Quiz"}),F||10===w.length?Object(k.jsx)("button",{className:"start",onClick:Q,children:"Start"}):null,F?null:Object(k.jsxs)("p",{className:"score",children:["Score: ",N]}),e?Object(k.jsx)("p",{children:"Loading Questions..."}):null,!e&&!F&&Object(k.jsx)(y,{questionNr:j+1,totalQuestions:10,question:u[j].question,answers:u[j].answers,userAnswer:w?w[j]:void 0,callback:function(t){if(!F){var n=t.currentTarget.value,e=u[j].correct_answer===n;e&&_((function(t){return t+1}));var r={question:u[j].question,answer:n,correct:e,correctAnswer:u[j].correct_answer};v((function(t){return[].concat(Object(o.a)(t),[r])}))}}}),F||e||w.length!==j+1||9===j?null:Object(k.jsx)("button",{className:"next",onClick:function(){var t=j+1;10===t?I(!0):g(t)},children:"Next Question"})]})]})},N=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),r(t),a(t),c(t),i(t)}))};s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root")),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.eea225a5.chunk.js.map