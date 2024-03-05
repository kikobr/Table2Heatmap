/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=f.IS_PAPA_WORKER||!1,a={},u=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;J(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!J(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=u++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=J(t.step),t.chunk=J(t.chunk),t.complete=J(t.complete),t.error=J(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?(e=function(e){if(65279===e.charCodeAt(0))return e.slice(1);return e}(e),n=t.download?new l(t):new p(t)):!0===e.readable&&J(e.read)&&J(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,r=!1,i=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}();var u=new RegExp(Q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,r);if("object"==typeof e[0])return h(i||Object.keys(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||i),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var u=n?e.length:t[o].length,h=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(h="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<u;l++){var c=s?e[l]:l;d.push(t[o][c])}h=""===d.join("").trim()}if(!h){for(var p=0;p<u;p++){0<p&&!f&&(i+=m);var g=n&&s?e[p]:p;i+=v(t[o][g],p)}o<t.length-1&&(!r||0<u&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;o&&"string"==typeof e&&o.test(e)&&(e="'"+e,r=!0);var i=e.toString().replace(u,a);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},u=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)u.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==u.length){var e,t,r,i,n=u[0];if(J(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(J(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void h();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void h()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){J(a)&&a(e,n.file,n.inputElem),h()},b.parse(n.file,n.instanceConfig)}else J(o.complete)&&o.complete()}function h(){u.splice(0,1),e()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&J(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(J(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!J(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){J(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)),i.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),h.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;h.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=r.substring(0,t),r=r.substring(t)):(e=r,r=""),this._finished=!r,this.parseChunk(e)}}}function g(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(m){var a,o,u,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(J(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;r+=e.data.length,m.preview&&r>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){return c&&u&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),u=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){J(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var r,i=m.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];m.header&&(n=r>=l.length?"__parsed_extra":l[r]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return r=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[r]&&(m.dynamicTyping[r]=m.dynamicTypingFunction(r)),!0===(m.dynamicTyping[r]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):h.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(e,t,r){var i=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(Q(t)+"([^]*?)"+Q(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),u=!1,m.delimiter)J(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,u;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var h=0;h<n.length;h++){var f=n[h],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(r&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===u||u<l)&&1.99<l&&(a=d,s=f,u=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(u=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=J(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,J(m.complete)&&m.complete(c),a=""}}function Q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(j){var z,M=(j=j||{}).delimiter,P=j.newline,U=j.comments,q=j.step,N=j.preview,B=j.fastMode,K=z=void 0===j.quoteChar||null===j.quoteChar?'"':j.quoteChar;if(void 0!==j.escapeChar&&(K=j.escapeChar),("string"!=typeof M||-1<b.BAD_DELIMITERS.indexOf(M))&&(M=","),U===M)throw new Error("Comment character same as delimiter");!0===U?U="#":("string"!=typeof U||-1<b.BAD_DELIMITERS.indexOf(U))&&(U=!1),"\n"!==P&&"\r"!==P&&"\r\n"!==P&&(P="\n");var W=0,H=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=M.length,s=P.length,a=U.length,o=J(q),u=[],h=[],f=[],d=W=0;if(!i)return L();if(j.header&&!t){var l=i.split(P)[0].split(M),c=[],p={},g=!1;for(var _ in l){var m=l[_];J(j.transformHeader)&&(m=j.transformHeader(m,_));var y=m,v=p[m]||0;for(0<v&&(g=!0,y=m+"_"+v),p[m]=v+1;c.includes(y);)y=y+"_"+v;c.push(y)}if(g){var k=i.split(P);k[0]=c.join(M),i=k.join(P)}}if(B||!1!==B&&-1===i.indexOf(z)){for(var b=i.split(P),E=0;E<b.length;E++){if(f=b[E],W+=f.length,E!==b.length-1)W+=P.length;else if(r)return L();if(!U||f.substring(0,a)!==U){if(o){if(u=[],I(f.split(M)),F(),H)return L()}else I(f.split(M));if(N&&N<=E)return u=u.slice(0,N),L(!0)}}return L()}for(var w=i.indexOf(M,W),R=i.indexOf(P,W),C=new RegExp(Q(K)+Q(z),"g"),S=i.indexOf(z,W);;)if(i[W]!==z)if(U&&0===f.length&&i.substring(W,W+a)===U){if(-1===R)return L();W=R+s,R=i.indexOf(P,W),w=i.indexOf(M,W)}else if(-1!==w&&(w<R||-1===R))f.push(i.substring(W,w)),W=w+e,w=i.indexOf(M,W);else{if(-1===R)break;if(f.push(i.substring(W,R)),D(R+s),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0)}else for(S=W,W++;;){if(-1===(S=i.indexOf(z,S+1)))return r||h.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:u.length,index:W}),T();if(S===n-1)return T(i.substring(W,S).replace(C,z));if(z!==K||i[S+1]!==K){if(z===K||0===S||i[S-1]!==K){-1!==w&&w<S+1&&(w=i.indexOf(M,S+1)),-1!==R&&R<S+1&&(R=i.indexOf(P,S+1));var O=A(-1===R?w:Math.min(w,R));if(i.substr(S+1+O,e)===M){f.push(i.substring(W,S).replace(C,z)),i[W=S+1+O+e]!==z&&(S=i.indexOf(z,W)),w=i.indexOf(M,W),R=i.indexOf(P,W);break}var x=A(R);if(i.substring(S+1+x,S+1+x+s)===P){if(f.push(i.substring(W,S).replace(C,z)),D(S+1+x+s),w=i.indexOf(M,W),S=i.indexOf(z,W),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0);break}h.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:u.length,index:W}),S++}}else S++}return T();function I(e){u.push(e),d=W}function A(e){var t=0;if(-1!==e){var r=i.substring(S+1,e);r&&""===r.trim()&&(t=r.length)}return t}function T(e){return r||(void 0===e&&(e=i.substring(W)),f.push(e),W=n,I(f),o&&F()),L()}function D(e){W=e,I(f),f=[],R=i.indexOf(P,W)}function L(e){return{data:u,errors:h,meta:{delimiter:M,linebreak:P,aborted:H,truncated:!!e,cursor:d+(t||0)}}}function F(){q(L()),u=[],h=[]}},this.abort=function(){H=!0},this.getCharIndex=function(){return W}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(J(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else J(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=a[e];J(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function J(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(h.prototype)).constructor=g,b});

/***/ }),

/***/ "./src/plugin/main.ts":
/*!****************************!*\
  !*** ./src/plugin/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _onmessage_create_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onmessage/create-shapes */ "./src/plugin/onmessage/create-shapes.ts");
/* harmony import */ var _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onmessage/csv-file */ "./src/plugin/onmessage/csv-file.ts");
/* harmony import */ var _onmessage_heatmap_heatmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onmessage/heatmap/heatmap */ "./src/plugin/onmessage/heatmap/heatmap.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => __awaiter(void 0, void 0, void 0, function* () {
    // This shows the HTML page in "ui.html".
    figma.showUI(__html__);
    figma.ui.resize(500, 600);
    // By default, read local saved csv
    let csvFile = yield _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__.csvFileRead();
    _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__.csvParse(csvFile);
    // Calls to "parent.postMessage" from UI
    figma.ui.onmessage = (msg) => {
        switch (msg.name) {
            case 'create-shapes':
                (0,_onmessage_create_shapes__WEBPACK_IMPORTED_MODULE_0__["default"])(msg);
                break;
            case 'csv-file:save':
                _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__.csvFileSave(msg);
                break;
            case 'heatmap:generate':
                _onmessage_heatmap_heatmap__WEBPACK_IMPORTED_MODULE_2__.heatmapGenerate(msg);
                break;
            default:
                console.log('Outro evento');
        }
    };
}));


/***/ }),

/***/ "./src/plugin/onmessage/create-shapes.ts":
/*!***********************************************!*\
  !*** ./src/plugin/onmessage/create-shapes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((msg, data = {}) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    console.log('create-shapes');
    const nodes = [];
    for (let i = 0; i < msg.value; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});


/***/ }),

/***/ "./src/plugin/onmessage/csv-file.ts":
/*!******************************************!*\
  !*** ./src/plugin/onmessage/csv-file.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csvFileRead: () => (/* binding */ csvFileRead),
/* harmony export */   csvFileSave: () => (/* binding */ csvFileSave),
/* harmony export */   csvParse: () => (/* binding */ csvParse)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// saves a csv locally from the UI
const csvFileSave = (msg, data = {}) => {
    // save .csv contents in the local storage
    figma.clientStorage.setAsync('csv-file', msg.value).then(() => {
        console.log('CSV saved locally under key "csv-local".');
        csvFileRead();
    });
};
// loads the csv and passes to UI     
function csvFileRead(data = { postMessage: true }) {
    return __awaiter(this, void 0, void 0, function* () {
        let value = '';
        return figma.clientStorage.getAsync('csv-file').then((contents) => {
            if (contents) {
                value = contents;
                /* communicates to UI */
                if (data.postMessage)
                    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.postMessage)('csv-file:read', value);
                return value;
            }
        });
    });
}
function csvParse(value) {
    return __awaiter(this, void 0, void 0, function* () {
        // csv as an object { data: [col1, col2], errors: [], meta: {} }
        const csvPapa = papaparse__WEBPACK_IMPORTED_MODULE_1__.parse(value, {
            dynamicTyping: true
        });
        let dataFrame = {
            columns: [],
            items: [],
            papaData: [],
        };
        if (csvPapa.data.length) {
            // save original data
            dataFrame.papaData = csvPapa.data;
            // save columns
            const columns = csvPapa.data[0];
            dataFrame.columns = columns;
            // transform array of arrays into an array of objects representing the rows
            const items = csvPapa.data.slice(1); // after first line
            dataFrame.items = items.map((row, rowIndex) => {
                let rowObj = {};
                row.forEach((col, colIndex) => {
                    rowObj[columns[colIndex]] = col;
                });
                return rowObj;
            });
        }
        else {
            console.log('Error parsing CSV.');
        }
        return dataFrame;
    });
}


/***/ }),

/***/ "./src/plugin/onmessage/heatmap/heatmap-layout.ts":
/*!********************************************************!*\
  !*** ./src/plugin/onmessage/heatmap/heatmap-layout.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPadding: () => (/* binding */ setPadding),
