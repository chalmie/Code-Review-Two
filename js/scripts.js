// $(document).ready(function(){
//   ("").submit(function(event)) {
//   // When the submit button is clicked,need to
//   // gather input, convert to numbers,create a score.
//
//   alert($('input[name=optradio]').val());
//   // If points are 5-8, display option1
//   // Else if points are 9-12,display option2
//   // Else if points are 13-15,display option3
//   // Else alert user that there are unanswered questions
//
//
//
//     event.preventDefault();
//   });
// });


$(function(){
    $("#submit-button").click(function() {
      var questionOne = $("input[name=optradio1]:checked").val());
      var questionTwo = $("input[name=optradio2]:checked").val());
      var questionThree = $("input[name=optradio3]:checked").val());
      var questionFour = $("input[name=optradio4]:checked").val());
      var questionFive = $("input[name=optradio5]:checked").val());
      var score = questionOne + questionTwo + questionThree + questionFour + questionFive;
    });
});
