function maxMinElem() {
    /* Process to make Integer Array from Form Input */
    var arr = document.getElementById("arr").value;
    let arrElem = '', intArray = [];

    for(let i = 0; i < arr.length; i++) {
        arrElem += arr[i];
        if(arr[i] === ',') {
            arrElem = arrElem.slice(0, -1);   // to eliminate comma from the last of an element
            arrElem = parseFloat(arrElem);  // Convert text field into Integers 
            intArray.push(arrElem);
            arrElem = '';    // again initialize. So that, new element did not have a previous value
        }
    }
    // process the last element of the array because this doesn't have a comma at the last.
    intArray.push(arrElem);


    /* Process to find Maximum and Minimum Element from the Array */
    let max = intArray[0], min = intArray[0];
    for (let i = 0; i < intArray.length; i++) {
        if(max < intArray[i]) {
            max = intArray[i];
        } if(min > intArray[i]) {
            min = intArray[i];
        }
    }
    document.getElementById("max").innerHTML = "Maximum Element in the Array: " + max;
    document.getElementById("min").innerHTML = "Minimum Element in the Array: " + min;
}