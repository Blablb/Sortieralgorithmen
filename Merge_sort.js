unsortDeck = [32, 23, 1, 5, 6, 8, 12, 11, 26, 2, 4, 3];

console.log("twat");

function split_array (array) {
    const half = array.length / 2

    if(array.length < 2) {
        return array
    }

    const left = array.splice(0, half)

    return merge(split_array(left), split_array(array))
}

function merge (left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]){
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}

console.time();
split_array(array);
console.timeEnd();