/* harmony export */   spot: () => (/* binding */ spot),
/* harmony export */   spotIndex: () => (/* binding */ spotIndex),
/* harmony export */   tableCell: () => (/* binding */ tableCell),
/* harmony export */   tableColumn: () => (/* binding */ tableColumn),
/* harmony export */   tableFrame: () => (/* binding */ tableFrame)
/* harmony export */ });
const fontSize = 16;
const cornerRadius = 10;
const fontName = {
    regular: { family: "Inter", style: "Regular" },
    bold: { family: "Inter", style: "Bold" }
};
function setPadding(frame, padding) {
    frame.paddingBottom = frame.paddingTop = frame.paddingLeft = frame.paddingRight = padding;
}
function spot(opts = {}) {
    // set options
    const name = opts.name ? opts.name : '';
    const width = opts.width ? opts.width : 100;
    const height = opts.height ? opts.height : 100;
    const padding = opts.padding ? opts.padding : 16;
    const index = opts.index ? opts.index : 0;
    const percentage = opts.percentage ? opts.percentage : 0;
    // create frames and insert children
    const frame = figma.createFrame();
    const text = figma.createText();
    frame.appendChild(text);
    // adding text into the frame and 
    frame.name = name;
    frame.x = width * index + (padding * index);
    frame.y = height + 200;
    frame.cornerRadius = cornerRadius;
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'FIXED';
    frame.clipsContent = false;
    frame.blendMode = "MULTIPLY";
    setPadding(frame, padding);
    frame.resize(width, height);
    // change its color
    // doc changing colors: https://www.figma.com/plugin-docs/editing-properties/#changing-colors
    // doc rgba: https://www.figma.com/plugin-docs/api/properties/figma-util-rgba/
    const fills = JSON.parse(JSON.stringify(frame.fills));
    fills[0] = figma.util.solidPaint(figma.util.rgba(`rgb(255 0 0 / ${percentage})`));
    frame.fills = fills;
    // adding a text to the frame referencing its percentage
    text.characters = (percentage * 100) + "%";
    text.fontSize = fontSize;
    text.fontName = fontName.bold;
    text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 0.8)`))];
    text.name = "Users Percent";
    // add after layout is applied to parent
    const spotIndexFrame = spotIndex({
        index: index,
        parentFrame: frame,
        isAbsolute: true,
    });
    return frame;
}
function spotIndex(opts = {}) {
    // defaults
    const index = opts.index ? opts.index : 0;
    const padding = opts.padding ? opts.padding : 8;
    const parentFrame = opts.parentFrame ? opts.parentFrame : null;
    const width = opts.width ? opts.width : 32;
    const height = opts.height ? opts.height : width;
    const isAbsolute = opts.isAbsolute ? opts.isAbsolute : false;
    // create frames and insert children
    const frame = figma.createFrame();
    const text = figma.createText();
    frame.appendChild(text);
    // create a frame and text
    if (parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }
    // adding text into the frame and 
    frame.name = String(index);
    // frame.x = width * index + (padding * index);
    // frame.y = height + 200;
    frame.cornerRadius = 999;
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'HUG';
    if (isAbsolute) {
        frame.layoutPositioning = "ABSOLUTE";
        // Center the circle on the top-right corner of the frame
        frame.x = -5;
        frame.y = -5;
        // Make the circle stick to the top-right corner of the frame
        frame.constraints = { horizontal: 'MIN', vertical: 'MIN' };
    }
    setPadding(frame, padding);
    frame.resize(width, height);
    const fills = JSON.parse(JSON.stringify(frame.fills));
    fills[0] = figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 1)`));
    frame.fills = fills;
    // adding a text to the frame referencing its percentage
    text.characters = String(index);
    text.fontSize = fontSize;
    text.fontName = fontName.bold;
    text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 255 255 / 0.8)`))];
    text.name = "Users Percent";
    return frame;
}
function tableFrame(opts = {}) {
    // defaults
    const columns = opts.columns ? opts.columns : [];
    // create a frame
    const frame = figma.createFrame();
    // create a column for each column in the dataframe
    columns.forEach((column, index) => {
        const columnFrame = tableColumn({
            parentFrame: frame
        });
        // add a cell for the column header
        const cellFrame = tableCell({
            header: true,
            text: { characters: column },
            parentFrame: columnFrame
        });
    });
    // layout
    frame.name = 'Table';
    frame.layoutMode = 'HORIZONTAL';
    frame.layoutSizingVertical = 'HUG';
    frame.primaryAxisAlignItems = 'MIN';
    frame.counterAxisAlignItems = 'MIN';
    frame.cornerRadius = cornerRadius;
    return frame;
}
function tableColumn(opts = {}) {
    // defaults
    const parentFrame = opts.parentFrame ? opts.parentFrame : null;
    // create a frame and text
    const frame = figma.createFrame();
    if (parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }
    // layout column frame
    frame.name = 'Column';
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'HUG';
    return frame;
}
function tableCell(opts = {}) {
    // defaults
    const isHeader = opts.header ? opts.header : false;
    const textValue = opts.text && opts.text.characters ? opts.text.characters : '';
    const percentage = opts.percentage ? opts.percentage : 0;
    const parentFrame = opts.parentFrame ? opts.parentFrame : null;
    // adding a text to the frame referencing its percentage
    const text = figma.createText();
    const frame = figma.createFrame();
    frame.appendChild(text);
    // appending to column frame
    if (parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }
    // layout outer frame
    frame.name = 'Cell';
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'MIN';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'FILL';
    setPadding(frame, 10);
    if (isHeader)
        frame.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 1)`))];
    else
        frame.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 0 0 / ${percentage})`))];
    // layout inner text
    const texts = frame.children;
    texts.forEach((text) => {
        text.name = 'Text';
        text.characters = textValue;
        text.fontSize = fontSize;
        text.fontName = fontName.regular;
        if (isHeader)
            text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 255 255 / 1)`))];
        else
            [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 0.8)`))];
        text.resize(50, 10);
        text.layoutSizingVertical = 'HUG';
        text.layoutSizingHorizontal = 'HUG';
    });
    return frame;
}


/***/ }),

/***/ "./src/plugin/onmessage/heatmap/heatmap.ts":
/*!*************************************************!*\
  !*** ./src/plugin/onmessage/heatmap/heatmap.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heatmapGenerate: () => (/* binding */ heatmapGenerate)
/* harmony export */ });
/* harmony import */ var _csv_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csv-file */ "./src/plugin/onmessage/csv-file.ts");
/* harmony import */ var _heatmap_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heatmap-layout */ "./src/plugin/onmessage/heatmap/heatmap-layout.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// creates the heatmap
function heatmapGenerate(msg, data = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('heatmap generate');
        const csvFile = yield (0,_csv_file__WEBPACK_IMPORTED_MODULE_0__.csvFileRead)(data = { postMessage: false });
        const dataFrame = yield (0,_csv_file__WEBPACK_IMPORTED_MODULE_0__.csvParse)(csvFile);
        const nodes = [];
        const tablePadding = 50;
        // selected Frame
        const selectedFrame = figma.currentPage.selection[0];
        if (!selectedFrame || selectedFrame.type != "FRAME") {
            alert('No frame selected! Select one to continue.'); // todo: toast
            return;
        }
        // load the fonts first
        yield loadFonts();
        // create a table object
        let table = [];
        // loop through columns and add them to table array
        for (let i = 0; i < dataFrame.columns.length; i++) {
            let series = { column: '', items: [] };
            series.column = dataFrame.columns[i];
            // for each row, get the column corresponding to the [i] column
            series.items = dataFrame.items.map((item) => {
                return item[dataFrame.columns[i]];
            });
            table.push(series);
        }
        // create table frame
        const tableFrame = _heatmap_layout__WEBPACK_IMPORTED_MODULE_1__.tableFrame({
            columns: dataFrame.columns
        });
        nodes.push(tableFrame);
        /* loop through rows to create frames */
        dataFrame.items.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
            if (index < 100) {
                const percentage = item["Users Percent"];
                // resize it over selected frame matched children
                if (selectedFrame.type == "FRAME") {
                    let selectedFrameSpotNodes = selectedFrame.findAll(n => n.name === item['Destination Page']);
                    selectedFrameSpotNodes.forEach((spotNode, matchIndex) => {
                        // create a spotFrame for each matching spotNodes
                        const spotFrame = _heatmap_layout__WEBPACK_IMPORTED_MODULE_1__.spot({
                            name: item["Destination Page"],
                            percentage: percentage,
                            index: index,
                        });
                        // add spot frame to selection
                        nodes.push(spotFrame);
                        // resizes and moves the original frame
                        spotFrame.x = spotNode.absoluteBoundingBox.x;
                        spotFrame.y = spotNode.absoluteBoundingBox.y;
                        spotFrame.resize(spotNode.width, spotNode.height);
                    });
                }
                // -----------------------------------
                // add each column for this row in the table frame
                dataFrame.columns.forEach((column, columnIndex) => {
                    // layout table cell
                    const cellFrame = _heatmap_layout__WEBPACK_IMPORTED_MODULE_1__.tableCell({
                        text: { characters: String(item[column]) },
                        percentage: percentage,
                        parentFrame: tableFrame.children[columnIndex]
                    });
                });
            }
        }));
        // move table to the right of the selection frame
        tableFrame.x = selectedFrame.absoluteBoundingBox.x + selectedFrame.absoluteBoundingBox.width + tablePadding;
        tableFrame.y = selectedFrame.absoluteBoundingBox.y;
        // copy selected frame and manipulate it
        const innerFrameClone = selectedFrame.clone();
        innerFrameClone.blendMode = "LUMINOSITY";
        innerFrameClone.opacity = 0.8;
        const outerFrameClone = figma.createFrame();
        outerFrameClone.resize(innerFrameClone.width, innerFrameClone.height);
        outerFrameClone.x = innerFrameClone.absoluteBoundingBox.x;
        outerFrameClone.y = innerFrameClone.absoluteBoundingBox.y;
        outerFrameClone.appendChild(innerFrameClone);
        // outerFrameClone.blendMode = "NORMAL";
        innerFrameClone.x = 0;
        innerFrameClone.y = 0;
        // return;
        nodes.push(outerFrameClone);
        // group created items
        const group = figma.group(nodes, figma.currentPage);
        // const parentChildrenLength = selectedFrameClone.parent.children.length;
        // const zIndex = selectedFrameClone.parent.children.indexOf(selectedFrameClone);
        // add frame to the bottom of the page
        outerFrameClone.parent.insertChild(0, outerFrameClone);
        // zoom to nodes
        // figma.currentPage.selection = nodes;
        // figma.viewport.scrollAndZoomIntoView(nodes);
        figma.currentPage.selection = [group];
        figma.viewport.scrollAndZoomIntoView([group]);
        // close plugin
        figma.closePlugin();
    });
}
const loadFonts = () => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
});


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postMessage: () => (/* binding */ postMessage)
/* harmony export */ });
function postMessage(name, value) {
    /* figures out in which thread the script is running based on which global variable is available */
    let origin;
    try {
        if (figma)
            origin = 'plugin'; /* it's in the plugin thread */
    }
    catch (err) { }
    try {
        if (parent)
            origin = 'ui'; /* it's in the ui thread */
    }
    catch (err) { }
    /* sends the message via figma global object, if its in the plugin thread */
    if (origin == 'plugin') {
        return figma.ui.postMessage({ pluginMessage: { name: name, value: value } });
    }
    /* sends the message via parent / window global object, if its in the ui thread */
    else if (origin == 'ui') {
        return parent.postMessage({ pluginMessage: { name: name, value: value } }, "*");
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/main */ "./src/plugin/main.ts");

(0,_plugin_main__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FLGdDQUFnQyxnQ0FBZ0M7QUFDaEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pITTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQiw0QkFBNEI7QUFDbkY7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQiw0QkFBNEI7QUFDakY7QUFDQTs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNqQyx3REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYmxlMmhlYXRtYXAvLi9ub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5taW4uanMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC8uL3NyYy9wbHVnaW4vbWFpbi50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi9vbm1lc3NhZ2UvY3JlYXRlLXNoYXBlcy50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi9vbm1lc3NhZ2UvY3N2LWZpbGUudHMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC8uL3NyYy9wbHVnaW4vb25tZXNzYWdlL2hlYXRtYXAvaGVhdG1hcC1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC8uL3NyYy9wbHVnaW4vb25tZXNzYWdlL2hlYXRtYXAvaGVhdG1hcC50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvLi9zcmMvcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEBsaWNlbnNlXG5QYXBhIFBhcnNlXG52NS40LjFcbmh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2VcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuUGFwYT10KCl9KHRoaXMsZnVuY3Rpb24gcygpe1widXNlIHN0cmljdFwiO3ZhciBmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwIT09Zj9mOnt9O3ZhciBuPSFmLmRvY3VtZW50JiYhIWYucG9zdE1lc3NhZ2Usbz1mLklTX1BBUEFfV09SS0VSfHwhMSxhPXt9LHU9MCxiPXtwYXJzZTpmdW5jdGlvbihlLHQpe3ZhciByPSh0PXR8fHt9KS5keW5hbWljVHlwaW5nfHwhMTtKKHIpJiYodC5keW5hbWljVHlwaW5nRnVuY3Rpb249cixyPXt9KTtpZih0LmR5bmFtaWNUeXBpbmc9cix0LnRyYW5zZm9ybT0hIUoodC50cmFuc2Zvcm0pJiZ0LnRyYW5zZm9ybSx0LndvcmtlciYmYi5XT1JLRVJTX1NVUFBPUlRFRCl7dmFyIGk9ZnVuY3Rpb24oKXtpZighYi5XT1JLRVJTX1NVUFBPUlRFRClyZXR1cm4hMTt2YXIgZT0ocj1mLlVSTHx8Zi53ZWJraXRVUkx8fG51bGwsaT1zLnRvU3RyaW5nKCksYi5CTE9CX1VSTHx8KGIuQkxPQl9VUkw9ci5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1widmFyIGdsb2JhbCA9IChmdW5jdGlvbigpIHsgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfSByZXR1cm4ge307IH0pKCk7IGdsb2JhbC5JU19QQVBBX1dPUktFUj10cnVlOyBcIixcIihcIixpLFwiKSgpO1wiXSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwifSkpKSksdD1uZXcgZi5Xb3JrZXIoZSk7dmFyIHIsaTtyZXR1cm4gdC5vbm1lc3NhZ2U9Xyx0LmlkPXUrKyxhW3QuaWRdPXR9KCk7cmV0dXJuIGkudXNlclN0ZXA9dC5zdGVwLGkudXNlckNodW5rPXQuY2h1bmssaS51c2VyQ29tcGxldGU9dC5jb21wbGV0ZSxpLnVzZXJFcnJvcj10LmVycm9yLHQuc3RlcD1KKHQuc3RlcCksdC5jaHVuaz1KKHQuY2h1bmspLHQuY29tcGxldGU9Sih0LmNvbXBsZXRlKSx0LmVycm9yPUoodC5lcnJvciksZGVsZXRlIHQud29ya2VyLHZvaWQgaS5wb3N0TWVzc2FnZSh7aW5wdXQ6ZSxjb25maWc6dCx3b3JrZXJJZDppLmlkfSl9dmFyIG49bnVsbDtiLk5PREVfU1RSRUFNX0lOUFVULFwic3RyaW5nXCI9PXR5cGVvZiBlPyhlPWZ1bmN0aW9uKGUpe2lmKDY1Mjc5PT09ZS5jaGFyQ29kZUF0KDApKXJldHVybiBlLnNsaWNlKDEpO3JldHVybiBlfShlKSxuPXQuZG93bmxvYWQ/bmV3IGwodCk6bmV3IHAodCkpOiEwPT09ZS5yZWFkYWJsZSYmSihlLnJlYWQpJiZKKGUub24pP249bmV3IGcodCk6KGYuRmlsZSYmZSBpbnN0YW5jZW9mIEZpbGV8fGUgaW5zdGFuY2VvZiBPYmplY3QpJiYobj1uZXcgYyh0KSk7cmV0dXJuIG4uc3RyZWFtKGUpfSx1bnBhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ITEsXz0hMCxtPVwiLFwiLHk9XCJcXHJcXG5cIixzPSdcIicsYT1zK3Mscj0hMSxpPW51bGwsbz0hMTshZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdClyZXR1cm47XCJzdHJpbmdcIiE9dHlwZW9mIHQuZGVsaW1pdGVyfHxiLkJBRF9ERUxJTUlURVJTLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4tMSE9PXQuZGVsaW1pdGVyLmluZGV4T2YoZSl9KS5sZW5ndGh8fChtPXQuZGVsaW1pdGVyKTsoXCJib29sZWFuXCI9PXR5cGVvZiB0LnF1b3Rlc3x8XCJmdW5jdGlvblwiPT10eXBlb2YgdC5xdW90ZXN8fEFycmF5LmlzQXJyYXkodC5xdW90ZXMpKSYmKG49dC5xdW90ZXMpO1wiYm9vbGVhblwiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lcyYmXCJzdHJpbmdcIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXN8fChyPXQuc2tpcEVtcHR5TGluZXMpO1wic3RyaW5nXCI9PXR5cGVvZiB0Lm5ld2xpbmUmJih5PXQubmV3bGluZSk7XCJzdHJpbmdcIj09dHlwZW9mIHQucXVvdGVDaGFyJiYocz10LnF1b3RlQ2hhcik7XCJib29sZWFuXCI9PXR5cGVvZiB0LmhlYWRlciYmKF89dC5oZWFkZXIpO2lmKEFycmF5LmlzQXJyYXkodC5jb2x1bW5zKSl7aWYoMD09PXQuY29sdW1ucy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uIGNvbHVtbnMgaXMgZW1wdHlcIik7aT10LmNvbHVtbnN9dm9pZCAwIT09dC5lc2NhcGVDaGFyJiYoYT10LmVzY2FwZUNoYXIrcyk7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5lc2NhcGVGb3JtdWxhZXx8dC5lc2NhcGVGb3JtdWxhZSBpbnN0YW5jZW9mIFJlZ0V4cCkmJihvPXQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHA/dC5lc2NhcGVGb3JtdWxhZTovXls9K1xcLUBcXHRcXHJdLiokLyl9KCk7dmFyIHU9bmV3IFJlZ0V4cChRKHMpLFwiZ1wiKTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSk7aWYoQXJyYXkuaXNBcnJheShlKSl7aWYoIWUubGVuZ3RofHxBcnJheS5pc0FycmF5KGVbMF0pKXJldHVybiBoKG51bGwsZSxyKTtpZihcIm9iamVjdFwiPT10eXBlb2YgZVswXSlyZXR1cm4gaChpfHxPYmplY3Qua2V5cyhlWzBdKSxlLHIpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmKGUuZGF0YT1KU09OLnBhcnNlKGUuZGF0YSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhKSYmKGUuZmllbGRzfHwoZS5maWVsZHM9ZS5tZXRhJiZlLm1ldGEuZmllbGRzfHxpKSxlLmZpZWxkc3x8KGUuZmllbGRzPUFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKT9lLmZpZWxkczpcIm9iamVjdFwiPT10eXBlb2YgZS5kYXRhWzBdP09iamVjdC5rZXlzKGUuZGF0YVswXSk6W10pLEFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKXx8XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXXx8KGUuZGF0YT1bZS5kYXRhXSkpLGgoZS5maWVsZHN8fFtdLGUuZGF0YXx8W10scik7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXRcIik7ZnVuY3Rpb24gaChlLHQscil7dmFyIGk9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PUpTT04ucGFyc2UodCkpO3ZhciBuPUFycmF5LmlzQXJyYXkoZSkmJjA8ZS5sZW5ndGgscz0hQXJyYXkuaXNBcnJheSh0WzBdKTtpZihuJiZfKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKykwPGEmJihpKz1tKSxpKz12KGVbYV0sYSk7MDx0Lmxlbmd0aCYmKGkrPXkpfWZvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgdT1uP2UubGVuZ3RoOnRbb10ubGVuZ3RoLGg9ITEsZj1uPzA9PT1PYmplY3Qua2V5cyh0W29dKS5sZW5ndGg6MD09PXRbb10ubGVuZ3RoO2lmKHImJiFuJiYoaD1cImdyZWVkeVwiPT09cj9cIlwiPT09dFtvXS5qb2luKFwiXCIpLnRyaW0oKToxPT09dFtvXS5sZW5ndGgmJjA9PT10W29dWzBdLmxlbmd0aCksXCJncmVlZHlcIj09PXImJm4pe2Zvcih2YXIgZD1bXSxsPTA7bDx1O2wrKyl7dmFyIGM9cz9lW2xdOmw7ZC5wdXNoKHRbb11bY10pfWg9XCJcIj09PWQuam9pbihcIlwiKS50cmltKCl9aWYoIWgpe2Zvcih2YXIgcD0wO3A8dTtwKyspezA8cCYmIWYmJihpKz1tKTt2YXIgZz1uJiZzP2VbcF06cDtpKz12KHRbb11bZ10scCl9bzx0Lmxlbmd0aC0xJiYoIXJ8fDA8dSYmIWYpJiYoaSs9eSl9fXJldHVybiBpfWZ1bmN0aW9uIHYoZSx0KXtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoZS5jb25zdHJ1Y3Rvcj09PURhdGUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpLnNsaWNlKDEsMjUpO3ZhciByPSExO28mJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZvLnRlc3QoZSkmJihlPVwiJ1wiK2Uscj0hMCk7dmFyIGk9ZS50b1N0cmluZygpLnJlcGxhY2UodSxhKTtyZXR1cm4ocj1yfHwhMD09PW58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4oZSx0KXx8QXJyYXkuaXNBcnJheShuKSYmblt0XXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZigtMTxlLmluZGV4T2YodFtyXSkpcmV0dXJuITA7cmV0dXJuITF9KGksYi5CQURfREVMSU1JVEVSUyl8fC0xPGkuaW5kZXhPZihtKXx8XCIgXCI9PT1pLmNoYXJBdCgwKXx8XCIgXCI9PT1pLmNoYXJBdChpLmxlbmd0aC0xKSk/cytpK3M6aX19fTtpZihiLlJFQ09SRF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMCksYi5VTklUX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMxKSxiLkJZVEVfT1JERVJfTUFSSz1cIlxcdWZlZmZcIixiLkJBRF9ERUxJTUlURVJTPVtcIlxcclwiLFwiXFxuXCIsJ1wiJyxiLkJZVEVfT1JERVJfTUFSS10sYi5XT1JLRVJTX1NVUFBPUlRFRD0hbiYmISFmLldvcmtlcixiLk5PREVfU1RSRUFNX0lOUFVUPTEsYi5Mb2NhbENodW5rU2l6ZT0xMDQ4NTc2MCxiLlJlbW90ZUNodW5rU2l6ZT01MjQyODgwLGIuRGVmYXVsdERlbGltaXRlcj1cIixcIixiLlBhcnNlcj1FLGIuUGFyc2VySGFuZGxlPXIsYi5OZXR3b3JrU3RyZWFtZXI9bCxiLkZpbGVTdHJlYW1lcj1jLGIuU3RyaW5nU3RyZWFtZXI9cCxiLlJlYWRhYmxlU3RyZWFtU3RyZWFtZXI9ZyxmLmpRdWVyeSl7dmFyIGQ9Zi5qUXVlcnk7ZC5mbi5wYXJzZT1mdW5jdGlvbihvKXt2YXIgcj1vLmNvbmZpZ3x8e30sdT1bXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2lmKCEoXCJJTlBVVFwiPT09ZCh0aGlzKS5wcm9wKFwidGFnTmFtZVwiKS50b1VwcGVyQ2FzZSgpJiZcImZpbGVcIj09PWQodGhpcykuYXR0cihcInR5cGVcIikudG9Mb3dlckNhc2UoKSYmZi5GaWxlUmVhZGVyKXx8IXRoaXMuZmlsZXN8fDA9PT10aGlzLmZpbGVzLmxlbmd0aClyZXR1cm4hMDtmb3IodmFyIHQ9MDt0PHRoaXMuZmlsZXMubGVuZ3RoO3QrKyl1LnB1c2goe2ZpbGU6dGhpcy5maWxlc1t0XSxpbnB1dEVsZW06dGhpcyxpbnN0YW5jZUNvbmZpZzpkLmV4dGVuZCh7fSxyKX0pfSksZSgpLHRoaXM7ZnVuY3Rpb24gZSgpe2lmKDAhPT11Lmxlbmd0aCl7dmFyIGUsdCxyLGksbj11WzBdO2lmKEooby5iZWZvcmUpKXt2YXIgcz1vLmJlZm9yZShuLmZpbGUsbi5pbnB1dEVsZW0pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBzKXtpZihcImFib3J0XCI9PT1zLmFjdGlvbilyZXR1cm4gZT1cIkFib3J0RXJyb3JcIix0PW4uZmlsZSxyPW4uaW5wdXRFbGVtLGk9cy5yZWFzb24sdm9pZChKKG8uZXJyb3IpJiZvLmVycm9yKHtuYW1lOmV9LHQscixpKSk7aWYoXCJza2lwXCI9PT1zLmFjdGlvbilyZXR1cm4gdm9pZCBoKCk7XCJvYmplY3RcIj09dHlwZW9mIHMuY29uZmlnJiYobi5pbnN0YW5jZUNvbmZpZz1kLmV4dGVuZChuLmluc3RhbmNlQ29uZmlnLHMuY29uZmlnKSl9ZWxzZSBpZihcInNraXBcIj09PXMpcmV0dXJuIHZvaWQgaCgpfXZhciBhPW4uaW5zdGFuY2VDb25maWcuY29tcGxldGU7bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZT1mdW5jdGlvbihlKXtKKGEpJiZhKGUsbi5maWxlLG4uaW5wdXRFbGVtKSxoKCl9LGIucGFyc2Uobi5maWxlLG4uaW5zdGFuY2VDb25maWcpfWVsc2UgSihvLmNvbXBsZXRlKSYmby5jb21wbGV0ZSgpfWZ1bmN0aW9uIGgoKXt1LnNwbGljZSgwLDEpLGUoKX19fWZ1bmN0aW9uIGgoZSl7dGhpcy5faGFuZGxlPW51bGwsdGhpcy5fZmluaXNoZWQ9ITEsdGhpcy5fY29tcGxldGVkPSExLHRoaXMuX2hhbHRlZD0hMSx0aGlzLl9pbnB1dD1udWxsLHRoaXMuX2Jhc2VJbmRleD0wLHRoaXMuX3BhcnRpYWxMaW5lPVwiXCIsdGhpcy5fcm93Q291bnQ9MCx0aGlzLl9zdGFydD0wLHRoaXMuX25leHRDaHVuaz1udWxsLHRoaXMuaXNGaXJzdENodW5rPSEwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX0sZnVuY3Rpb24oZSl7dmFyIHQ9dyhlKTt0LmNodW5rU2l6ZT1wYXJzZUludCh0LmNodW5rU2l6ZSksZS5zdGVwfHxlLmNodW5rfHwodC5jaHVua1NpemU9bnVsbCk7dGhpcy5faGFuZGxlPW5ldyByKHQpLCh0aGlzLl9oYW5kbGUuc3RyZWFtZXI9dGhpcykuX2NvbmZpZz10fS5jYWxsKHRoaXMsZSksdGhpcy5wYXJzZUNodW5rPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5pc0ZpcnN0Q2h1bmsmJkoodGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKXt2YXIgcj10aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuayhlKTt2b2lkIDAhPT1yJiYoZT1yKX10aGlzLmlzRmlyc3RDaHVuaz0hMSx0aGlzLl9oYWx0ZWQ9ITE7dmFyIGk9dGhpcy5fcGFydGlhbExpbmUrZTt0aGlzLl9wYXJ0aWFsTGluZT1cIlwiO3ZhciBuPXRoaXMuX2hhbmRsZS5wYXJzZShpLHRoaXMuX2Jhc2VJbmRleCwhdGhpcy5fZmluaXNoZWQpO2lmKCF0aGlzLl9oYW5kbGUucGF1c2VkKCkmJiF0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXt2YXIgcz1uLm1ldGEuY3Vyc29yO3RoaXMuX2ZpbmlzaGVkfHwodGhpcy5fcGFydGlhbExpbmU9aS5zdWJzdHJpbmcocy10aGlzLl9iYXNlSW5kZXgpLHRoaXMuX2Jhc2VJbmRleD1zKSxuJiZuLmRhdGEmJih0aGlzLl9yb3dDb3VudCs9bi5kYXRhLmxlbmd0aCk7dmFyIGE9dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiZ0aGlzLl9yb3dDb3VudD49dGhpcy5fY29uZmlnLnByZXZpZXc7aWYobylmLnBvc3RNZXNzYWdlKHtyZXN1bHRzOm4sd29ya2VySWQ6Yi5XT1JLRVJfSUQsZmluaXNoZWQ6YX0pO2Vsc2UgaWYoSih0aGlzLl9jb25maWcuY2h1bmspJiYhdCl7aWYodGhpcy5fY29uZmlnLmNodW5rKG4sdGhpcy5faGFuZGxlKSx0aGlzLl9oYW5kbGUucGF1c2VkKCl8fHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpcmV0dXJuIHZvaWQodGhpcy5faGFsdGVkPSEwKTtuPXZvaWQgMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9dm9pZCAwfXJldHVybiB0aGlzLl9jb25maWcuc3RlcHx8dGhpcy5fY29uZmlnLmNodW5rfHwodGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGE9dGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KG4uZGF0YSksdGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycz10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChuLmVycm9ycyksdGhpcy5fY29tcGxldGVSZXN1bHRzLm1ldGE9bi5tZXRhKSx0aGlzLl9jb21wbGV0ZWR8fCFhfHwhSih0aGlzLl9jb25maWcuY29tcGxldGUpfHxuJiZuLm1ldGEuYWJvcnRlZHx8KHRoaXMuX2NvbmZpZy5jb21wbGV0ZSh0aGlzLl9jb21wbGV0ZVJlc3VsdHMsdGhpcy5faW5wdXQpLHRoaXMuX2NvbXBsZXRlZD0hMCksYXx8biYmbi5tZXRhLnBhdXNlZHx8dGhpcy5fbmV4dENodW5rKCksbn10aGlzLl9oYWx0ZWQ9ITB9LHRoaXMuX3NlbmRFcnJvcj1mdW5jdGlvbihlKXtKKHRoaXMuX2NvbmZpZy5lcnJvcik/dGhpcy5fY29uZmlnLmVycm9yKGUpOm8mJnRoaXMuX2NvbmZpZy5lcnJvciYmZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQsZXJyb3I6ZSxmaW5pc2hlZDohMX0pfX1mdW5jdGlvbiBsKGUpe3ZhciBpOyhlPWV8fHt9KS5jaHVua1NpemV8fChlLmNodW5rU2l6ZT1iLlJlbW90ZUNodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSksdGhpcy5fbmV4dENodW5rPW4/ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKSx0aGlzLl9jaHVua0xvYWRlZCgpfTpmdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpfSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9yZWFkQ2h1bms9ZnVuY3Rpb24oKXtpZih0aGlzLl9maW5pc2hlZCl0aGlzLl9jaHVua0xvYWRlZCgpO2Vsc2V7aWYoaT1uZXcgWE1MSHR0cFJlcXVlc3QsdGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyYmKGkud2l0aENyZWRlbnRpYWxzPXRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpLG58fChpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpLGkub3Blbih0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keT9cIlBPU1RcIjpcIkdFVFwiLHRoaXMuX2lucHV0LCFuKSx0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycyl7dmFyIGU9dGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnM7Zm9yKHZhciB0IGluIGUpaS5zZXRSZXF1ZXN0SGVhZGVyKHQsZVt0XSl9aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHI9dGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZS0xO2kuc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsXCJieXRlcz1cIit0aGlzLl9zdGFydCtcIi1cIityKX10cnl7aS5zZW5kKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RCb2R5KX1jYXRjaChlKXt0aGlzLl9jaHVua0Vycm9yKGUubWVzc2FnZSl9biYmMD09PWkuc3RhdHVzJiZ0aGlzLl9jaHVua0Vycm9yKCl9fSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbigpezQ9PT1pLnJlYWR5U3RhdGUmJihpLnN0YXR1czwyMDB8fDQwMDw9aS5zdGF0dXM/dGhpcy5fY2h1bmtFcnJvcigpOih0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZT90aGlzLl9jb25maWcuY2h1bmtTaXplOmkucmVzcG9uc2VUZXh0Lmxlbmd0aCx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVJhbmdlXCIpO2lmKG51bGw9PT10KXJldHVybi0xO3JldHVybiBwYXJzZUludCh0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKFwiL1wiKSsxKSl9KGkpLHRoaXMucGFyc2VDaHVuayhpLnJlc3BvbnNlVGV4dCkpKX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbihlKXt2YXIgdD1pLnN0YXR1c1RleHR8fGU7dGhpcy5fc2VuZEVycm9yKG5ldyBFcnJvcih0KSl9fWZ1bmN0aW9uIGMoZSl7dmFyIGksbjsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5Mb2NhbENodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSk7dmFyIHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI7dGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSxuPWUuc2xpY2V8fGUud2Via2l0U2xpY2V8fGUubW96U2xpY2Uscz8oKGk9bmV3IEZpbGVSZWFkZXIpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpOmk9bmV3IEZpbGVSZWFkZXJTeW5jLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJiEodGhpcy5fcm93Q291bnQ8dGhpcy5fY29uZmlnLnByZXZpZXcpfHx0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5faW5wdXQ7aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHQ9TWF0aC5taW4odGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9pbnB1dC5zaXplKTtlPW4uY2FsbChlLHRoaXMuX3N0YXJ0LHQpfXZhciByPWkucmVhZEFzVGV4dChlLHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7c3x8dGhpcy5fY2h1bmtMb2FkZWQoe3RhcmdldDp7cmVzdWx0OnJ9fSl9LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKGUpe3RoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49dGhpcy5faW5wdXQuc2l6ZSx0aGlzLnBhcnNlQ2h1bmsoZS50YXJnZXQucmVzdWx0KX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbigpe3RoaXMuX3NlbmRFcnJvcihpLmVycm9yKX19ZnVuY3Rpb24gcChlKXt2YXIgcjtoLmNhbGwodGhpcyxlPWV8fHt9KSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXtyZXR1cm4gcj1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXtpZighdGhpcy5fZmluaXNoZWQpe3ZhciBlLHQ9dGhpcy5fY29uZmlnLmNodW5rU2l6ZTtyZXR1cm4gdD8oZT1yLnN1YnN0cmluZygwLHQpLHI9ci5zdWJzdHJpbmcodCkpOihlPXIscj1cIlwiKSx0aGlzLl9maW5pc2hlZD0hcix0aGlzLnBhcnNlQ2h1bmsoZSl9fX1mdW5jdGlvbiBnKGUpe2guY2FsbCh0aGlzLGU9ZXx8e30pO3ZhciB0PVtdLHI9ITAsaT0hMTt0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucGF1c2UuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnBhdXNlKCl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucmVzdW1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5yZXN1bWUoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9pbnB1dC5vbihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5vbihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQub24oXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcy5fY2hlY2tJc0ZpbmlzaGVkPWZ1bmN0aW9uKCl7aSYmMT09PXQubGVuZ3RoJiYodGhpcy5fZmluaXNoZWQ9ITApfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0Lmxlbmd0aD90aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKTpyPSEwfSx0aGlzLl9zdHJlYW1EYXRhPXYoZnVuY3Rpb24oZSl7dHJ5e3QucHVzaChcInN0cmluZ1wiPT10eXBlb2YgZT9lOmUudG9TdHJpbmcodGhpcy5fY29uZmlnLmVuY29kaW5nKSksciYmKHI9ITEsdGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSkpfWNhdGNoKGUpe3RoaXMuX3N0cmVhbUVycm9yKGUpfX0sdGhpcyksdGhpcy5fc3RyZWFtRXJyb3I9dihmdW5jdGlvbihlKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksdGhpcy5fc2VuZEVycm9yKGUpfSx0aGlzKSx0aGlzLl9zdHJlYW1FbmQ9dihmdW5jdGlvbigpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSxpPSEwLHRoaXMuX3N0cmVhbURhdGEoXCJcIil9LHRoaXMpLHRoaXMuX3N0cmVhbUNsZWFuVXA9dihmdW5jdGlvbigpe3RoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzKX1mdW5jdGlvbiByKG0pe3ZhciBhLG8sdSxpPU1hdGgucG93KDIsNTMpLG49LWkscz0vXlxccyotPyhcXGQrXFwuP3xcXC5cXGQrfFxcZCtcXC5cXGQrKShbZUVdWy0rXT9cXGQrKT9cXHMqJC8saD0vXigoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGRcXC5cXGQrKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSkpJC8sdD10aGlzLHI9MCxmPTAsZD0hMSxlPSExLGw9W10sYz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX07aWYoSihtLnN0ZXApKXt2YXIgcD1tLnN0ZXA7bS5zdGVwPWZ1bmN0aW9uKGUpe2lmKGM9ZSxfKCkpZygpO2Vsc2V7aWYoZygpLDA9PT1jLmRhdGEubGVuZ3RoKXJldHVybjtyKz1lLmRhdGEubGVuZ3RoLG0ucHJldmlldyYmcj5tLnByZXZpZXc/by5hYm9ydCgpOihjLmRhdGE9Yy5kYXRhWzBdLHAoYyx0KSl9fX1mdW5jdGlvbiB5KGUpe3JldHVyblwiZ3JlZWR5XCI9PT1tLnNraXBFbXB0eUxpbmVzP1wiXCI9PT1lLmpvaW4oXCJcIikudHJpbSgpOjE9PT1lLmxlbmd0aCYmMD09PWVbMF0ubGVuZ3RofWZ1bmN0aW9uIGcoKXtyZXR1cm4gYyYmdSYmKGsoXCJEZWxpbWl0ZXJcIixcIlVuZGV0ZWN0YWJsZURlbGltaXRlclwiLFwiVW5hYmxlIHRvIGF1dG8tZGV0ZWN0IGRlbGltaXRpbmcgY2hhcmFjdGVyOyBkZWZhdWx0ZWQgdG8gJ1wiK2IuRGVmYXVsdERlbGltaXRlcitcIidcIiksdT0hMSksbS5za2lwRW1wdHlMaW5lcyYmKGMuZGF0YT1jLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiF5KGUpfSkpLF8oKSYmZnVuY3Rpb24oKXtpZighYylyZXR1cm47ZnVuY3Rpb24gZShlLHQpe0oobS50cmFuc2Zvcm1IZWFkZXIpJiYoZT1tLnRyYW5zZm9ybUhlYWRlcihlLHQpKSxsLnB1c2goZSl9aWYoQXJyYXkuaXNBcnJheShjLmRhdGFbMF0pKXtmb3IodmFyIHQ9MDtfKCkmJnQ8Yy5kYXRhLmxlbmd0aDt0KyspYy5kYXRhW3RdLmZvckVhY2goZSk7Yy5kYXRhLnNwbGljZSgwLDEpfWVsc2UgYy5kYXRhLmZvckVhY2goZSl9KCksZnVuY3Rpb24oKXtpZighY3x8IW0uaGVhZGVyJiYhbS5keW5hbWljVHlwaW5nJiYhbS50cmFuc2Zvcm0pcmV0dXJuIGM7ZnVuY3Rpb24gZShlLHQpe3ZhciByLGk9bS5oZWFkZXI/e306W107Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49cixzPWVbcl07bS5oZWFkZXImJihuPXI+PWwubGVuZ3RoP1wiX19wYXJzZWRfZXh0cmFcIjpsW3JdKSxtLnRyYW5zZm9ybSYmKHM9bS50cmFuc2Zvcm0ocyxuKSkscz12KG4scyksXCJfX3BhcnNlZF9leHRyYVwiPT09bj8oaVtuXT1pW25dfHxbXSxpW25dLnB1c2gocykpOmlbbl09c31yZXR1cm4gbS5oZWFkZXImJihyPmwubGVuZ3RoP2soXCJGaWVsZE1pc21hdGNoXCIsXCJUb29NYW55RmllbGRzXCIsXCJUb28gbWFueSBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KTpyPGwubGVuZ3RoJiZrKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vRmV3RmllbGRzXCIsXCJUb28gZmV3IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIrcixmK3QpKSxpfXZhciB0PTE7IWMuZGF0YS5sZW5ndGh8fEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKT8oYy5kYXRhPWMuZGF0YS5tYXAoZSksdD1jLmRhdGEubGVuZ3RoKTpjLmRhdGE9ZShjLmRhdGEsMCk7bS5oZWFkZXImJmMubWV0YSYmKGMubWV0YS5maWVsZHM9bCk7cmV0dXJuIGYrPXQsY30oKX1mdW5jdGlvbiBfKCl7cmV0dXJuIG0uaGVhZGVyJiYwPT09bC5sZW5ndGh9ZnVuY3Rpb24gdihlLHQpe3JldHVybiByPWUsbS5keW5hbWljVHlwaW5nRnVuY3Rpb24mJnZvaWQgMD09PW0uZHluYW1pY1R5cGluZ1tyXSYmKG0uZHluYW1pY1R5cGluZ1tyXT1tLmR5bmFtaWNUeXBpbmdGdW5jdGlvbihyKSksITA9PT0obS5keW5hbWljVHlwaW5nW3JdfHxtLmR5bmFtaWNUeXBpbmcpP1widHJ1ZVwiPT09dHx8XCJUUlVFXCI9PT10fHxcImZhbHNlXCIhPT10JiZcIkZBTFNFXCIhPT10JiYoZnVuY3Rpb24oZSl7aWYocy50ZXN0KGUpKXt2YXIgdD1wYXJzZUZsb2F0KGUpO2lmKG48dCYmdDxpKXJldHVybiEwfXJldHVybiExfSh0KT9wYXJzZUZsb2F0KHQpOmgudGVzdCh0KT9uZXcgRGF0ZSh0KTpcIlwiPT09dD9udWxsOnQpOnQ7dmFyIHJ9ZnVuY3Rpb24gayhlLHQscixpKXt2YXIgbj17dHlwZTplLGNvZGU6dCxtZXNzYWdlOnJ9O3ZvaWQgMCE9PWkmJihuLnJvdz1pKSxjLmVycm9ycy5wdXNoKG4pfXRoaXMucGFyc2U9ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPW0ucXVvdGVDaGFyfHwnXCInO2lmKG0ubmV3bGluZXx8KG0ubmV3bGluZT1mdW5jdGlvbihlLHQpe2U9ZS5zdWJzdHJpbmcoMCwxMDQ4NTc2KTt2YXIgcj1uZXcgUmVnRXhwKFEodCkrXCIoW15dKj8pXCIrUSh0KSxcImdtXCIpLGk9KGU9ZS5yZXBsYWNlKHIsXCJcIikpLnNwbGl0KFwiXFxyXCIpLG49ZS5zcGxpdChcIlxcblwiKSxzPTE8bi5sZW5ndGgmJm5bMF0ubGVuZ3RoPGlbMF0ubGVuZ3RoO2lmKDE9PT1pLmxlbmd0aHx8cylyZXR1cm5cIlxcblwiO2Zvcih2YXIgYT0wLG89MDtvPGkubGVuZ3RoO28rKylcIlxcblwiPT09aVtvXVswXSYmYSsrO3JldHVybiBhPj1pLmxlbmd0aC8yP1wiXFxyXFxuXCI6XCJcXHJcIn0oZSxpKSksdT0hMSxtLmRlbGltaXRlcilKKG0uZGVsaW1pdGVyKSYmKG0uZGVsaW1pdGVyPW0uZGVsaW1pdGVyKGUpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXIpO2Vsc2V7dmFyIG49ZnVuY3Rpb24oZSx0LHIsaSxuKXt2YXIgcyxhLG8sdTtuPW58fFtcIixcIixcIlxcdFwiLFwifFwiLFwiO1wiLGIuUkVDT1JEX1NFUCxiLlVOSVRfU0VQXTtmb3IodmFyIGg9MDtoPG4ubGVuZ3RoO2grKyl7dmFyIGY9bltoXSxkPTAsbD0wLGM9MDtvPXZvaWQgMDtmb3IodmFyIHA9bmV3IEUoe2NvbW1lbnRzOmksZGVsaW1pdGVyOmYsbmV3bGluZTp0LHByZXZpZXc6MTB9KS5wYXJzZShlKSxnPTA7ZzxwLmRhdGEubGVuZ3RoO2crKylpZihyJiZ5KHAuZGF0YVtnXSkpYysrO2Vsc2V7dmFyIF89cC5kYXRhW2ddLmxlbmd0aDtsKz1fLHZvaWQgMCE9PW8/MDxfJiYoZCs9TWF0aC5hYnMoXy1vKSxvPV8pOm89X30wPHAuZGF0YS5sZW5ndGgmJihsLz1wLmRhdGEubGVuZ3RoLWMpLCh2b2lkIDA9PT1hfHxkPD1hKSYmKHZvaWQgMD09PXV8fHU8bCkmJjEuOTk8bCYmKGE9ZCxzPWYsdT1sKX1yZXR1cm57c3VjY2Vzc2Z1bDohIShtLmRlbGltaXRlcj1zKSxiZXN0RGVsaW1pdGVyOnN9fShlLG0ubmV3bGluZSxtLnNraXBFbXB0eUxpbmVzLG0uY29tbWVudHMsbS5kZWxpbWl0ZXJzVG9HdWVzcyk7bi5zdWNjZXNzZnVsP20uZGVsaW1pdGVyPW4uYmVzdERlbGltaXRlcjoodT0hMCxtLmRlbGltaXRlcj1iLkRlZmF1bHREZWxpbWl0ZXIpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXJ9dmFyIHM9dyhtKTtyZXR1cm4gbS5wcmV2aWV3JiZtLmhlYWRlciYmcy5wcmV2aWV3KyssYT1lLG89bmV3IEUocyksYz1vLnBhcnNlKGEsdCxyKSxnKCksZD97bWV0YTp7cGF1c2VkOiEwfX06Y3x8e21ldGE6e3BhdXNlZDohMX19fSx0aGlzLnBhdXNlZD1mdW5jdGlvbigpe3JldHVybiBkfSx0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7ZD0hMCxvLmFib3J0KCksYT1KKG0uY2h1bmspP1wiXCI6YS5zdWJzdHJpbmcoby5nZXRDaGFySW5kZXgoKSl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7dC5zdHJlYW1lci5faGFsdGVkPyhkPSExLHQuc3RyZWFtZXIucGFyc2VDaHVuayhhLCEwKSk6c2V0VGltZW91dCh0LnJlc3VtZSwzKX0sdGhpcy5hYm9ydGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LHRoaXMuYWJvcnQ9ZnVuY3Rpb24oKXtlPSEwLG8uYWJvcnQoKSxjLm1ldGEuYWJvcnRlZD0hMCxKKG0uY29tcGxldGUpJiZtLmNvbXBsZXRlKGMpLGE9XCJcIn19ZnVuY3Rpb24gUShlKXtyZXR1cm4gZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBFKGope3ZhciB6LE09KGo9anx8e30pLmRlbGltaXRlcixQPWoubmV3bGluZSxVPWouY29tbWVudHMscT1qLnN0ZXAsTj1qLnByZXZpZXcsQj1qLmZhc3RNb2RlLEs9ej12b2lkIDA9PT1qLnF1b3RlQ2hhcnx8bnVsbD09PWoucXVvdGVDaGFyPydcIic6ai5xdW90ZUNoYXI7aWYodm9pZCAwIT09ai5lc2NhcGVDaGFyJiYoSz1qLmVzY2FwZUNoYXIpLChcInN0cmluZ1wiIT10eXBlb2YgTXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKE0pKSYmKE09XCIsXCIpLFU9PT1NKXRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyXCIpOyEwPT09VT9VPVwiI1wiOihcInN0cmluZ1wiIT10eXBlb2YgVXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKFUpKSYmKFU9ITEpLFwiXFxuXCIhPT1QJiZcIlxcclwiIT09UCYmXCJcXHJcXG5cIiE9PVAmJihQPVwiXFxuXCIpO3ZhciBXPTAsSD0hMTt0aGlzLnBhcnNlPWZ1bmN0aW9uKGksdCxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgaSl0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCIpO3ZhciBuPWkubGVuZ3RoLGU9TS5sZW5ndGgscz1QLmxlbmd0aCxhPVUubGVuZ3RoLG89SihxKSx1PVtdLGg9W10sZj1bXSxkPVc9MDtpZighaSlyZXR1cm4gTCgpO2lmKGouaGVhZGVyJiYhdCl7dmFyIGw9aS5zcGxpdChQKVswXS5zcGxpdChNKSxjPVtdLHA9e30sZz0hMTtmb3IodmFyIF8gaW4gbCl7dmFyIG09bFtfXTtKKGoudHJhbnNmb3JtSGVhZGVyKSYmKG09ai50cmFuc2Zvcm1IZWFkZXIobSxfKSk7dmFyIHk9bSx2PXBbbV18fDA7Zm9yKDA8diYmKGc9ITAseT1tK1wiX1wiK3YpLHBbbV09disxO2MuaW5jbHVkZXMoeSk7KXk9eStcIl9cIit2O2MucHVzaCh5KX1pZihnKXt2YXIgaz1pLnNwbGl0KFApO2tbMF09Yy5qb2luKE0pLGk9ay5qb2luKFApfX1pZihCfHwhMSE9PUImJi0xPT09aS5pbmRleE9mKHopKXtmb3IodmFyIGI9aS5zcGxpdChQKSxFPTA7RTxiLmxlbmd0aDtFKyspe2lmKGY9YltFXSxXKz1mLmxlbmd0aCxFIT09Yi5sZW5ndGgtMSlXKz1QLmxlbmd0aDtlbHNlIGlmKHIpcmV0dXJuIEwoKTtpZighVXx8Zi5zdWJzdHJpbmcoMCxhKSE9PVUpe2lmKG8pe2lmKHU9W10sSShmLnNwbGl0KE0pKSxGKCksSClyZXR1cm4gTCgpfWVsc2UgSShmLnNwbGl0KE0pKTtpZihOJiZOPD1FKXJldHVybiB1PXUuc2xpY2UoMCxOKSxMKCEwKX19cmV0dXJuIEwoKX1mb3IodmFyIHc9aS5pbmRleE9mKE0sVyksUj1pLmluZGV4T2YoUCxXKSxDPW5ldyBSZWdFeHAoUShLKStRKHopLFwiZ1wiKSxTPWkuaW5kZXhPZih6LFcpOzspaWYoaVtXXSE9PXopaWYoVSYmMD09PWYubGVuZ3RoJiZpLnN1YnN0cmluZyhXLFcrYSk9PT1VKXtpZigtMT09PVIpcmV0dXJuIEwoKTtXPVIrcyxSPWkuaW5kZXhPZihQLFcpLHc9aS5pbmRleE9mKE0sVyl9ZWxzZSBpZigtMSE9PXcmJih3PFJ8fC0xPT09UikpZi5wdXNoKGkuc3Vic3RyaW5nKFcsdykpLFc9dytlLHc9aS5pbmRleE9mKE0sVyk7ZWxzZXtpZigtMT09PVIpYnJlYWs7aWYoZi5wdXNoKGkuc3Vic3RyaW5nKFcsUikpLEQoUitzKSxvJiYoRigpLEgpKXJldHVybiBMKCk7aWYoTiYmdS5sZW5ndGg+PU4pcmV0dXJuIEwoITApfWVsc2UgZm9yKFM9VyxXKys7Oyl7aWYoLTE9PT0oUz1pLmluZGV4T2YoeixTKzEpKSlyZXR1cm4gcnx8aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIk1pc3NpbmdRdW90ZXNcIixtZXNzYWdlOlwiUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksVCgpO2lmKFM9PT1uLTEpcmV0dXJuIFQoaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpO2lmKHohPT1LfHxpW1MrMV0hPT1LKXtpZih6PT09S3x8MD09PVN8fGlbUy0xXSE9PUspey0xIT09dyYmdzxTKzEmJih3PWkuaW5kZXhPZihNLFMrMSkpLC0xIT09UiYmUjxTKzEmJihSPWkuaW5kZXhPZihQLFMrMSkpO3ZhciBPPUEoLTE9PT1SP3c6TWF0aC5taW4odyxSKSk7aWYoaS5zdWJzdHIoUysxK08sZSk9PT1NKXtmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLGlbVz1TKzErTytlXSE9PXomJihTPWkuaW5kZXhPZih6LFcpKSx3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyk7YnJlYWt9dmFyIHg9QShSKTtpZihpLnN1YnN0cmluZyhTKzEreCxTKzEreCtzKT09PVApe2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSksRChTKzEreCtzKSx3PWkuaW5kZXhPZihNLFcpLFM9aS5pbmRleE9mKHosVyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKTticmVha31oLnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiSW52YWxpZFF1b3Rlc1wiLG1lc3NhZ2U6XCJUcmFpbGluZyBxdW90ZSBvbiBxdW90ZWQgZmllbGQgaXMgbWFsZm9ybWVkXCIscm93OnUubGVuZ3RoLGluZGV4Old9KSxTKyt9fWVsc2UgUysrfXJldHVybiBUKCk7ZnVuY3Rpb24gSShlKXt1LnB1c2goZSksZD1XfWZ1bmN0aW9uIEEoZSl7dmFyIHQ9MDtpZigtMSE9PWUpe3ZhciByPWkuc3Vic3RyaW5nKFMrMSxlKTtyJiZcIlwiPT09ci50cmltKCkmJih0PXIubGVuZ3RoKX1yZXR1cm4gdH1mdW5jdGlvbiBUKGUpe3JldHVybiByfHwodm9pZCAwPT09ZSYmKGU9aS5zdWJzdHJpbmcoVykpLGYucHVzaChlKSxXPW4sSShmKSxvJiZGKCkpLEwoKX1mdW5jdGlvbiBEKGUpe1c9ZSxJKGYpLGY9W10sUj1pLmluZGV4T2YoUCxXKX1mdW5jdGlvbiBMKGUpe3JldHVybntkYXRhOnUsZXJyb3JzOmgsbWV0YTp7ZGVsaW1pdGVyOk0sbGluZWJyZWFrOlAsYWJvcnRlZDpILHRydW5jYXRlZDohIWUsY3Vyc29yOmQrKHR8fDApfX19ZnVuY3Rpb24gRigpe3EoTCgpKSx1PVtdLGg9W119fSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7SD0hMH0sdGhpcy5nZXRDaGFySW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gV319ZnVuY3Rpb24gXyhlKXt2YXIgdD1lLmRhdGEscj1hW3Qud29ya2VySWRdLGk9ITE7aWYodC5lcnJvcilyLnVzZXJFcnJvcih0LmVycm9yLHQuZmlsZSk7ZWxzZSBpZih0LnJlc3VsdHMmJnQucmVzdWx0cy5kYXRhKXt2YXIgbj17YWJvcnQ6ZnVuY3Rpb24oKXtpPSEwLG0odC53b3JrZXJJZCx7ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7YWJvcnRlZDohMH19KX0scGF1c2U6eSxyZXN1bWU6eX07aWYoSihyLnVzZXJTdGVwKSl7Zm9yKHZhciBzPTA7czx0LnJlc3VsdHMuZGF0YS5sZW5ndGgmJihyLnVzZXJTdGVwKHtkYXRhOnQucmVzdWx0cy5kYXRhW3NdLGVycm9yczp0LnJlc3VsdHMuZXJyb3JzLG1ldGE6dC5yZXN1bHRzLm1ldGF9LG4pLCFpKTtzKyspO2RlbGV0ZSB0LnJlc3VsdHN9ZWxzZSBKKHIudXNlckNodW5rKSYmKHIudXNlckNodW5rKHQucmVzdWx0cyxuLHQuZmlsZSksZGVsZXRlIHQucmVzdWx0cyl9dC5maW5pc2hlZCYmIWkmJm0odC53b3JrZXJJZCx0LnJlc3VsdHMpfWZ1bmN0aW9uIG0oZSx0KXt2YXIgcj1hW2VdO0ooci51c2VyQ29tcGxldGUpJiZyLnVzZXJDb21wbGV0ZSh0KSxyLnRlcm1pbmF0ZSgpLGRlbGV0ZSBhW2VdfWZ1bmN0aW9uIHkoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpfWZ1bmN0aW9uIHcoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciB0PUFycmF5LmlzQXJyYXkoZSk/W106e307Zm9yKHZhciByIGluIGUpdFtyXT13KGVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gSihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfXJldHVybiBvJiYoZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhO3ZvaWQgMD09PWIuV09SS0VSX0lEJiZ0JiYoYi5XT1JLRVJfSUQ9dC53b3JrZXJJZCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQuaW5wdXQpZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpiLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpLGZpbmlzaGVkOiEwfSk7ZWxzZSBpZihmLkZpbGUmJnQuaW5wdXQgaW5zdGFuY2VvZiBGaWxlfHx0LmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgcj1iLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpO3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6cixmaW5pc2hlZDohMH0pfX0pLChsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9bCwoYy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWMsKHAucHJvdG90eXBlPU9iamVjdC5jcmVhdGUocC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1wLChnLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9ZyxifSk7IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgY3JlYXRlU2hhcGVzSGFuZGxlciBmcm9tICcuL29ubWVzc2FnZS9jcmVhdGUtc2hhcGVzJztcclxuaW1wb3J0ICogYXMgY3N2RmlsZUhhbmRsZXIgZnJvbSAnLi9vbm1lc3NhZ2UvY3N2LWZpbGUnO1xyXG5pbXBvcnQgKiBhcyBoZWF0bWFwSGFuZGxlciBmcm9tICcuL29ubWVzc2FnZS9oZWF0bWFwL2hlYXRtYXAnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIC8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cclxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXyk7XHJcbiAgICBmaWdtYS51aS5yZXNpemUoNTAwLCA2MDApO1xyXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVhZCBsb2NhbCBzYXZlZCBjc3ZcclxuICAgIGxldCBjc3ZGaWxlID0geWllbGQgY3N2RmlsZUhhbmRsZXIuY3N2RmlsZVJlYWQoKTtcclxuICAgIGNzdkZpbGVIYW5kbGVyLmNzdlBhcnNlKGNzdkZpbGUpO1xyXG4gICAgLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIFVJXHJcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChtc2cubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjcmVhdGUtc2hhcGVzJzpcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYXBlc0hhbmRsZXIobXNnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjc3YtZmlsZTpzYXZlJzpcclxuICAgICAgICAgICAgICAgIGNzdkZpbGVIYW5kbGVyLmNzdkZpbGVTYXZlKG1zZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaGVhdG1hcDpnZW5lcmF0ZSc6XHJcbiAgICAgICAgICAgICAgICBoZWF0bWFwSGFuZGxlci5oZWF0bWFwR2VuZXJhdGUobXNnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ091dHJvIGV2ZW50bycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobXNnLCBkYXRhID0ge30pID0+IHtcclxuICAgIC8vIE9uZSB3YXkgb2YgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgdHlwZXMgb2YgbWVzc2FnZXMgc2VudCBmcm9tXHJcbiAgICAvLyB5b3VyIEhUTUwgcGFnZSBpcyB0byB1c2UgYW4gb2JqZWN0IHdpdGggYSBcInR5cGVcIiBwcm9wZXJ0eSBsaWtlIHRoaXMuXHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlLXNoYXBlcycpO1xyXG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLnZhbHVlOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgcmVjdC54ID0gaSAqIDE1MDtcclxuICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC41LCBiOiAwIH0gfV07XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQocmVjdCk7XHJcbiAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcclxuICAgIH1cclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xyXG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcclxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcclxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxufTtcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBwb3N0TWVzc2FnZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcbi8vIHNhdmVzIGEgY3N2IGxvY2FsbHkgZnJvbSB0aGUgVUlcclxuZXhwb3J0IGNvbnN0IGNzdkZpbGVTYXZlID0gKG1zZywgZGF0YSA9IHt9KSA9PiB7XHJcbiAgICAvLyBzYXZlIC5jc3YgY29udGVudHMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoJ2Nzdi1maWxlJywgbXNnLnZhbHVlKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ1NWIHNhdmVkIGxvY2FsbHkgdW5kZXIga2V5IFwiY3N2LWxvY2FsXCIuJyk7XHJcbiAgICAgICAgY3N2RmlsZVJlYWQoKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBsb2FkcyB0aGUgY3N2IGFuZCBwYXNzZXMgdG8gVUkgICAgIFxyXG5leHBvcnQgZnVuY3Rpb24gY3N2RmlsZVJlYWQoZGF0YSA9IHsgcG9zdE1lc3NhZ2U6IHRydWUgfSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgICAgICByZXR1cm4gZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYygnY3N2LWZpbGUnKS50aGVuKChjb250ZW50cykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGVudHMpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gY29udGVudHM7XHJcbiAgICAgICAgICAgICAgICAvKiBjb21tdW5pY2F0ZXMgdG8gVUkgKi9cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvc3RNZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKCdjc3YtZmlsZTpyZWFkJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3N2UGFyc2UodmFsdWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgLy8gY3N2IGFzIGFuIG9iamVjdCB7IGRhdGE6IFtjb2wxLCBjb2wyXSwgZXJyb3JzOiBbXSwgbWV0YToge30gfVxyXG4gICAgICAgIGNvbnN0IGNzdlBhcGEgPSBQYXBhLnBhcnNlKHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YUZyYW1lID0ge1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBwYXBhRGF0YTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY3N2UGFwYS5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBzYXZlIG9yaWdpbmFsIGRhdGFcclxuICAgICAgICAgICAgZGF0YUZyYW1lLnBhcGFEYXRhID0gY3N2UGFwYS5kYXRhO1xyXG4gICAgICAgICAgICAvLyBzYXZlIGNvbHVtbnNcclxuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IGNzdlBhcGEuZGF0YVswXTtcclxuICAgICAgICAgICAgZGF0YUZyYW1lLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm0gYXJyYXkgb2YgYXJyYXlzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIHJvd3NcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBjc3ZQYXBhLmRhdGEuc2xpY2UoMSk7IC8vIGFmdGVyIGZpcnN0IGxpbmVcclxuICAgICAgICAgICAgZGF0YUZyYW1lLml0ZW1zID0gaXRlbXMubWFwKChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93T2JqID0ge307XHJcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd09ialtjb2x1bW5zW2NvbEluZGV4XV0gPSBjb2w7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3dPYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBhcnNpbmcgQ1NWLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YUZyYW1lO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiY29uc3QgZm9udFNpemUgPSAxNjtcclxuY29uc3QgY29ybmVyUmFkaXVzID0gMTA7XHJcbmNvbnN0IGZvbnROYW1lID0ge1xyXG4gICAgcmVndWxhcjogeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0sXHJcbiAgICBib2xkOiB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFkZGluZyhmcmFtZSwgcGFkZGluZykge1xyXG4gICAgZnJhbWUucGFkZGluZ0JvdHRvbSA9IGZyYW1lLnBhZGRpbmdUb3AgPSBmcmFtZS5wYWRkaW5nTGVmdCA9IGZyYW1lLnBhZGRpbmdSaWdodCA9IHBhZGRpbmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNwb3Qob3B0cyA9IHt9KSB7XHJcbiAgICAvLyBzZXQgb3B0aW9uc1xyXG4gICAgY29uc3QgbmFtZSA9IG9wdHMubmFtZSA/IG9wdHMubmFtZSA6ICcnO1xyXG4gICAgY29uc3Qgd2lkdGggPSBvcHRzLndpZHRoID8gb3B0cy53aWR0aCA6IDEwMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IG9wdHMuaGVpZ2h0ID8gb3B0cy5oZWlnaHQgOiAxMDA7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gb3B0cy5wYWRkaW5nID8gb3B0cy5wYWRkaW5nIDogMTY7XHJcbiAgICBjb25zdCBpbmRleCA9IG9wdHMuaW5kZXggPyBvcHRzLmluZGV4IDogMDtcclxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBvcHRzLnBlcmNlbnRhZ2UgPyBvcHRzLnBlcmNlbnRhZ2UgOiAwO1xyXG4gICAgLy8gY3JlYXRlIGZyYW1lcyBhbmQgaW5zZXJ0IGNoaWxkcmVuXHJcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAvLyBhZGRpbmcgdGV4dCBpbnRvIHRoZSBmcmFtZSBhbmQgXHJcbiAgICBmcmFtZS5uYW1lID0gbmFtZTtcclxuICAgIGZyYW1lLnggPSB3aWR0aCAqIGluZGV4ICsgKHBhZGRpbmcgKiBpbmRleCk7XHJcbiAgICBmcmFtZS55ID0gaGVpZ2h0ICsgMjAwO1xyXG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaXVzO1xyXG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdWRVJUSUNBTCc7XHJcbiAgICBmcmFtZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgZnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSAnRklYRUQnO1xyXG4gICAgZnJhbWUuY2xpcHNDb250ZW50ID0gZmFsc2U7XHJcbiAgICBmcmFtZS5ibGVuZE1vZGUgPSBcIk1VTFRJUExZXCI7XHJcbiAgICBzZXRQYWRkaW5nKGZyYW1lLCBwYWRkaW5nKTtcclxuICAgIGZyYW1lLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIC8vIGNoYW5nZSBpdHMgY29sb3JcclxuICAgIC8vIGRvYyBjaGFuZ2luZyBjb2xvcnM6IGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9wbHVnaW4tZG9jcy9lZGl0aW5nLXByb3BlcnRpZXMvI2NoYW5naW5nLWNvbG9yc1xyXG4gICAgLy8gZG9jIHJnYmE6IGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9wbHVnaW4tZG9jcy9hcGkvcHJvcGVydGllcy9maWdtYS11dGlsLXJnYmEvXHJcbiAgICBjb25zdCBmaWxscyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJhbWUuZmlsbHMpKTtcclxuICAgIGZpbGxzWzBdID0gZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDI1NSAwIDAgLyAke3BlcmNlbnRhZ2V9KWApKTtcclxuICAgIGZyYW1lLmZpbGxzID0gZmlsbHM7XHJcbiAgICAvLyBhZGRpbmcgYSB0ZXh0IHRvIHRoZSBmcmFtZSByZWZlcmVuY2luZyBpdHMgcGVyY2VudGFnZVxyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gKHBlcmNlbnRhZ2UgKiAxMDApICsgXCIlXCI7XHJcbiAgICB0ZXh0LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0gZm9udE5hbWUuYm9sZDtcclxuICAgIHRleHQuZmlsbHMgPSBbZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDAgMCAwIC8gMC44KWApKV07XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIlVzZXJzIFBlcmNlbnRcIjtcclxuICAgIC8vIGFkZCBhZnRlciBsYXlvdXQgaXMgYXBwbGllZCB0byBwYXJlbnRcclxuICAgIGNvbnN0IHNwb3RJbmRleEZyYW1lID0gc3BvdEluZGV4KHtcclxuICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgcGFyZW50RnJhbWU6IGZyYW1lLFxyXG4gICAgICAgIGlzQWJzb2x1dGU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmcmFtZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3BvdEluZGV4KG9wdHMgPSB7fSkge1xyXG4gICAgLy8gZGVmYXVsdHNcclxuICAgIGNvbnN0IGluZGV4ID0gb3B0cy5pbmRleCA/IG9wdHMuaW5kZXggOiAwO1xyXG4gICAgY29uc3QgcGFkZGluZyA9IG9wdHMucGFkZGluZyA/IG9wdHMucGFkZGluZyA6IDg7XHJcbiAgICBjb25zdCBwYXJlbnRGcmFtZSA9IG9wdHMucGFyZW50RnJhbWUgPyBvcHRzLnBhcmVudEZyYW1lIDogbnVsbDtcclxuICAgIGNvbnN0IHdpZHRoID0gb3B0cy53aWR0aCA/IG9wdHMud2lkdGggOiAzMjtcclxuICAgIGNvbnN0IGhlaWdodCA9IG9wdHMuaGVpZ2h0ID8gb3B0cy5oZWlnaHQgOiB3aWR0aDtcclxuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSBvcHRzLmlzQWJzb2x1dGUgPyBvcHRzLmlzQWJzb2x1dGUgOiBmYWxzZTtcclxuICAgIC8vIGNyZWF0ZSBmcmFtZXMgYW5kIGluc2VydCBjaGlsZHJlblxyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgLy8gY3JlYXRlIGEgZnJhbWUgYW5kIHRleHRcclxuICAgIGlmIChwYXJlbnRGcmFtZSAmJiBwYXJlbnRGcmFtZS50eXBlID09IFwiRlJBTUVcIikge1xyXG4gICAgICAgIHBhcmVudEZyYW1lLmFwcGVuZENoaWxkKGZyYW1lKTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB0ZXh0IGludG8gdGhlIGZyYW1lIGFuZCBcclxuICAgIGZyYW1lLm5hbWUgPSBTdHJpbmcoaW5kZXgpO1xyXG4gICAgLy8gZnJhbWUueCA9IHdpZHRoICogaW5kZXggKyAocGFkZGluZyAqIGluZGV4KTtcclxuICAgIC8vIGZyYW1lLnkgPSBoZWlnaHQgKyAyMDA7XHJcbiAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA5OTk7XHJcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ1ZFUlRJQ0FMJztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICBmcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9ICdIVUcnO1xyXG4gICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9ICdIVUcnO1xyXG4gICAgaWYgKGlzQWJzb2x1dGUpIHtcclxuICAgICAgICBmcmFtZS5sYXlvdXRQb3NpdGlvbmluZyA9IFwiQUJTT0xVVEVcIjtcclxuICAgICAgICAvLyBDZW50ZXIgdGhlIGNpcmNsZSBvbiB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiB0aGUgZnJhbWVcclxuICAgICAgICBmcmFtZS54ID0gLTU7XHJcbiAgICAgICAgZnJhbWUueSA9IC01O1xyXG4gICAgICAgIC8vIE1ha2UgdGhlIGNpcmNsZSBzdGljayB0byB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiB0aGUgZnJhbWVcclxuICAgICAgICBmcmFtZS5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ01JTicsIHZlcnRpY2FsOiAnTUlOJyB9O1xyXG4gICAgfVxyXG4gICAgc2V0UGFkZGluZyhmcmFtZSwgcGFkZGluZyk7XHJcbiAgICBmcmFtZS5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb25zdCBmaWxscyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJhbWUuZmlsbHMpKTtcclxuICAgIGZpbGxzWzBdID0gZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDAgMCAwIC8gMSlgKSk7XHJcbiAgICBmcmFtZS5maWxscyA9IGZpbGxzO1xyXG4gICAgLy8gYWRkaW5nIGEgdGV4dCB0byB0aGUgZnJhbWUgcmVmZXJlbmNpbmcgaXRzIHBlcmNlbnRhZ2VcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IFN0cmluZyhpbmRleCk7XHJcbiAgICB0ZXh0LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0gZm9udE5hbWUuYm9sZDtcclxuICAgIHRleHQuZmlsbHMgPSBbZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDI1NSAyNTUgMjU1IC8gMC44KWApKV07XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIlVzZXJzIFBlcmNlbnRcIjtcclxuICAgIHJldHVybiBmcmFtZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdGFibGVGcmFtZShvcHRzID0ge30pIHtcclxuICAgIC8vIGRlZmF1bHRzXHJcbiAgICBjb25zdCBjb2x1bW5zID0gb3B0cy5jb2x1bW5zID8gb3B0cy5jb2x1bW5zIDogW107XHJcbiAgICAvLyBjcmVhdGUgYSBmcmFtZVxyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgLy8gY3JlYXRlIGEgY29sdW1uIGZvciBlYWNoIGNvbHVtbiBpbiB0aGUgZGF0YWZyYW1lXHJcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW5GcmFtZSA9IHRhYmxlQ29sdW1uKHtcclxuICAgICAgICAgICAgcGFyZW50RnJhbWU6IGZyYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gYWRkIGEgY2VsbCBmb3IgdGhlIGNvbHVtbiBoZWFkZXJcclxuICAgICAgICBjb25zdCBjZWxsRnJhbWUgPSB0YWJsZUNlbGwoe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHQ6IHsgY2hhcmFjdGVyczogY29sdW1uIH0sXHJcbiAgICAgICAgICAgIHBhcmVudEZyYW1lOiBjb2x1bW5GcmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBsYXlvdXRcclxuICAgIGZyYW1lLm5hbWUgPSAnVGFibGUnO1xyXG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcclxuICAgIGZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gJ0hVRyc7XHJcbiAgICBmcmFtZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSAnTUlOJztcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdNSU4nO1xyXG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaXVzO1xyXG4gICAgcmV0dXJuIGZyYW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJsZUNvbHVtbihvcHRzID0ge30pIHtcclxuICAgIC8vIGRlZmF1bHRzXHJcbiAgICBjb25zdCBwYXJlbnRGcmFtZSA9IG9wdHMucGFyZW50RnJhbWUgPyBvcHRzLnBhcmVudEZyYW1lIDogbnVsbDtcclxuICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGFuZCB0ZXh0XHJcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICBpZiAocGFyZW50RnJhbWUgJiYgcGFyZW50RnJhbWUudHlwZSA9PSBcIkZSQU1FXCIpIHtcclxuICAgICAgICBwYXJlbnRGcmFtZS5hcHBlbmRDaGlsZChmcmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyBsYXlvdXQgY29sdW1uIGZyYW1lXHJcbiAgICBmcmFtZS5uYW1lID0gJ0NvbHVtbic7XHJcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ1ZFUlRJQ0FMJztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICBmcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9ICdIVUcnO1xyXG4gICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9ICdIVUcnO1xyXG4gICAgcmV0dXJuIGZyYW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJsZUNlbGwob3B0cyA9IHt9KSB7XHJcbiAgICAvLyBkZWZhdWx0c1xyXG4gICAgY29uc3QgaXNIZWFkZXIgPSBvcHRzLmhlYWRlciA/IG9wdHMuaGVhZGVyIDogZmFsc2U7XHJcbiAgICBjb25zdCB0ZXh0VmFsdWUgPSBvcHRzLnRleHQgJiYgb3B0cy50ZXh0LmNoYXJhY3RlcnMgPyBvcHRzLnRleHQuY2hhcmFjdGVycyA6ICcnO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZSA9IG9wdHMucGVyY2VudGFnZSA/IG9wdHMucGVyY2VudGFnZSA6IDA7XHJcbiAgICBjb25zdCBwYXJlbnRGcmFtZSA9IG9wdHMucGFyZW50RnJhbWUgPyBvcHRzLnBhcmVudEZyYW1lIDogbnVsbDtcclxuICAgIC8vIGFkZGluZyBhIHRleHQgdG8gdGhlIGZyYW1lIHJlZmVyZW5jaW5nIGl0cyBwZXJjZW50YWdlXHJcbiAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAvLyBhcHBlbmRpbmcgdG8gY29sdW1uIGZyYW1lXHJcbiAgICBpZiAocGFyZW50RnJhbWUgJiYgcGFyZW50RnJhbWUudHlwZSA9PSBcIkZSQU1FXCIpIHtcclxuICAgICAgICBwYXJlbnRGcmFtZS5hcHBlbmRDaGlsZChmcmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyBsYXlvdXQgb3V0ZXIgZnJhbWVcclxuICAgIGZyYW1lLm5hbWUgPSAnQ2VsbCc7XHJcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ1ZFUlRJQ0FMJztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ01JTic7XHJcbiAgICBmcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9ICdIVUcnO1xyXG4gICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9ICdGSUxMJztcclxuICAgIHNldFBhZGRpbmcoZnJhbWUsIDEwKTtcclxuICAgIGlmIChpc0hlYWRlcilcclxuICAgICAgICBmcmFtZS5maWxscyA9IFtmaWdtYS51dGlsLnNvbGlkUGFpbnQoZmlnbWEudXRpbC5yZ2JhKGByZ2IoMCAwIDAgLyAxKWApKV07XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDI1NSAwIDAgLyAke3BlcmNlbnRhZ2V9KWApKV07XHJcbiAgICAvLyBsYXlvdXQgaW5uZXIgdGV4dFxyXG4gICAgY29uc3QgdGV4dHMgPSBmcmFtZS5jaGlsZHJlbjtcclxuICAgIHRleHRzLmZvckVhY2goKHRleHQpID0+IHtcclxuICAgICAgICB0ZXh0Lm5hbWUgPSAnVGV4dCc7XHJcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dFZhbHVlO1xyXG4gICAgICAgIHRleHQuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0ZXh0LmZvbnROYW1lID0gZm9udE5hbWUucmVndWxhcjtcclxuICAgICAgICBpZiAoaXNIZWFkZXIpXHJcbiAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbZmlnbWEudXRpbC5zb2xpZFBhaW50KGZpZ21hLnV0aWwucmdiYShgcmdiKDI1NSAyNTUgMjU1IC8gMSlgKSldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgW2ZpZ21hLnV0aWwuc29saWRQYWludChmaWdtYS51dGlsLnJnYmEoYHJnYigwIDAgMCAvIDAuOClgKSldO1xyXG4gICAgICAgIHRleHQucmVzaXplKDUwLCAxMCk7XHJcbiAgICAgICAgdGV4dC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9ICdIVUcnO1xyXG4gICAgICAgIHRleHQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9ICdIVUcnO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZnJhbWU7XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjc3ZGaWxlUmVhZCwgY3N2UGFyc2UgfSBmcm9tICcuLi9jc3YtZmlsZSc7XHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tICcuL2hlYXRtYXAtbGF5b3V0JztcclxuLy8gY3JlYXRlcyB0aGUgaGVhdG1hcFxyXG5leHBvcnQgZnVuY3Rpb24gaGVhdG1hcEdlbmVyYXRlKG1zZywgZGF0YSA9IHt9KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWF0bWFwIGdlbmVyYXRlJyk7XHJcbiAgICAgICAgY29uc3QgY3N2RmlsZSA9IHlpZWxkIGNzdkZpbGVSZWFkKGRhdGEgPSB7IHBvc3RNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICBjb25zdCBkYXRhRnJhbWUgPSB5aWVsZCBjc3ZQYXJzZShjc3ZGaWxlKTtcclxuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlUGFkZGluZyA9IDUwO1xyXG4gICAgICAgIC8vIHNlbGVjdGVkIEZyYW1lXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGcmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkRnJhbWUgfHwgc2VsZWN0ZWRGcmFtZS50eXBlICE9IFwiRlJBTUVcIikge1xyXG4gICAgICAgICAgICBhbGVydCgnTm8gZnJhbWUgc2VsZWN0ZWQhIFNlbGVjdCBvbmUgdG8gY29udGludWUuJyk7IC8vIHRvZG86IHRvYXN0XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbG9hZCB0aGUgZm9udHMgZmlyc3RcclxuICAgICAgICB5aWVsZCBsb2FkRm9udHMoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYSB0YWJsZSBvYmplY3RcclxuICAgICAgICBsZXQgdGFibGUgPSBbXTtcclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggY29sdW1ucyBhbmQgYWRkIHRoZW0gdG8gdGFibGUgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFGcmFtZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSB7IGNvbHVtbjogJycsIGl0ZW1zOiBbXSB9O1xyXG4gICAgICAgICAgICBzZXJpZXMuY29sdW1uID0gZGF0YUZyYW1lLmNvbHVtbnNbaV07XHJcbiAgICAgICAgICAgIC8vIGZvciBlYWNoIHJvdywgZ2V0IHRoZSBjb2x1bW4gY29ycmVzcG9uZGluZyB0byB0aGUgW2ldIGNvbHVtblxyXG4gICAgICAgICAgICBzZXJpZXMuaXRlbXMgPSBkYXRhRnJhbWUuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVtkYXRhRnJhbWUuY29sdW1uc1tpXV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YWJsZS5wdXNoKHNlcmllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNyZWF0ZSB0YWJsZSBmcmFtZVxyXG4gICAgICAgIGNvbnN0IHRhYmxlRnJhbWUgPSBsYXlvdXQudGFibGVGcmFtZSh7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGRhdGFGcmFtZS5jb2x1bW5zXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9kZXMucHVzaCh0YWJsZUZyYW1lKTtcclxuICAgICAgICAvKiBsb29wIHRocm91Z2ggcm93cyB0byBjcmVhdGUgZnJhbWVzICovXHJcbiAgICAgICAgZGF0YUZyYW1lLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGl0ZW1bXCJVc2VycyBQZXJjZW50XCJdO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzaXplIGl0IG92ZXIgc2VsZWN0ZWQgZnJhbWUgbWF0Y2hlZCBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRnJhbWUudHlwZSA9PSBcIkZSQU1FXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRGcmFtZVNwb3ROb2RlcyA9IHNlbGVjdGVkRnJhbWUuZmluZEFsbChuID0+IG4ubmFtZSA9PT0gaXRlbVsnRGVzdGluYXRpb24gUGFnZSddKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZyYW1lU3BvdE5vZGVzLmZvckVhY2goKHNwb3ROb2RlLCBtYXRjaEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNwb3RGcmFtZSBmb3IgZWFjaCBtYXRjaGluZyBzcG90Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BvdEZyYW1lID0gbGF5b3V0LnNwb3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcIkRlc3RpbmF0aW9uIFBhZ2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNwb3QgZnJhbWUgdG8gc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goc3BvdEZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzaXplcyBhbmQgbW92ZXMgdGhlIG9yaWdpbmFsIGZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwb3RGcmFtZS54ID0gc3BvdE5vZGUuYWJzb2x1dGVCb3VuZGluZ0JveC54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcG90RnJhbWUueSA9IHNwb3ROb2RlLmFic29sdXRlQm91bmRpbmdCb3gueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BvdEZyYW1lLnJlc2l6ZShzcG90Tm9kZS53aWR0aCwgc3BvdE5vZGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgZWFjaCBjb2x1bW4gZm9yIHRoaXMgcm93IGluIHRoZSB0YWJsZSBmcmFtZVxyXG4gICAgICAgICAgICAgICAgZGF0YUZyYW1lLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCB0YWJsZSBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbEZyYW1lID0gbGF5b3V0LnRhYmxlQ2VsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHsgY2hhcmFjdGVyczogU3RyaW5nKGl0ZW1bY29sdW1uXSkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogcGVyY2VudGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RnJhbWU6IHRhYmxlRnJhbWUuY2hpbGRyZW5bY29sdW1uSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvLyBtb3ZlIHRhYmxlIHRvIHRoZSByaWdodCBvZiB0aGUgc2VsZWN0aW9uIGZyYW1lXHJcbiAgICAgICAgdGFibGVGcmFtZS54ID0gc2VsZWN0ZWRGcmFtZS5hYnNvbHV0ZUJvdW5kaW5nQm94LnggKyBzZWxlY3RlZEZyYW1lLmFic29sdXRlQm91bmRpbmdCb3gud2lkdGggKyB0YWJsZVBhZGRpbmc7XHJcbiAgICAgICAgdGFibGVGcmFtZS55ID0gc2VsZWN0ZWRGcmFtZS5hYnNvbHV0ZUJvdW5kaW5nQm94Lnk7XHJcbiAgICAgICAgLy8gY29weSBzZWxlY3RlZCBmcmFtZSBhbmQgbWFuaXB1bGF0ZSBpdFxyXG4gICAgICAgIGNvbnN0IGlubmVyRnJhbWVDbG9uZSA9IHNlbGVjdGVkRnJhbWUuY2xvbmUoKTtcclxuICAgICAgICBpbm5lckZyYW1lQ2xvbmUuYmxlbmRNb2RlID0gXCJMVU1JTk9TSVRZXCI7XHJcbiAgICAgICAgaW5uZXJGcmFtZUNsb25lLm9wYWNpdHkgPSAwLjg7XHJcbiAgICAgICAgY29uc3Qgb3V0ZXJGcmFtZUNsb25lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICBvdXRlckZyYW1lQ2xvbmUucmVzaXplKGlubmVyRnJhbWVDbG9uZS53aWR0aCwgaW5uZXJGcmFtZUNsb25lLmhlaWdodCk7XHJcbiAgICAgICAgb3V0ZXJGcmFtZUNsb25lLnggPSBpbm5lckZyYW1lQ2xvbmUuYWJzb2x1dGVCb3VuZGluZ0JveC54O1xyXG4gICAgICAgIG91dGVyRnJhbWVDbG9uZS55ID0gaW5uZXJGcmFtZUNsb25lLmFic29sdXRlQm91bmRpbmdCb3gueTtcclxuICAgICAgICBvdXRlckZyYW1lQ2xvbmUuYXBwZW5kQ2hpbGQoaW5uZXJGcmFtZUNsb25lKTtcclxuICAgICAgICAvLyBvdXRlckZyYW1lQ2xvbmUuYmxlbmRNb2RlID0gXCJOT1JNQUxcIjtcclxuICAgICAgICBpbm5lckZyYW1lQ2xvbmUueCA9IDA7XHJcbiAgICAgICAgaW5uZXJGcmFtZUNsb25lLnkgPSAwO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICBub2Rlcy5wdXNoKG91dGVyRnJhbWVDbG9uZSk7XHJcbiAgICAgICAgLy8gZ3JvdXAgY3JlYXRlZCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICAvLyBjb25zdCBwYXJlbnRDaGlsZHJlbkxlbmd0aCA9IHNlbGVjdGVkRnJhbWVDbG9uZS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIC8vIGNvbnN0IHpJbmRleCA9IHNlbGVjdGVkRnJhbWVDbG9uZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihzZWxlY3RlZEZyYW1lQ2xvbmUpO1xyXG4gICAgICAgIC8vIGFkZCBmcmFtZSB0byB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXHJcbiAgICAgICAgb3V0ZXJGcmFtZUNsb25lLnBhcmVudC5pbnNlcnRDaGlsZCgwLCBvdXRlckZyYW1lQ2xvbmUpO1xyXG4gICAgICAgIC8vIHpvb20gdG8gbm9kZXNcclxuICAgICAgICAvLyBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcclxuICAgICAgICAvLyBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtncm91cF07XHJcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cF0pO1xyXG4gICAgICAgIC8vIGNsb3NlIHBsdWdpblxyXG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBsb2FkRm9udHMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobmFtZSwgdmFsdWUpIHtcclxuICAgIC8qIGZpZ3VyZXMgb3V0IGluIHdoaWNoIHRocmVhZCB0aGUgc2NyaXB0IGlzIHJ1bm5pbmcgYmFzZWQgb24gd2hpY2ggZ2xvYmFsIHZhcmlhYmxlIGlzIGF2YWlsYWJsZSAqL1xyXG4gICAgbGV0IG9yaWdpbjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGZpZ21hKVxyXG4gICAgICAgICAgICBvcmlnaW4gPSAncGx1Z2luJzsgLyogaXQncyBpbiB0aGUgcGx1Z2luIHRocmVhZCAqL1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikgeyB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChwYXJlbnQpXHJcbiAgICAgICAgICAgIG9yaWdpbiA9ICd1aSc7IC8qIGl0J3MgaW4gdGhlIHVpIHRocmVhZCAqL1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikgeyB9XHJcbiAgICAvKiBzZW5kcyB0aGUgbWVzc2FnZSB2aWEgZmlnbWEgZ2xvYmFsIG9iamVjdCwgaWYgaXRzIGluIHRoZSBwbHVnaW4gdGhyZWFkICovXHJcbiAgICBpZiAob3JpZ2luID09ICdwbHVnaW4nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSB9KTtcclxuICAgIH1cclxuICAgIC8qIHNlbmRzIHRoZSBtZXNzYWdlIHZpYSBwYXJlbnQgLyB3aW5kb3cgZ2xvYmFsIG9iamVjdCwgaWYgaXRzIGluIHRoZSB1aSB0aHJlYWQgKi9cclxuICAgIGVsc2UgaWYgKG9yaWdpbiA9PSAndWknKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0gfSwgXCIqXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL3BsdWdpbi9tYWluJztcclxubWFpbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=