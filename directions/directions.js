window.onload = function(){

    var streetArray = [];
    var directionArray = [];
    
    //I will use a process simlar to the first challenge but utlizing a form. 

    //set up the standard form functions to make sure we grab values when submitted.
    var formHandle = document.getElementById("dirForm");
    var button = document.getElementById("btn");
   // console.log(formHandle);

    
    button.onclick = addDirection;
    count = 0;

    

    function addDirection(){
        
        count += 1;
        if (count<6){
            var street1 = document.getElementById("street_1").value;
            var directions = formHandle.street_1_direction.value;


        var newStreet = streetArray.push(street1);
        var newDirections = directionArray.push(directions);

       // console.log(directionArray);
        

       // console.log(newStreet);
      //  console.log(streetArray);
        // console.log(street1);
       // console.log(count);
       document.getElementById('street_1').value = ' ';  

       

       //streetArray.forEach(displayFunction);
       //function displayFunction(item,index){
          // toSchool.innerHTML += index + ":" + item + "<br/>";
           //return false;

       //}
     
       

        } else {
            var error = document.getElementById("err");
            error.innerHTML = "You've can not enter anymore directions";
        }
        
        


    }
    formHandle.onsubmit = processForm;

        function processForm()  {
            //first try, i've set up a text box to grab the street name
            //i've set up radio boxes to grab the directions (L or R)
           // alert(
           // "form subitted"
          //  )
          var toSchool = document.getElementById("to_school");
          toSchool.style.textTransform = "uppercase";

       var arrayLength = streetArray.length;
       for (var i=0; i<arrayLength; i++){
           toSchool.innerHTML += directionArray[i] + " <br> " + streetArray[i] + "<br>";
           
       }
  

              
           var reverseDir  = directionArray.reverse();
           console.log(reverseDir);
           var reverseStreet = streetArray.reverse();
           console.log(reverseStreet);
          var swapR = reverseDir;
          var swapL = reverseDir;
          var swapLength = swapR.length;
          var toHome = document.getElementById("to_home");
          for (var i=0; i<swapLength-1; i++){
            //swapR[swapR.map((e,i)=>[i,e]).filter(e => e[1]== "Left")[i][i]]  = "Right";
            if (swapR[i] == "Left"){
                swapR[i] = "Right";
            }
            else{
                swapR[i] = "Left";
            }
            console.log(swapR);
            toHome.innerHTML +=  " turn " + swapR[i] + " onto " + reverseStreet[i+1] + " street <br>" 

            


            }
            if (swapR[i] == "Left"){
                swapR[i] = "Right";
            }
            else{
                swapR[i] = "Left";
            }
            toHome.innerHTML +=  " turn " + swapR[i] + " into your Home <br>"
          
          //
          //swapL[swapL.map((e,i)=>[i,e]).filter(e => e[1]== "Right")[0][0]]  = "Left";

         // reverseDir.forEach((dir)=>{
          //    if (dir === "Left"){
          //        dir = "Right"
           //   }
              
         // })
      


return false;
        
          
        } 
           



         
    
            
            
           
            return false;
    
    
    
        }
    

    


