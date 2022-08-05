player1_name = localStorage.getItem("user_name1");
player2_name = localStorage.getItem("user_name2");

update_in1_score = 0;
update_in2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("qTurn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("aTurn").innerHTML = "Answer Turn - " + player2_name;

function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    actual_answer = parseInt(num1) * parseInt(num2);
    question_number = "<h4>" + num1 + " X " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
question_turn = "in1";
answer_turn = "in2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "in1")
        {
            update_in1_score = update_in1_score +1;
            document.getElementById("in1_score").innerHTML = update_in1_score;
        }
        else
        {
            update_in2_score = update_in2_score +1;
            document.getElementById("in2_score").innerHTML = update_in2_score;
        }
    }
if(question_turn == "in1")
{
    question_turn = "in2"
    document.getElementById("qTurn").innerHTML = "Question Turn - " + player2_name;
}
else
{
    question_turn = "in1"
    document.getElementById("qTurn").innerHTML = "Question Turn - " + player1_name;
}

if(answer_turn == "in1")
{
    answer_turn = "in2"
    document.getElementById("aTurn").innerHTML = "Answer Turn - " + player2_name;
}
else
{
    answer_turn = "in1"
    document.getElementById("aTurn").innerHTML = "Answer Turn - " + player1_name;
}
document.getElementById("output").innerHTML = "";
    }
