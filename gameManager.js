
var player1, player2;
var pickedSize = 10;
var isInPlayerNameScreen = true;
const radioButtons = `<input type="radio" id="option1" name="size" value="10" checked>
<label class="radio-label" for="option1">10 x 10</label><br>
<input type="radio" id="option2" name="size" value="20">
<label class="radio-label" for="option2">20 x 20</label><br>  
<input type="radio" id="option3" name="size" value="30">
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

function validatingBoardSize(){
    var radioButtons = document.getElementsByName("size");
    var isValidated = false;
    for(i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            isValidated = true
            pickedSize = radioButtons[i].value ;
        }
    }
    // throw error if none is selected
    if (!isValidated){
        window.alert("No board size was selected!")
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
    }
    else{
        // try to go to board
        if(validatingBoardSize()){
            // store info to local storage
            
            //go to board
            goToBoardView()
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

function goToBoardView(){
    // save name and board size to local storage then take user to board screen

}
function makeRows(rows, cols) {
    const container = document.getElementById("table");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("button");
      cell.style.width = `${800/rows}px`
      cell.style.height = `${800/rows}px`
      cell.setAttribute('id', `button${c}`)
      //cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

 // Window.onload = makeRows(10, 10);