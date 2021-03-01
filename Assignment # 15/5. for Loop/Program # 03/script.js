function printLowerAlphabets() {
    let arr = [];
    for (let i = 97; i <= 122; i++) {
        let alph = ' ' + String.fromCharCode(i);
        arr.push(alph);
    }
    document.getElementById("small").innerHTML = arr;
}

function printUpperAlphabets() {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
        let alph = ' ' + String.fromCharCode(i);
        arr.push(alph);
    }
    document.getElementById("cap").innerHTML = arr;
}
