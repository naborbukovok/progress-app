(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(i)?i:String(i)}var n=function(){function e(t){var i=t.selectors,n=t.params;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(i.selector),this._valueElement=document.querySelector(i.valueSelector),this._circumference=n.circumference}var i,n;return i=e,(n=[{key:"generate",value:function(e){this._valueElement.style.strokeDasharray="".concat(this._circumference," ").concat(this._circumference),this._valueElement.style.strokeDashoffset=this._circumference,this.setValue(e.value||0),this.setIsAnimated(e.isAnimated||!1),this.setIsHidden(e.isHidden||!1)}},{key:"setValue",value:function(e){var t=this._circumference-e/100*this._circumference;this._valueElement.style.strokeDashoffset=t}},{key:"setIsAnimated",value:function(e){e?(this._isAnimated=!0,this._element.classList.add("progress_animated")):(this._isAnimated=!1,this._element.classList.remove("progress_animated"))}},{key:"setIsHidden",value:function(e){e?(this._isHidden=!0,this._element.classList.add("progress_hidden")):(this._isHidden=!1,this._element.classList.remove("progress_hidden"))}},{key:"toggleIsAnimated",value:function(){this.setIsAnimated(!this._isAnimated)}},{key:"toggleIsHidden",value:function(){this.setIsHidden(!this._isHidden)}}])&&t(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}var a=function(){function e(t){var i=t.selectors,n=t.inputs,r=t.errorClasses,o=t.eventHandlers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(i.selector),this._errorSelector=i.errorSelector,this._valueInputElement=this._element[n.valueInputId],this._animateCheckboxElement=this._element[n.animateCheckboxId],this._hideCheckboxElement=this._element[n.hideCheckboxId],this._inputTypeErrorClass=r.inputTypeErrorClass,this._fieldErrorActiveClass=r.fieldErrorActiveClass,this._onValueInputChange=o.handleValueInputChange,this._onAnimateCheckboxClick=o.handleAnimateCheckboxClick,this._onHideCheckboxClick=o.handleHideCheckboxClick}var t,i;return t=e,(i=[{key:"generate",value:function(e){this._valueInputElement.value=e.value||0,this._animateCheckboxElement.checked=e.isAnimated||!1,this._hideCheckboxElement.checked=e.isHidden||!1}},{key:"setEventListeners",value:function(){this._valueInputElement.addEventListener("input",function(e){e.preventDefault(),this._isInputValid(e.target,"0 to 100")&&this._onValueInputChange(e.target.value)}.bind(this)),this._animateCheckboxElement.addEventListener("click",function(){this._onAnimateCheckboxClick()}.bind(this)),this._hideCheckboxElement.addEventListener("click",function(){this._onHideCheckboxClick()}.bind(this))}},{key:"_isInputValid",value:function(e,t){return e.validity.valid?(this._hideInputError(e),!0):(this._showInputError(e,t),!1)}},{key:"_showInputError",value:function(e,t){var i=this._element.querySelector("".concat(this._errorSelector,"_id_").concat(e.id));e.classList.add(this._inputTypeErrorClass),i.classList.add(this._fieldErrorActiveClass),i.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector("".concat(this._errorSelector,"_id_").concat(e.id));e.classList.remove(this._inputTypeErrorClass),t.classList.remove(this._fieldErrorActiveClass),t.textContent=""}}])&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l={value:46,isAnimated:!0,isHidden:!1},c=new n({selectors:{selector:".progress",valueSelector:".progress__value"},params:{circumference:2*Math.PI*55}}),u=new a({selectors:{selector:".form",errorSelector:".form__field-error"},inputs:{valueInputId:"value-input",animateCheckboxId:"animate-checkbox",hideCheckboxId:"hide-checkbox"},errorClasses:{inputTypeErrorClass:"form__input_type_error",fieldErrorActiveClass:"form__field-error_active"},eventHandlers:{handleValueInputChange:function(e){c.setValue(e)},handleAnimateCheckboxClick:function(){c.toggleIsAnimated()},handleHideCheckboxClick:function(){c.toggleIsHidden()}}});c.generate(l),u.generate(l),u.setEventListeners()})();