function findWords() {
    var str = document.getElementById("str").value;
    let word = 1;

    /* Here we have initialized word to 1 because it counts spaces, not words. So, if 1 space is
    counted, it means there are 2 words but if-condition increments by 1 because it found only 1
    space. So, to balance it we have to initialize it by 1. */

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            word++;
        }
    }
    document.getElementById("ans").innerHTML = "Total Number of Words in Your String: " + word;
}