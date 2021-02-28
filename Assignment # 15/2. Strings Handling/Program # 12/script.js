function palindromeStr() {
    var str = document.getElementById("str").value;
    let reversedStr = '';

    /* Here we have subtracted 1 from the total length in Initialization to balance it because
    it has null character '\0' at the end of every string. That is the reverse method instead
    of simply printing a string. */

    for(let i = str.length-1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if(reversedStr === str) {
        document.getElementById("ans").innerHTML = "Your String is a Palindrome String.";
    } else {
        document.getElementById("ans").innerHTML = "Your String is not a Palindrome String.";
    }
}