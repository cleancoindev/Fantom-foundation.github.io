(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"tQ0/":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),r=function(){return function(){}}(),o=t("pMnS"),u=function(){return function(){}}(),i=e.qb({encapsulation:2,styles:[],data:{}});function s(n){return e.Kb(0,[],null,null)}function a(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,1,"app-rfcs-fantom-framework",[],null,null,null,s,i)),e.rb(1,49152,null,0,u,[],null,null)],null,null)}var c=e.ob("app-rfcs-fantom-framework",u,a,{},{},[]),f=function(){return function(){}}(),p=e.qb({encapsulation:2,styles:[],data:{}});function d(n){return e.Kb(0,[],null,null)}function b(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,1,"app-rfcs-fantom-wasm",[],null,null,null,d,p)),e.rb(1,49152,null,0,f,[],null,null)],null,null)}var g=e.ob("app-rfcs-fantom-wasm",f,b,{},{},[]),h=function(){return function(){}}(),m=e.qb({encapsulation:2,styles:[],data:{}});function v(n){return e.Kb(0,[],null,null)}function w(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,1,"app-rfcs-lachesis-consensus",[],null,null,null,v,m)),e.rb(1,49152,null,0,h,[],null,null)],null,null)}var y=e.ob("app-rfcs-lachesis-consensus",h,w,{},{},[]),k=t("ZYCi"),L=t("Ip0R"),S=function(){return function(){}}(),I=e.qb({encapsulation:2,styles:[],data:{}});function C(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,12,"ul",[],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,2,"a",[["routerLink","rfcsfantom-framework"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.Cb(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),e.rb(3,671744,null,0,k.p,[k.n,k.a,L.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Ib(-1,null,["rfcsfantom-framework"])),(n()(),e.sb(5,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,2,"a",[["routerLink","rfcsfantom-wasm"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.Cb(n,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),e.rb(7,671744,null,0,k.p,[k.n,k.a,L.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Ib(-1,null,["rfcsfantom-wasm"])),(n()(),e.sb(9,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e.sb(10,0,null,null,2,"a",[["routerLink","rfcslachesis-consensus"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.Cb(n,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),e.rb(11,671744,null,0,k.p,[k.n,k.a,L.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Ib(-1,null,["rfcslachesis-consensus"]))],function(n,l){n(l,3,0,"rfcsfantom-framework"),n(l,7,0,"rfcsfantom-wasm"),n(l,11,0,"rfcslachesis-consensus")},function(n,l){n(l,2,0,e.Cb(l,3).target,e.Cb(l,3).href),n(l,6,0,e.Cb(l,7).target,e.Cb(l,7).href),n(l,10,0,e.Cb(l,11).target,e.Cb(l,11).href)})}function O(n){return e.Kb(0,[(n()(),e.sb(0,0,null,null,1,"app-list",[],null,null,null,C,I)),e.rb(1,49152,null,0,S,[],null,null)],null,null)}var _=e.ob("app-list",S,O,{},{},[]),K=(t("mrSG"),function(){function n(){}return Object.defineProperty(n,"defaultEasingLogic",{get:function(){return n._easingLogic},set:function(l){n._easingLogic=l},enumerable:!0,configurable:!0}),n._interval=10,n._minScrollDistance=2,n._defaultNamespace="default",n.defaultIsVerticalScrolling=!0,n._logLevel=1,n.defaultDuration=1250,n.defaultScrollOffset=0,n.defaultAdvancedInlineOffsetCalculation=!1,n._interruptEvents=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],n._interruptKeys=[33,34,35,36,38,40],n.defaultInterruptible=!0,n._easingLogic={ease:function(n,l,t,e){return t*n/e+l}},n}()),T=function(){function n(){}return n.isUndefinedOrNull=function(n){return void 0===n||null==n},n.extractElementPosition=function(l,t){var e=l.body,r=l.documentElement,o=l.defaultView&&l.defaultView.pageYOffset||r.scrollTop||e.scrollTop,u=l.defaultView&&l.defaultView.pageXOffset||r.scrollLeft||e.scrollLeft,i=r.clientTop||e.clientTop||0,s=r.clientLeft||e.clientLeft||0;if(n.isUndefinedOrNull(t))return{top:o,left:u};var a=t.getBoundingClientRect(),c=a.left+u-s;return{top:Math.round(a.top+o-i),left:Math.round(c)}},n}(),A=function(){function n(){var n=this;this.runningInstances=[],this.onInterrupted={report:function(l,t){if(t.interruptible){var e=!0;"keyup"===l.type?-1===K._interruptKeys.indexOf(l.keyCode)&&(e=!1):"mousedown"===l.type&&(t.scrollingViews.some(function(n){return n.contains(l.target)})||(e=!1)),e&&n.stopAll(t.namespace)}}},l.instanceCounter>0&&(K._logLevel>=2||K._logLevel>=1&&Object(e.Z)())&&console.warn("An instance of PageScrollService already exists, usually including one provider should be enough, so double check."),l.instanceCounter++}var l;return l=n,n.prototype.stopInternal=function(n,l){var t=this.runningInstances.indexOf(l);return t>=0&&this.runningInstances.splice(t,1),l.interruptListenersAttached&&l.detachInterruptListeners(),!!l.timer&&(clearInterval(l.timer),l.timer=void 0,l.fireEvent(!n),!0)},n.prototype.start=function(n){var l=this;if(this.stopAll(n.namespace),null!==n.scrollingViews&&0!==n.scrollingViews.length){var t=!1;n.startScrollPosition=0,n.scrollingViews.forEach(function(l){if(!T.isUndefinedOrNull(l)){var e=n.getScrollPropertyValue(l);!t&&e&&(n.startScrollPosition=e,t=!0)}});var r=n.getCurrentOffset(),o=n.extractScrollTargetPosition();if(n.targetScrollPosition=Math.round((n.verticalScrolling?o.top:o.left)-r),n.distanceToScroll=n.targetScrollPosition-n.startScrollPosition,isNaN(n.distanceToScroll))return(K._logLevel>=2||K._logLevel>=1&&Object(e.Z)())&&console.log("Scrolling not possible, as we can't find the specified target"),void n.fireEvent(!1);var u=Math.abs(n.distanceToScroll)<K._minScrollDistance;if(n.executionDuration=n.duration,!T.isUndefinedOrNull(n.speed)&&T.isUndefinedOrNull(n.duration)&&(n.executionDuration=Math.abs(n.distanceToScroll)/n.speed*1e3),u||n.executionDuration<=K._interval)return(K._logLevel>=2||K._logLevel>=1&&Object(e.Z)())&&(u?console.log("Scrolling not possible, as we can't get any closer to the destination"):console.log("Scroll duration shorter that interval length, jumping to target")),n.setScrollPosition(n.targetScrollPosition),void n.fireEvent(!0);(n.interruptible||T.isUndefinedOrNull(n.interruptible)&&K.defaultInterruptible)&&n.attachInterruptListeners(this.onInterrupted),n.startTime=(new Date).getTime(),n.endTime=n.startTime+n.executionDuration,n.timer=setInterval(function(n){var t,e=(new Date).getTime(),r=!1;n.endTime<=e?(t=n.targetScrollPosition,r=!0):t=Math.round(n.easingLogic.ease(e-n.startTime,n.startScrollPosition,n.distanceToScroll,n.executionDuration)),n.setScrollPosition(t)||(r=!0),r&&l.stopInternal(!1,n)},K._interval,n),this.runningInstances.push(n)}else(K._logLevel>=2||K._logLevel>=1&&Object(e.Z)())&&console.warn("No scrollingViews specified, this ngx-page-scroll does not know which DOM elements to scroll")},n.prototype.stopAll=function(n){if(this.runningInstances.length>0){for(var l=!1,t=0;t<this.runningInstances.length;++t){var e=this.runningInstances[t];(T.isUndefinedOrNull(n)||0===n.length||e.namespace===n)&&(l=!0,this.stopInternal(!0,e),t--)}return l}return!1},n.prototype.stop=function(n){return this.stopInternal(!0,n)},n.instanceCounter=0,n}();function P(n){return n||new A}new e.A,new e.K;var x=function(){return function(){}}();t.d(l,"GeneratedModuleNgFactory",function(){return D});var D=e.pb(r,[],function(n){return e.zb([e.Ab(512,e.j,e.db,[[8,[o.a,c,g,y,_]],[3,e.j],e.x]),e.Ab(4608,L.m,L.l,[e.u,[2,L.y]]),e.Ab(5120,A,P,[[3,A]]),e.Ab(1073742336,L.c,L.c,[]),e.Ab(1073742336,k.q,k.q,[[2,k.w],[2,k.n]]),e.Ab(1073742336,x,x,[]),e.Ab(1073742336,r,r,[]),e.Ab(1024,k.l,function(){return[[{path:"rfcsfantom-framework",component:u},{path:"rfcsfantom-wasm",component:f},{path:"rfcslachesis-consensus",component:h},{path:"",component:S}]]},[])])})}}]);