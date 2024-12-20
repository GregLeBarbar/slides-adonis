import{G as y}from"./chunk-EOAU2GW5-D2ihfVMj.js";import{u as ie,f as c,m,r as N,i as g,a as P,h as Le,b as E,n as xe,c as I,d as oe,s as tr,e as de,g as S,v as O,j as W,z as ar,k as T,p as G,l as Y,o as ir,q as or,t as z,w as dr,x as sr}from"./chunk-TGZYFRKZ-DHAfuc2m.js";import{a as s,O as U,P as ur,Q as fr}from"./Mermaid.vue_vue_type_script_setup_true_lang-BsC4aFRh.js";function x(e,n,r,t){var a;do a=ie(t);while(e.hasNode(a));return r.dummy=n,e.setNode(a,r),a}s(x,"addDummyNode");function Ne(e){var n=new y().setGraph(e.graph());return c(e.nodes(),function(r){n.setNode(r,e.node(r))}),c(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},a=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+a.weight,minlen:Math.max(t.minlen,a.minlen)})}),n}s(Ne,"simplify");function se(e){var n=new y({multigraph:e.isMultigraph()}).setGraph(e.graph());return c(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),c(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}s(se,"asNonCompoundGraph");function J(e,n){var r=e.x,t=e.y,a=n.x-r,i=n.y-t,o=e.width/2,d=e.height/2;if(!a&&!i)throw new Error("Not possible to find intersection inside of the rectangle");var u,f;return Math.abs(i)*o>Math.abs(a)*d?(i<0&&(d=-d),u=d*a/i,f=d):(a<0&&(o=-o),u=o,f=o*i/a),{x:r+u,y:t+f}}s(J,"intersectRect");function j(e){var n=m(N(ue(e)+1),function(){return[]});return c(e.nodes(),function(r){var t=e.node(r),a=t.rank;g(a)||(n[a][t.order]=r)}),n}s(j,"buildLayerMatrix");function Oe(e){var n=P(m(e.nodes(),function(r){return e.node(r).rank}));c(e.nodes(),function(r){var t=e.node(r);Le(t,"rank")&&(t.rank-=n)})}s(Oe,"normalizeRanks");function _e(e){var n=P(m(e.nodes(),function(i){return e.node(i).rank})),r=[];c(e.nodes(),function(i){var o=e.node(i).rank-n;r[o]||(r[o]=[]),r[o].push(i)});var t=0,a=e.graph().nodeRankFactor;c(r,function(i,o){g(i)&&o%a!==0?--t:t&&c(i,function(d){e.node(d).rank+=t})})}s(_e,"removeEmptyRanks");function Q(e,n,r,t){var a={width:0,height:0};return arguments.length>=4&&(a.rank=r,a.order=t),x(e,"border",a,n)}s(Q,"addBorderNode");function ue(e){return E(m(e.nodes(),function(n){var r=e.node(n).rank;if(!g(r))return r}))}s(ue,"maxRank");function Ce(e,n){var r={lhs:[],rhs:[]};return c(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}s(Ce,"partition");function Pe(e,n){var r=xe();try{return n()}finally{console.log(e+" time: "+(xe()-r)+"ms")}}s(Pe,"time");function Re(e,n){return n()}s(Re,"notime");function Ie(e){function n(r){var t=e.children(r),a=e.node(r);if(t.length&&c(t,n),Object.prototype.hasOwnProperty.call(a,"minRank")){a.borderLeft=[],a.borderRight=[];for(var i=a.minRank,o=a.maxRank+1;i<o;++i)K(e,"borderLeft","_bl",r,a,i),K(e,"borderRight","_br",r,a,i)}}s(n,"dfs"),c(e.children(),n)}s(Ie,"addBorderSegments");function K(e,n,r,t,a,i){var o={width:0,height:0,rank:i,borderType:n},d=a[n][i-1],u=x(e,"border",o,r);a[n][i]=u,e.setParent(u,t),d&&e.setEdge(d,u,{weight:1})}s(K,"addBorderNode");function Se(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&fe(e)}s(Se,"adjust");function Te(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&je(e),(n==="lr"||n==="rl")&&(Me(e),fe(e))}s(Te,"undo");function fe(e){c(e.nodes(),function(n){Z(e.node(n))}),c(e.edges(),function(n){Z(e.edge(n))})}s(fe,"swapWidthHeight");function Z(e){var n=e.width;e.width=e.height,e.height=n}s(Z,"swapWidthHeightOne");function je(e){c(e.nodes(),function(n){M(e.node(n))}),c(e.edges(),function(n){var r=e.edge(n);c(r.points,M),Object.prototype.hasOwnProperty.call(r,"y")&&M(r)})}s(je,"reverseY");function M(e){e.y=-e.y}s(M,"reverseYOne");function Me(e){c(e.nodes(),function(n){F(e.node(n))}),c(e.edges(),function(n){var r=e.edge(n);c(r.points,F),Object.prototype.hasOwnProperty.call(r,"x")&&F(r)})}s(Me,"swapXY");function F(e){var n=e.x;e.x=e.y,e.y=n}s(F,"swapXYOne");var L,cr=(L=class{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return $(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&$(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,Fe)),t=t._prev;return"["+n.join(", ")+"]"}},s(L,"List"),L);function $(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}s($,"unlink");function Fe(e,n){if(e!=="_next"&&e!=="_prev")return n}s(Fe,"filterOutLinks");var lr=fr(1);function Be(e,n){if(e.nodeCount()<=1)return[];var r=Ae(e,n||lr),t=Ve(r.graph,r.buckets,r.zeroIdx);return I(m(t,function(a){return e.outEdges(a.v,a.w)}))}s(Be,"greedyFAS");function Ve(e,n,r){for(var t=[],a=n[n.length-1],i=n[0],o;e.nodeCount();){for(;o=i.dequeue();)B(e,n,r,o);for(;o=a.dequeue();)B(e,n,r,o);if(e.nodeCount()){for(var d=n.length-2;d>0;--d)if(o=n[d].dequeue(),o){t=t.concat(B(e,n,r,o,!0));break}}}return t}s(Ve,"doGreedyFAS");function B(e,n,r,t,a){var i=a?[]:void 0;return c(e.inEdges(t.v),function(o){var d=e.edge(o),u=e.node(o.v);a&&i.push({v:o.v,w:o.w}),u.out-=d,D(n,r,u)}),c(e.outEdges(t.v),function(o){var d=e.edge(o),u=o.w,f=e.node(u);f.in-=d,D(n,r,f)}),e.removeNode(t.v),i}s(B,"removeNode");function Ae(e,n){var r=new y,t=0,a=0;c(e.nodes(),function(d){r.setNode(d,{v:d,in:0,out:0})}),c(e.edges(),function(d){var u=r.edge(d.v,d.w)||0,f=n(d),l=u+f;r.setEdge(d.v,d.w,l),a=Math.max(a,r.node(d.v).out+=f),t=Math.max(t,r.node(d.w).in+=f)});var i=N(a+t+3).map(function(){return new cr}),o=t+1;return c(r.nodes(),function(d){D(i,o,r.node(d))}),{graph:r,buckets:i,zeroIdx:o}}s(Ae,"buildState");function D(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}s(D,"assignBucket");function Ge(e){var n=e.graph().acyclicer==="greedy"?Be(e,r(e)):Ye(e);c(n,function(t){var a=e.edge(t);e.removeEdge(t),a.forwardName=t.name,a.reversed=!0,e.setEdge(t.w,t.v,a,ie("rev"))});function r(t){return function(a){return t.edge(a).weight}}s(r,"weightFn")}s(Ge,"run");function Ye(e){var n=[],r={},t={};function a(i){Object.prototype.hasOwnProperty.call(t,i)||(t[i]=!0,r[i]=!0,c(e.outEdges(i),function(o){Object.prototype.hasOwnProperty.call(r,o.w)?n.push(o):a(o.w)}),delete r[i])}return s(a,"dfs"),c(e.nodes(),a),n}s(Ye,"dfsFAS");function De(e){c(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}s(De,"undo");function We(e){e.graph().dummyChains=[],c(e.edges(),function(n){ze(e,n)})}s(We,"run");function ze(e,n){var r=n.v,t=e.node(r).rank,a=n.w,i=e.node(a).rank,o=n.name,d=e.edge(n),u=d.labelRank;if(i!==t+1){e.removeEdge(n);var f=void 0,l,h;for(h=0,++t;t<i;++h,++t)d.points=[],f={width:0,height:0,edgeLabel:d,edgeObj:n,rank:t},l=x(e,"edge",f,"_d"),t===u&&(f.width=d.width,f.height=d.height,f.dummy="edge-label",f.labelpos=d.labelpos),e.setEdge(r,l,{weight:d.weight},o),h===0&&e.graph().dummyChains.push(l),r=l;e.setEdge(r,a,{weight:d.weight},o)}}s(ze,"normalizeEdge");function qe(e){c(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,a;for(e.setEdge(r.edgeObj,t);r.dummy;)a=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=a,r=e.node(n)})}s(qe,"undo");function q(e){var n={};function r(t){var a=e.node(t);if(Object.prototype.hasOwnProperty.call(n,t))return a.rank;n[t]=!0;var i=P(m(e.outEdges(t),function(o){return r(o.w)-e.edge(o).minlen}));return(i===Number.POSITIVE_INFINITY||i===void 0||i===null)&&(i=0),a.rank=i}s(r,"dfs"),c(e.sources(),r)}s(q,"longestPath");function _(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}s(_,"slack");function ce(e){var n=new y({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var a,i;Xe(n,e)<t;)a=He(n,e),i=n.hasNode(a.v)?_(e,a):-_(e,a),Ue(n,e,i);return n}s(ce,"feasibleTree");function Xe(e,n){function r(t){c(n.nodeEdges(t),function(a){var i=a.v,o=t===i?a.w:i;!e.hasNode(o)&&!_(n,a)&&(e.setNode(o,{}),e.setEdge(t,o,{}),r(o))})}return s(r,"dfs"),c(e.nodes(),r),e.nodeCount()}s(Xe,"tightTree");function He(e,n){return oe(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return _(n,r)})}s(He,"findMinSlackEdge");function Ue(e,n,r){c(e.nodes(),function(t){n.node(t).rank+=r})}s(Ue,"shiftRanks");Je.CycleException=R;function Je(e){var n={},r={},t=[];function a(i){if(Object.prototype.hasOwnProperty.call(r,i))throw new R;Object.prototype.hasOwnProperty.call(n,i)||(r[i]=!0,n[i]=!0,c(e.predecessors(i),a),delete r[i],t.push(i))}if(s(a,"visit"),c(e.sinks(),a),tr(n)!==e.nodeCount())throw new R;return t}s(Je,"topsort");function R(){}s(R,"CycleException");R.prototype=new Error;function le(e,n,r){ur(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),a=[],i={};return c(n,function(o){if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);he(e,o,r==="post",i,t,a)}),a}s(le,"dfs");function he(e,n,r,t,a,i){Object.prototype.hasOwnProperty.call(t,n)||(t[n]=!0,r||i.push(n),c(a(n),function(o){he(e,o,r,t,a,i)}),r&&i.push(n))}s(he,"doDfs");function Qe(e,n){return le(e,n,"post")}s(Qe,"postorder");function Ke(e,n){return le(e,n,"pre")}s(Ke,"preorder");k.initLowLimValues=H;k.initCutValues=X;k.calcCutValue=ve;k.leaveEdge=we;k.enterEdge=me;k.exchangeEdges=be;function k(e){e=Ne(e),q(e);var n=ce(e);H(n),X(n,e);for(var r,t;r=we(n);)t=me(n,e,r),be(n,e,r,t)}s(k,"networkSimplex");function X(e,n){var r=Qe(e,e.nodes());r=r.slice(0,r.length-1),c(r,function(t){Ze(e,n,t)})}s(X,"initCutValues");function Ze(e,n,r){var t=e.node(r),a=t.parent;e.edge(r,a).cutvalue=ve(e,n,r)}s(Ze,"assignCutValue");function ve(e,n,r){var t=e.node(r),a=t.parent,i=!0,o=n.edge(r,a),d=0;return o||(i=!1,o=n.edge(a,r)),d=o.weight,c(n.nodeEdges(r),function(u){var f=u.v===r,l=f?u.w:u.v;if(l!==a){var h=f===i,v=n.edge(u).weight;if(d+=h?v:-v,en(e,r,l)){var p=e.edge(r,l).cutvalue;d+=h?-p:p}}}),d}s(ve,"calcCutValue");function H(e,n){arguments.length<2&&(n=e.nodes()[0]),pe(e,{},1,n)}s(H,"initLowLimValues");function pe(e,n,r,t,a){var i=r,o=e.node(t);return n[t]=!0,c(e.neighbors(t),function(d){Object.prototype.hasOwnProperty.call(n,d)||(r=pe(e,n,r,d,t))}),o.low=i,o.lim=r++,a?o.parent=a:delete o.parent,r}s(pe,"dfsAssignLowLim");function we(e){return de(e.edges(),function(n){return e.edge(n).cutvalue<0})}s(we,"leaveEdge");function me(e,n,r){var t=r.v,a=r.w;n.hasEdge(t,a)||(t=r.w,a=r.v);var i=e.node(t),o=e.node(a),d=i,u=!1;i.lim>o.lim&&(d=o,u=!0);var f=S(n.edges(),function(l){return u===ee(e,e.node(l.v),d)&&u!==ee(e,e.node(l.w),d)});return oe(f,function(l){return _(n,l)})}s(me,"enterEdge");function be(e,n,r,t){var a=r.v,i=r.w;e.removeEdge(a,i),e.setEdge(t.v,t.w,{}),H(e),X(e,n),$e(e,n)}s(be,"exchangeEdges");function $e(e,n){var r=de(e.nodes(),function(a){return!n.node(a).parent}),t=Ke(e,r);t=t.slice(1),c(t,function(a){var i=e.node(a).parent,o=n.edge(a,i),d=!1;o||(o=n.edge(i,a),d=!0),n.node(a).rank=n.node(i).rank+(d?o.minlen:-o.minlen)})}s($e,"updateRanks");function en(e,n,r){return e.hasEdge(n,r)}s(en,"isTreeEdge");function ee(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}s(ee,"isDescendant");function nn(e){switch(e.graph().ranker){case"network-simplex":ne(e);break;case"tight-tree":rn(e);break;case"longest-path":hr(e);break;default:ne(e)}}s(nn,"rank");var hr=q;function rn(e){q(e),ce(e)}s(rn,"tightTreeRanker");function ne(e){k(e)}s(ne,"networkSimplexRanker");function tn(e){var n=x(e,"root",{},"_root"),r=an(e),t=E(O(r))-1,a=2*t+1;e.graph().nestingRoot=n,c(e.edges(),function(o){e.edge(o).minlen*=a});var i=on(e)+1;c(e.children(),function(o){ge(e,n,a,i,t,r,o)}),e.graph().nodeRankFactor=a}s(tn,"run");function ge(e,n,r,t,a,i,o){var d=e.children(o);if(!d.length){o!==n&&e.setEdge(n,o,{weight:0,minlen:r});return}var u=Q(e,"_bt"),f=Q(e,"_bb"),l=e.node(o);e.setParent(u,o),l.borderTop=u,e.setParent(f,o),l.borderBottom=f,c(d,function(h){ge(e,n,r,t,a,i,h);var v=e.node(h),p=v.borderTop?v.borderTop:h,w=v.borderBottom?v.borderBottom:h,b=v.borderTop?t:2*t,C=p!==w?1:a-i[o]+1;e.setEdge(u,p,{weight:b,minlen:C,nestingEdge:!0}),e.setEdge(w,f,{weight:b,minlen:C,nestingEdge:!0})}),e.parent(o)||e.setEdge(n,u,{weight:0,minlen:a+i[o]})}s(ge,"dfs");function an(e){var n={};function r(t,a){var i=e.children(t);i&&i.length&&c(i,function(o){r(o,a+1)}),n[t]=a}return s(r,"dfs"),c(e.children(),function(t){r(t,1)}),n}s(an,"treeDepths");function on(e){return W(e.edges(),function(n,r){return n+e.edge(r).weight},0)}s(on,"sumWeights");function dn(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,c(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}s(dn,"cleanup");function sn(e,n,r){var t={},a;c(r,function(i){for(var o=e.parent(i),d,u;o;){if(d=e.parent(o),d?(u=t[d],t[d]=o):(u=a,a=o),u&&u!==o){n.setEdge(u,o);return}o=d}})}s(sn,"addSubgraphConstraints");function un(e,n,r){var t=fn(e),a=new y({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(i){return e.node(i)});return c(e.nodes(),function(i){var o=e.node(i),d=e.parent(i);(o.rank===n||o.minRank<=n&&n<=o.maxRank)&&(a.setNode(i),a.setParent(i,d||t),c(e[r](i),function(u){var f=u.v===i?u.w:u.v,l=a.edge(f,i),h=g(l)?0:l.weight;a.setEdge(f,i,{weight:e.edge(u).weight+h})}),Object.prototype.hasOwnProperty.call(o,"minRank")&&a.setNode(i,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]}))}),a}s(un,"buildLayerGraph");function fn(e){for(var n;e.hasNode(n=ie("_root")););return n}s(fn,"createRootNode");function cn(e,n){for(var r=0,t=1;t<n.length;++t)r+=ln(e,n[t-1],n[t]);return r}s(cn,"crossCount");function ln(e,n,r){for(var t=ar(r,m(r,function(f,l){return l})),a=I(m(n,function(f){return T(m(e.outEdges(f),function(l){return{pos:t[l.w],weight:e.edge(l).weight}}),"pos")})),i=1;i<r.length;)i<<=1;var o=2*i-1;i-=1;var d=m(new Array(o),function(){return 0}),u=0;return c(a.forEach(function(f){var l=f.pos+i;d[l]+=f.weight;for(var h=0;l>0;)l%2&&(h+=d[l+1]),l=l-1>>1,d[l]+=f.weight;u+=f.weight*h})),u}s(ln,"twoLayerCrossCount");function hn(e){var n={},r=S(e.nodes(),function(d){return!e.children(d).length}),t=E(m(r,function(d){return e.node(d).rank})),a=m(N(t+1),function(){return[]});function i(d){if(!Le(n,d)){n[d]=!0;var u=e.node(d);a[u.rank].push(d),c(e.successors(d),i)}}s(i,"dfs");var o=T(r,function(d){return e.node(d).rank});return c(o,i),a}s(hn,"initOrder");function vn(e,n){return m(n,function(r){var t=e.inEdges(r);if(t.length){var a=W(t,function(i,o){var d=e.edge(o),u=e.node(o.v);return{sum:i.sum+d.weight*u.order,weight:i.weight+d.weight}},{sum:0,weight:0});return{v:r,barycenter:a.sum/a.weight,weight:a.weight}}else return{v:r}})}s(vn,"barycenter");function pn(e,n){var r={};c(e,function(a,i){var o=r[a.v]={indegree:0,in:[],out:[],vs:[a.v],i};g(a.barycenter)||(o.barycenter=a.barycenter,o.weight=a.weight)}),c(n.edges(),function(a){var i=r[a.v],o=r[a.w];!g(i)&&!g(o)&&(o.indegree++,i.out.push(r[a.w]))});var t=S(r,function(a){return!a.indegree});return wn(t)}s(pn,"resolveConflicts");function wn(e){var n=[];function r(i){return function(o){o.merged||(g(o.barycenter)||g(i.barycenter)||o.barycenter>=i.barycenter)&&mn(i,o)}}s(r,"handleIn");function t(i){return function(o){o.in.push(i),--o.indegree===0&&e.push(o)}}for(s(t,"handleOut");e.length;){var a=e.pop();n.push(a),c(a.in.reverse(),r(a)),c(a.out,t(a))}return m(S(n,function(i){return!i.merged}),function(i){return G(i,["vs","i","barycenter","weight"])})}s(wn,"doResolveConflicts");function mn(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}s(mn,"mergeEntries");function bn(e,n){var r=Ce(e,function(l){return Object.prototype.hasOwnProperty.call(l,"barycenter")}),t=r.lhs,a=T(r.rhs,function(l){return-l.i}),i=[],o=0,d=0,u=0;t.sort(gn(!!n)),u=re(i,a,u),c(t,function(l){u+=l.vs.length,i.push(l.vs),o+=l.barycenter*l.weight,d+=l.weight,u=re(i,a,u)});var f={vs:I(i)};return d&&(f.barycenter=o/d,f.weight=d),f}s(bn,"sort");function re(e,n,r){for(var t;n.length&&(t=Y(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}s(re,"consumeUnsortable");function gn(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}s(gn,"compareWithBias");function ye(e,n,r,t){var a=e.children(n),i=e.node(n),o=i?i.borderLeft:void 0,d=i?i.borderRight:void 0,u={};o&&(a=S(a,function(w){return w!==o&&w!==d}));var f=vn(e,a);c(f,function(w){if(e.children(w.v).length){var b=ye(e,w.v,r,t);u[w.v]=b,Object.prototype.hasOwnProperty.call(b,"barycenter")&&kn(w,b)}});var l=pn(f,r);yn(l,u);var h=bn(l,t);if(o&&(h.vs=I([o,h.vs,d]),e.predecessors(o).length)){var v=e.node(e.predecessors(o)[0]),p=e.node(e.predecessors(d)[0]);Object.prototype.hasOwnProperty.call(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+v.order+p.order)/(h.weight+2),h.weight+=2}return h}s(ye,"sortSubgraph");function yn(e,n){c(e,function(r){r.vs=I(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}s(yn,"expandSubgraphs");function kn(e,n){g(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}s(kn,"mergeBarycenters");function En(e){var n=ue(e),r=te(e,N(1,n+1),"inEdges"),t=te(e,N(n-1,-1,-1),"outEdges"),a=hn(e);ae(e,a);for(var i=Number.POSITIVE_INFINITY,o,d=0,u=0;u<4;++d,++u){xn(d%2?r:t,d%4>=2),a=j(e);var f=cn(e,a);f<i&&(u=0,o=ir(a),i=f)}ae(e,o)}s(En,"order");function te(e,n,r){return m(n,function(t){return un(e,t,r)})}s(te,"buildLayerGraphs");function xn(e,n){var r=new y;c(e,function(t){var a=t.graph().root,i=ye(t,a,r,n);c(i.vs,function(o,d){t.node(o).order=d}),sn(t,r,i.vs)})}s(xn,"sweepLayerGraphs");function ae(e,n){c(n,function(r){c(r,function(t,a){e.node(t).order=a})})}s(ae,"assignOrder");function Ln(e){var n=On(e);c(e.graph().dummyChains,function(r){for(var t=e.node(r),a=t.edgeObj,i=Nn(e,n,a.v,a.w),o=i.path,d=i.lca,u=0,f=o[u],l=!0;r!==a.w;){if(t=e.node(r),l){for(;(f=o[u])!==d&&e.node(f).maxRank<t.rank;)u++;f===d&&(l=!1)}if(!l){for(;u<o.length-1&&e.node(f=o[u+1]).minRank<=t.rank;)u++;f=o[u]}e.setParent(r,f),r=e.successors(r)[0]}})}s(Ln,"parentDummyChains");function Nn(e,n,r,t){var a=[],i=[],o=Math.min(n[r].low,n[t].low),d=Math.max(n[r].lim,n[t].lim),u,f;u=r;do u=e.parent(u),a.push(u);while(u&&(n[u].low>o||d>n[u].lim));for(f=u,u=t;(u=e.parent(u))!==f;)i.push(u);return{path:a.concat(i.reverse()),lca:f}}s(Nn,"findPath");function On(e){var n={},r=0;function t(a){var i=r;c(e.children(a),t),n[a]={low:i,lim:r++}}return s(t,"dfs"),c(e.children(),t),n}s(On,"postorder");function _n(e,n){var r={};function t(a,i){var o=0,d=0,u=a.length,f=Y(i);return c(i,function(l,h){var v=Pn(e,l),p=v?e.node(v).order:u;(v||l===f)&&(c(i.slice(d,h+1),function(w){c(e.predecessors(w),function(b){var C=e.node(b),Ee=C.order;(Ee<o||p<Ee)&&!(C.dummy&&e.node(w).dummy)&&ke(r,b,w)})}),d=h+1,o=p)}),i}return s(t,"visitLayer"),W(n,t),r}s(_n,"findType1Conflicts");function Cn(e,n){var r={};function t(i,o,d,u,f){var l;c(N(o,d),function(h){l=i[h],e.node(l).dummy&&c(e.predecessors(l),function(v){var p=e.node(v);p.dummy&&(p.order<u||p.order>f)&&ke(r,v,l)})})}s(t,"scan");function a(i,o){var d=-1,u,f=0;return c(o,function(l,h){if(e.node(l).dummy==="border"){var v=e.predecessors(l);v.length&&(u=e.node(v[0]).order,t(o,f,h,d,u),f=h,d=u)}t(o,f,o.length,u,i.length)}),o}return s(a,"visitLayer"),W(n,a),r}s(Cn,"findType2Conflicts");function Pn(e,n){if(e.node(n).dummy)return de(e.predecessors(n),function(r){return e.node(r).dummy})}s(Pn,"findOtherInnerSegmentNode");function ke(e,n,r){if(n>r){var t=n;n=r,r=t}var a=e[n];a||(e[n]=a={}),a[r]=!0}s(ke,"addConflict");function Rn(e,n,r){if(n>r){var t=n;n=r,r=t}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],r)}s(Rn,"hasConflict");function In(e,n,r,t){var a={},i={},o={};return c(n,function(d){c(d,function(u,f){a[u]=u,i[u]=u,o[u]=f})}),c(n,function(d){var u=-1;c(d,function(f){var l=t(f);if(l.length){l=T(l,function(b){return o[b]});for(var h=(l.length-1)/2,v=Math.floor(h),p=Math.ceil(h);v<=p;++v){var w=l[v];i[f]===f&&u<o[w]&&!Rn(r,f,w)&&(i[w]=f,i[f]=a[f]=a[w],u=o[w])}}})}),{root:a,align:i}}s(In,"verticalAlignment");function Sn(e,n,r,t,a){var i={},o=Tn(e,n,r,a),d=a?"borderLeft":"borderRight";function u(h,v){for(var p=o.nodes(),w=p.pop(),b={};w;)b[w]?h(w):(b[w]=!0,p.push(w),p=p.concat(v(w))),w=p.pop()}s(u,"iterate");function f(h){i[h]=o.inEdges(h).reduce(function(v,p){return Math.max(v,i[p.v]+o.edge(p))},0)}s(f,"pass1");function l(h){var v=o.outEdges(h).reduce(function(w,b){return Math.min(w,i[b.w]-o.edge(b))},Number.POSITIVE_INFINITY),p=e.node(h);v!==Number.POSITIVE_INFINITY&&p.borderType!==d&&(i[h]=Math.max(i[h],v))}return s(l,"pass2"),u(f,o.predecessors.bind(o)),u(l,o.successors.bind(o)),c(t,function(h){i[h]=i[r[h]]}),i}s(Sn,"horizontalCompaction");function Tn(e,n,r,t){var a=new y,i=e.graph(),o=Vn(i.nodesep,i.edgesep,t);return c(n,function(d){var u;c(d,function(f){var l=r[f];if(a.setNode(l),u){var h=r[u],v=a.edge(h,l);a.setEdge(h,l,Math.max(o(e,f,u),v||0))}u=f})}),a}s(Tn,"buildBlockGraph");function jn(e,n){return oe(O(n),function(r){var t=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;return or(r,function(i,o){var d=An(e,o)/2;t=Math.max(i+d,t),a=Math.min(i-d,a)}),t-a})}s(jn,"findSmallestWidthAlignment");function Mn(e,n){var r=O(n),t=P(r),a=E(r);c(["u","d"],function(i){c(["l","r"],function(o){var d=i+o,u=e[d],f;if(u!==n){var l=O(u);f=o==="l"?t-P(l):a-E(l),f&&(e[d]=z(u,function(h){return h+f}))}})})}s(Mn,"alignCoordinates");function Fn(e,n){return z(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var a=T(m(e,t));return(a[1]+a[2])/2})}s(Fn,"balance");function Bn(e){var n=j(e),r=U(_n(e,n),Cn(e,n)),t={},a;c(["u","d"],function(o){a=o==="u"?n:O(n).reverse(),c(["l","r"],function(d){d==="r"&&(a=m(a,function(h){return O(h).reverse()}));var u=(o==="u"?e.predecessors:e.successors).bind(e),f=In(e,a,r,u),l=Sn(e,a,f.root,f.align,d==="r");d==="r"&&(l=z(l,function(h){return-h})),t[o+d]=l})});var i=jn(e,t);return Mn(t,i),Fn(t,e.graph().align)}s(Bn,"positionX");function Vn(e,n,r){return function(t,a,i){var o=t.node(a),d=t.node(i),u=0,f;if(u+=o.width/2,Object.prototype.hasOwnProperty.call(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":f=-o.width/2;break;case"r":f=o.width/2;break}if(f&&(u+=r?f:-f),f=0,u+=(o.dummy?n:e)/2,u+=(d.dummy?n:e)/2,u+=d.width/2,Object.prototype.hasOwnProperty.call(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":f=d.width/2;break;case"r":f=-d.width/2;break}return f&&(u+=r?f:-f),f=0,u}}s(Vn,"sep");function An(e,n){return e.node(n).width}s(An,"width");function Gn(e){e=se(e),Yn(e),dr(Bn(e),function(n,r){e.node(r).x=n})}s(Gn,"position");function Yn(e){var n=j(e),r=e.graph().ranksep,t=0;c(n,function(a){var i=E(m(a,function(o){return e.node(o).height}));c(a,function(o){e.node(o).y=t+i/2}),t+=i+r})}s(Yn,"positionY");function vr(e,n){var r=n&&n.debugTiming?Pe:Re;r("layout",()=>{var t=r("  buildLayoutGraph",()=>zn(e));r("  runLayout",()=>Dn(t,r)),r("  updateInputGraph",()=>Wn(e,t))})}s(vr,"layout");function Dn(e,n){n("    makeSpaceForEdgeLabels",()=>qn(e)),n("    removeSelfEdges",()=>er(e)),n("    acyclic",()=>Ge(e)),n("    nestingGraph.run",()=>tn(e)),n("    rank",()=>nn(se(e))),n("    injectEdgeLabelProxies",()=>Xn(e)),n("    removeEmptyRanks",()=>_e(e)),n("    nestingGraph.cleanup",()=>dn(e)),n("    normalizeRanks",()=>Oe(e)),n("    assignRankMinMax",()=>Hn(e)),n("    removeEdgeLabelProxies",()=>Un(e)),n("    normalize.run",()=>We(e)),n("    parentDummyChains",()=>Ln(e)),n("    addBorderSegments",()=>Ie(e)),n("    order",()=>En(e)),n("    insertSelfEdges",()=>nr(e)),n("    adjustCoordinateSystem",()=>Se(e)),n("    position",()=>Gn(e)),n("    positionSelfEdges",()=>rr(e)),n("    removeBorderNodes",()=>$n(e)),n("    normalize.undo",()=>qe(e)),n("    fixupEdgeLabelCoords",()=>Kn(e)),n("    undoCoordinateSystem",()=>Te(e)),n("    translateGraph",()=>Jn(e)),n("    assignNodeIntersects",()=>Qn(e)),n("    reversePoints",()=>Zn(e)),n("    acyclic.undo",()=>De(e))}s(Dn,"runLayout");function Wn(e,n){c(e.nodes(),function(r){var t=e.node(r),a=n.node(r);t&&(t.x=a.x,t.y=a.y,n.children(r).length&&(t.width=a.width,t.height=a.height))}),c(e.edges(),function(r){var t=e.edge(r),a=n.edge(r);t.points=a.points,Object.prototype.hasOwnProperty.call(a,"x")&&(t.x=a.x,t.y=a.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}s(Wn,"updateInputGraph");var pr=["nodesep","edgesep","ranksep","marginx","marginy"],wr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},mr=["acyclicer","ranker","rankdir","align"],br=["width","height"],gr={width:0,height:0},yr=["minlen","weight","width","height","labeloffset"],kr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Er=["labelpos"];function zn(e){var n=new y({multigraph:!0,compound:!0}),r=A(e.graph());return n.setGraph(U({},wr,V(r,pr),G(r,mr))),c(e.nodes(),function(t){var a=A(e.node(t));n.setNode(t,sr(V(a,br),gr)),n.setParent(t,e.parent(t))}),c(e.edges(),function(t){var a=A(e.edge(t));n.setEdge(t,U({},kr,V(a,yr),G(a,Er)))}),n}s(zn,"buildLayoutGraph");function qn(e){var n=e.graph();n.ranksep/=2,c(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}s(qn,"makeSpaceForEdgeLabels");function Xn(e){c(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),a=e.node(n.w),i={rank:(a.rank-t.rank)/2+t.rank,e:n};x(e,"edge-proxy",i,"_ep")}})}s(Xn,"injectEdgeLabelProxies");function Hn(e){var n=0;c(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=E(n,t.maxRank))}),e.graph().maxRank=n}s(Hn,"assignRankMinMax");function Un(e){c(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}s(Un,"removeEdgeLabelProxies");function Jn(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,a=0,i=e.graph(),o=i.marginx||0,d=i.marginy||0;function u(f){var l=f.x,h=f.y,v=f.width,p=f.height;n=Math.min(n,l-v/2),r=Math.max(r,l+v/2),t=Math.min(t,h-p/2),a=Math.max(a,h+p/2)}s(u,"getExtremes"),c(e.nodes(),function(f){u(e.node(f))}),c(e.edges(),function(f){var l=e.edge(f);Object.prototype.hasOwnProperty.call(l,"x")&&u(l)}),n-=o,t-=d,c(e.nodes(),function(f){var l=e.node(f);l.x-=n,l.y-=t}),c(e.edges(),function(f){var l=e.edge(f);c(l.points,function(h){h.x-=n,h.y-=t}),Object.prototype.hasOwnProperty.call(l,"x")&&(l.x-=n),Object.prototype.hasOwnProperty.call(l,"y")&&(l.y-=t)}),i.width=r-n+o,i.height=a-t+d}s(Jn,"translateGraph");function Qn(e){c(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),a=e.node(n.w),i,o;r.points?(i=r.points[0],o=r.points[r.points.length-1]):(r.points=[],i=a,o=t),r.points.unshift(J(t,i)),r.points.push(J(a,o))})}s(Qn,"assignNodeIntersects");function Kn(e){c(e.edges(),function(n){var r=e.edge(n);if(Object.prototype.hasOwnProperty.call(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}s(Kn,"fixupEdgeLabelCoords");function Zn(e){c(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}s(Zn,"reversePointsForReversedEdges");function $n(e){c(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),a=e.node(r.borderBottom),i=e.node(Y(r.borderLeft)),o=e.node(Y(r.borderRight));r.width=Math.abs(o.x-i.x),r.height=Math.abs(a.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}}),c(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}s($n,"removeBorderNodes");function er(e){c(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}s(er,"removeSelfEdges");function nr(e){var n=j(e);c(n,function(r){var t=0;c(r,function(a,i){var o=e.node(a);o.order=i+t,c(o.selfEdges,function(d){x(e,"selfedge",{width:d.label.width,height:d.label.height,rank:o.rank,order:i+ ++t,e:d.e,label:d.label},"_se")}),delete o.selfEdges})})}s(nr,"insertSelfEdges");function rr(e){c(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),a=t.x+t.width/2,i=t.y,o=r.x-a,d=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:a+2*o/3,y:i-d},{x:a+5*o/6,y:i-d},{x:a+o,y:i},{x:a+5*o/6,y:i+d},{x:a+2*o/3,y:i+d}],r.label.x=r.x,r.label.y=r.y}})}s(rr,"positionSelfEdges");function V(e,n){return z(G(e,n),Number)}s(V,"selectNumberAttrs");function A(e){var n={};return c(e,function(r,t){n[t.toLowerCase()]=r}),n}s(A,"canonicalize");export{vr as l};
