'use strict';

(function () {

  var Form = function (formClassName, fieldsClassName, fieldsContainerClassName) {
    this.formClassName = formClassName;
    this.fieldsClassName = fieldsClassName;
    this.fieldsContainerClassName = fieldsContainerClassName;

    this.getForm = function () {
      return document.querySelector(this.formClassName)
    }

    this.getFields = function () {
      return this.getForm().querySelectorAll(this.fieldsClassName);
    }

    this.getFieldContainers = function () {
      return this.getForm().querySelectorAll(this.fieldsContainerClassName);
    }
  }

  /**
   * Функция удаления сообщений об ошибках
   * @param {*} nodeList
   */
  var clearWarnings = function (items, message) {
    items.forEach(function (it) {
      var errorItem = it.querySelectorAll('.' + message.classList.value);
      it.querySelectorAll('.account-order-profile__textfield').forEach(function (textField) {
        textField.classList.remove('account-order-profile__textfield--invalid');
      });
      if (errorItem) {
        errorItem.forEach(function (elem) {
          it.removeChild(elem);
        });
      }
    });
  };

  /**
   * Функция показа сообщения об ошибках
   * @param {*} fieldContainers
   * @param {*} field
   * @param {*} index
   */
  var showWarningMessage = function (fieldContainers, field, index, message) {
    message.innerText = field.validationMessage;
    fieldContainers[index].append(message);
    field.classList.add('account-order-profile__textfield--invalid');
  };

  /**
   * Функция проверки полей
   * @param {*} field
   * @param {*} index
   */
  var checkFields = function (fieldsContainer, field, index, message) {
    field.addEventListener('input', function () {
      if (field.validity.valid === false && field.value) {
        clearWarnings(fieldsContainer, message);
        showWarningMessage(fieldsContainer, field, index, message);
      } else {
        clearWarnings(fieldsContainer, message);
      }
    });
  };

  window.validation = {
    Form: Form,
    clearWarnings: clearWarnings,
    showWarningMessage: showWarningMessage,
    checkFields: checkFields,
  };

})();




