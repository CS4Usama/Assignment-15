function copyArrayElements() {
    var arr = document.getElementById("arr").value;
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

    document.getElementById("ans").innerHTML = "New Array: [" + newArray + "]";
}