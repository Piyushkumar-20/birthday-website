(function(){const dt=document.createElement("link").relList;if(dt&&dt.supports&&dt.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))p(B);new MutationObserver(B=>{for(const k of B)if(k.type==="childList")for(const ht of k.addedNodes)ht.tagName==="LINK"&&ht.rel==="modulepreload"&&p(ht)}).observe(document,{childList:!0,subtree:!0});function $(B){const k={};return B.integrity&&(k.integrity=B.integrity),B.referrerPolicy&&(k.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?k.credentials="include":B.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function p(B){if(B.ep)return;B.ep=!0;const k=$(B);fetch(B.href,k)}})();function Jh(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var uf={exports:{}},vu={};var mr;function kh(){if(mr)return vu;mr=1;var A=Symbol.for("react.transitional.element"),dt=Symbol.for("react.fragment");function $(p,B,k){var ht=null;if(k!==void 0&&(ht=""+k),B.key!==void 0&&(ht=""+B.key),"key"in B){k={};for(var Ut in B)Ut!=="key"&&(k[Ut]=B[Ut])}else k=B;return B=k.ref,{$$typeof:A,type:p,key:ht,ref:B!==void 0?B:null,props:k}}return vu.Fragment=dt,vu.jsx=$,vu.jsxs=$,vu}var gr;function Wh(){return gr||(gr=1,uf.exports=kh()),uf.exports}var U=Wh(),nf={exports:{}},C={};var pr;function $h(){if(pr)return C;pr=1;var A=Symbol.for("react.transitional.element"),dt=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),ft=Symbol.iterator;function Lt(s){return s===null||typeof s!="object"?null:(s=ft&&s[ft]||s["@@iterator"],typeof s=="function"?s:null)}var Nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ot=Object.assign,Kt={};function xt(s,x,T){this.props=s,this.context=x,this.refs=Kt,this.updater=T||Nt}xt.prototype.isReactComponent={},xt.prototype.setState=function(s,x){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,x,"setState")},xt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function da(){}da.prototype=xt.prototype;function At(s,x,T){this.props=s,this.context=x,this.refs=Kt,this.updater=T||Nt}var Ht=At.prototype=new da;Ht.constructor=At,ot(Ht,xt.prototype),Ht.isPureReactComponent=!0;var ta=Array.isArray;function Qt(){}var Q={H:null,A:null,T:null,S:null},jt=Object.prototype.hasOwnProperty;function Yt(s,x,T){var M=T.ref;return{$$typeof:A,type:s,key:x,ref:M!==void 0?M:null,props:T}}function Fa(s,x){return Yt(s.type,x,s.props)}function ha(s){return typeof s=="object"&&s!==null&&s.$$typeof===A}function Rt(s){var x={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(T){return x[T]})}var Ha=/\/+/g;function Ta(s,x){return typeof s=="object"&&s!==null&&s.key!=null?Rt(""+s.key):x.toString(36)}function aa(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Qt,Qt):(s.status="pending",s.then(function(x){s.status==="pending"&&(s.status="fulfilled",s.value=x)},function(x){s.status==="pending"&&(s.status="rejected",s.reason=x)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function r(s,x,T,M,q){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var at=!1;if(s===null)at=!0;else switch(Z){case"bigint":case"string":case"number":at=!0;break;case"object":switch(s.$$typeof){case A:case dt:at=!0;break;case F:return at=s._init,r(at(s._payload),x,T,M,q)}}if(at)return q=q(s),at=M===""?"."+Ta(s,0):M,ta(q)?(T="",at!=null&&(T=at.replace(Ha,"$&/")+"/"),r(q,x,T,"",function(Oe){return Oe})):q!=null&&(ha(q)&&(q=Fa(q,T+(q.key==null||s&&s.key===q.key?"":(""+q.key).replace(Ha,"$&/")+"/")+at)),x.push(q)),1;at=0;var wt=M===""?".":M+":";if(ta(s))for(var bt=0;bt<s.length;bt++)M=s[bt],Z=wt+Ta(M,bt),at+=r(M,x,T,Z,q);else if(bt=Lt(s),typeof bt=="function")for(s=bt.call(s),bt=0;!(M=s.next()).done;)M=M.value,Z=wt+Ta(M,bt++),at+=r(M,x,T,Z,q);else if(Z==="object"){if(typeof s.then=="function")return r(aa(s),x,T,M,q);throw x=String(s),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return at}function z(s,x,T){if(s==null)return s;var M=[],q=0;return r(s,M,"","",function(Z){return x.call(T,Z,q++)}),M}function O(s){if(s._status===-1){var x=s._result;x=x(),x.then(function(T){(s._status===0||s._status===-1)&&(s._status=1,s._result=T)},function(T){(s._status===0||s._status===-1)&&(s._status=2,s._result=T)}),s._status===-1&&(s._status=0,s._result=x)}if(s._status===1)return s._result.default;throw s._result}var R=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},W={map:z,forEach:function(s,x,T){z(s,function(){x.apply(this,arguments)},T)},count:function(s){var x=0;return z(s,function(){x++}),x},toArray:function(s){return z(s,function(x){return x})||[]},only:function(s){if(!ha(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return C.Activity=j,C.Children=W,C.Component=xt,C.Fragment=$,C.Profiler=B,C.PureComponent=At,C.StrictMode=p,C.Suspense=N,C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,C.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Q.H.useMemoCache(s)}},C.cache=function(s){return function(){return s.apply(null,arguments)}},C.cacheSignal=function(){return null},C.cloneElement=function(s,x,T){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var M=ot({},s.props),q=s.key;if(x!=null)for(Z in x.key!==void 0&&(q=""+x.key),x)!jt.call(x,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&x.ref===void 0||(M[Z]=x[Z]);var Z=arguments.length-2;if(Z===1)M.children=T;else if(1<Z){for(var at=Array(Z),wt=0;wt<Z;wt++)at[wt]=arguments[wt+2];M.children=at}return Yt(s.type,q,M)},C.createContext=function(s){return s={$$typeof:ht,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:k,_context:s},s},C.createElement=function(s,x,T){var M,q={},Z=null;if(x!=null)for(M in x.key!==void 0&&(Z=""+x.key),x)jt.call(x,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(q[M]=x[M]);var at=arguments.length-2;if(at===1)q.children=T;else if(1<at){for(var wt=Array(at),bt=0;bt<at;bt++)wt[bt]=arguments[bt+2];q.children=wt}if(s&&s.defaultProps)for(M in at=s.defaultProps,at)q[M]===void 0&&(q[M]=at[M]);return Yt(s,Z,q)},C.createRef=function(){return{current:null}},C.forwardRef=function(s){return{$$typeof:Ut,render:s}},C.isValidElement=ha,C.lazy=function(s){return{$$typeof:F,_payload:{_status:-1,_result:s},_init:O}},C.memo=function(s,x){return{$$typeof:E,type:s,compare:x===void 0?null:x}},C.startTransition=function(s){var x=Q.T,T={};Q.T=T;try{var M=s(),q=Q.S;q!==null&&q(T,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(Qt,R)}catch(Z){R(Z)}finally{x!==null&&T.types!==null&&(x.types=T.types),Q.T=x}},C.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},C.use=function(s){return Q.H.use(s)},C.useActionState=function(s,x,T){return Q.H.useActionState(s,x,T)},C.useCallback=function(s,x){return Q.H.useCallback(s,x)},C.useContext=function(s){return Q.H.useContext(s)},C.useDebugValue=function(){},C.useDeferredValue=function(s,x){return Q.H.useDeferredValue(s,x)},C.useEffect=function(s,x){return Q.H.useEffect(s,x)},C.useEffectEvent=function(s){return Q.H.useEffectEvent(s)},C.useId=function(){return Q.H.useId()},C.useImperativeHandle=function(s,x,T){return Q.H.useImperativeHandle(s,x,T)},C.useInsertionEffect=function(s,x){return Q.H.useInsertionEffect(s,x)},C.useLayoutEffect=function(s,x){return Q.H.useLayoutEffect(s,x)},C.useMemo=function(s,x){return Q.H.useMemo(s,x)},C.useOptimistic=function(s,x){return Q.H.useOptimistic(s,x)},C.useReducer=function(s,x,T){return Q.H.useReducer(s,x,T)},C.useRef=function(s){return Q.H.useRef(s)},C.useState=function(s){return Q.H.useState(s)},C.useSyncExternalStore=function(s,x,T){return Q.H.useSyncExternalStore(s,x,T)},C.useTransition=function(){return Q.H.useTransition()},C.version="19.2.3",C}var br;function rf(){return br||(br=1,nf.exports=$h()),nf.exports}var _t=rf();const Fh=Jh(_t);var cf={exports:{}},xu={},ff={exports:{}},of={};var yr;function Ih(){return yr||(yr=1,(function(A){function dt(r,z){var O=r.length;r.push(z);t:for(;0<O;){var R=O-1>>>1,W=r[R];if(0<B(W,z))r[R]=z,r[O]=W,O=R;else break t}}function $(r){return r.length===0?null:r[0]}function p(r){if(r.length===0)return null;var z=r[0],O=r.pop();if(O!==z){r[0]=O;t:for(var R=0,W=r.length,s=W>>>1;R<s;){var x=2*(R+1)-1,T=r[x],M=x+1,q=r[M];if(0>B(T,O))M<W&&0>B(q,T)?(r[R]=q,r[M]=O,R=M):(r[R]=T,r[x]=O,R=x);else if(M<W&&0>B(q,O))r[R]=q,r[M]=O,R=M;else break t}}return z}function B(r,z){var O=r.sortIndex-z.sortIndex;return O!==0?O:r.id-z.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;A.unstable_now=function(){return k.now()}}else{var ht=Date,Ut=ht.now();A.unstable_now=function(){return ht.now()-Ut}}var N=[],E=[],F=1,j=null,ft=3,Lt=!1,Nt=!1,ot=!1,Kt=!1,xt=typeof setTimeout=="function"?setTimeout:null,da=typeof clearTimeout=="function"?clearTimeout:null,At=typeof setImmediate<"u"?setImmediate:null;function Ht(r){for(var z=$(E);z!==null;){if(z.callback===null)p(E);else if(z.startTime<=r)p(E),z.sortIndex=z.expirationTime,dt(N,z);else break;z=$(E)}}function ta(r){if(ot=!1,Ht(r),!Nt)if($(N)!==null)Nt=!0,Qt||(Qt=!0,Rt());else{var z=$(E);z!==null&&aa(ta,z.startTime-r)}}var Qt=!1,Q=-1,jt=5,Yt=-1;function Fa(){return Kt?!0:!(A.unstable_now()-Yt<jt)}function ha(){if(Kt=!1,Qt){var r=A.unstable_now();Yt=r;var z=!0;try{t:{Nt=!1,ot&&(ot=!1,da(Q),Q=-1),Lt=!0;var O=ft;try{a:{for(Ht(r),j=$(N);j!==null&&!(j.expirationTime>r&&Fa());){var R=j.callback;if(typeof R=="function"){j.callback=null,ft=j.priorityLevel;var W=R(j.expirationTime<=r);if(r=A.unstable_now(),typeof W=="function"){j.callback=W,Ht(r),z=!0;break a}j===$(N)&&p(N),Ht(r)}else p(N);j=$(N)}if(j!==null)z=!0;else{var s=$(E);s!==null&&aa(ta,s.startTime-r),z=!1}}break t}finally{j=null,ft=O,Lt=!1}z=void 0}}finally{z?Rt():Qt=!1}}}var Rt;if(typeof At=="function")Rt=function(){At(ha)};else if(typeof MessageChannel<"u"){var Ha=new MessageChannel,Ta=Ha.port2;Ha.port1.onmessage=ha,Rt=function(){Ta.postMessage(null)}}else Rt=function(){xt(ha,0)};function aa(r,z){Q=xt(function(){r(A.unstable_now())},z)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(r){r.callback=null},A.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):jt=0<r?Math.floor(1e3/r):5},A.unstable_getCurrentPriorityLevel=function(){return ft},A.unstable_next=function(r){switch(ft){case 1:case 2:case 3:var z=3;break;default:z=ft}var O=ft;ft=z;try{return r()}finally{ft=O}},A.unstable_requestPaint=function(){Kt=!0},A.unstable_runWithPriority=function(r,z){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var O=ft;ft=r;try{return z()}finally{ft=O}},A.unstable_scheduleCallback=function(r,z,O){var R=A.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?R+O:R):O=R,r){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,r={id:F++,callback:z,priorityLevel:r,startTime:O,expirationTime:W,sortIndex:-1},O>R?(r.sortIndex=O,dt(E,r),$(N)===null&&r===$(E)&&(ot?(da(Q),Q=-1):ot=!0,aa(ta,O-R))):(r.sortIndex=W,dt(N,r),Nt||Lt||(Nt=!0,Qt||(Qt=!0,Rt()))),r},A.unstable_shouldYield=Fa,A.unstable_wrapCallback=function(r){var z=ft;return function(){var O=ft;ft=z;try{return r.apply(this,arguments)}finally{ft=O}}}})(of)),of}var vr;function Ph(){return vr||(vr=1,ff.exports=Ih()),ff.exports}var sf={exports:{}},Zt={};var xr;function tm(){if(xr)return Zt;xr=1;var A=rf();function dt(N){var E="https://react.dev/errors/"+N;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)E+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+N+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $(){}var p={d:{f:$,r:function(){throw Error(dt(522))},D:$,C:$,L:$,m:$,X:$,S:$,M:$},p:0,findDOMNode:null},B=Symbol.for("react.portal");function k(N,E,F){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:j==null?null:""+j,children:N,containerInfo:E,implementation:F}}var ht=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ut(N,E){if(N==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Zt.createPortal=function(N,E){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(dt(299));return k(N,E,null,F)},Zt.flushSync=function(N){var E=ht.T,F=p.p;try{if(ht.T=null,p.p=2,N)return N()}finally{ht.T=E,p.p=F,p.d.f()}},Zt.preconnect=function(N,E){typeof N=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,p.d.C(N,E))},Zt.prefetchDNS=function(N){typeof N=="string"&&p.d.D(N)},Zt.preinit=function(N,E){if(typeof N=="string"&&E&&typeof E.as=="string"){var F=E.as,j=Ut(F,E.crossOrigin),ft=typeof E.integrity=="string"?E.integrity:void 0,Lt=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;F==="style"?p.d.S(N,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:j,integrity:ft,fetchPriority:Lt}):F==="script"&&p.d.X(N,{crossOrigin:j,integrity:ft,fetchPriority:Lt,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Zt.preinitModule=function(N,E){if(typeof N=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var F=Ut(E.as,E.crossOrigin);p.d.M(N,{crossOrigin:F,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&p.d.M(N)},Zt.preload=function(N,E){if(typeof N=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var F=E.as,j=Ut(F,E.crossOrigin);p.d.L(N,F,{crossOrigin:j,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Zt.preloadModule=function(N,E){if(typeof N=="string")if(E){var F=Ut(E.as,E.crossOrigin);p.d.m(N,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:F,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else p.d.m(N)},Zt.requestFormReset=function(N){p.d.r(N)},Zt.unstable_batchedUpdates=function(N,E){return N(E)},Zt.useFormState=function(N,E,F){return ht.H.useFormState(N,E,F)},Zt.useFormStatus=function(){return ht.H.useHostTransitionStatus()},Zt.version="19.2.3",Zt}var Sr;function am(){if(Sr)return sf.exports;Sr=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(dt){console.error(dt)}}return A(),sf.exports=tm(),sf.exports}var zr;function lm(){if(zr)return xu;zr=1;var A=Ph(),dt=rf(),$=am();function p(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function k(t){var a=t,l=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(l=a.return),t=a.return;while(t)}return a.tag===3?l:null}function ht(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Ut(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function N(t){if(k(t)!==t)throw Error(p(188))}function E(t){var a=t.alternate;if(!a){if(a=k(t),a===null)throw Error(p(188));return a!==t?null:t}for(var l=t,e=a;;){var u=l.return;if(u===null)break;var n=u.alternate;if(n===null){if(e=u.return,e!==null){l=e;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===l)return N(u),t;if(n===e)return N(u),a;n=n.sibling}throw Error(p(188))}if(l.return!==e.return)l=u,e=n;else{for(var i=!1,c=u.child;c;){if(c===l){i=!0,l=u,e=n;break}if(c===e){i=!0,e=u,l=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===l){i=!0,l=n,e=u;break}if(c===e){i=!0,e=n,l=u;break}c=c.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==e)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?t:a}function F(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=F(t),a!==null)return a;t=t.sibling}return null}var j=Object.assign,ft=Symbol.for("react.element"),Lt=Symbol.for("react.transitional.element"),Nt=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),Kt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),da=Symbol.for("react.consumer"),At=Symbol.for("react.context"),Ht=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),Qt=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Yt=Symbol.for("react.activity"),Fa=Symbol.for("react.memo_cache_sentinel"),ha=Symbol.iterator;function Rt(t){return t===null||typeof t!="object"?null:(t=ha&&t[ha]||t["@@iterator"],typeof t=="function"?t:null)}var Ha=Symbol.for("react.client.reference");function Ta(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ha?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ot:return"Fragment";case xt:return"Profiler";case Kt:return"StrictMode";case ta:return"Suspense";case Qt:return"SuspenseList";case Yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Nt:return"Portal";case At:return t.displayName||"Context";case da:return(t._context.displayName||"Context")+".Consumer";case Ht:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return a=t.displayName||null,a!==null?a:Ta(t.type)||"Memo";case jt:a=t._payload,t=t._init;try{return Ta(t(a))}catch{}}return null}var aa=Array.isArray,r=dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},R=[],W=-1;function s(t){return{current:t}}function x(t){0>W||(t.current=R[W],R[W]=null,W--)}function T(t,a){W++,R[W]=t.current,t.current=a}var M=s(null),q=s(null),Z=s(null),at=s(null);function wt(t,a){switch(T(Z,a),T(q,t),T(M,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=B0(a),t=q0(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}x(M),T(M,t)}function bt(){x(M),x(q),x(Z)}function Oe(t){t.memoizedState!==null&&T(at,t);var a=M.current,l=q0(a,t.type);a!==l&&(T(q,t),T(M,l))}function Su(t){q.current===t&&(x(M),x(q)),at.current===t&&(x(at),gu._currentValue=O)}var Xn,df;function El(t){if(Xn===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Xn=a&&a[1]||"",df=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+t+df}var Qn=!1;function Zn(t,a){if(!t||Qn)return"";Qn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(b){var g=b}Reflect.construct(t,[],S)}else{try{S.call()}catch(b){g=b}t.call(S.prototype)}}else{try{throw Error()}catch(b){g=b}(S=t())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(b){if(b&&g&&typeof b.stack=="string")return[b.stack,g.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(e===f.length||u===m.length)for(e=f.length-1,u=m.length-1;1<=e&&0<=u&&f[e]!==m[u];)u--;for(;1<=e&&0<=u;e--,u--)if(f[e]!==m[u]){if(e!==1||u!==1)do if(e--,u--,0>u||f[e]!==m[u]){var y=`
`+f[e].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=e&&0<=u);break}}}finally{Qn=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?El(l):""}function Tr(t,a){switch(t.tag){case 26:case 27:case 5:return El(t.type);case 16:return El("Lazy");case 13:return t.child!==a&&a!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Zn(t.type,!1);case 11:return Zn(t.type.render,!1);case 1:return Zn(t.type,!0);case 31:return El("Activity");default:return""}}function hf(t){try{var a="",l=null;do a+=Tr(t,l),l=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ln=Object.prototype.hasOwnProperty,wn=A.unstable_scheduleCallback,Vn=A.unstable_cancelCallback,Ar=A.unstable_shouldYield,Or=A.unstable_requestPaint,la=A.unstable_now,_r=A.unstable_getCurrentPriorityLevel,mf=A.unstable_ImmediatePriority,gf=A.unstable_UserBlockingPriority,zu=A.unstable_NormalPriority,Mr=A.unstable_LowPriority,pf=A.unstable_IdlePriority,Dr=A.log,Ur=A.unstable_setDisableYieldValue,_e=null,ea=null;function Ia(t){if(typeof Dr=="function"&&Ur(t),ea&&typeof ea.setStrictMode=="function")try{ea.setStrictMode(_e,t)}catch{}}var ua=Math.clz32?Math.clz32:jr,Nr=Math.log,Hr=Math.LN2;function jr(t){return t>>>=0,t===0?32:31-(Nr(t)/Hr|0)|0}var Eu=256,Tu=262144,Au=4194304;function Tl(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ou(t,a,l){var e=t.pendingLanes;if(e===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~n,e!==0?u=Tl(e):(i&=c,i!==0?u=Tl(i):l||(l=c&~t,l!==0&&(u=Tl(l))))):(c=e&~n,c!==0?u=Tl(c):i!==0?u=Tl(i):l||(l=e&~t,l!==0&&(u=Tl(l)))),u===0?0:a!==0&&a!==u&&(a&n)===0&&(n=u&-u,l=a&-a,n>=l||n===32&&(l&4194048)!==0)?a:u}function Me(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Yr(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(){var t=Au;return Au<<=1,(Au&62914560)===0&&(Au=4194304),t}function Kn(t){for(var a=[],l=0;31>l;l++)a.push(t);return a}function De(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rr(t,a,l,e,u,n){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(l=i&~l;0<l;){var y=31-ua(l),S=1<<y;c[y]=0,f[y]=-1;var g=m[y];if(g!==null)for(m[y]=null,y=0;y<g.length;y++){var b=g[y];b!==null&&(b.lane&=-536870913)}l&=~S}e!==0&&yf(t,e,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~a))}function yf(t,a,l){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ua(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|l&261930}function vf(t,a){var l=t.entangledLanes|=a;for(t=t.entanglements;l;){var e=31-ua(l),u=1<<e;u&a|t[e]&a&&(t[e]|=a),l&=~u}}function xf(t,a){var l=a&-a;return l=(l&42)!==0?1:Jn(l),(l&(t.suspendedLanes|a))!==0?0:l}function Jn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sf(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:cr(t.type))}function zf(t,a){var l=z.p;try{return z.p=t,a()}finally{z.p=l}}var Pa=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Pa,Jt="__reactProps$"+Pa,Zl="__reactContainer$"+Pa,Wn="__reactEvents$"+Pa,Cr="__reactListeners$"+Pa,Br="__reactHandles$"+Pa,Ef="__reactResources$"+Pa,Ue="__reactMarker$"+Pa;function $n(t){delete t[Ct],delete t[Jt],delete t[Wn],delete t[Cr],delete t[Br]}function Ll(t){var a=t[Ct];if(a)return a;for(var l=t.parentNode;l;){if(a=l[Zl]||l[Ct]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(t=V0(t);t!==null;){if(l=t[Ct])return l;t=V0(t)}return a}t=l,l=t.parentNode}return null}function wl(t){if(t=t[Ct]||t[Zl]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ne(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(p(33))}function Vl(t){var a=t[Ef];return a||(a=t[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Mt(t){t[Ue]=!0}var Tf=new Set,Af={};function Al(t,a){Kl(t,a),Kl(t+"Capture",a)}function Kl(t,a){for(Af[t]=a,t=0;t<a.length;t++)Tf.add(a[t])}var qr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},_f={};function Gr(t){return Ln.call(_f,t)?!0:Ln.call(Of,t)?!1:qr.test(t)?_f[t]=!0:(Of[t]=!0,!1)}function _u(t,a,l){if(Gr(a))if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+l)}}function Mu(t,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+l)}}function ja(t,a,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(a,l,""+e)}}function ma(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mf(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Xr(t,a,l){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return u.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Fn(t){if(!t._valueTracker){var a=Mf(t)?"checked":"value";t._valueTracker=Xr(t,a,""+t[a])}}function Df(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var l=a.getValue(),e="";return t&&(e=Mf(t)?t.checked?"true":"false":t.value),t=e,t!==l?(a.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qr=/[\n"\\]/g;function ga(t){return t.replace(Qr,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function In(t,a,l,e,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),a!=null?i==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ma(a)):t.value!==""+ma(a)&&(t.value=""+ma(a)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),a!=null?Pn(t,i,ma(a)):l!=null?Pn(t,i,ma(l)):e!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ma(c):t.removeAttribute("name")}function Uf(t,a,l,e,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Fn(t);return}l=l!=null?""+ma(l):"",a=a!=null?""+ma(a):l,c||a===t.value||(t.value=a),t.defaultValue=a}e=e??u,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Fn(t)}function Pn(t,a,l){a==="number"&&Du(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Jl(t,a,l,e){if(t=t.options,a){a={};for(var u=0;u<l.length;u++)a["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=a.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&e&&(t[l].defaultSelected=!0)}else{for(l=""+ma(l),a=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,e&&(t[u].defaultSelected=!0);return}a!==null||t[u].disabled||(a=t[u])}a!==null&&(a.selected=!0)}}function Nf(t,a,l){if(a!=null&&(a=""+ma(a),a!==t.value&&(t.value=a),l==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=l!=null?""+ma(l):""}function Hf(t,a,l,e){if(a==null){if(e!=null){if(l!=null)throw Error(p(92));if(aa(e)){if(1<e.length)throw Error(p(93));e=e[0]}l=e}l==null&&(l=""),a=l}l=ma(a),t.defaultValue=l,e=t.textContent,e===l&&e!==""&&e!==null&&(t.value=e),Fn(t)}function kl(t,a){if(a){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=a;return}}t.textContent=a}var Zr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jf(t,a,l){var e=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,l):typeof l!="number"||l===0||Zr.has(a)?a==="float"?t.cssFloat=l:t[a]=(""+l).trim():t[a]=l+"px"}function Yf(t,a,l){if(a!=null&&typeof a!="object")throw Error(p(62));if(t=t.style,l!=null){for(var e in l)!l.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var u in a)e=a[u],a.hasOwnProperty(u)&&l[u]!==e&&jf(t,u,e)}else for(var n in a)a.hasOwnProperty(n)&&jf(t,n,a[n])}function ti(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(t){return wr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ya(){}var ai=null;function li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wl=null,$l=null;function Rf(t){var a=wl(t);if(a&&(t=a.stateNode)){var l=t[Jt]||null;t:switch(t=a.stateNode,a.type){case"input":if(In(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ga(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var e=l[a];if(e!==t&&e.form===t.form){var u=e[Jt]||null;if(!u)throw Error(p(90));In(e,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<l.length;a++)e=l[a],e.form===t.form&&Df(e)}break t;case"textarea":Nf(t,l.value,l.defaultValue);break t;case"select":a=l.value,a!=null&&Jl(t,!!l.multiple,a,!1)}}}var ei=!1;function Cf(t,a,l){if(ei)return t(a,l);ei=!0;try{var e=t(a);return e}finally{if(ei=!1,(Wl!==null||$l!==null)&&(yn(),Wl&&(a=Wl,t=$l,$l=Wl=null,Rf(a),t)))for(a=0;a<t.length;a++)Rf(t[a])}}function He(t,a){var l=t.stateNode;if(l===null)return null;var e=l[Jt]||null;if(e===null)return null;l=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(p(231,a,typeof l));return l}var Ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=!1;if(Ra)try{var je={};Object.defineProperty(je,"passive",{get:function(){ui=!0}}),window.addEventListener("test",je,je),window.removeEventListener("test",je,je)}catch{ui=!1}var tl=null,ni=null,Nu=null;function Bf(){if(Nu)return Nu;var t,a=ni,l=a.length,e,u="value"in tl?tl.value:tl.textContent,n=u.length;for(t=0;t<l&&a[t]===u[t];t++);var i=l-t;for(e=1;e<=i&&a[l-e]===u[n-e];e++);return Nu=u.slice(t,1<e?1-e:void 0)}function Hu(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function qf(){return!1}function kt(t){function a(l,e,u,n,i){this._reactName=l,this._targetInst=u,this.type=e,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ju:qf,this.isPropagationStopped=qf,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),a}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=kt(Ol),Ye=j({},Ol,{view:0,detail:0}),Vr=kt(Ye),ii,ci,Re,Ru=j({},Ye,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Re&&(Re&&t.type==="mousemove"?(ii=t.screenX-Re.screenX,ci=t.screenY-Re.screenY):ci=ii=0,Re=t),ii)},movementY:function(t){return"movementY"in t?t.movementY:ci}}),Gf=kt(Ru),Kr=j({},Ru,{dataTransfer:0}),Jr=kt(Kr),kr=j({},Ye,{relatedTarget:0}),fi=kt(kr),Wr=j({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=kt(Wr),Fr=j({},Ol,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ir=kt(Fr),Pr=j({},Ol,{data:0}),Xf=kt(Pr),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ed(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=ld[t])?!!a[t]:!1}function oi(){return ed}var ud=j({},Ye,{key:function(t){if(t.key){var a=td[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ad[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nd=kt(ud),id=j({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=kt(id),cd=j({},Ye,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),fd=kt(cd),od=j({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),sd=kt(od),rd=j({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dd=kt(rd),hd=j({},Ol,{newState:0,oldState:0}),md=kt(hd),gd=[9,13,27,32],si=Ra&&"CompositionEvent"in window,Ce=null;Ra&&"documentMode"in document&&(Ce=document.documentMode);var pd=Ra&&"TextEvent"in window&&!Ce,Zf=Ra&&(!si||Ce&&8<Ce&&11>=Ce),Lf=" ",wf=!1;function Vf(t,a){switch(t){case"keyup":return gd.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fl=!1;function bd(t,a){switch(t){case"compositionend":return Kf(a);case"keypress":return a.which!==32?null:(wf=!0,Lf);case"textInput":return t=a.data,t===Lf&&wf?null:t;default:return null}}function yd(t,a){if(Fl)return t==="compositionend"||!si&&Vf(t,a)?(t=Bf(),Nu=ni=tl=null,Fl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Zf&&a.locale!=="ko"?null:a.data;default:return null}}var vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!vd[t.type]:a==="textarea"}function kf(t,a,l,e){Wl?$l?$l.push(e):$l=[e]:Wl=e,a=An(a,"onChange"),0<a.length&&(l=new Yu("onChange","change",null,l,e),t.push({event:l,listeners:a}))}var Be=null,qe=null;function xd(t){N0(t,0)}function Cu(t){var a=Ne(t);if(Df(a))return t}function Wf(t,a){if(t==="change")return a}var $f=!1;if(Ra){var ri;if(Ra){var di="oninput"in document;if(!di){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),di=typeof Ff.oninput=="function"}ri=di}else ri=!1;$f=ri&&(!document.documentMode||9<document.documentMode)}function If(){Be&&(Be.detachEvent("onpropertychange",Pf),qe=Be=null)}function Pf(t){if(t.propertyName==="value"&&Cu(qe)){var a=[];kf(a,qe,t,li(t)),Cf(xd,a)}}function Sd(t,a,l){t==="focusin"?(If(),Be=a,qe=l,Be.attachEvent("onpropertychange",Pf)):t==="focusout"&&If()}function zd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(qe)}function Ed(t,a){if(t==="click")return Cu(a)}function Td(t,a){if(t==="input"||t==="change")return Cu(a)}function Ad(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var na=typeof Object.is=="function"?Object.is:Ad;function Ge(t,a){if(na(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var l=Object.keys(t),e=Object.keys(a);if(l.length!==e.length)return!1;for(e=0;e<l.length;e++){var u=l[e];if(!Ln.call(a,u)||!na(t[u],a[u]))return!1}return!0}function to(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ao(t,a){var l=to(t);t=0;for(var e;l;){if(l.nodeType===3){if(e=t+l.textContent.length,t<=a&&e>=a)return{node:l,offset:a-t};t=e}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=to(l)}}function lo(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?lo(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function eo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Du(t.document);a instanceof t.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)t=a.contentWindow;else break;a=Du(t.document)}return a}function hi(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Od=Ra&&"documentMode"in document&&11>=document.documentMode,Il=null,mi=null,Xe=null,gi=!1;function uo(t,a,l){var e=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gi||Il==null||Il!==Du(e)||(e=Il,"selectionStart"in e&&hi(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Xe&&Ge(Xe,e)||(Xe=e,e=An(mi,"onSelect"),0<e.length&&(a=new Yu("onSelect","select",null,a,l),t.push({event:a,listeners:e}),a.target=Il)))}function _l(t,a){var l={};return l[t.toLowerCase()]=a.toLowerCase(),l["Webkit"+t]="webkit"+a,l["Moz"+t]="moz"+a,l}var Pl={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},pi={},no={};Ra&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Ml(t){if(pi[t])return pi[t];if(!Pl[t])return t;var a=Pl[t],l;for(l in a)if(a.hasOwnProperty(l)&&l in no)return pi[t]=a[l];return t}var io=Ml("animationend"),co=Ml("animationiteration"),fo=Ml("animationstart"),_d=Ml("transitionrun"),Md=Ml("transitionstart"),Dd=Ml("transitioncancel"),oo=Ml("transitionend"),so=new Map,bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bi.push("scrollEnd");function Aa(t,a){so.set(t,a),Al(a,[t])}var Bu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pa=[],te=0,yi=0;function qu(){for(var t=te,a=yi=te=0;a<t;){var l=pa[a];pa[a++]=null;var e=pa[a];pa[a++]=null;var u=pa[a];pa[a++]=null;var n=pa[a];if(pa[a++]=null,e!==null&&u!==null){var i=e.pending;i===null?u.next=u:(u.next=i.next,i.next=u),e.pending=u}n!==0&&ro(l,u,n)}}function Gu(t,a,l,e){pa[te++]=t,pa[te++]=a,pa[te++]=l,pa[te++]=e,yi|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function vi(t,a,l,e){return Gu(t,a,l,e),Xu(t)}function Dl(t,a){return Gu(t,null,null,a),Xu(t)}function ro(t,a,l){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l);for(var u=!1,n=t.return;n!==null;)n.childLanes|=l,e=n.alternate,e!==null&&(e.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&a!==null&&(u=31-ua(l),t=n.hiddenUpdates,e=t[u],e===null?t[u]=[a]:e.push(a),a.lane=l|536870912),n):null}function Xu(t){if(50<fu)throw fu=0,Mc=null,Error(p(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var ae={};function Ud(t,a,l,e){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(t,a,l,e){return new Ud(t,a,l,e)}function xi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ca(t,a){var l=t.alternate;return l===null?(l=ia(t.tag,a,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=a,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,a=t.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function ho(t,a){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,a=l.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Qu(t,a,l,e,u,n){var i=0;if(e=t,typeof t=="function")xi(t)&&(i=1);else if(typeof t=="string")i=Rh(t,l,M.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Yt:return t=ia(31,l,a,u),t.elementType=Yt,t.lanes=n,t;case ot:return Ul(l.children,u,n,a);case Kt:i=8,u|=24;break;case xt:return t=ia(12,l,a,u|2),t.elementType=xt,t.lanes=n,t;case ta:return t=ia(13,l,a,u),t.elementType=ta,t.lanes=n,t;case Qt:return t=ia(19,l,a,u),t.elementType=Qt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case At:i=10;break t;case da:i=9;break t;case Ht:i=11;break t;case Q:i=14;break t;case jt:i=16,e=null;break t}i=29,l=Error(p(130,t===null?"null":typeof t,"")),e=null}return a=ia(i,l,a,u),a.elementType=t,a.type=e,a.lanes=n,a}function Ul(t,a,l,e){return t=ia(7,t,e,a),t.lanes=l,t}function Si(t,a,l){return t=ia(6,t,null,a),t.lanes=l,t}function mo(t){var a=ia(18,null,null,0);return a.stateNode=t,a}function zi(t,a,l){return a=ia(4,t.children!==null?t.children:[],t.key,a),a.lanes=l,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var go=new WeakMap;function ba(t,a){if(typeof t=="object"&&t!==null){var l=go.get(t);return l!==void 0?l:(a={value:t,source:a,stack:hf(a)},go.set(t,a),a)}return{value:t,source:a,stack:hf(a)}}var le=[],ee=0,Zu=null,Qe=0,ya=[],va=0,al=null,Ma=1,Da="";function Ba(t,a){le[ee++]=Qe,le[ee++]=Zu,Zu=t,Qe=a}function po(t,a,l){ya[va++]=Ma,ya[va++]=Da,ya[va++]=al,al=t;var e=Ma;t=Da;var u=32-ua(e)-1;e&=~(1<<u),l+=1;var n=32-ua(a)+u;if(30<n){var i=u-u%5;n=(e&(1<<i)-1).toString(32),e>>=i,u-=i,Ma=1<<32-ua(a)+u|l<<u|e,Da=n+t}else Ma=1<<n|l<<u|e,Da=t}function Ei(t){t.return!==null&&(Ba(t,1),po(t,1,0))}function Ti(t){for(;t===Zu;)Zu=le[--ee],le[ee]=null,Qe=le[--ee],le[ee]=null;for(;t===al;)al=ya[--va],ya[va]=null,Da=ya[--va],ya[va]=null,Ma=ya[--va],ya[va]=null}function bo(t,a){ya[va++]=Ma,ya[va++]=Da,ya[va++]=al,Ma=a.id,Da=a.overflow,al=t}var Bt=null,st=null,J=!1,ll=null,xa=!1,Ai=Error(p(519));function el(t){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ze(ba(a,t)),Ai}function yo(t){var a=t.stateNode,l=t.type,e=t.memoizedProps;switch(a[Ct]=t,a[Jt]=e,l){case"dialog":w("cancel",a),w("close",a);break;case"iframe":case"object":case"embed":w("load",a);break;case"video":case"audio":for(l=0;l<su.length;l++)w(su[l],a);break;case"source":w("error",a);break;case"img":case"image":case"link":w("error",a),w("load",a);break;case"details":w("toggle",a);break;case"input":w("invalid",a),Uf(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":w("invalid",a);break;case"textarea":w("invalid",a),Hf(a,e.value,e.defaultValue,e.children)}l=e.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||e.suppressHydrationWarning===!0||R0(a.textContent,l)?(e.popover!=null&&(w("beforetoggle",a),w("toggle",a)),e.onScroll!=null&&w("scroll",a),e.onScrollEnd!=null&&w("scrollend",a),e.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||el(t,!0)}function vo(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:xa=!1;return;case 27:case 3:xa=!0;return;default:Bt=Bt.return}}function ue(t){if(t!==Bt)return!1;if(!J)return vo(t),J=!0,!1;var a=t.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Lc(t.type,t.memoizedProps)),l=!l),l&&st&&el(t),vo(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=w0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=w0(t)}else a===27?(a=st,bl(t.type)?(t=kc,kc=null,st=t):st=a):st=Bt?za(t.stateNode.nextSibling):null;return!0}function Nl(){st=Bt=null,J=!1}function Oi(){var t=ll;return t!==null&&(It===null?It=t:It.push.apply(It,t),ll=null),t}function Ze(t){ll===null?ll=[t]:ll.push(t)}var _i=s(null),Hl=null,qa=null;function ul(t,a,l){T(_i,a._currentValue),a._currentValue=l}function Ga(t){t._currentValue=_i.current,x(_i)}function Mi(t,a,l){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===l)break;t=t.return}}function Di(t,a,l,e){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<a.length;f++)if(c.context===a[f]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Mi(n.return,l,t),e||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(p(341));i.lanes|=l,n=i.alternate,n!==null&&(n.lanes|=l),Mi(i,l,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ne(t,a,l,e){t=null;for(var u=a,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var c=u.type;na(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===at.current){if(i=u.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(gu):t=[gu])}u=u.return}t!==null&&Di(a,t,l,e),a.flags|=262144}function Lu(t){for(t=t.firstContext;t!==null;){if(!na(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jl(t){Hl=t,qa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return xo(Hl,t)}function wu(t,a){return Hl===null&&jl(t),xo(t,a)}function xo(t,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},qa===null){if(t===null)throw Error(p(308));qa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else qa=qa.next=a;return l}var Nd=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(l,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(l){return l()})}},Hd=A.unstable_scheduleCallback,jd=A.unstable_NormalPriority,St={$$typeof:At,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Nd,data:new Map,refCount:0}}function Le(t){t.refCount--,t.refCount===0&&Hd(jd,function(){t.controller.abort()})}var we=null,Ni=0,ie=0,ce=null;function Yd(t,a){if(we===null){var l=we=[];Ni=0,ie=Yc(),ce={status:"pending",value:void 0,then:function(e){l.push(e)}}}return Ni++,a.then(So,So),a}function So(){if(--Ni===0&&we!==null){ce!==null&&(ce.status="fulfilled");var t=we;we=null,ie=0,ce=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Rd(t,a){var l=[],e={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var u=0;u<l.length;u++)(0,l[u])(a)},function(u){for(e.status="rejected",e.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),e}var zo=r.S;r.S=function(t,a){n0=la(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Yd(t,a),zo!==null&&zo(t,a)};var Yl=s(null);function Hi(){var t=Yl.current;return t!==null?t:ct.pooledCache}function Vu(t,a){a===null?T(Yl,Yl.current):T(Yl,a.pool)}function Eo(){var t=Hi();return t===null?null:{parent:St._currentValue,pool:t}}var fe=Error(p(460)),ji=Error(p(474)),Ku=Error(p(542)),Ju={then:function(){}};function To(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ao(t,a,l){switch(l=t[l],l===void 0?t.push(a):l!==a&&(a.then(Ya,Ya),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,_o(t),t;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=e}},function(e){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,_o(t),t}throw Cl=a,fe}}function Rl(t){try{var a=t._init;return a(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Cl=l,fe):l}}var Cl=null;function Oo(){if(Cl===null)throw Error(p(459));var t=Cl;return Cl=null,t}function _o(t){if(t===fe||t===Ku)throw Error(p(483))}var oe=null,Ve=0;function ku(t){var a=Ve;return Ve+=1,oe===null&&(oe=[]),Ao(oe,t,a)}function Ke(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Wu(t,a){throw a.$$typeof===ft?Error(p(525)):(t=Object.prototype.toString.call(a),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Mo(t){function a(d,o){if(t){var h=d.deletions;h===null?(d.deletions=[o],d.flags|=16):h.push(o)}}function l(d,o){if(!t)return null;for(;o!==null;)a(d,o),o=o.sibling;return null}function e(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function u(d,o){return d=Ca(d,o),d.index=0,d.sibling=null,d}function n(d,o,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<o?(d.flags|=67108866,o):h):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,h,v){return o===null||o.tag!==6?(o=Si(h,d.mode,v),o.return=d,o):(o=u(o,h),o.return=d,o)}function f(d,o,h,v){var H=h.type;return H===ot?y(d,o,h.props.children,v,h.key):o!==null&&(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===jt&&Rl(H)===o.type)?(o=u(o,h.props),Ke(o,h),o.return=d,o):(o=Qu(h.type,h.key,h.props,null,d.mode,v),Ke(o,h),o.return=d,o)}function m(d,o,h,v){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=zi(h,d.mode,v),o.return=d,o):(o=u(o,h.children||[]),o.return=d,o)}function y(d,o,h,v,H){return o===null||o.tag!==7?(o=Ul(h,d.mode,v,H),o.return=d,o):(o=u(o,h),o.return=d,o)}function S(d,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Si(""+o,d.mode,h),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Lt:return h=Qu(o.type,o.key,o.props,null,d.mode,h),Ke(h,o),h.return=d,h;case Nt:return o=zi(o,d.mode,h),o.return=d,o;case jt:return o=Rl(o),S(d,o,h)}if(aa(o)||Rt(o))return o=Ul(o,d.mode,h,null),o.return=d,o;if(typeof o.then=="function")return S(d,ku(o),h);if(o.$$typeof===At)return S(d,wu(d,o),h);Wu(d,o)}return null}function g(d,o,h,v){var H=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:c(d,o,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Lt:return h.key===H?f(d,o,h,v):null;case Nt:return h.key===H?m(d,o,h,v):null;case jt:return h=Rl(h),g(d,o,h,v)}if(aa(h)||Rt(h))return H!==null?null:y(d,o,h,v,null);if(typeof h.then=="function")return g(d,o,ku(h),v);if(h.$$typeof===At)return g(d,o,wu(d,h),v);Wu(d,h)}return null}function b(d,o,h,v,H){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return d=d.get(h)||null,c(o,d,""+v,H);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lt:return d=d.get(v.key===null?h:v.key)||null,f(o,d,v,H);case Nt:return d=d.get(v.key===null?h:v.key)||null,m(o,d,v,H);case jt:return v=Rl(v),b(d,o,h,v,H)}if(aa(v)||Rt(v))return d=d.get(h)||null,y(o,d,v,H,null);if(typeof v.then=="function")return b(d,o,h,ku(v),H);if(v.$$typeof===At)return b(d,o,h,wu(o,v),H);Wu(o,v)}return null}function _(d,o,h,v){for(var H=null,I=null,D=o,X=o=0,K=null;D!==null&&X<h.length;X++){D.index>X?(K=D,D=null):K=D.sibling;var P=g(d,D,h[X],v);if(P===null){D===null&&(D=K);break}t&&D&&P.alternate===null&&a(d,D),o=n(P,o,X),I===null?H=P:I.sibling=P,I=P,D=K}if(X===h.length)return l(d,D),J&&Ba(d,X),H;if(D===null){for(;X<h.length;X++)D=S(d,h[X],v),D!==null&&(o=n(D,o,X),I===null?H=D:I.sibling=D,I=D);return J&&Ba(d,X),H}for(D=e(D);X<h.length;X++)K=b(D,d,X,h[X],v),K!==null&&(t&&K.alternate!==null&&D.delete(K.key===null?X:K.key),o=n(K,o,X),I===null?H=K:I.sibling=K,I=K);return t&&D.forEach(function(zl){return a(d,zl)}),J&&Ba(d,X),H}function Y(d,o,h,v){if(h==null)throw Error(p(151));for(var H=null,I=null,D=o,X=o=0,K=null,P=h.next();D!==null&&!P.done;X++,P=h.next()){D.index>X?(K=D,D=null):K=D.sibling;var zl=g(d,D,P.value,v);if(zl===null){D===null&&(D=K);break}t&&D&&zl.alternate===null&&a(d,D),o=n(zl,o,X),I===null?H=zl:I.sibling=zl,I=zl,D=K}if(P.done)return l(d,D),J&&Ba(d,X),H;if(D===null){for(;!P.done;X++,P=h.next())P=S(d,P.value,v),P!==null&&(o=n(P,o,X),I===null?H=P:I.sibling=P,I=P);return J&&Ba(d,X),H}for(D=e(D);!P.done;X++,P=h.next())P=b(D,d,X,P.value,v),P!==null&&(t&&P.alternate!==null&&D.delete(P.key===null?X:P.key),o=n(P,o,X),I===null?H=P:I.sibling=P,I=P);return t&&D.forEach(function(Kh){return a(d,Kh)}),J&&Ba(d,X),H}function it(d,o,h,v){if(typeof h=="object"&&h!==null&&h.type===ot&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Lt:t:{for(var H=h.key;o!==null;){if(o.key===H){if(H=h.type,H===ot){if(o.tag===7){l(d,o.sibling),v=u(o,h.props.children),v.return=d,d=v;break t}}else if(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===jt&&Rl(H)===o.type){l(d,o.sibling),v=u(o,h.props),Ke(v,h),v.return=d,d=v;break t}l(d,o);break}else a(d,o);o=o.sibling}h.type===ot?(v=Ul(h.props.children,d.mode,v,h.key),v.return=d,d=v):(v=Qu(h.type,h.key,h.props,null,d.mode,v),Ke(v,h),v.return=d,d=v)}return i(d);case Nt:t:{for(H=h.key;o!==null;){if(o.key===H)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(d,o.sibling),v=u(o,h.children||[]),v.return=d,d=v;break t}else{l(d,o);break}else a(d,o);o=o.sibling}v=zi(h,d.mode,v),v.return=d,d=v}return i(d);case jt:return h=Rl(h),it(d,o,h,v)}if(aa(h))return _(d,o,h,v);if(Rt(h)){if(H=Rt(h),typeof H!="function")throw Error(p(150));return h=H.call(h),Y(d,o,h,v)}if(typeof h.then=="function")return it(d,o,ku(h),v);if(h.$$typeof===At)return it(d,o,wu(d,h),v);Wu(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(d,o.sibling),v=u(o,h),v.return=d,d=v):(l(d,o),v=Si(h,d.mode,v),v.return=d,d=v),i(d)):l(d,o)}return function(d,o,h,v){try{Ve=0;var H=it(d,o,h,v);return oe=null,H}catch(D){if(D===fe||D===Ku)throw D;var I=ia(29,D,null,d.mode);return I.lanes=v,I.return=d,I}}}var Bl=Mo(!0),Do=Mo(!1),nl=!1;function Yi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ri(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function il(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function cl(t,a,l){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(tt&2)!==0){var u=e.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),e.pending=a,a=Xu(t),ro(t,null,l),a}return Gu(t,e,a,l),Xu(t)}function Je(t,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,vf(t,l)}}function Ci(t,a){var l=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,l===e)){var u=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,l=l.next}while(l!==null);n===null?u=n=a:n=n.next=a}else u=n=a;l={baseState:e.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=a:t.next=a,l.lastBaseUpdate=a}var Bi=!1;function ke(){if(Bi){var t=ce;if(t!==null)throw t}}function We(t,a,l,e){Bi=!1;var u=t.updateQueue;nl=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=f))}if(n!==null){var S=u.baseState;i=0,y=m=f=null,c=n;do{var g=c.lane&-536870913,b=g!==c.lane;if(b?(V&g)===g:(e&g)===g){g!==0&&g===ie&&(Bi=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var _=t,Y=c;g=a;var it=l;switch(Y.tag){case 1:if(_=Y.payload,typeof _=="function"){S=_.call(it,S,g);break t}S=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=Y.payload,g=typeof _=="function"?_.call(it,S,g):_,g==null)break t;S=j({},S,g);break t;case 2:nl=!0}}g=c.callback,g!==null&&(t.flags|=64,b&&(t.flags|=8192),b=u.callbacks,b===null?u.callbacks=[g]:b.push(g))}else b={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=b,f=S):y=y.next=b,i|=g;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;b=c,c=b.next,b.next=null,u.lastBaseUpdate=b,u.shared.pending=null}}while(!0);y===null&&(f=S),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=y,n===null&&(u.shared.lanes=0),dl|=i,t.lanes=i,t.memoizedState=S}}function Uo(t,a){if(typeof t!="function")throw Error(p(191,t));t.call(a)}function No(t,a){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Uo(l[t],a)}var se=s(null),$u=s(0);function Ho(t,a){t=ka,T($u,t),T(se,a),ka=t|a.baseLanes}function qi(){T($u,ka),T(se,se.current)}function Gi(){ka=$u.current,x(se),x($u)}var ca=s(null),Sa=null;function fl(t){var a=t.alternate;T(yt,yt.current&1),T(ca,t),Sa===null&&(a===null||se.current!==null||a.memoizedState!==null)&&(Sa=t)}function Xi(t){T(yt,yt.current),T(ca,t),Sa===null&&(Sa=t)}function jo(t){t.tag===22?(T(yt,yt.current),T(ca,t),Sa===null&&(Sa=t)):ol()}function ol(){T(yt,yt.current),T(ca,ca.current)}function fa(t){x(ca),Sa===t&&(Sa=null),x(yt)}var yt=s(0);function Fu(t){for(var a=t;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Kc(l)||Jc(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Xa=0,G=null,ut=null,zt=null,Iu=!1,re=!1,ql=!1,Pu=0,$e=0,de=null,Cd=0;function gt(){throw Error(p(321))}function Qi(t,a){if(a===null)return!1;for(var l=0;l<a.length&&l<t.length;l++)if(!na(t[l],a[l]))return!1;return!0}function Zi(t,a,l,e,u,n){return Xa=n,G=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,r.H=t===null||t.memoizedState===null?ps:ec,ql=!1,n=l(e,u),ql=!1,re&&(n=Ro(a,l,e,u)),Yo(t),n}function Yo(t){r.H=Pe;var a=ut!==null&&ut.next!==null;if(Xa=0,zt=ut=G=null,Iu=!1,$e=0,de=null,a)throw Error(p(300));t===null||Et||(t=t.dependencies,t!==null&&Lu(t)&&(Et=!0))}function Ro(t,a,l,e){G=t;var u=0;do{if(re&&(de=null),$e=0,re=!1,25<=u)throw Error(p(301));if(u+=1,zt=ut=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}r.H=bs,n=a(l,e)}while(re);return n}function Bd(){var t=r.H,a=t.useState()[0];return a=typeof a.then=="function"?Fe(a):a,t=t.useState()[0],(ut!==null?ut.memoizedState:null)!==t&&(G.flags|=1024),a}function Li(){var t=Pu!==0;return Pu=0,t}function wi(t,a,l){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l}function Vi(t){if(Iu){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Iu=!1}Xa=0,zt=ut=G=null,re=!1,$e=Pu=0,de=null}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?G.memoizedState=zt=t:zt=zt.next=t,zt}function vt(){if(ut===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var a=zt===null?G.memoizedState:zt.next;if(a!==null)zt=a,ut=t;else{if(t===null)throw G.alternate===null?Error(p(467)):Error(p(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},zt===null?G.memoizedState=zt=t:zt=zt.next=t}return zt}function tn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fe(t){var a=$e;return $e+=1,de===null&&(de=[]),t=Ao(de,t,a),a=G,(zt===null?a.memoizedState:zt.next)===null&&(a=a.alternate,r.H=a===null||a.memoizedState===null?ps:ec),t}function an(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fe(t);if(t.$$typeof===At)return qt(t)}throw Error(p(438,String(t)))}function Ki(t){var a=null,l=G.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var e=G.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=tn(),G.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(t),e=0;e<t;e++)l[e]=Fa;return a.index++,l}function Qa(t,a){return typeof a=="function"?a(t):a}function ln(t){var a=vt();return Ji(a,ut,t)}function Ji(t,a,l){var e=t.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=l;var u=t.baseQueue,n=e.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}a.baseQueue=u=n,e.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{a=u.next;var c=i=null,f=null,m=a,y=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(V&S)===S:(Xa&S)===S){var g=m.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===ie&&(y=!0);else if((Xa&g)===g){m=m.next,g===ie&&(y=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=S,i=n):f=f.next=S,G.lanes|=g,dl|=g;S=m.action,ql&&l(n,S),n=m.hasEagerState?m.eagerState:l(n,S)}else g={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=g,i=n):f=f.next=g,G.lanes|=S,dl|=S;m=m.next}while(m!==null&&m!==a);if(f===null?i=n:f.next=c,!na(n,t.memoizedState)&&(Et=!0,y&&(l=ce,l!==null)))throw l;t.memoizedState=n,t.baseState=i,t.baseQueue=f,e.lastRenderedState=n}return u===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function ki(t){var a=vt(),l=a.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=t;var e=l.dispatch,u=l.pending,n=a.memoizedState;if(u!==null){l.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);na(n,a.memoizedState)||(Et=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),l.lastRenderedState=n}return[n,e]}function Co(t,a,l){var e=G,u=vt(),n=J;if(n){if(l===void 0)throw Error(p(407));l=l()}else l=a();var i=!na((ut||u).memoizedState,l);if(i&&(u.memoizedState=l,Et=!0),u=u.queue,Fi(Go.bind(null,e,u,t),[t]),u.getSnapshot!==a||i||zt!==null&&zt.memoizedState.tag&1){if(e.flags|=2048,he(9,{destroy:void 0},qo.bind(null,e,u,l,a),null),ct===null)throw Error(p(349));n||(Xa&127)!==0||Bo(e,a,l)}return l}function Bo(t,a,l){t.flags|=16384,t={getSnapshot:a,value:l},a=G.updateQueue,a===null?(a=tn(),G.updateQueue=a,a.stores=[t]):(l=a.stores,l===null?a.stores=[t]:l.push(t))}function qo(t,a,l,e){a.value=l,a.getSnapshot=e,Xo(a)&&Qo(t)}function Go(t,a,l){return l(function(){Xo(a)&&Qo(t)})}function Xo(t){var a=t.getSnapshot;t=t.value;try{var l=a();return!na(t,l)}catch{return!0}}function Qo(t){var a=Dl(t,2);a!==null&&Pt(a,t,2)}function Wi(t){var a=Vt();if(typeof t=="function"){var l=t;if(t=l(),ql){Ia(!0);try{l()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},a}function Zo(t,a,l,e){return t.baseState=l,Ji(t,ut,typeof e=="function"?e:Qa)}function qd(t,a,l,e,u){if(nn(t))throw Error(p(485));if(t=a.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};r.T!==null?l(!0):n.isTransition=!1,e(n),l=a.pending,l===null?(n.next=a.pending=n,Lo(a,n)):(n.next=l.next,a.pending=l.next=n)}}function Lo(t,a){var l=a.action,e=a.payload,u=t.state;if(a.isTransition){var n=r.T,i={};r.T=i;try{var c=l(u,e),f=r.S;f!==null&&f(i,c),wo(t,a,c)}catch(m){$i(t,a,m)}finally{n!==null&&i.types!==null&&(n.types=i.types),r.T=n}}else try{n=l(u,e),wo(t,a,n)}catch(m){$i(t,a,m)}}function wo(t,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(e){Vo(t,a,e)},function(e){return $i(t,a,e)}):Vo(t,a,l)}function Vo(t,a,l){a.status="fulfilled",a.value=l,Ko(a),t.state=l,a=t.pending,a!==null&&(l=a.next,l===a?t.pending=null:(l=l.next,a.next=l,Lo(t,l)))}function $i(t,a,l){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=l,Ko(a),a=a.next;while(a!==e)}t.action=null}function Ko(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Jo(t,a){return a}function ko(t,a){if(J){var l=ct.formState;if(l!==null){t:{var e=G;if(J){if(st){a:{for(var u=st,n=xa;u.nodeType!==8;){if(!n){u=null;break a}if(u=za(u.nextSibling),u===null){u=null;break a}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){st=za(u.nextSibling),e=u.data==="F!";break t}}el(e)}e=!1}e&&(a=l[0])}}return l=Vt(),l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:a},l.queue=e,l=hs.bind(null,G,e),e.dispatch=l,e=Wi(!1),n=lc.bind(null,G,!1,e.queue),e=Vt(),u={state:a,dispatch:null,action:t,pending:null},e.queue=u,l=qd.bind(null,G,u,n,l),u.dispatch=l,e.memoizedState=t,[a,l,!1]}function Wo(t){var a=vt();return $o(a,ut,t)}function $o(t,a,l){if(a=Ji(t,a,Jo)[0],t=ln(Qa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=Fe(a)}catch(i){throw i===fe?Ku:i}else e=a;a=vt();var u=a.queue,n=u.dispatch;return l!==a.memoizedState&&(G.flags|=2048,he(9,{destroy:void 0},Gd.bind(null,u,l),null)),[e,n,t]}function Gd(t,a){t.action=a}function Fo(t){var a=vt(),l=ut;if(l!==null)return $o(a,l,t);vt(),a=a.memoizedState,l=vt();var e=l.queue.dispatch;return l.memoizedState=t,[a,e,!1]}function he(t,a,l,e){return t={tag:t,create:l,deps:e,inst:a,next:null},a=G.updateQueue,a===null&&(a=tn(),G.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=t.next=t:(e=l.next,l.next=t,t.next=e,a.lastEffect=t),t}function Io(){return vt().memoizedState}function en(t,a,l,e){var u=Vt();G.flags|=t,u.memoizedState=he(1|a,{destroy:void 0},l,e===void 0?null:e)}function un(t,a,l,e){var u=vt();e=e===void 0?null:e;var n=u.memoizedState.inst;ut!==null&&e!==null&&Qi(e,ut.memoizedState.deps)?u.memoizedState=he(a,n,l,e):(G.flags|=t,u.memoizedState=he(1|a,n,l,e))}function Po(t,a){en(8390656,8,t,a)}function Fi(t,a){un(2048,8,t,a)}function Xd(t){G.flags|=4;var a=G.updateQueue;if(a===null)a=tn(),G.updateQueue=a,a.events=[t];else{var l=a.events;l===null?a.events=[t]:l.push(t)}}function ts(t){var a=vt().memoizedState;return Xd({ref:a,nextImpl:t}),function(){if((tt&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function as(t,a){return un(4,2,t,a)}function ls(t,a){return un(4,4,t,a)}function es(t,a){if(typeof a=="function"){t=t();var l=a(t);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function us(t,a,l){l=l!=null?l.concat([t]):null,un(4,4,es.bind(null,a,t),l)}function Ii(){}function ns(t,a){var l=vt();a=a===void 0?null:a;var e=l.memoizedState;return a!==null&&Qi(a,e[1])?e[0]:(l.memoizedState=[t,a],t)}function is(t,a){var l=vt();a=a===void 0?null:a;var e=l.memoizedState;if(a!==null&&Qi(a,e[1]))return e[0];if(e=t(),ql){Ia(!0);try{t()}finally{Ia(!1)}}return l.memoizedState=[e,a],e}function Pi(t,a,l){return l===void 0||(Xa&1073741824)!==0&&(V&261930)===0?t.memoizedState=a:(t.memoizedState=l,t=c0(),G.lanes|=t,dl|=t,l)}function cs(t,a,l,e){return na(l,a)?l:se.current!==null?(t=Pi(t,l,e),na(t,a)||(Et=!0),t):(Xa&42)===0||(Xa&1073741824)!==0&&(V&261930)===0?(Et=!0,t.memoizedState=l):(t=c0(),G.lanes|=t,dl|=t,a)}function fs(t,a,l,e,u){var n=z.p;z.p=n!==0&&8>n?n:8;var i=r.T,c={};r.T=c,lc(t,!1,a,l);try{var f=u(),m=r.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=Rd(f,e);Ie(t,a,y,ra(t))}else Ie(t,a,e,ra(t))}catch(S){Ie(t,a,{then:function(){},status:"rejected",reason:S},ra())}finally{z.p=n,i!==null&&c.types!==null&&(i.types=c.types),r.T=i}}function Qd(){}function tc(t,a,l,e){if(t.tag!==5)throw Error(p(476));var u=os(t).queue;fs(t,u,a,O,l===null?Qd:function(){return ss(t),l(e)})}function os(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:O},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:l},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function ss(t){var a=os(t);a.next===null&&(a=t.alternate.memoizedState),Ie(t,a.next.queue,{},ra())}function ac(){return qt(gu)}function rs(){return vt().memoizedState}function ds(){return vt().memoizedState}function Zd(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var l=ra();t=il(l);var e=cl(a,t,l);e!==null&&(Pt(e,a,l),Je(e,a,l)),a={cache:Ui()},t.payload=a;return}a=a.return}}function Ld(t,a,l){var e=ra();l={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nn(t)?ms(a,l):(l=vi(t,a,l,e),l!==null&&(Pt(l,t,e),gs(l,a,e)))}function hs(t,a,l){var e=ra();Ie(t,a,l,e)}function Ie(t,a,l,e){var u={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(nn(t))ms(a,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var i=a.lastRenderedState,c=n(i,l);if(u.hasEagerState=!0,u.eagerState=c,na(c,i))return Gu(t,a,u,0),ct===null&&qu(),!1}catch{}if(l=vi(t,a,u,e),l!==null)return Pt(l,t,e),gs(l,a,e),!0}return!1}function lc(t,a,l,e){if(e={lane:2,revertLane:Yc(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},nn(t)){if(a)throw Error(p(479))}else a=vi(t,l,e,2),a!==null&&Pt(a,t,2)}function nn(t){var a=t.alternate;return t===G||a!==null&&a===G}function ms(t,a){re=Iu=!0;var l=t.pending;l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a}function gs(t,a,l){if((l&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,vf(t,l)}}var Pe={readContext:qt,use:an,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt};Pe.useEffectEvent=gt;var ps={readContext:qt,use:an,useCallback:function(t,a){return Vt().memoizedState=[t,a===void 0?null:a],t},useContext:qt,useEffect:Po,useImperativeHandle:function(t,a,l){l=l!=null?l.concat([t]):null,en(4194308,4,es.bind(null,a,t),l)},useLayoutEffect:function(t,a){return en(4194308,4,t,a)},useInsertionEffect:function(t,a){en(4,2,t,a)},useMemo:function(t,a){var l=Vt();a=a===void 0?null:a;var e=t();if(ql){Ia(!0);try{t()}finally{Ia(!1)}}return l.memoizedState=[e,a],e},useReducer:function(t,a,l){var e=Vt();if(l!==void 0){var u=l(a);if(ql){Ia(!0);try{l(a)}finally{Ia(!1)}}}else u=a;return e.memoizedState=e.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},e.queue=t,t=t.dispatch=Ld.bind(null,G,t),[e.memoizedState,t]},useRef:function(t){var a=Vt();return t={current:t},a.memoizedState=t},useState:function(t){t=Wi(t);var a=t.queue,l=hs.bind(null,G,a);return a.dispatch=l,[t.memoizedState,l]},useDebugValue:Ii,useDeferredValue:function(t,a){var l=Vt();return Pi(l,t,a)},useTransition:function(){var t=Wi(!1);return t=fs.bind(null,G,t.queue,!0,!1),Vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,l){var e=G,u=Vt();if(J){if(l===void 0)throw Error(p(407));l=l()}else{if(l=a(),ct===null)throw Error(p(349));(V&127)!==0||Bo(e,a,l)}u.memoizedState=l;var n={value:l,getSnapshot:a};return u.queue=n,Po(Go.bind(null,e,n,t),[t]),e.flags|=2048,he(9,{destroy:void 0},qo.bind(null,e,n,l,a),null),l},useId:function(){var t=Vt(),a=ct.identifierPrefix;if(J){var l=Da,e=Ma;l=(e&~(1<<32-ua(e)-1)).toString(32)+l,a="_"+a+"R_"+l,l=Pu++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=Cd++,a="_"+a+"r_"+l.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:ac,useFormState:ko,useActionState:ko,useOptimistic:function(t){var a=Vt();a.memoizedState=a.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=lc.bind(null,G,!0,l),l.dispatch=a,[t,a]},useMemoCache:Ki,useCacheRefresh:function(){return Vt().memoizedState=Zd.bind(null,G)},useEffectEvent:function(t){var a=Vt(),l={impl:t};return a.memoizedState=l,function(){if((tt&2)!==0)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},ec={readContext:qt,use:an,useCallback:ns,useContext:qt,useEffect:Fi,useImperativeHandle:us,useInsertionEffect:as,useLayoutEffect:ls,useMemo:is,useReducer:ln,useRef:Io,useState:function(){return ln(Qa)},useDebugValue:Ii,useDeferredValue:function(t,a){var l=vt();return cs(l,ut.memoizedState,t,a)},useTransition:function(){var t=ln(Qa)[0],a=vt().memoizedState;return[typeof t=="boolean"?t:Fe(t),a]},useSyncExternalStore:Co,useId:rs,useHostTransitionStatus:ac,useFormState:Wo,useActionState:Wo,useOptimistic:function(t,a){var l=vt();return Zo(l,ut,t,a)},useMemoCache:Ki,useCacheRefresh:ds};ec.useEffectEvent=ts;var bs={readContext:qt,use:an,useCallback:ns,useContext:qt,useEffect:Fi,useImperativeHandle:us,useInsertionEffect:as,useLayoutEffect:ls,useMemo:is,useReducer:ki,useRef:Io,useState:function(){return ki(Qa)},useDebugValue:Ii,useDeferredValue:function(t,a){var l=vt();return ut===null?Pi(l,t,a):cs(l,ut.memoizedState,t,a)},useTransition:function(){var t=ki(Qa)[0],a=vt().memoizedState;return[typeof t=="boolean"?t:Fe(t),a]},useSyncExternalStore:Co,useId:rs,useHostTransitionStatus:ac,useFormState:Fo,useActionState:Fo,useOptimistic:function(t,a){var l=vt();return ut!==null?Zo(l,ut,t,a):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:ds};bs.useEffectEvent=ts;function uc(t,a,l,e){a=t.memoizedState,l=l(e,a),l=l==null?a:j({},a,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var nc={enqueueSetState:function(t,a,l){t=t._reactInternals;var e=ra(),u=il(e);u.payload=a,l!=null&&(u.callback=l),a=cl(t,u,e),a!==null&&(Pt(a,t,e),Je(a,t,e))},enqueueReplaceState:function(t,a,l){t=t._reactInternals;var e=ra(),u=il(e);u.tag=1,u.payload=a,l!=null&&(u.callback=l),a=cl(t,u,e),a!==null&&(Pt(a,t,e),Je(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var l=ra(),e=il(l);e.tag=2,a!=null&&(e.callback=a),a=cl(t,e,l),a!==null&&(Pt(a,t,l),Je(a,t,l))}};function ys(t,a,l,e,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,i):a.prototype&&a.prototype.isPureReactComponent?!Ge(l,e)||!Ge(u,n):!0}function vs(t,a,l,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,e),a.state!==t&&nc.enqueueReplaceState(a,a.state,null)}function Gl(t,a){var l=a;if("ref"in a){l={};for(var e in a)e!=="ref"&&(l[e]=a[e])}if(t=t.defaultProps){l===a&&(l=j({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function xs(t){Bu(t)}function Ss(t){console.error(t)}function zs(t){Bu(t)}function cn(t,a){try{var l=t.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Es(t,a,l){try{var e=t.onCaughtError;e(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ic(t,a,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){cn(t,a)},l}function Ts(t){return t=il(t),t.tag=3,t}function As(t,a,l,e){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var n=e.value;t.payload=function(){return u(n)},t.callback=function(){Es(a,l,e)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Es(a,l,e),typeof u!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function wd(t,a,l,e,u){if(l.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=l.alternate,a!==null&&ne(a,l,u,!0),l=ca.current,l!==null){switch(l.tag){case 31:case 13:return Sa===null?vn():l.alternate===null&&pt===0&&(pt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,e===Ju?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([e]):a.add(e),Nc(t,e,u)),!1;case 22:return l.flags|=65536,e===Ju?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([e]):l.add(e)),Nc(t,e,u)),!1}throw Error(p(435,l.tag))}return Nc(t,e,u),vn(),!1}if(J)return a=ca.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,e!==Ai&&(t=Error(p(422),{cause:e}),Ze(ba(t,l)))):(e!==Ai&&(a=Error(p(423),{cause:e}),Ze(ba(a,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,e=ba(e,l),u=ic(t.stateNode,e,u),Ci(t,u),pt!==4&&(pt=2)),!1;var n=Error(p(520),{cause:e});if(n=ba(n,l),cu===null?cu=[n]:cu.push(n),pt!==4&&(pt=2),a===null)return!0;e=ba(e,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=ic(l.stateNode,e,t),Ci(l,t),!1;case 1:if(a=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(hl===null||!hl.has(n))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ts(u),As(u,t,l,e),Ci(l,u),!1}l=l.return}while(l!==null);return!1}var cc=Error(p(461)),Et=!1;function Gt(t,a,l,e){a.child=t===null?Do(a,null,l,e):Bl(a,t.child,l,e)}function Os(t,a,l,e,u){l=l.render;var n=a.ref;if("ref"in e){var i={};for(var c in e)c!=="ref"&&(i[c]=e[c])}else i=e;return jl(a),e=Zi(t,a,l,i,n,u),c=Li(),t!==null&&!Et?(wi(t,a,u),Za(t,a,u)):(J&&c&&Ei(a),a.flags|=1,Gt(t,a,e,u),a.child)}function _s(t,a,l,e,u){if(t===null){var n=l.type;return typeof n=="function"&&!xi(n)&&n.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=n,Ms(t,a,n,e,u)):(t=Qu(l.type,null,e,a,a.mode,u),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!gc(t,u)){var i=n.memoizedProps;if(l=l.compare,l=l!==null?l:Ge,l(i,e)&&t.ref===a.ref)return Za(t,a,u)}return a.flags|=1,t=Ca(n,e),t.ref=a.ref,t.return=a,a.child=t}function Ms(t,a,l,e,u){if(t!==null){var n=t.memoizedProps;if(Ge(n,e)&&t.ref===a.ref)if(Et=!1,a.pendingProps=e=n,gc(t,u))(t.flags&131072)!==0&&(Et=!0);else return a.lanes=t.lanes,Za(t,a,u)}return fc(t,a,l,e,u)}function Ds(t,a,l,e){var u=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,t!==null){for(e=a.child=t.child,u=0;e!==null;)u=u|e.lanes|e.childLanes,e=e.sibling;e=u&~n}else e=0,a.child=null;return Us(t,a,n,l,e)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vu(a,n!==null?n.cachePool:null),n!==null?Ho(a,n):qi(),jo(a);else return e=a.lanes=536870912,Us(t,a,n!==null?n.baseLanes|l:l,l,e)}else n!==null?(Vu(a,n.cachePool),Ho(a,n),ol(),a.memoizedState=null):(t!==null&&Vu(a,null),qi(),ol());return Gt(t,a,u,l),a.child}function tu(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Us(t,a,l,e,u){var n=Hi();return n=n===null?null:{parent:St._currentValue,pool:n},a.memoizedState={baseLanes:l,cachePool:n},t!==null&&Vu(a,null),qi(),jo(a),t!==null&&ne(t,a,e,!0),a.childLanes=u,null}function fn(t,a){return a=sn({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Ns(t,a,l){return Bl(a,t.child,null,l),t=fn(a,a.pendingProps),t.flags|=2,fa(a),a.memoizedState=null,t}function Vd(t,a,l){var e=a.pendingProps,u=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(J){if(e.mode==="hidden")return t=fn(a,e),a.lanes=536870912,tu(null,t);if(Xi(a),(t=st)?(t=L0(t,xa),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:al!==null?{id:Ma,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},l=mo(t),l.return=a,a.child=l,Bt=a,st=null)):t=null,t===null)throw el(a);return a.lanes=536870912,null}return fn(a,e)}var n=t.memoizedState;if(n!==null){var i=n.dehydrated;if(Xi(a),u)if(a.flags&256)a.flags&=-257,a=Ns(t,a,l);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(p(558));else if(Et||ne(t,a,l,!1),u=(l&t.childLanes)!==0,Et||u){if(e=ct,e!==null&&(i=xf(e,l),i!==0&&i!==n.retryLane))throw n.retryLane=i,Dl(t,i),Pt(e,t,i),cc;vn(),a=Ns(t,a,l)}else t=n.treeContext,st=za(i.nextSibling),Bt=a,J=!0,ll=null,xa=!1,t!==null&&bo(a,t),a=fn(a,e),a.flags|=4096;return a}return t=Ca(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function on(t,a){var l=a.ref;if(l===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(t===null||t.ref!==l)&&(a.flags|=4194816)}}function fc(t,a,l,e,u){return jl(a),l=Zi(t,a,l,e,void 0,u),e=Li(),t!==null&&!Et?(wi(t,a,u),Za(t,a,u)):(J&&e&&Ei(a),a.flags|=1,Gt(t,a,l,u),a.child)}function Hs(t,a,l,e,u,n){return jl(a),a.updateQueue=null,l=Ro(a,e,l,u),Yo(t),e=Li(),t!==null&&!Et?(wi(t,a,n),Za(t,a,n)):(J&&e&&Ei(a),a.flags|=1,Gt(t,a,l,n),a.child)}function js(t,a,l,e,u){if(jl(a),a.stateNode===null){var n=ae,i=l.contextType;typeof i=="object"&&i!==null&&(n=qt(i)),n=new l(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=nc,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},Yi(a),i=l.contextType,n.context=typeof i=="object"&&i!==null?qt(i):ae,n.state=a.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(uc(a,l,i,e),n.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&nc.enqueueReplaceState(n,n.state,null),We(a,e,n,u),ke(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var c=a.memoizedProps,f=Gl(l,c);n.props=f;var m=n.context,y=l.contextType;i=ae,typeof y=="object"&&y!==null&&(i=qt(y));var S=l.getDerivedStateFromProps;y=typeof S=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,y||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&vs(a,n,e,i),nl=!1;var g=a.memoizedState;n.state=g,We(a,e,n,u),ke(),m=a.memoizedState,c||g!==m||nl?(typeof S=="function"&&(uc(a,l,S,e),m=a.memoizedState),(f=nl||ys(a,l,f,e,g,m,i))?(y||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=m),n.props=e,n.state=m,n.context=i,e=f):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,Ri(t,a),i=a.memoizedProps,y=Gl(l,i),n.props=y,S=a.pendingProps,g=n.context,m=l.contextType,f=ae,typeof m=="object"&&m!==null&&(f=qt(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==S||g!==f)&&vs(a,n,e,f),nl=!1,g=a.memoizedState,n.state=g,We(a,e,n,u),ke();var b=a.memoizedState;i!==S||g!==b||nl||t!==null&&t.dependencies!==null&&Lu(t.dependencies)?(typeof c=="function"&&(uc(a,l,c,e),b=a.memoizedState),(y=nl||ys(a,l,y,e,g,b,f)||t!==null&&t.dependencies!==null&&Lu(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,b,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,b,f)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=b),n.props=e,n.state=b,n.context=f,e=y):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,on(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,l=e&&typeof l.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=Bl(a,t.child,null,u),a.child=Bl(a,null,l,u)):Gt(t,a,l,u),a.memoizedState=n.state,t=a.child):t=Za(t,a,u),t}function Ys(t,a,l,e){return Nl(),a.flags|=256,Gt(t,a,l,e),a.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Eo()}}function rc(t,a,l){return t=t!==null?t.childLanes&~l:0,a&&(t|=sa),t}function Rs(t,a,l){var e=a.pendingProps,u=!1,n=(a.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(yt.current&2)!==0),i&&(u=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,t===null){if(J){if(u?fl(a):ol(),(t=st)?(t=L0(t,xa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:al!==null?{id:Ma,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},l=mo(t),l.return=a,a.child=l,Bt=a,st=null)):t=null,t===null)throw el(a);return Jc(t)?a.lanes=32:a.lanes=536870912,null}var c=e.children;return e=e.fallback,u?(ol(),u=a.mode,c=sn({mode:"hidden",children:c},u),e=Ul(e,u,l,null),c.return=a,e.return=a,c.sibling=e,a.child=c,e=a.child,e.memoizedState=sc(l),e.childLanes=rc(t,i,l),a.memoizedState=oc,tu(null,e)):(fl(a),dc(a,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)a.flags&256?(fl(a),a.flags&=-257,a=hc(t,a,l)):a.memoizedState!==null?(ol(),a.child=t.child,a.flags|=128,a=null):(ol(),c=e.fallback,u=a.mode,e=sn({mode:"visible",children:e.children},u),c=Ul(c,u,l,null),c.flags|=2,e.return=a,c.return=a,e.sibling=c,a.child=e,Bl(a,t.child,null,l),e=a.child,e.memoizedState=sc(l),e.childLanes=rc(t,i,l),a.memoizedState=oc,a=tu(null,e));else if(fl(a),Jc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,e=Error(p(419)),e.stack="",e.digest=i,Ze({value:e,source:null,stack:null}),a=hc(t,a,l)}else if(Et||ne(t,a,l,!1),i=(l&t.childLanes)!==0,Et||i){if(i=ct,i!==null&&(e=xf(i,l),e!==0&&e!==f.retryLane))throw f.retryLane=e,Dl(t,e),Pt(i,t,e),cc;Kc(c)||vn(),a=hc(t,a,l)}else Kc(c)?(a.flags|=192,a.child=t.child,a=null):(t=f.treeContext,st=za(c.nextSibling),Bt=a,J=!0,ll=null,xa=!1,t!==null&&bo(a,t),a=dc(a,e.children),a.flags|=4096);return a}return u?(ol(),c=e.fallback,u=a.mode,f=t.child,m=f.sibling,e=Ca(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=Ca(m,c):(c=Ul(c,u,l,null),c.flags|=2),c.return=a,e.return=a,e.sibling=c,a.child=e,tu(null,e),e=a.child,c=t.child.memoizedState,c===null?c=sc(l):(u=c.cachePool,u!==null?(f=St._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Eo(),c={baseLanes:c.baseLanes|l,cachePool:u}),e.memoizedState=c,e.childLanes=rc(t,i,l),a.memoizedState=oc,tu(t.child,e)):(fl(a),l=t.child,t=l.sibling,l=Ca(l,{mode:"visible",children:e.children}),l.return=a,l.sibling=null,t!==null&&(i=a.deletions,i===null?(a.deletions=[t],a.flags|=16):i.push(t)),a.child=l,a.memoizedState=null,l)}function dc(t,a){return a=sn({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function sn(t,a){return t=ia(22,t,null,a),t.lanes=0,t}function hc(t,a,l){return Bl(a,t.child,null,l),t=dc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Cs(t,a,l){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Mi(t.return,a,l)}function mc(t,a,l,e,u,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:l,tailMode:u,treeForkCount:n}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=l,i.tailMode=u,i.treeForkCount=n)}function Bs(t,a,l){var e=a.pendingProps,u=e.revealOrder,n=e.tail;e=e.children;var i=yt.current,c=(i&2)!==0;if(c?(i=i&1|2,a.flags|=128):i&=1,T(yt,i),Gt(t,a,e,l),e=J?Qe:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cs(t,l,a);else if(t.tag===19)Cs(t,l,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=a.child,u=null;l!==null;)t=l.alternate,t!==null&&Fu(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=a.child,a.child=null):(u=l.sibling,l.sibling=null),mc(a,!1,u,l,n,e);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=a.child,a.child=null;u!==null;){if(t=u.alternate,t!==null&&Fu(t)===null){a.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}mc(a,!0,l,null,n,e);break;case"together":mc(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function Za(t,a,l){if(t!==null&&(a.dependencies=t.dependencies),dl|=a.lanes,(l&a.childLanes)===0)if(t!==null){if(ne(t,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(p(153));if(a.child!==null){for(t=a.child,l=Ca(t,t.pendingProps),a.child=l,l.return=a;t.sibling!==null;)t=t.sibling,l=l.sibling=Ca(t,t.pendingProps),l.return=a;l.sibling=null}return a.child}function gc(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Lu(t)))}function Kd(t,a,l){switch(a.tag){case 3:wt(a,a.stateNode.containerInfo),ul(a,St,t.memoizedState.cache),Nl();break;case 27:case 5:Oe(a);break;case 4:wt(a,a.stateNode.containerInfo);break;case 10:ul(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Xi(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(fl(a),a.flags|=128,null):(l&a.child.childLanes)!==0?Rs(t,a,l):(fl(a),t=Za(t,a,l),t!==null?t.sibling:null);fl(a);break;case 19:var u=(t.flags&128)!==0;if(e=(l&a.childLanes)!==0,e||(ne(t,a,l,!1),e=(l&a.childLanes)!==0),u){if(e)return Bs(t,a,l);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),T(yt,yt.current),e)break;return null;case 22:return a.lanes=0,Ds(t,a,l,a.pendingProps);case 24:ul(a,St,t.memoizedState.cache)}return Za(t,a,l)}function qs(t,a,l){if(t!==null)if(t.memoizedProps!==a.pendingProps)Et=!0;else{if(!gc(t,l)&&(a.flags&128)===0)return Et=!1,Kd(t,a,l);Et=(t.flags&131072)!==0}else Et=!1,J&&(a.flags&1048576)!==0&&po(a,Qe,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Rl(a.elementType),a.type=t,typeof t=="function")xi(t)?(e=Gl(t,e),a.tag=1,a=js(null,a,t,e,l)):(a.tag=0,a=fc(null,a,t,e,l));else{if(t!=null){var u=t.$$typeof;if(u===Ht){a.tag=11,a=Os(null,a,t,e,l);break t}else if(u===Q){a.tag=14,a=_s(null,a,t,e,l);break t}}throw a=Ta(t)||t,Error(p(306,a,""))}}return a;case 0:return fc(t,a,a.type,a.pendingProps,l);case 1:return e=a.type,u=Gl(e,a.pendingProps),js(t,a,e,u,l);case 3:t:{if(wt(a,a.stateNode.containerInfo),t===null)throw Error(p(387));e=a.pendingProps;var n=a.memoizedState;u=n.element,Ri(t,a),We(a,e,null,l);var i=a.memoizedState;if(e=i.cache,ul(a,St,e),e!==n.cache&&Di(a,[St],l,!0),ke(),e=i.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Ys(t,a,e,l);break t}else if(e!==u){u=ba(Error(p(424)),a),Ze(u),a=Ys(t,a,e,l);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,st=za(t.firstChild),Bt=a,J=!0,ll=null,xa=!0,l=Do(a,null,e,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Nl(),e===u){a=Za(t,a,l);break t}Gt(t,a,e,l)}a=a.child}return a;case 26:return on(t,a),t===null?(l=W0(a.type,null,a.pendingProps,null))?a.memoizedState=l:J||(l=a.type,t=a.pendingProps,e=On(Z.current).createElement(l),e[Ct]=a,e[Jt]=t,Xt(e,l,t),Mt(e),a.stateNode=e):a.memoizedState=W0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Oe(a),t===null&&J&&(e=a.stateNode=K0(a.type,a.pendingProps,Z.current),Bt=a,xa=!0,u=st,bl(a.type)?(kc=u,st=za(e.firstChild)):st=u),Gt(t,a,a.pendingProps.children,l),on(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&J&&((u=e=st)&&(e=zh(e,a.type,a.pendingProps,xa),e!==null?(a.stateNode=e,Bt=a,st=za(e.firstChild),xa=!1,u=!0):u=!1),u||el(a)),Oe(a),u=a.type,n=a.pendingProps,i=t!==null?t.memoizedProps:null,e=n.children,Lc(u,n)?e=null:i!==null&&Lc(u,i)&&(a.flags|=32),a.memoizedState!==null&&(u=Zi(t,a,Bd,null,null,l),gu._currentValue=u),on(t,a),Gt(t,a,e,l),a.child;case 6:return t===null&&J&&((t=l=st)&&(l=Eh(l,a.pendingProps,xa),l!==null?(a.stateNode=l,Bt=a,st=null,t=!0):t=!1),t||el(a)),null;case 13:return Rs(t,a,l);case 4:return wt(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=Bl(a,null,e,l):Gt(t,a,e,l),a.child;case 11:return Os(t,a,a.type,a.pendingProps,l);case 7:return Gt(t,a,a.pendingProps,l),a.child;case 8:return Gt(t,a,a.pendingProps.children,l),a.child;case 12:return Gt(t,a,a.pendingProps.children,l),a.child;case 10:return e=a.pendingProps,ul(a,a.type,e.value),Gt(t,a,e.children,l),a.child;case 9:return u=a.type._context,e=a.pendingProps.children,jl(a),u=qt(u),e=e(u),a.flags|=1,Gt(t,a,e,l),a.child;case 14:return _s(t,a,a.type,a.pendingProps,l);case 15:return Ms(t,a,a.type,a.pendingProps,l);case 19:return Bs(t,a,l);case 31:return Vd(t,a,l);case 22:return Ds(t,a,l,a.pendingProps);case 24:return jl(a),e=qt(St),t===null?(u=Hi(),u===null&&(u=ct,n=Ui(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=l),u=n),a.memoizedState={parent:e,cache:u},Yi(a),ul(a,St,u)):((t.lanes&l)!==0&&(Ri(t,a),We(a,null,null,l),ke()),u=t.memoizedState,n=a.memoizedState,u.parent!==e?(u={parent:e,cache:e},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),ul(a,St,e)):(e=n.cache,ul(a,St,e),e!==u.cache&&Di(a,[St],l,!0))),Gt(t,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function La(t){t.flags|=4}function pc(t,a,l,e,u){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Cl=Ju,ji}else t.flags&=-16777217}function Gs(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tr(a))if(r0())t.flags|=8192;else throw Cl=Ju,ji}function rn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?bf():536870912,t.lanes|=a,be|=a)}function au(t,a){if(!J)switch(t.tailMode){case"hidden":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function rt(t){var a=t.alternate!==null&&t.alternate.child===t.child,l=0,e=0;if(a)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,e|=u.subtreeFlags&65011712,e|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,e|=u.subtreeFlags,e|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=e,t.childLanes=l,a}function Jd(t,a,l){var e=a.pendingProps;switch(Ti(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return l=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ga(St),bt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ue(a)?La(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Oi())),rt(a),null;case 26:var u=a.type,n=a.memoizedState;return t===null?(La(a),n!==null?(rt(a),Gs(a,n)):(rt(a),pc(a,u,null,e,l))):n?n!==t.memoizedState?(La(a),rt(a),Gs(a,n)):(rt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&La(a),rt(a),pc(a,u,t,e,l)),null;case 27:if(Su(a),l=Z.current,u=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&La(a);else{if(!e){if(a.stateNode===null)throw Error(p(166));return rt(a),null}t=M.current,ue(a)?yo(a):(t=K0(u,e,l),a.stateNode=t,La(a))}return rt(a),null;case 5:if(Su(a),u=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&La(a);else{if(!e){if(a.stateNode===null)throw Error(p(166));return rt(a),null}if(n=M.current,ue(a))yo(a);else{var i=On(Z.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?i.createElement(u,{is:e.is}):i.createElement(u)}}n[Ct]=a,n[Jt]=e;t:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break t;for(;i.sibling===null;){if(i.return===null||i.return===a)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=n;t:switch(Xt(n,u,e),u){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&La(a)}}return rt(a),pc(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,l),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&La(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(p(166));if(t=Z.current,ue(a)){if(t=a.stateNode,l=a.memoizedProps,e=null,u=Bt,u!==null)switch(u.tag){case 27:case 5:e=u.memoizedProps}t[Ct]=a,t=!!(t.nodeValue===l||e!==null&&e.suppressHydrationWarning===!0||R0(t.nodeValue,l)),t||el(a,!0)}else t=On(t).createTextNode(e),t[Ct]=a,a.stateNode=t}return rt(a),null;case 31:if(l=a.memoizedState,t===null||t.memoizedState!==null){if(e=ue(a),l!==null){if(t===null){if(!e)throw Error(p(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[Ct]=a}else Nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),t=!1}else l=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(p(558))}return rt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ue(a),e!==null&&e.dehydrated!==null){if(t===null){if(!u)throw Error(p(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(p(317));u[Ct]=a}else Nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),u=!1}else u=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=l,a):(l=e!==null,t=t!==null&&t.memoizedState!==null,l&&(e=a.child,u=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(u=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==u&&(e.flags|=2048)),l!==t&&l&&(a.child.flags|=8192),rn(a,a.updateQueue),rt(a),null);case 4:return bt(),t===null&&qc(a.stateNode.containerInfo),rt(a),null;case 10:return Ga(a.type),rt(a),null;case 19:if(x(yt),e=a.memoizedState,e===null)return rt(a),null;if(u=(a.flags&128)!==0,n=e.rendering,n===null)if(u)au(e,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Fu(t),n!==null){for(a.flags|=128,au(e,!1),t=n.updateQueue,a.updateQueue=t,rn(a,t),a.subtreeFlags=0,t=l,l=a.child;l!==null;)ho(l,t),l=l.sibling;return T(yt,yt.current&1|2),J&&Ba(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&la()>pn&&(a.flags|=128,u=!0,au(e,!1),a.lanes=4194304)}else{if(!u)if(t=Fu(n),t!==null){if(a.flags|=128,u=!0,t=t.updateQueue,a.updateQueue=t,rn(a,t),au(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!J)return rt(a),null}else 2*la()-e.renderingStartTime>pn&&l!==536870912&&(a.flags|=128,u=!0,au(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=la(),t.sibling=null,l=yt.current,T(yt,u?l&1|2:l&1),J&&Ba(a,e.treeForkCount),t):(rt(a),null);case 22:case 23:return fa(a),Gi(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(l&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),l=a.updateQueue,l!==null&&rn(a,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(a.flags|=2048),t!==null&&x(Yl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ga(St),rt(a),null;case 25:return null;case 30:return null}throw Error(p(156,a.tag))}function kd(t,a){switch(Ti(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ga(St),bt(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Su(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(p(340));Nl()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(fa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Nl()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return x(yt),null;case 4:return bt(),null;case 10:return Ga(a.type),null;case 22:case 23:return fa(a),Gi(),t!==null&&x(Yl),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Ga(St),null;case 25:return null;default:return null}}function Xs(t,a){switch(Ti(a),a.tag){case 3:Ga(St),bt();break;case 26:case 27:case 5:Su(a);break;case 4:bt();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:x(yt);break;case 10:Ga(a.type);break;case 22:case 23:fa(a),Gi(),t!==null&&x(Yl);break;case 24:Ga(St)}}function lu(t,a){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var u=e.next;l=u;do{if((l.tag&t)===t){e=void 0;var n=l.create,i=l.inst;e=n(),i.destroy=e}l=l.next}while(l!==u)}}catch(c){et(a,a.return,c)}}function sl(t,a,l){try{var e=a.updateQueue,u=e!==null?e.lastEffect:null;if(u!==null){var n=u.next;e=n;do{if((e.tag&t)===t){var i=e.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=a;var f=l,m=c;try{m()}catch(y){et(u,f,y)}}}e=e.next}while(e!==n)}}catch(y){et(a,a.return,y)}}function Qs(t){var a=t.updateQueue;if(a!==null){var l=t.stateNode;try{No(a,l)}catch(e){et(t,t.return,e)}}}function Zs(t,a,l){l.props=Gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(e){et(t,a,e)}}function eu(t,a){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof l=="function"?t.refCleanup=l(e):l.current=e}}catch(u){et(t,a,u)}}function Ua(t,a){var l=t.ref,e=t.refCleanup;if(l!==null)if(typeof e=="function")try{e()}catch(u){et(t,a,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){et(t,a,u)}else l.current=null}function Ls(t){var a=t.type,l=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break t;case"img":l.src?e.src=l.src:l.srcSet&&(e.srcset=l.srcSet)}}catch(u){et(t,t.return,u)}}function bc(t,a,l){try{var e=t.stateNode;ph(e,t.type,l,a),e[Jt]=a}catch(u){et(t,t.return,u)}}function ws(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bl(t.type)||t.tag===4}function yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ws(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vc(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(t),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Ya));else if(e!==4&&(e===27&&bl(t.type)&&(l=t.stateNode,a=null),t=t.child,t!==null))for(vc(t,a,l),t=t.sibling;t!==null;)vc(t,a,l),t=t.sibling}function dn(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?l.insertBefore(t,a):l.appendChild(t);else if(e!==4&&(e===27&&bl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(dn(t,a,l),t=t.sibling;t!==null;)dn(t,a,l),t=t.sibling}function Vs(t){var a=t.stateNode,l=t.memoizedProps;try{for(var e=t.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);Xt(a,e,l),a[Ct]=t,a[Jt]=l}catch(n){et(t,t.return,n)}}var wa=!1,Tt=!1,xc=!1,Ks=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function Wd(t,a){if(t=t.containerInfo,Qc=jn,t=eo(t),hi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var e=l.getSelection&&l.getSelection();if(e&&e.rangeCount!==0){l=e.anchorNode;var u=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var i=0,c=-1,f=-1,m=0,y=0,S=t,g=null;a:for(;;){for(var b;S!==l||u!==0&&S.nodeType!==3||(c=i+u),S!==n||e!==0&&S.nodeType!==3||(f=i+e),S.nodeType===3&&(i+=S.nodeValue.length),(b=S.firstChild)!==null;)g=S,S=b;for(;;){if(S===t)break a;if(g===l&&++m===u&&(c=i),g===n&&++y===e&&(f=i),(b=S.nextSibling)!==null)break;S=g,g=S.parentNode}S=b}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:t,selectionRange:l},jn=!1,Dt=a;Dt!==null;)if(a=Dt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Dt=t;else for(;Dt!==null;){switch(a=Dt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,l=a,u=n.memoizedProps,n=n.memoizedState,e=l.stateNode;try{var _=Gl(l.type,u);t=e.getSnapshotBeforeUpdate(_,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(Y){et(l,l.return,Y)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,l=t.nodeType,l===9)Vc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=a.sibling,t!==null){t.return=a.return,Dt=t;break}Dt=a.return}}function Js(t,a,l){var e=l.flags;switch(l.tag){case 0:case 11:case 15:Ka(t,l),e&4&&lu(5,l);break;case 1:if(Ka(t,l),e&4)if(t=l.stateNode,a===null)try{t.componentDidMount()}catch(i){et(l,l.return,i)}else{var u=Gl(l.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(u,a,t.__reactInternalSnapshotBeforeUpdate)}catch(i){et(l,l.return,i)}}e&64&&Qs(l),e&512&&eu(l,l.return);break;case 3:if(Ka(t,l),e&64&&(t=l.updateQueue,t!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{No(t,a)}catch(i){et(l,l.return,i)}}break;case 27:a===null&&e&4&&Vs(l);case 26:case 5:Ka(t,l),a===null&&e&4&&Ls(l),e&512&&eu(l,l.return);break;case 12:Ka(t,l);break;case 31:Ka(t,l),e&4&&$s(t,l);break;case 13:Ka(t,l),e&4&&Fs(t,l),e&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=uh.bind(null,l),Th(t,l))));break;case 22:if(e=l.memoizedState!==null||wa,!e){a=a!==null&&a.memoizedState!==null||Tt,u=wa;var n=Tt;wa=e,(Tt=a)&&!n?Ja(t,l,(l.subtreeFlags&8772)!==0):Ka(t,l),wa=u,Tt=n}break;case 30:break;default:Ka(t,l)}}function ks(t){var a=t.alternate;a!==null&&(t.alternate=null,ks(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&$n(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mt=null,Wt=!1;function Va(t,a,l){for(l=l.child;l!==null;)Ws(t,a,l),l=l.sibling}function Ws(t,a,l){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(_e,l)}catch{}switch(l.tag){case 26:Tt||Ua(l,a),Va(t,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Tt||Ua(l,a);var e=mt,u=Wt;bl(l.type)&&(mt=l.stateNode,Wt=!1),Va(t,a,l),du(l.stateNode),mt=e,Wt=u;break;case 5:Tt||Ua(l,a);case 6:if(e=mt,u=Wt,mt=null,Va(t,a,l),mt=e,Wt=u,mt!==null)if(Wt)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(l.stateNode)}catch(n){et(l,a,n)}else try{mt.removeChild(l.stateNode)}catch(n){et(l,a,n)}break;case 18:mt!==null&&(Wt?(t=mt,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ae(t)):Q0(mt,l.stateNode));break;case 4:e=mt,u=Wt,mt=l.stateNode.containerInfo,Wt=!0,Va(t,a,l),mt=e,Wt=u;break;case 0:case 11:case 14:case 15:sl(2,l,a),Tt||sl(4,l,a),Va(t,a,l);break;case 1:Tt||(Ua(l,a),e=l.stateNode,typeof e.componentWillUnmount=="function"&&Zs(l,a,e)),Va(t,a,l);break;case 21:Va(t,a,l);break;case 22:Tt=(e=Tt)||l.memoizedState!==null,Va(t,a,l),Tt=e;break;default:Va(t,a,l)}}function $s(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ae(t)}catch(l){et(a,a.return,l)}}}function Fs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ae(t)}catch(l){et(a,a.return,l)}}function $d(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Ks),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Ks),a;default:throw Error(p(435,t.tag))}}function hn(t,a){var l=$d(t);a.forEach(function(e){if(!l.has(e)){l.add(e);var u=nh.bind(null,t,e);e.then(u,u)}})}function $t(t,a){var l=a.deletions;if(l!==null)for(var e=0;e<l.length;e++){var u=l[e],n=t,i=a,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(bl(c.type)){mt=c.stateNode,Wt=!1;break t}break;case 5:mt=c.stateNode,Wt=!1;break t;case 3:case 4:mt=c.stateNode.containerInfo,Wt=!0;break t}c=c.return}if(mt===null)throw Error(p(160));Ws(n,i,u),mt=null,Wt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Is(a,t),a=a.sibling}var Oa=null;function Is(t,a){var l=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$t(a,t),Ft(t),e&4&&(sl(3,t,t.return),lu(3,t),sl(5,t,t.return));break;case 1:$t(a,t),Ft(t),e&512&&(Tt||l===null||Ua(l,l.return)),e&64&&wa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:var u=Oa;if($t(a,t),Ft(t),e&512&&(Tt||l===null||Ua(l,l.return)),e&4){var n=l!==null?l.memoizedState:null;if(e=t.memoizedState,l===null)if(e===null)if(t.stateNode===null){t:{e=t.type,l=t.memoizedProps,u=u.ownerDocument||u;a:switch(e){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ue]||n[Ct]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(e),u.head.insertBefore(n,u.querySelector("head > title"))),Xt(n,e,l),n[Ct]=t,Mt(n),e=n;break t;case"link":var i=I0("link","href",u).get(e+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break a}}n=u.createElement(e),Xt(n,e,l),u.head.appendChild(n);break;case"meta":if(i=I0("meta","content",u).get(e+(l.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break a}}n=u.createElement(e),Xt(n,e,l),u.head.appendChild(n);break;default:throw Error(p(468,e))}n[Ct]=t,Mt(n),e=n}t.stateNode=e}else P0(u,t.type,t.stateNode);else t.stateNode=F0(u,e,t.memoizedProps);else n!==e?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,e===null?P0(u,t.type,t.stateNode):F0(u,e,t.memoizedProps)):e===null&&t.stateNode!==null&&bc(t,t.memoizedProps,l.memoizedProps)}break;case 27:$t(a,t),Ft(t),e&512&&(Tt||l===null||Ua(l,l.return)),l!==null&&e&4&&bc(t,t.memoizedProps,l.memoizedProps);break;case 5:if($t(a,t),Ft(t),e&512&&(Tt||l===null||Ua(l,l.return)),t.flags&32){u=t.stateNode;try{kl(u,"")}catch(_){et(t,t.return,_)}}e&4&&t.stateNode!=null&&(u=t.memoizedProps,bc(t,u,l!==null?l.memoizedProps:u)),e&1024&&(xc=!0);break;case 6:if($t(a,t),Ft(t),e&4){if(t.stateNode===null)throw Error(p(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e}catch(_){et(t,t.return,_)}}break;case 3:if(Dn=null,u=Oa,Oa=_n(a.containerInfo),$t(a,t),Oa=u,Ft(t),e&4&&l!==null&&l.memoizedState.isDehydrated)try{Ae(a.containerInfo)}catch(_){et(t,t.return,_)}xc&&(xc=!1,Ps(t));break;case 4:e=Oa,Oa=_n(t.stateNode.containerInfo),$t(a,t),Ft(t),Oa=e;break;case 12:$t(a,t),Ft(t);break;case 31:$t(a,t),Ft(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hn(t,e)));break;case 13:$t(a,t),Ft(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gn=la()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hn(t,e)));break;case 22:u=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,m=wa,y=Tt;if(wa=m||u,Tt=y||f,$t(a,t),Tt=y,wa=m,Ft(t),e&8192)t:for(a=t.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(l===null||f||wa||Tt||Xl(t)),l=null,a=t;;){if(a.tag===5||a.tag===26){if(l===null){f=l=a;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var S=f.memoizedProps.style,g=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(_){et(f,f.return,_)}}}else if(a.tag===6){if(l===null){f=a;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){et(f,f.return,_)}}}else if(a.tag===18){if(l===null){f=a;try{var b=f.stateNode;u?Z0(b,!0):Z0(f.stateNode,!1)}catch(_){et(f,f.return,_)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,hn(t,l))));break;case 19:$t(a,t),Ft(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hn(t,e)));break;case 30:break;case 21:break;default:$t(a,t),Ft(t)}}function Ft(t){var a=t.flags;if(a&2){try{for(var l,e=t.return;e!==null;){if(ws(e)){l=e;break}e=e.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var u=l.stateNode,n=yc(t);dn(t,n,u);break;case 5:var i=l.stateNode;l.flags&32&&(kl(i,""),l.flags&=-33);var c=yc(t);dn(t,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,m=yc(t);vc(t,m,f);break;default:throw Error(p(161))}}catch(y){et(t,t.return,y)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Ps(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Ps(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ka(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Js(t,a.alternate,a),a=a.sibling}function Xl(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:sl(4,a,a.return),Xl(a);break;case 1:Ua(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Zs(a,a.return,l),Xl(a);break;case 27:du(a.stateNode);case 26:case 5:Ua(a,a.return),Xl(a);break;case 22:a.memoizedState===null&&Xl(a);break;case 30:Xl(a);break;default:Xl(a)}t=t.sibling}}function Ja(t,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,u=t,n=a,i=n.flags;switch(n.tag){case 0:case 11:case 15:Ja(u,n,l),lu(4,n);break;case 1:if(Ja(u,n,l),e=n,u=e.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){et(e,e.return,m)}if(e=n,u=e.updateQueue,u!==null){var c=e.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Uo(f[u],c)}catch(m){et(e,e.return,m)}}l&&i&64&&Qs(n),eu(n,n.return);break;case 27:Vs(n);case 26:case 5:Ja(u,n,l),l&&e===null&&i&4&&Ls(n),eu(n,n.return);break;case 12:Ja(u,n,l);break;case 31:Ja(u,n,l),l&&i&4&&$s(u,n);break;case 13:Ja(u,n,l),l&&i&4&&Fs(u,n);break;case 22:n.memoizedState===null&&Ja(u,n,l),eu(n,n.return);break;case 30:break;default:Ja(u,n,l)}a=a.sibling}}function Sc(t,a){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Le(l))}function zc(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Le(t))}function _a(t,a,l,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)t0(t,a,l,e),a=a.sibling}function t0(t,a,l,e){var u=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a,l,e),u&2048&&lu(9,a);break;case 1:_a(t,a,l,e);break;case 3:_a(t,a,l,e),u&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Le(t)));break;case 12:if(u&2048){_a(t,a,l,e),t=a.stateNode;try{var n=a.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){et(a,a.return,f)}}else _a(t,a,l,e);break;case 31:_a(t,a,l,e);break;case 13:_a(t,a,l,e);break;case 23:break;case 22:n=a.stateNode,i=a.alternate,a.memoizedState!==null?n._visibility&2?_a(t,a,l,e):uu(t,a):n._visibility&2?_a(t,a,l,e):(n._visibility|=2,me(t,a,l,e,(a.subtreeFlags&10256)!==0||!1)),u&2048&&Sc(i,a);break;case 24:_a(t,a,l,e),u&2048&&zc(a.alternate,a);break;default:_a(t,a,l,e)}}function me(t,a,l,e,u){for(u=u&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,i=a,c=l,f=e,m=i.flags;switch(i.tag){case 0:case 11:case 15:me(n,i,c,f,u),lu(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?me(n,i,c,f,u):uu(n,i):(y._visibility|=2,me(n,i,c,f,u)),u&&m&2048&&Sc(i.alternate,i);break;case 24:me(n,i,c,f,u),u&&m&2048&&zc(i.alternate,i);break;default:me(n,i,c,f,u)}a=a.sibling}}function uu(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=t,e=a,u=e.flags;switch(e.tag){case 22:uu(l,e),u&2048&&Sc(e.alternate,e);break;case 24:uu(l,e),u&2048&&zc(e.alternate,e);break;default:uu(l,e)}a=a.sibling}}var nu=8192;function ge(t,a,l){if(t.subtreeFlags&nu)for(t=t.child;t!==null;)a0(t,a,l),t=t.sibling}function a0(t,a,l){switch(t.tag){case 26:ge(t,a,l),t.flags&nu&&t.memoizedState!==null&&Ch(l,Oa,t.memoizedState,t.memoizedProps);break;case 5:ge(t,a,l);break;case 3:case 4:var e=Oa;Oa=_n(t.stateNode.containerInfo),ge(t,a,l),Oa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=nu,nu=16777216,ge(t,a,l),nu=e):ge(t,a,l));break;default:ge(t,a,l)}}function l0(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function iu(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Dt=e,u0(e,t)}l0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)e0(t),t=t.sibling}function e0(t){switch(t.tag){case 0:case 11:case 15:iu(t),t.flags&2048&&sl(9,t,t.return);break;case 3:iu(t);break;case 12:iu(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,mn(t)):iu(t);break;default:iu(t)}}function mn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Dt=e,u0(e,t)}l0(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:sl(8,a,a.return),mn(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,mn(a));break;default:mn(a)}t=t.sibling}}function u0(t,a){for(;Dt!==null;){var l=Dt;switch(l.tag){case 0:case 11:case 15:sl(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var e=l.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Le(l.memoizedState.cache)}if(e=l.child,e!==null)e.return=l,Dt=e;else t:for(l=t;Dt!==null;){e=Dt;var u=e.sibling,n=e.return;if(ks(e),e===l){Dt=null;break t}if(u!==null){u.return=n,Dt=u;break t}Dt=n}}}var Fd={getCacheForType:function(t){var a=qt(St),l=a.data.get(t);return l===void 0&&(l=t(),a.data.set(t,l)),l},cacheSignal:function(){return qt(St).controller.signal}},Id=typeof WeakMap=="function"?WeakMap:Map,tt=0,ct=null,L=null,V=0,lt=0,oa=null,rl=!1,pe=!1,Ec=!1,ka=0,pt=0,dl=0,Ql=0,Tc=0,sa=0,be=0,cu=null,It=null,Ac=!1,gn=0,n0=0,pn=1/0,bn=null,hl=null,Ot=0,ml=null,ye=null,Wa=0,Oc=0,_c=null,i0=null,fu=0,Mc=null;function ra(){return(tt&2)!==0&&V!==0?V&-V:r.T!==null?Yc():Sf()}function c0(){if(sa===0)if((V&536870912)===0||J){var t=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),sa=t}else sa=536870912;return t=ca.current,t!==null&&(t.flags|=32),sa}function Pt(t,a,l){(t===ct&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(ve(t,0),gl(t,V,sa,!1)),De(t,l),((tt&2)===0||t!==ct)&&(t===ct&&((tt&2)===0&&(Ql|=l),pt===4&&gl(t,V,sa,!1)),Na(t))}function f0(t,a,l){if((tt&6)!==0)throw Error(p(327));var e=!l&&(a&127)===0&&(a&t.expiredLanes)===0||Me(t,a),u=e?ah(t,a):Uc(t,a,!0),n=e;do{if(u===0){pe&&!e&&gl(t,a,0,!1);break}else{if(l=t.current.alternate,n&&!Pd(l)){u=Uc(t,a,!1),n=!1;continue}if(u===2){if(n=a,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;t:{var c=t;u=cu;var f=c.current.memoizedState.isDehydrated;if(f&&(ve(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Ec&&!f){c.errorRecoveryDisabledLanes|=n,Ql|=n,u=4;break t}n=It,It=u,n!==null&&(It===null?It=n:It.push.apply(It,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){ve(t,0),gl(t,a,0,!0);break}t:{switch(e=t,n=u,n){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a)break;case 6:gl(e,a,sa,!rl);break t;case 2:It=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(u=gn+300-la(),10<u)){if(gl(e,a,sa,!rl),Ou(e,0,!0)!==0)break t;Wa=a,e.timeoutHandle=G0(o0.bind(null,e,l,It,bn,Ac,a,sa,Ql,be,rl,n,"Throttled",-0,0),u);break t}o0(e,l,It,bn,Ac,a,sa,Ql,be,rl,n,null,-0,0)}}break}while(!0);Na(t)}function o0(t,a,l,e,u,n,i,c,f,m,y,S,g,b){if(t.timeoutHandle=-1,S=a.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},a0(a,n,S);var _=(n&62914560)===n?gn-la():(n&4194048)===n?n0-la():0;if(_=Bh(S,_),_!==null){Wa=n,t.cancelPendingCommit=_(b0.bind(null,t,a,n,l,e,u,i,c,f,y,S,null,g,b)),gl(t,n,i,!m);return}}b0(t,a,n,l,e,u,i,c,f)}function Pd(t){for(var a=t;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var e=0;e<l.length;e++){var u=l[e],n=u.getSnapshot;u=u.value;try{if(!na(n(),u))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function gl(t,a,l,e){a&=~Tc,a&=~Ql,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var u=a;0<u;){var n=31-ua(u),i=1<<n;e[n]=-1,u&=~i}l!==0&&yf(t,l,a)}function yn(){return(tt&6)===0?(ou(0),!1):!0}function Dc(){if(L!==null){if(lt===0)var t=L.return;else t=L,qa=Hl=null,Vi(t),oe=null,Ve=0,t=L;for(;t!==null;)Xs(t.alternate,t),t=t.return;L=null}}function ve(t,a){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,vh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Wa=0,Dc(),ct=t,L=l=Ca(t.current,null),V=a,lt=0,oa=null,rl=!1,pe=Me(t,a),Ec=!1,be=sa=Tc=Ql=dl=pt=0,It=cu=null,Ac=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var u=31-ua(e),n=1<<u;a|=t[u],e&=~n}return ka=a,qu(),l}function s0(t,a){G=null,r.H=Pe,a===fe||a===Ku?(a=Oo(),lt=3):a===ji?(a=Oo(),lt=4):lt=a===cc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,oa=a,L===null&&(pt=1,cn(t,ba(a,t.current)))}function r0(){var t=ca.current;return t===null?!0:(V&4194048)===V?Sa===null:(V&62914560)===V||(V&536870912)!==0?t===Sa:!1}function d0(){var t=r.H;return r.H=Pe,t===null?Pe:t}function h0(){var t=r.A;return r.A=Fd,t}function vn(){pt=4,rl||(V&4194048)!==V&&ca.current!==null||(pe=!0),(dl&134217727)===0&&(Ql&134217727)===0||ct===null||gl(ct,V,sa,!1)}function Uc(t,a,l){var e=tt;tt|=2;var u=d0(),n=h0();(ct!==t||V!==a)&&(bn=null,ve(t,a)),a=!1;var i=pt;t:do try{if(lt!==0&&L!==null){var c=L,f=oa;switch(lt){case 8:Dc(),i=6;break t;case 3:case 2:case 9:case 6:ca.current===null&&(a=!0);var m=lt;if(lt=0,oa=null,xe(t,c,f,m),l&&pe){i=0;break t}break;default:m=lt,lt=0,oa=null,xe(t,c,f,m)}}th(),i=pt;break}catch(y){s0(t,y)}while(!0);return a&&t.shellSuspendCounter++,qa=Hl=null,tt=e,r.H=u,r.A=n,L===null&&(ct=null,V=0,qu()),i}function th(){for(;L!==null;)m0(L)}function ah(t,a){var l=tt;tt|=2;var e=d0(),u=h0();ct!==t||V!==a?(bn=null,pn=la()+500,ve(t,a)):pe=Me(t,a);t:do try{if(lt!==0&&L!==null){a=L;var n=oa;a:switch(lt){case 1:lt=0,oa=null,xe(t,a,n,1);break;case 2:case 9:if(To(n)){lt=0,oa=null,g0(a);break}a=function(){lt!==2&&lt!==9||ct!==t||(lt=7),Na(t)},n.then(a,a);break t;case 3:lt=7;break t;case 4:lt=5;break t;case 7:To(n)?(lt=0,oa=null,g0(a)):(lt=0,oa=null,xe(t,a,n,7));break;case 5:var i=null;switch(L.tag){case 26:i=L.memoizedState;case 5:case 27:var c=L;if(i?tr(i):c.stateNode.complete){lt=0,oa=null;var f=c.sibling;if(f!==null)L=f;else{var m=c.return;m!==null?(L=m,xn(m)):L=null}break a}}lt=0,oa=null,xe(t,a,n,5);break;case 6:lt=0,oa=null,xe(t,a,n,6);break;case 8:Dc(),pt=6;break t;default:throw Error(p(462))}}lh();break}catch(y){s0(t,y)}while(!0);return qa=Hl=null,r.H=e,r.A=u,tt=l,L!==null?0:(ct=null,V=0,qu(),pt)}function lh(){for(;L!==null&&!Ar();)m0(L)}function m0(t){var a=qs(t.alternate,t,ka);t.memoizedProps=t.pendingProps,a===null?xn(t):L=a}function g0(t){var a=t,l=a.alternate;switch(a.tag){case 15:case 0:a=Hs(l,a,a.pendingProps,a.type,void 0,V);break;case 11:a=Hs(l,a,a.pendingProps,a.type.render,a.ref,V);break;case 5:Vi(a);default:Xs(l,a),a=L=ho(a,ka),a=qs(l,a,ka)}t.memoizedProps=t.pendingProps,a===null?xn(t):L=a}function xe(t,a,l,e){qa=Hl=null,Vi(a),oe=null,Ve=0;var u=a.return;try{if(wd(t,u,a,l,V)){pt=1,cn(t,ba(l,t.current)),L=null;return}}catch(n){if(u!==null)throw L=u,n;pt=1,cn(t,ba(l,t.current)),L=null;return}a.flags&32768?(J||e===1?t=!0:pe||(V&536870912)!==0?t=!1:(rl=t=!0,(e===2||e===9||e===3||e===6)&&(e=ca.current,e!==null&&e.tag===13&&(e.flags|=16384))),p0(a,t)):xn(a)}function xn(t){var a=t;do{if((a.flags&32768)!==0){p0(a,rl);return}t=a.return;var l=Jd(a.alternate,a,ka);if(l!==null){L=l;return}if(a=a.sibling,a!==null){L=a;return}L=a=t}while(a!==null);pt===0&&(pt=5)}function p0(t,a){do{var l=kd(t.alternate,t);if(l!==null){l.flags&=32767,L=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(t=t.sibling,t!==null)){L=t;return}L=t=l}while(t!==null);pt=6,L=null}function b0(t,a,l,e,u,n,i,c,f){t.cancelPendingCommit=null;do Sn();while(Ot!==0);if((tt&6)!==0)throw Error(p(327));if(a!==null){if(a===t.current)throw Error(p(177));if(n=a.lanes|a.childLanes,n|=yi,Rr(t,l,n,i,c,f),t===ct&&(L=ct=null,V=0),ye=a,ml=t,Wa=l,Oc=n,_c=u,i0=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ih(zu,function(){return z0(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=r.T,r.T=null,u=z.p,z.p=2,i=tt,tt|=4;try{Wd(t,a,l)}finally{tt=i,z.p=u,r.T=e}}Ot=1,y0(),v0(),x0()}}function y0(){if(Ot===1){Ot=0;var t=ml,a=ye,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=r.T,r.T=null;var e=z.p;z.p=2;var u=tt;tt|=4;try{Is(a,t);var n=Zc,i=eo(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&lo(c.ownerDocument.documentElement,c)){if(f!==null&&hi(c)){var m=f.start,y=f.end;if(y===void 0&&(y=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(y,c.value.length);else{var S=c.ownerDocument||document,g=S&&S.defaultView||window;if(g.getSelection){var b=g.getSelection(),_=c.textContent.length,Y=Math.min(f.start,_),it=f.end===void 0?Y:Math.min(f.end,_);!b.extend&&Y>it&&(i=it,it=Y,Y=i);var d=ao(c,Y),o=ao(c,it);if(d&&o&&(b.rangeCount!==1||b.anchorNode!==d.node||b.anchorOffset!==d.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var h=S.createRange();h.setStart(d.node,d.offset),b.removeAllRanges(),Y>it?(b.addRange(h),b.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),b.addRange(h))}}}}for(S=[],b=c;b=b.parentNode;)b.nodeType===1&&S.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var v=S[c];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}jn=!!Qc,Zc=Qc=null}finally{tt=u,z.p=e,r.T=l}}t.current=a,Ot=2}}function v0(){if(Ot===2){Ot=0;var t=ml,a=ye,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=r.T,r.T=null;var e=z.p;z.p=2;var u=tt;tt|=4;try{Js(t,a.alternate,a)}finally{tt=u,z.p=e,r.T=l}}Ot=3}}function x0(){if(Ot===4||Ot===3){Ot=0,Or();var t=ml,a=ye,l=Wa,e=i0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ot=5:(Ot=0,ye=ml=null,S0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(hl=null),kn(l),a=a.stateNode,ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(_e,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=r.T,u=z.p,z.p=2,r.T=null;try{for(var n=t.onRecoverableError,i=0;i<e.length;i++){var c=e[i];n(c.value,{componentStack:c.stack})}}finally{r.T=a,z.p=u}}(Wa&3)!==0&&Sn(),Na(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===Mc?fu++:(fu=0,Mc=t):fu=0,ou(0)}}function S0(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Le(a)))}function Sn(){return y0(),v0(),x0(),z0()}function z0(){if(Ot!==5)return!1;var t=ml,a=Oc;Oc=0;var l=kn(Wa),e=r.T,u=z.p;try{z.p=32>l?32:l,r.T=null,l=_c,_c=null;var n=ml,i=Wa;if(Ot=0,ye=ml=null,Wa=0,(tt&6)!==0)throw Error(p(331));var c=tt;if(tt|=4,e0(n.current),t0(n,n.current,i,l),tt=c,ou(0,!1),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(_e,n)}catch{}return!0}finally{z.p=u,r.T=e,S0(t,a)}}function E0(t,a,l){a=ba(l,a),a=ic(t.stateNode,a,2),t=cl(t,a,2),t!==null&&(De(t,2),Na(t))}function et(t,a,l){if(t.tag===3)E0(t,t,l);else for(;a!==null;){if(a.tag===3){E0(a,t,l);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(hl===null||!hl.has(e))){t=ba(l,t),l=Ts(2),e=cl(a,l,2),e!==null&&(As(l,e,a,t),De(e,2),Na(e));break}}a=a.return}}function Nc(t,a,l){var e=t.pingCache;if(e===null){e=t.pingCache=new Id;var u=new Set;e.set(a,u)}else u=e.get(a),u===void 0&&(u=new Set,e.set(a,u));u.has(l)||(Ec=!0,u.add(l),t=eh.bind(null,t,a,l),a.then(t,t))}function eh(t,a,l){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,ct===t&&(V&l)===l&&(pt===4||pt===3&&(V&62914560)===V&&300>la()-gn?(tt&2)===0&&ve(t,0):Tc|=l,be===V&&(be=0)),Na(t)}function T0(t,a){a===0&&(a=bf()),t=Dl(t,a),t!==null&&(De(t,a),Na(t))}function uh(t){var a=t.memoizedState,l=0;a!==null&&(l=a.retryLane),T0(t,l)}function nh(t,a){var l=0;switch(t.tag){case 31:case 13:var e=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(p(314))}e!==null&&e.delete(a),T0(t,l)}function ih(t,a){return wn(t,a)}var zn=null,Se=null,Hc=!1,En=!1,jc=!1,pl=0;function Na(t){t!==Se&&t.next===null&&(Se===null?zn=Se=t:Se=Se.next=t),En=!0,Hc||(Hc=!0,fh())}function ou(t,a){if(!jc&&En){jc=!0;do for(var l=!1,e=zn;e!==null;){if(t!==0){var u=e.pendingLanes;if(u===0)var n=0;else{var i=e.suspendedLanes,c=e.pingedLanes;n=(1<<31-ua(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,M0(e,n))}else n=V,n=Ou(e,e===ct?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Me(e,n)||(l=!0,M0(e,n));e=e.next}while(l);jc=!1}}function ch(){A0()}function A0(){En=Hc=!1;var t=0;pl!==0&&yh()&&(t=pl);for(var a=la(),l=null,e=zn;e!==null;){var u=e.next,n=O0(e,a);n===0?(e.next=null,l===null?zn=u:l.next=u,u===null&&(Se=l)):(l=e,(t!==0||(n&3)!==0)&&(En=!0)),e=u}Ot!==0&&Ot!==5||ou(t),pl!==0&&(pl=0)}function O0(t,a){for(var l=t.suspendedLanes,e=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-ua(n),c=1<<i,f=u[i];f===-1?((c&l)===0||(c&e)!==0)&&(u[i]=Yr(c,a)):f<=a&&(t.expiredLanes|=c),n&=~c}if(a=ct,l=V,l=Ou(t,t===a?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,l===0||t===a&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Vn(e),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Me(t,l)){if(a=l&-l,a===t.callbackPriority)return a;switch(e!==null&&Vn(e),kn(l)){case 2:case 8:l=gf;break;case 32:l=zu;break;case 268435456:l=pf;break;default:l=zu}return e=_0.bind(null,t),l=wn(l,e),t.callbackPriority=a,t.callbackNode=l,a}return e!==null&&e!==null&&Vn(e),t.callbackPriority=2,t.callbackNode=null,2}function _0(t,a){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Sn()&&t.callbackNode!==l)return null;var e=V;return e=Ou(t,t===ct?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(f0(t,e,a),O0(t,la()),t.callbackNode!=null&&t.callbackNode===l?_0.bind(null,t):null)}function M0(t,a){if(Sn())return null;f0(t,a,!0)}function fh(){xh(function(){(tt&6)!==0?wn(mf,ch):A0()})}function Yc(){if(pl===0){var t=ie;t===0&&(t=Eu,Eu<<=1,(Eu&261888)===0&&(Eu=256)),pl=t}return pl}function D0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uu(""+t)}function U0(t,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,t.id&&l.setAttribute("form",t.id),a.parentNode.insertBefore(l,a),t=new FormData(t),l.parentNode.removeChild(l),t}function oh(t,a,l,e,u){if(a==="submit"&&l&&l.stateNode===u){var n=D0((u[Jt]||null).action),i=e.submitter;i&&(a=(a=i[Jt]||null)?D0(a.formAction):i.getAttribute("formAction"),a!==null&&(n=a,i=null));var c=new Yu("action","action",null,e,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(pl!==0){var f=i?U0(u,i):new FormData(u);tc(l,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?U0(u,i):new FormData(u),tc(l,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Rc=0;Rc<bi.length;Rc++){var Cc=bi[Rc],sh=Cc.toLowerCase(),rh=Cc[0].toUpperCase()+Cc.slice(1);Aa(sh,"on"+rh)}Aa(io,"onAnimationEnd"),Aa(co,"onAnimationIteration"),Aa(fo,"onAnimationStart"),Aa("dblclick","onDoubleClick"),Aa("focusin","onFocus"),Aa("focusout","onBlur"),Aa(_d,"onTransitionRun"),Aa(Md,"onTransitionStart"),Aa(Dd,"onTransitionCancel"),Aa(oo,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function N0(t,a){a=(a&4)!==0;for(var l=0;l<t.length;l++){var e=t[l],u=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var i=e.length-1;0<=i;i--){var c=e[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(y){Bu(y)}u.currentTarget=null,n=f}else for(i=0;i<e.length;i++){if(c=e[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(y){Bu(y)}u.currentTarget=null,n=f}}}}function w(t,a){var l=a[Wn];l===void 0&&(l=a[Wn]=new Set);var e=t+"__bubble";l.has(e)||(H0(a,t,2,!1),l.add(e))}function Bc(t,a,l){var e=0;a&&(e|=4),H0(l,t,e,a)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function qc(t){if(!t[Tn]){t[Tn]=!0,Tf.forEach(function(l){l!=="selectionchange"&&(dh.has(l)||Bc(l,!1,t),Bc(l,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Tn]||(a[Tn]=!0,Bc("selectionchange",!1,a))}}function H0(t,a,l,e){switch(cr(a)){case 2:var u=Xh;break;case 8:u=Qh;break;default:u=Pc}l=u.bind(null,a,l,t),u=void 0,!ui||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),e?u!==void 0?t.addEventListener(a,l,{capture:!0,passive:u}):t.addEventListener(a,l,!0):u!==void 0?t.addEventListener(a,l,{passive:u}):t.addEventListener(a,l,!1)}function Gc(t,a,l,e,u){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var c=e.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Ll(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=n=i;continue t}c=c.parentNode}}e=e.return}Cf(function(){var m=n,y=li(l),S=[];t:{var g=so.get(t);if(g!==void 0){var b=Yu,_=t;switch(t){case"keypress":if(Hu(l)===0)break t;case"keydown":case"keyup":b=nd;break;case"focusin":_="focus",b=fi;break;case"focusout":_="blur",b=fi;break;case"beforeblur":case"afterblur":b=fi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Jr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=fd;break;case io:case co:case fo:b=$r;break;case oo:b=sd;break;case"scroll":case"scrollend":b=Vr;break;case"wheel":b=dd;break;case"copy":case"cut":case"paste":b=Ir;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Qf;break;case"toggle":case"beforetoggle":b=md}var Y=(a&4)!==0,it=!Y&&(t==="scroll"||t==="scrollend"),d=Y?g!==null?g+"Capture":null:g;Y=[];for(var o=m,h;o!==null;){var v=o;if(h=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||h===null||d===null||(v=He(o,d),v!=null&&Y.push(ru(o,v,h))),it)break;o=o.return}0<Y.length&&(g=new b(g,_,null,l,y),S.push({event:g,listeners:Y}))}}if((a&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&l!==ai&&(_=l.relatedTarget||l.fromElement)&&(Ll(_)||_[Zl]))break t;if((b||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,b?(_=l.relatedTarget||l.toElement,b=m,_=_?Ll(_):null,_!==null&&(it=k(_),Y=_.tag,_!==it||Y!==5&&Y!==27&&Y!==6)&&(_=null)):(b=null,_=m),b!==_)){if(Y=Gf,v="onMouseLeave",d="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Qf,v="onPointerLeave",d="onPointerEnter",o="pointer"),it=b==null?g:Ne(b),h=_==null?g:Ne(_),g=new Y(v,o+"leave",b,l,y),g.target=it,g.relatedTarget=h,v=null,Ll(y)===m&&(Y=new Y(d,o+"enter",_,l,y),Y.target=h,Y.relatedTarget=it,v=Y),it=v,b&&_)a:{for(Y=hh,d=b,o=_,h=0,v=d;v;v=Y(v))h++;v=0;for(var H=o;H;H=Y(H))v++;for(;0<h-v;)d=Y(d),h--;for(;0<v-h;)o=Y(o),v--;for(;h--;){if(d===o||o!==null&&d===o.alternate){Y=d;break a}d=Y(d),o=Y(o)}Y=null}else Y=null;b!==null&&j0(S,g,b,Y,!1),_!==null&&it!==null&&j0(S,it,_,Y,!0)}}t:{if(g=m?Ne(m):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var I=Wf;else if(Jf(g))if($f)I=Td;else{I=zd;var D=Sd}else b=g.nodeName,!b||b.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&ti(m.elementType)&&(I=Wf):I=Ed;if(I&&(I=I(t,m))){kf(S,I,l,y);break t}D&&D(t,g,m),t==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&Pn(g,"number",g.value)}switch(D=m?Ne(m):window,t){case"focusin":(Jf(D)||D.contentEditable==="true")&&(Il=D,mi=m,Xe=null);break;case"focusout":Xe=mi=Il=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,uo(S,l,y);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":uo(S,l,y)}var X;if(si)t:{switch(t){case"compositionstart":var K="onCompositionStart";break t;case"compositionend":K="onCompositionEnd";break t;case"compositionupdate":K="onCompositionUpdate";break t}K=void 0}else Fl?Vf(t,l)&&(K="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(K="onCompositionStart");K&&(Zf&&l.locale!=="ko"&&(Fl||K!=="onCompositionStart"?K==="onCompositionEnd"&&Fl&&(X=Bf()):(tl=y,ni="value"in tl?tl.value:tl.textContent,Fl=!0)),D=An(m,K),0<D.length&&(K=new Xf(K,t,null,l,y),S.push({event:K,listeners:D}),X?K.data=X:(X=Kf(l),X!==null&&(K.data=X)))),(X=pd?bd(t,l):yd(t,l))&&(K=An(m,"onBeforeInput"),0<K.length&&(D=new Xf("onBeforeInput","beforeinput",null,l,y),S.push({event:D,listeners:K}),D.data=X)),oh(S,t,m,l,y)}N0(S,a)})}function ru(t,a,l){return{instance:t,listener:a,currentTarget:l}}function An(t,a){for(var l=a+"Capture",e=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=He(t,l),u!=null&&e.unshift(ru(t,u,n)),u=He(t,a),u!=null&&e.push(ru(t,u,n))),t.tag===3)return e;t=t.return}return[]}function hh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,a,l,e,u){for(var n=a._reactName,i=[];l!==null&&l!==e;){var c=l,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=He(l,n),m!=null&&i.unshift(ru(l,m,f))):u||(m=He(l,n),m!=null&&i.push(ru(l,m,f)))),l=l.return}i.length!==0&&t.push({event:a,listeners:i})}var mh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(mh,`
`).replace(gh,"")}function R0(t,a){return a=Y0(a),Y0(t)===a}function nt(t,a,l,e,u,n){switch(l){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||kl(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&kl(t,""+e);break;case"className":Mu(t,"class",e);break;case"tabIndex":Mu(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Mu(t,l,e);break;case"style":Yf(t,e,n);break;case"data":if(a!=="object"){Mu(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||l!=="href")){t.removeAttribute(l);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Uu(""+e),t.setAttribute(l,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(a!=="input"&&nt(t,a,"name",u.name,u,null),nt(t,a,"formEncType",u.formEncType,u,null),nt(t,a,"formMethod",u.formMethod,u,null),nt(t,a,"formTarget",u.formTarget,u,null)):(nt(t,a,"encType",u.encType,u,null),nt(t,a,"method",u.method,u,null),nt(t,a,"target",u.target,u,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Uu(""+e),t.setAttribute(l,e);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"onScroll":e!=null&&w("scroll",t);break;case"onScrollEnd":e!=null&&w("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(l=e.__html,l!=null){if(u.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}l=Uu(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""+e):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":e===!0?t.setAttribute(l,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,e):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(l,e):t.removeAttribute(l);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(l):t.setAttribute(l,e);break;case"popover":w("beforetoggle",t),w("toggle",t),_u(t,"popover",e);break;case"xlinkActuate":ja(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":ja(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":ja(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":ja(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":ja(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":ja(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":ja(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":ja(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":ja(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":_u(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Lr.get(l)||l,_u(t,l,e))}}function Xc(t,a,l,e,u,n){switch(l){case"style":Yf(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(l=e.__html,l!=null){if(u.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"children":typeof e=="string"?kl(t,e):(typeof e=="number"||typeof e=="bigint")&&kl(t,""+e);break;case"onScroll":e!=null&&w("scroll",t);break;case"onScrollEnd":e!=null&&w("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),a=l.slice(2,u?l.length-7:void 0),n=t[Jt]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(a,n,u),typeof e=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(a,e,u);break t}l in t?t[l]=e:e===!0?t.setAttribute(l,""):_u(t,l,e)}}}function Xt(t,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":w("error",t),w("load",t);var e=!1,u=!1,n;for(n in l)if(l.hasOwnProperty(n)){var i=l[n];if(i!=null)switch(n){case"src":e=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:nt(t,a,n,i,l,null)}}u&&nt(t,a,"srcSet",l.srcSet,l,null),e&&nt(t,a,"src",l.src,l,null);return;case"input":w("invalid",t);var c=n=i=u=null,f=null,m=null;for(e in l)if(l.hasOwnProperty(e)){var y=l[e];if(y!=null)switch(e){case"name":u=y;break;case"type":i=y;break;case"checked":f=y;break;case"defaultChecked":m=y;break;case"value":n=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,a));break;default:nt(t,a,e,y,l,null)}}Uf(t,n,c,f,m,i,u,!1);return;case"select":w("invalid",t),e=i=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":e=c;default:nt(t,a,u,c,l,null)}a=n,l=i,t.multiple=!!e,a!=null?Jl(t,!!e,a,!1):l!=null&&Jl(t,!!e,l,!0);return;case"textarea":w("invalid",t),n=u=e=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":e=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:nt(t,a,i,c,l,null)}Hf(t,e,u,n);return;case"option":for(f in l)l.hasOwnProperty(f)&&(e=l[f],e!=null)&&(f==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":nt(t,a,f,e,l,null));return;case"dialog":w("beforetoggle",t),w("toggle",t),w("cancel",t),w("close",t);break;case"iframe":case"object":w("load",t);break;case"video":case"audio":for(e=0;e<su.length;e++)w(su[e],t);break;case"image":w("error",t),w("load",t);break;case"details":w("toggle",t);break;case"embed":case"source":case"link":w("error",t),w("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(e=l[m],e!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:nt(t,a,m,e,l,null)}return;default:if(ti(a)){for(y in l)l.hasOwnProperty(y)&&(e=l[y],e!==void 0&&Xc(t,a,y,e,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(e=l[c],e!=null&&nt(t,a,c,e,l,null))}function ph(t,a,l,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,y=null;for(b in l){var S=l[b];if(l.hasOwnProperty(b)&&S!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":f=S;default:e.hasOwnProperty(b)||nt(t,a,b,null,e,S)}}for(var g in e){var b=e[g];if(S=l[g],e.hasOwnProperty(g)&&(b!=null||S!=null))switch(g){case"type":n=b;break;case"name":u=b;break;case"checked":m=b;break;case"defaultChecked":y=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,a));break;default:b!==S&&nt(t,a,g,b,e,S)}}In(t,i,c,f,m,y,n,u);return;case"select":b=i=c=g=null;for(n in l)if(f=l[n],l.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":b=f;default:e.hasOwnProperty(n)||nt(t,a,n,null,e,f)}for(u in e)if(n=e[u],f=l[u],e.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":g=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&nt(t,a,u,n,e,f)}a=c,l=i,e=b,g!=null?Jl(t,!!l,g,!1):!!e!=!!l&&(a!=null?Jl(t,!!l,a,!0):Jl(t,!!l,l?[]:"",!1));return;case"textarea":b=g=null;for(c in l)if(u=l[c],l.hasOwnProperty(c)&&u!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:nt(t,a,c,null,e,u)}for(i in e)if(u=e[i],n=l[i],e.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":g=u;break;case"defaultValue":b=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(p(91));break;default:u!==n&&nt(t,a,i,u,e,n)}Nf(t,g,b);return;case"option":for(var _ in l)g=l[_],l.hasOwnProperty(_)&&g!=null&&!e.hasOwnProperty(_)&&(_==="selected"?t.selected=!1:nt(t,a,_,null,e,g));for(f in e)g=e[f],b=l[f],e.hasOwnProperty(f)&&g!==b&&(g!=null||b!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":nt(t,a,f,g,e,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in l)g=l[Y],l.hasOwnProperty(Y)&&g!=null&&!e.hasOwnProperty(Y)&&nt(t,a,Y,null,e,g);for(m in e)if(g=e[m],b=l[m],e.hasOwnProperty(m)&&g!==b&&(g!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,a));break;default:nt(t,a,m,g,e,b)}return;default:if(ti(a)){for(var it in l)g=l[it],l.hasOwnProperty(it)&&g!==void 0&&!e.hasOwnProperty(it)&&Xc(t,a,it,void 0,e,g);for(y in e)g=e[y],b=l[y],!e.hasOwnProperty(y)||g===b||g===void 0&&b===void 0||Xc(t,a,y,g,e,b);return}}for(var d in l)g=l[d],l.hasOwnProperty(d)&&g!=null&&!e.hasOwnProperty(d)&&nt(t,a,d,null,e,g);for(S in e)g=e[S],b=l[S],!e.hasOwnProperty(S)||g===b||g==null&&b==null||nt(t,a,S,g,e,b)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,l=performance.getEntriesByType("resource"),e=0;e<l.length;e++){var u=l[e],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&C0(i)){for(i=0,c=u.responseEnd,e+=1;e<l.length;e++){var f=l[e],m=f.startTime;if(m>c)break;var y=f.transferSize,S=f.initiatorType;y&&C0(S)&&(f=f.responseEnd,i+=y*(f<c?1:(c-m)/(f-m)))}if(--e,a+=8*(n+i)/(u.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qc=null,Zc=null;function On(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Lc(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var wc=null;function yh(){var t=window.event;return t&&t.type==="popstate"?t===wc?!1:(wc=t,!0):(wc=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,vh=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,xh=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){return X0.resolve(null).then(t).catch(Sh)}:G0;function Sh(t){setTimeout(function(){throw t})}function bl(t){return t==="head"}function Q0(t,a){var l=a,e=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(e===0){t.removeChild(u),Ae(a);return}e--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")e++;else if(l==="html")du(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,du(l);for(var n=l.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ue]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=i}}else l==="body"&&du(t.ownerDocument.body);l=u}while(l);Ae(a)}function Z0(t,a){var l=t;t=0;do{var e=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),e&&e.nodeType===8)if(l=e.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=e}while(l)}function Vc(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Vc(l),$n(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function zh(t,a,l,e){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[Ue])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=za(t.nextSibling),t===null)break}return null}function Eh(t,a,l){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=za(t.nextSibling),t===null))return null;return t}function L0(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=za(t.nextSibling),t===null))return null;return t}function Kc(t){return t.data==="$?"||t.data==="$~"}function Jc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Th(t,a){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||l.readyState!=="loading")a();else{var e=function(){a(),l.removeEventListener("DOMContentLoaded",e)};l.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function za(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var kc=null;function w0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(a===0)return za(t.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}t=t.nextSibling}return null}function V0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return t;a--}else l!=="/$"&&l!=="/&"||a++}t=t.previousSibling}return null}function K0(t,a,l){switch(a=On(l),t){case"html":if(t=a.documentElement,!t)throw Error(p(452));return t;case"head":if(t=a.head,!t)throw Error(p(453));return t;case"body":if(t=a.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function du(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$n(t)}var Ea=new Map,J0=new Set;function _n(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $a=z.d;z.d={f:Ah,r:Oh,D:_h,C:Mh,L:Dh,m:Uh,X:Hh,S:Nh,M:jh};function Ah(){var t=$a.f(),a=yn();return t||a}function Oh(t){var a=wl(t);a!==null&&a.tag===5&&a.type==="form"?ss(a):$a.r(t)}var ze=typeof document>"u"?null:document;function k0(t,a,l){var e=ze;if(e&&typeof a=="string"&&a){var u=ga(a);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),J0.has(u)||(J0.add(u),t={rel:t,crossOrigin:l,href:a},e.querySelector(u)===null&&(a=e.createElement("link"),Xt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function _h(t){$a.D(t),k0("dns-prefetch",t,null)}function Mh(t,a){$a.C(t,a),k0("preconnect",t,a)}function Dh(t,a,l){$a.L(t,a,l);var e=ze;if(e&&t&&a){var u='link[rel="preload"][as="'+ga(a)+'"]';a==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+ga(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+ga(l.imageSizes)+'"]')):u+='[href="'+ga(t)+'"]';var n=u;switch(a){case"style":n=Ee(t);break;case"script":n=Te(t)}Ea.has(n)||(t=j({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:t,as:a},l),Ea.set(n,t),e.querySelector(u)!==null||a==="style"&&e.querySelector(hu(n))||a==="script"&&e.querySelector(mu(n))||(a=e.createElement("link"),Xt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function Uh(t,a){$a.m(t,a);var l=ze;if(l&&t){var e=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+ga(e)+'"][href="'+ga(t)+'"]',n=u;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Te(t)}if(!Ea.has(n)&&(t=j({rel:"modulepreload",href:t},a),Ea.set(n,t),l.querySelector(u)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(mu(n)))return}e=l.createElement("link"),Xt(e,"link",t),Mt(e),l.head.appendChild(e)}}}function Nh(t,a,l){$a.S(t,a,l);var e=ze;if(e&&t){var u=Vl(e).hoistableStyles,n=Ee(t);a=a||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=e.querySelector(hu(n)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":a},l),(l=Ea.get(n))&&Wc(t,l);var f=i=e.createElement("link");Mt(f),Xt(f,"link",t),f._p=new Promise(function(m,y){f.onload=m,f.onerror=y}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mn(i,a,e)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Hh(t,a){$a.X(t,a);var l=ze;if(l&&t){var e=Vl(l).hoistableScripts,u=Te(t),n=e.get(u);n||(n=l.querySelector(mu(u)),n||(t=j({src:t,async:!0},a),(a=Ea.get(u))&&$c(t,a),n=l.createElement("script"),Mt(n),Xt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function jh(t,a){$a.M(t,a);var l=ze;if(l&&t){var e=Vl(l).hoistableScripts,u=Te(t),n=e.get(u);n||(n=l.querySelector(mu(u)),n||(t=j({src:t,async:!0,type:"module"},a),(a=Ea.get(u))&&$c(t,a),n=l.createElement("script"),Mt(n),Xt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function W0(t,a,l,e){var u=(u=Z.current)?_n(u):null;if(!u)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Ee(l.href),l=Vl(u).hoistableStyles,e=l.get(a),e||(e={type:"style",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ee(l.href);var n=Vl(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(hu(t)))&&!n._p&&(i.instance=n,i.state.loading=5),Ea.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ea.set(t,l),n||Yh(u,t,l,i.state))),a&&e===null)throw Error(p(528,""));return i}if(a&&e!==null)throw Error(p(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Te(l),l=Vl(u).hoistableScripts,e=l.get(a),e||(e={type:"script",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Ee(t){return'href="'+ga(t)+'"'}function hu(t){return'link[rel="stylesheet"]['+t+"]"}function $0(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Yh(t,a,l,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Xt(a,"link",l),Mt(a),t.head.appendChild(a))}function Te(t){return'[src="'+ga(t)+'"]'}function mu(t){return"script[async]"+t}function F0(t,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ga(l.href)+'"]');if(e)return a.instance=e,Mt(e),e;var u=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Mt(e),Xt(e,"style",u),Mn(e,l.precedence,t),a.instance=e;case"stylesheet":u=Ee(l.href);var n=t.querySelector(hu(u));if(n)return a.state.loading|=4,a.instance=n,Mt(n),n;e=$0(l),(u=Ea.get(u))&&Wc(e,u),n=(t.ownerDocument||t).createElement("link"),Mt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Xt(n,"link",e),a.state.loading|=4,Mn(n,l.precedence,t),a.instance=n;case"script":return n=Te(l.src),(u=t.querySelector(mu(n)))?(a.instance=u,Mt(u),u):(e=l,(u=Ea.get(n))&&(e=j({},l),$c(e,u)),t=t.ownerDocument||t,u=t.createElement("script"),Mt(u),Xt(u,"link",e),t.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Mn(e,l.precedence,t));return a.instance}function Mn(t,a,l){for(var e=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=e.length?e[e.length-1]:null,n=u,i=0;i<e.length;i++){var c=e[i];if(c.dataset.precedence===a)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(t,a.firstChild))}function Wc(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function $c(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Dn=null;function I0(t,a,l){if(Dn===null){var e=new Map,u=Dn=new Map;u.set(l,e)}else u=Dn,e=u.get(l),e||(e=new Map,u.set(l,e));if(e.has(t))return e;for(e.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var n=l[u];if(!(n[Ue]||n[Ct]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(a)||"";i=t+i;var c=e.get(i);c?c.push(n):e.set(i,[n])}}return e}function P0(t,a,l){t=t.ownerDocument||t,t.head.insertBefore(l,a==="title"?t.querySelector("head > title"):null)}function Rh(t,a,l){if(l===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function tr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ch(t,a,l,e){if(l.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=Ee(e.href),n=a.querySelector(hu(u));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Un.bind(t),a.then(t,t)),l.state.loading|=4,l.instance=n,Mt(n);return}n=a.ownerDocument||a,e=$0(e),(u=Ea.get(u))&&Wc(e,u),n=n.createElement("link"),Mt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Xt(n,"link",e),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,a),(a=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Un.bind(t),a.addEventListener("load",l),a.addEventListener("error",l))}}var Fc=0;function Bh(t,a){return t.stylesheets&&t.count===0&&Hn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var e=setTimeout(function(){if(t.stylesheets&&Hn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Fc===0&&(Fc=62500*bh());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Fc?50:800)+a);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(u)}}:null}function Un(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nn=null;function Hn(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nn=new Map,a.forEach(qh,t),Nn=null,Un.call(t))}function qh(t,a){if(!(a.state.loading&4)){var l=Nn.get(t);if(l)var e=l.get(null);else{l=new Map,Nn.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),e=i)}e&&l.set(null,e)}u=a.instance,i=u.getAttribute("data-precedence"),n=l.get(i)||e,n===e&&l.set(null,u),l.set(i,u),this.count++,e=Un.bind(this),u.addEventListener("load",e),u.addEventListener("error",e),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),a.state.loading|=4}}var gu={$$typeof:At,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Gh(t,a,l,e,u,n,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.hiddenUpdates=Kn(null),this.identifierPrefix=e,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ar(t,a,l,e,u,n,i,c,f,m,y,S){return t=new Gh(t,a,l,i,f,m,y,S,c),a=1,n===!0&&(a|=24),n=ia(3,null,null,a),t.current=n,n.stateNode=t,a=Ui(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:l,cache:a},Yi(n),t}function lr(t){return t?(t=ae,t):ae}function er(t,a,l,e,u,n){u=lr(u),e.context===null?e.context=u:e.pendingContext=u,e=il(a),e.payload={element:l},n=n===void 0?null:n,n!==null&&(e.callback=n),l=cl(t,e,a),l!==null&&(Pt(l,t,a),Je(l,t,a))}function ur(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<a?l:a}}function Ic(t,a){ur(t,a),(t=t.alternate)&&ur(t,a)}function nr(t){if(t.tag===13||t.tag===31){var a=Dl(t,67108864);a!==null&&Pt(a,t,67108864),Ic(t,67108864)}}function ir(t){if(t.tag===13||t.tag===31){var a=ra();a=Jn(a);var l=Dl(t,a);l!==null&&Pt(l,t,a),Ic(t,a)}}var jn=!0;function Xh(t,a,l,e){var u=r.T;r.T=null;var n=z.p;try{z.p=2,Pc(t,a,l,e)}finally{z.p=n,r.T=u}}function Qh(t,a,l,e){var u=r.T;r.T=null;var n=z.p;try{z.p=8,Pc(t,a,l,e)}finally{z.p=n,r.T=u}}function Pc(t,a,l,e){if(jn){var u=tf(e);if(u===null)Gc(t,a,e,Yn,l),fr(t,e);else if(Lh(u,t,a,l,e))e.stopPropagation();else if(fr(t,e),a&4&&-1<Zh.indexOf(t)){for(;u!==null;){var n=wl(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Tl(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-ua(i);c.entanglements[1]|=f,i&=~f}Na(n),(tt&6)===0&&(pn=la()+500,ou(0))}}break;case 31:case 13:c=Dl(n,2),c!==null&&Pt(c,n,2),yn(),Ic(n,2)}if(n=tf(e),n===null&&Gc(t,a,e,Yn,l),n===u)break;u=n}u!==null&&e.stopPropagation()}else Gc(t,a,e,null,l)}}function tf(t){return t=li(t),af(t)}var Yn=null;function af(t){if(Yn=null,t=Ll(t),t!==null){var a=k(t);if(a===null)t=null;else{var l=a.tag;if(l===13){if(t=ht(a),t!==null)return t;t=null}else if(l===31){if(t=Ut(a),t!==null)return t;t=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Yn=t,null}function cr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_r()){case mf:return 2;case gf:return 8;case zu:case Mr:return 32;case pf:return 268435456;default:return 32}default:return 32}}var lf=!1,yl=null,vl=null,xl=null,pu=new Map,bu=new Map,Sl=[],Zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fr(t,a){switch(t){case"focusin":case"focusout":yl=null;break;case"dragenter":case"dragleave":vl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":pu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(a.pointerId)}}function yu(t,a,l,e,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:l,eventSystemFlags:e,nativeEvent:n,targetContainers:[u]},a!==null&&(a=wl(a),a!==null&&nr(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),t)}function Lh(t,a,l,e,u){switch(a){case"focusin":return yl=yu(yl,t,a,l,e,u),!0;case"dragenter":return vl=yu(vl,t,a,l,e,u),!0;case"mouseover":return xl=yu(xl,t,a,l,e,u),!0;case"pointerover":var n=u.pointerId;return pu.set(n,yu(pu.get(n)||null,t,a,l,e,u)),!0;case"gotpointercapture":return n=u.pointerId,bu.set(n,yu(bu.get(n)||null,t,a,l,e,u)),!0}return!1}function or(t){var a=Ll(t.target);if(a!==null){var l=k(a);if(l!==null){if(a=l.tag,a===13){if(a=ht(l),a!==null){t.blockedOn=a,zf(t.priority,function(){ir(l)});return}}else if(a===31){if(a=Ut(l),a!==null){t.blockedOn=a,zf(t.priority,function(){ir(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rn(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var l=tf(t.nativeEvent);if(l===null){l=t.nativeEvent;var e=new l.constructor(l.type,l);ai=e,l.target.dispatchEvent(e),ai=null}else return a=wl(l),a!==null&&nr(a),t.blockedOn=l,!1;a.shift()}return!0}function sr(t,a,l){Rn(t)&&l.delete(a)}function wh(){lf=!1,yl!==null&&Rn(yl)&&(yl=null),vl!==null&&Rn(vl)&&(vl=null),xl!==null&&Rn(xl)&&(xl=null),pu.forEach(sr),bu.forEach(sr)}function Cn(t,a){t.blockedOn===a&&(t.blockedOn=null,lf||(lf=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,wh)))}var Bn=null;function rr(t){Bn!==t&&(Bn=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Bn===t&&(Bn=null);for(var a=0;a<t.length;a+=3){var l=t[a],e=t[a+1],u=t[a+2];if(typeof e!="function"){if(af(e||l)===null)continue;break}var n=wl(l);n!==null&&(t.splice(a,3),a-=3,tc(n,{pending:!0,data:u,method:l.method,action:e},e,u))}}))}function Ae(t){function a(f){return Cn(f,t)}yl!==null&&Cn(yl,t),vl!==null&&Cn(vl,t),xl!==null&&Cn(xl,t),pu.forEach(a),bu.forEach(a);for(var l=0;l<Sl.length;l++){var e=Sl[l];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Sl.length&&(l=Sl[0],l.blockedOn===null);)or(l),l.blockedOn===null&&Sl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(e=0;e<l.length;e+=3){var u=l[e],n=l[e+1],i=u[Jt]||null;if(typeof n=="function")i||rr(l);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Jt]||null)c=i.formAction;else if(af(u)!==null)continue}else c=i.action;typeof c=="function"?l[e+1]=c:(l.splice(e,3),e-=3),rr(l)}}}function dr(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function a(){u!==null&&(u(),u=null),e||setTimeout(l,20)}function l(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),u!==null&&(u(),u=null)}}}function ef(t){this._internalRoot=t}qn.prototype.render=ef.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(p(409));var l=a.current,e=ra();er(l,e,t,a,null,null)},qn.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;er(t.current,2,null,t,null,null),yn(),a[Zl]=null}};function qn(t){this._internalRoot=t}qn.prototype.unstable_scheduleHydration=function(t){if(t){var a=Sf();t={blockedOn:null,target:t,priority:a};for(var l=0;l<Sl.length&&a!==0&&a<Sl[l].priority;l++);Sl.splice(l,0,t),l===0&&or(t)}};var hr=dt.version;if(hr!=="19.2.3")throw Error(p(527,hr,"19.2.3"));z.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=E(a),t=t!==null?F(t):null,t=t===null?null:t.stateNode,t};var Vh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:r,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gn.isDisabled&&Gn.supportsFiber)try{_e=Gn.inject(Vh),ea=Gn}catch{}}return xu.createRoot=function(t,a){if(!B(t))throw Error(p(299));var l=!1,e="",u=xs,n=Ss,i=zs;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=ar(t,1,!1,null,null,l,e,null,u,n,i,dr),t[Zl]=a.current,qc(t),new ef(a)},xu.hydrateRoot=function(t,a,l){if(!B(t))throw Error(p(299));var e=!1,u="",n=xs,i=Ss,c=zs,f=null;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),a=ar(t,1,!0,a,l??null,e,u,f,n,i,c,dr),a.context=lr(null),l=a.current,e=ra(),e=Jn(e),u=il(e),u.callback=null,cl(l,u,e),l=e,a.current.lanes=l,De(a,l),Na(a),t[Zl]=a.current,qc(t),new qn(a)},xu.version="19.2.3",xu}var Er;function em(){if(Er)return cf.exports;Er=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(dt){console.error(dt)}}return A(),cf.exports=lm(),cf.exports}var um=em();const nm=()=>{const[A,dt]=_t.useState("home"),[$,p]=_t.useState([{type:"bot",text:"Hey! I'm so happy you're here! Chalo Chalo Jald se hi type kar ke bhejo "}]),[B,k]=_t.useState(""),[ht,Ut]=_t.useState(!1),[N,E]=_t.useState(!1),[F,j]=_t.useState(!1),[ft,Lt]=_t.useState(!1),Nt=_t.useRef(null),ot=_t.useRef(null),Kt=_t.useRef(null),[xt,da]=_t.useState(!1),[At,Ht]=_t.useState(!1),ta=_t.useRef(null),Qt=r=>{r.key==="Enter"&&Rt()};_t.useEffect(()=>{A==="letter"&&setTimeout(()=>Ut(!0),300)},[A]),_t.useEffect(()=>{Nt.current?.scrollIntoView({behavior:"smooth"})},[$]);const Q=(r,z=.35,O=800)=>{try{r.volume=0;const R=r.play();R&&R.catch(()=>{});const W=50,s=z/(O/W),x=setInterval(()=>{const T=Math.min(z,r.volume+s);r.volume=T,T>=z&&clearInterval(x)},W)}catch{}},jt=(r,z=600,O=!0)=>{const W=r.volume/(z/50),s=setInterval(()=>{const x=Math.max(0,r.volume-W);r.volume=x,x<=0&&(clearInterval(s),O&&(r.pause(),r.currentTime=0))},50)},Yt=()=>{const r=ot.current;if(r)try{r.loop=!0,r.muted=!1,r.volume=.35;const z=r.play();z&&z.then(()=>{da(!0),Ht(!1)}).catch(()=>{try{r.muted=!0,r.play().catch(()=>{}),Ht(!0)}catch{}})}catch{}},Fa=()=>{const r=ot.current;if(!xt&&r)try{r.loop=!0,r.muted=!1,r.volume=.35;const z=r.play();z&&z.catch(()=>{}),da(!0)}catch{}setTimeout(()=>dt("letter"),150)},ha=()=>{dt("chat"),ot.current&&jt(ot.current,700,!0),Kt.current&&(Kt.current.loop=!0,Q(Kt.current,.35,900))};_t.useEffect(()=>{if(A==="home"&&ot.current&&!xt){const r=ot.current;r.loop=!0,r.volume=.35;const z=r.play();z&&z.then(()=>{da(!0),Ht(!1)}).catch(()=>{})}},[A,xt]),_t.useEffect(()=>{if(!At)return;const r=()=>{const z=ot.current;z&&(z.muted=!1,Q(z,.35,700)),Ht(!1),window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",r)};return window.addEventListener("pointerdown",r,{once:!0}),window.addEventListener("keydown",r,{once:!0}),()=>{window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",r)}},[At]),_t.useEffect(()=>{if(A!=="letter")return;const r=ta.current;if(!r)return;const z=()=>{const R=ot.current;R&&(jt(R,450,!1),setTimeout(()=>{try{R.pause()}catch{}},470))},O=()=>{const R=ot.current;if(R){try{R.play().catch(()=>{})}catch{}Q(R,.35,700)}};return r.addEventListener("play",z),r.addEventListener("pause",O),r.addEventListener("ended",O),()=>{r.removeEventListener("play",z),r.removeEventListener("pause",O),r.removeEventListener("ended",O)}},[A]);const Rt=()=>{if(!B.trim())return;const r=[...$,{type:"user",text:B}],z=B.toLowerCase().trim();let O="",R=!1;(z==="hello"||z==="hi"||z==="hii"||z==="hey")&&!ft?(O="Surpriseee, Happy Birthday Anu Bache! Yup Yup Apurv this side apka pati aur best friend dono. 🎉🎂 Shi bolta hai piyush maan lo uski baat koi gf nhi hai meri na mai kisi ke sath talking stage pe hu, Wo to mai apko isliye bol raha tha ki ap gussaa ho jao aur ap apne pe dhyaan dene lag jao. And yes I am very Proud of my bacha jaise ap sambhal rhe ho acha kar rhe ho itna jayda improve kar liya hai its so impressive aur ap bilkul bhi guilt mat liya karo, ha i know cheezen thik nhi hai ap thik nhi ho mai thik nhi ho par ap thik to mai bhi thik. And one more thing Congratulations for your internship your reappear clear. Keep Going Ha mai bhi apko miss karta hu aur block ke liye bhi sorry mai emotional ho jata hu apko dekh ke bas isliye. I am and I Will always be proud of you remember this, You are and You will alway special to me. At last Love you 😚😚😟😟😟Ye lo emoji miss kar rhe the na app. Dont Cry and dont be shant pata chalta hai feel hota hai ap shant ho rote ho i feel sorryy apke liye heavy feel hota hai apko so sorryyy but if you will be happy then only i will be happy ba so Always Be Happpyyyy because you are strong and confident. Good Boi",R=!0,Lt(!0)):z.includes("thankyou so much ji")?O="🥰 You're so welcome! You deserve all the happiness in the world! So Laddooo Kaisa laga surprise sorry agar bura laga ho to apurv ki jagah nhi le raha tha bas try kiya ki tujhe thoda acha feel ho.":z.includes("Awllee")?O="💕 Aww, that means everything! You're truly special and loved!":O="✨ That's wonderful! Today is all about YOU and celebrating the amazing person you are.",E(!0),j(!0),setTimeout(()=>E(!1),220),setTimeout(()=>j(!1),500),setTimeout(()=>{p([...r,{type:"bot",text:O}]),R&&setTimeout(()=>{p(W=>[...W,{type:"bot",images:["/Memory 1.jpg","/Memory 2.jpg","/Memory 3.jpg"]}])},800)},800),p(r),k("")},Ha=()=>U.jsxs("div",{className:"page-container home-page",onPointerDown:Yt,onTouchStart:Yt,onClick:Yt,children:[U.jsx("div",{className:"ambient-orbs","aria-hidden":"true",children:[...Array(5)].map((r,z)=>U.jsx("div",{className:"orb",style:{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*70}%`,animationDelay:`${z*2}s`,transform:`translate(-50%, -50%) scale(${.8+Math.random()*.6})`}},z))}),U.jsxs("div",{className:"polaroid-container",children:[U.jsx("div",{className:"polaroid",style:{"--rotation":"-3deg"},children:U.jsx("img",{src:"/laddoo-1.jpg",alt:"Memory moment"})}),U.jsx("div",{className:"polaroid",style:{"--rotation":"2deg"},children:U.jsx("img",{src:"/laddoo-2.jpg",alt:"Happy memory"})}),U.jsx("div",{className:"polaroid",style:{"--rotation":"-4deg"},children:U.jsx("img",{src:"/laddoo-3.jpg",alt:"Special moment"})}),U.jsx("div",{className:"polaroid",style:{"--rotation":"3deg"},children:U.jsx("img",{src:"/laddoo-4.jpg",alt:"Cherished memory"})})]}),U.jsx("div",{className:"gift-ribbon-container",children:U.jsxs("div",{className:"gift-ribbon",children:[U.jsx("div",{className:"ribbon-left"}),U.jsx("div",{className:"ribbon-right"}),U.jsx("div",{className:"ribbon-knot"})]})}),U.jsxs("div",{className:"hero-content",children:[U.jsx("h1",{className:"main-heading",children:"Happy Birthday Laddooo Master "}),U.jsx("p",{className:"hero-subtext",children:"Today is a celebration of YOU — the most amazing friend anyone could ask for. Get ready for a special surprise made just for you..."}),U.jsx("button",{className:"cta-button",onClick:Fa,children:"Open Your Surprise →"})]})]}),Ta=()=>U.jsxs("div",{className:"page-container letter-page",onPointerDown:xt?void 0:Yt,onTouchStart:xt?void 0:Yt,onClick:xt?void 0:Yt,children:[U.jsxs("div",{className:`letter-card ${ht?"visible":""}`,children:[U.jsx("div",{className:"letter-header",children:U.jsx("h2",{children:"A Letter For You Hnji Hnji Laddooo Bacha ke Liye Hi Hai "})}),U.jsxs("div",{className:"letter-content",children:[U.jsx("p",{children:"Dear Laddoooo Master,"}),U.jsx("p",{children:"Happy Birthday to Princess yes yess ye ke chota sa try meri taraf se i know it's not much tere se jayda pyara nhi hai. ha pata hai abhi sab thik nhi hai apurv ka lag raga hoga tujhe laddoooo par he is also wishing you Happy Birthday ha pati hai wo apka aur hamesha rahega Apko hamesha miss karta hai wo mai bata raha hu na."}),U.jsx("p",{children:"So Hey guys apko pata hai life ki unending wierd si race mai suddenly ek achi si dost mil gyi ha maine kabhi nhi socha tha ki ek din apki jaisi dost meri life mai ayegi jo meri har baat ko samjhegi, par bus ke last seat ke north south pole se sath baithne lagi aur fir kya tha humari dosti ki shuruwat ho gyi.Hmm logo ne bahut chidaya bahut bola par aisi waisi dosti thodi na thi jo iti assani se tut jaye. wo baat alag hai hamare beech mai kai baar disaggreement hua par fir bhi humne apni dosti ko kabhi kamzor nhi hone diya. starting mai laga are  bahut time hai abhi toh par dekhte dekhte time kab chala gaya pata hi nhi chala ab to laddooo college se jane wali hai ha uski problems thi par akele uski nhi thi sath sath meri bhi thi, ha bahut natak karti hai par cute bhi hai, ha ashleelta karti hai par kabhi galat matlab nhi bola, ha dantti bhi hai par pyaar se bhi bolti hai, ha thoda time leti hai samjhne par samjh Jati hai. par achanak se ab realise hota hai ki kitni jaldi time nikal gaya aur uske jane ka samaya aa gaya hh sochta hu to mai bhi emotional ho jata hu uske jane ke baad ye college sirf ek haunted place ban jayega aur wresting wring jaha mujhe roj hustle karna padega wo bhi akele kyuki time hi itni jaldi nikal gaya pata bhi nhi chala. Mera bus ka safar to bas ab uske comfy support ko miss karte hue hu nikal jayega bahut galat aadat hai ye support leke ninnii wali. roj miss karta hu apni uncomfortable ninnu travelling ke sath. kuch din pehel hi realise hua ki last dandia night hai uska is college mai ab uske jane ka time ho gaya bahut jaldi Diwali fest sab chala jayega aur wo bhi chali jayegi ha aha aur koi nhi teri hi baat kar raha hu kyu pareshan ho rhi hai mai bhi sochta hu kaise mil gyi itni achi dost. Sachi mai laddoo bahut acha laga agara tere Jaisi dost nhi hoti toh shayad ye college itna acha nhi hota tune har birthday special banaya ha bahut si achi aadat bhi sikha di aur rona bhi sikha diya ab kya ab toh chali jayegi na ab kiske aage rounga mai. ya kiske aage hasunga ya hasaunga kab jane ka time aa gaya pata hi nihi chala"}),U.jsx("p",{children:"At Last Laddooo thankyou mujhe surprise dene ke liye aur meri life ka ek bahut hi special part banne ke liye, itne pyaare pyaare gifts dene ke liye Wishing you a day filled with love, laughter, and all the things that make you happiest. Here's to another year of amazing adventures and unforgettable memories together!"}),U.jsxs("p",{className:"letter-signature",children:["With all my love in a Possitive Way,",U.jsx("br",{}),"Your Best Friend Gudduuu"]})]})]}),U.jsxs("div",{className:`memories-section ${ht?"visible":""}`,children:[U.jsx("h3",{children:"Our Beautiful Memories 🎬"}),U.jsx("div",{className:"video-container",children:U.jsxs("video",{ref:ta,controls:!0,playsInline:!0,children:[U.jsx("source",{src:"/birthday-video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),U.jsx("button",{className:"cta-button",onClick:ha,children:"One More Surprise"})]}),aa=()=>U.jsxs("div",{className:"page-container chat-page",children:[U.jsxs("div",{className:"chat-header",children:[U.jsx("h2",{children:" Hellooo! Apurv Here "}),U.jsx("p",{children:"I'm here to make your day even more special"})]}),U.jsxs("div",{className:`chat-messages ${F?"pulse":""}`,children:[$.map((r,z)=>U.jsxs("div",{className:`message ${r.type}`,children:[r.text&&U.jsx("div",{className:"message-bubble",children:r.text}),r.images&&r.images.length>0&&U.jsx("div",{className:"message-images",children:r.images.map((O,R)=>U.jsx("div",{className:"image-bubble",children:U.jsx("img",{src:O,alt:`Memory ${R+1}`})},R))})]},z)),U.jsx("div",{ref:Nt})]}),U.jsxs("div",{className:"chat-input-container",children:[U.jsx("input",{type:"text",value:B,onChange:r=>k(r.target.value),onKeyDown:Qt,placeholder:"Type your message...",className:"chat-input"}),U.jsx("button",{onClick:Rt,className:`send-button ${N?"sending":""}`,children:"Send"})]})]});return U.jsxs("div",{className:"birthday-website",children:[U.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --radius-card: 24px;
          --radius-bubble: 18px;
          --shadow-soft: 0 1px 3px rgba(59,130,246,0.08), 0 8px 24px rgba(59,130,246,0.08);
          --shadow-inset: inset 0 2px 8px rgba(59,130,246,0.04);
          --easing-soft: cubic-bezier(0.4, 0, 0.2, 1);
          --duration-entrance: 0.6s;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .birthday-website {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f8fafc 70%, #eff6ff 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .page-container {
          min-height: 100vh;
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* HOME PAGE */
        .home-page {
          position: relative;
          text-align: center;
          background: 
            radial-gradient(circle at 20% 30%, rgba(224, 242, 254, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(186, 230, 253, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(240, 249, 255, 0.3) 0%, transparent 70%);
          overflow: hidden;
        }

        .home-page::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: subtleMove 60s linear infinite;
          pointer-events: none;
          opacity: 1;
        }

        @keyframes subtleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .floating-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .heart {
          position: absolute;
          font-size: 32px;
          animation: float linear infinite;
          opacity: 0;
          filter: drop-shadow(0 3px 10px rgba(59, 130, 246, 0.25));
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.7);
            opacity: 0;
          }
          8% {
            opacity: 0.65;
          }
          50% {
            opacity: 0.75;
            transform: translateY(50vh) rotate(180deg) scale(1.05);
          }
          92% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg) scale(0.7);
            opacity: 0;
          }
        }

        .hero-content {
          z-index: 10;
          position: relative;
          max-width: 680px;
          background: transparent;
          backdrop-filter: none;
          padding: 40px 32px;
          border-radius: 0;
          box-shadow: none;
          border: none;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          
          /* Initial hidden state */
          opacity: 0;
          transform: translateY(30px) scale(0.96);
          
          /* Reveal then continuous calm float */
          animation: 
            revealHero 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.9s forwards,
            heroFloat 18s ease-in-out 3.4s infinite alternate;
        }

        @keyframes revealHero {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(8px);
          }
          50% {
            opacity: 0.6;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Gentle continuous float to keep hero alive */
        @keyframes heroFloat {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.005); }
          100% { transform: translateY(0) scale(1); }
        }

        /* Glow halo that appears during reveal */
        .hero-content::after {
          content: '';
          position: absolute;
          top: -60px;
          left: -60px;
          right: -60px;
          bottom: -60px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          animation: glowReveal 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }

        @keyframes glowReveal {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        /* === GIFT RIBBON ANIMATION === */
        
        /* Ribbon container - wrapper around hero card */
        .gift-ribbon-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 680px;
          max-width: 90%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        /* Horizontal ribbon across center */
        .gift-ribbon {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 80px;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Left ribbon part */
        .ribbon-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%);
          border-radius: 12px 0 0 12px;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide left, rotate, fade out */
          animation: ribbonSlideLeft 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Right ribbon part */
        .ribbon-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          border-radius: 0 12px 12px 0;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide right, rotate, fade out */
          animation: ribbonSlideRight 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Center knot/bow decoration */
        .ribbon-knot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.3),
            0 4px 16px rgba(14, 165, 233, 0.4),
            0 8px 32px rgba(14, 165, 233, 0.3),
            inset 0 2px 6px rgba(255, 255, 255, 0.4),
            inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          z-index: 20;
          
          /* Animation: scale up then fade out */
          animation: knotReveal 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Ribbon shine effect */
        .ribbon-left::before,
        .ribbon-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
          border-radius: inherit;
        }

        /* Ribbon animations */
        @keyframes ribbonSlideLeft {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-120%) rotate(-15deg);
            opacity: 0;
          }
        }

        @keyframes ribbonSlideRight {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(120%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes knotReveal {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          30% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
          70% {
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        /* Hide ribbon after animation completes */
        @keyframes hideRibbon {
          to {
            display: none;
            pointer-events: none;
            visibility: hidden;
          }
        }

        .gift-ribbon-container {
          animation: hideRibbon 0.1s linear 2.1s forwards;
        }

        /* === POLAROID PHOTOS SECTION === */
        .polaroid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
          top: 0;
          left: 0;
        }

        .polaroid {
          position: absolute;
          width: 160px;
          height: 180px;
          background: #fafafa;
          padding: 12px;
          padding-bottom: 32px;
          border-radius: 6px;
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 12px 48px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          opacity: 0;
          transform: translateY(40px) rotate(0deg);
          animation: polaroidFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          pointer-events: auto;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          rotate: var(--rotation, 0deg);
        }

        /* Staggered polaroid animations */
        .polaroid:nth-child(1) {
          animation-delay: 3.8s;
          bottom: 12%;
          left: 8%;
        }

        .polaroid:nth-child(2) {
          animation-delay: 4.2s;
          top: 15%;
          right: 10%;
        }

        .polaroid:nth-child(3) {
          animation-delay: 4.6s;
          bottom: 18%;
          right: 6%;
        }

        .polaroid:nth-child(4) {
          animation-delay: 5s;
          top: 20%;
          left: 12%;
        }

        @keyframes polaroidFadeIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.88);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .polaroid img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 3px;
          display: block;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        /* Subtle paper texture on polaroid */
        .polaroid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23fff' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
          border-radius: 6px;
          pointer-events: none;
        }

        .polaroid:hover {
          transform: translateY(-8px) rotate(var(--rotation, 0deg));
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.2),
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 16px 56px rgba(0, 0, 0, 0.12);
        }

        .polaroid:hover img {
          transform: scale(1.02);
        }

        /* Floating animation for polaroids after they appear */
        .polaroid {
          animation: 
            polaroidFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            polaroidFloat 6s ease-in-out 5s infinite;
        }

        @keyframes polaroidFloat {
          0% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--rotation, 0deg)); }
          100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
        }

        /* Mobile: Adjust polaroids visibility */
        @media (max-width: 1024px) {
          .polaroid {
            width: 140px;
            height: 160px;
            padding: 10px;
            padding-bottom: 28px;
          }

          .polaroid img {
            height: 100px;
          }

          .polaroid:nth-child(1) { left: 4%; bottom: 8%; }
          .polaroid:nth-child(2) { right: 6%; top: 12%; }
          .polaroid:nth-child(3) { right: 3%; bottom: 12%; }
          .polaroid:nth-child(4) { left: 8%; top: 18%; }
        }

        @media (max-width: 768px) {
          .polaroid-container {
            overflow: visible;
          }

          .polaroid {
            width: 120px;
            height: 150px;
            padding: 8px;
            padding-bottom: 18px;
            transform: scale(0.85);
            transform-origin: center;
          }

          .polaroid img {
            height: 90px;
          }

          /* Position polaroids safely at corners with subtle rotation */
          .polaroid:nth-child(1) { 
            bottom: 80px;
            left: 12px;
            rotate: -3deg;
            opacity: 0.9;
            animation-delay: 3.8s;
          }

          .polaroid:nth-child(2) { 
            top: 120px;
            right: 12px;
            rotate: 4deg;
            opacity: 0.9;
            animation-delay: 4.2s;
          }

          .polaroid:nth-child(3) { 
            display: none;
          }

          .polaroid:nth-child(4) { 
            display: none;
          }
        }

        .hero-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 0;
          background: transparent;
          border-radius: 36px 36px 0 0;
          display: none;
        }

        .hero-content:hover {
          transform: translateY(-2px) scale(1);
          box-shadow: none;
        }

        .main-heading {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2.75rem, 8vw, 4.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0369a1 0%, #0284c7 25%, #0ea5e9 50%, #38bdf8 75%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 28px;
          line-height: 1.2;
          letter-spacing: 1px;
          filter: drop-shadow(0 2px 12px rgba(14, 165, 233, 0.15));
          position: relative;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Staggered reveal - appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hero-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.08rem, 3vw, 1.2rem);
          font-weight: 400;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 40px;
          letter-spacing: 0.3px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.9s forwards;
        }

        .cta-button {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          padding: 20px 52px;
          font-size: 1.08rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          margin-top: 8px;
          position: relative;
          overflow: hidden;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          
          /* Appears after ribbon opens */
          animation: 
            buttonReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 3.3s forwards,
            idleGlow 6s ease-in-out 5s infinite;
        }

        /* Faster reveal for the letter page CTA (no long delay) */
        .letter-page .cta-button {
          animation: buttonReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards, idleGlow 6s ease-in-out 2s infinite;
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* One-time gentle pulse after button appears */
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 
              0 2px 4px rgba(14, 165, 233, 0.2),
              0 8px 16px rgba(14, 165, 233, 0.15),
              0 16px 32px rgba(14, 165, 233, 0.1),
              inset 0 -2px 0 rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 4px 8px rgba(14, 165, 233, 0.3),
              0 12px 24px rgba(14, 165, 233, 0.25),
              0 20px 40px rgba(14, 165, 233, 0.2),
              0 0 0 6px rgba(56, 189, 248, 0.15),
              inset 0 -2px 0 rgba(0, 0, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transition: left 0.7s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-button:hover::after {
          opacity: 1;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 12px 24px rgba(14, 165, 233, 0.2),
            0 20px 40px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .cta-button:active {
          transform: translateY(-2px) scale(0.98);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 12px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.08);
        }

        /* Subtle idle glow loop to keep button inviting */
        @keyframes idleGlow {
          0% { box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% { box-shadow: 
            0 4px 10px rgba(14, 165, 233, 0.26),
            0 12px 22px rgba(14, 165, 233, 0.2),
            0 20px 40px rgba(14, 165, 233, 0.14),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          100% { box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 0.2);
          }
        }

        /* Ambient orbs styling */
        .ambient-orbs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }
        .ambient-orbs .orb {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.18;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.22) 40%, transparent 70%);
          animation: drift 24s ease-in-out infinite;
        }
        @keyframes drift {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -52%) scale(1.06); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }



        /* LETTER PAGE */
        .letter-page {
          padding: 56px 20px;
          max-width: 900px;
          margin: 0 auto;
          background: radial-gradient(circle at center, rgba(240, 249, 255, 0.5) 0%, transparent 70%);
        }

        .letter-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 56px 48px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .letter-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letter-header h2 {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.95rem, 5vw, 2.65rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.5px;
        }

        .letter-content {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.15rem, 3vw, 1.45rem);
          color: #334155;
          line-height: 2.1;
          font-weight: 500;
        }

        .letter-content p {
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .letter-card.visible .letter-content p:nth-child(1) { animation-delay: 0.2s; }
        .letter-card.visible .letter-content p:nth-child(2) { animation-delay: 0.4s; }
        .letter-card.visible .letter-content p:nth-child(3) { animation-delay: 0.6s; }
        .letter-card.visible .letter-content p:nth-child(4) { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .letter-signature {
          margin-top: 48px;
          font-style: italic;
          color: #0284c7;
          font-size: clamp(1.15rem, 3vw, 1.35rem);
        }

        /* PHOTOS GRID SECTION */
        .photos-grid-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        }

        .photos-grid-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .photos-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .photos-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 400;
          color: #64748b;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.2px;
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 900px;
          margin: 0 auto;
        }

        .photo-card {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 
            0 2px 4px rgba(59, 130, 246, 0.06),
            0 4px 12px rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(224, 242, 254, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: photoFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Staggered fade-in for each photo card */
        .photos-grid-section.visible .photo-card:nth-child(1) { animation-delay: 0.8s; }
        .photos-grid-section.visible .photo-card:nth-child(2) { animation-delay: 1s; }
        .photos-grid-section.visible .photo-card:nth-child(3) { animation-delay: 1.2s; }
        .photos-grid-section.visible .photo-card:nth-child(4) { animation-delay: 1.4s; }
        .photos-grid-section.visible .photo-card:nth-child(5) { animation-delay: 1.6s; }
        .photos-grid-section.visible .photo-card:nth-child(6) { animation-delay: 1.8s; }

        @keyframes photoFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .photo-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 
            0 4px 8px rgba(59, 130, 246, 0.12),
            0 8px 20px rgba(59, 130, 246, 0.15),
            0 16px 40px rgba(96, 165, 250, 0.12);
          border-color: rgba(186, 230, 253, 0.8);
        }

        .photo-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          position: relative;
          margin-bottom: 12px;
        }

        .photo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-card:hover .photo-placeholder img {
          transform: scale(1.08);
        }

        /* Placeholder styling when image is not loaded */
        .photo-placeholder:empty::before,
        .photo-placeholder img[src=""]::before,
        .photo-placeholder img:not([src])::before {
          content: '📷';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          opacity: 0.3;
        }

        .photo-caption {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: #64748b;
          text-align: center;
          letter-spacing: 0.1px;
          margin: 0;
          line-height: 1.4;
        }

        .memories-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }

        .memories-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .memories-section h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.06),
            0 8px 20px rgba(59, 130, 246, 0.12),
            0 16px 40px rgba(96, 165, 250, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-container:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 6px 12px rgba(0, 0, 0, 0.08),
            0 12px 28px rgba(59, 130, 246, 0.14),
            0 20px 48px rgba(96, 165, 250, 0.12);
        }

        .video-placeholder {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #0284c7;
        }

        .play-icon {
          font-size: 4rem;
          margin-bottom: 15px;
        }

        .video-container video {
          width: 100%;
          display: block;
        }

        /* CHAT PAGE */
        .chat-page {
          max-width: 720px;
          width: 100%;
          padding: 32px 20px;
          justify-content: flex-start;
          background: radial-gradient(circle at top, rgba(240, 249, 255, 0.4) 0%, transparent 60%);
        }

        .chat-header {
          text-align: center;
          margin-bottom: 28px;
          padding: 32px 28px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 12px 32px rgba(96, 165, 250, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .chat-header h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.85rem, 5vw, 2.35rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .chat-header p {
          font-family: 'Inter', sans-serif;
          font-size: 1.02rem;
          color: #64748b;
          font-weight: 400;
          letter-spacing: 0.1px;
        }

        .chat-messages {
          flex: 1;
          width: 100%;
          max-height: 52vh;
          overflow-y: auto;
          padding: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-card);
          box-shadow: 
            inset 0 2px 8px rgba(59, 130, 246, 0.04),
            0 1px 3px rgba(59, 130, 246, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
          scroll-behavior: smooth;
        }

        .chat-messages.pulse {
          animation: pulseBorder 0.5s var(--easing-soft);
        }

        @keyframes pulseBorder {
          0% {
            box-shadow: var(--shadow-inset), 0 1px 3px rgba(59,130,246,0.06);
          }
          50% {
            box-shadow: inset 0 0 0 3px rgba(56,189,248,0.12), 0 4px 12px rgba(59,130,246,0.12);
          }
          100% {
            box-shadow: var(--shadow-inset), 0 1px 3px rgba(59,130,246,0.06);
          }
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4);
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.6);
        }

        .message {
          display: flex;
          margin-bottom: 18px;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.bot {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 78%;
          padding: 14px 20px;
          border-radius: var(--radius-bubble);
          font-family: 'Inter', sans-serif;
          font-size: 0.98rem;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.1px;
          position: relative;
          transition: all 0.3s var(--easing-soft);
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border-bottom-right-radius: 6px;
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.15),
            0 4px 12px rgba(14, 165, 233, 0.1);
        }

        .message.user .message-bubble:hover {
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.12);
          transform: translateY(-1px);
        }

        .message.bot .message-bubble {
          background: rgba(240, 249, 255, 0.9);
          color: #334155;
          border-bottom-left-radius: 6px;
          box-shadow: 
            0 1px 3px rgba(148, 163, 184, 0.1),
            0 2px 8px rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .message.bot .message-bubble:hover {
          background: rgba(240, 249, 255, 1);
          border-color: rgba(186, 230, 253, 0.8);
          transform: translateY(-1px);
        }

        .chat-input-container {
          display: flex;
          gap: 12px;
          width: 100%;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          padding: 16px 24px;
          border: 2px solid rgba(186, 230, 253, 0.5);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #334155;
          outline: none;
          transition: all 0.25s var(--easing-soft);
          box-shadow: 0 2px 8px rgba(148, 163, 184, 0.08);
        }

        .chat-input::placeholder {
          color: #94a3b8;
        }

        .chat-input:focus {
          border-color: #38bdf8;
          background: white;
          box-shadow: 
            0 0 0 3px rgba(56, 189, 248, 0.1),
            0 4px 12px rgba(59, 130, 246, 0.12);
          transform: translateY(-1px);
        }

        .send-button {
          padding: 16px 36px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.25s var(--easing-soft);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 16px rgba(14, 165, 233, 0.15);
        }

        .send-button.sending {
          transform: translateY(-1px) scale(0.98);
          filter: brightness(1.04);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 10px 20px rgba(14, 165, 233, 0.2);
        }

        .send-button:active {
          transform: translateY(0);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 4px 12px rgba(14, 165, 233, 0.15);
        }

        /* MESSAGE IMAGES IN CHAT */
        .message-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 95%;
          margin-top: 8px;
        }

        /* If only one image, make it larger */
        .message-images:has(.image-bubble:only-child) {
          grid-template-columns: 1fr;
          max-width: 75%;
        }

        /* If 3 images, make last one span full width */
        .message-images:has(.image-bubble:nth-child(3):last-child) .image-bubble:last-child {
          grid-column: 1 / -1;
        }

        .image-bubble {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 2px 6px rgba(59, 130, 246, 0.12),
            0 6px 16px rgba(96, 165, 250, 0.15);
          transition: all 0.3s var(--easing-soft);
          background: rgba(240, 249, 255, 0.5);
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          aspect-ratio: 3 / 4;
          min-height: 280px;
        }

        .image-bubble:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 10px rgba(59, 130, 246, 0.18),
            0 10px 24px rgba(96, 165, 250, 0.2);
        }

        .image-bubble img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Placeholder for missing images */
        .image-bubble img[src*=".jpg"]:not([src^="data:"]) {
          min-height: 200px;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        .image-bubble img[src=""]:before,
        .image-bubble img:not([src]):before {
          content: '📷';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 200px;
          font-size: 3rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .page-container {
            padding: 24px 16px;
          }

          .hero-content {
            padding: 32px 20px;
            border-radius: 0;
            max-width: 100%;
            background: transparent;
            box-shadow: none;
          }

          /* Ribbon responsive sizing */
          .gift-ribbon-container {
            width: 92%;
          }

          .gift-ribbon {
            height: 60px;
          }

          .ribbon-knot {
            width: 48px;
            height: 48px;
          }

          .main-heading {
            margin-bottom: 20px;
            letter-spacing: 0.5px;
            font-size: clamp(2rem, 6vw, 3rem);
          }

          .hero-subtext {
            margin-bottom: 28px;
            line-height: 1.8;
            font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          }

          .cta-button {
            padding: 16px 40px;
            font-size: 1rem;
          }

          .letter-card {
            padding: 40px 28px;
            border-radius: 24px;
          }

          /* Photos grid - 2 columns on tablet */
          .photos-grid-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .photos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .memories-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .chat-header {
            padding: 28px 24px;
            border-radius: 20px;
          }

          .chat-messages {
            padding: 20px;
            border-radius: 20px;
          }

          .chat-input-container {
            flex-direction: row;
            gap: 10px;
          }

          .send-button {
            padding: 16px 28px;
            white-space: nowrap;
          }

          .heart {
            font-size: 22px;
          }

          .message-bubble {
            max-width: 82%;
            padding: 12px 18px;
          }

          .message-images {
            max-width: 96%;
          }

          .message-images:has(.image-bubble:only-child) {
            max-width: 80%;
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 20px 12px;
          }

          .hero-content {
            padding: 40px 28px;
            border-radius: 28px;
            max-width: 94%;
          }

          /* Ribbon responsive sizing for small screens */
          .gift-ribbon-container {
            width: 94%;
          }

          .gift-ribbon {
            height: 50px;
          }

          .ribbon-knot {
            width: 40px;
            height: 40px;
          }

          .main-heading {
            letter-spacing: 0.3px;
          }

          .cta-button {
            padding: 17px 40px;
            font-size: 1.04rem;
          }

          .letter-card, .memories-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          /* Photos grid - 1 column on mobile */
          .photos-grid-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .photos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .photo-card {
            padding: 14px;
          }

          .photo-caption {
            font-size: 0.85rem;
          }

          .letter-content {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            line-height: 2;
          }

          .chat-header {
            padding: 24px 20px;
          }

          .chat-input-container {
            flex-direction: column;
            gap: 12px;
          }

          .send-button {
            width: 100%;
            padding: 16px 32px;
          }

          .message-bubble {
            max-width: 88%;
            font-size: 0.96rem;
          }

          .message-images {
            max-width: 98%;
            gap: 8px;
          }

          .message-images:has(.image-bubble:only-child) {
            max-width: 85%;
          }

          .image-bubble {
            border-radius: 10px;
          }

          .heart {
            font-size: 20px;
          }
        }

        @media (min-width: 1200px) {
          .hero-content {
            padding: 72px 64px;
            max-width: 720px;
          }

          .main-heading {
            margin-bottom: 32px;
          }

          .hero-subtext {
            margin-bottom: 44px;
          }

          .letter-card {
            padding: 64px 56px;
          }

          .memories-section {
            padding: 56px 48px;
          }
        }

        /* Pro polish overrides for consistent radii across major cards */
        .hero-content,
        .letter-card,
        .memories-section,
        .chat-header {
          border-radius: var(--radius-card);
        }

        /* Sound unlock prompt (mobile-friendly) */
        .sound-unlock {
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(186, 230, 253, 0.8);
          color: #0ea5e9;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          box-shadow:
            0 2px 4px rgba(14, 165, 233, 0.15),
            0 8px 20px rgba(14, 165, 233, 0.12);
          cursor: pointer;
          z-index: 50;
        }
        .sound-unlock:hover {
          background: white;
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow:
            0 4px 8px rgba(14, 165, 233, 0.2),
            0 12px 28px rgba(14, 165, 233, 0.16);
        }
      `}),U.jsx("audio",{ref:ot,src:"/welcome-song.mp3",preload:"auto",autoPlay:!0}),U.jsx("audio",{ref:Kt,src:"/chat-song.mp3",preload:"auto"}),A==="home"&&Ha(),A==="letter"&&Ta(),A==="chat"&&aa()]})};function im(){return U.jsx(nm,{})}um.createRoot(document.getElementById("root")).render(U.jsx(Fh.StrictMode,{children:U.jsx(im,{})}));
