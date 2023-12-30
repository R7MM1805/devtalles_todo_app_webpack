(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function o(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:String(n)}t.d({},{L:()=>w});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=(new Date).getTime().toString(),this.todo=e,this.completed=!1,this.creationDate=new Date}var e,o,r;return e=t,r=[{key:"fromJson",value:function(e){var n=e.id,o=e.todo,r=e.completed,i=e.creationDate,a=new t(o);return a.id=n,a.completed=r,a.creationDate=i,a}}],(o=null)&&n(e.prototype,o),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,u(o.key),o)}}function u(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:String(e)}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loadLocalStorage()}var e,n,o;return e=t,(n=[{key:"addNewTodo",value:function(t){this.todos.push(t),this.saveLocalStorage()}},{key:"toggleTodo",value:function(t){var e,n=a(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id===t){o.completed=!o.completed,this.saveLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"deleteTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.saveLocalStorage()}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(t){return!t.completed})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){var t=localStorage.getItem("todos");this.todos=t?JSON.parse(t):[],this.todos=this.todos.map(r.fromJson)}},{key:"getTodoPending",value:function(){return this.todos.filter((function(t){return!t.completed})).length}}])&&c(e.prototype,n),o&&c(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var y=document.querySelector(".todo-list"),m=document.querySelector(".new-todo"),v=document.querySelector(".clear-completed"),p=document.querySelector(".filters"),b=document.querySelectorAll(".filter"),h=document.querySelector(".todo-count"),g=function(t){var e=t.completed,n='\n    <li class="'.concat(e?"completed":"",'" data-id="').concat(t.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e?"checked":""," >\n            <label>").concat(t.todo,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>\n    ');y.innerHTML+=n,S()},S=function(){h.innerText="".concat(w.getTodoPending()," pendiente(s)")};m.addEventListener("keyup",(function(t){var e=t.target.value;if(13===t.keyCode&&null!==e&&""!==e.trim()){var n=new r(e);w.addNewTodo(n),g(n),S(),t.target.value=""}})),y.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentNode.parentElement,o=n.getAttribute("data-id");e.includes("input")&&(w.toggleTodo(o),n.classList.toggle("completed")),e.includes("button")&&(w.deleteTodo(o),y.removeChild(n)),S()})),v.addEventListener("click",(function(){w.deleteCompleted();for(var t,e=y.children,n=e.length-1;n>=0;n--)(t=e[n]).classList.contains("completed")&&y.removeChild(t);S()})),p.addEventListener("click",(function(t){var e,n=t.target.text;if(b.forEach((function(t){return t.classList.remove("selected")})),n){var o,r=f(y.children);try{for(r.s();!(o=r.n()).done;){var i=o.value;switch(i.classList.remove("hidden"),t.target.classList.add("selected"),e=i.classList.contains("completed"),n){case"Pendientes":e&&i.classList.add("hidden");break;case"Completados":e||i.classList.add("hidden")}}}catch(t){r.e(t)}finally{r.f()}}S()}));var w=new s;w.todos.forEach(g),w.todos=w.todos.map(r.fromJson)})();