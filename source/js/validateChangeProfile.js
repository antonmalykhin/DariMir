'use strict';

var ERROR_MESSAGE_TEMPLATE = document.querySelector('#errorMessage').content.querySelector('.error-message');

var pageForm = new window.validation.Form('.accoutn-order-profile__form', '.account-order-profile__textfield--personal-info', '.account-order-profile__field--personal-info');

var form = pageForm.getForm();
var fields = pageForm.getFields();
var fieldContainers = pageForm.getFieldContainers();

console.log(fieldContainers)

fields.forEach(function (field, index) {
  window.validation.checkFields(fieldContainers, field, index, ERROR_MESSAGE_TEMPLATE);
});

form.addEventListener('submit', function (evt) {
  fields.forEach(function (field, index) {
    if (!field.checkValidity()) {
      evt.preventDefault();
      window.validation.showWarningMessage(fieldContainers, field, index,ERROR_MESSAGE_TEMPLATE);
    }
  });
});
