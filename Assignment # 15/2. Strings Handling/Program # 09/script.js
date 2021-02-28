function findVowel() {
    var str = document.getElementById("str").value;
    let vowel, cons;
    vowel = cons = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U' || str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowel++;
        } else if((str[i] >= 'B' && str[i] <= 'Z') || (str[i] >= 'b' && str[i] <= 'z')) {
            cons++;
        } else {}   // ignore Spaces, Digits and Special Character's Counting
    }
    document.getElementById("ans").innerHTML = "Total Number of Vowels in Your String: " + vowel + "</br>Total Number of Consonants in Your String: " + cons;
}