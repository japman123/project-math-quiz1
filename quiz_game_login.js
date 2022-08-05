function addUser() {
   user_name1 = document.getElementById("in1").value;
   user_name2 = document.getElementById("in2").value;
   localStorage.setItem("user_name1", user_name1);
   localStorage.setItem("user_name2", user_name2);
   window.location = "quiz_game_page.html";
}