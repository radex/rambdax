var t=require("rambda");var r=["Null","Undefined","RegExp"];var n=t.curry(function r(n,e){var o=Object.assign({},e),i=t.filter(function(t){return void 0!==o[t]})(Object.keys(n));return 0===i.length?e:(i.map(function(e){var i=n[e];"Function"===t.type(i)?o[e]=i(o[e]):"Object"===t.type(i)&&(o[e]=r(i,o[e]))}),o)});function e(t){return function(r){return new Promise(function(n,e){return n(t(r))})}}function o(r){return["Async","Promise"].includes(t.type(r))}function i(t,r){return new Promise(function(n,e){var o=function(t){try{throw t}catch(t){return e(t)}};try{var i;if(Array.isArray(r)){var u,s,c;function p(){var t=c();return a.bind(this,t[0],t[1])}function a(r,n){return c=function(){return[r,n]},!(n[1]=n[0].next()).done&&(r=n[1].value,1)?t(r).then(function(t){try{return u.push(t),p}catch(t){return o(t)}},o):[1]}return u=[],(s=function(t){for(;t;){if(t.then)return void t.then(s,o);try{if(t.pop){if(t.length)return t.pop()?f.call(this):t;t=p}else t=t.call(this)}catch(t){return o(t)}}}.bind(this))(a.bind(this,void 0,[r[Symbol.iterator]()]));function f(){return n(u)}}i={};var l,h,x=[];for(l in r)x.push(l);function d(n){return x.length?(n=x.shift(),t(r[n],n).then(function(t){try{return i[n]=t,d}catch(t){return o(t)}},o)):[1]}return(h=function(t){for(;t;){if(t.then)return void t.then(h,o);try{if(t.pop){if(t.length)return t.pop()?y.call(this):t;t=d}else t=t.call(this)}catch(t){return o(t)}}}.bind(this))(d.bind(this,void 0));function y(){return n(i)}}catch(t){o(t)}})}function u(t,r){return new Promise(function(n,e){var o=function(t){try{throw t}catch(t){return e(t)}};try{var i;return i=r.map(function(r){return t(r)}),Promise.all(i).then(n,o)}catch(t){o(t)}})}var s={},c=function(r){if("String"===t.type(r))return r;if(["Function","Async"].includes(t.type(r))){var n=t.replace(/\s{1,}/g," ",r.toString());return t.replace(/\s/g,"_",t.take(15,n))}var e,o;return"Object"===t.type(r)&&(e=r,o={},t.compose(t.map(function(t){return o[t]=e[t]}),t.sort(function(t,r){return t>r}))(Object.keys(e)),r=o),JSON.stringify(r)},p=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var e="";return r.map(function(t){e+=c(t)+"_"}),""+e+c(t)};function a(t,r){return t.split("\n").filter(function(t){return t.trim().length>0}).map(function(t){return t.trim()}).join(r||" ")}function f(r){var n=r.input,e=r.schema;if("Object"===t.type(n)&&"Object"===t.type(e)){var o=!0,i=function(t){t||(o=!1)};for(var u in e)if(o){var s=u.endsWith("?"),c=s?t.init(u):u,p=e[u],a=t.type(p),l=n[c],h=t.type(n[c]);if(!(s&&void 0!==l||!s))continue;if("Object"===a)i(f({input:l,schema:p}));else if("String"===a)i(t.toLower(h)===p);else if("function"==typeof p)i(p(l));else if("Array"===a&&"String"===h)i(t.contains(l,p));else if("Array"===a&&1===p.length&&"Array"===h){var x=p[0],d=t.type(p[0]);if(i("String"===d||"Object"===d),"String"===d)i(!t.any(function(r){return t.type(r).toLowerCase()!==x},l));if("Object"===d)i(t.all(function(t){return f({input:t,schema:x})},l))}else i("RegExp"===a&&"String"===h&&t.test(p,l))}return o}return!1}function l(t,r){var n;return function(){return t&&(n=t.apply(r||this,arguments),t=null),n}}function h(r){var n=r.condition,e=r.inputArgument,o=r.prop;return new Promise(function(r,i){if("Async"!==t.type(n))return r({type:o,payload:n(e)});n(e).then(function(t){r({type:o,payload:t})}).catch(function(t){return i(t)})})}var x=function(t){return new Promise(function(r){t.then(function(t){r({payload:t,type:"RESULT"})}).catch(function(t){r({payload:t,type:"ERROR"})})})};var d=Symbol("NO_MATCH_FOUND"),y=function(r,n){return void 0===n&&(n=!0),{key:r,test:function(e){return function(r,n){return"function"==typeof r?r(n):t.equals(r,n)}(r,e)?n:d}}},v=function(t,r,n){return void 0!==t&&void 0===r&&void 0===n?(this.cases=[],this.defaultValue=void 0,this.willMatch=t):(this.cases=r,this.defaultValue=t,this.willMatch=n),this};v.prototype.default=function(t){return new v(t,this.cases,this.willMatch).match(this.willMatch)},v.prototype.is=function(t,r){return new v(this.defaultValue,this.cases.concat([y(t,r)]),this.willMatch)},v.prototype.match=function(t){return function(t,r,n){for(var e,o=0;o<t.length;o++)if((e=t[o].test(r))!==d)return e;return n}(this.cases,t,this.defaultValue)};var m=t.add,g=t.addIndex,w=t.adjust,b=t.all,P=t.allPass,A=t.always,O=t.any,j=t.anyPass,k=t.append,B=t.assoc,E=t.both,S=t.complement,M=t.compose,L=t.concat,q=t.contains,T=t.curry,F=t.dec,R=t.defaultTo,N=t.dissoc,W=t.divide,D=t.drop,I=t.dropLast,_=t.either,z=t.endsWith,U=t.equals,C=t.F,V=t.filter,Y=t.find,X=t.findIndex,H=t.flatten,J=t.flip,G=t.forEach,K=t.groupBy,Q=t.has,Z=t.head,$=t.identity,tt=t.ifElse,rt=t.inc,nt=t.includes,et=t.indexBy,ot=t.indexOf,it=t.init,ut=t.is,st=t.isNil,ct=t.join,pt=t.keys,at=t.last,ft=t.lastIndexOf,lt=t.length,ht=t.map,xt=t.match,dt=t.merge,yt=t.max,vt=t.maxBy,mt=t.min,gt=t.minBy,wt=t.modulo,bt=t.multiply,Pt=t.none,At=t.not,Ot=t.nth,jt=t.omit,kt=t.partialCurry,Bt=t.path,Et=t.pathOr,St=t.pick,Mt=t.pickAll,Lt=t.pipe,qt=t.pluck,Tt=t.prepend,Ft=t.prop,Rt=t.propEq,Nt=t.range,Wt=t.reduce,Dt=t.reject,It=t.repeat,_t=t.replace,zt=t.reverse,Ut=t.sort,Ct=t.sortBy,Vt=t.split,Yt=t.splitEvery,Xt=t.startsWith,Ht=t.subtract,Jt=t.T,Gt=t.tail,Kt=t.take,Qt=t.takeLast,Zt=t.tap,$t=t.test,tr=t.times,rr=t.toLower,nr=t.toString,er=t.toUpper,or=t.trim,ir=t.type,ur=t.uniq,sr=t.uniqWith,cr=t.update,pr=t.values,ar=t.without,fr=t.zip,lr=t.zipObj;exports.DELAY="RAMBDAX_DELAY",exports.add=m,exports.addIndex=g,exports.adjust=w,exports.all=b,exports.allPass=P,exports.always=A,exports.any=O,exports.anyPass=j,exports.append=k,exports.assoc=B,exports.both=E,exports.complement=S,exports.compose=M,exports.concat=L,exports.contains=q,exports.curry=T,exports.dec=F,exports.defaultTo=R,exports.dissoc=N,exports.divide=W,exports.drop=D,exports.dropLast=I,exports.either=_,exports.endsWith=z,exports.equals=U,exports.F=C,exports.filter=V,exports.find=Y,exports.findIndex=X,exports.flatten=H,exports.flip=J,exports.forEach=G,exports.groupBy=K,exports.has=Q,exports.head=Z,exports.identity=$,exports.ifElse=tt,exports.inc=rt,exports.includes=nt,exports.indexBy=et,exports.indexOf=ot,exports.init=it,exports.is=ut,exports.isNil=st,exports.join=ct,exports.keys=pt,exports.last=at,exports.lastIndexOf=ft,exports.length=lt,exports.map=ht,exports.match=xt,exports.merge=dt,exports.max=yt,exports.maxBy=vt,exports.min=mt,exports.minBy=gt,exports.modulo=wt,exports.multiply=bt,exports.none=Pt,exports.not=At,exports.nth=Ot,exports.omit=jt,exports.partialCurry=kt,exports.path=Bt,exports.pathOr=Et,exports.pick=St,exports.pickAll=Mt,exports.pipe=Lt,exports.pluck=qt,exports.prepend=Tt,exports.prop=Ft,exports.propEq=Rt,exports.range=Nt,exports.reduce=Wt,exports.reject=Dt,exports.repeat=It,exports.replace=_t,exports.reverse=zt,exports.sort=Ut,exports.sortBy=Ct,exports.split=Vt,exports.splitEvery=Yt,exports.startsWith=Xt,exports.subtract=Ht,exports.T=Jt,exports.tail=Gt,exports.take=Kt,exports.takeLast=Qt,exports.tap=Zt,exports.test=$t,exports.times=tr,exports.toLower=rr,exports.toString=nr,exports.toUpper=er,exports.trim=or,exports.type=ir,exports.uniq=ur,exports.uniqWith=sr,exports.update=cr,exports.values=pr,exports.without=ar,exports.zip=fr,exports.zipObj=lr,exports.allTrue=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return t.filter(Boolean).length===t.length},exports.allFalse=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return 0===t.length||t.filter(function(t){return!1===Boolean(t)}).length===t.length},exports.compact=function(n){return t.filter(function(n){var e=t.type(n);return!r.includes(e)&&("Object"===e?!t.equals(n,{}):0!==n.length)},n)},exports.composeAsync=function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];try{return function(n){return new Promise(function(e,o){var i,u;function s(){if(0===r.length)return[1];{var n;return n=r.pop(),"Async"===t.type(n)||"Promise"===t.type(n)?n(i).then(function(t){try{return i=t,e.call(this)}catch(t){return o(t)}}.bind(this),o):(i=n(i),e.call(this));function e(){return s}}}return i=n,(u=function(t){for(;t;){if(t.then)return void t.then(u,o);try{if(t.pop){if(t.length)return t.pop()?c.call(this):t;t=s}else t=t.call(this)}catch(t){return o(t)}}}.bind(this))(s);function c(){return e(i)}})}}catch(t){throw t}},exports.debounce=function(t,r,n){var e;return void 0===n&&(n=!1),function(){for(var o=[],i=arguments.length;i--;)o[i]=arguments[i];var u=n&&!e;clearTimeout(e),e=setTimeout(function(){e=null,n||t.apply(null,o)},r),u&&t.apply(null,o)}},exports.delay=function(t){return new Promise(function(r){setTimeout(function(){r("RAMBDAX_DELAY")},t)})},exports.evolve=n,exports.greater=function t(r,n){return void 0===n?function(n){return t(r,n)}:n>r},exports.ifElseAsync=function t(r,n,o){return void 0===n?function(n,e){return t(r,n,e)}:void 0===o?function(e){return t(r,n,e)}:function(t){return new Promise(function(i,u){var s=e(r),c=e(n),p=e(o);s(t).then(function(r){(!0===r?c:p)(t).then(i).catch(u)}).catch(u)})}},exports.inject=function(r,n,e){return t.replace(n,""+n+r,e)},exports.intersection=function r(n,e){return void 0===e?function(t){return r(n,t)}:t.filter(function(t){return e.includes(t)})(n)},exports.isPromise=o,exports.less=function t(r,n){return void 0===n?function(n){return t(r,n)}:n<r},exports.mapAsync=function(t,r){return void 0===r?function(r){return new Promise(function(n,e){return i(t,r).then(n,e)})}:new Promise(function(n,e){i(t,r).then(n).catch(e)})},exports.mapFastAsync=function(t,r){return void 0===r?function(r){return new Promise(function(n,e){return u(t,r).then(n,e)})}:new Promise(function(n,e){u(t,r).then(n).catch(e)})},exports.memoize=function r(n){for(var e=[],o=arguments.length-1;o-- >0;)e[o]=arguments[o+1];if(1===arguments.length)return function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return r.apply(void 0,[n].concat(t))};var i=p.apply(void 0,[n].concat(e));if(i in s)return s[i];if("Async"===t.type(n))return new Promise(function(t){n.apply(void 0,e).then(function(r){s[i]=r,t(r)})});var u=n.apply(void 0,e);return s[i]=u,u},exports.mergeAll=function(r){var n={};return t.map(function(r){n=t.merge(n,r)},r),n},exports.multiline=function(t,r){return"string"==typeof t?a(t,r):a(t[0])},exports.ok=function(t,r){return 2===arguments.length?f({input:t,schema:r}):function(r){return f({input:t,schema:r})}},exports.omitBy=function t(r,n){if(1===arguments.length)return function(n){return t(r,n)};var e={};for(var o in n)r(o,n[o])||(e[o]=n[o]);return e},exports.once=function(r,n){if(1===arguments.length){var e=l(r,n);return t.curry(e)}return l(r,n)},exports.pickBy=function t(r,n){if(1===arguments.length)return function(n){return t(r,n)};var e={};for(var o in n)r(o,n[o])&&(e[o]=n[o]);return e},exports.produce=function r(n,e){if(1===arguments.length)return function(t){return r(n,t)};var o=!1;for(var i in n)!1===o&&"Async"===t.type(n[i])&&(o=!0);if(!1===o){var u={};for(var s in n)u[s]=n[s](e);return u}var c=[];for(var p in n)c.push(h({inputArgument:e,condition:n[p],prop:p}));return new Promise(function(r,n){Promise.all(c).then(function(n){var e={};t.map(function(t){return e[t.type]=t.payload},n),r(e)}).catch(function(t){return n(t)})})},exports.random=function(t,r){return Math.floor(Math.random()*(r-t+1))+t},exports.rangeBy=function r(n,e,o){if(void 0===e)return function(t,e){return r(n,t,e)};if(void 0===o)return function(t){return r(n,e,t)};var i=!o.toString().includes(".");if(n>e){var u=n;n=e,e=u}var s=[n],c=n;if(i)for(var p=0,a=t.range(0,Math.floor((e-n)/o));p<a.length;p+=1)s.push(c+=o);else for(var f=t.compose(t.length,t.last,t.split("."))(o.toString()),l=0,h=t.range(0,Math.floor((e-n)/o));l<h.length;l+=1)c+=o,s.push(Number(c.toFixed(f)));return s},exports.renameProps=function r(n,e){if(void 0===e)return function(t){return r(n,t)};var o={};return Object.keys(n).map(function(t){Object.keys(e).includes(t)&&(o[n[t]]=e[t])}),t.merge(o,t.omit(Object.keys(n),e))},exports.resolve=function(t){return new Promise(function(r,n){var e=0,o={},i=[];for(var u in t)o[e]=u,i.push(t[u]),e++;Promise.all(i).then(function(t){var n={};t.map(function(t,r){n[o[r]]=t}),r(n)}).catch(n)})},exports.resolveSecure=function(r){return new Promise(function(n,e){var o=function(t){try{return console.log(t),function(){try{return n()}catch(t){return e(t)}}()}catch(t){return e(t)}};try{var i;return i=t.map(function(t){return x(t)},r),Promise.all(i).then(n,o)}catch(t){o(t)}})},exports.shuffle=function(t){for(var r=t.concat(),n=r.length;n>0;){var e=Math.floor(Math.random()*n),o=r[--n];r[n]=r[e],r[e]=o}return r},exports.switcher=function(t){return new v(t)},exports.tapAsync=function t(r,n){return 1===arguments.length?function(n){return t(r,n)}:!0===o(r)?new Promise(function(t,e){r(n).then(function(){t(n)}).catch(e)}):(r(n),n)},exports.throttle=function(t,r){var n=!1;return function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];n||(t.apply(null,e),n=!0,setTimeout(function(){n=!1},r))}},exports.when=function t(r,n){return void 0===n?function(n){return t(r,n)}:function(t){return("boolean"==typeof r?r:r(t))?n(t):t}},exports.whenAsync=function t(r,n){return void 0===n?function(r,n){return t(r,n)}:function(t){return new Promise(function(e,o){if("boolean"==typeof r){if(!1===r)return e(t);n(t).then(e).catch(o)}else(i=r,function(t){return new Promise(function(r,n){return r(i(t))})})(t).then(function(r){if(!1===r)return e(t);n(t).then(e).catch(o)}).catch(o);var i})}},exports.where=function t(r,n){if(void 0===n)return function(n){return t(r,n)};var e=!0;for(var o in r){var i=r[o](n[o]);e&&!1===i&&(e=!1)}return e};
//# sourceMappingURL=rambdax.js.map
