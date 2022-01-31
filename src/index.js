import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JournalEntry } from './journal.js';
import './css/styles.css';




$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    let userTitle = $("#title").val();
    let userBody = $("#body").val();
    let newJournalEntry = new JournalEntry(userTitle, userBody);
    $("#output").html(newJournalEntry.body);
    $("#word-count").html(newJournalEntry.wordCounter());
  });
});