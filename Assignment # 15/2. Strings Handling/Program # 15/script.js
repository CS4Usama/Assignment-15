function lastOccurrence() {
    var str = document.getElementById("str").value;
    var char = document.getElementById("char").value;
    let index;

    for (let i = 0; i < str.length; i++) {
        index = str.lastIndexOf(char);
    }

    if(index === -1) {
        document.getElementById("ans").innerHTML = "Character Occurrence is not Found.";
    } else {
        index = parseInt(index) + 1;    // We want Position of Last Occurrence not index
        document.getElementById("ans").innerHTML = "Character's Last Occurrence is Found at Position: " + index;
    }
}