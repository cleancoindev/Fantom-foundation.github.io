var __extends=this&&this.__extends||function(){var l=function(n,u){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])})(n,u)};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GhFz:function(l,n,u){"use strict";u.r(n);var t,e,o=u("8Y7J"),i=function(){},s=u("pMnS"),r=(u("GS7A"),u("KCVW")),a=(u("dvZr"),u("/HVE")),c=u("XNiG"),d=u("itXk"),b=u("GyhO"),p=u("HDdC"),h=u("IzEk"),m=u("7o/Q"),f=function(){function l(l){this.total=l}return l.prototype.call=function(l,n){return n.subscribe(new g(l,this.total))},l}(),g=function(l){function n(n,u){var t=this;return(t=l.call(this,n)||this).total=u,t.count=0,t}return __extends(n,l),n.prototype._next=function(l){++this.count>this.total&&this.destination.next(l)},n}(m.a),w=u("Kj3r"),I=u("lJxs"),y=u("JX91"),k=u("1G5W"),_=new Set,v=((e=function(){function l(l){this._platform=l,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):x}return l.prototype.matchMedia=function(l){return this._platform.WEBKIT&&function(l){if(!_.has(l))try{t||((t=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(t)),t.sheet&&(t.sheet.insertRule("@media "+l+" {.fx-query-test{ }}",0),_.add(l))}catch(n){console.error(n)}}(l),this._matchMedia(l)},l}()).ngInjectableDef=Object(o.Ob)({factory:function(){return new e(Object(o.Pb)(a.a))},token:e,providedIn:"root"}),e);function x(l){return{matches:"all"===l||""===l,media:l,addListener:function(){},removeListener:function(){}}}var O,K=((O=function(){function l(l,n){this._mediaMatcher=l,this._zone=n,this._queries=new Map,this._destroySubject=new c.a}return l.prototype.ngOnDestroy=function(){this._destroySubject.next(),this._destroySubject.complete()},l.prototype.isMatched=function(l){var n=this;return q(Object(r.a)(l)).some((function(l){return n._registerQuery(l).mql.matches}))},l.prototype.observe=function(l){var n=this,u=q(Object(r.a)(l)).map((function(l){return n._registerQuery(l).observable})),t=Object(d.a)(u);return(t=Object(b.a)(t.pipe(Object(h.a)(1)),t.pipe((function(l){return l.lift(new f(1))}),Object(w.a)(0)))).pipe(Object(I.a)((function(l){var n={matches:!1,breakpoints:{}};return l.forEach((function(l){n.matches=n.matches||l.matches,n.breakpoints[l.query]=l.matches})),n})))},l.prototype._registerQuery=function(l){var n=this;if(this._queries.has(l))return this._queries.get(l);var u=this._mediaMatcher.matchMedia(l),t={observable:new p.a((function(l){var t=function(u){return n._zone.run((function(){return l.next(u)}))};return u.addListener(t),function(){u.removeListener(t)}})).pipe(Object(y.a)(u),Object(I.a)((function(n){return{query:l,matches:n.matches}})),Object(k.a)(this._destroySubject)),mql:u};return this._queries.set(l,t),t},l}()).ngInjectableDef=Object(o.Ob)({factory:function(){return new O(Object(o.Pb)(v),Object(o.Pb)(o.x))},token:O,providedIn:"root"}),O);function q(l){return l.map((function(l){return l.split(",")})).reduce((function(l,n){return l.concat(n)})).map((function(l){return l.trim()}))}var S={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"},j=u("QQfA"),T=u("zMNK"),B=20,N=new o.o("mat-tooltip-scroll-strategy");function L(l){return function(){return l.scrollStrategies.reposition({scrollThrottle:B})}}var H=function(){function l(l,n){this._changeDetectorRef=l,this._breakpointObserver=n,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new c.a,this._isHandset=this._breakpointObserver.observe(S.Handset)}return l.prototype.show=function(l){var n=this;this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout((function(){n._visibility="visible",n._showTimeoutId=null,n._markForCheck()}),l)},l.prototype.hide=function(l){var n=this;this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout((function(){n._visibility="hidden",n._hideTimeoutId=null,n._markForCheck()}),l)},l.prototype.afterHidden=function(){return this._onHide.asObservable()},l.prototype.isVisible=function(){return"visible"===this._visibility},l.prototype.ngOnDestroy=function(){this._onHide.complete()},l.prototype._animationStart=function(){this._closeOnInteraction=!1},l.prototype._animationDone=function(l){var n=l.toState;"hidden"!==n||this.isVisible()||this._onHide.next(),"visible"!==n&&"hidden"!==n||(this._closeOnInteraction=!0)},l.prototype._handleBodyInteraction=function(){this._closeOnInteraction&&this.hide(0)},l.prototype._markForCheck=function(){this._changeDetectorRef.markForCheck()},l}(),P=function(){},M=u("SVse"),C=u("POq0"),F=u("IP0z"),z=u("cUpR"),G=u("Xd0L"),W=u("5GAg"),A=u("hOhj"),D=o.pb({encapsulation:2,styles:[".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"initial, void, hidden",styles:{type:6,styles:{opacity:0,transform:"scale(0)"},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"* => visible",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"scale(0)",offset:0},offset:null},{type:6,styles:{opacity:.5,transform:"scale(0.99)",offset:.5},offset:null},{type:6,styles:{opacity:1,transform:"scale(1)",offset:1},offset:null}]},timings:"200ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => hidden",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"100ms cubic-bezier(0, 0, 0.2, 1)"},options:null}],options:{}}]}});function E(l){return o.Kb(2,[(l()(),o.rb(0,0,null,null,4,"div",[["class","mat-tooltip"]],[[2,"mat-tooltip-handset",null],[24,"@state",0]],[[null,"@state.start"],[null,"@state.done"]],(function(l,n,u){var t=!0,e=l.component;return"@state.start"===n&&(t=!1!==e._animationStart()&&t),"@state.done"===n&&(t=!1!==e._animationDone(u)&&t),t}),null,null)),o.Fb(512,null,M.w,M.x,[o.q,o.r,o.k,o.C]),o.qb(2,278528,null,0,M.i,[M.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Eb(131072,M.b,[o.h]),(l()(),o.Ib(4,null,["",""]))],(function(l,n){l(n,2,0,"mat-tooltip",n.component.tooltipClass)}),(function(l,n){var u,t=n.component;l(n,0,0,null==(u=o.Jb(n,0,0,o.Db(n,3).transform(t._isHandset)))?null:u.matches,t._visibility),l(n,4,0,t.message)}))}var R=o.nb("mat-tooltip-component",H,(function(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"mat-tooltip-component",[["aria-hidden","true"]],[[4,"zoom",null]],[["body","click"]],(function(l,n,u){var t=!0;return"body:click"===n&&(t=!1!==o.Db(l,1)._handleBodyInteraction()&&t),t}),E,D)),o.qb(1,180224,null,0,H,[o.h,K],null,null)],null,(function(l,n){l(n,0,0,"visible"===o.Db(n,1)._visibility?1:null)}))}),{},{},[]),J=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),V=o.pb({encapsulation:0,styles:[[""]],data:{}});function X(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" guides works!\n"]))],null,null)}var Q=o.nb("app-guides",J,(function(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"app-guides",[],null,null,null,X,V)),o.qb(1,114688,null,0,J,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),$=function(l){this.platformPickerService=l,this.os=l.is.bind(l)},U=u("3rGN"),Y=o.pb({encapsulation:0,styles:[[".pad[_ngcontent-%COMP%]{padding:1px 3em 0;overflow:hidden}pre[_ngcontent-%COMP%]{white-space:pre}"]],data:{}});function Z(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "]))],null,null)}function ll(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "]))],null,null)}function nl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Follow this guide on Windows 7+. "]))],null,null)}function ul(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),o.Ib(-1,null,["Command Prompt ("])),(l()(),o.rb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["cmd.exe"])),(l()(),o.Ib(-1,null,[")"]))],null,null)}function tl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),o.Ib(-1,null,["Terminal"]))],null,null)}function el(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\nsudo apt update\nsudo apt install build-essential git-core tcl jq\n    "]))],null,null)}function ol(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://developer.apple.com/downloads"],["target","_blank"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Latest XCode and Command Line Tools "]))],null,null)}function il(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,['\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\nbrew update\nbrew install git jq\n    ']))],null,null)}function sl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,13,"section",[["class","docs-guide-content"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[' Ensure you check "Add to PATH" whenever asked: '])),(l()(),o.rb(2,0,null,null,6,"ol",[],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o.rb(4,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Build Tools for Visual Studio 2017 "])),(l()(),o.rb(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o.rb(7,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://git-scm.com/download/win"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["git"])),(l()(),o.rb(9,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Test that it installed correctly with:"])),(l()(),o.rb(11,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(12,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\ngit --version\ncl /?\n      "]))],null,null)}function rl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,['\ncurl https://dl.google.com/go/go1.11.3.linux-amd64.tar.gz -o go.linux-amd64.tar.gz\ntar -C /usr/local -xzf go.linux-amd64.tar.gz\nsudo bash -c "GOPATH=$HOME/go >> /etc/environment"\n      ']))],null,null)}function al(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\nbrew install go\n      "]))],null,null)}function cl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,3,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Official Go installer: "])),(l()(),o.rb(2,0,null,null,1,"a",[["href","https://dl.google.com/go/go1.11.3.windows-amd64.msi"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["go1.11.3.windows-amd64.msi"]))],null,null)}function dl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\ncurl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain nightly\n      "]))],null,null)}function bl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,3,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Official Rust installer: "])),(l()(),o.rb(2,0,null,null,1,"a",[["href","https://win.rustup.rs/x86_64"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["https://win.rustup.rs/x86_64"]))],null,null)}function pl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\nrustup set default-host x86_64-pc-windows-msvc\nrustup install nightly\nrustup default nightly\n      "]))],null,null)}function hl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,['d="$GOPATH/src/github.com/Fantom-foundation"\nmkdir -p "$d"\ngit clone https://github.com/Fantom-foundation/go-lachesis "$d/go-lachesis"\nglide i']))],null,null)}function ml(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,['\nset d="%GOPATH%/src/github.com/Fantom-foundation"\nmd "%d%"\ngit clone https://github.com/Fantom-foundation/go-lachesis "%d%/go-lachesis"\nglide i']))],null,null)}function fl(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,64,"div",[["class","docs-markdown pad"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,1,"h5",[["class","docs-markdown-h5"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Getting started developing on Fantom "])),(l()(),o.rb(3,0,null,null,3,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.rb(4,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/Fantom-foundation"],["target","_blank"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Fantom foundation "])),(l()(),o.Ib(-1,null,[" is made up of a number of repositories. This will guide you through getting your development environment setup. "])),(l()(),o.gb(16777216,null,null,1,null,Z)),o.qb(8,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,ll)),o.qb(10,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,nl)),o.qb(12,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(13,0,null,null,6,"em",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" All grey background assumes you are running in an active "])),(l()(),o.gb(16777216,null,null,1,null,ul)),o.qb(16,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,tl)),o.qb(18,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.Ib(-1,null,[" session "])),(l()(),o.rb(20,0,null,null,12,"section",[["id","step-0-install-build-dependencies"]],null,null,null,null,null)),(l()(),o.rb(21,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Step 0: Install build dependencies "])),(l()(),o.rb(23,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,el)),o.qb(25,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,ol)),o.qb(27,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(28,0,null,null,2,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,il)),o.qb(30,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,sl)),o.qb(32,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(33,0,null,null,8,"section",[["id","step-1-install-go"]],null,null,null,null,null)),(l()(),o.rb(34,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Step 1: Install Go "])),(l()(),o.gb(16777216,null,null,1,null,rl)),o.qb(37,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,al)),o.qb(39,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,cl)),o.qb(41,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(42,0,null,null,8,"section",[["id","step-2-install-rust"]],null,null,null,null,null)),(l()(),o.rb(43,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Step 2: Install Rust "])),(l()(),o.gb(16777216,null,null,1,null,dl)),o.qb(46,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,bl)),o.qb(48,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,pl)),o.qb(50,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(51,0,null,null,10,"section",[["id","step-3-test-go-lachesis"]],null,null,null,null,null)),(l()(),o.rb(52,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Step 3: Go Lachesis "])),(l()(),o.rb(54,0,null,null,7,"pre",[["class","docs-markdown-pre"]],null,null,null,null,null)),(l()(),o.rb(55,0,null,null,6,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\ngo get -v github.com/SamuelMarks/batch-ethkey"])),(l()(),o.gb(16777216,null,null,1,null,hl)),o.qb(58,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,ml)),o.qb(60,16384,null,0,M.k,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.Ib(-1,null,["\n "])),(l()(),o.rb(62,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o.rb(63,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Now you have everything you need to orchestrate with fantom-dev. "]))],(function(l,n){var u=n.component;l(n,8,0,u.os("Linux")),l(n,10,0,u.os("macOS")),l(n,12,0,u.os("Windows")),l(n,16,0,u.os("Windows")),l(n,18,0,u.os("macOS")||u.os("Linux")),l(n,25,0,u.os("Linux")),l(n,27,0,u.os("macOS")),l(n,30,0,u.os("macOS")),l(n,32,0,u.os("Windows")),l(n,37,0,u.os("Linux")),l(n,39,0,u.os("macOS")),l(n,41,0,u.os("Windows")),l(n,46,0,u.os("Linux")||u.os("macOS")),l(n,48,0,u.os("Windows")),l(n,50,0,u.os("Windows")),l(n,58,0,u.os("Linux")||u.os("macOS")),l(n,60,0,u.os("Windows"))}),null)}var gl=o.nb("app-getting-started",$,(function(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"app-getting-started",[],null,null,null,fl,Y)),o.qb(1,49152,null,0,$,[U.a],null,null)],null,null)}),{},{},[]),wl=u("iInd");u("IheW"),u("LRne"),u("z6cu"),u("cp0P"),u("vkgz"),u("JIr8"),u("nYR2"),u("w1tV");var Il=function(){},yl=u("Fwaw");u.d(n,"GuideModuleNgFactory",(function(){return kl}));var kl=o.ob(i,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[s.a,R,Q,gl]],[3,o.j],o.v]),o.Bb(4608,M.m,M.l,[o.s,[2,M.B]]),o.Bb(4608,C.c,C.c,[]),o.Bb(4608,j.c,j.c,[j.h,j.d,o.j,j.g,j.e,o.p,o.x,M.d,F.b,[2,M.g]]),o.Bb(5120,j.i,j.j,[j.c]),o.Bb(5120,N,L,[j.c]),o.Bb(4608,z.e,G.c,[[2,G.g],[2,G.l]]),o.Bb(1073742336,M.c,M.c,[]),o.Bb(1073742336,wl.q,wl.q,[[2,wl.v],[2,wl.n]]),o.Bb(1073742336,F.a,F.a,[]),o.Bb(1073742336,G.l,G.l,[[2,G.d],[2,z.f]]),o.Bb(1073742336,Il,Il,[]),o.Bb(1073742336,a.b,a.b,[]),o.Bb(1073742336,G.u,G.u,[]),o.Bb(1073742336,yl.c,yl.c,[]),o.Bb(1073742336,C.d,C.d,[]),o.Bb(1073742336,W.a,W.a,[]),o.Bb(1073742336,T.c,T.c,[]),o.Bb(1073742336,A.b,A.b,[]),o.Bb(1073742336,j.f,j.f,[]),o.Bb(1073742336,P,P,[]),o.Bb(1073742336,i,i,[]),o.Bb(1024,wl.l,(function(){return[[{path:"",component:J},{path:"getting-started",component:$}]]}),[])])}))}}]);