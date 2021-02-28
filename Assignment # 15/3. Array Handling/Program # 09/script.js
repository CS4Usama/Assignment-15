function insertElementInArray() {
    var arr = document.getElementById("arr").value;
    var elem = document.getElementById("elem").value;
    let arrElem = '', newArray = [];

    for(let i = 0; i < arr.length; i++) {
        arrElem += arr[i];
        if(arr[i] === ',') {
            arrElem = arrElem.slice(0, -1);   // to eliminate comma from the last of an element
            newArray.push(arrElem);     // copy elements of one array to another array
            arrElem = '';    // again initialize. So that, new element did not have a previous value
        }
    }
    // process the last element of the array because this doesn't have a comma at the last.
    newArray.push(arrElem);

    // insert a new element in the array
    newArray.push(elem);

    document.getElementById("ans").innerHTML = "Array with a new inserted Element: [" + newArray + "]";
}