function number() {
    var num = parseFloat(document.getElementById("num").value);
    
    if(num > 0) {
        document.getElementById("ans").innerHTML = num + " is a Positive Number.";
    } else if(num < 0) {
        document.getElementById("ans").innerHTML = num + " is a Negative Number.";
    } else if(num === 0) {
        document.getElementById("ans").innerHTML = num + " is a Zero.";
    } else {
        document.getElementById("ans").innerHTML = "Please Enter a Number.";
    }

}