function reverseWords() {
    var str = document.getElementById("str").value;
    let splittedStr = str.split(" ");
    let newStr = '';
    for(let i = splittedStr.length-1; i >= 0; i--) {
        newStr += splittedStr[i] + ' ';
    }

    /* slice() method does not modify the original string. It creates a new string. Here we
    have passed 2 parameters. The first is 0, the starting point. The second is the number of
    items to remove. Passing a negative number will remove starting from the end. */

    newStr = newStr.slice(0, -1);

    /* Here we have sliced the last index because for loop adds a space after every word and we
    don't want a space at the end of a string. */

    document.getElementById("ans").innerHTML = "Your String in Reverse Order of Words is: <q>" + newStr;
}