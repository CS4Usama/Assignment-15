function floorNumber() {
    var num = document.getElementById("num").value;
    let num2 = '';

    for(let i = 0; i < num.length; i++) {
        num2 += num[i];
        if(num[i] === '.') {
            num2 = num2.slice(0,-1);    // eliminate (.) decimal point from integer (string)
            break;
        }
    }

    /* num = parseInt(num); */
    // The above single statement is another method to floor the numbers...

    document.getElementById("ans").innerHTML = "Rounded Value after floor is: " + num2;
}