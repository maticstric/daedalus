(this.webpackJsonpdaedalus=this.webpackJsonpdaedalus||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),l=i(9),c=i.n(l),a=(i(14),i(2)),r=(i(15),i(16),{white:"#ffffff",black:"#000000",background:"#2c3035"}),o=i(0),d=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){var i=t.current,n=i.getContext("2d");n.canvas.width=e.canvasSize,n.canvas.height=e.canvasSize;!function(e,t){e?e.cells.forEach((function(e){e.isWall?t.fillStyle=r.black:t.fillStyle=r.white,t.fillRect(e.x,e.y,e.width,e.height),t.stroke()})):(t.fillStyle="black",t.fillRect(0,0,i.width,i.height))}(e.history[e.historyIndex],n)}),[e.historyIndex,e.history,e.canvasSize]),Object(o.jsx)("div",{id:"canvas-wrapper",children:Object(o.jsx)("canvas",{id:"canvas",ref:t,width:e.canvasSize,height:e.canvasSize})})},h=(i(18),i(19),i.p+"static/media/first.c3e0cf7d.svg"),u=i.p+"static/media/previous.4ccf2fd0.svg",f=i.p+"static/media/next.fe3f3ecb.svg",j=i.p+"static/media/last.f00f4291.svg",p=i.p+"static/media/play.54e558df.svg",b=i.p+"static/media/pause.d4c80d88.svg",x=function(e){var t=Object(n.useState)(!0),i=Object(a.a)(t,2),s=i[0],l=i[1],c=Object(n.useState)(!1),r=Object(a.a)(c,2),d=r[0],x=r[1],g=Object(n.useState)(!1),v=Object(a.a)(g,2),O=v[0],y=v[1],w=Object(n.useState)(null),m=Object(a.a)(w,2),S=m[0],k=m[1],I=Object(n.useState)(p),z=Object(a.a)(I,2),W=z[0],C=z[1],P=Object(n.useRef)(e.speed);P.current=e.speed,Object(n.useEffect)((function(){0===e.historyIndex?(l(!0),x(!1)):e.historyIndex===e.history.length-1?(l(!1),x(!0)):(l(!1),x(!1)),e.historyIndex===e.history.length-1?y(!0):y(!1),e.isPlaying&&(l(!0),x(!0))}),[e.isPlaying,e.historyIndex,e.history.length]),Object(n.useEffect)((function(){e.isPlaying?C(b):C(p)}),[e.isPlaying]);var R=function t(i){var n=1/P.current*1e3;i+=1,e.setHistoryIndex(i),i<e.history.length-1?k(setTimeout((function(){t(i)}),n)):e.setIsPlaying(!1)};return Object(o.jsxs)("div",{id:"playback-wrapper",children:[Object(o.jsx)("input",{type:"image",alt:"first",disabled:s,onClick:function(){e.setHistoryIndex(0)},src:h}),Object(o.jsx)("input",{type:"image",alt:"previous",disabled:s,onClick:function(){var t=e.historyIndex;e.setHistoryIndex(t-1)},src:u}),Object(o.jsx)("input",{type:"image",alt:"play-pause",disabled:O,onClick:function(){e.isPlaying?(e.setIsPlaying(!1),clearTimeout(S)):(e.setIsPlaying(!0),R(e.historyIndex))},src:W}),Object(o.jsx)("input",{type:"image",alt:"next",disabled:d,onClick:function(){var t=e.historyIndex;e.setHistoryIndex(t+1)},src:f}),Object(o.jsx)("input",{type:"image",alt:"last",disabled:d,onClick:function(){e.setHistoryIndex(e.history.length-1)},src:j})]})},g=(i(20),function(e){var t=Object(n.useState)("size: 10"),i=Object(a.a)(t,2),s=i[0],l=i[1];return Object(o.jsxs)("div",{id:"size-slider-wrapper",children:[Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{id:"slider-wrapper",children:[Object(o.jsx)("span",{children:"2"}),Object(o.jsx)("input",{disabled:e.isPlaying,type:"range",min:"2",max:"30",step:"1",defaultValue:"10",onChange:function(e){l("size: "+e.target.value)},onMouseUp:function(t){e.setSize(t.target.value)}}),Object(o.jsx)("span",{children:"30"})]})]})}),v=(i(21),function(e){var t=Object(n.useState)("speed: 3"),i=Object(a.a)(t,2),s=i[0],l=i[1];return Object(o.jsxs)("div",{id:"speed-slider-wrapper",children:[Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{id:"slider-wrapper",children:[Object(o.jsx)("span",{children:"0"}),Object(o.jsx)("input",{type:"range",min:"0",max:"1",step:"0.01",defaultValue:"0",onChange:function(t){l("speed: "+t.target.value),e.setSpeed(Math.pow(1e3,t.target.value))}}),Object(o.jsx)("span",{children:"1"})]})]})}),O=function(e){return Object(o.jsxs)("div",{id:"controls-wrapper",children:[Object(o.jsx)("h2",{children:"controls"}),Object(o.jsx)(g,{setSize:e.setSize,isPlaying:e.isPlaying}),Object(o.jsx)(v,{setSpeed:e.setSpeed}),Object(o.jsx)(x,{historyIndex:e.historyIndex,history:e.history,setHistoryIndex:e.setHistoryIndex,speed:e.speed,isPlaying:e.isPlaying,setIsPlaying:e.setIsPlaying}),Object(o.jsx)("div",{}),Object(o.jsxs)("blockquote",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Such was the work, so intricate the place,"}),Object(o.jsx)("span",{children:"That scarce the workman all its turns cou\u2019d trace;"}),Object(o.jsx)("span",{children:"And Daedalus was puzzled how to find"}),Object(o.jsx)("span",{children:"The secret ways of what himself design\u2019d."})]}),Object(o.jsxs)("p",{children:["\u2014 Ovid, ",Object(o.jsx)("cite",{children:"Metamorphoses"})]})]})]})},y=(i(22),{RandomizedDepthFirstSearch:0,RandomizedKruskalsAlgorithm:1,RandomizedPrimsAlgorithm:2}),w=function(e){return Object(o.jsxs)("div",{id:"selector-wrapper",children:[Object(o.jsx)("h2",{children:"maze generation algorithms"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:y.RandomizedDepthFirstSearch})},children:"randomized depth first search"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:y.RandomizedKruskalsAlgorithm})},children:"randomized kruskal\u2019s algorithm"}),Object(o.jsx)("button",{onClick:function(){e.setGenerator({current:y.RandomizedPrimsAlgorithm})},children:"randomized prim\u2019s algorithm"})]})},m=i(3),S=i(4),k=function(){function e(t,i,n,s,l,c){Object(m.a)(this,e),this.x=t,this.y=i,this.index=n,this.width=s,this.height=l,this.isWall=c}return Object(S.a)(e,[{key:"clone",value:function(){return new e(this.x,this.y,this.index,this.width,this.height,this.isWall)}}]),e}(),I=function(){function e(t,i,n,s){var l=this;Object(m.a)(this,e),this.initCells=function(){for(var e=[],t=0;t<l.rows;t++)for(var i=0;i<l.cols;i++){var n=l.width/l.cols,s=l.height/l.rows,c=n*i,a=s*t,r=t*l.cols+i;e.push(new k(c,a,r,n,s,!0))}return e},this.neumannNeighborhood=function(e){var t=[],i=l.getRowAndCol(e),n=i.row,s=i.col,c=l.cells[l.index(n-2,s)],a=l.cells[l.index(n,s+2)],r=l.cells[l.index(n+2,s)],o=l.cells[l.index(n,s-2)];return c&&t.push(c),a&&t.push(a),r&&t.push(r),o&&t.push(o),t},this.cellBetween=function(e,t){return e.index-t.index===2?l.cells[t.index+1]:t.index-e.index===2?l.cells[e.index+1]:e.index-t.index===2*l.cols?l.cells[t.index+l.cols]:t.index-e.index===2*l.cols?l.cells[e.index+l.cols]:void 0},this.index=function(e,t){return e<0||t<0||e>l.rows-1||t>l.cols-1?-1:t+e*l.cols},this.clone=function(){var t=new e(l.width,l.height,l.rows,l.cols);return t.cells=[],l.cells.forEach((function(e){var i=e.clone();t.cells.push(i)})),t},this.width=t,this.height=i,this.rows=n,this.cols=s,this.cells=this.initCells()}return Object(S.a)(e,[{key:"getCellsDividedByWall",value:function(e){var t,i,n=this.getRowAndCol(e),s=n.row,l=n.col;return s%2===0?(t=this.cells[e.index-this.cols],i=this.cells[e.index+this.cols]):l%2===0&&(t=this.cells[e.index-1],i=this.cells[e.index+1]),{cellA:t,cellB:i}}},{key:"getRowAndCol",value:function(e){return{row:Math.floor(e.index/this.cols),col:e.index%this.cols}}}]),e}(),z=function(){function e(){Object(m.a)(this,e)}return Object(S.a)(e,null,[{key:"getInitialState",value:function(){return{stack:[]}}},{key:"cloneState",value:function(e,t){var i=[];return t.stack.forEach((function(t){var n=e.cells[t.index];i.push(n)})),{stack:i}}}]),e}();z.generate=function(e,t,i,n){var s=new I(t,t,2*e+1,2*e+1),l=z.getInitialState(),c=l.stack,a=[s.clone()];if(0===c.length){var r=s.cells[s.cols+1];s.cells[r.index].isWall=!1,c.push(r)}for(;0!==c.length;){var o=c.pop(),d=z.wallNeighbors(s,o);if(0!==d.length){c.push(o);var h=d[Math.floor(Math.random()*d.length)],u=s.cellBetween(o,h);s.cells[u.index].isWall=!1,s.cells[h.index].isWall=!1,c.push(h),a.push(s),s=s.clone(),c=(l=z.cloneState(s,l)).stack}}i(a),n(a.length-1)},z.wallNeighbors=function(e,t){for(var i=e.neumannNeighborhood(t),n=[],s=0;s<i.length;s++){var l=i[s];l.isWall&&n.push(l)}return n};var W=z,C=i(5),P=function(){function e(){Object(m.a)(this,e)}return Object(S.a)(e,null,[{key:"getSetWithCell",value:function(e,t){var i;return e.forEach((function(e){e.forEach((function(n){n===t&&(i=e)}))})),i}},{key:"getInitialWallList",value:function(e){var t=[];return e.cells.forEach((function(i){var n=e.getRowAndCol(i),s=n.row,l=n.col;0!==s&&s!==e.rows-1&&0!==l&&l!==e.cols-1&&(s%2===0&&l%2===0||(s%2===0||l%2===0)&&t.push(i))})),t}},{key:"getInitialCellSets",value:function(e){var t=[];return e.cells.forEach((function(i){var n=e.getRowAndCol(i),s=n.row,l=n.col;if(s%2===1&&l%2===1){var c=new Set;c.add(i),t.push(c)}})),t}},{key:"getInitialState",value:function(e){return{wallList:this.getInitialWallList(e),cellSets:this.getInitialCellSets(e)}}},{key:"cloneState",value:function(e,t){var i=[],n=[];return t.wallList.forEach((function(t){var n=e.cells[t.index];i.push(n)})),t.cellSets.forEach((function(t){var i=new Set;t.forEach((function(t){var n=e.cells[t.index];i.add(n)})),n.push(i)})),{wallList:i,cellSets:n}}}]),e}();P.generate=function(e,t,i,n){for(var s=new I(t,t,2*e+1,2*e+1),l=P.getInitialState(s),c=l.wallList,a=l.cellSets,r=[s.clone()];a.length>1;){var o=Math.floor(Math.random()*c.length),d=c[o],h=s.getCellsDividedByWall(d),u=h.cellA,f=h.cellB,j=P.getSetWithCell(a,u),p=P.getSetWithCell(a,f);j!==p&&(s.cells[u.index].isWall=!1,s.cells[f.index].isWall=!1,s.cells[d.index].isWall=!1,c.splice(o,1),a.splice(a.indexOf(j),1),a.splice(a.indexOf(p),1),a.push(new Set([].concat(Object(C.a)(j),Object(C.a)(p)))),r.push(s),s=s.clone(),c=(l=P.cloneState(s,l)).wallList,a=l.cellSets)}i(r),n(r.length-1)};var R=P,A=function(){function e(){Object(m.a)(this,e)}return Object(S.a)(e,null,[{key:"wallNeumannNeighborhood",value:function(e,t){var i,n,s,l,c=[],a=e.getRowAndCol(t),r=a.row,o=a.col;return r-1>0&&(i=e.cells[e.index(r-1,o)]),o+1<e.cols-1&&(n=e.cells[e.index(r,o+1)]),r+1<e.rows-1&&(s=e.cells[e.index(r+1,o)]),o-1>0&&(l=e.cells[e.index(r,o-1)]),i&&i.isWall&&c.push(i),n&&n.isWall&&c.push(n),s&&s.isWall&&c.push(s),l&&l.isWall&&c.push(l),c}},{key:"getInitialState",value:function(){return{wallList:[]}}},{key:"cloneState",value:function(e,t){var i=[];return t.wallList.forEach((function(t){var n=e.cells[t.index];i.push(n)})),{wallList:i}}}]),e}();A.generate=function(e,t,i,n){var s=new I(t,t,2*e+1,2*e+1),l=A.getInitialState(),c=l.wallList,a=[s.clone()];if(0===c.length){var r,o=s.cells[s.cols+1];s.cells[o.index].isWall=!1;var d=A.wallNeumannNeighborhood(s,o);(r=c).push.apply(r,Object(C.a)(d))}for(;c.length>0;){var h=Math.floor(Math.random()*c.length),u=c[h],f=s.getCellsDividedByWall(u),j=f.cellA,p=f.cellB;if(!j.isWall&&p.isWall||j.isWall&&!p.isWall){var b,x=j.isWall?j:p;u.isWall=!1,x.isWall=!1;var g=A.wallNeumannNeighborhood(s,x);(b=c).push.apply(b,Object(C.a)(g)),a.push(s),s=s.clone(),c=(l=A.cloneState(s,l)).wallList}c.splice(h,1)}i(a),n(a.length-1)};var E=A,L=function(e){var t=Object(n.useState)({current:y.RandomizedDepthFirstSearch}),i=Object(a.a)(t,2),s=i[0],l=i[1],c=Object(n.useState)("randomized depth first search"),r=Object(a.a)(c,2),h=r[0],u=r[1],f=Object(n.useState)(10),j=Object(a.a)(f,2),p=j[0],b=j[1],x=Object(n.useState)(1),g=Object(a.a)(x,2),v=g[0],m=g[1],S=Object(n.useState)(546),k=Object(a.a)(S,2),I=k[0],z=k[1],C=Object(n.useState)(0),P=Object(a.a)(C,2),A=P[0],L=P[1],M=Object(n.useState)([]),N=Object(a.a)(M,2),B=N[0],D=N[1],H=Object(n.useState)(!1),F=Object(a.a)(H,2),G=F[0],T=F[1];return Object(n.useEffect)((function(){var e=function(e,t){var i=e+t/2;return i-=i%t}(550,2*p+1);z(e),s.current===y.RandomizedDepthFirstSearch?(W.generate(p,e,D,L),u("randomized depth first search")):s.current===y.RandomizedKruskalsAlgorithm?(R.generate(p,e,D,L),u("randomized kruskal\u2019s algorithm")):s.current===y.RandomizedPrimsAlgorithm&&(E.generate(p,e,D,L),u("randomized prim\u2019s algorithm"))}),[s,p]),Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)(O,{historyIndex:A,history:B,setHistoryIndex:L,setSize:b,setSpeed:m,setIsPlaying:T,speed:v,isPlaying:G}),Object(o.jsxs)("div",{id:"center",children:[Object(o.jsx)("h1",{children:"daedalus"}),Object(o.jsx)("h2",{children:h}),Object(o.jsx)(d,{history:B,historyIndex:A,canvasSize:I})]}),Object(o.jsx)(w,{setGenerator:l})]})};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.bfbab83b.chunk.js.map