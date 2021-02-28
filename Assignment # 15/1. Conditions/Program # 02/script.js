function findMax() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if(num1 > num2) {
        if(num1 > num3) {
            max = num1;
        } else {
            max = num3;
        }
    } else {
        if(num2 > num3) {
            max = num2;
        } else {
            max = num3;
        }
    }

    document.getElementById("ans").innerHTML = "The Maximum Number is: " + max;
}