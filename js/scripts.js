
var sentenceArray = []
var bigWordsArray = []



$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#item1").val();
    console.log('The userInput is: "' + userInput + '"');
    sentenceArray = userInput.split(" ");
    console.log('The array has ' + sentenceArray.length + ' elements');
    bigWordsArray = sentenceArray.map(function(bigWord){
      var result;
      if (bigWord.length >= 3){
        result = bigWord;
      };
      return result;
    });
    bigWordsArray = bigWordsArray.filter(function(bigWord){
      return bigWord;
    });
  });
});
