!function(){var t={},e=function(e){for(var n=t[e],r=n.deps,i=n.defn,a=r.length,c=new Array(a),u=0;u<a;++u)c[u]=o(r[u]);var l=i.apply(null,c);if(void 0===l)throw"module ["+e+"] returned undefined";n.instance=l},n=function(e,n,o){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===o)throw"no definition function for "+e;t[e]={deps:n,defn:o,instance:void 0}},o=function(n){var o=t[n];if(void 0===o)throw"module ["+n+"] was undefined";return void 0===o.instance&&e(n),o.instance},r=function(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;++i)r.push(o(t[i]));e.apply(null,e)};({}).bolt={module:{api:{define:n,require:r,demand:o}}};var i=n,a=function(t,e){i(t,[],function(){return e})};a("1",tinymce.PluginManager),a("2",tinymce.Env),a("3",tinymce.util.Promise),a("4",tinymce.util.URI),a("5",tinymce.util.Tools),a("6",tinymce.util.Delay),i("m",[],function(){function t(t,e){return o(document.createElement("canvas"),t,e)}function e(t){return t.getContext("2d")}function n(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(t){}return e||(e=null),e}function o(t,e,n){return t.width=e,t.height=n,t}return{create:t,resize:o,get2dContext:e,get3dContext:n}}),i("n",[],function(){function t(t){return t.naturalWidth||t.width}function e(t){return t.naturalHeight||t.height}return{getWidth:t,getHeight:e}}),i("o",[],function(){function t(t,e){return function(){t.apply(e,arguments)}}function e(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(e,t(o,this),t(r,this))}function n(t){var e=this;return null===this._state?void this._deferreds.push(t):void u(function(){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return void(e._state?t.resolve:t.reject)(e._value);var o;try{o=n(e._value)}catch(e){return void t.reject(e)}t.resolve(o)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void c(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,i.call(this)}catch(t){r.call(this,t)}}function r(t){this._state=!1,this._value=t,i.call(this)}function i(){for(var t=0,e=this._deferreds.length;t<e;t++)n.call(this,this._deferreds[t]);this._deferreds=null}function a(t,e,n,o){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=o}function c(t,e,n){var o=!1;try{t(function(t){o||(o=!0,e(t))},function(t){o||(o=!0,n(t))})}catch(t){if(o)return;o=!0,n(t)}}if(window.Promise)return window.Promise;var u=e.immediateFn||"function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)},l=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};return e.prototype["catch"]=function(t){return this.then(null,t)},e.prototype.then=function(t,o){var r=this;return new e(function(e,i){n.call(r,new a(t,o,e,i))})},e.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new e(function(e,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(t){o(i,t)},n)}t[i]=a,0==--r&&e(t)}catch(t){n(t)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},e.resolve=function(t){return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){return new e(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},e}),i("p",[],function(){function t(t){var e=document.createElement("a");return e.href=t,e.pathname}function e(e){var n=t(e).split("."),o=n[n.length-1],r={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png"};return o&&(o=o.toLowerCase()),r[o]}return{guessMimeType:e}}),i("e",["o","m","p","n"],function(t,e,n,o){function r(e){return new t(function(t){function n(){e.removeEventListener("load",n),t(e)}e.complete?t(e):e.addEventListener("load",n)})}function i(t){return r(t).then(function(t){var n,r;return r=e.create(o.getWidth(t),o.getHeight(t)),n=e.get2dContext(r),n.drawImage(t,0,0),r})}function a(t){return r(t).then(function(t){var e=t.src;return 0===e.indexOf("blob:")?u(e):0===e.indexOf("data:")?l(e):i(t).then(function(t){return l(t.toDataURL(n.guessMimeType(e)))})})}function c(e){return new t(function(t){function n(){o.removeEventListener("load",n),t(o)}var o=new Image;o.addEventListener("load",n),o.src=URL.createObjectURL(e),o.complete&&n()})}function u(e){return new t(function(t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(){200==this.status&&t(this.response)},n.send()})}function l(e){return new t(function(t){var n,o,r,i,a,c;if(e=e.split(","),i=/data:([^;]+)/.exec(e[0]),i&&(a=i[1]),n=atob(e[1]),window.WebKitBlobBuilder){for(c=new WebKitBlobBuilder,o=new ArrayBuffer(n.length),r=0;r<o.length;r++)o[r]=n.charCodeAt(r);return c.append(o),void t(c.getBlob(a))}for(o=new Uint8Array(n.length),r=0;r<o.length;r++)o[r]=n.charCodeAt(r);t(new Blob([o],{type:a}))})}function s(t){return 0===t.indexOf("blob:")?u(t):0===t.indexOf("data:")?l(t):null}function f(t,e){return l(t.toDataURL(e))}function d(e){return new t(function(t){var n=new FileReader;n.onloadend=function(){t(n.result)},n.readAsDataURL(e)})}function h(t){return d(t).then(function(t){return t.split(",")[1]})}function p(t){URL.revokeObjectURL(t.src)}return{blobToImage:c,imageToBlob:a,blobToDataUri:d,blobToBase64:h,imageToCanvas:i,canvasToBlob:f,revokeImageUrl:p,uriToBlob:s}}),i("q",[],function(){function t(t,e,n){return t=parseFloat(t),t>n?t=n:t<e&&(t=e),t}function e(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]}function n(t,e){var n,o,r,i,a=[],c=new Array(10);for(n=0;n<5;n++){for(o=0;o<5;o++)a[o]=e[o+5*n];for(o=0;o<5;o++){for(i=0,r=0;r<5;r++)i+=t[o+5*r]*a[r];c[o+5*n]=i}}return c}function o(e,n){return n=t(n,0,1),e.map(function(e,o){return o%6==0?e=1-(1-e)*n:e*=n,t(e,0,1)})}function r(e,o){var r;return o=t(o,-1,1),o*=100,o<0?r=127+o/100*127:(r=o%1,r=0===r?f[o]:f[Math.floor(o)]*(1-r)+f[Math.floor(o)+1]*r,r=127*r+127),n(e,[r/127,0,0,0,.5*(127-r),0,r/127,0,0,.5*(127-r),0,0,r/127,0,.5*(127-r),0,0,0,1,0,0,0,0,0,1])}function i(e,o){var r,i,a,c;return o=t(o,-1,1),r=1+(o>0?3*o:o),i=.3086,a=.6094,c=.082,n(e,[i*(1-r)+r,a*(1-r),c*(1-r),0,0,i*(1-r),a*(1-r)+r,c*(1-r),0,0,i*(1-r),a*(1-r),c*(1-r)+r,0,0,0,0,0,1,0,0,0,0,0,1])}function a(e,o){var r,i,a,c,u;return o=t(o,-180,180)/180*Math.PI,r=Math.cos(o),i=Math.sin(o),a=.213,c=.715,u=.072,n(e,[a+r*(1-a)+i*-a,c+r*-c+i*-c,u+r*-u+i*(1-u),0,0,a+r*-a+.143*i,c+r*(1-c)+.14*i,u+r*-u+-.283*i,0,0,a+r*-a+i*-(1-a),c+r*-c+i*c,u+r*(1-u)+i*u,0,0,0,0,0,1,0,0,0,0,0,1])}function c(e,o){return o=t(255*o,-255,255),n(e,[1,0,0,0,o,0,1,0,0,o,0,0,1,0,o,0,0,0,1,0,0,0,0,0,1])}function u(e,o,r,i){return o=t(o,0,2),r=t(r,0,2),i=t(i,0,2),n(e,[o,0,0,0,0,0,r,0,0,0,0,0,i,0,0,0,0,0,1,0,0,0,0,0,1])}function l(e,r){return r=t(r,0,1),n(e,o([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],r))}function s(e,r){return r=t(r,0,1),n(e,o([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],r))}var f=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];return{identity:e,adjust:o,multiply:n,adjustContrast:r,adjustBrightness:c,adjustSaturation:i,adjustHue:a,adjustColors:u,adjustSepia:l,adjustGrayscale:s}}),i("c",["m","n","e","q"],function(t,e,n,o){function r(o,r){return n.blobToImage(o).then(function(o){function i(t,e){var n,o,r,i,a,c=t.data,u=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],m=e[8],v=e[9],y=e[10],b=e[11],w=e[12],x=e[13],I=e[14],k=e[15],R=e[16],T=e[17],B=e[18],C=e[19];for(a=0;a<c.length;a+=4)n=c[a],o=c[a+1],r=c[a+2],i=c[a+3],c[a]=n*u+o*l+r*s+i*f+d,c[a+1]=n*h+o*p+r*g+i*m+v,c[a+2]=n*y+o*b+r*w+i*x+I,c[a+3]=n*k+o*R+r*T+i*B+C;return t}var a,c=t.create(e.getWidth(o),e.getHeight(o)),u=t.get2dContext(c);return u.drawImage(o,0,0),s(o),a=i(u.getImageData(0,0,c.width,c.height),r),u.putImageData(a,0,0),n.canvasToBlob(c)})}function i(o,r){return n.blobToImage(o).then(function(o){function i(t,e,n){function o(t,e,n){return t>n?t=n:t<e&&(t=e),t}var r,i,a,c,u,l,s,f,d,h,p,g,m,v,y,b,w;for(a=Math.round(Math.sqrt(n.length)),c=Math.floor(a/2),r=t.data,i=e.data,b=t.width,w=t.height,l=0;l<w;l++)for(u=0;u<b;u++){for(s=f=d=0,p=0;p<a;p++)for(h=0;h<a;h++)g=o(u+h-c,0,b-1),m=o(l+p-c,0,w-1),v=4*(m*b+g),y=n[p*a+h],s+=r[v]*y,f+=r[v+1]*y,d+=r[v+2]*y;v=4*(l*b+u),i[v]=o(s,0,255),i[v+1]=o(f,0,255),i[v+2]=o(d,0,255)}return e}var a,c,u=t.create(e.getWidth(o),e.getHeight(o)),l=t.get2dContext(u);return l.drawImage(o,0,0),s(o),a=l.getImageData(0,0,u.width,u.height),c=l.getImageData(0,0,u.width,u.height),c=i(a,c,r),l.putImageData(c,0,0),n.canvasToBlob(u)})}function a(o){return function(r,i){return n.blobToImage(r).then(function(r){function a(t,e){var n,o=t.data;for(n=0;n<o.length;n+=4)o[n]=e[o[n]],o[n+1]=e[o[n+1]],o[n+2]=e[o[n+2]];return t}var c,u,l=t.create(e.getWidth(r),e.getHeight(r)),f=t.get2dContext(l),d=new Array(256);for(u=0;u<d.length;u++)d[u]=o(u,i);return f.drawImage(r,0,0),s(r),c=a(f.getImageData(0,0,l.width,l.height),d),f.putImageData(c,0,0),n.canvasToBlob(l)})}}function c(t){return function(e,n){return r(e,t(o.identity(),n))}}function u(t){return function(e){return r(e,t)}}function l(t){return function(e){return i(e,t)}}var s=n.revokeImageUrl;return{invert:u([-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0]),brightness:c(o.adjustBrightness),hue:c(o.adjustHue),saturate:c(o.adjustSaturation),contrast:c(o.adjustContrast),grayscale:c(o.adjustGrayscale),sepia:c(o.adjustSepia),colorize:function(t,e,n,i){return r(t,o.adjustColors(o.identity(),e,n,i))},sharpen:l([0,-1,0,-1,5,-1,0,-1,0]),emboss:l([-2,-1,0,-1,1,1,0,1,2]),gamma:a(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:a(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:r,convoluteFilter:i}}),i("r",["o","e","m","n"],function(t,e,n,o){function r(t,e,n){var a=o.getWidth(t),c=o.getHeight(t),u=e/a,l=n/c,s=!1;(u<.5||u>2)&&(u=u<.5?.5:2,s=!0),(l<.5||l>2)&&(l=l<.5?.5:2,s=!0);var f=i(t,u,l);return s?f.then(function(t){return r(t,e,n)}):f}function i(e,r,i){return new t(function(t){var a=o.getWidth(e),c=o.getHeight(e),u=Math.floor(a*r),l=Math.floor(c*i),s=n.create(u,l);n.get2dContext(s).drawImage(e,0,0,a,c,0,0,u,l),t(s)})}return{scale:r}}),i("d",["e","m","n","r"],function(t,e,n,o){function r(o,r){return t.blobToImage(o).then(function(i){var a=e.create(n.getWidth(i),n.getHeight(i)),c=e.get2dContext(a),l=0,s=0;return r=r<0?360+r:r,90!=r&&270!=r||e.resize(a,a.height,a.width),90!=r&&180!=r||(l=a.width),270!=r&&180!=r||(s=a.height),c.translate(l,s),c.rotate(r*Math.PI/180),c.drawImage(i,0,0),u(i),t.canvasToBlob(a,o.type)})}function i(o,r){return t.blobToImage(o).then(function(o){var i=e.create(n.getWidth(o),n.getHeight(o)),a=e.get2dContext(i);return"v"==r?(a.scale(1,-1),a.drawImage(o,0,-i.height)):(a.scale(-1,1),a.drawImage(o,-i.width,0)),u(o),t.canvasToBlob(i)})}function a(n,o,r,i,a){return t.blobToImage(n).then(function(n){var c=e.create(i,a);return e.get2dContext(c).drawImage(n,-o,-r),u(n),t.canvasToBlob(c)})}function c(e,n,r){return t.blobToImage(e).then(function(i){return o.scale(i,n,r).then(function(n){return t.canvasToBlob(n,e.type)}).then(l(i))["catch"](l(i))})}var u=t.revokeImageUrl,l=function(t){return function(e){return u(t),e}};return{rotate:r,flip:i,crop:a,resize:c}}),i("7",["c","d"],function(t,e){var n=function(e){return t.invert(e)},o=function(e){return t.sharpen(e)},r=function(e){return t.emboss(e)},i=function(e,n){return t.gamma(e,n)},a=function(e,n){return t.exposure(e,n)},c=function(e,n,o,r){return t.colorize(e,n,o,r)};return{invert:n,sharpen:o,emboss:r,brightness:function(e,n){return t.brightness(e,n)},hue:function(e,n){return t.hue(e,n)},saturate:function(e,n){return t.saturate(e,n)},contrast:function(e,n){return t.contrast(e,n)},grayscale:function(e,n){return t.grayscale(e,n)},sepia:function(e,n){return t.sepia(e,n)},colorize:c,gamma:i,exposure:a,flip:function(t,n){return e.flip(t,n)},crop:function(t,n,o,r,i){return e.crop(t,n,o,r,i)},resize:function(t,n,o){return e.resize(t,n,o)},rotate:function(t,n){return e.rotate(t,n)}}}),i("8",["e"],function(t){return{blobToImage:function(e){return t.blobToImage(e)},imageToBlob:function(e){return t.imageToBlob(e)},blobToDataUri:function(e){return t.blobToDataUri(e)},blobToBase64:function(e){return t.blobToBase64(e)}}}),a("f",tinymce.dom.DOMUtils),a("g",tinymce.ui.Factory),a("h",tinymce.ui.Form),a("i",tinymce.ui.Container),a("s",tinymce.ui.Control),a("t",tinymce.ui.DragHelper),a("u",tinymce.geom.Rect),a("w",tinymce.dom.DomQuery),a("x",tinymce.util.Observable),a("y",tinymce.util.VK),i("v",["w","t","u","5","x","y"],function(t,e,n,o,r,i){var a=0;return function(c,u,l,s,f){function d(t,e){return{x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}}function h(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function p(){return h(l,c)}function g(t,e,o,r){var i,a,u,s,f;i=e.x,a=e.y,u=e.w,s=e.h,i+=o*t.deltaX,a+=r*t.deltaY,u+=o*t.deltaW,s+=r*t.deltaH,u<20&&(u=20),s<20&&(s=20),f=c=n.clamp({x:i,y:a,w:u,h:s},l,"move"==t.name),f=h(l,f),R.fire("updateRect",{rect:f}),x(f)}function m(){function n(t){var n;return new e(z,{document:s.ownerDocument,handle:z+"-"+t.name,start:function(){n=c},drag:function(e){g(t,n,e.deltaX,e.deltaY)}})}t('<div id="'+z+'" class="'+M+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(s),o.each(C,function(e){t("#"+z,s).append('<div id="'+z+"-"+e+'"class="'+M+'croprect-block" style="display: none" data-mce-bogus="all">')}),o.each(T,function(e){t("#"+z,s).append('<div id="'+z+"-"+e.name+'" class="'+M+"croprect-handle "+M+"croprect-handle-"+e.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+e.label+'" aria-grabbed="false">')}),B=o.map(T,n),y(c),t(s).on("focusin focusout",function(e){t(e.target).attr("aria-grabbed","focus"===e.type)}),t(s).on("keydown",function(t){function e(t,e,o,r,i){t.stopPropagation(),t.preventDefault(),g(n,o,r,i)}var n;switch(o.each(T,function(e){if(t.target.id==z+"-"+e.name)return n=e,!1}),t.keyCode){case i.LEFT:e(t,n,c,-10,0);break;case i.RIGHT:e(t,n,c,10,0);break;case i.UP:e(t,n,c,0,-10);break;case i.DOWN:e(t,n,c,0,10);break;case i.ENTER:case i.SPACEBAR:t.preventDefault(),f()}})}function v(e){var n;n=o.map(T,function(t){return"#"+z+"-"+t.name}).concat(o.map(C,function(t){return"#"+z+"-"+t})).join(","),e?t(n,s).show():t(n,s).hide()}function y(e){function n(e,n){n.h<0&&(n.h=0),n.w<0&&(n.w=0),t("#"+z+"-"+e,s).css({left:n.x,top:n.y,width:n.w,height:n.h})}o.each(T,function(n){t("#"+z+"-"+n.name,s).css({left:e.w*n.xMul+e.x,top:e.h*n.yMul+e.y})}),n("top",{x:u.x,y:u.y,w:u.w,h:e.y-u.y}),n("right",{x:e.x+e.w,y:e.y,w:u.w-e.x-e.w+u.x,h:e.h}),n("bottom",{x:u.x,y:e.y+e.h,w:u.w,h:u.h-e.y-e.h+u.y}),n("left",{x:u.x,y:e.y,w:e.x-u.x,h:e.h}),n("move",e)}function b(t){c=t,y(c)}function w(t){u=t,y(c)}function x(t){b(d(l,t))}function I(t){l=t,y(c)}function k(){o.each(B,function(t){t.destroy()}),B=[]}var R,T,B,C,M="mce-",z=M+"crid-"+a++;return T=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],C=["top","right","bottom","left"],m(s),R=o.extend({toggleVisibility:v,setClampRect:I,setRect:b,getInnerRect:p,setInnerRect:x,setViewPortRect:w,destroy:k},r)}}),i("j",["s","t","u","5","3","v"],function(t,e,n,o,r,i){function a(t){return new r(function(e){function n(){t.removeEventListener("load",n),e(t)}t.complete?e(t):t.addEventListener("load",n)})}return t.extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var e=this,o=new Image;o.src=t,a(o).then(function(){var t,r,i=e.state.get("viewRect");if(r=e.$el.find("img"),r[0])r.replaceWith(o);else{var a=document.createElement("div");a.className="mce-imagepanel-bg",e.getEl().appendChild(a),e.getEl().appendChild(o)}t={x:0,y:0,w:o.naturalWidth,h:o.naturalHeight},e.state.set("viewRect",t),e.state.set("rect",n.inflate(t,-20,-20)),i&&i.w==t.w&&i.h==t.h||e.zoomFit(),e.repaintImage(),e.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,o,r,i,a,c=this;a=10,t=c.$el.find("img"),e=c.getEl().clientWidth,n=c.getEl().clientHeight,o=t[0].naturalWidth,r=t[0].naturalHeight,i=Math.min((e-a)/o,(n-a)/r),i>=1&&(i=1),c.zoom(i)},repaintImage:function(){var t,e,n,o,r,i,a,c,u,l,s;s=this.getEl(),u=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),c=this.$el.find(".mce-imagepanel-bg"),r=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*u,o=a[0].naturalHeight*u,t=Math.max(0,r/2-n/2),e=Math.max(0,i/2-o/2),a.css({left:t,top:e,width:n,height:o}),c.css({left:t,top:e,width:n,height:o}),this.cropRect&&(this.cropRect.setRect({x:l.x*u+t,y:l.y*u+e,w:l.w*u,h:l.h*u}),this.cropRect.setClampRect({x:t,y:e,w:n,h:o}),this.cropRect.setViewPortRect({x:0,y:0,w:r,h:i}))},bindStates:function(){function t(t){e.cropRect=new i(t,e.state.get("viewRect"),e.state.get("viewRect"),e.getEl(),function(){e.fire("crop")}),e.cropRect.on("updateRect",function(t){var n=t.rect,o=e.zoom();n={x:Math.round(n.x/o),y:Math.round(n.y/o),w:Math.round(n.w/o),h:Math.round(n.h/o)},e.state.set("rect",n)}),e.on("remove",e.cropRect.destroy)}var e=this;e.state.on("change:cropEnabled",function(t){e.cropRect.toggleVisibility(t.value),e.repaintImage()}),e.state.on("change:zoom",function(){e.repaintImage()}),e.state.on("change:rect",function(n){var o=n.value;e.cropRect||t(o),e.cropRect.setRect(o)})}})}),i("k",[],function(){return function(){function t(t){var e;return e=i.splice(++a),i.push(t),{state:t,removed:e}}function e(){if(o())return i[--a]}function n(){if(r())return i[++a]}function o(){return a>0}function r(){return-1!=a&&a<i.length-1}var i=[],a=-1;return{data:i,add:t,undo:e,redo:n,canUndo:o,canRedo:r}}}),i("9",["f","5","3","g","h","i","j","7","8","k"],function(t,e,n,o,r,i,a,c,u,l){function s(t){return{blob:t,url:URL.createObjectURL(t)}}function f(t){t&&URL.revokeObjectURL(t.url)}function d(t){e.each(t,f)}function h(n,u,h){function p(t){var e,n,o,r;e=W.find("#w")[0],n=W.find("#h")[0],o=parseInt(e.value(),10),r=parseInt(n.value(),10),W.find("#constrain")[0].checked()&&at&&ct&&o&&r&&("w"==t.control.settings.name?(r=Math.round(o*ut),n.value(r)):(o=Math.round(r*lt),e.value(o))),at=o,ct=r}function g(t){return Math.round(100*t)+"%"}function m(){W.find("#undo").disabled(!st.canUndo()),W.find("#redo").disabled(!st.canRedo()),W.statusbar.find("#save").disabled(!st.canUndo())}function v(){W.find("#undo").disabled(!0),W.find("#redo").disabled(!0)}function y(t){t&&q.imageSrc(t.url)}function b(t){return function(){var n=e.grep(it,function(e){return e.settings.name!=t});e.each(n,function(t){t.hide()}),t.show(),t.focus()}}function w(t){L=s(t),y(L)}function x(t){n=s(t),y(n),d(st.add(n).removed),m()}function I(){var t=q.selection();c.crop(n.blob,t.x,t.y,t.w,t.h).then(function(t){x(t),T()})}function k(t){var e=[].slice.call(arguments,1);return function(){var o=L||n;t.apply(this,[o.blob].concat(e)).then(w)}}function R(t){var e=[].slice.call(arguments,1);return function(){t.apply(this,[n.blob].concat(e)).then(x)}}function T(){y(n),f(L),b(D)(),m()}function B(){L&&(x(L.blob),T())}function C(){var t=q.zoom();t<2&&(t+=.1),q.zoom(t)}function M(){var t=q.zoom();t>.1&&(t-=.1),q.zoom(t)}function z(){n=st.undo(),y(n),m()}function U(){n=st.redo(),y(n),m()}function j(){u(n.blob),W.close()}function H(t){return new r({layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}function A(t,e){return H([{text:"Back",onclick:T},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:B}]).hide().on("show",function(){v(),e(n.blob).then(function(t){var e=s(t);y(e),f(L),L=e})})}function E(t,e,o,r,i){function a(t){e(n.blob,t).then(function(t){var e=s(t);y(e),f(L),L=e})}return H([{text:"Back",onclick:T},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){a(t.value)},minValue:r,maxValue:i,value:o,previewFilter:g},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:B}]).hide().on("show",function(){this.find("slider").value(o),v()})}function S(t,e){function o(){var t,o,r;t=W.find("#r")[0].value(),o=W.find("#g")[0].value(),r=W.find("#b")[0].value(),e(n.blob,t,o,r).then(function(t){var e=s(t);y(e),f(L),L=e})}return H([{text:"Back",onclick:T},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:g},{type:"slider",label:"G",name:"g",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:g},{type:"slider",label:"B",name:"b",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:g},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:B}]).hide().on("show",function(){W.find("#r,#g,#b").value(1),v()})}function _(t){!0===t.control.value()&&(ut=ct/at,lt=at/ct)}var W,D,F,L,O,P,V,q,G,N,X,$,Y,J,K,Z,Q,tt,et,nt,ot,rt,it,at,ct,ut,lt,st=new l;O=H([{text:"Back",onclick:T},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:I}]).hide().on("show hide",function(t){q.toggleCropRect("show"==t.type)}).on("show",v),P=H([{text:"Back",onclick:T},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:p},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:p},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:_},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}]).hide().on("submit",function(t){var e=parseInt(W.find("#w").value(),10),n=parseInt(W.find("#h").value(),10);t.preventDefault(),R(c.resize,e,n)(),T()}).on("show",v),V=H([{text:"Back",onclick:T},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:k(c.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:k(c.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:k(c.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:k(c.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:B}]).hide().on("show",v),X=A("Invert",c.invert),et=A("Sharpen",c.sharpen),nt=A("Emboss",c.emboss),$=E("Brightness",c.brightness,0,-1,1),Y=E("Hue",c.hue,180,0,360),J=E("Saturate",c.saturate,0,-1,1),K=E("Contrast",c.contrast,0,-1,1),Z=E("Grayscale",c.grayscale,0,0,1),Q=E("Sepia",c.sepia,0,0,1),tt=S("Colorize",c.colorize),ot=E("Gamma",c.gamma,0,-1,1),rt=E("Exposure",c.exposure,1,0,2),F=H([{text:"Back",onclick:T},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:b(Y)},{text:"saturate",icon:"saturate",onclick:b(J)},{text:"sepia",icon:"sepia",onclick:b(Q)},{text:"emboss",icon:"emboss",onclick:b(nt)},{text:"exposure",icon:"exposure",onclick:b(rt)},{type:"spacer",flex:1}]).hide(),D=H([{tooltip:"Crop",icon:"crop",onclick:b(O)},{tooltip:"Resize",icon:"resize2",onclick:b(P)},{tooltip:"Orientation",icon:"orientation",onclick:b(V)},{tooltip:"Brightness",icon:"sun",onclick:b($)},{tooltip:"Sharpen",icon:"sharpen",onclick:b(et)},{tooltip:"Contrast",icon:"contrast",onclick:b(K)},{tooltip:"Color levels",icon:"drop",onclick:b(tt)},{tooltip:"Gamma",icon:"gamma",onclick:b(ot)},{tooltip:"Invert",icon:"invert",onclick:b(X)}]),q=new a({flex:1,imageSrc:n.url}),G=new i({layout:"flex",direction:"column",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:z},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:U},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:C},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:M}]}),N=new i({type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:[G,q]}),it=[D,O,P,V,F,X,$,Y,J,K,Z,Q,tt,et,nt,ot,rt],W=o.create("window",{layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(t.DOM.getViewPort().w,800),minHeight:Math.min(t.DOM.getViewPort().h,650),title:"Edit image",items:it.concat([N]),buttons:[{text:"Save",name:"save",subtype:"primary",onclick:j},{text:"Cancel",onclick:"close"}]}),W.renderTo(document.body).reflow(),W.on("close",function(){h(),d(st.data),st=null,L=null}),st.add(n),m(),q.on("load",function(){at=q.imageSize().w,ct=q.imageSize().h,ut=ct/at,lt=at/ct,W.find("#w").value(at),W.find("#h").value(ct)}),q.on("crop",I)}function p(t){return new n(function(e,n){h(s(t),e,n)})}return{edit:p}}),i("a",[],function(){function t(t){function e(t){return/^[0-9\.]+px$/.test(t)}var n,o;return n=t.style.width,o=t.style.height,n||o?e(n)&&e(o)?{w:parseInt(n,10),h:parseInt(o,10)}:null:(n=t.width,o=t.height,n&&o?{w:parseInt(n,10),h:parseInt(o,10)}:null)}function e(t,e){var n,o;e&&(n=t.style.width,o=t.style.height,(n||o)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,o=t.height,(n||o)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))}function n(t){return{w:t.naturalWidth,h:t.naturalHeight}}return{getImageSize:t,setImageSize:e,getNaturalImageSize:n}}),i("l",["3","5"],function(t,e){var n=function(t){return null!==t&&void 0!==t},o=function(t,e){var o;return o=e.reduce(function(t,e){return n(t)?t[e]:void 0},t),n(o)?o:null},r=function(n,o){return new t(function(t){var r;r=new XMLHttpRequest,r.onreadystatechange=function(){4===r.readyState&&t({status:r.status,blob:this.response})},r.open("GET",n,!0),e.each(o,function(t,e){r.setRequestHeader(e,t)}),r.responseType="blob",r.send()})};return{traverse:o,readBlob:function(e){return new t(function(t){var n=new FileReader;n.onload=function(e){var n=e.target;t(n.result)},n.readAsText(e)})},requestUrlAsBlob:r,parseJson:function(t){var e;try{e=JSON.parse(t)}catch(t){}return e}}}),i("b",["3","5","l"],function(t,e,n){function o(e){return n.requestUrlAsBlob(e,{}).then(function(e){return e.status>=400?i(e.status):t.resolve(e.blob)})}var r=function(t){return 400===t||403===t||500===t},i=function(e){return t.reject("ImageProxy HTTP error: "+e)},a=function(e){t.reject("ImageProxy Service error: "+e)},c=function(t,e){return n.readBlob(e).then(function(t){var e=n.parseJson(t),o=n.traverse(e,["error","type"]);return a(o||"Invalid JSON")})},u=function(t,e){return r(t)?c(t,e):i(t)},l=function(e,o){return n.requestUrlAsBlob(e,{"Content-Type":"application/json;charset=UTF-8","tiny-api-key":o}).then(function(e){return e.status>=400?u(e.status,e.blob):t.resolve(e.blob)})};return{getUrl:function(t,e){return e?l(t,e):o(t)}}}),i("0",["1","2","3","4","5","6","7","8","9","a","b"],function(t,e,n,o,r,i,a,c,u,l,s){var f=function(t){function f(e){t.notificationManager.open({text:e,type:"error"})}function d(){return t.selection.getNode()}function h(e){var n=e.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i);return n?t.dom.encode(n[1]):null}function p(){return"imagetools"+A++}function g(e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new o(n).host===t.documentBaseURI.host}function m(e){return-1!==r.inArray(t.settings.imagetools_cors_hosts,new o(e.src).host)}function v(){return t.settings.api_key||t.settings.imagetools_api_key}function y(e){var n,o=e.src;return m(e)?s.getUrl(e.src,null):g(e)?c.imageToBlob(e):(o=t.settings.imagetools_proxy,o+=(-1===o.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),n=v(),s.getUrl(o,n))}function b(){var e;return e=t.editorUpload.blobCache.getByUri(d().src),e?e.blob():y(d())}function w(){j=i.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()},t.settings.images_upload_timeout||3e4)}function x(){clearTimeout(j)}function I(e,n){return c.blobToDataUri(e).then(function(r){var i,a,c,u,l,s;return s=d(),u=t.editorUpload.blobCache,l=u.getByUri(s.src),c=o.parseDataUri(r).data,i=p(),t.settings.images_reuse_filename&&(a=l?l.filename():h(s.src)),l=u.create(i,e,c,a),u.add(l),t.undoManager.transact(function(){function e(){t.$(s).off("load",e),t.nodeChanged(),n?t.editorUpload.uploadImagesAuto():(x(),w())}t.$(s).on("load",e),t.$(s).attr({src:l.blobUri()}).removeAttr("data-mce-src")}),l})}function k(e){return function(){return t._scanForImages().then(b).then(e).then(I,f)}}function R(t){return function(){return k(function(e){var n=l.getImageSize(d());return n&&l.setImageSize(d(),{w:n.h,h:n.w}),a.rotate(e,t)})()}}function T(t){return function(){return k(function(e){return a.flip(e,t)})()}}function B(){var t=d(),e=l.getNaturalImageSize(t),o=function(o){return new n(function(n){c.blobToImage(o).then(function(r){var i=l.getNaturalImageSize(r);e.w==i.w&&e.h==i.h||l.getImageSize(t)&&l.setImageSize(t,i),URL.revokeObjectURL(r.src),n(o)})})},r=function(t){return u.edit(t).then(o).then(function(t){I(t,!0)},function(){})};t&&y(t).then(r,f)}function C(){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})}function M(){t.on("NodeChange",function(e){H&&H.src!=e.element.src&&(x(),t.editorUpload.uploadImagesAuto(),H=void 0),z(e.element)&&(H=e.element)})}function z(e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(g(e)||m(e)||t.settings.imagetools_proxy)}function U(){var e=t.settings.imagetools_toolbar;e||(e="rotateleft rotateright | flipv fliph | crop editimage imageoptions"),t.addContextToolbar(z,e)}var j,H,A=0;e.fileApi&&(r.each({mceImageRotateLeft:R(-90),mceImageRotateRight:R(90),mceImageFlipVertical:T("v"),mceImageFlipHorizontal:T("h"),mceEditImage:B},function(e,n){t.addCommand(n,e)}),C(),U(),M())};return t.add("imagetools",f),function(){}}),o("0")()}();