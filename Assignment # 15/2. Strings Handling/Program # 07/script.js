function toggleCase() {
    var str = document.getElementById("str").value;
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    document.getElementById("ans").innerHTML = "Your String in Toggle Case is: <q>" + newStr;
}