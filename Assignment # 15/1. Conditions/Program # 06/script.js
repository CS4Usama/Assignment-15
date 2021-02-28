function isLeap() {
    var num = parseInt(document.getElementById("num").value);
    
    if(num % 4 === 0) {
        document.getElementById("ans").innerHTML = num + " is a Leap Year.";
    } else {
        document.getElementById("ans").innerHTML = num + " is not a Leap Year.";
    }
}
