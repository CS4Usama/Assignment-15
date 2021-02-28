function printNaturalNumber() {
    var num = document.getElementById("num").value;
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if(i === 1) {
            arr.push(i);    // To eliminate the first space before the first element of the array
        } else {
            arr.push(' ' + i);
        }
    }
    document.getElementById("ans").innerHTML = "Natural Numbers from 1 to " + num + " are: <q>" + arr; 
}