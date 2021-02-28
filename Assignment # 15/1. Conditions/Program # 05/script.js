function number() {
    var num = parseFloat(document.getElementById("num").value);
    
    if(num % 2 === 0) {
        document.getElementById("ans").innerHTML = num + " is an Even Number.";
    } else {
        document.getElementById("ans").innerHTML = num + " is an Odd Number.";
    }
}
