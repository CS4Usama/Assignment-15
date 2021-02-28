function divNum() {
    var num = parseInt(document.getElementById("num").value);
    
    if(num % 5 === 0 && num % 11 === 0) {
        document.getElementById("ans").innerHTML = num + " is Divisible by 5 and 11.";
    } else {
        document.getElementById("ans").innerHTML = num + " is not Divisible by 5 and 11.";
    }

}