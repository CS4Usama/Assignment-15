function isAlpha() {
    var char = document.getElementById("char").value;
    
    if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        document.getElementById("ans").innerHTML = char + " is an Alphabet.";
    } else {
        document.getElementById("ans").innerHTML = char + " is not an Alphabet.";
    }

}