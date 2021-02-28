function deleteArrayElement() {
    var arr = document.getElementById("arr").value;
    var pos = parseInt(document.getElementById("pos").value);
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

    // delete an array element at a specified position
    if(pos === 0 || pos > newArray.length) {
        document.getElementById("ans").innerHTML = "Please Enter the Correct Position of the Array Element.";
    } else {
        newArray.splice(pos-1, 1);
        document.getElementById("ans").innerHTML = "Array after deletion of the element: [" + newArray + "]";
    }
}