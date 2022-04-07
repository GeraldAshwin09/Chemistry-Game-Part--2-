function display(){
    pl1=localStorage.getItem("play_1");
    pl2=localStorage.getItem("play_2");

   document.getElementById("playdisp1").innerHTML=pl1;
   document.getElementById("playdisp2").innerHTML=pl2 ;

   document.getElementById("questionturn").innerHTML="Question Turn -"+pl1;
   document.getElementById("answerturn").innerHTML="Answer Turn -"+pl2;

   p1score=0;
   p2score=0;

   document.getElementById("score1").innerHTML=p1score;
   document.getElementById("score2").innerHTML=p2score;
}

function input()
{
ques1=document.getElementById("type1").value;

    question="<h4 id='q'>Q. " +  ques1 +"'s CHEMICAL FORMULA" ;
    inputbox="<br> Answer: <input type='text' id='ans' placeholder='ENTER ANSWER'>";
button="<br><Br> <button id='checker' onclick='check()' class='btn btn-success'>CHECK</button>"
row= question + inputbox+ button;
document.getElementById("output").innerHTML=row;
}