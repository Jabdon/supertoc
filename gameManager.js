
var player1, player2;
var isInPlayerNameScreen = true;
const radioButtons = `<input type="radio" id="option1" name="age" value="10">
<label class="radio-label" for="option1">10 x 10</label><br>
<input type="radio" id="option2" name="age" value="20">
<label class="radio-label" for="option2">20 x 20</label><br>  
<input type="radio" id="option3" name="age" value="30">
<label class="radio-label" for="option3">30 x 30</label><br>`;

function validatingPlayerNames(){
    player1 = document.getElementById("pname1").value;
    player2 = document.getElementById("pname2").value;

    var isValidated = true ;

    if (player1 == "" || player2 =="") {
        window.alert("Missing players' name")
        isValidated = false ;
    }
    return isValidated;

}

function nextButton(){
    if(isInPlayerNameScreen){
        if (validatingPlayerNames()) {
            // store info to local storage

            // go to 
            goToSelectSizeView()
            
        }
    else{
        // go to board
    }    

    }
    

}

function goToSelectSizeView(){
    // code for switching to new screen
    console.log('adding stuff');
    // change subtitle
    document.getElementById("mid-card-subtitle").innerHTML = "Select a board size";
    console.log( document.getElementsByClassName("mid-card-subtitle").innerHTML);

    // remove textfields
    document.getElementById("pname1").remove()
    document.getElementById("pname2").remove()

    // add back buttons
    document.getElementsByClassName("back-link").item(0).style.display = 'initial'

    // add radio buttons
    document.getElementsByClassName("players-name").item(0).innerHTML = radioButtons

    // 
    isInPlayerNameScreen = false;

}