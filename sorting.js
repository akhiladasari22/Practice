// var names = [ "Jeffrey", "Fabiano", "Danil", "Ben","Adam"];


// // returns the sorted array
// console.log(names.sort());

// // modifies the array in place
// console.log(names);

// var priceList = [1000, 50, 2, 7, 14];
// priceList.sort();

// // Number is converted to string and sorted
// console.log(priceList)

var dataArray = [96,5,42,1,6,37,21]
// Function - Insertion Sort Algo.
function insertSort(unsortedData) {
for (let i = 1; i < unsortedData.length; i++) {
let current = unsortedData[i];
let j;
for(j=i-1; j >= 0 && unsortedData[j] > current;j--) {
unsortedData[j + 1] = unsortedData[j]
}
unsortedData[j + 1] = current;
}
return unsortedData;
}
// print sorted array
console.log(insertSort(dataArray));