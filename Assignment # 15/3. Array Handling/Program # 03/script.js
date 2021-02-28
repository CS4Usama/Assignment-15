function SumOfArrayElements() {
    var arr = document.getElementById("arr").value;
    let newArr = '', sum = 0;

    for(let i = 0; i < arr.length; i++) {
        newArr += arr[i];
        if(arr[i] === ',') {
            newArr = newArr.slice(0, -1);   // to eliminate comma from the last of an element
            sum += parseFloat(newArr);
            newArr = '';    // again initialize. So that, new element did not have a previous value
        }
    }
    /* process the last element of the array because this doesn't have a comma at the last.
    We have chosen the text input field in the form. So, we have to convert it into Digits to sum it. */
    
    sum += parseFloat(newArr);
    document.getElementById("ans").innerHTML = "Sum of all the Elements: " + sum;
}