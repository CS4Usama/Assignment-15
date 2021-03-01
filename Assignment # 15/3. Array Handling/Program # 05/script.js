function largest2ndElement() {
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
    
    let max2nd = 0;
    let max = Math.max.apply(null, intArray);
    /* Another Method: */
    // intArray.splice(intArray.indexOf(max), 1);
    // let max2nd = Math.max(...intArray);

    intArray.sort(function(a,b) {return b-a;});   // Sort Array in Descending Order
    for (let i = 0; i < intArray.length; i++) {
        if(intArray[i] < max) {
            max2nd = intArray[i]
            break;
        }
    }

    if(max2nd === 0) {
        document.getElementById("ans").innerHTML = "There is no 2nd Largest Element in the Array";
    } else {
        document.getElementById("ans").innerHTML = "2nd Largest Element in the Array: " + max2nd;
    }
}
