function isVowel() {
    var char = document.getElementById("char").value;
    
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        document.getElementById("ans").innerHTML = char + " is a Vowel.";
    } else {
        document.getElementById("ans").innerHTML = char + " is a Consonant.";
    }
}
