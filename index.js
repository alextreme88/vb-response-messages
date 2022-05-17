// Import stylesheets
import './style.css';

function parseForm(form) {
  var values = '';

  for (var i = 0; i < form.elements.length; i++) {
    values += form.elements[i].name + '=' + form.elements[i].value + '&';
  }

  var url = form.action;

  console.log('parse form fired');

  window.TransResponse.processFormData(url, values);
}

for (var i = 0; i < document.forms.length; i++) {
  parseForm(document.forms[i]);
}
