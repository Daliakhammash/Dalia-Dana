

//The onsubmit event occurs when a form is submitted.
document.getElementById("form").onsubmit=function() {
// to save the value of each checked radio button in a variable to compute the final result of the quiz .
var q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value); 
var q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
var q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
var q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
var q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
var q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
var q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
var q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
var q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);

var result = q1 + q2 + q3 + q4 +q5 + q6 + q7 + q8 + q9 ;
     // this to show the final result of the quiz
     document.getElementById("score").innerHTML = result + " / 9";
    //will compare the result value with score and get you a feed back about your score.
    var arrScore = [
    {score:0,feedback:"You failed :("},
    {score:1,feedback:"You failed :("},
    {score:2,feedback:"You failed :("},
    {score:3,feedback:"You failed :("},
    {score:4,feedback:"bad"},
    {score:5,feedback:"Not bad"},
    {score:6,feedback:"Good!"},
    {score:7,feedback:"Good!"},
    {score:8,feedback:"Very good!"},
    {score:9,feedback:"Excellent!"}
    ];
    
     // this for loop is used to itterarte over the array of objects to compare each the final score with the feedback 
     for(var i=0; i<arrScore.length; i++) {
        if(result === arrScore[i].score) {
            var result2 = arrScore[i].feedback;
        }
    }
 // to show the feedback of your score on the page
document.getElementById("score2").innerHTML = result2;

return false;
}
