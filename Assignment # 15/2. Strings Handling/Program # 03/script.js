function concatStr() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    document.getElementById("ans").innerHTML = "Concatination of Two Strings: <q>" + `${str1}` + ' ' + `${str2}`;
}