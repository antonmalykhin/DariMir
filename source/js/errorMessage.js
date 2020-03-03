var form = document.querySelector('.account__personal-form');
var fields = form.querySelectorAll('.account__personal-textfield');
var fieldsContainers = form.querySelectorAll('.account__personal-field')
var errorMessageTemplate = document.querySelector('#errorMessage').content.querySelector('.error-message');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

})

fields.forEach(function(field, index){

  field.addEventListener('invalid', function(evt){
    evt.preventDefault();
    // field.setAttribute('style', 'box-shadow: 0 0 0 2px red; border-color: transparent;');
    var message = errorMessageTemplate.cloneNode(true);
    message.innerText = field.validationMessage;
    fieldsContainers[index].appendChild(message);
  });

  field.addEventListener('input', function () {
    field.removeAttribute('style');
    field.setAttribute('style', 'border-color: gray;');
    fieldsContainers.forEach(function (it) {
      if(it.querySelectorAll('.error-message')) {
        it.querySelectorAll('.error-message').forEach(function (elem) {
          it.removeChild(elem);
        });
      }
    });
  });
});




