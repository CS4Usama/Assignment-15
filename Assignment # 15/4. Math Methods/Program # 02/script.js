function ceilNumber() {
    var floatNum = parseFloat(document.getElementById("num").value);
    let intNum = parseInt(floatNum);
    if(floatNum > intNum) {
        intNum++;
        document.getElementById("ans").innerHTML = "Rounded Value after ceil is: " + intNum;
    } else {
        document.getElementById("ans").innerHTML = "Rounded Value after ceil is: " + intNum;
    }
}