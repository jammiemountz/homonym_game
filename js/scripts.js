$(document).ready(function() {

  var word;

  $('#submit-word').on('click', function(){
    var submission = $('#answer').val()
    $('#answer').val("");
    if (checkSubmission(submission)){
      $('#banner').addClass("right-answer");
      $('#banner').html("WOAH - THAT'S RIGHT!");
      time = 3000;
    } else {
      $('#banner').html("NOPE SORRY - IT'S THE OTHER ONE.");
      time = 2000;
    }
    characterAnimation()
  })

  $('#burst').on('click', function(){
    responsiveVoice.speak(word);
  })

  $('#switch-mode').on('click', function(){
    if (regMode){
      regMode = false;
      $('#switch-mode').val("Play NORMAL MODE");
    } else {
      regMode = true;
      $('#switch-mode').val("Play 30ROCK MODE");
    }
  })

  function newWord () {
    word = randomizer(wordOptions)
    console.log('answer: ', homonyms[word])
  }

  function checkSubmission(submission) {
    console.log('submission: ', submission)
    if ((homonyms[word] === submission) && regMode) {
      newWord ()
      return true;
    } else {
      newWord ()
      return false;
    }
  }

  function characterAnimation() {
    var imageClass = randomizer(imageClassNames);
    $('.surprise-image').addClass(imageClass);
    $('.alert-box').addClass("move-up");
    setTimeout(function(){
      $('.alert-box').removeClass("move-up");
      setTimeout(function(){
        $('.surprise-image').removeClass(imageClass);
      },1000)
    }, time)
  }

  newWord()

});
