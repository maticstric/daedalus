(this.webpackJsonpdaedalus=this.webpackJsonpdaedalus||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),l=i(9),a=i.n(l),c=(i(14),i(2)),r=(i(15),i(16),{white:"#ffffff",black:"#000000",background:"#2c3035"}),o=i(0),d=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){var i=t.current,n=i.getContext("2d");n.canvas.width=e.canvasSize,n.canvas.height=e.canvasSize;!function(e,t){e?e.cells.forEach((function(e){e.isWall?t.fillStyle=r.black:t.fillStyle=r.white,t.fillRect(e.x,e.y,e.width,e.height),t.stroke()})):(t.fillStyle="black",t.fillRect(0,0,i.width,i.height))}(e.history[e.historyIndex],n)}),[e.historyIndex,e.history,e.canvasSize]),Object(o.jsx)("div",{id:"canvas-wrapper",children:Object(o.jsx)("canvas",{id:"canvas",ref:t,width:e.canvasSize,height:e.canvasSize})})},h=(i(18),i(19),i.p+"static/media/first.c3e0cf7d.svg"),u=i.p+"static/media/previous.4ccf2fd0.svg",f=i.p+"static/media/next.fe3f3ecb.svg",j=i.p+"static/media/last.f00f4291.svg",b=i.p+"static/media/play.54e558df.svg",p=i.p+"static/media/pause.d4c80d88.svg",x=function(e){var t=Object(n.useState)(!0),i=Object(c.a)(t,2),s=i[0],l=i[1],a=Object(n.useState)(!1),r=Object(c.a)(a,2),d=r[0],x=r[1],g=Object(n.useState)(!1),v=Object(c.a)(g,2),O=v[0],y=v[1],w=Object(n.useState)(null),m=Object(c.a)(w,2),S=m[0],k=m[1],I=Object(n.useState)(b),z=Object(c.a)(I,2),W=z[0],C=z[1],P=Object(n.useRef)(e.speed);P.current=e.speed,Object(n.useEffect)((function(){0===e.historyIndex?(l(!0),x(!1)):e.historyIndex===e.history.length-1?(l(!1),x(!0)):(l(!1),x(!1)),e.historyIndex===e.history.length-1?y(!0):y(!1),e.isPlaying&&(l(!0),x(!0))}),[e.isPlaying,e.historyIndex,e.history.length]),Object(n.useEffect)((function(){e.isPlaying?C(p):C(b)}),[e.isPlaying]);var R=function t(i){var n=1/P.current*1e3;i+=1,e.setHistoryIndex(i),i<e.history.length-1?k(setTimeout((function(){t(i)}),n)):e.setIsPlaying(!1)};return Object(o.jsxs)("div",{id:"playback-wrapper",children:[Object(o.jsx)("input",{type:"image",alt:"first",disabled:s,onClick:function(){e.setHistoryIndex(0)},src:h}),Object(o.jsx)("input",{type:"image",alt:"previous",disabled:s,onClick:function(){var t=e.historyIndex;e.setHistoryIndex(t-1)},src:u}),Object(o.jsx)("input",{type:"image",alt:"play-pause",disabled:O,onClick:function(){e.isPlaying?(e.setIsPlaying(!1),clearTimeout(S)):(e.setIsPlaying(!0),R(e.historyIndex))},src:W}),Object(o.jsx)("input",{type:"image",alt:"next",disabled:d,onClick:function(){var t=e.historyIndex;e.setHistoryIndex(t+1)},src:f}),Object(o.jsx)("input",{type:"image",alt:"last",disabled:d,onClick:function(){e.setHistoryIndex(e.history.length-1)},src:j})]})},g=(i(20),i(21),function(e){var t=Object(n.useState)("size: 10"),i=Object(c.a)(t,2);i[0],i[1];return Object(o.jsxs)("div",{id:"range-slider-wrapper",children:[Object(o.jsx)("div",{children:e.min}),Object(o.jsx)("input",{type:"range",disabled:e.disabled,min:e.min,max:e.max,step:e.step,defaultValue:e.defaultValue,onChange:e.onChange,onMouseUp:e.onMouseUp}),Object(o.jsx)("div",{children:e.max})]})}),v=function(e){var t=Object(n.useState)("size: 10"),i=Object(c.a)(t,2),s=i[0],l=i[1];return Object(o.jsxs)("div",{id:"size-slider-wrapper",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)(g,{disabled:e.isPlaying,type:"range",min:"2",max:"30",step:"1",defaultValue:"10",onChange:function(e){l("size: "+e.target.value)},onMouseUp:function(t){e.setSize(t.target.value)}})]})},O=(i(22),function(e){var t=Object(n.useState)("speed: 0"),i=Object(c.a)(t,2),s=i[0],l=i[1];return Object(o.jsxs)("div",{id:"speed-slider-wrapper",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)(g,{disabled:e.isPlaying,type:"range",min:"0",max:"1",step:"0.01",defaultValue:"0",onChange:function(t){l("speed: "+t.target.value),e.setSpeed(Math.pow(1e3,t.target.value))}})]})}),y=function(e){return Object(o.jsxs)("div",{id:"controls-wrapper",children:[Object(o.jsx)("h2",{children:"controls"}),Object(o.jsx)(v,{setSize:e.setSize,isPlaying:e.isPlaying}),Object(o.jsx)(O,{setSpeed:e.setSpeed}),Object(o.jsx)(x,{historyIndex:e.historyIndex,history:e.history,setHistoryIndex:e.setHistoryIndex,speed:e.speed,isPlaying:e.isPlaying,setIsPlaying:e.setIsPlaying}),Object(o.jsx)("div",{}),Object(o.jsxs)("blockquote",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Such was the work, so intricate the place,"}),Object(o.jsx)("span",{children:"That scarce the workman all its turns cou\u2019d trace;"}),Object(o.jsx)("span",{children:"And Daedalus was puzzled how to find"}),Object(o.jsx)("span",{children:"The secret ways of what himself design\u2019d."})]}),Object(o.jsxs)("p",{children:["\u2014 Ovid, ",Object(o.jsx)("cite",{children:"Metamorphoses"})]})]})]})},w=(i(23),{RandomizedDepthFirstSearch:0,RandomizedKruskalsAlgorithm:1,RandomizedPrimsAlgorithm:2}),m=function(e){return Object(o.jsxs)("div",{id:"selector-wrapper",children:[Object(o.jsx)("h2",{children:"maze generation algorithms"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:w.RandomizedDepthFirstSearch})},children:"randomized depth first search"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:w.RandomizedKruskalsAlgorithm})},children:"randomized kruskal\u2019s algorithm"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:w.RandomizedPrimsAlgorithm})},children:"randomized prim\u2019s algorithm"})]})},S=i(3),k=i(4),I=function(){function e(t,i,n,s,l,a){Object(S.a)(this,e),this.x=t,this.y=i,this.index=n,this.width=s,this.height=l,this.isWall=a}return Object(k.a)(e,[{key:"clone",value:function(){return new e(this.x,this.y,this.index,this.width,this.height,this.isWall)}}]),e}(),z=function(){function e(t,i,n,s){var l=this;Object(S.a)(this,e),this.initCells=function(){for(var e=[],t=0;t<l.rows;t++)for(var i=0;i<l.cols;i++){var n=l.width/l.cols,s=l.height/l.rows,a=n*i,c=s*t,r=t*l.cols+i;e.push(new I(a,c,r,n,s,!0))}return e},this.neumannNeighborhood=function(e){var t=[],i=l.getRowAndCol(e),n=i.row,s=i.col,a=l.cells[l.index(n-2,s)],c=l.cells[l.index(n,s+2)],r=l.cells[l.index(n+2,s)],o=l.cells[l.index(n,s-2)];return a&&t.push(a),c&&t.push(c),r&&t.push(r),o&&t.push(o),t},this.cellBetween=function(e,t){return e.index-t.index===2?l.cells[t.index+1]:t.index-e.index===2?l.cells[e.index+1]:e.index-t.index===2*l.cols?l.cells[t.index+l.cols]:t.index-e.index===2*l.cols?l.cells[e.index+l.cols]:void 0},this.index=function(e,t){return e<0||t<0||e>l.rows-1||t>l.cols-1?-1:t+e*l.cols},this.clone=function(){var t=new e(l.width,l.height,l.rows,l.cols);return t.cells=[],l.cells.forEach((function(e){var i=e.clone();t.cells.push(i)})),t},this.width=t,this.height=i,this.rows=n,this.cols=s,this.cells=this.initCells()}return Object(k.a)(e,[{key:"getCellsDividedByWall",value:function(e){var t,i,n=this.getRowAndCol(e),s=n.row,l=n.col;return s%2===0?(t=this.cells[e.index-this.cols],i=this.cells[e.index+this.cols]):l%2===0&&(t=this.cells[e.index-1],i=this.cells[e.index+1]),{cellA:t,cellB:i}}},{key:"getRowAndCol",value:function(e){return{row:Math.floor(e.index/this.cols),col:e.index%this.cols}}}]),e}(),W=function(){function e(){Object(S.a)(this,e)}return Object(k.a)(e,null,[{key:"getInitialState",value:function(){return{stack:[]}}},{key:"cloneState",value:function(e,t){var i=[];return t.stack.forEach((function(t){var n=e.cells[t.index];i.push(n)})),{stack:i}}}]),e}();W.generate=function(e,t,i,n){var s=new z(t,t,2*e+1,2*e+1),l=W.getInitialState(),a=l.stack,c=[s.clone()];if(0===a.length){var r=s.cells[s.cols+1];s.cells[r.index].isWall=!1,a.push(r)}for(;0!==a.length;){var o=a.pop(),d=W.wallNeighbors(s,o);if(0!==d.length){a.push(o);var h=d[Math.floor(Math.random()*d.length)],u=s.cellBetween(o,h);s.cells[u.index].isWall=!1,s.cells[h.index].isWall=!1,a.push(h),c.push(s),s=s.clone(),a=(l=W.cloneState(s,l)).stack}}i(c),n(c.length-1)},W.wallNeighbors=function(e,t){for(var i=e.neumannNeighborhood(t),n=[],s=0;s<i.length;s++){var l=i[s];l.isWall&&n.push(l)}return n};var C=W,P=i(5),R=function(){function e(){Object(S.a)(this,e)}return Object(k.a)(e,null,[{key:"getSetWithCell",value:function(e,t){var i;return e.forEach((function(e){e.forEach((function(n){n===t&&(i=e)}))})),i}},{key:"getInitialWallList",value:function(e){var t=[];return e.cells.forEach((function(i){var n=e.getRowAndCol(i),s=n.row,l=n.col;0!==s&&s!==e.rows-1&&0!==l&&l!==e.cols-1&&(s%2===0&&l%2===0||(s%2===0||l%2===0)&&t.push(i))})),t}},{key:"getInitialCellSets",value:function(e){var t=[];return e.cells.forEach((function(i){var n=e.getRowAndCol(i),s=n.row,l=n.col;if(s%2===1&&l%2===1){var a=new Set;a.add(i),t.push(a)}})),t}},{key:"getInitialState",value:function(e){return{wallList:this.getInitialWallList(e),cellSets:this.getInitialCellSets(e)}}},{key:"cloneState",value:function(e,t){var i=[],n=[];return t.wallList.forEach((function(t){var n=e.cells[t.index];i.push(n)})),t.cellSets.forEach((function(t){var i=new Set;t.forEach((function(t){var n=e.cells[t.index];i.add(n)})),n.push(i)})),{wallList:i,cellSets:n}}}]),e}();R.generate=function(e,t,i,n){for(var s=new z(t,t,2*e+1,2*e+1),l=R.getInitialState(s),a=l.wallList,c=l.cellSets,r=[s.clone()];c.length>1;){var o=Math.floor(Math.random()*a.length),d=a[o],h=s.getCellsDividedByWall(d),u=h.cellA,f=h.cellB,j=R.getSetWithCell(c,u),b=R.getSetWithCell(c,f);j!==b&&(s.cells[u.index].isWall=!1,s.cells[f.index].isWall=!1,s.cells[d.index].isWall=!1,a.splice(o,1),c.splice(c.indexOf(j),1),c.splice(c.indexOf(b),1),c.push(new Set([].concat(Object(P.a)(j),Object(P.a)(b)))),r.push(s),s=s.clone(),a=(l=R.cloneState(s,l)).wallList,c=l.cellSets)}i(r),n(r.length-1)};var A=R,E=function(){function e(){Object(S.a)(this,e)}return Object(k.a)(e,null,[{key:"wallNeumannNeighborhood",value:function(e,t){var i,n,s,l,a=[],c=e.getRowAndCol(t),r=c.row,o=c.col;return r-1>0&&(i=e.cells[e.index(r-1,o)]),o+1<e.cols-1&&(n=e.cells[e.index(r,o+1)]),r+1<e.rows-1&&(s=e.cells[e.index(r+1,o)]),o-1>0&&(l=e.cells[e.index(r,o-1)]),i&&i.isWall&&a.push(i),n&&n.isWall&&a.push(n),s&&s.isWall&&a.push(s),l&&l.isWall&&a.push(l),a}},{key:"getInitialState",value:function(){return{wallList:[]}}},{key:"cloneState",value:function(e,t){var i=[];return t.wallList.forEach((function(t){var n=e.cells[t.index];i.push(n)})),{wallList:i}}}]),e}();E.generate=function(e,t,i,n){var s=new z(t,t,2*e+1,2*e+1),l=E.getInitialState(),a=l.wallList,c=[s.clone()];if(0===a.length){var r,o=s.cells[s.cols+1];s.cells[o.index].isWall=!1;var d=E.wallNeumannNeighborhood(s,o);(r=a).push.apply(r,Object(P.a)(d))}for(;a.length>0;){var h=Math.floor(Math.random()*a.length),u=a[h],f=s.getCellsDividedByWall(u),j=f.cellA,b=f.cellB;if(!j.isWall&&b.isWall||j.isWall&&!b.isWall){var p,x=j.isWall?j:b;u.isWall=!1,x.isWall=!1;var g=E.wallNeumannNeighborhood(s,x);(p=a).push.apply(p,Object(P.a)(g)),c.push(s),s=s.clone(),a=(l=E.cloneState(s,l)).wallList}a.splice(h,1)}i(c),n(c.length-1)};var M=E,L=function(e){var t=Object(n.useState)({current:w.RandomizedDepthFirstSearch}),i=Object(c.a)(t,2),s=i[0],l=i[1],a=Object(n.useState)("randomized depth first search"),r=Object(c.a)(a,2),h=r[0],u=r[1],f=Object(n.useState)(10),j=Object(c.a)(f,2),b=j[0],p=j[1],x=Object(n.useState)(1),g=Object(c.a)(x,2),v=g[0],O=g[1],S=Object(n.useState)(546),k=Object(c.a)(S,2),I=k[0],z=k[1],W=Object(n.useState)(0),P=Object(c.a)(W,2),R=P[0],E=P[1],L=Object(n.useState)([]),N=Object(c.a)(L,2),B=N[0],D=N[1],H=Object(n.useState)(!1),F=Object(c.a)(H,2),G=F[0],T=F[1];return Object(n.useEffect)((function(){var e=function(e,t){var i=e+t/2;return i-=i%t}(550,2*b+1);z(e),s.current===w.RandomizedDepthFirstSearch?(C.generate(b,e,D,E),u("randomized depth first search")):s.current===w.RandomizedKruskalsAlgorithm?(A.generate(b,e,D,E),u("randomized kruskal\u2019s algorithm")):s.current===w.RandomizedPrimsAlgorithm&&(M.generate(b,e,D,E),u("randomized prim\u2019s algorithm"))}),[s,b]),Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)(y,{historyIndex:R,history:B,setHistoryIndex:E,setSize:p,setSpeed:O,setIsPlaying:T,speed:v,isPlaying:G}),Object(o.jsxs)("div",{id:"center",children:[Object(o.jsx)("h1",{children:"daedalus"}),Object(o.jsx)("h2",{children:h}),Object(o.jsx)(d,{history:B,historyIndex:R,canvasSize:I})]}),Object(o.jsx)(m,{setGenerator:l})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.e5a32643.chunk.js.map