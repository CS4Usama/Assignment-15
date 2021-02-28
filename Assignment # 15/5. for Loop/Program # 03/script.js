function printAlphabets() {
    let arr = [];
    for (let i = 97; i <= 122; i++) {
        let alph = ' ' + String.fromCharCode(i);
        arr.push(alph);
    }
    document.getElementById("ans").innerHTML = arr;
}