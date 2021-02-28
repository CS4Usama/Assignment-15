function compareStr() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    if(str1 == str2) {
        document.getElementById("ans").innerHTML = "Strings are Equal.";
    } else if(str1 > str2) {
        document.getElementById("ans").innerHTML = str1 + " is Greater than " + str2;
    } else {
        document.getElementById("ans").innerHTML = str1 + " is Less than " + str2;
    }

    // var res = str1.localeCompare(str2);
    // document.getElementById("ans").innerHTML = res;
}