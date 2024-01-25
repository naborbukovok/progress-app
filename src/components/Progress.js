export default class Progress {
  constructor({ selectors, params }) {
    this._element = document.querySelector(selectors.selector);
    this._valueElement = document.querySelector(selectors.valueSelector);

    this._circumference = params.circumference;
  }

  generate(initialData) {
    this._valueElement.style.strokeDasharray = `${this._circumference} ${this._circumference}`;
    this._valueElement.style.strokeDashoffset = this._circumference;

    this.setValue(initialData.value || 0);
    this.setIsAnimated(initialData.isAnimated || false);
    this.setIsHidden(initialData.isHidden || false);
  }

  setValue(value) {
    const offset = this._circumference - (value / 100) * this._circumference;
    this._valueElement.style.strokeDashoffset = offset;
  }

  setIsAnimated(isAnimated) {
    if (isAnimated) {
      this._isAnimated = true;
      this._element.classList.add("progress_animated");
    } else {
      this._isAnimated = false;
      this._element.classList.remove("progress_animated");
    }
  }

  setIsHidden(isHidden) {
    if (isHidden) {
      this._isHidden = true;
      this._element.classList.add("progress_hidden");
    } else {
      this._isHidden = false;
      this._element.classList.remove("progress_hidden");
    }
  }

  toggleIsAnimated() {
    this.setIsAnimated(!this._isAnimated);
  }

  toggleIsHidden() {
    this.setIsHidden(!this._isHidden);
  }
}
