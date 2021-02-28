function roundNumber() {
    var num = document.getElementById("num").value;
    let num2 = '';

    for(let i = 0; i < num.length; i++) {
        if(num[i] === '.') {
            if(num[i+1] >= 5) {
                num2++;
            } break;
        } else {
            num2 += num[i];
            // If a number is less than 5 after (.) decimal point, this will print integer (string) before the decimal point
        }
    }
    document.getElementById("ans").innerHTML = "Rounded Value is: " + num2;
}