export const json = {
  "elements": [{
    "name": "number",
    "type": "text",
    "title": "Enter a number from 0 to 100",
    "inputType": "number",
    "min": 0,
    "max": 100,
    "defaultValue": 0,
    "isRequired": true
  }, {
    "name": "range",
    "type": "text",
    "title": "Select a value",
    "inputType": "range",
    "min": 0,
    "max": 100,
    "step": 10,
    "defaultValue": 90
  }, {
    "name": "phone",
    "type": "text",
    "title": "Enter a phone number",
    "inputType": "tel",
    "placeholder": "+0 (000) 000-00-00",
    "autocomplete": "tel",
    "validators": [{
      "type": "regex",
      "regex": "\\+[0-9]{1} \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}",
      "text": "Phone number must be in the following format: +0 (000) 000-00-00"
    }]
  }],
  "showQuestionNumbers": false
};