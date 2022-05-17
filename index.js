// Import stylesheets
import './style.css';

function parseForm(form) {
  window.alert('asd');

  var values = '';

  for (var i = 0; i < form.elements.length; i++) {
    values += form.elements[i].name + '=' + form.elements[i].value + '&';
  }

  var url = form.action;

  console.log('parse form fired');
}

for (var i = 0; i < document.forms.length; i++) {
  document.querySelector('label').textContent = '123';
  parseForm(document.forms[i]);
}
