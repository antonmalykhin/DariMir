'use strict';

var form = document.querySelector('.account__personal-form');
var fields = form.querySelectorAll('.account__personal-textfield');
var fieldsContainers = form.querySelectorAll('.account__personal-field')
var errorMessageTemplate = document.querySelector('#errorMessage').content.querySelector('.error-message');
var resetFormButton = form.querySelector('.account__personal-btn--reset')

/**
 * Функция удаления сообщений об ошибках и класса невалидного поля
 */
var clearWarnings = function () {
  fieldsContainers.forEach(function (it) {
    var errorItem = it.querySelectorAll('.error-message');
    it.querySelectorAll('.account__personal-textfield').forEach(function (textField) {
      textField.classList.remove('account__personal-textfield--invalid');
    });
    if (errorItem) {
      errorItem.forEach(function (elem) {
        it.removeChild(elem);
      });
    }
  });
};

/**
 * Функция показа сообщения об ошибках и добавления класса невалидного поля
 * @param {*} field
 * @param {*} index
 */
var showWarningMessage = function (field, index) {
  var message = errorMessageTemplate.cloneNode(true);
  message.innerText = field.validationMessage;
  fieldsContainers[index].appendChild(message);
  field.classList.add('account__personal-textfield--invalid');
}

/**
 * Функция проверки полей
 * @param {*} field
 * @param {*} index
 */
var checkFields = function (field, index) {
  field.addEventListener('input', function () {
    if (field.validity.valid === false && field.value) {
      clearWarnings();
      showWarningMessage(field, index);
    } else {
      clearWarnings();
    }
  });
}

fields.forEach(checkFields);

form.addEventListener('submit', function (evt) {
  fields.forEach(function (field, index) {
    if (!field.checkValidity()) {
      evt.preventDefault();
      showWarningMessage(field, index);
    }
  })
})

resetFormButton.addEventListener('click', function () {
  form.reset();
  clearWarnings();
})




