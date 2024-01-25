import "./index.css"; 

import Progress from "../components/Progress.js";
import Form from "../components/Form.js";

const RADIUS = 60;
const STROKE = 10;
const INITIAL_DATA = {
  value: 46,
  isAnimated: true,
  isHidden: false
}

const progress = new Progress({
  selectors: {
    selector: ".progress",
    valueSelector: ".progress__value",
  },
  params: {
    circumference: 2 * Math.PI * (RADIUS - STROKE / 2)
  }
});

const form = new Form({
  selectors: {
    selector: ".form",
    errorSelector: ".form__field-error"
  },
  inputs: {
    valueInputId: "value-input",
    animateCheckboxId: "animate-checkbox",
    hideCheckboxId: "hide-checkbox"
  },
  errorClasses: {
    inputTypeErrorClass: "form__input_type_error",
    fieldErrorActiveClass: "form__field-error_active"
  },
  eventHandlers: {
    handleValueInputChange: (value) => {
      progress.setValue(Number(value));
    },
    handleAnimateCheckboxClick: () => {
      progress.toggleIsAnimated();
    },
    handleHideCheckboxClick: () => {
      progress.toggleIsHidden();
    }
  },
});

progress.generate(INITIAL_DATA);
form.generate(INITIAL_DATA);

form.setEventListeners();
