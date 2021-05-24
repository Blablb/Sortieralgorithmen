step_count = 0;

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		step_count = step_count + 1
		return origArray;
  	} else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;
		step_count = step_count + 1

		for (var i = 0; i < length; i++) {
	  		if (origArray[i] <= pivot) {
				left.push(origArray[i]);
	  		} else {
				right.push(origArray[i]);
	  		}
	  		step_count = step_count + 1
		}

	return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

var myArray = [32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
console.log("Steps: " + step_count);