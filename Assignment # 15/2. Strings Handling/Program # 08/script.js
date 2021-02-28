function findChar() {
    var str = document.getElementById("str").value;
    let alpha, num, specChar;
    alpha = num = specChar = 0;

    for(let i = 0; i < str.length; i++) {
        if((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
            alpha++;
        } else if(str[i] >= '0' && str[i] <= '9') {
            num++;
        } else {
            if(str[i] === ' ') {}   // ignore Space Counting in Special Characters
            else {
                specChar++;
            }
        }
    }
    document.getElementById("ans").innerHTML = "Total Number of Alphabets in Your String: " + alpha + "</br>Total Number of Digits in Your String: " + num + "</br>Total Number of Special Characters in Your String: " + specChar;
}