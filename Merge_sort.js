array = [32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

step_count = 0;

function split_array (array) {
    const half = array.length / 2

    if(array.length < 2) {
        return array
    }

    const left = array.splice(0, half)

    step_count = step_count + 1;

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
        step_count = step_count + 1;
    }
    return [ ...arr, ...left, ...right]
}

console.log(split_array(array));
console.log(step_count);