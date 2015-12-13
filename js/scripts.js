$(document).ready(function() {

  var word;

  $('#submit-word').on('click', function(){
    submitAnswer()
  })

  $('#answer').keyup(function (e) {
    if ($(".input1:focus") && (e.keyCode === 13)) {
       submitAnswer()
    }
 });

  $('.burst-container').on('click', function(){
    responsiveVoice.speak(word, 'US English Female');
  })

  // $('.burst-container').on('tap', function(){
  //   responsiveVoice.speak(word, 'US English Female');
  // })

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
    console.log('Ok, cheater. Answer: ', homonyms[word])
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
        $('.correct-stars').removeClass("visible");
      },1000)
    }, time)
  }

  function submitAnswer() {
    var submission = $('#answer').val()
    if (submission.length > 0) {
      $('#answer').val("");
      if (checkSubmission(submission)){
        $('.correct-stars').addClass("visible");
        $('#banner').html("WOAH - THAT'S RIGHT!");
        time = 3000;
      } else {
        $('#banner').html("NOPE SORRY - IT'S THE OTHER ONE.");
        time = 2000;
      }
      characterAnimation()
    } else {
      $('#answer').attr("placeholder", "Can't be blank!");
    }
  }

  newWord()

});
