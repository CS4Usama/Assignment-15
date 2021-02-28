function printEvenNumbers() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0) {
            arr.push(' ' + i);
        }
    }
    document.getElementById("ans").innerHTML = arr;
}