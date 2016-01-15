
$(function(){
    $("#submit-button").click(function() {
      // Assign user input to variables
      var questionOne = parseInt($("input[name=optradio1]:checked").val(),10);
      var questionTwo = parseInt($("input[name=optradio2]:checked").val(),10);
      var questionThree = parseInt($("input[name=optradio3]:checked").val(),10);
      var questionFour = parseInt($("input[name=optradio4]:checked").val(),10);
      var questionFive = parseInt($("input[name=optradio5]:checked").val(),10);

      // Add input variables to create a score
      var score = questionOne + questionTwo + questionThree + questionFour + questionFive;

      // Determine recommendation based on score
      // or return an error message if questions are left unanswered
      if (score >= 5 && score <= 8) {
        $("#rec-one").siblings().addClass('hidden');
        $("#rec-one").removeClass('hidden');
      } else if (score >= 9 && score <= 12) {
        $("#rec-two").siblings().addClass('hidden');
        $("#rec-two").removeClass('hidden');
      } else if (score >= 13 && score <= 15) {
        $("#rec-three").siblings().addClass('hidden');
        $("#rec-three").removeClass('hidden');
      } else {
        alert("Looks like you missed a question!");
      }
    });
});
