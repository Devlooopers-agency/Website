function Hx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bm={exports:{}},Ol={},Pm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Jx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Uh=Symbol.iterator;function e0(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Dm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Um(){}Um.prototype=Is.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}var wd=Ed.prototype=new Um;wd.constructor=Ed;Im(wd,Is.prototype);wd.isPureReactComponent=!0;var Oh=Array.isArray,Om=Object.prototype.hasOwnProperty,Td={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Om.call(e,i)&&!km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:Td.current}}function t0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function n0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kh=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n0(""+t.key):e.toString(36)}function Vo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case Gx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+cc(a,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(kh,"$&/")+"/"),Vo(r,e,n,"",function(u){return u})):r!=null&&(Ad(r)&&(r=t0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Oh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+cc(s,o);a+=Vo(s,e,n,c,r)}else if(c=e0(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+cc(s,o++),a+=Vo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Vo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Go={transition:null},r0={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Td};function jm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Is;We.Fragment=Wx;We.Profiler=Yx;We.PureComponent=Ed;We.StrictMode=Xx;We.Suspense=Jx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;We.act=jm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Om.call(e,c)&&!km.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qx,_context:t},t.Consumer=t};We.createElement=Fm;We.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Kx,render:t}};We.isValidElement=Ad;We.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:i0}};We.memo=function(t,e){return{$$typeof:Zx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Go.transition;Go.transition={};try{t()}finally{Go.transition=e}};We.unstable_act=jm;We.useCallback=function(t,e){return $t.current.useCallback(t,e)};We.useContext=function(t){return $t.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};We.useEffect=function(t,e){return $t.current.useEffect(t,e)};We.useId=function(){return $t.current.useId()};We.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return $t.current.useMemo(t,e)};We.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};We.useRef=function(t){return $t.current.useRef(t)};We.useState=function(t){return $t.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return $t.current.useTransition()};We.version="18.3.1";Pm.exports=We;var z=Pm.exports;const zm=Vx(z),s0=Hx({__proto__:null,default:zm},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=z,o0=Symbol.for("react.element"),l0=Symbol.for("react.fragment"),c0=Object.prototype.hasOwnProperty,u0=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d0={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)c0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o0,type:t,key:s,ref:a,props:r,_owner:u0.current}}Ol.Fragment=l0;Ol.jsx=Bm;Ol.jsxs=Bm;bm.exports=Ol;var l=bm.exports,xu={},Hm={exports:{}},fn={},Vm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var X=L.length;L.push(W);e:for(;0<X;){var K=X-1>>>1,me=L[K];if(0<r(me,W))L[K]=W,L[X]=me,X=K;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],X=L.pop();if(X!==W){L[0]=X;e:for(var K=0,me=L.length,ve=me>>>1;K<ve;){var H=2*(K+1)-1,re=L[H],pe=H+1,oe=L[pe];if(0>r(re,X))pe<me&&0>r(oe,re)?(L[K]=oe,L[pe]=X,K=pe):(L[K]=re,L[H]=X,K=H);else if(pe<me&&0>r(oe,X))L[K]=oe,L[pe]=X,K=pe;else break e}}return W}function r(L,W){var X=L.sortIndex-W.sortIndex;return X!==0?X:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],d=1,p=null,f=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=L)i(u),W.sortIndex=W.expirationTime,e(c,W);else break;W=n(u)}}function S(L){if(y=!1,v(L),!_)if(n(c)!==null)_=!0,ne(N);else{var W=n(u);W!==null&&ie(S,W.startTime-L)}}function N(L,W){_=!1,y&&(y=!1,h(b),b=-1),m=!0;var X=f;try{for(v(W),p=n(c);p!==null&&(!(p.expirationTime>W)||L&&!I());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var me=K(p.expirationTime<=W);W=t.unstable_now(),typeof me=="function"?p.callback=me:p===n(c)&&i(c),v(W)}else i(c);p=n(c)}if(p!==null)var ve=!0;else{var H=n(u);H!==null&&ie(S,H.startTime-W),ve=!1}return ve}finally{p=null,f=X,m=!1}}var A=!1,C=null,b=-1,w=5,M=-1;function I(){return!(t.unstable_now()-M<w)}function V(){if(C!==null){var L=t.unstable_now();M=L;var W=!0;try{W=C(!0,L)}finally{W?D():(A=!1,C=null)}}else A=!1}var D;if(typeof x=="function")D=function(){x(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=V,D=function(){q.postMessage(null)}}else D=function(){g(V,0)};function ne(L){C=L,A||(A=!0,D())}function ie(L,W){b=g(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,ne(N))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var X=f;f=W;try{return L()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=f;f=L;try{return W()}finally{f=X}},t.unstable_scheduleCallback=function(L,W,X){var K=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?K+X:K):X=K,L){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,L={id:d++,callback:W,priorityLevel:L,startTime:X,expirationTime:me,sortIndex:-1},X>K?(L.sortIndex=X,e(u,L),n(c)===null&&L===n(u)&&(y?(h(b),b=-1):y=!0,ie(S,X-K))):(L.sortIndex=me,e(c,L),_||m||(_=!0,ne(N))),L},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(L){var W=f;return function(){var X=f;f=W;try{return L.apply(this,arguments)}finally{f=X}}}})(Gm);Vm.exports=Gm;var h0=Vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=z,hn=h0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wm=new Set,Sa={};function Nr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Wm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},jh={};function m0(t){return _u.call(jh,t)?!0:_u.call(Fh,t)?!1:p0.test(t)?jh[t]=!0:(Fh[t]=!0,!1)}function g0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v0(t,e,n,i){if(e===null||typeof e>"u"||g0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Nd);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Nd);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Nd);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v0(e,n,r,i)&&(n=null),i||r===null?m0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),zh=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,uc;function ta(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function x0(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case yu:return"Profiler";case bd:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ym:return(t.displayName||"Context")+".Consumer";case Xm:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ld:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function _0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=y0(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$m(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function Tu(t,e){Jm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(na(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Zm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S0=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){S0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(M0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,fs=null,ps=null;function Wh(t){if(t=Wa(t)){if(typeof Lu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Bl(e),Lu(t.stateNode,t.type,e))}}function ig(t){fs?ps?ps.push(t):ps=[t]:fs=t}function rg(){if(fs){var t=fs,e=ps;if(ps=fs=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function sg(t,e){return t(e)}function ag(){}var fc=!1;function og(t,e,n){if(fc)return t(e,n);fc=!0;try{return sg(t,e,n)}finally{fc=!1,(fs!==null||ps!==null)&&(ag(),rg())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Iu=!1;if(ci)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Iu=!1}function E0(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var la=!1,il=null,rl=!1,Du=null,w0={onError:function(t){la=!0,il=t}};function T0(t,e,n,i,r,s,a,o,c){la=!1,il=null,E0.apply(w0,arguments)}function A0(t,e,n,i,r,s,a,o,c){if(T0.apply(this,arguments),la){if(la){var u=il;la=!1,il=null}else throw Error(te(198));rl||(rl=!0,Du=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(Rr(t)!==t)throw Error(te(188))}function C0(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xh(r),t;if(s===i)return Xh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function cg(t){return t=C0(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var dg=hn.unstable_scheduleCallback,Yh=hn.unstable_cancelCallback,N0=hn.unstable_shouldYield,R0=hn.unstable_requestPaint,vt=hn.unstable_now,b0=hn.unstable_getCurrentPriorityLevel,Dd=hn.unstable_ImmediatePriority,hg=hn.unstable_UserBlockingPriority,sl=hn.unstable_NormalPriority,P0=hn.unstable_LowPriority,fg=hn.unstable_IdlePriority,kl=null,Xn=null;function L0(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:U0,I0=Math.log,D0=Math.LN2;function U0(t){return t>>>=0,t===0?32:31-(I0(t)/D0|0)|0}var so=64,ao=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ln(e),r=1<<n,i|=t[n],e&=~r;return i}function O0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ln(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=O0(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function F0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ln(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ln(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,Od,vg,xg,_g,Ou=!1,oo=[],Li=null,Ii=null,Di=null,wa=new Map,Ta=new Map,Ti=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function z0(t,e,n,i,r){switch(e){case"focusin":return Li=Gs(Li,t,e,n,i,r),!0;case"dragenter":return Ii=Gs(Ii,t,e,n,i,r),!0;case"mouseover":return Di=Gs(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Gs(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Gs(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function yg(t){var e=pr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,_g(t.priority,function(){vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pu=i,n.target.dispatchEvent(i),Pu=null}else return e=Wa(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){Wo(t)&&n.delete(e)}function B0(){Ou=!1,Li!==null&&Wo(Li)&&(Li=null),Ii!==null&&Wo(Ii)&&(Ii=null),Di!==null&&Wo(Di)&&(Di=null),wa.forEach($h),Ta.forEach($h)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,B0)))}function Aa(t){function e(r){return Ws(r,t)}if(0<oo.length){Ws(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ws(Li,t),Ii!==null&&Ws(Ii,t),Di!==null&&Ws(Di,t),wa.forEach(e),Ta.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&Ti.shift()}var ms=fi.ReactCurrentBatchConfig,ol=!0;function H0(t,e,n,i){var r=Ze,s=ms.transition;ms.transition=null;try{Ze=1,kd(t,e,n,i)}finally{Ze=r,ms.transition=s}}function V0(t,e,n,i){var r=Ze,s=ms.transition;ms.transition=null;try{Ze=4,kd(t,e,n,i)}finally{Ze=r,ms.transition=s}}function kd(t,e,n,i){if(ol){var r=ku(t,e,n,i);if(r===null)wc(t,e,i,ll,n),qh(t,i);else if(z0(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<j0.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&gg(s),s=ku(t,e,n,i),s===null&&wc(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wc(t,e,i,null,n)}}var ll=null;function ku(t,e,n,i){if(ll=null,t=Id(i),t=pr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case Dd:return 1;case hg:return 4;case sl:case P0:return 16;case fg:return 536870912;default:return 16}default:return 16}}var Ni=null,Fd=null,Xo=null;function Mg(){if(Xo)return Xo;var t,e=Fd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Kh(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Kh,this.isPropagationStopped=Kh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=pn(Ds),Ga=pt({},Ds,{view:0,detail:0}),G0=pn(Ga),mc,gc,Xs,Fl=pt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(mc=t.screenX-Xs.screenX,gc=t.screenY-Xs.screenY):gc=mc=0,Xs=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Jh=pn(Fl),W0=pt({},Fl,{dataTransfer:0}),X0=pn(W0),Y0=pt({},Ga,{relatedTarget:0}),vc=pn(Y0),q0=pt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=pn(q0),K0=pt({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J0=pn(K0),Z0=pt({},Ds,{data:0}),Zh=pn(Z0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t_[t])?!!e[t]:!1}function zd(){return n_}var i_=pt({},Ga,{key:function(t){if(t.key){var e=Q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=pn(i_),s_=pt({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=pn(s_),a_=pt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),o_=pn(a_),l_=pt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=pn(l_),u_=pt({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=pn(u_),h_=[9,13,27,32],Bd=ci&&"CompositionEvent"in window,ca=null;ci&&"documentMode"in document&&(ca=document.documentMode);var f_=ci&&"TextEvent"in window&&!ca,Eg=ci&&(!Bd||ca&&8<ca&&11>=ca),ef=" ",tf=!1;function wg(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function p_(t,e){switch(t){case"compositionend":return Tg(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return t=e.data,t===ef&&tf?null:t;default:return null}}function m_(t,e){if(es)return t==="compositionend"||!Bd&&wg(t,e)?(t=Mg(),Xo=Fd=Ni=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!g_[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=cl(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ca=null;function v_(t){kg(t,0)}function jl(t){var e=is(t);if(Km(e))return t}function x_(t,e){if(t==="change")return e}var Cg=!1;if(ci){var xc;if(ci){var _c="oninput"in document;if(!_c){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),_c=typeof rf.oninput=="function"}xc=_c}else xc=!1;Cg=xc&&(!document.documentMode||9<document.documentMode)}function sf(){ua&&(ua.detachEvent("onpropertychange",Ng),Ca=ua=null)}function Ng(t){if(t.propertyName==="value"&&jl(Ca)){var e=[];Ag(e,Ca,t,Id(t)),og(v_,e)}}function __(t,e,n){t==="focusin"?(sf(),ua=e,Ca=n,ua.attachEvent("onpropertychange",Ng)):t==="focusout"&&sf()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Ca)}function S_(t,e){if(t==="click")return jl(e)}function M_(t,e){if(t==="input"||t==="change")return jl(e)}function E_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Un=typeof Object.is=="function"?Object.is:E_;function Na(t,e){if(Un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_u.call(e,r)||!Un(t[r],e[r]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function of(t,e){var n=af(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=af(n)}}function Rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bg(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(i!==null&&Hd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=of(n,s);var a=of(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=ci&&"documentMode"in document&&11>=document.documentMode,ts=null,Fu=null,da=null,ju=!1;function lf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||ts==null||ts!==nl(i)||(i=ts,"selectionStart"in i&&Hd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Na(da,i)||(da=i,i=cl(Fu,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},yc={},Pg={};ci&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function zl(t){if(yc[t])return yc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pg)return yc[t]=e[n];return t}var Lg=zl("animationend"),Ig=zl("animationiteration"),Dg=zl("animationstart"),Ug=zl("transitionend"),Og=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){Og.set(t,e),Nr(e,[t])}for(var Sc=0;Sc<cf.length;Sc++){var Mc=cf[Sc],A_=Mc.toLowerCase(),C_=Mc[0].toUpperCase()+Mc.slice(1);qi(A_,"on"+C_)}qi(Lg,"onAnimationEnd");qi(Ig,"onAnimationIteration");qi(Dg,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Ug,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function uf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A0(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;uf(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;uf(r,o,u),s=c}}}if(rl)throw t=Du,rl=!1,Du=null,t}function st(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function Ec(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[uo]){t[uo]=!0,Wm.forEach(function(n){n!=="selectionchange"&&(N_.has(n)||Ec(n,!1,t),Ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Ec("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(Sg(e)){case 1:var r=H0;break;case 4:r=V0;break;default:r=kd}n=r.bind(null,e,n,t),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=pr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}og(function(){var u=s,d=Id(n),p=[];e:{var f=Og.get(t);if(f!==void 0){var m=jd,_=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":m=r_;break;case"focusin":_="focus",m=vc;break;case"focusout":_="blur",m=vc;break;case"beforeblur":case"afterblur":m=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=o_;break;case Lg:case Ig:case Dg:m=$0;break;case Ug:m=c_;break;case"scroll":m=G0;break;case"wheel":m=d_;break;case"copy":case"cut":case"paste":m=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Ea(x,h),S!=null&&y.push(ba(x,S,v)))),g)break;x=x.return}0<y.length&&(f=new m(f,_,null,n,d),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Pu&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[ui]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?pr(_):null,_!==null&&(g=Rr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Jh,S="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qh,S="onPointerLeave",h="onPointerEnter",x="pointer"),g=m==null?f:is(m),v=_==null?f:is(_),f=new y(S,x+"leave",m,n,d),f.target=g,f.relatedTarget=v,S=null,pr(d)===u&&(y=new y(h,x+"enter",_,n,d),y.target=v,y.relatedTarget=g,S=y),g=S,m&&_)t:{for(y=m,h=_,x=0,v=y;v;v=Pr(v))x++;for(v=0,S=h;S;S=Pr(S))v++;for(;0<x-v;)y=Pr(y),x--;for(;0<v-x;)h=Pr(h),v--;for(;x--;){if(y===h||h!==null&&y===h.alternate)break t;y=Pr(y),h=Pr(h)}y=null}else y=null;m!==null&&df(p,f,m,y,!1),_!==null&&g!==null&&df(p,g,_,y,!0)}}e:{if(f=u?is(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=x_;else if(nf(f))if(Cg)N=M_;else{N=y_;var A=__}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=S_);if(N&&(N=N(t,u))){Ag(p,N,n,d);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Au(f,"number",f.value)}switch(A=u?is(u):window,t){case"focusin":(nf(A)||A.contentEditable==="true")&&(ts=A,Fu=u,da=null);break;case"focusout":da=Fu=ts=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,lf(p,n,d);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":lf(p,n,d)}var C;if(Bd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else es?wg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Eg&&n.locale!=="ko"&&(es||b!=="onCompositionStart"?b==="onCompositionEnd"&&es&&(C=Mg()):(Ni=d,Fd="value"in Ni?Ni.value:Ni.textContent,es=!0)),A=cl(u,b),0<A.length&&(b=new Zh(b,t,null,n,d),p.push({event:b,listeners:A}),C?b.data=C:(C=Tg(n),C!==null&&(b.data=C)))),(C=f_?p_(t,n):m_(t,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(d=new Zh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}kg(p,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(ba(t,s,r)),s=Ea(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Ea(n,s),c!=null&&a.unshift(ba(n,c,o))):r||(c=Ea(n,s),c!=null&&a.push(ba(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var R_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(R_,`
`).replace(b_,"")}function ho(t,e,n){if(e=hf(e),hf(t)!==e&&n)throw Error(te(425))}function ul(){}var zu=null,Bu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,P_=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(I_)}:Vu;function I_(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Us,Pa="__reactProps$"+Us,ui="__reactContainer$"+Us,Gu="__reactEvents$"+Us,D_="__reactListeners$"+Us,U_="__reactHandles$"+Us;function pr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pf(t);t!==null;){if(n=t[Hn])return n;t=pf(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[Hn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Bl(t){return t[Pa]||null}var Wu=[],rs=-1;function $i(t){return{current:t}}function ot(t){0>rs||(t.current=Wu[rs],Wu[rs]=null,rs--)}function nt(t,e){rs++,Wu[rs]=t.current,t.current=e}var Gi={},Vt=$i(Gi),Qt=$i(!1),Mr=Gi;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function dl(){ot(Qt),ot(Vt)}function mf(t,e,n){if(Vt.current!==Gi)throw Error(te(168));nt(Vt,e),nt(Qt,n)}function jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,_0(t)||"Unknown",r));return pt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,Mr=Vt.current,nt(Vt,t),nt(Qt,Qt.current),!0}function gf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=jg(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,ot(Qt),ot(Vt),nt(Vt,t)):ot(Qt),nt(Qt,n)}var ri=null,Hl=!1,Ac=!1;function zg(t){ri===null?ri=[t]:ri.push(t)}function O_(t){Hl=!0,zg(t)}function Ki(){if(!Ac&&ri!==null){Ac=!0;var t=0,e=Ze;try{var n=ri;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Hl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),dg(Dd,Ki),r}finally{Ze=e,Ac=!1}}return null}var ss=[],as=0,fl=null,pl=0,vn=[],xn=0,Er=null,si=1,ai="";function or(t,e){ss[as++]=pl,ss[as++]=fl,fl=t,pl=e}function Bg(t,e,n){vn[xn++]=si,vn[xn++]=ai,vn[xn++]=Er,Er=t;var i=si;t=ai;var r=32-Ln(i)-1;i&=~(1<<r),n+=1;var s=32-Ln(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,si=1<<32-Ln(e)+r|n<<r|i,ai=s+t}else si=1<<s|n<<r|i,ai=t}function Vd(t){t.return!==null&&(or(t,1),Bg(t,1,0))}function Gd(t){for(;t===fl;)fl=ss[--as],ss[as]=null,pl=ss[--as],ss[as]=null;for(;t===Er;)Er=vn[--xn],vn[xn]=null,ai=vn[--xn],vn[xn]=null,si=vn[--xn],vn[xn]=null}var dn=null,un=null,ct=!1,bn=null;function Hg(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:si,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(ct){var e=un;if(e){var n=e;if(!vf(t,e)){if(Xu(t))throw Error(te(418));e=Ui(n.nextSibling);var i=dn;e&&vf(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,ct=!1,dn=t)}}else{if(Xu(t))throw Error(te(418));t.flags=t.flags&-4097|2,ct=!1,dn=t}}}function xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function fo(t){if(t!==dn)return!1;if(!ct)return xf(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=un)){if(Xu(t))throw Vg(),Error(te(418));for(;e;)Hg(t,e),e=Ui(e.nextSibling)}if(xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Ui(t.stateNode.nextSibling):null;return!0}function Vg(){for(var t=un;t;)t=Ui(t.nextSibling)}function Es(){un=dn=null,ct=!1}function Wd(t){bn===null?bn=[t]:bn.push(t)}var k_=fi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _f(t){var e=t._init;return e(t._payload)}function Gg(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=ji(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,x,v,S){return x===null||x.tag!==6?(x=Ic(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function c(h,x,v,S){var N=v.type;return N===Qr?d(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ei&&_f(N)===x.type)?(S=r(x,v.props),S.ref=Ys(h,x,v),S.return=h,S):(S=el(v.type,v.key,v.props,null,h.mode,S),S.ref=Ys(h,x,v),S.return=h,S)}function u(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Dc(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function d(h,x,v,S,N){return x===null||x.tag!==7?(x=Sr(v,h.mode,S,N),x.return=h,x):(x=r(x,v),x.return=h,x)}function p(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ic(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return v=el(x.type,x.key,x.props,null,h.mode,v),v.ref=Ys(h,null,x),v.return=h,v;case Zr:return x=Dc(x,h.mode,v),x.return=h,x;case Ei:var S=x._init;return p(h,S(x._payload),v)}if(na(x)||Hs(x))return x=Sr(x,h.mode,v,null),x.return=h,x;po(h,x)}return null}function f(h,x,v,S){var N=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:o(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return v.key===N?c(h,x,v,S):null;case Zr:return v.key===N?u(h,x,v,S):null;case Ei:return N=v._init,f(h,x,N(v._payload),S)}if(na(v)||Hs(v))return N!==null?null:d(h,x,v,S,null);po(h,v)}return null}function m(h,x,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,o(x,h,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return h=h.get(S.key===null?v:S.key)||null,c(x,h,S,N);case Zr:return h=h.get(S.key===null?v:S.key)||null,u(x,h,S,N);case Ei:var A=S._init;return m(h,x,v,A(S._payload),N)}if(na(S)||Hs(S))return h=h.get(v)||null,d(x,h,S,N,null);po(x,S)}return null}function _(h,x,v,S){for(var N=null,A=null,C=x,b=x=0,w=null;C!==null&&b<v.length;b++){C.index>b?(w=C,C=null):w=C.sibling;var M=f(h,C,v[b],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(h,C),x=s(M,x,b),A===null?N=M:A.sibling=M,A=M,C=w}if(b===v.length)return n(h,C),ct&&or(h,b),N;if(C===null){for(;b<v.length;b++)C=p(h,v[b],S),C!==null&&(x=s(C,x,b),A===null?N=C:A.sibling=C,A=C);return ct&&or(h,b),N}for(C=i(h,C);b<v.length;b++)w=m(C,h,b,v[b],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?b:w.key),x=s(w,x,b),A===null?N=w:A.sibling=w,A=w);return t&&C.forEach(function(I){return e(h,I)}),ct&&or(h,b),N}function y(h,x,v,S){var N=Hs(v);if(typeof N!="function")throw Error(te(150));if(v=N.call(v),v==null)throw Error(te(151));for(var A=N=null,C=x,b=x=0,w=null,M=v.next();C!==null&&!M.done;b++,M=v.next()){C.index>b?(w=C,C=null):w=C.sibling;var I=f(h,C,M.value,S);if(I===null){C===null&&(C=w);break}t&&C&&I.alternate===null&&e(h,C),x=s(I,x,b),A===null?N=I:A.sibling=I,A=I,C=w}if(M.done)return n(h,C),ct&&or(h,b),N;if(C===null){for(;!M.done;b++,M=v.next())M=p(h,M.value,S),M!==null&&(x=s(M,x,b),A===null?N=M:A.sibling=M,A=M);return ct&&or(h,b),N}for(C=i(h,C);!M.done;b++,M=v.next())M=m(C,h,b,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?b:M.key),x=s(M,x,b),A===null?N=M:A.sibling=M,A=M);return t&&C.forEach(function(V){return e(h,V)}),ct&&or(h,b),N}function g(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case no:e:{for(var N=v.key,A=x;A!==null;){if(A.key===N){if(N=v.type,N===Qr){if(A.tag===7){n(h,A.sibling),x=r(A,v.props.children),x.return=h,h=x;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ei&&_f(N)===A.type){n(h,A.sibling),x=r(A,v.props),x.ref=Ys(h,A,v),x.return=h,h=x;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===Qr?(x=Sr(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=el(v.type,v.key,v.props,null,h.mode,S),S.ref=Ys(h,x,v),S.return=h,h=S)}return a(h);case Zr:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Dc(v,h.mode,S),x.return=h,h=x}return a(h);case Ei:return A=v._init,g(h,x,A(v._payload),S)}if(na(v))return _(h,x,v,S);if(Hs(v))return y(h,x,v,S);po(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=Ic(v,h.mode,S),x.return=h,h=x),a(h)):n(h,x)}return g}var ws=Gg(!0),Wg=Gg(!1),ml=$i(null),gl=null,os=null,Xd=null;function Yd(){Xd=os=gl=null}function qd(t){var e=ml.current;ot(ml),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){gl=t,Xd=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(gl===null)throw Error(te(308));os=t,gl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var mr=null;function $d(t){mr===null?mr=[t]:mr.push(t)}function Xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$d(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,$d(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}function yf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;wi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,d=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=pt({},p,f);break e;case 2:wi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=p}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Xa={},Yn=$i(Xa),La=$i(Xa),Ia=$i(Xa);function gr(t){if(t===Xa)throw Error(te(174));return t}function Jd(t,e){switch(nt(Ia,e),nt(La,t),nt(Yn,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}ot(Yn),nt(Yn,e)}function Ts(){ot(Yn),ot(La),ot(Ia)}function qg(t){gr(Ia.current);var e=gr(Yn.current),n=Nu(e,t.type);e!==n&&(nt(La,t),nt(Yn,n))}function Zd(t){La.current===t&&(ot(Yn),ot(La))}var dt=$i(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Qd(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var $o=fi.ReactCurrentDispatcher,Nc=fi.ReactCurrentBatchConfig,wr=0,ht=null,Mt=null,Nt=null,_l=!1,ha=!1,Da=0,F_=0;function kt(){throw Error(te(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Un(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,s){if(wr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?H_:V_,t=n(i,r),ha){s=0;do{if(ha=!1,Da=0,25<=s)throw Error(te(301));s+=1,Nt=Mt=null,e.updateQueue=null,$o.current=G_,t=n(i,r)}while(ha)}if($o.current=yl,e=Mt!==null&&Mt.next!==null,wr=0,Nt=Mt=ht=null,_l=!1,e)throw Error(te(300));return t}function nh(){var t=Da!==0;return Da=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function En(){if(Mt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,Mt=t;else{if(t===null)throw Error(te(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ua(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=En(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var d=u.lane;if((wr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,ht.lanes|=d,Tr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Un(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=En(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Un(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $g(){}function Kg(t,e){var n=ht,i=En(),r=e(),s=!Un(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,ih(Qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Zg.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));wr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zg(t,e,n,i){e.value=n,e.getSnapshot=i,ev(e)&&tv(t)}function Qg(t,e,n){return n(function(){ev(e)&&tv(t)})}function ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Un(t,n)}catch{return!0}}function tv(t){var e=di(t,1);e!==null&&In(e,t,1,-1)}function Mf(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=B_.bind(null,ht,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function nv(){return En().memoizedState}function Ko(t,e,n,i){var r=jn();ht.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function Vl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&eh(i,a.deps)){r.memoizedState=Oa(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Oa(1|e,n,s,i)}function Ef(t,e){return Ko(8390656,8,t,e)}function ih(t,e){return Vl(2048,8,t,e)}function iv(t,e){return Vl(4,2,t,e)}function rv(t,e){return Vl(4,4,t,e)}function sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,sv.bind(null,e,t),n)}function rh(){}function ov(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lv(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cv(t,e,n){return wr&21?(Un(n,e)||(n=pg(),ht.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function j_(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{Ze=n,Nc.transition=i}}function uv(){return En().memoizedState}function z_(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dv(t))hv(e,n);else if(n=Xg(t,e,n,i),n!==null){var r=qt();In(n,t,i,r),fv(n,e,i)}}function B_(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dv(t))hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Un(o,a)){var c=e.interleaved;c===null?(r.next=r,$d(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Xg(t,e,r,i),n!==null&&(r=qt(),In(n,t,i,r),fv(n,e,i))}}function dv(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function hv(t,e){ha=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}var yl={readContext:Mn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},H_={readContext:Mn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Ef,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=z_.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Mf,useDebugValue:rh,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Mf(!1),e=t[0];return t=j_.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=jn();if(ct){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));wr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ef(Qg.bind(null,i,s,t),[t]),i.flags|=2048,Oa(9,Zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=bt.identifierPrefix;if(ct){var n=ai,i=si;n=(i&~(1<<32-Ln(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V_={readContext:Mn,useCallback:ov,useContext:Mn,useEffect:ih,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:Rc,useRef:nv,useState:function(){return Rc(Ua)},useDebugValue:rh,useDeferredValue:function(t){var e=En();return cv(e,Mt.memoizedState,t)},useTransition:function(){var t=Rc(Ua)[0],e=En().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:uv,unstable_isNewReconciler:!1},G_={readContext:Mn,useCallback:ov,useContext:Mn,useEffect:ih,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:bc,useRef:nv,useState:function(){return bc(Ua)},useDebugValue:rh,useDeferredValue:function(t){var e=En();return Mt===null?e.memoizedState=t:cv(e,Mt.memoizedState,t)},useTransition:function(){var t=bc(Ua)[0],e=En().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:uv,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(In(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(In(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Fi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(In(e,t,i,n),qo(e,t,i))}};function wf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function pv(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=en(e)?Mr:Vt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function Ku(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=en(e)?Mr:Vt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=x0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var W_=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,od=i),Ju(t,e)},n}function gv(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Af(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new W_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sy.bind(null,t,e,n),e.then(t,t))}function Cf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var X_=fi.ReactCurrentOwner,Zt=!1;function Yt(t,e,n,i){e.child=t===null?Wg(e,null,n,i):ws(e,t.child,n,i)}function Rf(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=th(t,e,n,i,s,r),n=nh(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ct&&n&&Vd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function bf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vv(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Zu(t,e,n,i,r)}function xv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(cs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(cs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(cs,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(cs,ln),ln|=i;return Yt(t,e,r,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=en(n)?Mr:Vt.current;return s=Ms(e,s),gs(e,r),n=th(t,e,n,i,s,r),i=nh(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ct&&i&&Vd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Pf(t,e,n,i,r){if(en(n)){var s=!0;hl(e)}else s=!1;if(gs(e,r),e.stateNode===null)Jo(t,e),pv(e,n,i),Ku(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=en(n)?Mr:Vt.current,u=Ms(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Tf(e,a,i,u),wi=!1;var f=e.memoizedState;a.state=f,vl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||Qt.current||wi?(typeof d=="function"&&($u(e,n,d,i),c=e.memoizedState),(o=wi||wf(e,n,o,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Yg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Nn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Mn(c):(c=en(n)?Mr:Vt.current,c=Ms(e,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==c)&&Tf(e,a,i,c),wi=!1,f=e.memoizedState,a.state=f,vl(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||Qt.current||wi?(typeof m=="function"&&($u(e,n,m,i),_=e.memoizedState),(u=wi||wf(e,n,u,i,f,_,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){_v(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&gf(e,n,!1),hi(t,e,s);i=e.stateNode,X_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&gf(e,n,!0),e.child}function yv(t){var e=t.stateNode;e.pendingContext?mf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(t,e.context,!1),Jd(t,e.containerInfo)}function Lf(t,e,n,i,r){return Es(),Wd(r),e.flags|=256,Yt(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(dt,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):sh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Y_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ji(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?td(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sh(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&Wd(i),ws(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(te(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=td(a),e.memoizedState=ed,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Pc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Zt||o){if(i=bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),In(i,t,r,-1))}return dh(),i=Pc(Error(te(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Ui(r.nextSibling),dn=e,ct=!0,bn=null,t!==null&&(vn[xn++]=si,vn[xn++]=ai,vn[xn++]=Er,si=t.id,ai=t.overflow,Er=e),e=sh(e,i.children),e.flags|=4096,e)}function If(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qu(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&If(t,n,e);else if(t.tag===19)If(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function q_(t,e,n){switch(e.tag){case 3:yv(e),Es();break;case 5:qg(e);break;case 1:en(e.type)&&hl(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(nt(dt,dt.current&1),t=hi(t,e,n),t!==null?t.sibling:null);nt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,xv(t,e,n)}return hi(t,e,n)}var Ev,nd,wv,Tv;Ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Yn.current);var s=null;switch(n){case"input":r=wu(t,r),i=wu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}Ru(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&st("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $_(t,e,n){var i=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return en(e.type)&&dl(),Ft(e),null;case 3:return i=e.stateNode,Ts(),ot(Qt),ot(Vt),Qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(ud(bn),bn=null))),nd(t,e),Ft(e),null;case 5:Zd(e);var r=gr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ft(e),null}if(t=gr(Yn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Bh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Vh(i,s),st("invalid",i)}Ru(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":io(i),Hh(i,s,!0);break;case"textarea":io(i),Gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Hn]=e,t[Pa]=i,Ev(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Bh(t,i),r=wu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",t);break;case"textarea":Vh(t,i),r=Cu(t,i),st("invalid",t);break;default:r=i}Ru(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?ng(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&eg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ma(t,c):typeof c=="number"&&Ma(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&st("scroll",t):c!=null&&Rd(t,s,c,a))}switch(n){case"input":io(t),Hh(t,i,!1);break;case"textarea":io(t),Gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=gr(Ia.current),gr(Yn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&un!==null&&e.mode&1&&!(e.flags&128))Vg(),Es(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Hn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else bn!==null&&(ud(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Et===0&&(Et=3):dh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ts(),nd(t,e),t===null&&Ra(e.stateNode.containerInfo),Ft(e),null;case 10:return qd(e.type._context),Ft(e),null;case 17:return en(e.type)&&dl(),Ft(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Cs&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ft(e),null}else 2*vt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=dt.current,nt(dt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function K_(t,e){switch(Gd(e),e.tag){case 1:return en(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ot(Qt),ot(Vt),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zd(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return Ts(),null;case 10:return qd(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var go=!1,Bt=!1,J_=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Df=!1;function Z_(t,e){if(zu=ol,t=bg(),Hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},ol=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Df,Df=!1,_}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&id(e,n,s)}r=r.next}while(r!==i)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Av(t){var e=t.alternate;e!==null&&(t.alternate=null,Av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Pa],delete e[Gu],delete e[D_],delete e[U_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cv(t){return t.tag===5||t.tag===3||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Pt=null,Rn=!1;function gi(t,e,n){for(n=n.child;n!==null;)Nv(t,e,n),n=n.sibling}function Nv(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Bt||ls(n,e);case 6:var i=Pt,r=Rn;Pt=null,gi(t,e,n),Pt=i,Rn=r,Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Rn?(t=Pt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Aa(t)):Tc(Pt,n.stateNode));break;case 4:i=Pt,r=Rn,Pt=n.stateNode.containerInfo,Rn=!0,gi(t,e,n),Pt=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&id(n,e,a),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!Bt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,gi(t,e,n),Bt=i):gi(t,e,n);break;default:gi(t,e,n)}}function Of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J_),e.forEach(function(i){var r=oy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Rn=!1;break e;case 3:Pt=o.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=o.stateNode.containerInfo,Rn=!0;break e}o=o.return}if(Pt===null)throw Error(te(160));Nv(s,a,r),Pt=null,Rn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rv(e,t),e=e.sibling}function Rv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Fn(t),i&4){try{fa(3,t,t.return),Wl(3,t)}catch(y){mt(t,t.return,y)}try{fa(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:wn(e,t),Fn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(wn(e,t),Fn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),bu(o,a);var u=bu(o,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?ng(r,p):d==="dangerouslySetInnerHTML"?eg(r,p):d==="children"?Ma(r,p):Rd(r,d,p,u)}switch(o){case"input":Tu(r,s);break;case"textarea":Zm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(wn(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(wn(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:wn(e,t),Fn(t);break;case 13:wn(e,t),Fn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=vt())),i&4&&Of(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||d,wn(e,t),Bt=u):wn(e,t),Fn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(p=ge=d;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:fa(4,f,f.return);break;case 1:ls(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Ff(p);continue}}m!==null?(m.return=f,ge=m):Ff(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=tg("display",a))}catch(y){mt(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){mt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:wn(e,t),Fn(t),i&4&&Of(t);break;case 21:break;default:wn(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=Uf(t);ad(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Uf(t);sd(t,o,a);break;default:throw Error(te(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q_(t,e,n){ge=t,bv(t)}function bv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Bt;o=go;var u=Bt;if(go=a,(Bt=c)&&!u)for(ge=r;ge!==null;)a=ge,c=a.child,a.tag===22&&a.memoizedState!==null?jf(r):c!==null?(c.return=a,ge=c):jf(r);for(;s!==null;)ge=s,bv(s),s=s.sibling;ge=r,go=o,Bt=u}kf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):kf(t)}}function kf(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&rd(e)}catch(f){mt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Ff(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function jf(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{rd(e)}catch(c){mt(e,s,c)}break;case 5:var a=e.return;try{rd(e)}catch(c){mt(e,a,c)}}}catch(c){mt(e,e.return,c)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var ey=Math.ceil,Sl=fi.ReactCurrentDispatcher,ah=fi.ReactCurrentOwner,Sn=fi.ReactCurrentBatchConfig,Xe=0,bt=null,yt=null,Lt=0,ln=0,cs=$i(0),Et=0,ka=null,Tr=0,Xl=0,oh=0,pa=null,Jt=null,lh=0,Cs=1/0,ii=null,Ml=!1,od=null,ki=null,vo=!1,Ri=null,El=0,ma=0,ld=null,Zo=-1,Qo=0;function qt(){return Xe&6?vt():Zo!==-1?Zo:Zo=vt()}function Fi(t){return t.mode&1?Xe&2&&Lt!==0?Lt&-Lt:k_.transition!==null?(Qo===0&&(Qo=pg()),Qo):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function In(t,e,n,i){if(50<ma)throw ma=0,ld=null,Error(te(185));Va(t,n,i),(!(Xe&2)||t!==bt)&&(t===bt&&(!(Xe&2)&&(Xl|=n),Et===4&&Ai(t,Lt)),tn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Cs=vt()+500,Hl&&Ki()))}function tn(t,e){var n=t.callbackNode;k0(t,e);var i=al(t,t===bt?Lt:0);if(i===0)n!==null&&Yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yh(n),e===1)t.tag===0?O_(zf.bind(null,t)):zg(zf.bind(null,t)),L_(function(){!(Xe&6)&&Ki()}),n=null;else{switch(mg(i)){case 1:n=Dd;break;case 4:n=hg;break;case 16:n=sl;break;case 536870912:n=fg;break;default:n=sl}n=Fv(n,Pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pv(t,e){if(Zo=-1,Qo=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=al(t,t===bt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Xe;Xe|=2;var s=Iv();(bt!==t||Lt!==e)&&(ii=null,Cs=vt()+500,yr(t,e));do try{iy();break}catch(o){Lv(t,o)}while(!0);Yd(),Sl.current=s,Xe=r,yt!==null?e=0:(bt=null,Lt=0,e=Et)}if(e!==0){if(e===2&&(r=Uu(t),r!==0&&(i=r,e=cd(t,r))),e===1)throw n=ka,yr(t,0),Ai(t,i),tn(t,vt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!ty(r)&&(e=wl(t,i),e===2&&(s=Uu(t),s!==0&&(i=s,e=cd(t,s))),e===1))throw n=ka,yr(t,0),Ai(t,i),tn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:lr(t,Jt,ii);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=lh+500-vt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vu(lr.bind(null,t,Jt,ii),e);break}lr(t,Jt,ii);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Ln(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ey(i/1960))-i,10<i){t.timeoutHandle=Vu(lr.bind(null,t,Jt,ii),i);break}lr(t,Jt,ii);break;case 5:lr(t,Jt,ii);break;default:throw Error(te(329))}}}return tn(t,vt()),t.callbackNode===n?Pv.bind(null,t):null}function cd(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&ud(e)),t}function ud(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Un(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~oh,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),i=1<<n;t[n]=-1,e&=~i}}function zf(t){if(Xe&6)throw Error(te(327));vs();var e=al(t,0);if(!(e&1))return tn(t,vt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Uu(t);i!==0&&(e=i,n=cd(t,i))}if(n===1)throw n=ka,yr(t,0),Ai(t,e),tn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Jt,ii),tn(t,vt()),null}function ch(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Cs=vt()+500,Hl&&Ki())}}function Ar(t){Ri!==null&&Ri.tag===0&&!(Xe&6)&&vs();var e=Xe;Xe|=1;var n=Sn.transition,i=Ze;try{if(Sn.transition=null,Ze=1,t)return t()}finally{Ze=i,Sn.transition=n,Xe=e,!(Xe&6)&&Ki()}}function uh(){ln=cs.current,ot(cs)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,P_(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Ts(),ot(Qt),ot(Vt),Qd();break;case 5:Zd(i);break;case 4:Ts();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:qd(i.type._context);break;case 22:case 23:uh()}n=n.return}if(bt=t,yt=t=ji(t.current,null),Lt=ln=e,Et=0,ka=null,oh=Xl=Tr=0,Jt=pa=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}mr=null}return t}function Lv(t,e){do{var n=yt;try{if(Yd(),$o.current=yl,_l){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(wr=0,Nt=Mt=ht=null,ha=!1,Da=0,ah.current=null,n===null||n.return===null){Et=1,ka=e,yt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Lt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Cf(a);if(m!==null){m.flags&=-257,Nf(m,a,o,s,e),m.mode&1&&Af(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(c),e.updateQueue=y}else _.add(c);break e}else{if(!(e&1)){Af(s,u,e),dh();break e}c=Error(te(426))}}else if(ct&&o.mode&1){var g=Cf(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Nf(g,a,o,s,e),Wd(As(c,o));break e}}s=c=As(c,o),Et!==4&&(Et=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=mv(s,c,e);yf(s,h);break e;case 1:o=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ki===null||!ki.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=gv(s,o,e);yf(s,S);break e}}s=s.return}while(s!==null)}Uv(n)}catch(N){e=N,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function Iv(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function dh(){(Et===0||Et===3||Et===2)&&(Et=4),bt===null||!(Tr&268435455)&&!(Xl&268435455)||Ai(bt,Lt)}function wl(t,e){var n=Xe;Xe|=2;var i=Iv();(bt!==t||Lt!==e)&&(ii=null,yr(t,e));do try{ny();break}catch(r){Lv(t,r)}while(!0);if(Yd(),Xe=n,Sl.current=i,yt!==null)throw Error(te(261));return bt=null,Lt=0,Et}function ny(){for(;yt!==null;)Dv(yt)}function iy(){for(;yt!==null&&!N0();)Dv(yt)}function Dv(t){var e=kv(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Uv(t):yt=e,ah.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=K_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=$_(n,e,ln),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function lr(t,e,n){var i=Ze,r=Sn.transition;try{Sn.transition=null,Ze=1,ry(t,e,n,i)}finally{Sn.transition=r,Ze=i}return null}function ry(t,e,n,i){do vs();while(Ri!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F0(t,s),t===bt&&(yt=bt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Fv(sl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var a=Ze;Ze=1;var o=Xe;Xe|=4,ah.current=null,Z_(t,n),Rv(n,t),w_(Bu),ol=!!zu,Bu=zu=null,t.current=n,Q_(n),R0(),Xe=o,Ze=a,Sn.transition=s}else t.current=n;if(vo&&(vo=!1,Ri=t,El=r),s=t.pendingLanes,s===0&&(ki=null),L0(n.stateNode),tn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=od,od=null,t;return El&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===ld?ma++:(ma=0,ld=t):ma=0,Ki(),null}function vs(){if(Ri!==null){var t=mg(El),e=Sn.transition,n=Ze;try{if(Sn.transition=null,Ze=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,El=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(ge=u;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:fa(8,d,s)}var p=d.child;if(p!==null)p.return=d,ge=p;else for(;ge!==null;){d=ge;var f=d.sibling,m=d.return;if(Av(d),d===u){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var x=t.current;for(ge=x;ge!==null;){a=ge;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ge=v;else e:for(a=x;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wl(9,o)}}catch(N){mt(o,o.return,N)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(Xe=r,Ki(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{Ze=n,Sn.transition=e}}return!1}function Bf(t,e,n){e=As(n,e),e=mv(t,e,1),t=Oi(t,e,1),e=qt(),t!==null&&(Va(t,1,e),tn(t,e))}function mt(t,e,n){if(t.tag===3)Bf(t,t,n);else for(;e!==null;){if(e.tag===3){Bf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=As(n,t),t=gv(e,t,1),e=Oi(e,t,1),t=qt(),e!==null&&(Va(e,1,t),tn(e,t));break}}e=e.return}}function sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Lt&n)===n&&(Et===4||Et===3&&(Lt&130023424)===Lt&&500>vt()-lh?yr(t,0):oh|=n),tn(t,e)}function Ov(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=qt();t=di(t,e),t!==null&&(Va(t,e,n),tn(t,n))}function ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ov(t,n)}function oy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Ov(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,q_(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,ct&&e.flags&1048576&&Bg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jo(t,e),t=e.pendingProps;var r=Ms(e,Vt.current);gs(e,n),r=th(null,e,i,t,r,n);var s=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,Ku(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Vd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cy(i),t=Nn(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=Pf(null,e,i,t,n);break e;case 11:e=Rf(null,e,i,t,n);break e;case 14:e=bf(null,e,i,Nn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Pf(t,e,i,r,n);case 3:e:{if(yv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),vl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(te(423)),e),e=Lf(t,e,i,n,r);break e}else if(i!==r){r=As(Error(te(424)),e),e=Lf(t,e,i,n,r);break e}else for(un=Ui(e.stateNode.containerInfo.firstChild),dn=e,ct=!0,bn=null,n=Wg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=hi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return qg(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hu(i,r)?a=null:s!==null&&Hu(i,s)&&(e.flags|=32),_v(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return Sv(t,e,n);case 4:return Jd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Rf(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(ml,i._currentValue),i._currentValue=a,s!==null)if(Un(s.value,a)){if(s.children===r.children&&!Qt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=li(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),qu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=Mn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),bf(t,e,i,r,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Jo(t,e),e.tag=1,en(i)?(t=!0,hl(e)):t=!1,gs(e,n),pv(e,i,r),Ku(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return Mv(t,e,n);case 22:return xv(t,e,n)}throw Error(te(156,e.tag))};function Fv(t,e){return dg(t,e)}function ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new ly(t,e,n,i)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cy(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Ld)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return Sr(n.children,r,s,e);case bd:a=8,r|=8;break;case yu:return t=_n(12,n,e,r|2),t.elementType=yu,t.lanes=s,t;case Su:return t=_n(13,n,e,r),t.elementType=Su,t.lanes=s,t;case Mu:return t=_n(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case qm:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xm:a=10;break e;case Ym:a=9;break e;case Pd:a=11;break e;case Ld:a=14;break e;case Ei:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=_n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=qm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,s,a,o,c){return t=new uy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jv(t){if(!t)return Gi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(en(n))return jg(t,n,e)}return e}function zv(t,e,n,i,r,s,a,o,c){return t=fh(n,i,!0,t,r,s,a,o,c),t.context=jv(null),n=t.current,i=qt(),r=Fi(n),s=li(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Va(t,r,i),tn(t,i),t}function ql(t,e,n,i){var r=e.current,s=qt(),a=Fi(r);return n=jv(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(In(t,r,a,s),qo(t,r,a)),a}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Hf(t,e),(t=t.alternate)&&Hf(t,e)}function hy(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}$l.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ql(t,e,null,null)};$l.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){ql(null,t,null,null)}),e[ui]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&yg(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Tl(a);s.call(u)}}var a=zv(e,i,t,0,null,!1,!1,"",Vf);return t._reactRootContainer=a,t[ui]=a.current,Ra(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Tl(c);o.call(u)}}var c=fh(t,0,!1,null,null,!1,!1,"",Vf);return t._reactRootContainer=c,t[ui]=c.current,Ra(t.nodeType===8?t.parentNode:t),Ar(function(){ql(e,c,n,i)}),c}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Tl(a);o.call(c)}}ql(e,a,t,r)}else a=fy(n,e,t,r,i);return Tl(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Ud(e,n|1),tn(e,vt()),!(Xe&6)&&(Cs=vt()+500,Ki()))}break;case 13:Ar(function(){var i=di(t,1);if(i!==null){var r=qt();In(i,t,1,r)}}),ph(t,1)}};Od=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=qt();In(e,t,134217728,n)}ph(t,134217728)}};vg=function(t){if(t.tag===13){var e=Fi(t),n=di(t,e);if(n!==null){var i=qt();In(n,t,e,i)}ph(t,e)}};xg=function(){return Ze};_g=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Lu=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(te(90));Km(i),Tu(i,r)}}}break;case"textarea":Zm(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};sg=ch;ag=Ar;var py={usingClientEntryPoint:!1,Events:[Wa,is,Bl,ig,rg,ch]},$s={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{kl=xo.inject(my),Xn=xo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(te(200));return dy(t,e,null,n)};fn.createRoot=function(t,e){if(!gh(t))throw Error(te(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,Ra(t.nodeType===8?t.parentNode:t),new mh(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Ar(t)};fn.hydrate=function(t,e,n){if(!Kl(e))throw Error(te(200));return Jl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=zv(e,null,t,1,n??null,r,!1,s,a),t[ui]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};fn.render=function(t,e,n){if(!Kl(e))throw Error(te(200));return Jl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(te(40));return t._reactRootContainer?(Ar(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};fn.unstable_batchedUpdates=ch;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Jl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Hm.exports=fn;var gy=Hm.exports,Gf=gy;xu.createRoot=Gf.createRoot,xu.hydrateRoot=Gf.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fa.apply(null,arguments)}var bi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bi||(bi={}));const Wf="popstate";function vy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return dd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Al(r)}return _y(e,n,null,t)}function gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xy(){return Math.random().toString(36).substr(2,8)}function Xf(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,i){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||i||xy()})}function Al(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function _y(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=bi.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Fa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){o=bi.Pop;let g=d(),h=g==null?null:g-u;u=g,c&&c({action:o,location:y.location,delta:h})}function f(g,h){o=bi.Push;let x=dd(y.location,g,h);u=d()+1;let v=Xf(x,u),S=y.createHref(x);try{a.pushState(v,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(S)}s&&c&&c({action:o,location:y.location,delta:1})}function m(g,h){o=bi.Replace;let x=dd(y.location,g,h);u=d();let v=Xf(x,u),S=y.createHref(x);a.replaceState(v,"",S),s&&c&&c({action:o,location:y.location,delta:0})}function _(g){let h=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof g=="string"?g:Al(g);return x=x.replace(/ $/,"%20"),gt(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let y={get action(){return o},get location(){return t(r,a)},listen(g){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Wf,p),c=g,()=>{r.removeEventListener(Wf,p),c=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let h=_(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(g){return a.go(g)}};return y}var Yf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yf||(Yf={}));function yy(t,e,n){return n===void 0&&(n="/"),Sy(t,e,n)}function Sy(t,e,n,i){let r=typeof e=="string"?Os(e):e,s=Ns(r.pathname||"/",n);if(s==null)return null;let a=Gv(t);My(a);let o=null,c=Iy(s);for(let u=0;o==null&&u<a.length;++u)o=Py(a[u],c);return o}function Gv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(gt(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=zi([i,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(gt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gv(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ry(u,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let c of Wv(s.path))r(s,a,c)}),e}function Wv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Wv(i.join("/")),o=[];return o.push(...a.map(c=>c===""?s:[s,c].join("/"))),r&&o.push(...a),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function My(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:by(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Ey=/^:[\w-]+$/,wy=3,Ty=2,Ay=1,Cy=10,Ny=-2,qf=t=>t==="*";function Ry(t,e){let n=t.split("/"),i=n.length;return n.some(qf)&&(i+=Ny),e&&(i+=Ty),n.filter(r=>!qf(r)).reduce((r,s)=>r+(Ey.test(s)?wy:s===""?Ay:Cy),i)}function by(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Py(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let c=i[o],u=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=hd({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(r,p.params),a.push({params:r,pathname:zi([s,p.pathname]),pathnameBase:Oy(zi([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=zi([s,p.pathnameBase]))}return a}function hd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ly(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let y=o[p]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[p];return m&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function Ly(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,c)=>(i.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Iy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ns(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Dy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Os(t):t,s;return n?(n=qv(n),n.startsWith("/")?s=$f(n.substring(1),"/"):s=$f(n,e)):s=e,{pathname:s,search:ky(i),hash:Fy(r)}}function $f(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Uc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xv(t,e){let n=Uy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Yv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Os(t):(r=Fa({},t),gt(!r.pathname||!r.pathname.includes("?"),Uc("?","pathname","search",r)),gt(!r.pathname||!r.pathname.includes("#"),Uc("#","pathname","hash",r)),gt(!r.search||!r.search.includes("#"),Uc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let p=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}o=p>=0?e[p]:"/"}let c=Dy(r,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const qv=t=>t.replace(/\/\/+/g,"/"),zi=t=>qv(t.join("/")),Oy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ky=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Fy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $v=["post","put","patch","delete"];new Set($v);const zy=["get",...$v];new Set(zy);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ja.apply(null,arguments)}const Zl=z.createContext(null),Kv=z.createContext(null),Ji=z.createContext(null),Ql=z.createContext(null),br=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=z.createContext(null);function By(t,e){let{relative:n}=e===void 0?{}:e;Ya()||gt(!1);let{basename:i,navigator:r}=z.useContext(Ji),{hash:s,pathname:a,search:o}=ec(t,{relative:n}),c=a;return i!=="/"&&(c=a==="/"?i:zi([i,a])),r.createHref({pathname:c,search:o,hash:s})}function Ya(){return z.useContext(Ql)!=null}function $n(){return Ya()||gt(!1),z.useContext(Ql).location}function Zv(t){z.useContext(Ji).static||z.useLayoutEffect(t)}function Hy(){let{isDataRoute:t}=z.useContext(br);return t?tS():Vy()}function Vy(){Ya()||gt(!1);let t=z.useContext(Zl),{basename:e,future:n,navigator:i}=z.useContext(Ji),{matches:r}=z.useContext(br),{pathname:s}=$n(),a=JSON.stringify(Xv(r,n.v7_relativeSplatPath)),o=z.useRef(!1);return Zv(()=>{o.current=!0}),z.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let p=Yv(u,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:zi([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,a,s,t])}function ec(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=z.useContext(Ji),{matches:r}=z.useContext(br),{pathname:s}=$n(),a=JSON.stringify(Xv(r,i.v7_relativeSplatPath));return z.useMemo(()=>Yv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function Gy(t,e){return Wy(t,e)}function Wy(t,e,n,i){Ya()||gt(!1);let{navigator:r}=z.useContext(Ji),{matches:s}=z.useContext(br),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=$n(),d;if(e){var p;let g=typeof e=="string"?Os(e):e;c==="/"||(p=g.pathname)!=null&&p.startsWith(c)||gt(!1),d=g}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let g=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(g.length).join("/")}let _=yy(t,{pathname:m}),y=Ky(_&&_.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:zi([c,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:zi([c,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&y?z.createElement(Ql.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:bi.Pop}},y):y}function Xy(){let t=eS(),e=jy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,null)}const Yy=z.createElement(Xy,null);class qy extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(br.Provider,{value:this.props.routeContext},z.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $y(t){let{routeContext:e,match:n,children:i}=t,r=z.useContext(Zl);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(br.Provider,{value:e},i)}function Ky(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||gt(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,_=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||_){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,_=!1,y=null,g=null;n&&(m=o&&p.route.id?o[p.route.id]:void 0,y=p.route.errorElement||Yy,c&&(u<0&&f===0?(nS("route-fallback"),_=!0,g=null):u===f&&(_=!0,g=p.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,f+1)),x=()=>{let v;return m?v=y:_?v=g:p.route.Component?v=z.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,z.createElement($y,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?z.createElement(qy,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var Qv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Qv||{}),ex=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ex||{});function Jy(t){let e=z.useContext(Zl);return e||gt(!1),e}function Zy(t){let e=z.useContext(Kv);return e||gt(!1),e}function Qy(t){let e=z.useContext(br);return e||gt(!1),e}function tx(t){let e=Qy(),n=e.matches[e.matches.length-1];return n.route.id||gt(!1),n.route.id}function eS(){var t;let e=z.useContext(Jv),n=Zy(),i=tx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function tS(){let{router:t}=Jy(Qv.UseNavigateStable),e=tx(ex.UseNavigateStable),n=z.useRef(!1);return Zv(()=>{n.current=!0}),z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ja({fromRouteId:e},s)))},[t,e])}const Kf={};function nS(t,e,n){Kf[t]||(Kf[t]=!0)}function iS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function cr(t){gt(!1)}function rS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=bi.Pop,navigator:s,static:a=!1,future:o}=t;Ya()&&gt(!1);let c=e.replace(/^\/*/,"/"),u=z.useMemo(()=>({basename:c,navigator:s,static:a,future:ja({v7_relativeSplatPath:!1},o)}),[c,o,s,a]);typeof i=="string"&&(i=Os(i));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:_="default"}=i,y=z.useMemo(()=>{let g=Ns(d,c);return g==null?null:{location:{pathname:g,search:p,hash:f,state:m,key:_},navigationType:r}},[c,d,p,f,m,_,r]);return y==null?null:z.createElement(Ji.Provider,{value:u},z.createElement(Ql.Provider,{children:n,value:y}))}function sS(t){let{children:e,location:n}=t;return Gy(fd(e),n)}new Promise(()=>{});function fd(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,fd(i.props.children,s));return}i.type!==cr&&gt(!1),!i.props.index||!i.props.children||gt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=fd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Cl.apply(null,arguments)}function nx(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function aS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oS(t,e){return t.button===0&&(!e||e==="_self")&&!aS(t)}const lS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],uS="6";try{window.__reactRouterVersion=uS}catch{}const dS=z.createContext({isTransitioning:!1}),hS="startTransition",Jf=s0[hS];function fS(t){let{basename:e,children:n,future:i,window:r}=t,s=z.useRef();s.current==null&&(s.current=vy({window:r,v5Compat:!0}));let a=s.current,[o,c]=z.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},d=z.useCallback(p=>{u&&Jf?Jf(()=>c(p)):c(p)},[c,u]);return z.useLayoutEffect(()=>a.listen(d),[a,d]),z.useEffect(()=>iS(i),[i]),z.createElement(rS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const pS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:c,to:u,preventScrollReset:d,viewTransition:p}=e,f=nx(e,lS),{basename:m}=z.useContext(Ji),_,y=!1;if(typeof u=="string"&&mS.test(u)&&(_=u,pS))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),N=Ns(S.pathname,m);S.origin===v.origin&&N!=null?u=N+S.search+S.hash:y=!0}catch{}let g=By(u,{relative:r}),h=vS(u,{replace:a,state:o,target:c,preventScrollReset:d,relative:r,viewTransition:p});function x(v){i&&i(v),v.defaultPrevented||h(v)}return z.createElement("a",Cl({},f,{href:_||g,onClick:y||s?i:x,ref:n,target:c}))}),Lr=z.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:c,viewTransition:u,children:d}=e,p=nx(e,cS),f=ec(c,{relative:p.relative}),m=$n(),_=z.useContext(Kv),{navigator:y,basename:g}=z.useContext(Ji),h=_!=null&&xS(f)&&u===!0,x=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,v=m.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,x=x.toLowerCase()),S&&g&&(S=Ns(S,g)||S);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let A=v===x||!a&&v.startsWith(x)&&v.charAt(N)==="/",C=S!=null&&(S===x||!a&&S.startsWith(x)&&S.charAt(x.length)==="/"),b={isActive:A,isPending:C,isTransitioning:h},w=A?i:void 0,M;typeof s=="function"?M=s(b):M=[s,A?"active":null,C?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(b):o;return z.createElement(et,Cl({},p,{"aria-current":w,className:M,ref:n,style:I,to:c,viewTransition:u}),typeof d=="function"?d(b):d)});var pd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pd||(pd={}));var Zf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zf||(Zf={}));function gS(t){let e=z.useContext(Zl);return e||gt(!1),e}function vS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,c=Hy(),u=$n(),d=ec(t,{relative:a});return z.useCallback(p=>{if(oS(p,n)){p.preventDefault();let f=i!==void 0?i:Al(u)===Al(d);c(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,c,d,i,r,n,t,s,a,o])}function xS(t,e){e===void 0&&(e={});let n=z.useContext(dS);n==null&&gt(!1);let{basename:i}=gS(pd.useViewTransitionState),r=ec(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ns(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Ns(n.nextLocation.pathname,i)||n.nextLocation.pathname;return hd(r.pathname,a)!=null||hd(r.pathname,s)!=null}const Kr={LIGHT:"light"},_S={"/":"light","/services":"light","/work":"dark","/about":"light","/contact":"light"},Qf={lerpFactor:.08,fallbackTheme:"light"};class yS{constructor(){this.listeners=new Set,this.state={currentTheme:Kr.LIGHT,targetTheme:Kr.LIGHT,sourceTheme:Kr.LIGHT,transitionProgress:0,activeSection:null,previousSection:null,nextSection:null,isTransitioning:!1,direction:"down",wipeY:0},this.targetProgress=0,this.currentProgress=0,this.rafId=null,this.sectionsCache=[],this.isListening=!1,this.onScroll=this.onScroll.bind(this),this.onResize=this.onResize.bind(this),this.tick=this.tick.bind(this)}subscribe(e){return this.listeners.add(e),e(this.state),()=>{this.listeners.delete(e)}}notify(){this.listeners.forEach(e=>e(this.state))}init(e=Kr.LIGHT){this.state.currentTheme=e,this.state.targetTheme=e,this.state.sourceTheme=e,this.state.transitionProgress=0,this.currentProgress=0,this.targetProgress=0,this.applyCSSVariables(e),this.refreshSections(),this.isListening||(window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),this.isListening=!0),this.onScroll()}refreshSections(){const e=Array.from(document.querySelectorAll("[data-theme-section]"));this.sectionsCache=e.map((n,i)=>{const r=n.getBoundingClientRect(),s=r.top+window.scrollY,a=s+r.height;return{el:n,id:n.getAttribute("data-theme-section")||`section-${i}`,theme:n.getAttribute("data-theme")||Qf.fallbackTheme,top:s,bottom:a,height:r.height,index:i}})}onResize(){this.refreshSections(),this.onScroll()}onScroll(){if(!this.sectionsCache.length)return;const e=window.scrollY,n=window.innerHeight;let i=0;for(let p=0;p<this.sectionsCache.length;p++){const f=this.sectionsCache[p];e+n*.4>=f.top&&(i=p)}const r=this.sectionsCache[i],s=this.sectionsCache[i+1],a=this.sectionsCache[i-1];let o=r?r.theme:Kr.LIGHT,c=o,u=0,d="down";if(s&&s.theme!==o){const p=s.top,f=n*.45,m=e+n-p;m>0&&m<f?(u=Math.max(0,Math.min(1,m/f)),c=s.theme,d="down"):m>=f&&(o=s.theme,c=s.theme,u=0)}if(a&&a.theme!==o&&u===0){const p=r.top,f=n*.45,m=p-e;m>0&&m<f&&(u=Math.max(0,Math.min(1,1-m/f)),o=a.theme,c=r.theme,d="up")}this.targetProgress=u,this.state.sourceTheme=o,this.state.targetTheme=c,this.state.activeSection=r?r.id:null,this.state.previousSection=a?a.id:null,this.state.nextSection=s?s.id:null,this.state.direction=d,this.rafId||(this.rafId=requestAnimationFrame(this.tick))}tick(){const e=this.targetProgress-this.currentProgress;Math.abs(e)>.001?(this.currentProgress+=e*Qf.lerpFactor,this.rafId=requestAnimationFrame(this.tick)):(this.currentProgress=this.targetProgress,this.rafId=null),this.state.transitionProgress=this.currentProgress,this.state.isTransitioning=this.currentProgress>.01&&this.currentProgress<.99,this.currentProgress>=.95&&this.state.targetTheme!==this.state.currentTheme?(this.state.currentTheme=this.state.targetTheme,this.applyCSSVariables(this.state.currentTheme)):this.currentProgress<=.05&&this.state.sourceTheme!==this.state.currentTheme&&(this.state.currentTheme=this.state.sourceTheme,this.applyCSSVariables(this.state.currentTheme));const n=document.documentElement;this.state.isTransitioning?n.setAttribute("data-theme-transitioning","true"):(n.removeAttribute("data-theme-transitioning"),n.setAttribute("data-theme",this.state.currentTheme)),this.notify()}applyCSSVariables(e){document.documentElement.setAttribute("data-theme",e)}destroy(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.isListening&&(window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),this.isListening=!1),this.listeners.clear()}}const er=new yS;function SS(){return null}const ix=z.createContext(null);function MS({children:t}){const e=$n(),[n,i]=z.useState(er.state),r=z.useMemo(()=>_S[e.pathname]||Kr.LIGHT,[e.pathname]);z.useEffect(()=>{er.init(r);const a=er.subscribe(o=>{i({...o})});return()=>{a()}},[e.pathname,r]),z.useEffect(()=>{const a=setTimeout(()=>{er.refreshSections(),er.onScroll()},150);return()=>clearTimeout(a)},[e.pathname]);const s=z.useMemo(()=>({...n,themeEngine:er,setThemeProgress:a=>{er.targetProgress=a}}),[n]);return l.jsxs(ix.Provider,{value:s,children:[t,l.jsx(SS,{})]})}function ES(){const t=z.useContext(ix);if(!t)throw new Error("useThemeTransition must be used within a ThemeTransitionProvider");return t}function wS(){const[t,e]=z.useState(!1),n=$n(),{currentTheme:i,isTransitioning:r,targetTheme:s}=ES(),a=r?s:i;z.useEffect(()=>{e(!1),document.body.classList.remove("menu-open")},[n.pathname]);const o=()=>{const c=!t;e(c),document.body.classList.toggle("menu-open",c)};return z.useEffect(()=>{const c=u=>{u.key==="Escape"&&t&&(e(!1),document.body.classList.remove("menu-open"))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t]),l.jsxs("header",{className:`site-header theme-${a}`,id:"siteHeader","data-theme-navbar":a,children:[l.jsxs(Lr,{to:"/",className:"brand",id:"navBrand","aria-label":"devlooopers home",children:[l.jsx("img",{src:"/assets/devlooopers-logo-d.png",alt:"devlooopers icon",className:"brand-logo-icon"}),l.jsx("img",{src:"/assets/devlooopers-logo.png",alt:"devlooopers",className:"brand-logo-text"})]}),l.jsxs("button",{className:`menu-toggle ${t?"open":""}`,"aria-label":t?"Close menu":"Open menu","aria-expanded":t,onClick:o,children:[l.jsx("i",{}),l.jsx("i",{})]}),l.jsxs("nav",{className:`nav ${t?"open":""}`,"aria-label":"Primary",children:[l.jsxs(Lr,{to:"/",className:({isActive:c})=>c?"active":"",children:[l.jsx("span",{className:"nav-label",children:"Home"})," ",l.jsx("span",{className:"nav-arrow","aria-hidden":"true",children:"→"})]}),l.jsxs(Lr,{to:"/services",className:({isActive:c})=>c?"active":"",children:[l.jsx("span",{className:"nav-label",children:"Services & Ads"})," ",l.jsx("span",{className:"nav-arrow","aria-hidden":"true",children:"→"})]}),l.jsxs(Lr,{to:"/work",className:({isActive:c})=>c?"active":"",children:[l.jsx("span",{className:"nav-label",children:"Work"})," ",l.jsx("span",{className:"nav-arrow","aria-hidden":"true",children:"→"})]}),l.jsxs(Lr,{to:"/about",className:({isActive:c})=>c?"active":"",children:[l.jsx("span",{className:"nav-label",children:"Studio"})," ",l.jsx("span",{className:"nav-arrow","aria-hidden":"true",children:"→"})]}),l.jsxs(Lr,{to:"/contact",className:"nav-cta",children:["Get Free Audit ",l.jsx("span",{children:"↗"})]})]})]})}function TS(){return l.jsx("footer",{className:"mega-site-footer","data-journey-section":"footer",children:l.jsxs("div",{className:"shell footer-shell",children:[l.jsxs("div",{className:"footer-top-cta",children:[l.jsxs("div",{className:"footer-cta-left",children:[l.jsx("span",{className:"footer-badge",children:"⚡ GET YOUR FREE AUDIT"}),l.jsx("h3",{className:"footer-cta-title",children:"Stop leaving revenue on the table."}),l.jsx("p",{className:"footer-cta-desc",children:"Let us analyze your current website speed, Meta Ad creatives, and SEO rankings. We'll show you exactly where you're losing customers."})]}),l.jsx("div",{className:"footer-cta-right",children:l.jsxs(et,{to:"/contact",className:"button primary footer-btn","data-cursor":"CLAIM",children:["Claim Free Growth Audit ",l.jsx("span",{children:"→"})]})})]}),l.jsxs("div",{className:"footer-columns-grid",children:[l.jsxs("div",{className:"footer-col brand-col",children:[l.jsxs("div",{className:"footer-brand-header",children:[l.jsx("img",{src:"/assets/devlooopers-logo-d.png",alt:"devlooopers icon",className:"footer-logo-icon"}),l.jsx("span",{className:"footer-brand-title",children:"devlooopers"})]}),l.jsx("p",{className:"footer-brand-desc",children:"The full-stack digital growth agency. We fuse high-performance React web engineering with algorithmic Meta & Google Ads to scale ambitious brands predictably."}),l.jsxs("div",{className:"footer-social-links",children:[l.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:"Instagram ↗"}),l.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:"LinkedIn ↗"}),l.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:"GitHub ↗"})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"Growth Services"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx(et,{to:"/services",children:"Meta Ads (Facebook & Instagram)"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"Full-Stack Web & Next.js Apps"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"Search Engine Optimization (SEO)"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"High-Converting Landing Pages (CRO)"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"3D WebGL & Interactive Experiences"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"AI Automation & CRM Sync"})})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"Technologies"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx("span",{children:"React & Next.js Framework"})}),l.jsx("li",{children:l.jsx("span",{children:"Meta Business & CAPI Server"})}),l.jsx("li",{children:l.jsx("span",{children:"Three.js & WebGL 3D"})}),l.jsx("li",{children:l.jsx("span",{children:"Google Analytics 4 & Tag Manager"})}),l.jsx("li",{children:l.jsx("span",{children:"Node.js & Edge Compute"})}),l.jsx("li",{children:l.jsx("span",{children:"Python & AI Vector Workflows"})})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"Studio & Contact"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx(et,{to:"/work",children:"Selected Client Work"})}),l.jsx("li",{children:l.jsx(et,{to:"/about",children:"About Studio & Philosophy"})}),l.jsx("li",{children:l.jsx(et,{to:"/services",children:"Capabilities & Pricing"})}),l.jsx("li",{children:l.jsx(et,{to:"/contact",children:"Book 30-Min Strategy Call"})}),l.jsx("li",{children:l.jsx("span",{className:"contact-email",children:"hello@devlooopers.com"})}),l.jsx("li",{children:l.jsx("span",{className:"contact-loc",children:"Mumbai, India • Worldwide Remote"})})]})]})]}),l.jsxs("div",{className:"footer-seo-bar",children:[l.jsx("span",{className:"seo-bar-label",children:"SPECIALIZATIONS:"}),l.jsx("span",{className:"seo-bar-tags",children:"Custom Web Development Agency • High-ROAS Meta Ads Management • Full-Stack React & Next.js Engineers • Technical SEO & Core Web Vitals • 3D WebGL Studios • Digital Growth Marketing"})]}),l.jsxs("div",{className:"footer-bottom-bar",children:[l.jsx("div",{children:"© 2026 devlooopers. All rights reserved."}),l.jsx("div",{children:"Design x Code x Curiosity x Performance Media"}),l.jsxs("div",{className:"footer-legal",children:[l.jsx(et,{to:"/contact",children:"Privacy Policy"}),l.jsx("span",{className:"legal-dot",children:"•"}),l.jsx(et,{to:"/contact",children:"Terms of Service"})]})]})]})})}function AS(t){return t?!!(t.closest("a, [to], [href]")||t.closest(".project-card, .case-study, .work-bento-card, [data-project], [data-cursor-text]")):!1}function CS(){const t=z.useRef(null),e=z.useRef(null),n=z.useRef(null),i=z.useRef(null),r=z.useRef(null),s=$n();return z.useEffect(()=>{const a=window.matchMedia("(pointer:fine)").matches,o=t.current;if(!a||!o)return;const c=e.current,u=n.current,d=i.current,p=r.current;let f=!0,m=null,_=-100,y=-100,g=-100,h=-100,x=-100,v=-100,S=null;const N=I=>{_=I.clientX,y=I.clientY,o.classList.contains("is-active")||(o.classList.add("is-active"),g=_,h=y,x=_,v=y)};window.addEventListener("pointermove",N,{passive:!0});const A=I=>{AS(I.target)&&o.classList.add("is-clicking")},C=()=>{o.classList.remove("is-clicking")};window.addEventListener("pointerdown",A,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0});const b=()=>{o.classList.remove("is-active"),o.classList.remove("is-clicking")};document.addEventListener("mouseleave",b);function w(){if(f){if(g+=(_-g)*.28,h+=(y-h)*.28,x+=(_-x)*.16,v+=(y-v)*.16,o.style.transform=`translate3d(${g}px, ${h}px, 0)`,c&&u&&(c.style.transform=`translate3d(${x-g}px, ${v-h}px, 0)`),S){const I=S.getBoundingClientRect();if(Math.hypot(_-(I.left+I.width/2),y-(I.top+I.height/2))<80){const D=(_-(I.left+I.width/2))*.28,Y=(y-(I.top+I.height/2))*.28;S.style.transform=`translate3d(${D}px, ${Y}px, 0)`}else S.style.transform="",S=null}m=requestAnimationFrame(w)}}m=requestAnimationFrame(w);const M=I=>{const V=I.target;if(!V)return;if(V.closest("#siteHeader, .site-header")){o.className="custom-cursor is-active",d&&(d.textContent=""),p&&(p.style.display="none");return}const Y=V.closest(".project-card, .case-study, .work-bento-card, [data-project]");if(Y&&!document.body.classList.contains("modal-open")){o.className="custom-cursor is-active is-project",d&&(d.textContent=Y.dataset.cursorText||"EXPLORE CASE"),p&&(p.style.display="none");return}const q=V.closest("a, [to], [href]");if(q){const ne=V.closest('[data-magnetic="true"], .button.primary');ne&&(S=ne),o.className="custom-cursor is-active is-link",d&&(d.textContent=q.dataset.cursor||"VIEW"),p&&(p.style.display="none");return}o.className="custom-cursor is-active",d&&(d.textContent=""),p&&(p.style.display="none")};return document.addEventListener("mouseover",M),()=>{f=!1,m&&cancelAnimationFrame(m),window.removeEventListener("pointermove",N),window.removeEventListener("pointerdown",A),window.removeEventListener("pointerup",C),document.removeEventListener("mouseleave",b),document.removeEventListener("mouseover",M),S&&(S.style.transform="")}},[s.pathname]),l.jsxs("div",{className:"custom-cursor",id:"customCursor",ref:t,"aria-hidden":"true",children:[l.jsx("div",{className:"cursor-dot",ref:n}),l.jsxs("div",{className:"cursor-ring",ref:e,children:[l.jsx("span",{className:"cursor-icon",ref:r}),l.jsx("span",{className:"cursor-label",ref:i})]})]})}function NS(){const{pathname:t}=$n();return z.useEffect(()=>{window.scrollTo(0,0);const e=document.querySelectorAll(".reveal:not(.active)");if("IntersectionObserver"in window&&e.length){const n=new IntersectionObserver((i,r)=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("active"),r.unobserve(s.target))})},{rootMargin:"0px 0px -40px 0px",threshold:.1});e.forEach(i=>n.observe(i))}else e.forEach(n=>n.classList.add("active"))},[t]),null}function RS(){const t=$n();return z.useEffect(()=>{const n=Array.from(document.querySelectorAll(".reveal, section h1, section h2, section h3, section .section-kicker, section .eyebrow, section .hero-lead, section .section-copy"));if(!n.length)return;n.forEach(r=>{r.classList.contains("reveal")||r.classList.add("reveal")});const i=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting?s.target.classList.add("active"):s.target.classList.remove("active")})},{rootMargin:"-30px 0px -30px 0px",threshold:.12});return n.forEach(r=>i.observe(r)),()=>{i.disconnect()}},[t.pathname]),null}const ep={orbit:{title:"Orbit Logistics",subtitle:"Global freight intelligence and real-time fleet coordination platform.",chip:"PRODUCT / 2026",challenge:"Logistics dispatchers juggled dozens of disconnected tools, creating coordination delays and cognitive fatigue during high-volume operations.",solution:"We engineered a unified spatial command center with real-time route optimization, dynamic telemetry heatmaps, and low-latency synchronization.",deliverables:["UX Strategy & Design System","WebGL Spatial Telemetry Engine","Fullstack Production Architecture"],stats:[{num:"+140%",lbl:"Dispatch Speed"},{num:"45ms",lbl:"Sync Latency"},{num:"99.98%",lbl:"Accuracy"}],tech:["Three.js","WebGL PBR","TypeScript","Tailored CSS"],artClass:"art-orbit",type:"orbit"},nova:{title:"Nova Spaces",subtitle:"Spatial navigation and 3D architectural showroom experience.",chip:"3D / WEBGL",challenge:"Architectural presentations relied on flat 2D renders that lacked physical depth and realistic atmospheric daylight response.",solution:"Built an interactive 3D WebGL experience featuring dynamic sun elevation shaders, spatial soundscapes, and smooth camera choreographies.",deliverables:["3D WebGL Shader Pipeline","Spatial Camera Choreography","Performance-Tuned Geometry Engine"],stats:[{num:"60fps",lbl:"Fluid Motion"},{num:"4.8x",lbl:"User Engagement"},{num:"<1.2s",lbl:"Time to First Draw"}],tech:["Three.js","Custom GLSL","Web Audio API","Vite"],artClass:"art-nova",type:"nova"},loop:{title:"Loop Intelligence",subtitle:"Autonomous AI workflow orchestrator and visual system canvas.",chip:"AI / PLATFORM",challenge:"Multi-agent LLM systems were opaque black boxes where team members could neither debug decisions nor guide multi-step flows reliably.",solution:"Engineered an interactive node canvas that renders agent reasoning chains in real time, making execution observable, debuggable, and steerable.",deliverables:["Agent Workflow Canvas","Vector Embedding Retrieval","Interactive Real-Time Telemetry"],stats:[{num:"10x",lbl:"Workflow Leverage"},{num:"0.4s",lbl:"Step Latency"},{num:"100%",lbl:"Deterministic Safety"}],tech:["Agent Tooling","Canvas Rendering","Vector RAG","Node.js"],artClass:"art-loop",type:"loop"},aura:{title:"Aura Health",subtitle:"Spatial biometric intelligence and real-time metabolic telemetry interface.",chip:"SPATIAL / HEALTH",challenge:"Patients and clinicians struggled with fragmented health metrics presented in lifeless tabular dashboards.",solution:"Designed a spatial metabolic HUD that visualizes cellular telemetry, circadian rhythms, and heart coherence in responsive 3D.",deliverables:["Spatial UI & Design Tokens","3D Metabolic Viewport","Low-Power Edge Bluetooth Sync"],stats:[{num:"99.4%",lbl:"Telemetry Accuracy"},{num:"3.6x",lbl:"Patient Compliance"},{num:"<50ms",lbl:"Sensor Refresh"}],tech:["WebGL / Three.js","Web Bluetooth","Tailored CSS","TypeScript"],artClass:"art-aura",type:"aura"},apex:{title:"Apex Trading Engine",subtitle:"High-frequency institutional execution terminal and market depth visualizer.",chip:"FINTECH / WEBGL",challenge:"Traders lost valuable milliseconds reading complex order books across fragmented desktop monitors.",solution:"Built an ultra-low-latency 3D liquidity matrix with real-time order flow physics and instant hedging triggers.",deliverables:["High-Throughput Order Book UI","GPU-Accelerated Depth Visualizer","Sub-Millisecond Data Feed"],stats:[{num:"0.8ms",lbl:"Tick-to-Trade"},{num:"$4.2B+",lbl:"Daily Volume"},{num:"100%",lbl:"Zero Frame Drops"}],tech:["WebSockets","Canvas 2D / WebGL","Rust Wasm","Tailored CSS"],artClass:"art-apex",type:"apex"},solace:{title:"Solace Audio",subtitle:"Generative acoustic spatializer and AI music composition system.",chip:"AI / AUDIO",challenge:"Traditional audio workstations are complex and hostile to rapid creative spatial sound design.",solution:"Built an expressive 3D soundfield canvas where frequencies materialize as reactive, fluid particles.",deliverables:["Web Audio Synthesis Engine","Particle Frequency Visualizer","Interactive Stem Sequencer"],stats:[{num:"64 Stems",lbl:"Spatial Audio Channels"},{num:"60fps",lbl:"Fluid Particle Rate"},{num:"12ms",lbl:"Audio Latency"}],tech:["Web Audio API","Custom GLSL Shaders","Three.js","Vite"],artClass:"art-solace",type:"solace"}};function bS({activeProject:t,onClose:e}){const[n,i]=z.useState([]),r=ep[t]||(t?ep.orbit:null);if(z.useEffect(()=>{if(!r)return;r.type==="orbit"?i(["[SYS_INIT] 4,820 Cargo Nodes Online � Telemetry latency: 42ms � Routing nominal."]):r.type==="nova"?i(["[GL_SCENE] 3D Shaders compiled � Sun elevation: 42.5� � Ray bounce count: 2."]):r.type==="loop"?i(["[LOOP_GRAPH] 6 Agent nodes ready � Memory pool sync: Active � Awaiting task prompt."]):r.type==="aura"?i(["[BIOMETRICS] Bio-sensor connected � HRV: 78ms (Optimal) � Circadian phase: Active."]):r.type==="apex"?i(["[ORDER_BOOK] Match engine operational � Depth: $4.2M liquidity spread � Tick latency: 0.8ms."]):r.type==="solace"&&i(["[AUDIO_ENGINE] 64 Spatial audio stems initialized � Buffer size: 256 samples � Reverb decay: 1.8s."]),document.body.classList.add("modal-open");const f=m=>{m.key==="Escape"&&e()};return window.addEventListener("keydown",f),()=>{document.body.classList.remove("modal-open"),window.removeEventListener("keydown",f)}},[r]),!r)return null;const s=()=>{const f=["Singapore","Rotterdam","Los Angeles","Dubai","Hamburg"],m=f[Math.floor(Math.random()*f.length)],_=(Math.random()*20+20).toFixed(1);i(y=>[...y,`[REROUTE] Optimizing 24 vessels towards Hub ${m}... ? Latency ${_}ms`])},a=()=>{const f=(Math.random()*60+10).toFixed(1);i(m=>[...m,`[SUN_SHIFT] Solar angle updated: ${f}� � Ambient temperature shader recalculated.`])},o=()=>{const f=["Synthesize user requirement","Query knowledge graph","Verify constraints","Emit output bundle"],m=f[Math.floor(Math.random()*f.length)];i(_=>[..._,`[AGENT_EXEC] Step completed: "${m}" (Confidence 99.4%)`])},c=()=>{const f=Math.floor(Math.random()*20+65),m=(Math.random()*2+97).toFixed(1);i(_=>[..._,`[BIO_SYNC] Heart Rate: ${f} BPM � SpO2: ${m}% � Metabolic State: Peak Focus`])},u=()=>{const f=(Math.random()*50+10).toFixed(2),m=(Math.random()*500+64e3).toFixed(2);i(_=>[..._,`[MATCHED] ${f} BTC @ $${m} filled across 12 institutional liquidity pools.`])},d=()=>{const f=["432Hz (Deep Warmth)","528Hz (Harmonic Solfeggio)","852Hz (Spatial Clarity)"],m=f[Math.floor(Math.random()*f.length)];i(_=>[..._,`[HARMONIC] Synthesizing acoustic stem at ${m} with fluid particle resonance.`])},p=()=>{r.type==="orbit"?i(["[SYS_INIT] 4,820 Cargo Nodes Online � Telemetry latency: 42ms � Routing nominal."]):r.type==="nova"?i(["[GL_SCENE] 3D Shaders compiled � Sun elevation: 42.5� � Ray bounce count: 2."]):r.type==="loop"?i(["[LOOP_GRAPH] 6 Agent nodes ready � Memory pool sync: Active � Awaiting task prompt."]):r.type==="aura"?i(["[BIOMETRICS] Bio-sensor connected � HRV: 78ms (Optimal) � Circadian phase: Active."]):r.type==="apex"?i(["[ORDER_BOOK] Match engine operational � Depth: $4.2M liquidity spread � Tick latency: 0.8ms."]):i(["[AUDIO_ENGINE] 64 Spatial audio stems initialized � Buffer size: 256 samples � Reverb decay: 1.8s."])};return l.jsxs("div",{id:"projectModal",className:"project-modal is-open","aria-hidden":"false",role:"dialog","aria-modal":"true",children:[l.jsx("div",{className:"project-modal-backdrop",id:"modalBackdrop",onClick:e}),l.jsxs("div",{className:"project-modal-sheet",id:"modalSheet",children:[l.jsx("button",{className:"project-modal-close",id:"modalClose","aria-label":"Close project showcase","data-cursor":"CLOSE",onClick:e,children:"?"}),l.jsxs("div",{className:"project-modal-scroll",children:[l.jsxs("div",{className:"project-modal-hero",id:"modalHero",children:[l.jsx("div",{className:`modal-hero-art ${r.artClass}`,id:"modalHeroArt"}),l.jsxs("div",{className:"modal-hero-overlay",children:[l.jsx("div",{className:"modal-chip",id:"modalChip",children:r.chip}),l.jsx("h1",{className:"modal-title",id:"modalTitle",children:r.title}),l.jsx("p",{className:"modal-subtitle",id:"modalSubtitle",children:r.subtitle})]})]}),l.jsx("div",{className:"project-modal-body shell",children:l.jsxs("div",{className:"modal-grid",children:[l.jsxs("div",{className:"modal-main",children:[l.jsxs("div",{className:"modal-section",children:[l.jsx("span",{className:"section-kicker",children:"CHALLENGE & BRIEF"}),l.jsx("p",{id:"modalChallenge",children:r.challenge})]}),l.jsxs("div",{className:"modal-section",children:[l.jsx("span",{className:"section-kicker",children:"STUDIO EXECUTION"}),l.jsx("p",{id:"modalSolution",children:r.solution})]}),l.jsxs("div",{className:"modal-section modal-interactive-wrap",children:[l.jsx("span",{className:"section-kicker",children:"LIVE INTERACTIVE TELEMETRY"}),l.jsx("div",{className:"modal-interactive-box",id:"modalInteractiveBox",children:l.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"12px",marginBottom:"14px",flexWrap:"wrap"},children:[r.type==="orbit"&&l.jsx("button",{className:"button primary",onClick:s,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"? Run Fleet Simulation"}),r.type==="nova"&&l.jsx("button",{className:"button primary",onClick:a,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"?? Daylight Shift"}),r.type==="loop"&&l.jsx("button",{className:"button primary",onClick:o,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"?? Execute Agent Step"}),r.type==="aura"&&l.jsx("button",{className:"button primary",onClick:c,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"?? Simulate Biometrics"}),r.type==="apex"&&l.jsx("button",{className:"button primary",onClick:u,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"? Match Limit Orders"}),r.type==="solace"&&l.jsx("button",{className:"button primary",onClick:d,style:{padding:"9px 16px",fontSize:"0.82rem"},children:"?? Generate Soundfield"}),l.jsx("button",{className:"button",onClick:p,style:{padding:"9px 16px",fontSize:"0.82rem",background:"#fff",border:"1px solid var(--line)"},children:"Reset Stream"})]}),l.jsx("div",{id:"simTerminal",style:{background:"#10131b",color:r.type==="orbit"||r.type==="aura"?"#39cf72":r.type==="nova"||r.type==="apex"?"#377cd6":"#5350d7",fontFamily:"monospace",fontSize:"0.8rem",padding:"14px",borderRadius:"12px",textAlign:"left",maxHeight:"110px",overflowY:"auto",lineHeight:"1.5"},children:n.map((f,m)=>l.jsx("div",{children:f},m))})]})})]})]}),l.jsxs("aside",{className:"modal-sidebar",children:[l.jsxs("div",{className:"modal-sidebar-card",children:[l.jsx("span",{className:"section-kicker",children:"DELIVERABLES"}),l.jsx("ul",{className:"modal-list",id:"modalDeliverables",children:r.deliverables.map((f,m)=>l.jsx("li",{children:f},m))})]}),l.jsxs("div",{className:"modal-sidebar-card",children:[l.jsx("span",{className:"section-kicker",children:"KEY METRICS"}),l.jsx("div",{className:"modal-stats",id:"modalStats",children:r.stats.map((f,m)=>l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-num",children:f.num}),l.jsx("span",{className:"stat-lbl",children:f.lbl})]},m))})]}),l.jsxs("div",{className:"modal-sidebar-card",children:[l.jsx("span",{className:"section-kicker",children:"TECHNOLOGY STACK"}),l.jsx("div",{className:"tag-row modal-tags",id:"modalTech",children:r.tech.map((f,m)=>l.jsx("span",{children:f},m))})]}),l.jsx("div",{className:"modal-sidebar-actions",children:l.jsx(et,{to:"/contact",className:"button primary w-100","data-cursor":"START",onClick:e,children:"Start Similar Project ?"})})]})]})})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="164",PS=0,tp=1,LS=2,rx=1,IS=2,ni=3,Wi=0,nn=1,Vn=2,Bi=0,xs=1,np=2,ip=3,rp=4,DS=5,hr=100,US=101,OS=102,kS=103,FS=104,jS=200,zS=201,BS=202,HS=203,md=204,gd=205,VS=206,GS=207,WS=208,XS=209,YS=210,qS=211,$S=212,KS=213,JS=214,ZS=0,QS=1,eM=2,Nl=3,tM=4,nM=5,iM=6,rM=7,sx=0,sM=1,aM=2,Hi=0,oM=1,lM=2,cM=3,ax=4,uM=5,dM=6,hM=7,ox=300,Rs=301,bs=302,vd=303,xd=304,tc=306,_d=1e3,vr=1001,yd=1002,yn=1003,fM=1004,_o=1005,Pn=1006,Oc=1007,xr=1008,Xi=1009,pM=1010,mM=1011,lx=1012,cx=1013,Ps=1014,Pi=1015,nc=1016,ux=1017,dx=1018,qa=1020,gM=35902,vM=1021,xM=1022,Wn=1023,_M=1024,yM=1025,_s=1026,za=1027,SM=1028,hx=1029,MM=1030,fx=1031,px=1033,kc=33776,Fc=33777,jc=33778,zc=33779,sp=35840,ap=35841,op=35842,lp=35843,cp=36196,up=37492,dp=37496,hp=37808,fp=37809,pp=37810,mp=37811,gp=37812,vp=37813,xp=37814,_p=37815,yp=37816,Sp=37817,Mp=37818,Ep=37819,wp=37820,Tp=37821,Bc=36492,Ap=36494,Cp=36495,EM=36283,Np=36284,Rp=36285,bp=36286,wM=3200,TM=3201,mx=0,AM=1,Ci="",zn="srgb",Zi="srgb-linear",xh="display-p3",ic="display-p3-linear",Rl="linear",at="srgb",bl="rec709",Pl="p3",Ir=7680,Pp=519,CM=512,NM=513,RM=514,gx=515,bM=516,PM=517,LM=518,IM=519,Lp=35044,Ip="300 es",oi=2e3,Ll=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dp=1234567;const ga=Math.PI/180,Ba=180/Math.PI;function Fs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Rt(t,e,n){return Math.max(e,Math.min(n,t))}function _h(t,e){return(t%e+e)%e}function DM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function UM(t,e,n){return t!==e?(n-t)/(e-t):0}function va(t,e,n){return(1-n)*t+n*e}function OM(t,e,n,i){return va(t,e,1-Math.exp(-n*i))}function kM(t,e=1){return e-Math.abs(_h(t,e*2)-e)}function FM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function jM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function BM(t,e){return t+Math.random()*(e-t)}function HM(t){return t*(.5-Math.random())}function VM(t){t!==void 0&&(Dp=t);let e=Dp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GM(t){return t*ga}function WM(t){return t*Ba}function XM(t){return(t&t-1)===0&&t!==0}function YM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function qM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $M(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),u=s((e+i)/2),d=a((e+i)/2),p=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,c*p,c*f,o*u);break;case"YZY":t.set(c*f,o*d,c*p,o*u);break;case"ZXZ":t.set(c*p,c*f,o*d,o*u);break;case"XZX":t.set(o*d,c*_,c*m,o*u);break;case"YXY":t.set(c*m,o*d,c*_,o*u);break;case"ZYZ":t.set(c*_,c*m,o*d,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const KM={DEG2RAD:ga,RAD2DEG:Ba,generateUUID:Fs,clamp:Rt,euclideanModulo:_h,mapLinear:DM,inverseLerp:UM,lerp:va,damp:OM,pingpong:kM,smoothstep:FM,smootherstep:jM,randInt:zM,randFloat:BM,randFloatSpread:HM,seededRandom:VM,degToRad:GM,radToDeg:WM,isPowerOfTwo:XM,ceilPowerOfTwo:YM,floorPowerOfTwo:qM,setQuaternionFromProperEuler:$M,normalize:Wt,denormalize:Jr};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,c,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],d=i[4],p=i[7],f=i[2],m=i[5],_=i[8],y=r[0],g=r[3],h=r[6],x=r[1],v=r[4],S=r[7],N=r[2],A=r[5],C=r[8];return s[0]=a*y+o*x+c*N,s[3]=a*g+o*v+c*A,s[6]=a*h+o*S+c*C,s[1]=u*y+d*x+p*N,s[4]=u*g+d*v+p*A,s[7]=u*h+d*S+p*C,s[2]=f*y+m*x+_*N,s[5]=f*g+m*v+_*A,s[8]=f*h+m*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8],p=d*a-o*u,f=o*c-d*s,m=u*s-a*c,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*u-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*c)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*c-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new je;function vx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function JM(){const t=Il("canvas");return t.style.display="block",t}const Up={};function ZM(t){t in Up||(Up[t]=!0,console.warn(t))}const Op=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[Zi]:{transfer:Rl,primaries:bl,toReference:t=>t,fromReference:t=>t},[zn]:{transfer:at,primaries:bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ic]:{transfer:Rl,primaries:Pl,toReference:t=>t.applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Op)},[xh]:{transfer:at,primaries:Pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Op).convertLinearToSRGB()}},QM=new Set([Zi,ic]),tt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!QM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Ci?Rl:yo[t].transfer}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class eE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=Il("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tE=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gc(r[a].image)):s.push(Gc(r[a]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nE=0;class rn extends ks{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=vr,r=vr,s=Pn,a=xr,o=Wn,c=Xi,u=rn.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Fs(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=ox;rn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],d=c[4],p=c[8],f=c[1],m=c[5],_=c[9],y=c[2],g=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(p-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(m+1)/2,N=(h+1)/2,A=(d+f)/4,C=(p+y)/4,b=(_+g)/4;return v>S&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=C/s,r=b/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(p-y)*(p-y)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(p-y)/x,this.z=(f-d)/x,this.w=Math.acos((u+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends iE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _x extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rE extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(p!==y||c!==f||u!==m||d!==_){let g=1-o;const h=c*f+u*m+d*_+p*y,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const N=Math.sqrt(v),A=Math.atan2(N,h*x);g=Math.sin(g*A)/N,o=Math.sin(o*A)/N}const S=o*x;if(c=c*g+f*S,u=u*g+m*S,d=d*g+_*S,p=p*g+y*S,g===1-o){const N=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=N,u*=N,d*=N,p*=N}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],d=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*p+c*m-u*f,e[n+1]=c*_+d*f+u*p-o*m,e[n+2]=u*_+d*m+o*f-c*p,e[n+3]=d*_-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),d=o(r/2),p=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*d*p+u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p-f*m*_;break;case"YXZ":this._x=f*d*p+u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p+f*m*_;break;case"ZXY":this._x=f*d*p-u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p-f*m*_;break;case"ZYX":this._x=f*d*p-u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p+f*m*_;break;case"YZX":this._x=f*d*p+u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p-f*m*_;break;case"XZY":this._x=f*d*p-u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*c,this._y=r*d+a*c+s*o-i*u,this._z=s*d+a*u+i*c-r*o,this._w=a*d-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,o),p=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*d,this.y=i+c*d+o*u-s*p,this.z=r+c*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new P,Fp=new $a;class Ka{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Mo.subVectors(this.max,Ks),Ur.subVectors(e.a,Ks),Or.subVectors(e.b,Ks),kr.subVectors(e.c,Ks),vi.subVectors(Or,Ur),xi.subVectors(kr,Or),tr.subVectors(Ur,kr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-tr.z,tr.y,vi.z,0,-vi.x,xi.z,0,-xi.x,tr.z,0,-tr.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-tr.y,tr.x,0];return!Xc(n,Ur,Or,kr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,Ur,Or,kr,Mo))?!1:(Eo.crossVectors(vi,xi),n=[Eo.x,Eo.y,Eo.z],Xc(n,Ur,Or,kr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,So=new Ka,Ur=new P,Or=new P,kr=new P,vi=new P,xi=new P,tr=new P,Ks=new P,Mo=new P,Eo=new P,nr=new P;function Xc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),u=n.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>o)return!1}return!0}const sE=new Ka,Js=new P,Yc=new P;class yh{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Yc)),this.expandByPoint(Js.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new P,qc=new P,wo=new P,_i=new P,$c=new P,To=new P,Kc=new P;class aE{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=_i.dot(this.direction),c=-_i.dot(wo),u=_i.lengthSq(),d=Math.abs(1-a*a);let p,f,m,_;if(d>0)if(p=a*c-o,f=a*o-c,_=s*d,p>=0)if(f>=-_)if(f<=_){const y=1/d;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(qc).addScaledVector(wo,f),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){$c.subVectors(n,e),To.subVectors(i,e),Kc.crossVectors($c,To);let a=this.direction.dot(Kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(To.crossVectors(_i,To));if(c<0)return null;const u=o*this.direction.dot($c.cross(_i));if(u<0||c+u>a)return null;const d=-o*_i.dot(Kc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,a,o,c,u,d,p,f,m,_,y,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,d,p,f,m,_,y,g)}set(e,n,i,r,s,a,o,c,u,d,p,f,m,_,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=m,h[7]=_,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*p,_=o*d,y=o*p;n[0]=c*d,n[4]=-c*p,n[8]=u,n[1]=m+_*u,n[5]=f-y*u,n[9]=-o*c,n[2]=y-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*d,m=c*p,_=u*d,y=u*p;n[0]=f+y*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*d,m=c*p,_=u*d,y=u*p;n[0]=f-y*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*d,m=a*p,_=o*d,y=o*p;n[0]=c*d,n[4]=_*u-m,n[8]=f*u+y,n[1]=c*p,n[5]=y*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=o*c,y=o*u;n[0]=c*d,n[4]=y-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=m*p+_,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*c,m=a*u,_=o*c,y=o*u;n[0]=c*d,n[4]=-p,n[8]=u*d,n[1]=f*p+y,n[5]=a*d,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*d,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,lE)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),yi.crossVectors(i,an),yi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),yi.crossVectors(i,an)),yi.normalize(),Ao.crossVectors(an,yi),r[0]=yi.x,r[4]=Ao.x,r[8]=an.x,r[1]=yi.y,r[5]=Ao.y,r[9]=an.y,r[2]=yi.z,r[6]=Ao.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],d=i[1],p=i[5],f=i[9],m=i[13],_=i[2],y=i[6],g=i[10],h=i[14],x=i[3],v=i[7],S=i[11],N=i[15],A=r[0],C=r[4],b=r[8],w=r[12],M=r[1],I=r[5],V=r[9],D=r[13],Y=r[2],q=r[6],ne=r[10],ie=r[14],L=r[3],W=r[7],X=r[11],K=r[15];return s[0]=a*A+o*M+c*Y+u*L,s[4]=a*C+o*I+c*q+u*W,s[8]=a*b+o*V+c*ne+u*X,s[12]=a*w+o*D+c*ie+u*K,s[1]=d*A+p*M+f*Y+m*L,s[5]=d*C+p*I+f*q+m*W,s[9]=d*b+p*V+f*ne+m*X,s[13]=d*w+p*D+f*ie+m*K,s[2]=_*A+y*M+g*Y+h*L,s[6]=_*C+y*I+g*q+h*W,s[10]=_*b+y*V+g*ne+h*X,s[14]=_*w+y*D+g*ie+h*K,s[3]=x*A+v*M+S*Y+N*L,s[7]=x*C+v*I+S*q+N*W,s[11]=x*b+v*V+S*ne+N*X,s[15]=x*w+v*D+S*ie+N*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],d=e[2],p=e[6],f=e[10],m=e[14],_=e[3],y=e[7],g=e[11],h=e[15];return _*(+s*c*p-r*u*p-s*o*f+i*u*f+r*o*m-i*c*m)+y*(+n*c*m-n*u*f+s*a*f-r*a*m+r*u*d-s*c*d)+g*(+n*u*p-n*o*m-s*a*p+i*a*m+s*o*d-i*u*d)+h*(-r*o*d-n*c*p+n*o*f+r*a*p-i*a*f+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8],p=e[9],f=e[10],m=e[11],_=e[12],y=e[13],g=e[14],h=e[15],x=p*g*u-y*f*u+y*c*m-o*g*m-p*c*h+o*f*h,v=_*f*u-d*g*u-_*c*m+a*g*m+d*c*h-a*f*h,S=d*y*u-_*p*u+_*o*m-a*y*m-d*o*h+a*p*h,N=_*p*c-d*y*c-_*o*f+a*y*f+d*o*g-a*p*g,A=n*x+i*v+r*S+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(y*f*s-p*g*s-y*r*m+i*g*m+p*r*h-i*f*h)*C,e[2]=(o*g*s-y*c*s+y*r*u-i*g*u-o*r*h+i*c*h)*C,e[3]=(p*c*s-o*f*s-p*r*u+i*f*u+o*r*m-i*c*m)*C,e[4]=v*C,e[5]=(d*g*s-_*f*s+_*r*m-n*g*m-d*r*h+n*f*h)*C,e[6]=(_*c*s-a*g*s-_*r*u+n*g*u+a*r*h-n*c*h)*C,e[7]=(a*f*s-d*c*s+d*r*u-n*f*u-a*r*m+n*c*m)*C,e[8]=S*C,e[9]=(_*p*s-d*y*s-_*i*m+n*y*m+d*i*h-n*p*h)*C,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*h+n*o*h)*C,e[11]=(d*o*s-a*p*s-d*i*u+n*p*u+a*i*m-n*o*m)*C,e[12]=N*C,e[13]=(d*y*r-_*p*r+_*i*f-n*y*f-d*i*g+n*p*g)*C,e[14]=(_*o*r-a*y*r-_*i*c+n*y*c+a*i*g-n*o*g)*C,e[15]=(a*p*r-d*o*r+d*i*c-n*p*c-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,d*o+i,d*c-r*a,0,u*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,d=a+a,p=o+o,f=s*u,m=s*d,_=s*p,y=a*d,g=a*p,h=o*p,x=c*u,v=c*d,S=c*p,N=i.x,A=i.y,C=i.z;return r[0]=(1-(y+h))*N,r[1]=(m+S)*N,r[2]=(_-v)*N,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+h))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(_+v)*C,r[9]=(g-x)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const a=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,d=1/a,p=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=p,An.elements[9]*=p,An.elements[10]*=p,n.setFromRotationMatrix(An),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=oi){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===oi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ll)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi){const c=this.elements,u=1/(n-e),d=1/(i-r),p=1/(a-s),f=(n+e)*u,m=(i+r)*d;let _,y;if(o===oi)_=(a+s)*p,y=-2*p;else if(o===Ll)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new P,An=new ft,oE=new P(0,0,0),lE=new P(1,1,1),yi=new P,Ao=new P,an=new P,jp=new ft,zp=new $a;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cE=0;const Bp=new P,jr=new $a,Qn=new ft,Co=new P,Zs=new P,uE=new P,dE=new $a,Hp=new P(1,0,0),Vp=new P(0,1,0),Gp=new P(0,0,1),Wp={type:"added"},hE={type:"removed"},zr={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Ht extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new P,n=new qn,i=new $a,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Co.copy(e):Co.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Zs,Co,this.up):Qn.lookAt(Co,Zs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(Qn),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hE),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,uE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,dE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new P,ei=new P,Zc=new P,ti=new P,Br=new P,Hr=new P,Xp=new P,Qc=new P,eu=new P,tu=new P;class Gn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ei.subVectors(i,n),Zc.subVectors(e,n);const a=Cn.dot(Cn),o=Cn.dot(ei),c=Cn.dot(Zc),u=ei.dot(ei),d=ei.dot(Zc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-o*d)*f,_=(a*d-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ei.subVectors(e,n),Cn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Br.subVectors(r,i),Hr.subVectors(s,i),Qc.subVectors(e,i);const c=Br.dot(Qc),u=Hr.dot(Qc);if(c<=0&&u<=0)return n.copy(i);eu.subVectors(e,r);const d=Br.dot(eu),p=Hr.dot(eu);if(d>=0&&p<=d)return n.copy(r);const f=c*p-d*u;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),n.copy(i).addScaledVector(Br,a);tu.subVectors(e,s);const m=Br.dot(tu),_=Hr.dot(tu);if(_>=0&&m<=_)return n.copy(s);const y=m*u-c*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Hr,o);const g=d*_-m*p;if(g<=0&&p-d>=0&&m-_>=0)return Xp.subVectors(s,r),o=(p-d)/(p-d+(m-_)),n.copy(r).addScaledVector(Xp,o);const h=1/(g+y+f);return a=y*h,o=f*h,n.copy(i).addScaledVector(Br,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},No={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=_h(e,1),n=Rt(n,0,1),i=Rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=Sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return tt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Rt(zt.r*255,0,255))*65536+Math.round(Rt(zt.g*255,0,255))*256+Math.round(Rt(zt.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const d=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=zn){tt.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(No);const i=va(Si.h,No.h,n),r=va(Si.s,No.s,n),s=va(Si.l,No.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Be;Be.NAMES=Sx;let fE=0;class Ja extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=xs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new P,Ro=new Se;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ZM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class Mx extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ex extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pE=0;const gn=new ft,iu=new Ht,Vr=new P,on=new Ka,Qs=new Ka,Ct=new P;class On extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Ex:Mx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(on.min,Qs.min),on.expandByPoint(Ct),Ct.addVectors(on.max,Qs.max),on.expandByPoint(Ct)):(on.expandByPoint(Qs.min),on.expandByPoint(Qs.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ct.fromBufferAttribute(o,u),c&&(Vr.fromBufferAttribute(e,u),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<i.count;b++)o[b]=new P,c[b]=new P;const u=new P,d=new P,p=new P,f=new Se,m=new Se,_=new Se,y=new P,g=new P;function h(b,w,M){u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),p.fromBufferAttribute(i,M),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,M),d.sub(u),p.sub(u),m.sub(f),_.sub(f);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(I),o[b].add(y),o[w].add(y),o[M].add(y),c[b].add(g),c[w].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,w=x.length;b<w;++b){const M=x[b],I=M.start,V=M.count;for(let D=I,Y=I+V;D<Y;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new P,S=new P,N=new P,A=new P;function C(b){N.fromBufferAttribute(r,b),A.copy(N);const w=o[b];v.copy(w),v.sub(N.multiplyScalar(N.dot(w))).normalize(),S.crossVectors(A,w);const I=S.dot(c[b])<0?-1:1;a.setXYZW(b,v.x,v.y,v.z,I)}for(let b=0,w=x.length;b<w;++b){const M=x[b],I=M.start,V=M.count;for(let D=I,Y=I+V;D<Y;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,u=new P,d=new P,p=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),o.add(d),c.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(c.length*d);let m=0,_=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*d;for(let h=0;h<d;h++)f[_++]=u[m++]}return new Dn(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const f=u[d],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new ft,ir=new aE,bo=new yh,qp=new P,Gr=new P,Wr=new P,Xr=new P,ru=new P,Po=new P,Lo=new Se,Io=new Se,Do=new Se,$p=new P,Kp=new P,Jp=new P,Uo=new P,Oo=new P;class St extends Ht{constructor(e=new On,n=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=o[c],p=s[c];d!==0&&(ru.fromBufferAttribute(p,e),a?Po.addScaledVector(ru,d):Po.addScaledVector(ru.sub(n),d))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(bo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(bo,qp)===null||ir.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Yp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,N=v;S<N;S+=3){const A=o.getX(S),C=o.getX(S+1),b=o.getX(S+2);r=ko(this,h,e,i,u,d,p,A,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=_,h=y;g<h;g+=3){const x=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);r=ko(this,a,e,i,u,d,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,N=v;S<N;S+=3){const A=S,C=S+1,b=S+2;r=ko(this,h,e,i,u,d,p,A,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=_,h=y;g<h;g+=3){const x=g,v=g+1,S=g+2;r=ko(this,a,e,i,u,d,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function mE(t,e,n,i,r,s,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Wi,o),c===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Oo);return u<n.near||u>n.far?null:{distance:u,point:Oo.clone(),object:t}}function ko(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Gr),t.getVertexPosition(c,Wr),t.getVertexPosition(u,Xr);const d=mE(t,e,n,i,Gr,Wr,Xr,Uo);if(d){r&&(Lo.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,c),Do.fromBufferAttribute(r,u),d.uv=Gn.getInterpolation(Uo,Gr,Wr,Xr,Lo,Io,Do,new Se)),s&&(Lo.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,c),Do.fromBufferAttribute(s,u),d.uv1=Gn.getInterpolation(Uo,Gr,Wr,Xr,Lo,Io,Do,new Se)),a&&($p.fromBufferAttribute(a,o),Kp.fromBufferAttribute(a,c),Jp.fromBufferAttribute(a,u),d.normal=Gn.getInterpolation(Uo,Gr,Wr,Xr,$p,Kp,Jp,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new P,materialIndex:0};Gn.getNormal(Gr,Wr,Xr,p.normal),d.face=p}return d}class Za extends On{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function _(y,g,h,x,v,S,N,A,C,b,w){const M=S/C,I=N/b,V=S/2,D=N/2,Y=A/2,q=C+1,ne=b+1;let ie=0,L=0;const W=new P;for(let X=0;X<ne;X++){const K=X*I-D;for(let me=0;me<q;me++){const ve=me*M-V;W[y]=ve*x,W[g]=K*v,W[h]=Y,u.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[h]=A>0?1:-1,d.push(W.x,W.y,W.z),p.push(me/C),p.push(1-X/b),ie+=1}}for(let X=0;X<b;X++)for(let K=0;K<C;K++){const me=f+K+q*X,ve=f+K+q*(X+1),H=f+(K+1)+q*(X+1),re=f+(K+1)+q*X;c.push(me,ve,re),c.push(ve,H,re),L+=6}o.addGroup(m,L,w),m+=L,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function gE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const vE={clone:Ls,merge:Xt};var xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=gE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Tx extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new P,Zp=new Se,Qp=new Se;class cn extends Tx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class yE extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Yr,qr,e,n);r.layers=this.layers,this.add(r);const s=new cn(Yr,qr,e,n);s.layers=this.layers,this.add(s);const a=new cn(Yr,qr,e,n);a.layers=this.layers,this.add(a);const o=new cn(Yr,qr,e,n);o.layers=this.layers,this.add(o);const c=new cn(Yr,qr,e,n);c.layers=this.layers,this.add(c);const u=new cn(Yr,qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ax extends rn{constructor(e,n,i,r,s,a,o,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SE extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ax(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Bi});s.uniforms.tEquirect.value=n;const a=new St(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Pn),new yE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const su=new P,ME=new P,EE=new je;class ur{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross(ME.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EE.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new yh,Fo=new P;class Sh{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],d=r[5],p=r[6],f=r[7],m=r[8],_=r[9],y=r[10],g=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-s,f-u,g-m,S-h).normalize(),i[1].setComponents(c+s,f+u,g+m,S+h).normalize(),i[2].setComponents(c+a,f+d,g+_,S+x).normalize(),i[3].setComponents(c-a,f-d,g-_,S-x).normalize(),i[4].setComponents(c-o,f-p,g-y,S-v).normalize(),n===oi)i[5].setComponents(c+o,f+p,g+y,S+v).normalize();else if(n===Ll)i[5].setComponents(o,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wE(t){const e=new WeakMap;function n(o,c){const u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,d),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const d=c.array,p=c._updateRange,f=c.updateRanges;if(t.bindBuffer(u,o),p.count===-1&&f.length===0&&t.bufferSubData(u,0,d),f.length!==0){for(let m=0,_=f.length;m<_;m++){const y=f[m];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class rc extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,d=c+1,p=e/o,f=n/c,m=[],_=[],y=[],g=[];for(let h=0;h<d;h++){const x=h*f-a;for(let v=0;v<u;v++){const S=v*p-s;_.push(S,-x,0),y.push(0,0,1),g.push(v/o),g.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<o;x++){const v=x+u*h,S=x+u*(h+1),N=x+1+u*(h+1),A=x+1+u*h;m.push(v,S,A),m.push(S,N,A)}this.setIndex(m),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$E=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",nw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ew=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:CE,alphamap_pars_fragment:NE,alphatest_fragment:RE,alphatest_pars_fragment:bE,aomap_fragment:PE,aomap_pars_fragment:LE,batching_pars_vertex:IE,batching_vertex:DE,begin_vertex:UE,beginnormal_vertex:OE,bsdfs:kE,iridescence_fragment:FE,bumpmap_pars_fragment:jE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:VE,color_fragment:GE,color_pars_fragment:WE,color_pars_vertex:XE,color_vertex:YE,common:qE,cube_uv_reflection_fragment:$E,defaultnormal_vertex:KE,displacementmap_pars_vertex:JE,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:ew,colorspace_fragment:tw,colorspace_pars_fragment:nw,envmap_fragment:iw,envmap_common_pars_fragment:rw,envmap_pars_fragment:sw,envmap_pars_vertex:aw,envmap_physical_pars_fragment:vw,envmap_vertex:ow,fog_vertex:lw,fog_pars_vertex:cw,fog_fragment:uw,fog_pars_fragment:dw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_fragment:pw,lights_lambert_pars_fragment:mw,lights_pars_begin:gw,lights_toon_fragment:xw,lights_toon_pars_fragment:_w,lights_phong_fragment:yw,lights_phong_pars_fragment:Sw,lights_physical_fragment:Mw,lights_physical_pars_fragment:Ew,lights_fragment_begin:ww,lights_fragment_maps:Tw,lights_fragment_end:Aw,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:Nw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:bw,map_fragment:Pw,map_pars_fragment:Lw,map_particle_fragment:Iw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:kw,morphcolor_vertex:Fw,morphnormal_vertex:jw,morphtarget_pars_vertex:zw,morphtarget_vertex:Bw,normal_fragment_begin:Hw,normal_fragment_maps:Vw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:Xw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:qw,clearcoat_normal_fragment_maps:$w,clearcoat_pars_fragment:Kw,iridescence_pars_fragment:Jw,opaque_fragment:Zw,packing:Qw,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:oT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:dT,skinning_vertex:hT,skinnormal_vertex:fT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:vT,transmission_fragment:xT,transmission_pars_fragment:_T,uv_pars_fragment:yT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:ET,background_vert:wT,background_frag:TT,backgroundCube_vert:AT,backgroundCube_frag:CT,cube_vert:NT,cube_frag:RT,depth_vert:bT,depth_frag:PT,distanceRGBA_vert:LT,distanceRGBA_frag:IT,equirect_vert:DT,equirect_frag:UT,linedashed_vert:OT,linedashed_frag:kT,meshbasic_vert:FT,meshbasic_frag:jT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:HT,meshmatcap_frag:VT,meshnormal_vert:GT,meshnormal_frag:WT,meshphong_vert:XT,meshphong_frag:YT,meshphysical_vert:qT,meshphysical_frag:$T,meshtoon_vert:KT,meshtoon_frag:JT,points_vert:ZT,points_frag:QT,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Bn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Bn.physical={uniforms:Xt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const jo={r:0,b:0,g:0},sr=new qn,r1=new ft;function s1(t,e,n,i,r,s,a){const o=new Be(0);let c=s===!0?0:1,u,d,p=null,f=0,m=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function y(x){let v=!1;const S=_(x);S===null?h(o,c):S&&S.isColor&&(h(S,1),v=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(x,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===tc)?(d===void 0&&(d=new St(new Za(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ls(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(v.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(sr)),d.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,(p!==S||f!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=S,f=S.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new St(new rc(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ls(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||f!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,f=S.version,m=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,v){x.getRGB(jo,wx(t)),i.buffers.color.setClear(jo.r,jo.g,jo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,h(o,c)},render:y,addToRenderList:g}}function a1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,I,V,D,Y){let q=!1;const ne=p(D,V,I);s!==ne&&(s=ne,u(s.object)),q=m(M,D,V,Y),q&&_(M,D,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(M,I,V,D),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function p(M,I,V){const D=V.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let q=Y[I.id];q===void 0&&(q={},Y[I.id]=q);let ne=q[D];return ne===void 0&&(ne=f(c()),q[D]=ne),ne}function f(M){const I=[],V=[],D=[];for(let Y=0;Y<n;Y++)I[Y]=0,V[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:D,object:M,attributes:{},index:null}}function m(M,I,V,D){const Y=s.attributes,q=I.attributes;let ne=0;const ie=V.getAttributes();for(const L in ie)if(ie[L].location>=0){const X=Y[L];let K=q[L];if(K===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),X===void 0||X.attribute!==K||K&&X.data!==K.data)return!0;ne++}return s.attributesNum!==ne||s.index!==D}function _(M,I,V,D){const Y={},q=I.attributes;let ne=0;const ie=V.getAttributes();for(const L in ie)if(ie[L].location>=0){let X=q[L];X===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const K={};K.attribute=X,X&&X.data&&(K.data=X.data),Y[L]=K,ne++}s.attributes=Y,s.attributesNum=ne,s.index=D}function y(){const M=s.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function g(M){h(M,0)}function h(M,I){const V=s.newAttributes,D=s.enabledAttributes,Y=s.attributeDivisors;V[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),Y[M]!==I&&(t.vertexAttribDivisor(M,I),Y[M]=I)}function x(){const M=s.newAttributes,I=s.enabledAttributes;for(let V=0,D=I.length;V<D;V++)I[V]!==M[V]&&(t.disableVertexAttribArray(V),I[V]=0)}function v(M,I,V,D,Y,q,ne){ne===!0?t.vertexAttribIPointer(M,I,V,Y,q):t.vertexAttribPointer(M,I,V,D,Y,q)}function S(M,I,V,D){y();const Y=D.attributes,q=V.getAttributes(),ne=I.defaultAttributeValues;for(const ie in q){const L=q[ie];if(L.location>=0){let W=Y[ie];if(W===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const X=W.normalized,K=W.itemSize,me=e.get(W);if(me===void 0)continue;const ve=me.buffer,H=me.type,re=me.bytesPerElement,pe=H===t.INT||H===t.UNSIGNED_INT||W.gpuType===cx;if(W.isInterleavedBufferAttribute){const oe=W.data,De=oe.stride,be=W.offset;if(oe.isInstancedInterleavedBuffer){for(let k=0;k<L.locationSize;k++)h(L.location+k,oe.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let k=0;k<L.locationSize;k++)g(L.location+k);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let k=0;k<L.locationSize;k++)v(L.location+k,K/L.locationSize,H,X,De*re,(be+K/L.locationSize*k)*re,pe)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)h(L.location+oe,W.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<L.locationSize;oe++)g(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let oe=0;oe<L.locationSize;oe++)v(L.location+oe,K/L.locationSize,H,X,K*re,K/L.locationSize*oe*re,pe)}}else if(ne!==void 0){const X=ne[ie];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(L.location,X);break;case 3:t.vertexAttrib3fv(L.location,X);break;case 4:t.vertexAttrib4fv(L.location,X);break;default:t.vertexAttrib1fv(L.location,X)}}}}x()}function N(){b();for(const M in i){const I=i[M];for(const V in I){const D=I[V];for(const Y in D)d(D[Y].object),delete D[Y];delete I[V]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const V in I){const D=I[V];for(const Y in D)d(D[Y].object),delete D[Y];delete I[V]}delete i[M.id]}function C(M){for(const I in i){const V=i[I];if(V[M.id]===void 0)continue;const D=V[M.id];for(const Y in D)d(D[Y].object),delete D[Y];delete V[M.id]}}function b(){w(),a=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function o1(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,p){p!==0&&(t.drawArraysInstanced(i,u,d,p),n.update(d,i,p))}function o(u,d,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<p;m++)this.render(u[m],d[m]);else{f.multiDrawArraysWEBGL(i,u,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];n.update(m,i,1)}}function c(u,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,p);let _=0;for(let y=0;y<p;y++)_+=d[y];for(let y=0;y<f.length;y++)n.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function l1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===nc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!C)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:N}}function c1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,h=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?d(null):u();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;c.value=S,S=d(_,f,v,m);for(let N=0;N!==v;++N)S[N]=n[N];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,_){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=c.value,_!==!0||g===null){const h=m+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,S=m;v!==y;++v,S+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function u1(t){let e=new WeakMap;function n(a,o){return o===vd?a.mapping=Rs:o===xd&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===vd||o===xd)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new SE(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nx extends Tx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,em=[.125,.215,.35,.446,.526,.582],fr=20,au=new Nx,tm=new Be;let ou=null,lu=0,cu=0,uu=!1;const dr=(1+Math.sqrt(5))/2,$r=1/dr,nm=[new P(-dr,$r,0),new P(dr,$r,0),new P(-$r,0,dr),new P($r,0,dr),new P(0,dr,-$r),new P(0,dr,$r),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:nc,format:Wn,colorSpace:Zi,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(s)),this._blurMaterial=h1(s,e,n)}return r}_compileMaterial(e){const n=new St(this._lodPlanes[0],e);this._renderer.compile(n,au)}_sceneToCubeUV(e,n,i,r){const o=new cn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(tm),d.toneMapping=Hi,d.autoClear=!1;const m=new Dl({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new St(new Za,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(tm),y=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,c[h],0),o.lookAt(u[h],0,0)):x===1?(o.up.set(0,0,c[h]),o.lookAt(0,u[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,u[h]));const v=this._cubeSize;zo(r,x*v,h>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;zo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nm[(r-s-1)%nm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new St(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):fr;g>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);const h=[];let x=0;for(let C=0;C<fr;++C){const b=C/y,w=Math.exp(-b*b/2);h.push(w),C===0?x+=w:C<g&&(x+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],N=3*S*(r>v-us?r-v+us:0),A=4*(this._cubeSize-S);zo(n,N,A,3*S,2*S),c.setRenderTarget(n),c.render(p,au)}}function d1(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-us?c=em[a-t+us-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,y=3,g=2,h=1,x=new Float32Array(y*_*m),v=new Float32Array(g*_*m),S=new Float32Array(h*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,b=A>2?0:-1,w=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];x.set(w,y*_*A),v.set(f,g*_*A);const M=[A,A,A,A,A,A];S.set(M,h*_*A)}const N=new On;N.setAttribute("position",new Dn(x,y)),N.setAttribute("uv",new Dn(v,g)),N.setAttribute("faceIndex",new Dn(S,h)),e.push(N),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rm(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h1(t,e,n){const i=new Float32Array(fr),r=new P(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sm(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function am(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===vd||c===xd,d=c===Rs||c===bs;if(u||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new im(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new im(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function p1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function m1(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(p){const f=[],m=p.index,_=p.attributes.position;let y=0;if(m!==null){const x=m.array;y=m.version;for(let v=0,S=x.length;v<S;v+=3){const N=x[v+0],A=x[v+1],C=x[v+2];f.push(N,A,A,C,C,N)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const N=v+0,A=v+1,C=v+2;f.push(N,A,A,C,C,N)}}else return;const g=new(vx(f)?Ex:Mx)(f,1);g.version=y;const h=s.get(p);h&&e.remove(h),s.set(p,g)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function g1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_;g++)this.render(f[g]/a,m[g]);else{y.multiDrawElementsWEBGL(i,m,0,s,f,0,_);let g=0;for(let h=0;h<_;h++)g+=m[h];n.update(g,i,1)}}function p(f,m,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)u(f[h]/a,m[h],y[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,_);let h=0;for(let x=0;x<_;x++)h+=m[x];for(let x=0;x<y.length;x++)n.update(h,i,y[x])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function v1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x1(t,e,n){const i=new WeakMap,r=new ut;function s(a,o,c){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let M=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let N=o.attributes.position.count*S,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*A*4*p),b=new _x(C,N,A,p);b.type=Pi,b.needsUpdate=!0;const w=S*4;for(let I=0;I<p;I++){const V=h[I],D=x[I],Y=v[I],q=N*A*4*I;for(let ne=0;ne<V.count;ne++){const ie=ne*w;_===!0&&(r.fromBufferAttribute(V,ne),C[q+ie+0]=r.x,C[q+ie+1]=r.y,C[q+ie+2]=r.z,C[q+ie+3]=0),y===!0&&(r.fromBufferAttribute(D,ne),C[q+ie+4]=r.x,C[q+ie+5]=r.y,C[q+ie+6]=r.z,C[q+ie+7]=0),g===!0&&(r.fromBufferAttribute(Y,ne),C[q+ie+8]=r.x,C[q+ie+9]=r.y,C[q+ie+10]=r.z,C[q+ie+11]=Y.itemSize===4?r.w:1)}}f={count:p,texture:b,size:new Se(N,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function _1(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Rx extends rn{constructor(e,n,i,r,s,a,o,c,u,d){if(d=d!==void 0?d:_s,d!==_s&&d!==za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===_s&&(i=Ps),i===void 0&&d===za&&(i=qa),super(null,r,s,a,o,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const bx=new rn,Px=new Rx(1,1);Px.compareFunction=gx;const Lx=new _x,Ix=new rE,Dx=new Ax,om=[],lm=[],cm=new Float32Array(16),um=new Float32Array(9),dm=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=lm[e];n===void 0&&(n=new Int32Array(e),lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function w1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;dm.set(i),t.uniformMatrix2fv(this.addr,!1,dm),At(n,i)}}function T1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;um.set(i),t.uniformMatrix3fv(this.addr,!1,um),At(n,i)}}function A1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;cm.set(i),t.uniformMatrix4fv(this.addr,!1,cm),At(n,i)}}function C1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function U1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Px:bx;n.setTexture2D(e||s,r)}function O1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ix,r)}function k1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dx,r)}function F1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lx,r)}function j1(t){switch(t){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return w1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return C1;case 35667:case 35671:return N1;case 35668:case 35672:return R1;case 35669:case 35673:return b1;case 5125:return P1;case 36294:return L1;case 36295:return I1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return F1}}function z1(t,e){t.uniform1fv(this.addr,e)}function B1(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function H1(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function V1(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function G1(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W1(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function X1(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Y1(t,e){t.uniform1iv(this.addr,e)}function q1(t,e){t.uniform2iv(this.addr,e)}function $1(t,e){t.uniform3iv(this.addr,e)}function K1(t,e){t.uniform4iv(this.addr,e)}function J1(t,e){t.uniform1uiv(this.addr,e)}function Z1(t,e){t.uniform2uiv(this.addr,e)}function Q1(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||bx,s[a])}function nA(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ix,s[a])}function iA(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Dx,s[a])}function rA(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lx,s[a])}function sA(t){switch(t){case 5126:return z1;case 35664:return B1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return K1;case 5125:return J1;case 36294:return Z1;case 36295:return Q1;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=j1(n.type)}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sA(n.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function cA(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){hm(n,u===void 0?new aA(o,t,e):new oA(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new lA(o),hm(n,p)),n=p}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);cA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uA=37297;let dA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function fA(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Pl&&n===bl?i="LinearDisplayP3ToLinearSRGB":e===bl&&n===Pl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case ic:return[i,"LinearTransferOETF"];case zn:case xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hA(t.getShaderSource(e),a)}else return r}function pA(t,e){const n=fA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mA(t,e){let n;switch(e){case oM:n="Linear";break;case lM:n="Reinhard";break;case cM:n="OptimizedCineon";break;case ax:n="ACESFilmic";break;case dM:n="AgX";break;case hM:n="Neutral";break;case uM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function gA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(t){return t.replace(_A,SA)}const yA=new Map;function SA(t,e){let n=Fe[e];if(n===void 0){const i=yA.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(t){return t.replace(MA,EA)}function EA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function TA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case bs:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function CA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sx:e="ENVMAP_BLENDING_MULTIPLY";break;case sM:e="ENVMAP_BLENDING_MIX";break;case aM:e="ENVMAP_BLENDING_ADD";break}return e}function NA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=wA(n),u=TA(n),d=AA(n),p=CA(n),f=NA(n),m=gA(n),_=vA(s),y=r.createProgram();let g,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),h.length>0&&(h+=`
`)):(g=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),h=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Hi?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,pA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=Sd(a),a=mm(a,n),a=gm(a,n),o=Sd(o),o=mm(o,n),o=gm(o,n),a=vm(a),o=vm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+g+a,S=x+h+o,N=fm(r,r.VERTEX_SHADER,v),A=fm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,N),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(I){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,ne=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,N,A);else{const ie=pm(r,N,"vertex"),L=pm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ie+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(D===""||Y==="")&&(ne=!1);ne&&(I.diagnostics={runnable:q,programLog:V,vertexShader:{log:D,prefix:g},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(N),r.deleteShader(A),b=new tl(r,y),w=xA(r,y)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,uA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=A,this}let bA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LA(e),n.set(e,i)),i}}class LA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function IA(t,e,n,i,r,s,a){const o=new yx,c=new PA,u=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function g(w,M,I,V,D){const Y=V.fog,q=D.geometry,ne=w.isMeshStandardMaterial?V.environment:null,ie=(w.isMeshStandardMaterial?n:e).get(w.envMap||ne),L=ie&&ie.mapping===tc?ie.image.height:null,W=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const X=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=X!==void 0?X.length:0;let me=0;q.morphAttributes.position!==void 0&&(me=1),q.morphAttributes.normal!==void 0&&(me=2),q.morphAttributes.color!==void 0&&(me=3);let ve,H,re,pe;if(W){const Je=Bn[W];ve=Je.vertexShader,H=Je.fragmentShader}else ve=w.vertexShader,H=w.fragmentShader,c.update(w),re=c.getVertexShaderID(w),pe=c.getFragmentShaderID(w);const oe=t.getRenderTarget(),De=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,k=!!w.map,Qe=!!w.matcap,we=!!ie,$e=!!w.aoMap,Te=!!w.lightMap,Ve=!!w.bumpMap,Ue=!!w.normalMap,Ge=!!w.displacementMap,it=!!w.emissiveMap,R=!!w.metalnessMap,E=!!w.roughnessMap,G=w.anisotropy>0,J=w.clearcoat>0,Q=w.dispersion>0,ee=w.iridescence>0,Ee=w.sheen>0,ce=w.transmission>0,le=G&&!!w.anisotropyMap,Pe=J&&!!w.clearcoatMap,ae=J&&!!w.clearcoatNormalMap,Me=J&&!!w.clearcoatRoughnessMap,Re=ee&&!!w.iridescenceMap,xe=ee&&!!w.iridescenceThicknessMap,fe=Ee&&!!w.sheenColorMap,Ae=Ee&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,rt=!!w.specularColorMap,Ne=!!w.specularIntensityMap,U=ce&&!!w.transmissionMap,Z=ce&&!!w.thicknessMap,$=!!w.gradientMap,se=!!w.alphaMap,de=w.alphaTest>0,ze=!!w.alphaHash,Ye=!!w.extensions;let Ke=Hi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const Dt={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:H,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:be,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Zi,alphaToCoverage:!!w.alphaToCoverage,map:k,matcap:Qe,envMap:we,envMapMode:we&&ie.mapping,envMapCubeUVHeight:L,aoMap:$e,lightMap:Te,bumpMap:Ve,normalMap:Ue,displacementMap:f&&Ge,emissiveMap:it,normalMapObjectSpace:Ue&&w.normalMapType===AM,normalMapTangentSpace:Ue&&w.normalMapType===mx,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:le,clearcoat:J,clearcoatMap:Pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:Q,iridescence:ee,iridescenceMap:Re,iridescenceThicknessMap:xe,sheen:Ee,sheenColorMap:fe,sheenRoughnessMap:Ae,specularMap:Oe,specularColorMap:rt,specularIntensityMap:Ne,transmission:ce,transmissionMap:U,thicknessMap:Z,gradientMap:$,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:se,alphaTest:de,alphaHash:ze,combine:w.combine,mapUv:k&&y(w.map.channel),aoMapUv:$e&&y(w.aoMap.channel),lightMapUv:Te&&y(w.lightMap.channel),bumpMapUv:Ve&&y(w.bumpMap.channel),normalMapUv:Ue&&y(w.normalMap.channel),displacementMapUv:Ge&&y(w.displacementMap.channel),emissiveMapUv:it&&y(w.emissiveMap.channel),metalnessMapUv:R&&y(w.metalnessMap.channel),roughnessMapUv:E&&y(w.roughnessMap.channel),anisotropyMapUv:le&&y(w.anisotropyMap.channel),clearcoatMapUv:Pe&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(w.sheenRoughnessMap.channel),specularMapUv:Oe&&y(w.specularMap.channel),specularColorMapUv:rt&&y(w.specularColorMap.channel),specularIntensityMapUv:Ne&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:Z&&y(w.thicknessMap.channel),alphaMapUv:se&&y(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ue||G),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(k||se),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:k&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ye&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(x(M,w),v(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),w.push(o.mask)}function S(w){const M=_[w.type];let I;if(M){const V=Bn[M];I=vE.clone(V.uniforms)}else I=w.uniforms;return I}function N(w,M){let I;for(let V=0,D=d.length;V<D;V++){const Y=d[V];if(Y.cacheKey===M){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new RA(t,M,w,s),d.push(I)),I}function A(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function C(w){c.remove(w)}function b(){c.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:N,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:b}}function DA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function UA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,_,y,g){let h=t[e];return h===void 0?(h={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:y,group:g},t[e]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=p.renderOrder,h.z=y,h.group=g),e++,h}function o(p,f,m,_,y,g){const h=a(p,f,m,_,y,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function c(p,f,m,_,y,g){const h=a(p,f,m,_,y,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function u(p,f){n.length>1&&n.sort(p||UA),i.length>1&&i.sort(f||_m),r.length>1&&r.sort(f||_m)}function d(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:u}}function OA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new ym,t.set(i,[a])):r>=s.length?(a=new ym,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Be};break;case"SpotLight":n={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function FA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jA=0;function zA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BA(t){const e=new kA,n=FA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,s=new ft,a=new ft;function o(u,d){let p=0,f=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,y=0,g=0,h=0,x=0,v=0,S=0,N=0,A=0,C=0,b=0;u.sort(zA);const w=d===!0?Math.PI:1;for(let I=0,V=u.length;I<V;I++){const D=u[I],Y=D.color,q=D.intensity,ne=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=Y.r*q*w,f+=Y.g*q*w,m+=Y.b*q*w;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],q);b++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const W=D.shadow,X=n.get(D);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,i.directionalShadow[_]=X,i.directionalShadowMap[_]=ie,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=L,_++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(Y).multiplyScalar(q*w),L.distance=ne,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[g]=L;const W=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,W.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[g]=W.matrix,D.castShadow){const X=n.get(D);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,i.spotShadow[g]=X,i.spotShadowMap[g]=ie,N++}g++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(Y).multiplyScalar(q),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=L,h++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*w),L.distance=D.distance,L.decay=D.decay,D.castShadow){const W=D.shadow,X=n.get(D);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,i.pointShadow[y]=X,i.pointShadowMap[y]=ie,i.pointShadowMatrix[y]=D.shadow.matrix,S++}i.point[y]=L,y++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(q*w),L.groundColor.copy(D.groundColor).multiplyScalar(q*w),i.hemi[x]=L,x++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=m;const M=i.hash;(M.directionalLength!==_||M.pointLength!==y||M.spotLength!==g||M.rectAreaLength!==h||M.hemiLength!==x||M.numDirectionalShadows!==v||M.numPointShadows!==S||M.numSpotShadows!==N||M.numSpotMaps!==A||M.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=h,i.point.length=y,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=N+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,M.directionalLength=_,M.pointLength=y,M.spotLength=g,M.rectAreaLength=h,M.hemiLength=x,M.numDirectionalShadows=v,M.numPointShadows=S,M.numSpotShadows=N,M.numSpotMaps=A,M.numLightProbes=b,i.version=jA++)}function c(u,d){let p=0,f=0,m=0,_=0,y=0;const g=d.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:o,setupView:c,state:i}}function Sm(t){const e=new BA(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(d){e.setup(n,d)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function HA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Sm(t),e.set(r,[o])):s>=a.length?(o=new Sm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class VA extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GA extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YA(t,e,n){let i=new Sh;const r=new Se,s=new Se,a=new ut,o=new VA({depthPacking:TM}),c=new GA,u={},d=n.maxTextureSize,p={[Wi]:nn,[nn]:Wi,[Vn]:Vn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:WA,fragmentShader:XA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new St(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let h=this.type;this.render=function(A,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Bi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const D=h!==ni&&this.type===ni,Y=h===ni&&this.type!==ni;for(let q=0,ne=A.length;q<ne;q++){const ie=A[q],L=ie.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||D===!0||Y===!0){const K=this.type!==ni?{minFilter:yn,magFilter:yn}:{};L.map!==null&&L.map.dispose(),L.map=new Cr(r.x,r.y,K),L.map.texture.name=ie.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const X=L.getViewportCount();for(let K=0;K<X;K++){const me=L.getViewport(K);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),V.viewport(a),L.updateMatrices(ie,K),i=L.getFrustum(),S(C,b,L.camera,ie,this.type)}L.isPointLightShadow!==!0&&this.type===ni&&x(L,b),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(w,M,I)};function x(A,C){const b=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,b,f,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,b,m,y,null)}function v(A,C,b,w){let M=null;const I=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=b.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,D=C.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let q=Y[D];q===void 0&&(q=M.clone(),Y[D]=q,C.addEventListener("dispose",N)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,w===ni?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:p[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=b}return M}function S(A,C,b,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const D=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=D.groups;for(let ne=0,ie=q.length;ne<ie;ne++){const L=q[ne],W=Y[L.materialIndex];if(W&&W.visible){const X=v(A,W,w,M);A.onBeforeShadow(t,A,C,b,D,X,L),t.renderBufferDirect(b,null,D,X,A,L),A.onAfterShadow(t,A,C,b,D,X,L)}}}else if(Y.visible){const q=v(A,Y,w,M);A.onBeforeShadow(t,A,C,b,D,q,null),t.renderBufferDirect(b,null,D,q,A,null),A.onAfterShadow(t,A,C,b,D,q,null)}}const V=A.children;for(let D=0,Y=V.length;D<Y;D++)S(V[D],C,b,w,M)}function N(A){A.target.removeEventListener("dispose",N);for(const b in u){const w=u[b],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function qA(t){function e(){let U=!1;const Z=new ut;let $=null;const se=new ut(0,0,0,0);return{setMask:function(de){$!==de&&!U&&(t.colorMask(de,de,de,de),$=de)},setLocked:function(de){U=de},setClear:function(de,ze,Ye,Ke,Dt){Dt===!0&&(de*=Ke,ze*=Ke,Ye*=Ke),Z.set(de,ze,Ye,Ke),se.equals(Z)===!1&&(t.clearColor(de,ze,Ye,Ke),se.copy(Z))},reset:function(){U=!1,$=null,se.set(-1,0,0,0)}}}function n(){let U=!1,Z=null,$=null,se=null;return{setTest:function(de){de?pe(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(de){Z!==de&&!U&&(t.depthMask(de),Z=de)},setFunc:function(de){if($!==de){switch(de){case ZS:t.depthFunc(t.NEVER);break;case QS:t.depthFunc(t.ALWAYS);break;case eM:t.depthFunc(t.LESS);break;case Nl:t.depthFunc(t.LEQUAL);break;case tM:t.depthFunc(t.EQUAL);break;case nM:t.depthFunc(t.GEQUAL);break;case iM:t.depthFunc(t.GREATER);break;case rM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=de}},setLocked:function(de){U=de},setClear:function(de){se!==de&&(t.clearDepth(de),se=de)},reset:function(){U=!1,Z=null,$=null,se=null}}}function i(){let U=!1,Z=null,$=null,se=null,de=null,ze=null,Ye=null,Ke=null,Dt=null;return{setTest:function(Je){U||(Je?pe(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Je){Z!==Je&&!U&&(t.stencilMask(Je),Z=Je)},setFunc:function(Je,kn,Gt){($!==Je||se!==kn||de!==Gt)&&(t.stencilFunc(Je,kn,Gt),$=Je,se=kn,de=Gt)},setOp:function(Je,kn,Gt){(ze!==Je||Ye!==kn||Ke!==Gt)&&(t.stencilOp(Je,kn,Gt),ze=Je,Ye=kn,Ke=Gt)},setLocked:function(Je){U=Je},setClear:function(Je){Dt!==Je&&(t.clearStencil(Je),Dt=Je)},reset:function(){U=!1,Z=null,$=null,se=null,de=null,ze=null,Ye=null,Ke=null,Dt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,f=[],m=null,_=!1,y=null,g=null,h=null,x=null,v=null,S=null,N=null,A=new Be(0,0,0),C=0,b=!1,w=null,M=null,I=null,V=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=ne>=2);let L=null,W={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),me=new ut().fromArray(X),ve=new ut().fromArray(K);function H(U,Z,$,se){const de=new Uint8Array(4),ze=t.createTexture();t.bindTexture(U,ze),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<$;Ye++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Z,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(Z+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ze}const re={};re[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Nl),Ve(!1),Ue(tp),pe(t.CULL_FACE),$e(Bi);function pe(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function oe(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function De(U,Z){return d[U]!==Z?(t.bindFramebuffer(U,Z),d[U]=Z,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Z),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Z),!0):!1}function be(U,Z){let $=f,se=!1;if(U){$=p.get(Z),$===void 0&&($=[],p.set(Z,$));const de=U.textures;if($.length!==de.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ze=0,Ye=de.length;ze<Ye;ze++)$[ze]=t.COLOR_ATTACHMENT0+ze;$.length=de.length,se=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,se=!0);se&&t.drawBuffers($)}function k(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Qe={[hr]:t.FUNC_ADD,[US]:t.FUNC_SUBTRACT,[OS]:t.FUNC_REVERSE_SUBTRACT};Qe[kS]=t.MIN,Qe[FS]=t.MAX;const we={[jS]:t.ZERO,[zS]:t.ONE,[BS]:t.SRC_COLOR,[md]:t.SRC_ALPHA,[YS]:t.SRC_ALPHA_SATURATE,[WS]:t.DST_COLOR,[VS]:t.DST_ALPHA,[HS]:t.ONE_MINUS_SRC_COLOR,[gd]:t.ONE_MINUS_SRC_ALPHA,[XS]:t.ONE_MINUS_DST_COLOR,[GS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[$S]:t.ONE_MINUS_CONSTANT_COLOR,[KS]:t.CONSTANT_ALPHA,[JS]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(U,Z,$,se,de,ze,Ye,Ke,Dt,Je){if(U===Bi){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),U!==DS){if(U!==y||Je!==b){if((g!==hr||v!==hr)&&(t.blendEquation(t.FUNC_ADD),g=hr,v=hr),Je)switch(U){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFunc(t.ONE,t.ONE);break;case ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,x=null,S=null,N=null,A.set(0,0,0),C=0,y=U,b=Je}return}de=de||Z,ze=ze||$,Ye=Ye||se,(Z!==g||de!==v)&&(t.blendEquationSeparate(Qe[Z],Qe[de]),g=Z,v=de),($!==h||se!==x||ze!==S||Ye!==N)&&(t.blendFuncSeparate(we[$],we[se],we[ze],we[Ye]),h=$,x=se,S=ze,N=Ye),(Ke.equals(A)===!1||Dt!==C)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Dt),A.copy(Ke),C=Dt),y=U,b=!1}function Te(U,Z){U.side===Vn?oe(t.CULL_FACE):pe(t.CULL_FACE);let $=U.side===nn;Z&&($=!$),Ve($),U.blending===xs&&U.transparent===!1?$e(Bi):$e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const se=U.stencilWrite;a.setTest(se),se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function Ue(U){U!==PS?(pe(t.CULL_FACE),U!==M&&(U===tp?t.cullFace(t.BACK):U===LS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),M=U}function Ge(U){U!==I&&(q&&t.lineWidth(U),I=U)}function it(U,Z,$){U?(pe(t.POLYGON_OFFSET_FILL),(V!==Z||D!==$)&&(t.polygonOffset(Z,$),V=Z,D=$)):oe(t.POLYGON_OFFSET_FILL)}function R(U){U?pe(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function E(U){U===void 0&&(U=t.TEXTURE0+Y-1),L!==U&&(t.activeTexture(U),L=U)}function G(U,Z,$){$===void 0&&(L===null?$=t.TEXTURE0+Y-1:$=L);let se=W[$];se===void 0&&(se={type:void 0,texture:void 0},W[$]=se),(se.type!==U||se.texture!==Z)&&(L!==$&&(t.activeTexture($),L=$),t.bindTexture(U,Z||re[U]),se.type=U,se.texture=Z)}function J(){const U=W[L];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(U){me.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function Ae(U){ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function Oe(U,Z){let $=c.get(Z);$===void 0&&($=new WeakMap,c.set(Z,$));let se=$.get(U);se===void 0&&(se=t.getUniformBlockIndex(Z,U.name),$.set(U,se))}function rt(U,Z){const se=c.get(Z).get(U);o.get(Z)!==se&&(t.uniformBlockBinding(Z,se,U.__bindingPointIndex),o.set(Z,se))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,W={},d={},p=new WeakMap,f=[],m=null,_=!1,y=null,g=null,h=null,x=null,v=null,S=null,N=null,A=new Be(0,0,0),C=0,b=!1,w=null,M=null,I=null,V=null,D=null,me.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:oe,bindFramebuffer:De,drawBuffers:be,useProgram:k,setBlending:$e,setMaterial:Te,setFlipSided:Ve,setCullFace:Ue,setLineWidth:Ge,setPolygonOffset:it,setScissorTest:R,activeTexture:E,bindTexture:G,unbindTexture:J,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Re,texImage3D:xe,updateUBOMapping:Oe,uniformBlockBinding:rt,texStorage2D:ae,texStorage3D:Me,texSubImage2D:Ee,texSubImage3D:ce,compressedTexSubImage2D:le,compressedTexSubImage3D:Pe,scissor:fe,viewport:Ae,reset:Ne}}function $A(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return m?new OffscreenCanvas(R,E):Il("canvas")}function y(R,E,G){let J=1;const Q=it(R);if((Q.width>G||Q.height>G)&&(J=G/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(J*Q.width),Ee=Math.floor(J*Q.height);p===void 0&&(p=_(ee,Ee));const ce=E?_(ee,Ee):p;return ce.width=ee,ce.height=Ee,ce.getContext("2d").drawImage(R,0,0,ee,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+Ee+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==yn&&R.minFilter!==Pn}function h(R){t.generateMipmap(R)}function x(R,E,G,J,Q=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Ee=Q?Rl:tt.getTransfer(J);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=Ee===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){const E=R.target;E.removeEventListener("dispose",S),A(E),E.isVideoTexture&&d.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),b(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,J=f.get(G);if(J){const Q=J[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(J).length===0&&f.delete(G)}i.remove(R)}function C(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,J=f.get(G);delete J[E.__cacheKey],a.memory.textures--}function b(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Q=0;Q<E.__webglFramebuffer[J].length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[J][Q]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,Q=G.length;J<Q;J++){const ee=i.get(G[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(G[J])}i.remove(R)}let w=0;function M(){w=0}function I(){const R=w;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),w+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function D(R,E){const G=i.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){me(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function q(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){me(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function ne(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ve(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const ie={[_d]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},L={[yn]:t.NEAREST,[fM]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},W={[CM]:t.NEVER,[IM]:t.ALWAYS,[NM]:t.LESS,[gx]:t.LEQUAL,[RM]:t.EQUAL,[LM]:t.GEQUAL,[bM]:t.GREATER,[PM]:t.NOTEQUAL};function X(R,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Oc||E.magFilter===_o||E.magFilter===xr||E.minFilter===Pn||E.minFilter===Oc||E.minFilter===_o||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ie[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ie[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ie[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==_o&&E.minFilter!==xr||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",S));const J=E.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const ee=V(E);if(ee!==R.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ee].usedTimes++;const Ee=Q[R.__cacheKey];Ee!==void 0&&(Q[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),R.__cacheKey=ee,R.__webglTexture=Q[ee].texture}return G}function me(R,E,G){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const Q=K(R,E),ee=E.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+G);const Ee=i.get(ee);if(ee.version!==Ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const ce=tt.getPrimaries(tt.workingColorSpace),le=E.colorSpace===Ci?null:tt.getPrimaries(E.colorSpace),Pe=E.colorSpace===Ci||ce===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=y(E.image,!1,r.maxTextureSize);ae=Ge(E,ae);const Me=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let xe=x(E.internalFormat,Me,Re,E.colorSpace,E.isVideoTexture);X(J,E);let fe;const Ae=E.mipmaps,Oe=E.isVideoTexture!==!0,rt=Ee.__version===void 0||Q===!0,Ne=ee.dataReady,U=v(E,ae);if(E.isDepthTexture)xe=t.DEPTH_COMPONENT16,E.type===Pi?xe=t.DEPTH_COMPONENT32F:E.type===Ps?xe=t.DEPTH_COMPONENT24:E.type===qa&&(xe=t.DEPTH24_STENCIL8),rt&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,xe,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,xe,ae.width,ae.height,0,Me,Re,null));else if(E.isDataTexture)if(Ae.length>0){Oe&&rt&&n.texStorage2D(t.TEXTURE_2D,U,xe,Ae[0].width,Ae[0].height);for(let Z=0,$=Ae.length;Z<$;Z++)fe=Ae[Z],Oe?Ne&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,fe.width,fe.height,Me,Re,fe.data):n.texImage2D(t.TEXTURE_2D,Z,xe,fe.width,fe.height,0,Me,Re,fe.data);E.generateMipmaps=!1}else Oe?(rt&&n.texStorage2D(t.TEXTURE_2D,U,xe,ae.width,ae.height),Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Re,ae.data)):n.texImage2D(t.TEXTURE_2D,0,xe,ae.width,ae.height,0,Me,Re,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,U,xe,Ae[0].width,Ae[0].height,ae.depth);for(let Z=0,$=Ae.length;Z<$;Z++)fe=Ae[Z],E.format!==Wn?Me!==null?Oe?Ne&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,ae.depth,Me,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,xe,fe.width,fe.height,ae.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,ae.depth,Me,Re,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,xe,fe.width,fe.height,ae.depth,0,Me,Re,fe.data)}else{Oe&&rt&&n.texStorage2D(t.TEXTURE_2D,U,xe,Ae[0].width,Ae[0].height);for(let Z=0,$=Ae.length;Z<$;Z++)fe=Ae[Z],E.format!==Wn?Me!==null?Oe?Ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,fe.width,fe.height,Me,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?Ne&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,fe.width,fe.height,Me,Re,fe.data):n.texImage2D(t.TEXTURE_2D,Z,xe,fe.width,fe.height,0,Me,Re,fe.data)}else if(E.isDataArrayTexture)Oe?(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,U,xe,ae.width,ae.height,ae.depth),Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Re,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ae.width,ae.height,ae.depth,0,Me,Re,ae.data);else if(E.isData3DTexture)Oe?(rt&&n.texStorage3D(t.TEXTURE_3D,U,xe,ae.width,ae.height,ae.depth),Ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Re,ae.data)):n.texImage3D(t.TEXTURE_3D,0,xe,ae.width,ae.height,ae.depth,0,Me,Re,ae.data);else if(E.isFramebufferTexture){if(rt)if(Oe)n.texStorage2D(t.TEXTURE_2D,U,xe,ae.width,ae.height);else{let Z=ae.width,$=ae.height;for(let se=0;se<U;se++)n.texImage2D(t.TEXTURE_2D,se,xe,Z,$,0,Me,Re,null),Z>>=1,$>>=1}}else if(Ae.length>0){if(Oe&&rt){const Z=it(Ae[0]);n.texStorage2D(t.TEXTURE_2D,U,xe,Z.width,Z.height)}for(let Z=0,$=Ae.length;Z<$;Z++)fe=Ae[Z],Oe?Ne&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me,Re,fe):n.texImage2D(t.TEXTURE_2D,Z,xe,Me,Re,fe);E.generateMipmaps=!1}else if(Oe){if(rt){const Z=it(ae);n.texStorage2D(t.TEXTURE_2D,U,xe,Z.width,Z.height)}Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Re,ae)}else n.texImage2D(t.TEXTURE_2D,0,xe,Me,Re,ae);g(E)&&h(J),Ee.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ve(R,E,G){if(E.image.length!==6)return;const J=K(R,E),Q=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ee=i.get(Q);if(Q.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const Ee=tt.getPrimaries(tt.workingColorSpace),ce=E.colorSpace===Ci?null:tt.getPrimaries(E.colorSpace),le=E.colorSpace===Ci||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let $=0;$<6;$++)!Pe&&!ae?Me[$]=y(E.image[$],!0,r.maxCubemapSize):Me[$]=ae?E.image[$].image:E.image[$],Me[$]=Ge(E,Me[$]);const Re=Me[0],xe=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),Ae=x(E.internalFormat,xe,fe,E.colorSpace),Oe=E.isVideoTexture!==!0,rt=ee.__version===void 0||J===!0,Ne=Q.dataReady;let U=v(E,Re);X(t.TEXTURE_CUBE_MAP,E);let Z;if(Pe){Oe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ae,Re.width,Re.height);for(let $=0;$<6;$++){Z=Me[$].mipmaps;for(let se=0;se<Z.length;se++){const de=Z[se];E.format!==Wn?xe!==null?Oe?Ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,de.width,de.height,xe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,de.width,de.height,xe,fe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Ae,de.width,de.height,0,xe,fe,de.data)}}}else{if(Z=E.mipmaps,Oe&&rt){Z.length>0&&U++;const $=it(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ae,$.width,$.height)}for(let $=0;$<6;$++)if(ae){Oe?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me[$].width,Me[$].height,xe,fe,Me[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,Me[$].width,Me[$].height,0,xe,fe,Me[$].data);for(let se=0;se<Z.length;se++){const ze=Z[se].image[$].image;Oe?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,ze.width,ze.height,xe,fe,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Ae,ze.width,ze.height,0,xe,fe,ze.data)}}else{Oe?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,fe,Me[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,xe,fe,Me[$]);for(let se=0;se<Z.length;se++){const de=Z[se];Oe?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,xe,fe,de.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Ae,xe,fe,de.image[$])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),ee.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function H(R,E,G,J,Q,ee){const Ee=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),le=x(G.internalFormat,Ee,ce,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>ee),Me=Math.max(1,E.height>>ee);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ee,le,ae,Me,E.depth,0,Ee,ce,null):n.texImage2D(Q,ee,le,ae,Me,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Q,i.get(G).__webglTexture,0,Te(E)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,Q,i.get(G).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let J=t.DEPTH_COMPONENT24;if(G||Ve(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Pi?J=t.DEPTH_COMPONENT32F:Q.type===Ps&&(J=t.DEPTH_COMPONENT24));const ee=Te(E);Ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,J,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,J,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const J=Te(E);G&&Ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,E.width,E.height):Ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const J=E.textures;for(let Q=0;Q<J.length;Q++){const ee=J[Q],Ee=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),le=x(ee.internalFormat,Ee,ce,ee.colorSpace),Pe=Te(E);G&&Ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,le,E.width,E.height):Ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,Q=Te(E);if(E.depthTexture.format===_s)Ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===za)Ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function oe(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=t.createRenderbuffer(),re(E.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),re(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,E,G){const J=i.get(R);E!==void 0&&H(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&oe(R)}function be(R){const E=R.texture,G=i.get(R),J=i.get(E);R.addEventListener("dispose",N);const Q=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[ce][le]=t.createFramebuffer()}else G.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)G.__webglFramebuffer[ce]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,le=Q.length;ce<le;ce++){const Pe=i.get(Q[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ve(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const le=Q[ce];G.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Pe=s.convert(le.format,le.colorSpace),ae=s.convert(le.type),Me=x(le.internalFormat,Pe,ae,le.colorSpace,R.isXRRenderTarget===!0),Re=Te(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),re(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),X(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)H(G.__webglFramebuffer[ce][le],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,le);else H(G.__webglFramebuffer[ce],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,le=Q.length;ce<le;ce++){const Pe=Q[ce],ae=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),X(t.TEXTURE_2D,Pe),H(G.__webglFramebuffer,R,Pe,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(Pe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,J.__webglTexture),X(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)H(G.__webglFramebuffer[le],R,E,t.COLOR_ATTACHMENT0,ce,le);else H(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ce,0);g(E)&&h(ce),n.unbindTexture()}R.depthBuffer&&oe(R)}function k(R){const E=R.textures;for(let G=0,J=E.length;G<J;G++){const Q=E[G];if(g(Q)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(Q).__webglTexture;n.bindTexture(ee,Ee),h(ee),n.unbindTexture()}}}const Qe=[],we=[];function $e(R){if(R.samples>0){if(Ve(R)===!1){const E=R.textures,G=R.width,J=R.height;let Q=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ce=E.length>1;if(ce)for(let le=0;le<E.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let le=0;le<E.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Pe=i.get(E[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,Q,t.NEAREST),c===!0&&(Qe.length=0,we.length=0,Qe.push(t.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qe.push(ee),we.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,we)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let le=0;le<E.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Pe=i.get(E[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Te(R){return Math.min(r.maxSamples,R.samples)}function Ve(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Ge(R,E){const G=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Zi&&G!==Ci&&(tt.getTransfer(G)===at?(J!==Wn||Q!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=De,this.setupRenderTarget=be,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ve}function KA(t,e){function n(i,r=Ci){let s;const a=tt.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===ux)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pM)return t.BYTE;if(i===mM)return t.SHORT;if(i===lx)return t.UNSIGNED_SHORT;if(i===cx)return t.INT;if(i===Ps)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===nc)return t.HALF_FLOAT;if(i===vM)return t.ALPHA;if(i===xM)return t.RGB;if(i===Wn)return t.RGBA;if(i===_M)return t.LUMINANCE;if(i===yM)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===za)return t.DEPTH_STENCIL;if(i===SM)return t.RED;if(i===hx)return t.RED_INTEGER;if(i===MM)return t.RG;if(i===fx)return t.RG_INTEGER;if(i===px)return t.RGBA_INTEGER;if(i===kc||i===Fc||i===jc||i===zc)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sp||i===ap||i===op||i===lp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ap)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===op)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cp||i===up||i===dp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cp||i===up)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hp||i===fp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp||i===Sp||i===Mp||i===Ep||i===wp||i===Tp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_p)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ep)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tp)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bc||i===Ap||i===Cp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bc)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ap)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===EM||i===Np||i===Rp||i===bp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class JA extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _r extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZA={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZA)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Yi({vertexShader:QA,fragmentShader:eC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new St(new rc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class nC extends ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,d=null,p=null,f=null,m=null,_=null;const y=new tC,g=n.getContextAttributes();let h=null,x=null;const v=[],S=[],N=new Se;let A=null;const C=new cn;C.layers.enable(1),C.viewport=new ut;const b=new cn;b.layers.enable(2),b.viewport=new ut;const w=[C,b],M=new JA;M.layers.enable(1),M.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let re=v[H];return re===void 0&&(re=new hu,v[H]=re),re.getTargetRaySpace()},this.getControllerGrip=function(H){let re=v[H];return re===void 0&&(re=new hu,v[H]=re),re.getGripSpace()},this.getHand=function(H){let re=v[H];return re===void 0&&(re=new hu,v[H]=re),re.getHandSpace()};function D(H){const re=S.indexOf(H.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update(H.inputSource,H.frame,u||a),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let H=0;H<v.length;H++){const re=S[H];re!==null&&(S[H]=null,v[H].disconnect(re))}I=null,V=null,y.reset(),e.setRenderTarget(h),m=null,f=null,p=null,r=null,x=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,pe=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?za:_s,pe=g.stencil?qa:Ps);const De={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Cr(f.textureWidth,f.textureHeight,{format:Wn,type:Xi,depthTexture:new Rx(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(H){for(let re=0;re<H.removed.length;re++){const pe=H.removed[re],oe=S.indexOf(pe);oe>=0&&(S[oe]=null,v[oe].disconnect(pe))}for(let re=0;re<H.added.length;re++){const pe=H.added[re];let oe=S.indexOf(pe);if(oe===-1){for(let be=0;be<v.length;be++)if(be>=S.length){S.push(pe),oe=be;break}else if(S[be]===null){S[be]=pe,oe=be;break}if(oe===-1)break}const De=v[oe];De&&De.connect(pe)}}const ne=new P,ie=new P;function L(H,re,pe){ne.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const oe=ne.distanceTo(ie),De=re.projectionMatrix.elements,be=pe.projectionMatrix.elements,k=De[14]/(De[10]-1),Qe=De[14]/(De[10]+1),we=(De[9]+1)/De[5],$e=(De[9]-1)/De[5],Te=(De[8]-1)/De[0],Ve=(be[8]+1)/be[0],Ue=k*Te,Ge=k*Ve,it=oe/(-Te+Ve),R=it*-Te;re.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(it),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=k+it,G=Qe+it,J=Ue-R,Q=Ge+(oe-R),ee=we*Qe/G*E,Ee=$e*Qe/G*E;H.projectionMatrix.makePerspective(J,Q,ee,Ee,E,G),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,re){re===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(re.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),M.near=b.near=C.near=H.near,M.far=b.far=C.far=H.far,(I!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,V=M.far,C.near=I,C.far=V,b.near=I,b.far=V,C.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const re=H.parent,pe=M.cameras;W(M,re);for(let oe=0;oe<pe.length;oe++)W(pe[oe],re);pe.length===2?L(M,C,b):M.projectionMatrix.copy(C.projectionMatrix),X(H,M,re)};function X(H,re,pe){pe===null?H.matrix.copy(re.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(re.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(re.projectionMatrix),H.projectionMatrixInverse.copy(re.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ba*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function me(H,re){if(d=re.getViewerPose(u||a),_=re,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let oe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let be=0;be<pe.length;be++){const k=pe[be];let Qe=null;if(m!==null)Qe=m.getViewport(k);else{const $e=p.getViewSubImage(f,k);Qe=$e.viewport,be===0&&(e.setRenderTargetTextures(x,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(x))}let we=w[be];we===void 0&&(we=new cn,we.layers.enable(be),we.viewport=new ut,w[be]=we),we.matrix.fromArray(k.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(k.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),be===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(we)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const be=p.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let pe=0;pe<v.length;pe++){const oe=S[pe],De=v[pe];oe!==null&&De!==void 0&&De.update(oe,re,u||a)}y.render(e,M),K&&K(H,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const ve=new Cx;ve.setAnimationLoop(me),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}const ar=new qn,iC=new ft;function rC(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,wx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),p(g,h)):h.isMeshPhongMaterial?(s(g,h),d(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&m(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?c(g,h,x,v):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===nn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===nn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;if(v&&(g.envMap.value=v,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(ar)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const N=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*N,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function c(g,h,x,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*x,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,x){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const x=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(_(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",g));const N=v.program;i.updateUBOMapping(x,N);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function d(x){const v=p();x.__bindingPointIndex=v;const S=t.createBuffer(),N=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,N=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=S.length;A<C;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=b.length;w<M;w++){const I=b[w];if(m(I,A,w,N)===!0){const V=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let q=0;q<D.length;q++){const ne=D[q],ie=y(ne);typeof ne=="number"||typeof ne=="boolean"?(I.__data[0]=ne,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,I.__data)):ne.isMatrix3?(I.__data[0]=ne.elements[0],I.__data[1]=ne.elements[1],I.__data[2]=ne.elements[2],I.__data[3]=0,I.__data[4]=ne.elements[3],I.__data[5]=ne.elements[4],I.__data[6]=ne.elements[5],I.__data[7]=0,I.__data[8]=ne.elements[6],I.__data[9]=ne.elements[7],I.__data[10]=ne.elements[8],I.__data[11]=0):(ne.toArray(I.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,S,N){const A=x.value,C=v+"_"+S;if(N[C]===void 0)return typeof A=="number"||typeof A=="boolean"?N[C]=A:N[C]=A.clone(),!0;{const b=N[C];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return N[C]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function _(x){const v=x.uniforms;let S=0;const N=16;for(let C=0,b=v.length;C<b;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,I=w.length;M<I;M++){const V=w[M],D=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=D.length;Y<q;Y++){const ne=D[Y],ie=y(ne),L=S%N;L!==0&&N-L<ie.boundary&&(S+=N-L),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=ie.storage}}}const A=S%N;return A>0&&(S+=N-A),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:u,dispose:h}}class aC{constructor(e={}){const{canvas:n=JM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let S=!1,N=0,A=0,C=null,b=-1,w=null;const M=new ut,I=new ut;let V=null;const D=new Be(0);let Y=0,q=n.width,ne=n.height,ie=1,L=null,W=null;const X=new ut(0,0,q,ne),K=new ut(0,0,q,ne);let me=!1;const ve=new Sh;let H=!1,re=!1;const pe=new ft,oe=new P,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return C===null?ie:1}let k=i;function Qe(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vh}`),n.addEventListener("webglcontextlost",U,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",$,!1),k===null){const O="webgl2";if(k=Qe(O,T),k===null)throw Qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,$e,Te,Ve,Ue,Ge,it,R,E,G,J,Q,ee,Ee,ce,le,Pe,ae,Me,Re,xe,fe,Ae,Oe;function rt(){we=new p1(k),we.init(),fe=new KA(k,we),$e=new l1(k,we,e,fe),Te=new qA(k),Ve=new v1(k),Ue=new DA,Ge=new $A(k,we,Te,Ue,$e,fe,Ve),it=new u1(v),R=new f1(v),E=new wE(k),Ae=new a1(k,E),G=new m1(k,E,Ve,Ae),J=new _1(k,G,E,Ve),Me=new x1(k,$e,Ge),le=new c1(Ue),Q=new IA(v,it,R,we,$e,Ae,le),ee=new rC(v,Ue),Ee=new OA,ce=new HA(we),ae=new s1(v,it,R,Te,J,f,c),Pe=new YA(v,J,$e),Oe=new sC(k,Ve,$e,Te),Re=new o1(k,we,Ve),xe=new g1(k,we,Ve),Ve.programs=Q.programs,v.capabilities=$e,v.extensions=we,v.properties=Ue,v.renderLists=Ee,v.shadowMap=Pe,v.state=Te,v.info=Ve}rt();const Ne=new nC(v,k);this.xr=Ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(q,ne,!1))},this.getSize=function(T){return T.set(q,ne)},this.setSize=function(T,O,B=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,ne=O,n.width=Math.floor(T*ie),n.height=Math.floor(O*ie),B===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(q*ie,ne*ie).floor()},this.setDrawingBufferSize=function(T,O,B){q=T,ne=O,ie=B,n.width=Math.floor(T*B),n.height=Math.floor(O*B),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,O,B,F){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,O,B,F),Te.viewport(M.copy(X).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,O,B,F){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,B,F),Te.scissor(I.copy(K).multiplyScalar(ie).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){Te.setScissorTest(me=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,O=!0,B=!0){let F=0;if(T){let j=!1;if(C!==null){const he=C.texture.format;j=he===px||he===fx||he===hx}if(j){const he=C.texture.type,_e=he===Xi||he===Ps||he===lx||he===qa||he===ux||he===dx,ye=ae.getClearColor(),Ce=ae.getClearAlpha(),Le=ye.r,ke=ye.g,He=ye.b;_e?(m[0]=Le,m[1]=ke,m[2]=He,m[3]=Ce,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=Le,_[1]=ke,_[2]=He,_[3]=Ce,k.clearBufferiv(k.COLOR,0,_))}else F|=k.COLOR_BUFFER_BIT}O&&(F|=k.DEPTH_BUFFER_BIT),B&&(F|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",U,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Ee.dispose(),ce.dispose(),Ue.dispose(),it.dispose(),R.dispose(),J.dispose(),Ae.dispose(),Oe.dispose(),Q.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Je),Ne.removeEventListener("sessionend",kn),Gt.stop()};function U(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ve.autoReset,O=Pe.enabled,B=Pe.autoUpdate,F=Pe.needsUpdate,j=Pe.type;rt(),Ve.autoReset=T,Pe.enabled=O,Pe.autoUpdate=B,Pe.needsUpdate=F,Pe.type=j}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const O=T.target;O.removeEventListener("dispose",se),de(O)}function de(T){ze(T),Ue.remove(T)}function ze(T){const O=Ue.get(T).programs;O!==void 0&&(O.forEach(function(B){Q.releaseProgram(B)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,B,F,j,he){O===null&&(O=De);const _e=j.isMesh&&j.matrixWorld.determinant()<0,ye=Fx(T,O,B,F,j);Te.setMaterial(F,_e);let Ce=B.index,Le=1;if(F.wireframe===!0){if(Ce=G.getWireframeAttribute(B),Ce===void 0)return;Le=2}const ke=B.drawRange,He=B.attributes.position;let xt=ke.start*Le,Ut=(ke.start+ke.count)*Le;he!==null&&(xt=Math.max(xt,he.start*Le),Ut=Math.min(Ut,(he.start+he.count)*Le)),Ce!==null?(xt=Math.max(xt,0),Ut=Math.min(Ut,Ce.count)):He!=null&&(xt=Math.max(xt,0),Ut=Math.min(Ut,He.count));const sn=Ut-xt;if(sn<0||sn===1/0)return;Ae.setup(j,F,ye,B,Ce);let Kn,qe=Re;if(Ce!==null&&(Kn=E.get(Ce),qe=xe,qe.setIndex(Kn)),j.isMesh)F.wireframe===!0?(Te.setLineWidth(F.wireframeLinewidth*be()),qe.setMode(k.LINES)):qe.setMode(k.TRIANGLES);else if(j.isLine){let Ie=F.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*be()),j.isLineSegments?qe.setMode(k.LINES):j.isLineLoop?qe.setMode(k.LINE_LOOP):qe.setMode(k.LINE_STRIP)}else j.isPoints?qe.setMode(k.POINTS):j.isSprite&&qe.setMode(k.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?qe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):qe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)qe.renderInstances(xt,sn,j.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,zs=Math.min(B.instanceCount,Ie);qe.renderInstances(xt,sn,zs)}else qe.render(xt,sn)};function Ye(T,O,B){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,eo(T,O,B),T.side=Wi,T.needsUpdate=!0,eo(T,O,B),T.side=Vn):eo(T,O,B)}this.compile=function(T,O,B=null){B===null&&(B=T),g=ce.get(B),g.init(O),x.push(g),B.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),T!==B&&T.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights(v._useLegacyLights);const F=new Set;return T.traverse(function(j){const he=j.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const ye=he[_e];Ye(ye,B,j),F.add(ye)}else Ye(he,B,j),F.add(he)}),x.pop(),g=null,F},this.compileAsync=function(T,O,B=null){const F=this.compile(T,O,B);return new Promise(j=>{function he(){if(F.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&F.delete(_e)}),F.size===0){j(T);return}setTimeout(he,10)}we.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ke=null;function Dt(T){Ke&&Ke(T)}function Je(){Gt.stop()}function kn(){Gt.start()}const Gt=new Cx;Gt.setAnimationLoop(Dt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){Ke=T,Ne.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},Ne.addEventListener("sessionstart",Je),Ne.addEventListener("sessionend",kn),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(O),O=Ne.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),g=ce.get(T,x.length),g.init(O),x.push(g),pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ve.setFromProjectionMatrix(pe),re=this.localClippingEnabled,H=le.init(this.clippingPlanes,re),y=Ee.get(T,h.length),y.init(),h.push(y),Ch(T,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,W);const B=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1;B&&ae.addToRenderList(y,T),this.info.render.frame++,H===!0&&le.beginShadows();const F=g.state.shadowsArray;Pe.render(F,T,O),H===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,he=y.transmissive;if(g.setupLights(v._useLegacyLights),O.isArrayCamera){const _e=O.cameras;if(he.length>0)for(let ye=0,Ce=_e.length;ye<Ce;ye++){const Le=_e[ye];Rh(j,he,T,Le)}B&&ae.render(T);for(let ye=0,Ce=_e.length;ye<Ce;ye++){const Le=_e[ye];Nh(y,T,Le,Le.viewport)}}else he.length>0&&Rh(j,he,T,O),B&&ae.render(T),Nh(y,T,O);C!==null&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),Ae.resetDefaultState(),b=-1,w=null,x.pop(),x.length>0?(g=x[x.length-1],H===!0&&le.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Ch(T,O,B,F){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ve.intersectsSprite(T)){F&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const _e=J.update(T),ye=T.material;ye.visible&&y.push(T,_e,ye,B,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ve.intersectsObject(T))){const _e=J.update(T),ye=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),oe.copy(_e.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const Ce=_e.groups;for(let Le=0,ke=Ce.length;Le<ke;Le++){const He=Ce[Le],xt=ye[He.materialIndex];xt&&xt.visible&&y.push(T,_e,xt,B,oe.z,He)}}else ye.visible&&y.push(T,_e,ye,B,oe.z,null)}}const he=T.children;for(let _e=0,ye=he.length;_e<ye;_e++)Ch(he[_e],O,B,F)}function Nh(T,O,B,F){const j=T.opaque,he=T.transmissive,_e=T.transparent;g.setupLightsView(B),H===!0&&le.setGlobalState(v.clippingPlanes,B),F&&Te.viewport(M.copy(F)),j.length>0&&Qa(j,O,B),he.length>0&&Qa(he,O,B),_e.length>0&&Qa(_e,O,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Rh(T,O,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[F.id]===void 0&&(g.state.transmissionRenderTarget[F.id]=new Cr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?nc:Xi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const he=g.state.transmissionRenderTarget[F.id],_e=F.viewport||M;he.setSize(_e.z,_e.w);const ye=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(D),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Hi;const Le=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),g.setupLightsView(F),H===!0&&le.setGlobalState(v.clippingPlanes,F),Qa(T,B,F),Ge.updateMultisampleRenderTarget(he),Ge.updateRenderTargetMipmap(he),we.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let He=0,xt=O.length;He<xt;He++){const Ut=O[He],sn=Ut.object,Kn=Ut.geometry,qe=Ut.material,Ie=Ut.group;if(qe.side===Vn&&sn.layers.test(F.layers)){const zs=qe.side;qe.side=nn,qe.needsUpdate=!0,bh(sn,B,F,Kn,qe,Ie),qe.side=zs,qe.needsUpdate=!0,ke=!0}}ke===!0&&(Ge.updateMultisampleRenderTarget(he),Ge.updateRenderTargetMipmap(he))}v.setRenderTarget(ye),v.setClearColor(D,Y),Le!==void 0&&(F.viewport=Le),v.toneMapping=Ce}function Qa(T,O,B){const F=O.isScene===!0?O.overrideMaterial:null;for(let j=0,he=T.length;j<he;j++){const _e=T[j],ye=_e.object,Ce=_e.geometry,Le=F===null?_e.material:F,ke=_e.group;ye.layers.test(B.layers)&&bh(ye,O,B,Ce,Le,ke)}}function bh(T,O,B,F,j,he){T.onBeforeRender(v,O,B,F,j,he),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(v,O,B,F,T,he),j.transparent===!0&&j.side===Vn&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,v.renderBufferDirect(B,O,F,j,T,he),j.side=Wi,j.needsUpdate=!0,v.renderBufferDirect(B,O,F,j,T,he),j.side=Vn):v.renderBufferDirect(B,O,F,j,T,he),T.onAfterRender(v,O,B,F,j,he)}function eo(T,O,B){O.isScene!==!0&&(O=De);const F=Ue.get(T),j=g.state.lights,he=g.state.shadowsArray,_e=j.state.version,ye=Q.getParameters(T,j.state,he,O,B),Ce=Q.getProgramCacheKey(ye);let Le=F.programs;F.environment=T.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(T.isMeshStandardMaterial?R:it).get(T.envMap||F.environment),F.envMapRotation=F.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",se),Le=new Map,F.programs=Le);let ke=Le.get(Ce);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===_e)return Lh(T,ye),ke}else ye.uniforms=Q.getUniforms(T),T.onBuild(B,ye,v),T.onBeforeCompile(ye,v),ke=Q.acquireProgram(ye,Ce),Le.set(Ce,ke),F.uniforms=ye.uniforms;const He=F.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=le.uniform),Lh(T,ye),F.needsLights=zx(T),F.lightsStateVersion=_e,F.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),F.currentProgram=ke,F.uniformsList=null,ke}function Ph(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=tl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Lh(T,O){const B=Ue.get(T);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function Fx(T,O,B,F,j){O.isScene!==!0&&(O=De),Ge.resetTextureUnits();const he=O.fog,_e=F.isMeshStandardMaterial?O.environment:null,ye=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zi,Ce=(F.isMeshStandardMaterial?R:it).get(F.envMap||_e),Le=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),He=!!B.morphAttributes.position,xt=!!B.morphAttributes.normal,Ut=!!B.morphAttributes.color;let sn=Hi;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(sn=v.toneMapping);const Kn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=Kn!==void 0?Kn.length:0,Ie=Ue.get(F),zs=g.state.lights;if(H===!0&&(re===!0||T!==w)){const mn=T===w&&F.id===b;le.setState(F,T,mn)}let lt=!1;F.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==zs.state.version||Ie.outputColorSpace!==ye||j.isBatchedMesh&&Ie.batching===!1||!j.isBatchedMesh&&Ie.batching===!0||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||j.isInstancedMesh&&Ie.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ie.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ie.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ie.instancingMorph===!1&&j.morphTexture!==null||Ie.envMap!==Ce||F.fog===!0&&Ie.fog!==he||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==ke||Ie.morphTargets!==He||Ie.morphNormals!==xt||Ie.morphColors!==Ut||Ie.toneMapping!==sn||Ie.morphTargetsCount!==qe)&&(lt=!0):(lt=!0,Ie.__version=F.version);let Qi=Ie.currentProgram;lt===!0&&(Qi=eo(F,O,j));let Ih=!1,Bs=!1,ac=!1;const Ot=Qi.getUniforms(),mi=Ie.uniforms;if(Te.useProgram(Qi.program)&&(Ih=!0,Bs=!0,ac=!0),F.id!==b&&(b=F.id,Bs=!0),Ih||w!==T){Ot.setValue(k,"projectionMatrix",T.projectionMatrix),Ot.setValue(k,"viewMatrix",T.matrixWorldInverse);const mn=Ot.map.cameraPosition;mn!==void 0&&mn.setValue(k,oe.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Bs=!0,ac=!0)}if(j.isSkinnedMesh){Ot.setOptional(k,j,"bindMatrix"),Ot.setOptional(k,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ot.setValue(k,"boneTexture",mn.boneTexture,Ge))}j.isBatchedMesh&&(Ot.setOptional(k,j,"batchingTexture"),Ot.setValue(k,"batchingTexture",j._matricesTexture,Ge));const oc=B.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0)&&Me.update(j,B,Qi),(Bs||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,Ot.setValue(k,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(mi.envMap.value=Ce,mi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&O.environment!==null&&(mi.envMapIntensity.value=O.environmentIntensity),Bs&&(Ot.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&jx(mi,ac),he&&F.fog===!0&&ee.refreshFogUniforms(mi,he),ee.refreshMaterialUniforms(mi,F,ie,ne,g.state.transmissionRenderTarget[T.id]),tl.upload(k,Ph(Ie),mi,Ge)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(tl.upload(k,Ph(Ie),mi,Ge),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ot.setValue(k,"center",j.center),Ot.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(k,"normalMatrix",j.normalMatrix),Ot.setValue(k,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const mn=F.uniformsGroups;for(let lc=0,Bx=mn.length;lc<Bx;lc++){const Dh=mn[lc];Oe.update(Dh,Qi),Oe.bind(Dh,Qi)}}return Qi}function jx(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function zx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,B){Ue.get(T.texture).__webglTexture=O,Ue.get(T.depthTexture).__webglTexture=B;const F=Ue.get(T);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const B=Ue.get(T);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,B=0){C=T,N=O,A=B;let F=!0,j=null,he=!1,_e=!1;if(T){const Ce=Ue.get(T);Ce.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(k.FRAMEBUFFER,null),F=!1):Ce.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):Ce.__hasExternalTextures&&Ge.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);const ke=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?j=ke[O][B]:j=ke[O],he=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?j=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?j=ke[B]:j=ke,M.copy(T.viewport),I.copy(T.scissor),V=T.scissorTest}else M.copy(X).multiplyScalar(ie).floor(),I.copy(K).multiplyScalar(ie).floor(),V=me;if(Te.bindFramebuffer(k.FRAMEBUFFER,j)&&F&&Te.drawBuffers(T,j),Te.viewport(M),Te.scissor(I),Te.setScissorTest(V),he){const Ce=Ue.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,B)}else if(_e){const Ce=Ue.get(T.texture),Le=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,Le)}b=-1},this.readRenderTargetPixels=function(T,O,B,F,j,he,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Te.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Ce=T.texture,Le=Ce.format,ke=Ce.type;if(!$e.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-F&&B>=0&&B<=T.height-j&&k.readPixels(O,B,F,j,fe.convert(Le),fe.convert(ke),he)}finally{const Ce=C!==null?Ue.get(C).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,O,B=0){const F=Math.pow(2,-B),j=Math.floor(O.image.width*F),he=Math.floor(O.image.height*F);Ge.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,T.x,T.y,j,he),Te.unbindTexture()},this.copyTextureToTexture=function(T,O,B,F=0){const j=O.image.width,he=O.image.height,_e=fe.convert(B.format),ye=fe.convert(B.type);Ge.setTexture2D(B,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,T.x,T.y,j,he,_e,ye,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,_e,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,F,T.x,T.y,_e,ye,O.image),F===0&&B.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,O,B,F,j=0){const he=T.max.x-T.min.x,_e=T.max.y-T.min.y,ye=T.max.z-T.min.z,Ce=fe.convert(F.format),Le=fe.convert(F.type);let ke;if(F.isData3DTexture)Ge.setTexture3D(F,0),ke=k.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ge.setTexture2DArray(F,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const He=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ut=k.getParameter(k.UNPACK_SKIP_PIXELS),sn=k.getParameter(k.UNPACK_SKIP_ROWS),Kn=k.getParameter(k.UNPACK_SKIP_IMAGES),qe=B.isCompressedTexture?B.mipmaps[j]:B.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),B.isDataTexture||B.isData3DTexture?k.texSubImage3D(ke,j,O.x,O.y,O.z,he,_e,ye,Ce,Le,qe.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,j,O.x,O.y,O.z,he,_e,ye,Ce,qe.data):k.texSubImage3D(ke,j,O.x,O.y,O.z,he,_e,ye,Ce,Le,qe),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,sn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kn),j===0&&F.generateMipmaps&&k.generateMipmap(ke),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){N=0,A=0,C=null,Te.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===xh?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===ic?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oC extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=i[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const d=i[r],f=i[r+1]-d,m=(a-d)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=n||(a.isVector2?new Se:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],s=[],a=[],o=new P,c=new ft;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let u=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=u&&(u=d,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),f<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Rt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Rt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ux extends pi{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,n=new Se){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,m=u-this.aY;c=f*d-m*p+this.aX,u=f*p+m*d+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lC extends Ux{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eh(){let t=0,e=0,n=0,i=0;function r(s,a,o,c){t=s,e=o,n=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,d,p){let f=(a-s)/u-(o-s)/(u+d)+(o-a)/d,m=(o-a)/d-(c-a)/(d+p)+(c-o)/p;f*=d,m*=d,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Bo=new P,fu=new Eh,pu=new Eh,mu=new Eh;class aa extends pi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,d;this.closed||o>0?u=r[(o-1)%s]:(Bo.subVectors(r[0],r[1]).add(r[0]),u=Bo);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(p),m),y=Math.pow(p.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(d),m);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),fu.initNonuniformCatmullRom(u.x,p.x,f.x,d.x,_,y,g),pu.initNonuniformCatmullRom(u.y,p.y,f.y,d.y,_,y,g),mu.initNonuniformCatmullRom(u.z,p.z,f.z,d.z,_,y,g)}else this.curveType==="catmullrom"&&(fu.initCatmullRom(u.x,p.x,f.x,d.x,this.tension),pu.initCatmullRom(u.y,p.y,f.y,d.y,this.tension),mu.initCatmullRom(u.z,p.z,f.z,d.z,this.tension));return i.set(fu.calc(c),pu.calc(c),mu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mm(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,c=t*o;return(2*n-2*i+s+a)*c+(-3*n+3*i-2*s-a)*o+s*t+n}function cC(t,e){const n=1-t;return n*n*e}function uC(t,e){return 2*(1-t)*t*e}function dC(t,e){return t*t*e}function xa(t,e,n,i){return cC(t,e)+uC(t,n)+dC(t,i)}function hC(t,e){const n=1-t;return n*n*n*e}function fC(t,e){const n=1-t;return 3*n*n*t*e}function pC(t,e){return 3*(1-t)*t*t*e}function mC(t,e){return t*t*t*e}function _a(t,e,n,i,r){return hC(t,e)+fC(t,n)+pC(t,i)+mC(t,r)}class gC extends pi{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_a(e,r.x,s.x,a.x,o.x),_a(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vC extends pi{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_a(e,r.x,s.x,a.x,o.x),_a(e,r.y,s.y,a.y,o.y),_a(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xC extends pi{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _C extends pi{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yC extends pi{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(xa(e,r.x,s.x,a.x),xa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends pi{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(xa(e,r.x,s.x,a.x),xa(e,r.y,s.y,a.y),xa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SC extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],d=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(Mm(o,c.x,u.x,d.x,p.x),Mm(o,c.y,u.y,d.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var MC=Object.freeze({__proto__:null,ArcCurve:lC,CatmullRomCurve3:aa,CubicBezierCurve:gC,CubicBezierCurve3:vC,EllipseCurve:Ux,LineCurve:xC,LineCurve3:_C,QuadraticBezierCurve:yC,QuadraticBezierCurve3:Ox,SplineCurve:SC});class wh extends On{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),d(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new P,S=new P,N=new P;for(let A=0;A<n.length;A+=3)m(n[A+0],v),m(n[A+1],S),m(n[A+2],N),c(v,S,N,x)}function c(x,v,S,N){const A=N+1,C=[];for(let b=0;b<=A;b++){C[b]=[];const w=x.clone().lerp(S,b/A),M=v.clone().lerp(S,b/A),I=A-b;for(let V=0;V<=I;V++)V===0&&b===A?C[b][V]=w:C[b][V]=w.clone().lerp(M,V/I)}for(let b=0;b<A;b++)for(let w=0;w<2*(A-b)-1;w++){const M=Math.floor(w/2);w%2===0?(f(C[b][M+1]),f(C[b+1][M]),f(C[b][M])):(f(C[b][M+1]),f(C[b+1][M+1]),f(C[b+1][M]))}}function u(x){const v=new P;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const x=new P;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=g(x)/2/Math.PI+.5,N=h(x)/Math.PI+.5;a.push(S,1-N)}_(),p()}function p(){for(let x=0;x<a.length;x+=6){const v=a[x+0],S=a[x+2],N=a[x+4],A=Math.max(v,S,N),C=Math.min(v,S,N);A>.9&&C<.1&&(v<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),N<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function m(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const x=new P,v=new P,S=new P,N=new P,A=new Se,C=new Se,b=new Se;for(let w=0,M=0;w<s.length;w+=9,M+=6){x.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),N.copy(x).add(v).add(S).divideScalar(3);const I=g(N);y(A,M+0,x,I),y(C,M+2,v,I),y(b,M+4,S,I)}}function y(x,v,S,N){N<0&&x.x===1&&(a[v]=x.x-1),S.x===0&&S.z===0&&(a[v]=N/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.vertices,e.indices,e.radius,e.details)}}class Th extends wh{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Th(e.radius,e.detail)}}class Ul extends On{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const d=[],p=new P,f=new P,m=[],_=[],y=[],g=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&a===0?S=.5/n:h===i&&c===Math.PI&&(S=-.5/n);for(let N=0;N<=n;N++){const A=N/n;p.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),_.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),g.push(A+S,1-v),x.push(u++)}d.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=d[h][x+1],S=d[h][x],N=d[h+1][x],A=d[h+1][x+1];(h!==0||a>0)&&m.push(v,S,A),(h!==i-1||c<Math.PI)&&m.push(S,N,A)}this.setIndex(m),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ya extends On{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],u=[],d=new P,p=new P,f=new P;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,g=m/i*Math.PI*2;p.x=(e+n*Math.cos(g))*Math.cos(y),p.y=(e+n*Math.cos(g))*Math.sin(y),p.z=n*Math.sin(g),o.push(p.x,p.y,p.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(p,d).normalize(),c.push(f.x,f.y,f.z),u.push(_/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,h=(r+1)*(m-1)+_,x=(r+1)*m+_;a.push(y,g,x),a.push(g,h,x)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ds extends On{constructor(e=new Ox(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,u=new Se;let d=new P;const p=[],f=[],m=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(m,2));function y(){for(let v=0;v<n;v++)g(v);g(s===!1?n:0),x(),h()}function g(v){d=e.getPointAt(v/n,d);const S=a.normals[v],N=a.binormals[v];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,b=Math.sin(C),w=-Math.cos(C);c.x=w*S.x+b*N.x,c.y=w*S.y+b*N.y,c.z=w*S.z+b*N.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=d.x+i*c.x,o.y=d.y+i*c.y,o.z=d.z+i*c.z,p.push(o.x,o.y,o.z)}}function h(){for(let v=1;v<=n;v++)for(let S=1;S<=r;S++){const N=(r+1)*(v-1)+(S-1),A=(r+1)*v+(S-1),C=(r+1)*v+S,b=(r+1)*(v-1)+S;_.push(N,A,b),_.push(A,C,b)}}function x(){for(let v=0;v<=n;v++)for(let S=0;S<=r;S++)u.x=v/n,u.y=S/r,m.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ds(new MC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Md extends Ja{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mx,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class EC extends Md{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ah extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const gu=new ft,Em=new P,wm=new P;class kx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tm=new ft,ea=new P,vu=new P;class wC extends kx{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),vu.copy(i.position),vu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vu),i.updateMatrixWorld(),r.makeTranslation(-ea.x,-ea.y,-ea.z),Tm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tm)}}class Am extends Ah{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TC extends kx{constructor(){super(new Nx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AC extends Ah{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new TC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CC extends Ah{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class NC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Cm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Cm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function RC(){const t=z.useRef(null),e=z.useRef(null),n=z.useRef(null),i=z.useRef(null),r=z.useRef(null);return z.useEffect(()=>{const s=t.current,a=e.current;if(!s||!a)return;let o=!0,c=null,u=null,d=!0;function p(K,me,ve){const H=new Be(5460183),re=new Be(3636438),pe=new Be(3187135),oe=new Be(3788658);function De(Re){const xe=Re.attributes.position,fe=xe.count,Ae=new Float32Array(fe*3);let Oe=1/0,rt=-1/0,Ne=1/0,U=-1/0;for(let se=0;se<fe;se++){const de=xe.getX(se),ze=xe.getY(se);de<Ne&&(Ne=de),de>U&&(U=de),ze<Oe&&(Oe=ze),ze>rt&&(rt=ze)}const Z=U-Ne||1,$=rt-Oe||1;for(let se=0;se<fe;se++){const de=xe.getX(se),ze=xe.getY(se),Ye=KM.clamp((de-Ne)/Z*.5+(ze-Oe)/$*.5,0,1),Ke=new Be;Ye<.33?Ke.lerpColors(H,re,Ye/.33):Ye<.66?Ke.lerpColors(re,pe,(Ye-.33)/.33):Ke.lerpColors(pe,oe,(Ye-.66)/.34),Ae[se*3]=Ke.r,Ae[se*3+1]=Ke.g,Ae[se*3+2]=Ke.b}Re.setAttribute("color",new Dn(Ae,3))}const be=new EC({vertexColors:!0,roughness:.14,metalness:.88,clearcoat:1,clearcoatRoughness:.08,reflectivity:.95,side:Vn}),k=[new P(-1.1,-1.85,0),new P(-1.1,0,.15),new P(-1.1,1.85,0),new P(-.4,2.15,.22),new P(.85,1.9,.35),new P(1.75,1.05,.2),new P(1.95,0,0),new P(1.75,-1.05,-.2),new P(.85,-1.9,-.35),new P(-.4,-2.15,-.22),new P(-1.1,-1.85,0)],Qe=new ds(new aa(k,!0,"centripetal"),160,.28,24,!0);De(Qe),ve.add(new St(Qe,be));const we=[new P(-1.1,.45,0),new P(-.2,.45,.1),new P(.35,.95,.22),new P(.85,.45,.15)],$e=new ds(new aa(we,!1,"centripetal"),60,.18,16,!1);De($e),ve.add(new St($e,be));const Te=[new P(.85,.45,.15),new P(1.35,0,.1),new P(1.2,-.75,-.1),new P(.65,-1.25,-.2),new P(-.15,-.95,-.1)],Ve=new ds(new aa(Te,!1,"centripetal"),80,.18,16,!1);De(Ve),ve.add(new St(Ve,be));const Ue=new ds(new aa([new P(-1.1,-.32,0),new P(.35,-.32,.1)],!1),20,.14,12,!1);De(Ue),ve.add(new St(Ue,be));const Ge=new ya(.25,.08,12,24);De(Ge);const it=new St(Ge,be);it.position.set(.35,-.32,.1),ve.add(it);const R=new _r;ve.add(R);const E=new Md({color:16777215,emissive:3788658,emissiveIntensity:.85,roughness:.2,metalness:.8}),G=new St(new Ul(.18,18,18),E);G.position.set(-2.5,0,0),R.add(G);const J=new St(new Ul(.18,18,18),E);J.position.set(2.5,0,0),R.add(J);const Q=new Th(.16,0),ee=new Md({color:5460183,emissive:3636438,emissiveIntensity:.6,roughness:.2,metalness:.9}),Ee=[];for(let Re=0;Re<4;Re++){const xe=new St(Q,ee),fe=Re/4*Math.PI*2,Ae=2.8+Re%2*.4;xe.userData={angle:fe,radius:Ae,speed:.8+Re*.25,yOffset:(Re-1.5)*.5},xe.position.set(Math.cos(fe)*Ae,xe.userData.yOffset,Math.sin(fe)*Ae),me.add(xe),Ee.push(xe)}const ce=new St(new ya(3,.015,12,120),new Dl({color:5460183,transparent:!0,opacity:.35}));ce.rotation.x=Math.PI*.38,ce.rotation.y=Math.PI*.15,me.add(ce);const le=new St(new ya(3.4,.012,12,120),new Dl({color:3788658,transparent:!0,opacity:.28}));le.rotation.x=-Math.PI*.32,le.rotation.z=Math.PI*.25,me.add(le),K.add(new CC(16777215,.95));const Pe=new AC(16777215,1.35);Pe.position.set(5,7,6),K.add(Pe);const ae=new Am(5460183,4.2,16);ae.position.set(-4.5,3.5,4),K.add(ae);const Me=new Am(3788658,3.8,16);return Me.position.set(4.5,-3.5,4),K.add(Me),{satelliteGroup:R,shards:Ee,ring1:ce,ring2:le,pbrMat:be}}const f=window.innerWidth>=861,m=s.clientWidth||(f?500:340),_=s.clientHeight||(f?500:280),y=new oC,g=new cn(f?45:48,m/_,.1,100);g.position.set(0,0,f?7.5:7.8);const h=new aC({canvas:a,alpha:!0,antialias:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setSize(m,_,!1),h.toneMapping!==void 0&&(h.toneMapping=ax,h.toneMappingExposure=1.25);const x=new _r;f?x.position.x=.35:x.scale.set(.88,.88,.88),y.add(x);const v=new _r;x.add(v);const S=p(y,x,v);let N=0,A=0;const C=K=>{N=(K.clientX/window.innerWidth-.5)*2,A=(K.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",C,{passive:!0});let b=!1,w=0,M=0,I=0,V=0,D=0,Y=0;const q=K=>{b=!0,w=K.clientX,M=K.clientY},ne=K=>{if(!b)return;const me=K.clientX-w,ve=K.clientY-M;D=me*.008,Y=ve*.006,I+=D,V=Math.max(-.5,Math.min(.5,V-Y)),w=K.clientX,M=K.clientY},ie=()=>{b=!1};s.addEventListener("pointerdown",q,{passive:!0}),window.addEventListener("pointermove",ne,{passive:!0}),window.addEventListener("pointerup",ie,{passive:!0});const L=new NC;function W(){if(o){if(d){const K=L.getElapsedTime(),me=L.getDelta();if(window.innerWidth>=861){v.rotation.y=K*.45+N*.85,v.rotation.x=Math.sin(K*.8)*.1-A*.55,v.position.y=Math.sin(K*1.2)*.12;const ve=n.current,H=i.current,re=r.current;ve&&(ve.style.transform=`translate3d(${N*-18}px, ${A*-14}px, 0)`),H&&(H.style.transform=`translate3d(${N*22}px, ${A*18}px, 0)`),re&&(re.style.transform=`translate3d(${N*-12}px, ${A*20}px, 0)`)}else b||(I+=D,D*=.92,I*=.98,V-=Y,Y*=.92,V*=.98),v.rotation.y=K*.35+I,v.rotation.x=Math.sin(K*.6)*.08+V;S.satelliteGroup.rotation.z=Math.sin(K*.7)*.35,S.satelliteGroup.rotation.y=K*.3,S.shards.forEach(ve=>{ve.userData.angle+=me*ve.userData.speed;const H=ve.userData.radius+Math.sin(K*2+ve.userData.speed)*.15;ve.position.x=Math.cos(ve.userData.angle)*H,ve.position.z=Math.sin(ve.userData.angle)*H,ve.position.y=ve.userData.yOffset+Math.cos(K*1.8+ve.userData.speed)*.25,ve.rotation.x+=me*2,ve.rotation.y+=me*1.8}),S.ring1.rotation.z=K*.15,S.ring2.rotation.y=-K*.12,h.render(y,g)}c=requestAnimationFrame(W)}}c=requestAnimationFrame(W),"IntersectionObserver"in window&&(u=new IntersectionObserver(K=>{K.forEach(me=>{d=me.isIntersecting})},{threshold:.05}),u.observe(s));const X=()=>{const K=window.innerWidth>=861,me=s.clientWidth||(K?500:340),ve=s.clientHeight||(K?500:280);g.aspect=me/ve,g.updateProjectionMatrix(),h.setSize(me,ve,!1),K?(x.position.x=.35,x.scale.set(1,1,1)):(x.position.x=0,x.scale.set(.88,.88,.88))};return window.addEventListener("resize",X),()=>{o=!1,c&&cancelAnimationFrame(c),u&&u.disconnect(),window.removeEventListener("pointermove",C),s.removeEventListener("pointerdown",q),window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",ie),window.removeEventListener("resize",X),h.dispose()}},[]),l.jsxs("div",{className:"hero-visual hero-visual-reveal","aria-label":"Interactive 3D showcase",children:[l.jsx("div",{className:"orbital orbital-1"}),l.jsx("div",{className:"orbital orbital-2"}),l.jsx("div",{className:"orbital orbital-3"}),l.jsxs("div",{className:"scene-3d",id:"heroScene",ref:t,children:[l.jsx("canvas",{id:"heroCanvas",ref:e,width:"500",height:"500"}),l.jsxs("div",{className:"float-card card-one",ref:n,children:[l.jsx("span",{children:"01"}),l.jsx("b",{children:"Shape"}),l.jsx("small",{children:"strategy"})]}),l.jsxs("div",{className:"float-card card-two",ref:i,children:[l.jsx("span",{children:"02"}),l.jsx("b",{children:"Design"}),l.jsx("small",{children:"experience"})]}),l.jsxs("div",{className:"float-card card-three",ref:r,children:[l.jsx("span",{children:"03"}),l.jsx("b",{children:"Scale"}),l.jsx("small",{children:"technology"})]})]}),l.jsxs("div",{className:"hero-touch-hint",id:"heroTouchHint",children:[l.jsx("span",{className:"touch-icon",children:"👆"}),l.jsx("span",{children:"DRAG ↔ TO ROTATE 3D"})]}),l.jsxs("div",{className:"orbit-labels-container",children:[l.jsx("div",{className:"orbit-label label-a",children:"3D / WEBGL"}),l.jsx("div",{className:"orbit-label label-b",children:"UI / UX"}),l.jsx("div",{className:"orbit-label label-c",children:"AI / CODE"})]}),l.jsx("div",{className:"hero-glow"})]})}function bC(){const[t,e]=z.useState(1),n=(r,s)=>{s&&s.stopPropagation(),e(a=>a===r?null:r)},i=(r,s)=>{if(!s)return;const a=s.getBoundingClientRect(),o=r.clientX-a.left,c=r.clientY-a.top,u=s.querySelector(".cap-glare");u&&(u.style.transform=`translate(${o-120}px, ${c-120}px)`,u.style.opacity="1")};return l.jsxs("div",{className:"capabilities-interactive-grid",id:"capabilitiesGrid",children:[l.jsxs("div",{className:`capability-card-interactive ${t===1?"is-expanded":""}`,"data-capability":"meta-ads","data-cursor":"META ADS",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===1,"aria-controls":"cap-content-1",id:"cap-header-1",onClick:r=>n(1,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"01"}),l.jsx("h3",{className:"cap-title",children:"Meta Ads & Performance Marketing"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-blue"}),l.jsx("span",{className:"cap-badge-text",children:"4.8X AVG ROAS"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===1?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-1",role:"region","aria-labelledby":"cap-header-1",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsx("div",{className:"cap-ads-art",children:l.jsxs("div",{className:"cap-ad-card ac-1",children:[l.jsxs("div",{className:"ad-card-top",children:[l.jsx("span",{className:"ad-tag",children:"INSTAGRAM REEL"}),l.jsx("span",{className:"ad-roas-badge",children:"5.2x ROAS"})]}),l.jsxs("div",{className:"ad-card-body",children:[l.jsx("div",{className:"ad-hook-line",children:'Hook: "Why top brands switched in 2026..."'}),l.jsxs("div",{className:"ad-bars",children:[l.jsx("div",{className:"ad-bar b1"}),l.jsx("div",{className:"ad-bar b2"}),l.jsx("div",{className:"ad-bar b3"})]})]})]})})}),l.jsx("p",{className:"cap-desc",children:"Data-backed paid acquisition across Meta (Facebook & Instagram) and Google Ads. We engineer high-converting ad angles, algorithmic bidding, server-side Conversion API (CAPI), and relentless creative testing to scale your revenue predictably."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"Meta Ads Management"}),l.jsx("span",{children:"Conversion API (CAPI)"}),l.jsx("span",{children:"UGC & Motion Creatives"}),l.jsx("span",{children:"Scale Strategy"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore Meta Ads & Marketing"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]}),l.jsxs("div",{className:`capability-card-interactive ${t===2?"is-expanded":""}`,"data-capability":"web-dev","data-cursor":"WEB DEV",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===2,"aria-controls":"cap-content-2",id:"cap-header-2",onClick:r=>n(2,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"02"}),l.jsx("h3",{className:"cap-title",children:"Full-Stack Web & App Development"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-green"}),l.jsx("span",{className:"cap-badge-text",children:"REACT / NEXT.JS"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===2?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-2",role:"region","aria-labelledby":"cap-header-2",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsxs("div",{className:"cap-code-art",children:[l.jsxs("div",{className:"cap-code-row",children:[l.jsx("span",{className:"cc-kw",children:"const"})," ",l.jsx("span",{className:"cc-var",children:"engine"})," = ",l.jsx("span",{className:"cc-fn",children:"createArchitecture"}),"();"]}),l.jsxs("div",{className:"cap-code-row",children:[l.jsx("span",{className:"cc-kw",children:"await"})," ",l.jsx("span",{className:"cc-var",children:"cluster"}),".",l.jsx("span",{className:"cc-fn",children:"deployToEdge"}),"();"]}),l.jsxs("div",{className:"cap-code-row cc-highlight",children:[l.jsx("span",{className:"cc-ok",children:"✓ 100% Lighthouse Score"})," ",l.jsx("span",{className:"cc-cursor"})]})]})}),l.jsx("p",{className:"cap-desc",children:"Blazing fast, responsive web applications built with modern architectures (React, Next.js, Node.js). We build web platforms that convert visitors into paying clients with sub-second page loads and zero technical debt."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"Next.js & React"}),l.jsx("span",{children:"E-commerce & Custom CMS"}),l.jsx("span",{children:"API Architecture"}),l.jsx("span",{children:"PWA & Web Apps"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore Web Engineering"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]}),l.jsxs("div",{className:`capability-card-interactive ${t===3?"is-expanded":""}`,"data-capability":"seo","data-cursor":"SEO ENGINE",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===3,"aria-controls":"cap-content-3",id:"cap-header-3",onClick:r=>n(3,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"03"}),l.jsx("h3",{className:"cap-title",children:"Search Engine Optimization (SEO)"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-purple"}),l.jsx("span",{className:"cap-badge-text",children:"PAGE #1 RANKINGS"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===3?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-3",role:"region","aria-labelledby":"cap-header-3",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsx("div",{className:"cap-seo-art",children:l.jsxs("div",{className:"seo-rank-card",children:[l.jsxs("div",{className:"seo-rank-top",children:[l.jsx("span",{className:"seo-badge-google",children:"GOOGLE SEARCH"}),l.jsx("span",{className:"seo-pos-tag",children:"RANK #1"})]}),l.jsx("div",{className:"seo-kw-title",children:"High-Intent Buyer Keywords"}),l.jsxs("div",{className:"seo-traffic-curve",children:[l.jsx("span",{className:"traffic-bar t1"}),l.jsx("span",{className:"traffic-bar t2"}),l.jsx("span",{className:"traffic-bar t3"}),l.jsx("span",{className:"traffic-bar t4"})]})]})})}),l.jsx("p",{className:"cap-desc",children:"Holistic search dominance. We fuse technical SEO, Core Web Vitals optimization, programmatic SEO landing pages, and authority building so your brand captures high-intent organic search traffic 24/7 without paying per click."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"Technical & Schema SEO"}),l.jsx("span",{children:"Programmatic Content"}),l.jsx("span",{children:"Core Web Vitals"}),l.jsx("span",{children:"Keyword Dominance"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore SEO & Organic Growth"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]}),l.jsxs("div",{className:`capability-card-interactive ${t===4?"is-expanded":""}`,"data-capability":"creative","data-cursor":"3D & WEBGL",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===4,"aria-controls":"cap-content-4",id:"cap-header-4",onClick:r=>n(4,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"04"}),l.jsx("h3",{className:"cap-title",children:"Creative Technology & 3D WebGL"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-blue"}),l.jsx("span",{className:"cap-badge-text",children:"THREE.JS / 60FPS"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===4?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-4",role:"region","aria-labelledby":"cap-header-4",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsxs("div",{className:"cap-particles-art",children:[l.jsx("div",{className:"cap-ring cr-1"}),l.jsx("div",{className:"cap-ring cr-2"}),l.jsx("div",{className:"cap-ring cr-3"}),l.jsx("div",{className:"cap-core-sparkle",children:"✦"})]})}),l.jsx("p",{className:"cap-desc",children:"WebGL, Three.js 3D scenes, tactile micro-interactions, and expressive spatial interfaces that turn standard websites into unforgettable, award-winning interactive brand showcases."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"WebGL / Three.js"}),l.jsx("span",{children:"Interactive 3D Configurator"}),l.jsx("span",{children:"60fps Kinetic Motion"}),l.jsx("span",{children:"Creative Shaders"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore Creative Technology"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]}),l.jsxs("div",{className:`capability-card-interactive ${t===5?"is-expanded":""}`,"data-capability":"cro","data-cursor":"CONVERSION",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===5,"aria-controls":"cap-content-5",id:"cap-header-5",onClick:r=>n(5,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"05"}),l.jsx("h3",{className:"cap-title",children:"Conversion Rate Optimization (CRO)"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-green"}),l.jsx("span",{className:"cap-badge-text",children:"+140% CONV LIFT"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===5?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-5",role:"region","aria-labelledby":"cap-header-5",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsxs("div",{className:"cap-funnel-art",children:[l.jsx("div",{className:"funnel-level fl-1",children:"Landing Page (100%)"}),l.jsx("div",{className:"funnel-level fl-2",children:"Intent Engagement (68%)"}),l.jsx("div",{className:"funnel-level fl-3",children:"Checkout & Lead (24%)"})]})}),l.jsx("p",{className:"cap-desc",children:"We design frictionless user journeys. Using session heatmaps, user behavioral analytics, and multi-variant A/B landing pages, we systematically eliminate conversion bottlenecks to maximize return on ad spend."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"Landing Page Funnels"}),l.jsx("span",{children:"A/B Testing Matrices"}),l.jsx("span",{children:"Checkout Flow Optimization"}),l.jsx("span",{children:"Behavioral Analytics"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore CRO & Funnels"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]}),l.jsxs("div",{className:`capability-card-interactive ${t===6?"is-expanded":""}`,"data-capability":"ai-growth","data-cursor":"AI AUTOMATION",onMouseMove:r=>i(r,r.currentTarget),children:[l.jsx("div",{className:"cap-glare"}),l.jsxs("button",{className:"cap-accordion-toggle","aria-expanded":t===6,"aria-controls":"cap-content-6",id:"cap-header-6",onClick:r=>n(6,r),children:[l.jsxs("div",{className:"cap-header-info",children:[l.jsx("span",{className:"cap-num",children:"06"}),l.jsx("h3",{className:"cap-title",children:"AI Automation & Smart Growth Loops"})]}),l.jsxs("div",{className:"cap-header-meta",children:[l.jsxs("div",{className:"cap-live-badge",children:[l.jsx("span",{className:"cap-badge-pulse pulse-purple"}),l.jsx("span",{className:"cap-badge-text",children:"24/7 REVENUE AGENTS"})]}),l.jsx("span",{className:"cap-accordion-icon","aria-hidden":"true",children:t===6?"−":"+"})]})]}),l.jsx("div",{className:"cap-expandable-content",id:"cap-content-6",role:"region","aria-labelledby":"cap-header-6",children:l.jsxs("div",{className:"cap-content-inner",children:[l.jsx("div",{className:"cap-micro-stage",children:l.jsxs("div",{className:"cap-synapse-art",children:[l.jsx("div",{className:"cap-syn-core"}),l.jsx("div",{className:"cap-syn-orbit so-1"}),l.jsx("div",{className:"cap-syn-orbit so-2"}),l.jsx("div",{className:"cap-syn-node n-1"}),l.jsx("div",{className:"cap-syn-node n-2"}),l.jsx("div",{className:"cap-syn-node n-3"})]})}),l.jsx("p",{className:"cap-desc",children:"Custom AI integrations that automate lead qualification, sync high-ticket leads straight to your CRM in real time, and trigger automated multi-channel follow-ups to close deals while you sleep."}),l.jsxs("div",{className:"cap-tags",children:[l.jsx("span",{children:"Autonomous Lead Qualifiers"}),l.jsx("span",{children:"CRM & Meta Lead Sync"}),l.jsx("span",{children:"AI Chat Systems"}),l.jsx("span",{children:"Automated Email Loops"})]}),l.jsx("div",{className:"cap-footer",children:l.jsxs(et,{to:"/services",className:"cap-action-link",children:[l.jsx("span",{className:"cap-action-label",children:"Explore AI Growth"}),l.jsx("span",{className:"cap-action-arrow",children:"→"})]})})]})})]})]})}function Ho({to:t,prefix:e="",suffix:n="",duration:i=1800,decimals:r=0}){const s=z.useRef(null),[a,o]=z.useState(0),c=z.useRef(!1);return z.useEffect(()=>{const u=s.current;if(!u)return;const d=new IntersectionObserver(([p])=>{if(p.isIntersecting&&!c.current){c.current=!0;const f=performance.now(),m=_=>{const y=Math.min((_-f)/i,1),g=1-Math.pow(1-y,3);o(Number((g*t).toFixed(r))),y<1?requestAnimationFrame(m):o(t)};requestAnimationFrame(m)}},{threshold:.25});return d.observe(u),()=>d.disconnect()},[t,i,r]),l.jsxs("span",{ref:s,className:"live-counter-num font-mono tabular-nums",children:[e,r>0?a.toFixed(r):a.toLocaleString(),n]})}function PC({items:t=["META ADS (FB & INSTAGRAM)","FULL-STACK REACT & NEXT.JS","TECHNICAL SEO & CORE WEB VITALS","HIGH-ROAS CONVERSION FUNNELS","3D WEBGL & SPATIAL EXPERIENCES","AI AUTOMATION & CRM AGENTS"]}){const e=z.useRef(null),n=z.useRef(0),i=z.useRef(0);z.useEffect(()=>{let s=!1;const a=()=>{const d=window.scrollY;i.current=d-n.current,n.current=d,s||(requestAnimationFrame(()=>{i.current*=.88,s=!1}),s=!0)};window.addEventListener("scroll",a,{passive:!0});let o=0,c=0;const u=()=>{const d=e.current;if(d){const p=i.current,f=d.scrollWidth/2||1;o-=1.1+Math.min(Math.abs(p)*.28,12),-o>=f&&(o+=f);const m=Math.max(-8,Math.min(8,p*-.22));d.style.transform=`translate3d(${o}px, 0, 0) skewX(${m}deg)`}c=requestAnimationFrame(u)};return c=requestAnimationFrame(u),()=>{window.removeEventListener("scroll",a),cancelAnimationFrame(c)}},[]);const r=[...t,...t];return l.jsx("div",{className:"velocity-ticker-wrap","aria-label":"Capabilities Marquee",children:l.jsx("div",{ref:e,className:"velocity-ticker-track",children:r.map((s,a)=>l.jsxs("span",{className:"ticker-item-group",children:[l.jsx("span",{className:"ticker-text",children:s}),l.jsx("span",{className:"ticker-spark",children:"✦"})]},a))})})}function Nm({children:t,to:e,href:n,className:i="",onClick:r,target:s,rel:a,...o}){const c=z.useRef(null),[u,d]=z.useState({x:0,y:0}),p=_=>{if(!c.current)return;const{clientX:y,clientY:g}=_,{left:h,top:x,width:v,height:S}=c.current.getBoundingClientRect(),N=h+v/2,A=x+S/2,C=(y-N)*.32,b=(g-A)*.32;d({x:C,y:b})},f=()=>{d({x:0,y:0})},m={transform:`translate3d(${u.x}px, ${u.y}px, 0)`,transition:u.x===0?"transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)":"none"};return e?l.jsx(et,{ref:c,to:e,onMouseMove:p,onMouseLeave:f,style:m,className:`magnetic-interactive-btn ${i}`,onClick:r,...o,children:t}):n?l.jsx("a",{ref:c,href:n,target:s,rel:a,onMouseMove:p,onMouseLeave:f,style:m,className:`magnetic-interactive-btn ${i}`,onClick:r,...o,children:t}):l.jsx("button",{ref:c,type:"button",onClick:r,onMouseMove:p,onMouseLeave:f,style:m,className:`magnetic-interactive-btn ${i}`,...o,children:t})}function Rm({onOpenProject:t}){const e=z.useRef(null),n=z.useRef(null),i=z.useRef(null),r=z.useRef(null),[s,a]=z.useState(0),o=u=>{a(d=>d===u?null:u)};z.useEffect(()=>{const u=document.querySelectorAll(".reveal");if("IntersectionObserver"in window&&u.length){const d=new IntersectionObserver(p=>{p.forEach(f=>{f.isIntersecting&&f.target.classList.add("active")})},{rootMargin:"0px 0px -40px 0px",threshold:.08});return u.forEach(p=>d.observe(p)),()=>d.disconnect()}else u.forEach(d=>d.classList.add("active"))},[]),z.useEffect(()=>{const u=e.current;if(u){const d=u.getContext("2d");if(d){let p=function(){if(!f)return;const y=u.width=u.clientWidth||280,g=u.height=u.clientHeight||240;d.clearRect(0,0,y,g),m+=.035;for(let h=0;h<3;h++){d.beginPath();const x=h*.7;d.lineWidth=1.6-h*.3,d.strokeStyle=h===0?"rgba(83, 80, 215, 0.45)":h===1?"rgba(48, 161, 191, 0.4)":"rgba(57, 207, 114, 0.35)";for(let v=0;v<=y;v+=6){const S=v/y,N=Math.sin(S*Math.PI),A=g/2+Math.sin(S*5+m+x)*26*N+Math.cos(S*9-m*.7)*12*N;v===0?d.moveTo(v,A):d.lineTo(v,A)}d.stroke()}_=requestAnimationFrame(p)},f=!0,m=0,_=null;return _=requestAnimationFrame(p),()=>{f=!1,_&&cancelAnimationFrame(_)}}}},[]),z.useEffect(()=>{const u=n.current,d=i.current,p=r.current;if(!u)return;function f(){const m=u.getBoundingClientRect(),_=Math.max(0,Math.min(1,(window.innerHeight-m.top)/(window.innerHeight+m.height)));d&&(d.style.width=`${(_*100).toFixed(1)}%`),p&&(p.style.transform=`translateX(${(-_*60).toFixed(1)}px)`)}return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const c=[{q:"How does Devlooopers scale Meta Ads (Facebook & Instagram) profitably?",a:"We run a structured 3-phase paid media engine: 1) Conversion API (CAPI) & server-side tracking setup to capture 100% of attribution data, 2) High-velocity creative angle testing across UGC, 3D motion, and direct-response hooks, and 3) Algorithmic scaling with automated bid caps to maintain a high ROAS (typically 4.0x–6.5x)."},{q:"Why do custom React / Next.js websites convert better than standard templates?",a:"Site speed directly impacts ad conversion rates and Google rankings. A 1-second delay in page load drops conversions by up to 20%. Our custom React/Next.js architectures load in sub-600ms, achieve 100/100 Core Web Vitals scores, lower your Meta Ads Cost-Per-Click (CPC), and dramatically lift landing page checkout conversions."},{q:"What is your approach to Search Engine Optimization (SEO)?",a:"We implement holistic SEO combining technical architecture (Schema markup, SSR/SSG rendering, zero CLS/LCP delays), high-intent commercial keyword mapping, programmatic landing page generation, and authoritative link velocity to secure Page #1 rankings for revenue-driving search queries."},{q:"Can you manage both our website development and ongoing digital marketing?",a:"Yes! In fact, that is where our clients see the biggest growth compounding. Because our engineers and media buyers work in the same team, ad campaign insights instantly translate into landing page split tests, new feature rollouts, and conversion optimizations without any agency friction."},{q:"How soon can we start, and what is the typical turnaround?",a:"Full-scale custom website builds typically ship in 2 to 4 weeks depending on scope. For Meta Ads and Digital Marketing campaigns, we can launch within 5 business days post our initial tracking audit and creative strategy blueprint."}];return l.jsxs("main",{className:"homepage-main",children:[l.jsx("section",{className:"hero-wrapper section-white-hero","data-journey-section":"hero","data-theme-section":"hero","data-theme":"light",id:"heroScene",children:l.jsxs("div",{className:"hero shell",children:[l.jsxs("div",{className:"hero-copy",children:[l.jsxs("div",{className:"eyebrow hero-eyebrow",children:[l.jsx("span",{children:"DIGITAL STUDIO"})," ",l.jsx("i",{children:"✦"})," ",l.jsx("span",{children:"DEV · META ADS · GROWTH MARKETING"})]}),l.jsxs("h1",{className:"display hero-display","aria-label":"BUILD WEBSITES THAT CONVERT. SCALE META ADS THAT SCALE.",children:[l.jsx("span",{className:"line-mask",children:l.jsx("span",{className:"line-item line-1",children:"ENGINEER"})}),l.jsx("span",{className:"line-mask",children:l.jsx("span",{className:"line-item line-2",children:"DIGITAL"})}),l.jsx("span",{className:"line-mask",children:l.jsx("span",{className:"line-item line-3 gradient-text",children:"DOMINANCE."})})]}),l.jsx("p",{className:"hero-lead hero-lead-reveal",children:"We design high-converting web applications, technical SEO engines, and high-ROAS Meta (Facebook & Instagram) ad funnels for ambitious brands ready to scale beyond ordinary."}),l.jsxs("div",{className:"hero-actions hero-actions-reveal",children:[l.jsxs(Nm,{to:"/work",className:"button primary","data-cursor":"EXPLORE",children:["Explore our work ",l.jsx("span",{children:"→"})]}),l.jsxs(Nm,{to:"/contact",className:"text-link hero-audit-link","data-cursor":"AUDIT",children:["Claim Free Growth Audit ",l.jsx("span",{children:"↗"})]})]}),l.jsxs("div",{className:"hero-trust-grid",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-num gradient-text",children:l.jsx(Ho,{to:42,prefix:"$",suffix:"M+"})}),l.jsx("span",{className:"trust-label",children:"Client Revenue Scaled"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-num",children:l.jsx(Ho,{to:4.8,suffix:"x",decimals:1})}),l.jsx("span",{className:"trust-label",children:"Average Meta Ads ROAS"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-num",children:l.jsx(Ho,{to:100,suffix:"%"})}),l.jsx("span",{className:"trust-label",children:"Core Web Vitals Score"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-num",children:l.jsx(Ho,{to:150,suffix:"+"})}),l.jsx("span",{className:"trust-label",children:"Digital Assets Shipped"})]})]})]}),l.jsx(RC,{})]})}),l.jsx("section",{className:"marquee-journey-section","data-journey-section":"marquee","data-theme-section":"marquee","data-theme":"light",children:l.jsx(PC,{})}),l.jsx("section",{className:"section-light section-capabilities","data-journey-section":"capabilities","data-theme-section":"capabilities","data-theme":"light",children:l.jsxs("div",{className:"shell split-section what-we-do-section",children:[l.jsx("div",{className:"section-kicker reveal",children:"01 / UNIFIED GROWTH ENGINE"}),l.jsxs("div",{className:"section-body",children:[l.jsxs("div",{className:"what-we-do-head",children:[l.jsxs("h2",{className:"section-title reveal",children:["Code, Creative & Performance Media in ",l.jsx("span",{className:"gradient-text",children:"one tight loop."})]}),l.jsx("p",{className:"section-copy reveal delay-1",children:"Generic agencies build pretty websites that do not convert, or run paid ads to slow, broken landing pages. Devlooopers combines custom full-stack software development with algorithmic Meta ad buying and technical SEO to create predictable revenue compounders."})]}),l.jsx(bC,{})]})]})}),l.jsx("section",{className:"section-dark work-preview-section","data-journey-section":"work","data-theme-section":"work","data-theme":"dark",children:l.jsxs("div",{className:"shell work-preview",children:[l.jsxs("div",{className:"section-head reveal",children:[l.jsxs("div",{children:[l.jsx("div",{className:"section-kicker",children:"03 / PROVEN TRACK RECORD"}),l.jsxs("h2",{className:"section-title compact",children:["Digital experiences built to ",l.jsx("span",{className:"gradient-text",children:"monetize & scale."})]})]}),l.jsxs(et,{className:"text-link",to:"/work","data-cursor":"ALL WORK",children:["See all 6 case studies ",l.jsx("span",{children:"↗"})]})]}),l.jsxs("div",{className:"project-grid",children:[l.jsx("div",{className:"project-card large reveal","data-project":"orbit","data-cursor":"OPEN","data-cursor-text":"VIEW PROJECT",onClick:()=>t("orbit"),children:l.jsxs("div",{className:"project-card-inner",children:[l.jsx("div",{className:"card-glare"}),l.jsxs("div",{className:"project-art art-orbit",children:[l.jsxs("div",{className:"scene-orbit",id:"orbitScene",children:[l.jsx("div",{className:"orbit-glow"}),l.jsxs("svg",{className:"orbit-svg",viewBox:"0 0 300 300","aria-hidden":"true",children:[l.jsx("ellipse",{className:"orbit-path",cx:"150",cy:"150",rx:"110",ry:"44"}),l.jsx("line",{className:"orbit-connector",x1:"75",y1:"135",x2:"225",y2:"165"}),l.jsx("circle",{className:"orbit-satellite sat-1",cx:"75",cy:"135",r:"7"}),l.jsx("circle",{className:"orbit-satellite sat-2",cx:"225",cy:"165",r:"7"})]}),l.jsx("div",{className:"orbit-core",children:l.jsx("div",{className:"orbit-core-pulse"})})]}),l.jsx("div",{className:"project-chip",children:"META ADS & SCALING / 2026"}),l.jsx("div",{className:"project-word",children:"ORBIT"}),l.jsxs("div",{className:"project-hover-badge",children:[l.jsx("span",{children:"VIEW"})," ↗"]})]}),l.jsxs("div",{className:"project-meta",children:[l.jsxs("div",{children:[l.jsx("h3",{children:"Orbit Global Logistics"}),l.jsx("p",{children:"Custom React Portal + 5.2x ROAS Meta Ad Campaign"})]}),l.jsx("span",{className:"meta-arrow",children:"↗"})]})]})}),l.jsx("div",{className:"project-card reveal delay-1","data-project":"nova","data-cursor":"OPEN","data-cursor-text":"VIEW PROJECT",onClick:()=>t("nova"),children:l.jsxs("div",{className:"project-card-inner",children:[l.jsx("div",{className:"card-glare"}),l.jsxs("div",{className:"project-art art-nova",children:[l.jsxs("div",{className:"scene-nova",id:"novaScene",children:[l.jsx("div",{className:"nova-grid"}),l.jsx("div",{className:"nova-sphere"}),l.jsx("div",{className:"nova-rings"}),l.jsxs("div",{className:"nova-coords",children:[l.jsx("span",{children:"LAT: 47.32°"}),l.jsx("span",{children:"LNG: -122.18°"})]})]}),l.jsx("div",{className:"project-chip",children:"3D WEBGL & BRAND"}),l.jsx("div",{className:"project-word",children:"NOVA"}),l.jsxs("div",{className:"project-hover-badge",children:[l.jsx("span",{children:"VIEW"})," ↗"]})]}),l.jsxs("div",{className:"project-meta",children:[l.jsxs("div",{children:[l.jsx("h3",{children:"Nova Spatial Launch"}),l.jsx("p",{children:"Interactive 3D Web Experience + Core Web Vitals 100%"})]}),l.jsx("span",{className:"meta-arrow",children:"↗"})]})]})}),l.jsx("div",{className:"project-card reveal delay-2","data-project":"loop","data-cursor":"OPEN","data-cursor-text":"VIEW PROJECT",onClick:()=>t("loop"),children:l.jsxs("div",{className:"project-card-inner",children:[l.jsx("div",{className:"card-glare"}),l.jsxs("div",{className:"project-art art-loop",children:[l.jsxs("div",{className:"scene-loop",id:"loopScene",children:[l.jsx("canvas",{ref:e,className:"loop-wave-canvas",width:"280",height:"240"}),l.jsx("div",{className:"loop-symbol",children:"∞"}),l.jsxs("div",{className:"loop-nodes",children:[l.jsx("span",{className:"l-node n1"}),l.jsx("span",{className:"l-node n2"}),l.jsx("span",{className:"l-node n3"})]})]}),l.jsx("div",{className:"project-chip",children:"AI & SEO GROWTH ENGINE"}),l.jsx("div",{className:"project-word",children:"LOOP"}),l.jsxs("div",{className:"project-hover-badge",children:[l.jsx("span",{children:"VIEW"})," ↗"]})]}),l.jsxs("div",{className:"project-meta",children:[l.jsxs("div",{children:[l.jsx("h3",{children:"Loop Intelligence Systems"}),l.jsx("p",{children:"Programmatic SEO + AI Lead Capture Funnel"})]}),l.jsx("span",{className:"meta-arrow",children:"↗"})]})]})})]})]})}),l.jsx("section",{className:"section-dark why-us-section","data-journey-section":"bento","data-theme-section":"bento","data-theme":"dark",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"04 / THE UNFAIR ADVANTAGE"}),l.jsxs("h2",{className:"section-title reveal",children:["Why high-growth brands choose ",l.jsx("span",{className:"gradient-text",children:"Devlooopers."})]}),l.jsx("p",{className:"section-copy reveal delay-1",style:{maxWidth:"680px",marginBottom:"40px"},children:"Traditional agency silos cost you time, ad spend and missed revenue. Here is how our unified growth loop stacks the odds in your favor:"}),l.jsxs("div",{className:"why-bento-grid",children:[l.jsxs("div",{className:"why-bento-card bento-wide reveal",children:[l.jsx("div",{className:"bento-badge",children:"SPEED & TECHNICAL EDGE"}),l.jsx("h3",{children:"Sub-600ms Edge Frontends"}),l.jsx("p",{children:"Every millisecond matters. Our Next.js and React frontends achieve near-instantaneous page loads, decreasing Meta Ad bounce rates by up to 38% and lowering your overall customer acquisition cost (CAC)."}),l.jsx("div",{className:"bento-metric-tag",children:"⚡ 100/100 Core Web Vitals Guaranteed"})]}),l.jsxs("div",{className:"why-bento-card reveal delay-1",children:[l.jsx("div",{className:"bento-badge",children:"DATA & ATTRIBUTION"}),l.jsx("h3",{children:"Server-Side Meta CAPI"}),l.jsx("p",{children:"iOS updates and browser cookie blockers blind standard pixels. We install full server-side Conversion API tracking to ensure Meta's algorithm gets 100% accurate purchase and lead data."}),l.jsx("div",{className:"bento-metric-tag",children:"🎯 +28% More Attributed Conversions"})]}),l.jsxs("div",{className:"why-bento-card reveal delay-2",children:[l.jsx("div",{className:"bento-badge",children:"RAPID CREATIVE TESTING"}),l.jsx("h3",{children:"High-Velocity Ad Creative Engine"}),l.jsx("p",{children:"We do not guess which ad works. We deploy 15+ tailored visual hooks, UGC angles, and interactive motion creatives every month to find winning ad combinations rapidly."}),l.jsx("div",{className:"bento-metric-tag",children:"📈 4.8x Average Return on Ad Spend"})]}),l.jsxs("div",{className:"why-bento-card bento-wide reveal delay-3",children:[l.jsx("div",{className:"bento-badge",children:"ORGANIC DOMINANCE"}),l.jsx("h3",{children:"Programmatic & Technical SEO"}),l.jsx("p",{children:"Dominate high-volume buyer keywords with custom schema structured data, lightning-fast SSR architecture, and search intent clusters designed to outrank legacy competitors permanently."}),l.jsx("div",{className:"bento-metric-tag",children:"🔍 #1 Google Rankings on High-Intent Terms"})]})]})]})}),l.jsx("section",{className:"section-dark testimonials-section","data-journey-section":"testimonials","data-theme-section":"testimonials","data-theme":"dark",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"05 / VERIFIED CLIENT RESULTS"}),l.jsxs("h2",{className:"section-title reveal",children:["Real growth numbers from ",l.jsx("span",{className:"gradient-text",children:"real founders."})]}),l.jsxs("div",{className:"testimonials-grid",children:[l.jsxs("div",{className:"testimonial-card reveal",children:[l.jsx("div",{className:"test-stars",children:"★★★★★"}),l.jsx("p",{className:"test-quote",children:'"Devlooopers revamped our entire e-commerce store in React and took over our Meta Ads. Within 60 days, our monthly revenue scaled from $25k to over $140k with a consistent 5.1x ROAS. Best decision we made."'}),l.jsxs("div",{className:"test-author",children:[l.jsx("div",{className:"test-avatar",children:"AM"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Aarav Malhotra"}),l.jsx("span",{children:"Founder & CEO, Apex Lifestyle D2C"})]})]})]}),l.jsxs("div",{className:"testimonial-card reveal delay-1",children:[l.jsx("div",{className:"test-stars",children:"★★★★★"}),l.jsx("p",{className:"test-quote",children:'"Finding a team that actually understands both hard technical software architecture AND high-performance paid marketing is almost impossible. Devlooopers delivered both on time and blew our expectations away."'}),l.jsxs("div",{className:"test-author",children:[l.jsx("div",{className:"test-avatar",children:"SK"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Sameer Kapoor"}),l.jsx("span",{children:"Head of Growth, Solace Bio-Tech"})]})]})]}),l.jsxs("div",{className:"testimonial-card reveal delay-2",children:[l.jsx("div",{className:"test-stars",children:"★★★★★"}),l.jsx("p",{className:"test-quote",children:'"Our organic Google traffic jumped by 420% after they rebuilt our web platform with programmatic SEO. We now generate high-intent enterprise leads every week on autopilot without spending an extra dime on ads."'}),l.jsxs("div",{className:"test-author",children:[l.jsx("div",{className:"test-avatar",children:"RN"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Rohan Nair"}),l.jsx("span",{children:"Co-Founder, Orbit Global Logistics"})]})]})]})]})]})}),l.jsx("section",{className:"kinetic-statement-section section-light",id:"kineticStatementSection",ref:n,"data-journey-section":"manifesto","data-theme-section":"manifesto","data-theme":"light",children:l.jsxs("div",{className:"kinetic-sticky-stage",id:"kineticStickyStage",children:[l.jsx("div",{className:"kinetic-bg-grid"}),l.jsx("div",{className:"kinetic-glow",id:"kineticGlow"}),l.jsxs("div",{className:"kinetic-inner shell",children:[l.jsxs("div",{className:"kinetic-meta-top",children:[l.jsx("span",{className:"kinetic-kicker",children:"06 / MANIFESTO"}),l.jsx("span",{className:"kinetic-coords",children:"DESIGN x CODE x PERFORMANCE MARKETING"})]}),l.jsxs("div",{className:"kinetic-type-box",id:"kineticTypeBox",children:[l.jsxs("div",{className:"kinetic-line kinetic-line-compress",id:"kLineWeBuild",children:[l.jsx("span",{className:"k-word word-we",children:"BRINGING"}),l.jsx("span",{className:"k-word word-build",children:"YOUR"})]}),l.jsx("div",{className:"kinetic-line kinetic-line-expand",id:"kLineDigital",children:l.jsx("span",{className:"k-word word-digital gradient-text",children:"DIGITAL VISION"})}),l.jsx("div",{className:"kinetic-line kinetic-line-drift",id:"kLineExperiences",children:l.jsxs("div",{className:"experiences-track kinetic-drift-track",id:"experiencesTrack",ref:r,children:[l.jsx("span",{className:"k-word word-experiences",children:"TO LIFE"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-sub",children:"DEV x META ADS x SEO"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-repeat",children:"TO LIFE"})]})})]}),l.jsxs("div",{className:"kinetic-meta-bottom",children:[l.jsxs("div",{className:"kinetic-meter",children:[l.jsx("span",{className:"meter-text",children:"MANIFESTO CADENCE"}),l.jsx("div",{className:"meter-track",children:l.jsx("div",{className:"meter-bar",id:"kineticMeterBar",ref:i})})]}),l.jsx("span",{className:"kinetic-tagline",children:'"Bringing your digital vision to life."'})]})]})]})}),l.jsx("section",{className:"section-light faq-section","data-journey-section":"faq","data-theme-section":"faq","data-theme":"light",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"07 / FREQUENTLY ASKED QUESTIONS"}),l.jsxs("h2",{className:"section-title reveal",children:["Everything you need to know about ",l.jsx("span",{className:"gradient-text",children:"scaling with us."})]}),l.jsx("div",{className:"faq-accordion-container",children:c.map((u,d)=>{const p=s===d;return l.jsxs("div",{className:`faq-interactive-card ${p?"is-active":""}`,onClick:()=>o(d),children:[l.jsxs("div",{className:"faq-question-header",children:[l.jsx("h3",{className:"faq-question-title",children:u.q}),l.jsx("span",{className:`faq-plus-icon ${p?"is-rotated":""}`,children:"+"})]}),l.jsx("div",{className:`faq-grid-expand ${p?"is-expanded":""}`,children:l.jsx("div",{className:"faq-grid-inner",children:l.jsx("p",{children:u.a})})})]},d)})})]})}),l.jsx("section",{className:"section-dark final-cta-wrapper","data-journey-section":"cta","data-theme-section":"cta","data-theme":"dark",children:l.jsx("div",{className:"shell final-cta",children:l.jsxs("div",{className:"cta-panel reveal",children:[l.jsx("div",{className:"section-kicker",children:"08 / NEXT MOVE"}),l.jsxs("h2",{children:["Ready to scale your ",l.jsx("span",{className:"gradient-text",children:"revenue & brand?"})]}),l.jsx("p",{className:"cta-desc",children:"Book a 30-minute growth strategy session. We'll audit your current website speed, SEO rankings, and Meta Ads funnel for free."}),l.jsxs("div",{className:"cta-buttons-row",children:[l.jsxs(et,{className:"button primary",to:"/contact","data-cursor":"SCALE","data-magnetic":"true",children:["Start a conversation ",l.jsx("span",{children:"→"})]}),l.jsxs(et,{className:"button secondary",to:"/services","data-cursor":"SERVICES",children:["View service packages ",l.jsx("span",{children:"↗"})]})]})]})})})]})}function LC(){const[t,e]=z.useState({metaAds:!0,webDev:!1,seo:!1,creative:!1,cro:!1,ai:!1}),n=z.useRef(null),i=z.useRef(null),r=z.useRef(null),s=a=>{e(o=>({...o,[a]:!o[a]}))};return z.useEffect(()=>{const a=document.querySelectorAll(".reveal");if("IntersectionObserver"in window&&a.length){const o=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.target.classList.add("active")})},{rootMargin:"0px 0px -40px 0px",threshold:.1});return a.forEach(c=>o.observe(c)),()=>o.disconnect()}else a.forEach(o=>o.classList.add("active"))},[]),z.useEffect(()=>{const a=n.current,o=i.current,c=r.current;if(!a)return;function u(){const d=a.getBoundingClientRect(),p=Math.max(0,Math.min(1,(window.innerHeight-d.top)/(window.innerHeight+d.height)));o&&(o.style.width=`${(p*100).toFixed(1)}%`),c&&(c.style.transform=`translateX(${(-p*60).toFixed(1)}px)`)}return window.addEventListener("scroll",u,{passive:!0}),u(),()=>window.removeEventListener("scroll",u)},[]),l.jsxs("main",{className:"services-page-main",children:[l.jsx("section",{className:"section-light services-hero-wrapper","data-journey-section":"services-hero","data-theme-section":"services-hero","data-theme":"light",children:l.jsxs("div",{className:"page-hero shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"01 / CAPABILITIES & GROWTH SUITE"}),l.jsxs("h1",{className:"display reveal delay-1",children:["Engineered software. ",l.jsx("span",{className:"gradient-text",children:"Algorithmic scale."})]}),l.jsx("p",{className:"hero-lead narrow reveal delay-2",children:"We eliminate the gap between software engineers, designers, and media buyers. One unified partner for your website, Meta Ads, and organic search dominance."}),l.jsxs("div",{className:"services-hero-pills reveal delay-3",children:[l.jsx("span",{className:"svc-pill",children:"✦ Meta Ads Management"}),l.jsx("span",{className:"svc-pill",children:"✦ React & Next.js Architecture"}),l.jsx("span",{className:"svc-pill",children:"✦ Technical SEO"}),l.jsx("span",{className:"svc-pill",children:"✦ 3D WebGL"}),l.jsx("span",{className:"svc-pill",children:"✦ CRO & Funnels"})]})]})}),l.jsx("section",{className:"section-light services-interactive-section","data-journey-section":"services-matrix","data-theme-section":"services-matrix","data-theme":"light",children:l.jsx("div",{className:"shell",children:l.jsxs("div",{className:"services-grid-interactive",children:[l.jsxs("article",{className:`service-card-interactive reveal ${t.metaAds?"is-expanded":""}`,"data-service":"meta-ads",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"01"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand Meta Ads service",onClick:()=>s("metaAds"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.metaAds?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"4.8X AVG ROAS"}),l.jsx("span",{className:"service-tag",children:"CAPI TRACKING"})]}),l.jsx("h2",{className:"service-title",children:"Meta Ads (Facebook & Instagram) & Paid Media"}),l.jsx("p",{className:"service-summary",children:"High-scale performance marketing engineered with mathematical precision, server-side attribution, and continuous creative testing."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"What We Execute:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Full Meta Business Manager & Server-Side CAPI Setup"}),l.jsx("li",{children:"High-Velocity Creative Testing (15+ UGC & Motion Angles/mo)"}),l.jsx("li",{children:"Algorithmic Bid Scaling & Horizontal Audience Expansion"}),l.jsx("li",{children:"Retargeting Funnels & Dynamic Product Ads (DPA)"}),l.jsx("li",{children:"Google Ads / Search PPC & YouTube Complementary Funnels"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Client Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"Weekly Live Performance Dashboard"}),l.jsx("span",{className:"del-badge",children:"Custom Ad Creative Library"}),l.jsx("span",{className:"del-badge",children:"A/B Landing Page Sync"}),l.jsx("span",{className:"del-badge",children:"Direct Slack/WhatsApp Access"})]})]})]})})]}),l.jsxs("article",{className:`service-card-interactive reveal ${t.webDev?"is-expanded":""}`,"data-service":"web-dev",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"02"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand Web Development service",onClick:()=>s("webDev"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.webDev?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"REACT / NEXT.JS"}),l.jsx("span",{className:"service-tag",children:"<600MS LOAD"})]}),l.jsx("h2",{className:"service-title",children:"Full-Stack Web & App Development"}),l.jsx("p",{className:"service-summary",children:"Sub-second, bespoke web platforms and applications engineered to handle millions of visitors while converting traffic into high-ticket clients."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Core Tech Stack:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"React 19, Next.js (App Router), TypeScript"}),l.jsx("li",{children:"Edge SSR/SSG for instant worldwide CDN caching"}),l.jsx("li",{children:"Custom Headless CMS & E-commerce Checkout Flow"}),l.jsx("li",{children:"RESTful & GraphQL Scalable APIs"}),l.jsx("li",{children:"100/100 Core Web Vitals Optimization"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"Production-Ready GitHub Repo"}),l.jsx("span",{className:"del-badge",children:"Automated CI/CD Pipeline"}),l.jsx("span",{className:"del-badge",children:"Cross-Device Responsive QA"}),l.jsx("span",{className:"del-badge",children:"Interactive Component Library"})]})]})]})})]}),l.jsxs("article",{className:`service-card-interactive reveal ${t.seo?"is-expanded":""}`,"data-service":"seo",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"03"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand SEO service",onClick:()=>s("seo"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.seo?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"RANK #1 GOOGLE"}),l.jsx("span",{className:"service-tag",children:"PROGRAMMATIC SEO"})]}),l.jsx("h2",{className:"service-title",children:"Search Engine Optimization (SEO) & Organic Growth"}),l.jsx("p",{className:"service-summary",children:"End-to-end organic acquisition strategy. We combine deep technical schema audits, programmatic content architecture, and authority building."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"What We Execute:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Full Technical SEO Audit & Core Web Vitals Fixes"}),l.jsx("li",{children:"High-Intent Commercial Keyword Mapping"}),l.jsx("li",{children:"JSON-LD Schema Markup & Rich Snippet Dominance"}),l.jsx("li",{children:"Programmatic Landing Page Generation for Niche Scale"}),l.jsx("li",{children:"Authority Backlink Strategy & Competitor Gap Takeover"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"Monthly Keyword Ranking Tracker"}),l.jsx("span",{className:"del-badge",children:"Content Architecture Blueprint"}),l.jsx("span",{className:"del-badge",children:"Google Search Console Integration"})]})]})]})})]}),l.jsxs("article",{className:`service-card-interactive reveal ${t.creative?"is-expanded":""}`,"data-service":"creative",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"04"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand Creative Technology service",onClick:()=>s("creative"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.creative?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"THREE.JS / WEBGL"}),l.jsx("span",{className:"service-tag",children:"60FPS SPATIAL"})]}),l.jsx("h2",{className:"service-title",children:"Creative Technology & Interactive 3D WebGL"}),l.jsx("p",{className:"service-summary",children:"Turn your digital presence into an award-winning visual masterpiece with spatial 3D scenes, tactile physics, and custom GPU shaders."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Capabilities:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Three.js & WebGL 3D Interactive Environments"}),l.jsx("li",{children:"Interactive 3D Product Showcases & Configurators"}),l.jsx("li",{children:"GLSL Shaders & Particle Simulation Systems"}),l.jsx("li",{children:"Spatial Audio & Smooth Physics Interactions"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"Optimized 3D GLTF/GLB Assets"}),l.jsx("span",{className:"del-badge",children:"Mobile GPU Fallback System"}),l.jsx("span",{className:"del-badge",children:"Interactive Showcase Embeds"})]})]})]})})]}),l.jsxs("article",{className:`service-card-interactive reveal ${t.cro?"is-expanded":""}`,"data-service":"cro",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"05"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand CRO service",onClick:()=>s("cro"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.cro?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"+140% CONV LIFT"}),l.jsx("span",{className:"service-tag",children:"A/B SPLIT TESTING"})]}),l.jsx("h2",{className:"service-title",children:"Conversion Rate Optimization (CRO) & Funnel Design"}),l.jsx("p",{className:"service-summary",children:"Maximize the ROI of every visitor. We identify friction points across your funnel and deploy high-converting landing page variants."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Capabilities:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Session Recording & Heatmap Behavioral Diagnostics"}),l.jsx("li",{children:"Multi-Variant Direct Response Landing Pages"}),l.jsx("li",{children:"Checkout Page & Form Drop-off Optimization"}),l.jsx("li",{children:"Dynamic Headline & Social Proof Testing"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"A/B Split Test Experiments"}),l.jsx("span",{className:"del-badge",children:"Conversion Analytics Report"}),l.jsx("span",{className:"del-badge",children:"High-Converting Copywriting"})]})]})]})})]}),l.jsxs("article",{className:`service-card-interactive reveal ${t.ai?"is-expanded":""}`,"data-service":"ai",children:[l.jsxs("div",{className:"service-card-header",children:[l.jsx("span",{className:"service-num",children:"06"}),l.jsxs("button",{className:"service-expand-btn","aria-label":"Expand AI Automation service",onClick:()=>s("ai"),children:[l.jsx("span",{className:"btn-icon-plus",children:t.ai?"âˆ’":"+"}),l.jsx("span",{className:"btn-icon-arrow",children:"â†’"})]})]}),l.jsxs("div",{className:"service-card-meta",children:[l.jsx("span",{className:"service-tag",children:"AI AGENTS"}),l.jsx("span",{className:"service-tag",children:"AUTO LEAD SYNC"})]}),l.jsx("h2",{className:"service-title",children:"AI Automation & Growth Infrastructure"}),l.jsx("p",{className:"service-summary",children:"Autonomous systems that handle lead qualification, book meetings on your calendar 24/7, and sync paid ad leads directly to your sales pipeline."}),l.jsx("div",{className:"service-expanded-content",children:l.jsxs("div",{className:"service-deep-grid",children:[l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Capabilities:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Instant Meta Lead Ad to CRM & WhatsApp/SMS Instant Triggers"}),l.jsx("li",{children:"AI Chatbot Lead Qualification on Landing Pages"}),l.jsx("li",{children:"Automated Multi-Channel Email & Outreach Sequences"}),l.jsx("li",{children:"Custom Python & LangChain Internal Agent Tools"})]})]}),l.jsxs("div",{className:"deep-col",children:[l.jsx("h4",{children:"Deliverables:"}),l.jsxs("div",{className:"deliverable-badge-list",children:[l.jsx("span",{className:"del-badge",children:"Automated Webhooks & Pipelines"}),l.jsx("span",{className:"del-badge",children:"Zero-Latency Lead Notification System"}),l.jsx("span",{className:"del-badge",children:"CRM Integration Setup"})]})]})]})})]})]})})}),l.jsx("section",{className:"kinetic-statement-section",id:"kineticStatementSection",ref:n,"data-theme-section":"services-manifesto","data-theme":"dark",children:l.jsxs("div",{className:"kinetic-sticky-stage",id:"kineticStickyStage",children:[l.jsx("div",{className:"kinetic-bg-grid"}),l.jsx("div",{className:"kinetic-glow",id:"kineticGlow"}),l.jsxs("div",{className:"kinetic-inner shell",children:[l.jsxs("div",{className:"kinetic-meta-top",children:[l.jsx("span",{className:"kinetic-kicker",children:"02 / PHILOSOPHY"}),l.jsx("span",{className:"kinetic-coords",children:"FULL-STACK MEDIA & CODE"})]}),l.jsxs("div",{className:"kinetic-type-box",id:"kineticTypeBox",children:[l.jsxs("div",{className:"kinetic-line kinetic-line-compress",id:"kLineWeBuild",children:[l.jsx("span",{className:"k-word word-we",children:"SCALING"}),l.jsx("span",{className:"k-word word-build",children:"BRANDS"})]}),l.jsx("div",{className:"kinetic-line kinetic-line-expand",id:"kLineDigital",children:l.jsx("span",{className:"k-word word-digital gradient-text",children:"AT VELOCITY"})}),l.jsx("div",{className:"kinetic-line kinetic-line-drift",id:"kLineExperiences",children:l.jsxs("div",{className:"experiences-track kinetic-drift-track",id:"experiencesTrack",ref:r,children:[l.jsx("span",{className:"k-word word-experiences",children:"END TO END"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-sub",children:"DEV x META ADS x SEO"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-repeat",children:"END TO END"})]})})]}),l.jsxs("div",{className:"kinetic-meta-bottom",children:[l.jsxs("div",{className:"kinetic-meter",children:[l.jsx("span",{className:"meter-text",children:"SCALE VELOCITY"}),l.jsx("div",{className:"meter-track",children:l.jsx("div",{className:"meter-bar",id:"kineticMeterBar",ref:i})})]}),l.jsx("span",{className:"kinetic-tagline",children:'"Engineering digital growth for ambitious leaders."'})]})]})]})}),l.jsx("section",{className:"section-dark final-cta-wrapper","data-journey-section":"services-cta","data-theme-section":"services-cta","data-theme":"dark",children:l.jsx("div",{className:"shell final-cta",children:l.jsxs("div",{className:"cta-panel reveal",children:[l.jsx("div",{className:"section-kicker",children:"03 / START SCALING"}),l.jsxs("h2",{children:["Let us engineer your ",l.jsx("span",{className:"gradient-text",children:"growth engine."})]}),l.jsx("p",{className:"cta-desc",children:"Whether you need a custom React platform, a high-converting Meta Ads campaign, or an SEO takeover — we are ready."}),l.jsx("div",{className:"cta-buttons-row",children:l.jsxs(et,{className:"button primary",to:"/contact","data-cursor":"START","data-magnetic":"true",children:["Book a strategy session ",l.jsx("span",{children:"→"})]})})]})})})]})}const IC=[{id:"orbit",title:"Orbit Logistics",category:["all","product-ai","3d-webgl"],chip:"PRODUCT / 2026",kicker:"OPERATIONS / TELEMETRY COMMAND",badgeWord:"ORBIT",desc:"A calm operations command centre that turns noisy logistics data into decisions teams can act on. Dense information, zero latency, and tactile micro-interactions.",tags:["UX Strategy","WebGL Telemetry","Frontend Architecture"],artType:"orbit"},{id:"nova",title:"Nova Spaces",category:["all","3d-webgl"],chip:"3D / WEBGL",kicker:"3D / WEBGL SPATIAL SHOWROOM",badgeWord:"NOVA",desc:"An editorial launch experience with a spatial navigation layer. Visitors explore the product through physical depth, daylight simulation, and ambient transitions.",tags:["Creative Dev","Three.js","Shader Motion"],artType:"nova"},{id:"loop",title:"Loop Intelligence",category:["all","product-ai"],chip:"AI / PLATFORM",kicker:"AI / AUTONOMOUS WORKFLOWS",badgeWord:"LOOP",desc:"A workflow layer that connects company knowledge, conversations, and repeatable actions. The interface makes every automated step visible, debuggable, and steerable.",tags:["AI UX","Systems Design","Agent Automation"],artType:"loop"},{id:"aura",title:"Aura Health",category:["all","product-ai","design-systems"],chip:"SPATIAL / HEALTH",kicker:"BIOMETRIC / METABOLIC TELEMETRY",badgeWord:"AURA",desc:"A spatial metabolic health HUD visualizing real-time cellular telemetry, circadian rhythms, and heart rate variability in responsive 3D viewports.",tags:["Spatial UI","Design Systems","Web Bluetooth"],artType:"aura"},{id:"apex",title:"Apex Trading Engine",category:["all","3d-webgl","design-systems"],chip:"FINTECH / WEBGL",kicker:"HIGH-FREQUENCY / MARKET DEPTH",badgeWord:"APEX",desc:"An ultra-low-latency institutional trading terminal with real-time 3D liquidity matrix visualizer, sub-millisecond tick feeds, and tactile execution triggers.",tags:["High-Throughput UI","GPU Depth Matrix","WebSockets"],artType:"apex"},{id:"solace",title:"Solace Audio Intelligence",category:["all","product-ai","3d-webgl"],chip:"AI / AUDIO",kicker:"GENERATIVE / ACOUSTIC SOUNDFIELD",badgeWord:"SOLACE",desc:"An expressive 3D soundfield canvas and AI music composition system where frequencies materialize as fluid reactive particles and spatial soundscapes.",tags:["Web Audio API","Particle Shaders","Music AI"],artType:"solace"}];function DC({onOpenProject:t}){const[e,n]=z.useState("all"),i=z.useRef(null),r=z.useRef(null),s=IC.filter(o=>o.category.includes(e)),a=(o,c)=>{if(!c)return;const u=c.getBoundingClientRect(),d=o.clientX-u.left,p=o.clientY-u.top;c.style.setProperty("--card-glare-x",`${d}px`),c.style.setProperty("--card-glare-y",`${p}px`)};return z.useEffect(()=>{const o=i.current;if(o){const c=o.getContext("2d");if(c){let u=function(){if(!d)return;const m=o.width=o.clientWidth||280,_=o.height=o.clientHeight||200;c.clearRect(0,0,m,_),p+=.035;for(let y=0;y<3;y++){c.beginPath();const g=y*.7;c.lineWidth=1.6-y*.3,c.strokeStyle=y===0?"rgba(83, 80, 215, 0.45)":y===1?"rgba(48, 161, 191, 0.4)":"rgba(57, 207, 114, 0.35)";for(let h=0;h<=m;h+=6){const x=h/m,v=Math.sin(x*Math.PI),S=_/2+Math.sin(x*5+p+g)*22*v+Math.cos(x*9-p*.7)*10*v;h===0?c.moveTo(h,S):c.lineTo(h,S)}c.stroke()}f=requestAnimationFrame(u)},d=!0,p=0,f=null;return f=requestAnimationFrame(u),()=>{d=!1,f&&cancelAnimationFrame(f)}}}},[e]),z.useEffect(()=>{const o=r.current;if(o){const c=o.getContext("2d");if(c){let u=function(){if(!d)return;const m=o.width=o.clientWidth||280,_=o.height=o.clientHeight||200;c.clearRect(0,0,m,_),p+=.04;for(let y=0;y<8;y++){const g=30+Math.sin(p+y*.8)*20,h=20+y*32;c.fillStyle="rgba(57, 207, 114, 0.15)",c.fillRect(h,_-g-20,18,g)}c.beginPath(),c.strokeStyle="#39cf72",c.lineWidth=2;for(let y=0;y<=m;y+=5){const g=_*.6+Math.sin(y*.04+p)*18-y/m*24;y===0?c.moveTo(y,g):c.lineTo(y,g)}c.stroke(),f=requestAnimationFrame(u)},d=!0,p=0,f=null;return f=requestAnimationFrame(u),()=>{d=!1,f&&cancelAnimationFrame(f)}}}},[e]),l.jsxs("main",{children:[l.jsx("section",{className:"page-hero section-dark","data-journey-section":"work-hero","data-theme-section":"work-hero","data-theme":"dark",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"01 / SELECTED WORK"}),l.jsxs("h1",{className:"display reveal delay-1",children:["Case studies in ",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"motion & depth."})]}),l.jsx("p",{className:"hero-lead narrow reveal delay-2",children:"From spatial command dashboards and 3D WebGL showrooms to autonomous AI canvases — explore our production projects."}),l.jsxs("div",{className:"work-filter-bar reveal delay-3",children:[l.jsxs("button",{className:`work-filter-pill ${e==="all"?"active":""}`,onClick:()=>n("all"),"data-cursor":"FILTER",children:["All ",l.jsx("span",{className:"pill-count",children:"06"})]}),l.jsxs("button",{className:`work-filter-pill ${e==="product-ai"?"active":""}`,onClick:()=>n("product-ai"),"data-cursor":"FILTER",children:["Product & AI ",l.jsx("span",{className:"pill-count",children:"03"})]}),l.jsxs("button",{className:`work-filter-pill ${e==="3d-webgl"?"active":""}`,onClick:()=>n("3d-webgl"),"data-cursor":"FILTER",children:["3D & WebGL ",l.jsx("span",{className:"pill-count",children:"03"})]}),l.jsxs("button",{className:`work-filter-pill ${e==="design-systems"?"active":""}`,onClick:()=>n("design-systems"),"data-cursor":"FILTER",children:["Design Systems ",l.jsx("span",{className:"pill-count",children:"02"})]})]})]})}),l.jsx("section",{className:"section work-bento-section section-dark","data-journey-section":"work-grid","data-theme-section":"work-grid","data-theme":"dark",children:l.jsx("div",{className:"shell",children:l.jsx("div",{className:"work-bento-grid",children:s.map((o,c)=>l.jsxs("article",{className:`work-bento-card reveal ${c===0?"card-featured":""}`,"data-project":o.id,"data-cursor":"OPEN","data-cursor-text":"EXPLORE CASE",onMouseMove:u=>a(u,u.currentTarget),onClick:()=>t(o.id),children:[l.jsx("div",{className:"card-glare"}),l.jsxs("div",{className:`work-bento-visual art-${o.artType}`,children:[o.artType==="orbit"&&l.jsxs("div",{className:"scene-orbit",id:"workOrbitScene",children:[l.jsx("div",{className:"orbit-glow"}),l.jsxs("svg",{className:"orbit-svg",viewBox:"0 0 300 300","aria-hidden":"true",children:[l.jsx("ellipse",{className:"orbit-path",cx:"150",cy:"150",rx:"115",ry:"46"}),l.jsx("line",{className:"orbit-connector",x1:"75",y1:"135",x2:"225",y2:"165"}),l.jsx("circle",{className:"orbit-satellite sat-1",cx:"75",cy:"135",r:"8"}),l.jsx("circle",{className:"orbit-satellite sat-2",cx:"225",cy:"165",r:"8"})]}),l.jsx("div",{className:"orbit-core",children:l.jsx("div",{className:"orbit-core-pulse"})})]}),o.artType==="nova"&&l.jsxs("div",{className:"scene-nova",id:"workNovaScene",children:[l.jsx("div",{className:"nova-grid"}),l.jsx("div",{className:"nova-sphere big"}),l.jsx("div",{className:"nova-rings"}),l.jsxs("div",{className:"nova-coords",children:[l.jsx("span",{children:"LAT: 47.32°"}),l.jsx("span",{children:"LNG: -122.18°"})]})]}),o.artType==="loop"&&l.jsxs("div",{className:"scene-loop",id:"workLoopScene",children:[l.jsx("canvas",{ref:i,className:"loop-wave-canvas",width:"300",height:"220"}),l.jsx("div",{className:"loop-symbol big",children:"8"}),l.jsxs("div",{className:"loop-nodes",children:[l.jsx("span",{className:"l-node n1"}),l.jsx("span",{className:"l-node n2"}),l.jsx("span",{className:"l-node n3"})]})]}),o.artType==="aura"&&l.jsxs("div",{className:"scene-aura",children:[l.jsx("div",{className:"aura-glow"}),l.jsxs("div",{className:"aura-pulse-rings",children:[l.jsx("div",{className:"aura-ring ar-1"}),l.jsx("div",{className:"aura-ring ar-2"}),l.jsx("div",{className:"aura-ring ar-3"})]}),l.jsx("div",{className:"aura-core-heart",children:l.jsxs("span",{className:"aura-rate",children:["78 ",l.jsx("small",{children:"BPM"})]})})]}),o.artType==="apex"&&l.jsxs("div",{className:"scene-apex",children:[l.jsx("canvas",{ref:r,className:"apex-wave-canvas",width:"300",height:"220"}),l.jsxs("div",{className:"apex-badge-order",children:[l.jsx("span",{className:"dot-green"}),l.jsx("span",{children:"MATCH: 0.8ms"})]})]}),o.artType==="solace"&&l.jsxs("div",{className:"scene-solace",children:[l.jsxs("div",{className:"solace-spiral-rings",children:[l.jsx("div",{className:"sol-ring sr-1"}),l.jsx("div",{className:"sol-ring sr-2"}),l.jsx("div",{className:"sol-ring sr-3"})]}),l.jsxs("div",{className:"solace-equalizer",children:[l.jsx("span",{className:"eq-bar eq-1"}),l.jsx("span",{className:"eq-bar eq-2"}),l.jsx("span",{className:"eq-bar eq-3"}),l.jsx("span",{className:"eq-bar eq-4"}),l.jsx("span",{className:"eq-bar eq-5"})]}),l.jsx("div",{className:"solace-stem-label",children:"64 STEMS · 3D SOUNDFIELD"})]}),l.jsx("span",{className:"work-chip",children:o.chip}),l.jsx("span",{className:"work-badge-word",children:o.badgeWord}),l.jsxs("div",{className:"project-hover-badge",children:[l.jsx("span",{children:"EXPLORE"})," ?"]})]}),l.jsxs("div",{className:"work-bento-meta",children:[l.jsx("div",{className:"work-meta-kicker",children:o.kicker}),l.jsx("h2",{className:"work-meta-title",children:o.title}),l.jsx("p",{className:"work-meta-desc",children:o.desc}),l.jsxs("div",{className:"work-meta-bottom",children:[l.jsx("div",{className:"tag-row",children:o.tags.map((u,d)=>l.jsx("span",{children:u},d))}),l.jsxs("button",{className:"button primary work-case-trigger","data-cursor":"OPEN",children:["Explore Case ",l.jsx("span",{children:"?"})]})]})]})]},o.id))})})}),l.jsx("section",{className:"section final-cta-wrapper section-dark","data-journey-section":"work-cta","data-theme-section":"work-cta","data-theme":"dark",children:l.jsx("div",{className:"shell final-cta",children:l.jsxs("div",{className:"cta-panel reveal",children:[l.jsx("div",{className:"section-kicker",children:"02 / YOUR TURN"}),l.jsxs("h2",{children:["Let's make your next ",l.jsx("span",{className:"gradient-text",children:"case study."})]}),l.jsxs(et,{className:"button primary",to:"/contact","data-cursor":"LET'S TALK","data-magnetic":"true",children:["Start a conversation ",l.jsx("span",{children:"?"})]})]})})})]})}function UC(){const t=z.useRef(null),e=z.useRef(null),n=z.useRef(null);return z.useEffect(()=>{const i=t.current,r=e.current,s=n.current;if(!i)return;function a(){const o=i.getBoundingClientRect(),c=Math.max(0,Math.min(1,(window.innerHeight-o.top)/(window.innerHeight+o.height)));r&&(r.style.width=`${(c*100).toFixed(1)}%`),s&&(s.style.transform=`translateX(${(-c*60).toFixed(1)}px)`)}return window.addEventListener("scroll",a,{passive:!0}),a(),()=>window.removeEventListener("scroll",a)},[]),l.jsxs("main",{children:[l.jsx("section",{className:"page-hero section-light","data-journey-section":"about-hero","data-theme-section":"about-hero","data-theme":"light",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"03 / THE STUDIO"}),l.jsxs("h1",{className:"display reveal delay-1",children:["Curious by default.",l.jsx("br",{}),l.jsx("span",{className:"gradient-text",children:"Specific by choice."})]}),l.jsx("p",{className:"hero-lead narrow reveal delay-2",children:"Devlooopers is a multidisciplinary digital studio for ambitious digital work. We combine code, motion, technical SEO, and Meta performance marketing to engineer high-converting digital dominance."})]})}),l.jsx("section",{className:"section studio-grid-wrapper section-light","data-journey-section":"about-grid","data-theme-section":"about-grid","data-theme":"light",children:l.jsxs("div",{className:"shell studio-grid",children:[l.jsxs("div",{className:"studio-quote reveal",children:[l.jsx("span",{className:"quote-mark",children:'"'}),l.jsx("p",{children:"Technology should not sit behind the experience. It should be part of the experience."})]}),l.jsxs("div",{className:"studio-copy reveal delay-1",children:[l.jsx("p",{children:"We work across strategy, brand, interface, frontend engineering, and algorithmic media buying. That range lets us move from a blank page to a revenue-generating machine without losing the thread."}),l.jsx("p",{children:"Our favourite projects are the ones where a team has something real to change: a process to simplify, a new category to define, or a product that deserves a better front door."})]})]})}),l.jsx("section",{className:"section values-wrapper section-light","data-journey-section":"about-values","data-theme-section":"about-values","data-theme":"light",children:l.jsxs("div",{className:"shell values",children:[l.jsx("div",{className:"section-kicker reveal",children:"04 / VALUES"}),l.jsxs("div",{className:"value-list",children:[l.jsxs("div",{className:"value reveal","data-cursor":"VALUE",children:[l.jsx("span",{children:"01"}),l.jsx("h3",{children:"Useful first"}),l.jsx("p",{children:"Style earns its place by helping the user move and converting curiosity into revenue."})]}),l.jsxs("div",{className:"value reveal delay-1","data-cursor":"VALUE",children:[l.jsx("span",{children:"02"}),l.jsx("h3",{children:"Play with purpose"}),l.jsx("p",{children:"Interaction is not decoration when it teaches, guides, or rewards engagement."})]}),l.jsxs("div",{className:"value reveal delay-2","data-cursor":"VALUE",children:[l.jsx("span",{children:"03"}),l.jsx("h3",{children:"Make it tangible"}),l.jsx("p",{children:"Prototype the real thing early. Decisions get sharper when the work can be touched and measured."})]})]})]})}),l.jsx("section",{className:"kinetic-statement-section section-dark",id:"studioKineticSection",ref:t,"data-journey-section":"about-manifesto","data-theme-section":"about-manifesto","data-theme":"dark",children:l.jsxs("div",{className:"kinetic-sticky-stage",children:[l.jsx("div",{className:"kinetic-bg-grid"}),l.jsx("div",{className:"kinetic-glow"}),l.jsxs("div",{className:"kinetic-inner shell",children:[l.jsxs("div",{className:"kinetic-meta-top",children:[l.jsx("span",{className:"kinetic-kicker",children:"04 / THE FORMULA"}),l.jsx("span",{className:"kinetic-coords",children:"PRECISION x COMPUTATION x SOUL"})]}),l.jsxs("div",{className:"kinetic-type-box",children:[l.jsxs("div",{className:"kinetic-line kinetic-line-compress",children:[l.jsx("span",{className:"k-word",children:"BRINGING"}),l.jsx("span",{className:"k-word",children:"YOUR"})]}),l.jsx("div",{className:"kinetic-line kinetic-line-expand",children:l.jsx("span",{className:"k-word gradient-text",children:"DIGITAL VISION"})}),l.jsx("div",{className:"kinetic-line kinetic-line-drift line-experiences",children:l.jsxs("div",{className:"experiences-track kinetic-drift-track",ref:n,children:[l.jsx("span",{className:"k-word",children:"TO LIFE"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-sub",children:"DEVLOOOPERS"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-repeat",children:"TO LIFE"})]})})]}),l.jsxs("div",{className:"kinetic-meta-bottom",children:[l.jsxs("div",{className:"kinetic-meter",children:[l.jsx("span",{className:"meter-text",children:"STUDIO MANIFESTO"}),l.jsx("div",{className:"meter-track",children:l.jsx("div",{className:"meter-bar kinetic-meter-bar",ref:e})})]}),l.jsx("span",{className:"kinetic-tagline",children:'"Bringing your digital vision to life."'})]})]})]})}),l.jsx("section",{className:"section final-cta-wrapper section-dark","data-journey-section":"about-cta","data-theme-section":"about-cta","data-theme":"dark",children:l.jsx("div",{className:"shell final-cta",children:l.jsxs("div",{className:"cta-panel reveal",children:[l.jsx("div",{className:"section-kicker",children:"05 / CONTACT"}),l.jsxs("h2",{children:["Good work starts with a ",l.jsx("span",{className:"gradient-text",children:"good question."})]}),l.jsxs(et,{className:"button primary",to:"/contact","data-cursor":"LET'S TALK","data-magnetic":"true",children:["Ask yours ",l.jsx("span",{children:"→"})]})]})})})]})}function OC(){const[t,e]=z.useState({name:"",email:"",company:"",message:""}),[n,i]=z.useState(""),r=z.useRef(null),s=z.useRef(null),a=z.useRef(null);z.useEffect(()=>{const u=r.current,d=s.current,p=a.current;if(!u)return;function f(){const m=u.getBoundingClientRect(),_=Math.max(0,Math.min(1,(window.innerHeight-m.top)/(window.innerHeight+m.height)));d&&(d.style.width=`${(_*100).toFixed(1)}%`),p&&(p.style.transform=`translateX(${(-_*60).toFixed(1)}px)`)}return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const o=u=>{e(d=>({...d,[u.target.name]:u.target.value}))},c=u=>{u.preventDefault(),i("Thank you! Your message has been received. Our team will get back to you shortly."),e({name:"",email:"",company:"",message:""})};return l.jsxs("main",{children:[l.jsx("section",{className:"page-hero contact-hero section-light","data-journey-section":"contact-hero","data-theme-section":"contact-hero","data-theme":"light",children:l.jsxs("div",{className:"shell",children:[l.jsx("div",{className:"section-kicker reveal",children:"04 / START SOMETHING"}),l.jsxs("h1",{className:"display reveal delay-1",children:["Tell us what you're ",l.jsx("span",{className:"gradient-text",children:"building."})]}),l.jsx("p",{className:"hero-lead narrow reveal delay-2",children:"A product, a brand, a prototype or a stubborn problem. Give us the rough version."})]})}),l.jsx("section",{className:"kinetic-statement-section section-dark",id:"contactKineticSection","data-journey-section":"contact-manifesto","data-theme-section":"contact-manifesto","data-theme":"dark",ref:r,children:l.jsxs("div",{className:"kinetic-sticky-stage",children:[l.jsx("div",{className:"kinetic-bg-grid"}),l.jsx("div",{className:"kinetic-glow"}),l.jsxs("div",{className:"kinetic-inner shell",children:[l.jsxs("div",{className:"kinetic-meta-top",children:[l.jsx("span",{className:"kinetic-kicker",children:"05 / INITIATIVE"}),l.jsx("span",{className:"kinetic-coords",children:"INQUIRY × EXPERIMENT × LAUNCH"})]}),l.jsxs("div",{className:"kinetic-type-box",children:[l.jsxs("div",{className:"kinetic-line kinetic-line-compress",children:[l.jsx("span",{className:"k-word",children:"LET'S"}),l.jsx("span",{className:"k-word",children:"BUILD"})]}),l.jsx("div",{className:"kinetic-line kinetic-line-expand",children:l.jsx("span",{className:"k-word gradient-text",children:"UNEXPECTED"})}),l.jsx("div",{className:"kinetic-line kinetic-line-drift line-experiences",children:l.jsxs("div",{className:"experiences-track kinetic-drift-track",ref:a,children:[l.jsx("span",{className:"k-word",children:"TOGETHER"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-sub",children:"START A PROJECT"}),l.jsx("span",{className:"k-spark",children:"✦"}),l.jsx("span",{className:"k-word word-repeat",children:"TOGETHER"})]})})]}),l.jsxs("div",{className:"kinetic-meta-bottom",children:[l.jsxs("div",{className:"kinetic-meter",children:[l.jsx("span",{className:"meter-text",children:"INITIATION VECTOR"}),l.jsx("div",{className:"meter-track",children:l.jsx("div",{className:"meter-bar kinetic-meter-bar",ref:s})})]}),l.jsx("span",{className:"kinetic-tagline",children:"“Tell us what you're building below.”"})]})]})]})}),l.jsx("section",{className:"section contact-grid-wrapper section-dark","data-journey-section":"contact-form","data-theme-section":"contact-form","data-theme":"dark",children:l.jsxs("div",{className:"shell contact-grid",children:[l.jsxs("form",{className:"contact-form reveal",id:"contactForm",onSubmit:c,children:[l.jsxs("div",{className:"field-row",children:[l.jsxs("div",{className:"floating-group",children:[l.jsx("input",{required:!0,type:"text",id:"fieldName",name:"name",className:`floating-input ${t.name?"has-value":""}`,placeholder:" ",value:t.name,onChange:o}),l.jsx("label",{htmlFor:"fieldName",className:"floating-label",children:"Your Name"})]}),l.jsxs("div",{className:"floating-group",children:[l.jsx("input",{required:!0,type:"email",id:"fieldEmail",name:"email",className:`floating-input ${t.email?"has-value":""}`,placeholder:" ",value:t.email,onChange:o}),l.jsx("label",{htmlFor:"fieldEmail",className:"floating-label",children:"Your Email"})]})]}),l.jsxs("div",{className:"floating-group",children:[l.jsx("input",{type:"text",id:"fieldCompany",name:"company",className:`floating-input ${t.company?"has-value":""}`,placeholder:" ",value:t.company,onChange:o}),l.jsx("label",{htmlFor:"fieldCompany",className:"floating-label",children:"Company / Team"})]}),l.jsxs("div",{className:"floating-group",children:[l.jsx("textarea",{required:!0,id:"fieldMessage",name:"message",className:`floating-input floating-textarea ${t.message?"has-value":""}`,rows:"6",placeholder:" ",value:t.message,onChange:o}),l.jsx("label",{htmlFor:"fieldMessage",className:"floating-label",children:"What are you building?"})]}),l.jsxs("div",{className:"form-foot",children:[l.jsxs("button",{className:"button primary",type:"submit","data-cursor":"SEND","data-magnetic":"true",children:["Send enquiry ",l.jsx("span",{children:"?"})]}),l.jsx("small",{children:"Demo form — connect this endpoint to your backend or email provider."})]}),n&&l.jsx("p",{className:"form-status",id:"formStatus",style:{color:"var(--green)",marginTop:"12px"},"aria-live":"polite",children:n})]}),l.jsxs("aside",{className:"contact-aside reveal delay-1",children:[l.jsx("div",{className:"section-kicker",children:"DIRECT"}),l.jsx("h2",{children:"hello@devlooopers.com"}),l.jsx("p",{children:"For partnerships, project briefs and experiments."}),l.jsxs("div",{className:"social-row",children:[l.jsx("a",{href:"#","data-cursor":"LINKEDIN",children:"LinkedIn ?"}),l.jsx("a",{href:"#","data-cursor":"INSTAGRAM",children:"Instagram ?"}),l.jsx("a",{href:"#","data-cursor":"GITHUB",children:"GitHub ?"})]}),l.jsxs("div",{className:"aside-note",children:[l.jsx("span",{children:"BASED IN"}),l.jsx("strong",{children:"India · Working globally"})]})]})]})})]})}function kC(){const[t,e]=z.useState(null),n=r=>{e(r)},i=()=>{e(null)};return l.jsx(MS,{children:l.jsxs("div",{className:"app-container","data-theme-aware":"true",children:[l.jsx(CS,{}),l.jsx(NS,{}),l.jsx(RS,{}),l.jsx(wS,{}),l.jsxs(sS,{children:[l.jsx(cr,{path:"/",element:l.jsx(Rm,{onOpenProject:n})}),l.jsx(cr,{path:"/services",element:l.jsx(LC,{})}),l.jsx(cr,{path:"/work",element:l.jsx(DC,{onOpenProject:n})}),l.jsx(cr,{path:"/about",element:l.jsx(UC,{})}),l.jsx(cr,{path:"/contact",element:l.jsx(OC,{})}),l.jsx(cr,{path:"*",element:l.jsx(Rm,{onOpenProject:n})})]}),l.jsx(TS,{}),t&&l.jsx(bS,{activeProject:t,onClose:i})]})})}xu.createRoot(document.getElementById("root")).render(l.jsx(zm.StrictMode,{children:l.jsx(fS,{children:l.jsx(kC,{})})}));
