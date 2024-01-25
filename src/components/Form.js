export default class Form {
  constructor({ selectors, inputs, errorClasses, eventHandlers }) {
    this._element = document.querySelector(selectors.selector);
    this._errorSelector = selectors.errorSelector;
    this._valueInputElement = this._element[inputs.valueInputId];
    this._animateCheckboxElement = this._element[inputs.animateCheckboxId];
    this._hideCheckboxElement = this._element[inputs.hideCheckboxId];

    this._inputTypeErrorClass = errorClasses.inputTypeErrorClass;
    this._fieldErrorActiveClass = errorClasses.fieldErrorActiveClass;

    this._onValueInputChange = eventHandlers.handleValueInputChange;
    this._onAnimateCheckboxClick = eventHandlers.handleAnimateCheckboxClick;
    this._onHideCheckboxClick = eventHandlers.handleHideCheckboxClick;
  }

  generate(initialData) {
    this._valueInputElement.value = initialData.value || 0;
    this._animateCheckboxElement.checked = initialData.isAnimated || false;
    this._hideCheckboxElement.checked = initialData.isHidden || false;
  }

  setEventListeners() {
    this._valueInputElement.addEventListener(
      "input",
      function (event) {
        event.preventDefault();
        if (this._isInputValid(event.target, "0 to 100")) {
          this._onValueInputChange(event.target.value);
        }
      }.bind(this)
    );

    this._animateCheckboxElement.addEventListener(
      "click",
      function () {
        this._onAnimateCheckboxClick();
      }.bind(this)
    );

    this._hideCheckboxElement.addEventListener(
      "click",
      function () {
        this._onHideCheckboxClick();
      }.bind(this)
    );
  }

  _isInputValid(inputElement, errorMessage) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorMessage);
      return false;
    } 
    this._hideInputError(inputElement);
    return true;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(`${this._errorSelector}_id_${inputElement.id}`);
    inputElement.classList.add(this._inputTypeErrorClass);
    errorElement.classList.add(this._fieldErrorActiveClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(`${this._errorSelector}_id_${inputElement.id}`);
    inputElement.classList.remove(this._inputTypeErrorClass);
    errorElement.classList.remove(this._fieldErrorActiveClass);
    errorElement.textContent = '';
  }
}
