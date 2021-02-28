function firstOccurrence() {
    var str = document.getElementById("str").value;
    var char = document.getElementById("char").value;
    let index;

    for (let i = 0; i < str.length; i++) {
        index = str.indexOf(char);
        break;
    }

    if(index === -1) {
        document.getElementById("ans").innerHTML = "Character Occurrence is not Found.";
    } else {
        index = parseInt(index) + 1;    // We want Position of First Occurrence not index
        document.getElementById("ans").innerHTML = "Character's First Occurrence is Found at Position: " + index;
    }
}