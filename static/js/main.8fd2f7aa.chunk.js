(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),o=r(7),c=r.n(o),a=(r(12),r(2)),i=r(3),l=r(5),d=r(4),h=(r(13),r(0)),u=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props.data,t=e.correctChars,r=e.correctWords,n=e.incorrectChars,s=e.incorrectWords;return Object(h.jsx)("div",{className:"result",children:Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"2",align:"center",children:Object(h.jsx)("h1",{children:Math.round(t/5)+" wpm"})})}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Correct Words:"}),Object(h.jsxs)("td",{children:[r," (",t,")"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Incorrect Words:"}),Object(h.jsxs)("td",{children:[s," (",n,")"]})]}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"2",align:"center",children:Object(h.jsx)("button",{onClick:this.props.resetTest,children:"Restart"})})})]})})})}}]),r}(s.a.Component),m=(r(15),function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).hideTimer=function(e){e.target.style.opacity="0"===e.target.style.opacity?1:0},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){document.getElementsByClassName("word")[0].scrollIntoView({behavior:"smooth",block:"center"})}},{key:"render",value:function(){var e=this,t=this.props,r=t.typedWord,n=t.currWord,s=t.timer,o=t.words,c=r.slice(n.length).split("");return Object(h.jsxs)("div",{className:"test",children:[Object(h.jsx)("div",{className:"timer"+(null===this.props.setTimer?" hidden":""),onClick:function(t){e.hideTimer(t)},children:s}),Object(h.jsx)("div",{className:"box",children:o.map((function(e,t){return Object(h.jsxs)("div",{className:"word",id:n===e?"active":"",children:[n===e?Object(h.jsx)("span",{id:"caret",className:"blink",style:{translate:14.5833*r.length},children:"|"}):null,e.split("").map((function(e,t){return Object(h.jsx)("span",{children:e},e+t)})),n===e?c.map((function(e,t){return Object(h.jsx)("span",{className:"wrong",children:e},e+t)})):null]},e+t)}))})]})}}]),r}(s.a.Component)),b=(r(16),function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={currWord:"",typedWord:"",timer:60,correctWords:0,incorrectWords:0,correctChars:0,incorrectChars:0,setTimer:null},e.words=["the","be","of","and","a","to","in","he","have","it","that","for","they","I","with","as","not","on","she","at","by","this","we","you","do","but","from","or","which","one","would","all","will","there","say","who","make","when","can","more","if","no","man","out","other","so","what","time","up","go","about","than","into","could","state","only","new","year","some","take","come","these","know","see","use","get","like","then","first","any","work","now","may","such","give","over","think","most","even","find","day","also","after","way","many","must","look","before","great","back","through","long","where","much","should","well","people","down","own","just","because","good","each","those","feel","seem","how","high","too","place","little","world","very","still","nation","hand","old","life","tell","write","become","here","show","house","both","between","need","mean","call","develop","under","last","right","move","thing","general","school","never","same","another","begin","while","number","part","turn","real","leave","might","want","point","form","off","child","few","small","since","against","ask","late","home","interest","large","person","end","open","public","follow","during","present","without","again","hold","govern","around","possible","head","consider","word","program","problem","however","lead","system","set","order","eye","plan","run","keep","face","fact","group","play","stand","increase","early","course","change","help","line"],e.BLACKLISTED_KEYS=["Escape","CapsLock","Enter","OS","Alt","Control","Shift","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],e.recordTest=function(t){var r=e.state,n=r.typedWord,s=r.currWord,o=r.correctChars,c=r.correctWords,a=r.incorrectChars,i=r.incorrectWords,l=r.timer,d=r.setTimer;if(l>0){if(null===d){var h=setInterval((function(){e.setState({timer:e.state.timer-1},(function(){0===e.state.timer&&(clearInterval(e.state.setTimer),e.setState({setTimer:null}))}))}),1e3);e.setState({setTimer:h})}var u=e.words.indexOf(s),m=document.getElementById("active");m.scrollIntoView({behavior:"smooth",block:"center"});var b=document.getElementById("caret");switch(b.classList.remove("blink"),setTimeout((function(){return b.classList.add("blink")}),500),t.key){case" ":if(""===n)return;s===n?e.setState({correctWords:c+1,correctChars:o+s.length+1}):e.setState({incorrectWords:i+1,incorrectChars:a+s.length}),m.classList.add(n!==s?"wrong":"right"),e.setState({typedWord:"",currWord:e.words[u+1]});break;case"Backspace":t.ctrlKey?(e.setState({typedWord:""}),m.childNodes.forEach((function(e){e.classList.remove("wrong","right")}))):e.setState({typedWord:n.slice(0,n.length-1)},(function(){var t=e.state.typedWord.length;t<s.length&&m.children[t+1].classList.remove("wrong","right")}));break;default:e.setState({typedWord:n+t.key},(function(){var t=e.state.typedWord,r=t.length-1;m.children[r+1].classList.add(s[r]!==t[r]?"wrong":"right")}))}}},e.resetTest=function(){document.querySelectorAll(".wrong, .right").forEach((function(e){return e.classList.remove("wrong","right")})),e.words=e.words.sort((function(){return Math.random()-.5})),clearInterval(e.state.setTimer),e.setState({timer:60,currWord:e.words[0],typedWord:"",correctChars:0,correctWords:0,incorrectWords:0,incorrectChars:0,setTimer:null})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.words=this.words.sort((function(){return Math.random()-.5})),this.setState({currWord:this.words[0]}),document.body.onkeydown=function(t){"Tab"===t.key?(e.resetTest(),document.getElementsByClassName("word")[0].scrollIntoView(),t.preventDefault()):-1===e.BLACKLISTED_KEYS.indexOf(t.key)&&e.recordTest(t)}}},{key:"componentWillUnmount",value:function(){document.body.onkeydown=null}},{key:"render",value:function(){var e=this,t=this.state,r=t.setTimer,n=t.timer;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:null!==r?"hidden":"",children:Object(h.jsx)("a",{href:".",children:"Cool Title"})}),0!==n?Object(h.jsx)(m,{words:this.words,currWord:this.state.currWord,typedWord:this.state.typedWord,setTimer:this.state.setTimer,timer:this.state.timer}):Object(h.jsx)(u,{data:this.state,resetTest:function(){return e.resetTest()}}),Object(h.jsxs)("footer",{className:null!==r?"hidden":"",children:[Object(h.jsxs)("a",{href:"https://www.github.com/salmannotkhan/Typing-Test",children:[Object(h.jsx)("span",{children:"</>"}),"github"]}),Object(h.jsxs)("span",{children:["created by"," ",Object(h.jsx)("a",{href:"https://www.github.com/salmannotkhan",children:"@salmannotkhan"})]})]})]})}}]),r}(s.a.Component)),j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),o(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.8fd2f7aa.chunk.js.map