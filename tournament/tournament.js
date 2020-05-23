window.onload = function(){

    var formHandle = document.getElementById("gameForm");
    this.console.log(formHandle);

    formHandle.onsubmit= processForm;

    function processForm()    
    {

      //  alert("form submitted");

      //at first try I used text boxes and grabbed the value via the ID
       // var game1 = document.getElementById("in_game1_w").value;
      //  var game2 = document.getElementById("in_game2").value;
      //  var game3 = document.getElementById("in_game3").value;
      //  var game4 = document.getElementById("in_game4").value;
       //var game5 = document.getElementById("in_game5").value;
      //  var game6 = document.getElementById("in_game6").value;

      //  console.log(game1);

        //I ran into some difficulty and realized to sum the wins might be difficult with this process
        // the problem asks for an input but didnt restrict to a text box.

       // var win = true;
       // var lose = false;

     /*  var gameMsg = document.getElementById("resultMsg");
        if (game1 == "w" && game2 == "w" && game3 == "w" && game4 == "w" 
        && game5 == "w" && game6 == "w"){
            gameMsg.innerHTML = "You're group 1";

            return false;
        }
        else  if (game1 == "l" && game2 == "l" && game3 == "l" && game4 == "l" 
        && game5 == "l" && game6 == "l"){
            gameMsg.innerHTML = "You're eliminated";

            return false;
        } */


         //secondtry i'll use radio buttons
         var game1 = parseInt(formHandle.f_Game1.value);
         console.log(game1); // awesome this returns the value of the selected radio button
         //now that i know it works with one, lets try with 2-6 games

         var game2 = parseInt(formHandle.f_Game2.value);
         console.log(game1 +" - "+ game2);
         var game3 = parseInt(formHandle.f_Game3.value);
         var game4 = parseInt(formHandle.f_Game4.value);
         var game5 = parseInt(formHandle.f_Game5.value);
         var game6 = parseInt(formHandle.f_Game6.value);

         //we were able to grab all  the values, the next step is to sum them. 
         //at first I could not sum the numbers because they were being grabbed as strings, so I had to convert to an integer with parseInt
         var tourneyRecord = game1+game2+game3+game4+game5+game6;
         console.log(tourneyRecord);
         //summation now works!

         //Lastly, lets group according to how many wins 
         var gameMsg = document.getElementById("resultMsg");

         if(tourneyRecord >= 5){
           gameMsg.innerHTML = "You're group 1";

         } else if (tourneyRecord < 5 && tourneyRecord > 2 ){
           gameMsg.innerHTML = "You're group 2";
         } else if (tourneyRecord < 3 && tourneyRecord > 0){
           gameMsg.innerHTML = "You're in group 3";
         } else {
           gameMsg.innerHTML = "You've been eliminated (-1)";
         }

       //you can also use a loop to go through. Imagine there are 25 entries, you can loop through each with one line of code opposed to 25

return false;

    }


}
