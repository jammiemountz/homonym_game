$(document).ready(function() {

  var regMode = true;
  var word;
  setTimeout(newWord, 1000)

  $('#submit-word').on('click', function(){
    var submission = $('#answer').val()
    $('#answer').val("");
    if (checkSubmission(submission)){
      $('#banner').html("YOU WIN!");
    } else {
      $('#banner').html("NOPE SORRY - IT'S THE OTHER ONE.");
    }
  })

  $('#burst').on('click', function(){
    responsiveVoice.speak(word);
  })

  $('#switch-mode').on('click', function(){
    if (regMode){
      regMode = false;
      $('#switch-mode').val("NORMAL MODE");
    } else {
      regMode = true;
      $('#switch-mode').val("30ROCK MODE");
    }
  })


  var homonyms = {
    'a': 'ah',
    'acts': 'ax',
    'ad': 'add',
    'au pair': 'oh, pear.',
    'ail': 'ale',
    'aunt': 'ant',
    'ate': 'eight',
    'bail': 'bale',
    'bald': 'bawled',
    'bard': 'barred',
    'base': 'bass',
    'bay': 'bae',
    'beau': 'bow',
    'board': 'bored'
  }

  function newWord () {
    var possibleWords = [];
    for (var key in homonyms) {
      possibleWords.push(key)
    }
    word = possibleWords[Math.round(Math.random() * possibleWords.length)]
    console.log(word)
  }

  var checkSubmission = function(submission) {
    if ((homonyms[word] === submission) && regMode) {
      newWord ()
      return true;
    } else {
      newWord ()
      return false;
    }
  }

});
