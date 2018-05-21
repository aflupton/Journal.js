import './bootstrap.css';
import './styles.css';
import $ from 'jquery';
import { Journal } from './journal.js';


$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var input = $('#input').val();
    var output = Journal(input);
    console.log(input);
    output.forEach(function(element) {
      $('#output').append("<li>" + element + "</li>");
    });
  });
});
