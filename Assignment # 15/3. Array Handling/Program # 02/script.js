function printNegElem() {
    var arr = document.getElementById("arr").value;
    let newArr = '', negElem = [];

    for(let i = 0; i < arr.length; i++) {
        newArr += arr[i];
        if(arr[i] === ',') {
            newArr = newArr.slice(0, -1);   // to eliminate comma from the last of an element
            if(newArr < 0) {
                negElem.push(newArr);   // push Negative Elements of newArr in the new Integer Array 'negElem'
            }
            newArr = '';    // again initialize. So that, new element did not have a previous value
        }
    }
    // process the last element of the array because this doesn't have a comma at the last
    if(newArr < 0) {
        negElem.push(newArr);
    }
    document.getElementById("ans").innerHTML = "Negative Elements of the Array: " + negElem;
}