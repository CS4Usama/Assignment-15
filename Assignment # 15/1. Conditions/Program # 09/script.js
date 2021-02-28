function checkChar() {
    var char = document.getElementById("char").value;
    
    if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        document.getElementById("ans").innerHTML = char + " is an Alphabet.";
    } else if(char >= 0 && char <= 9) {
        document.getElementById("ans").innerHTML = char + " is a Digit.";
    } else {
        document.getElementById("ans").innerHTML = char + " is a Special Character.";
    }

}