function findMax() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }

    document.getElementById("ans").innerHTML = "The Maximum Number is: " + max;
}