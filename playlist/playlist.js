window.onload = function(){


//let's create an array of the 'songs' in the playlist

var playlist = ["A", "B", "C", "D", "E"];
//let's print out what we are stating with
var initPlaylist = document.getElementById("i_Playlist");
initPlaylist.innerHTML = playlist.toString();
/* console.log(playlist);

// there are three different actions
// 1 - move first song to last
// 2 - move last song to start
// 3 - swap the first two songs
//  the final action will print out the reslt of initiating the shuffling of songs. 

// lets try the first one 
// I want to take the first item, then move to the end.  I'm thinking the second item will be the reverse of this

var firstLast = playlist.shift();
console.log(firstLast); // this shows us what firstLast is holding
console.log(playlist); // this is the new array with firstLast popped out

//now we want to put it back at the end of the array
var btn1 = playlist.push(firstLast);
console.log(btn1); // this puts the pushed item to the end of the array
console.log(playlist); // this is the new array with firstLast pushed in

//let's try to do the reverse now - take the last item and move to the beginning.
var lastFirst = playlist.pop();
console.log(lastFirst); //this shows what lastFirst is holding
console.log(playlist); // this is the new array with lastFirst popped out

//now we want to put it back at the beginning of the array
var btn2 = playlist.unshift(lastFirst);
console.log(btn2);
console.log(playlist);


//lastly we want to swap the first two songs
//can we just change elements via index?

var song2wap1 = playlist[0];
var song2wap2 = playlist[1];
console.log("I want to swap " + song2wap1 + " and  " + song2wap2)

playlist[0] = song2wap2;
playlist[1] = song2wap1;
console.log("was I able to do the swap? "+ playlist);
// so at this point I was able to progam what i would like to happen, the swaps and pops are there.  Now to just make them active with a click of the button
// i now need to move into functions
*/
//let's grab the buttons from the html
var button1 = document.getElementById("btn_1");
var button2 = document.getElementById("btn_2");
var button3 = document.getElementById("btn_3");
var button4 = document.getElementById("btn_4");
var printPlaylist = document.getElementById("f_Playlist");


//set the onlick so we know that button has been pressed
button1.onclick = shuffleFWD;
button2.onclick = shuffleBKD;
button3.onclick = shuffleSWP;
button4.onclick = playlistFinal; 

function shuffleFWD(){
    //test to make sure it works
   // alert("you clicked button 1");
    var firstLast = playlist.shift();
    var btn1 = playlist.push(firstLast);
    console.log(btn1);
    console.log(playlist);
    

}
function shuffleBKD(){
    //test to make sure it works
   // alert("you clicked button 2");
    var lastFirst = playlist.pop();
    var btn2 = playlist.unshift(lastFirst);
    console.log(btn2);
    console.log(playlist);

}
function shuffleSWP(){
    //test to make sure it works
   // alert("you clicked button 3");
    var song2wap1 = playlist[0];
    var song2wap2 = playlist[1];
    playlist[0] = song2wap2;
    playlist[1] = song2wap1;
    console.log(playlist);
}

function playlistFinal(){
    //test to make sure it works
  //  alert("you clicked button 4");
  // let's print out our final playlist
    printPlaylist.innerHTML = playlist.toString();




}


}




