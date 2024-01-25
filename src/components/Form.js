export default class Form {
  constructor({ formSelector, inputs, eventHandlers }) {
    this._element = document.querySelector(formSelector);
    this._valueInputElement = this._element[inputs.valueInputId];
    this._animateCheckboxElement = this._element[inputs.animateCheckboxId];
    this._hideCheckboxElement = this._element[inputs.hideCheckboxId];

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
        this._onValueInputChange(event.target.value);
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
}
