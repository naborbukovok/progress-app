(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:String(n)}var i=function(){function e(t){var n=t.selectors,i=t.params;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(n.selector),this._valueElement=document.querySelector(n.valueSelector),this._circumference=i.circumference}var n,i;return n=e,(i=[{key:"generate",value:function(e){this._valueElement.style.strokeDasharray="".concat(this._circumference," ").concat(this._circumference),this._valueElement.style.strokeDashoffset=this._circumference,this.setValue(e.value||0),this.setIsAnimated(e.isAnimated||!1),this.setIsHidden(e.isHidden||!1)}},{key:"setValue",value:function(e){if("number"!=typeof e||Number.isNaN(e)||e>100||e<0)console.log("Progress: wrong value");else{var t=this._circumference-e/100*this._circumference;this._valueElement.style.strokeDashoffset=t}}},{key:"setIsAnimated",value:function(e){"boolean"==typeof e?e?(this._isAnimated=!0,this._element.classList.add("progress_animated")):(this._isAnimated=!1,this._element.classList.remove("progress_animated")):console.log("Progress: wrong isAnimated")}},{key:"setIsHidden",value:function(e){"boolean"==typeof e?e?(this._isHidden=!0,this._element.classList.add("progress_hidden")):(this._isHidden=!1,this._element.classList.remove("progress_hidden")):console.log("Progress: wrong isHidden")}},{key:"toggleIsAnimated",value:function(){this.setIsAnimated(!this._isAnimated)}},{key:"toggleIsHidden",value:function(){this.setIsHidden(!this._isHidden)}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,s(i.key),i)}}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}var a=function(){function e(t){var n=t.selectors,i=t.inputs,r=t.errorClasses,o=t.eventHandlers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(n.selector),this._errorSelector=n.errorSelector,this._valueInputElement=this._element[i.valueInputId],this._animateCheckboxElement=this._element[i.animateCheckboxId],this._hideCheckboxElement=this._element[i.hideCheckboxId],this._inputTypeErrorClass=r.inputTypeErrorClass,this._fieldErrorActiveClass=r.fieldErrorActiveClass,this._onValueInputChange=o.handleValueInputChange,this._onAnimateCheckboxClick=o.handleAnimateCheckboxClick,this._onHideCheckboxClick=o.handleHideCheckboxClick}var t,n;return t=e,(n=[{key:"generate",value:function(e){this._valueInputElement.value=e.value||0,this._animateCheckboxElement.checked=e.isAnimated||!1,this._hideCheckboxElement.checked=e.isHidden||!1}},{key:"setEventListeners",value:function(){this._valueInputElement.addEventListener("input",function(e){e.preventDefault(),this._isInputValid(e.target,"0 to 100")&&this._onValueInputChange(e.target.value)}.bind(this)),this._animateCheckboxElement.addEventListener("click",function(){this._onAnimateCheckboxClick()}.bind(this)),this._hideCheckboxElement.addEventListener("click",function(){this._onHideCheckboxClick()}.bind(this))}},{key:"_isInputValid",value:function(e,t){return e.validity.valid?(this._hideInputError(e),!0):(this._showInputError(e,t),!1)}},{key:"_showInputError",value:function(e,t){var n=this._element.querySelector("".concat(this._errorSelector,"_id_").concat(e.id));e.classList.add(this._inputTypeErrorClass),n.classList.add(this._fieldErrorActiveClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector("".concat(this._errorSelector,"_id_").concat(e.id));e.classList.remove(this._inputTypeErrorClass),t.classList.remove(this._fieldErrorActiveClass),t.textContent=""}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l={value:46,isAnimated:!0,isHidden:!1},c=new i({selectors:{selector:".progress",valueSelector:".progress__value"},params:{circumference:2*Math.PI*55}}),u=new a({selectors:{selector:".form",errorSelector:".form__field-error"},inputs:{valueInputId:"value-input",animateCheckboxId:"animate-checkbox",hideCheckboxId:"hide-checkbox"},errorClasses:{inputTypeErrorClass:"form__input_type_error",fieldErrorActiveClass:"form__field-error_active"},eventHandlers:{handleValueInputChange:function(e){c.setValue(e)},handleAnimateCheckboxClick:function(){c.toggleIsAnimated()},handleHideCheckboxClick:function(){c.toggleIsHidden()}}});c.generate(l),u.generate(l),u.setEventListeners()})();