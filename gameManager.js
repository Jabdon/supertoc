
var player1, player2;

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

function goToSelectSizeView(){
    if (validatingPlayerNames()) {
        // code for switching to new screen
    }

}