function printNaturalNumber() {
    var num = document.getElementById("num").value;
    let arr = [];
    for (let i = num; i >= 1; i--) {
        if(i === num) {
            arr.push(i);    // To eliminate the first space before the first element of the array
        } else {
            arr.push(' ' + i);
        }
    }
    document.getElementById("ans").innerHTML = "Natural Numbers from " + num + " to 1 are: <q>" + arr;
}