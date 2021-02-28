function printArray() {
    var arr = document.getElementById("arr").value;
    let newArr = '', c = 0;

    for(let i = 0; i < arr.length; i++) {
        newArr += arr[i];
        if(arr[i] === ',') {
            newArr = newArr.slice(0, -1);   // to eliminate comma from the last of an element
            alert("Array[" + c + "] Element is:   " + newArr);
            c++;
            newArr = '';    // again initialize. So that, new element did not have a previous value
        }
    }
    // display the last element of the array because this doesn't have a comma at the last
    alert("Array[" + c + "] Element is:   " + newArr);
}