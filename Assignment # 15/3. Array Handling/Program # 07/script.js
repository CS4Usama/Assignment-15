function countArrNegElem() {
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


    /* Process to find Even and Odd Elements from the Array */
    let neg = 0;
    for (let i = 0; i < intArray.length; i++) {
        if(intArray[i] < 0) {
            neg++;
        }
    }
    document.getElementById("neg").innerHTML = "Total Number of Negative Elements in the Array: " + neg;
}