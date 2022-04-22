function correction(){
  
  var question1Test = ""
  var answer1 = document.getElementsByName("question1")
  if(answer1[2].checked){
    question1Test = 1
  }else{
    question1Test = 0
  }
  
  var question2Test = ""
  var answer2 = document.getElementById("answer2").value;
  if (answer2 == "//"){
    question2Test = 1
  }else{
    question2Test = 0
  }
  
  var question3Test = ""
  var answer3 = document.getElementsByName("chkquestion")
  if(answer3[0].checked && !answer3[1].checked && answer3[2].checked && !answer3[3].checked && answer3[4].checked){
    question3Test = 1
  }else{
    question3Test = 0
  }
  console.log(answer3)
  console.log(question3Test)
  
  var question4Test = ""
  var answer4 = document.getElementById("select").value
  if(answer4 == "option3"){
    question4Test = 1
  }else{
    question4Test = 0
  }
  
  var div = document.getElementById("results");
  var score = question1Test + question2Test + question3Test + question4Test
  var message = "<h1>" + score + "/4" + "</h1>"
  div.innerHTML = message;
}