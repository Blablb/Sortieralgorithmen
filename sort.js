disabled = false;
stepCountBubble = 0;
stepCountMerge = 0;
stepCountQuick = 0;
var unsortedUnicode = [];
var cards=[];
sortedUniCode = [];
var unicodeArray = [
    '&#127137;',
    '&#127138;',
    '&#127139;',
    '&#127140;',
    '&#127141;',
    '&#127142;',
    '&#127143;',
    '&#127144;',
    '&#127145;',
    '&#127146;',
    '&#127147;',
    '&#127149;',
    '&#127150;',
];

// Bubble Sort Algorithmus
function bubbleSort(a)
{
    var swap;
    var n = a.length-1;
    var x = a;
    do {
        swap = false;                   // tauschen nicht beendet
        for (var i=0; i < n; i++)       // solange noch zahlen in Reihe vorhanden
        {
            if (x[i] > x[i+1])          // wenn erste zahl kleiner als zweite -> tauschen
            {
               var temp = x[i];

               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
            stepCountBubble = stepCountBubble + 1;
        }
        n--;                            // Reihenlänge aktualisieren
    } while (swap);                     
 return x;
}

// Merge Sort
function split_array (array) {
    const half = array.length / 2;
    stepCountMerge = stepCountMerge + 1;
    console.log(array);

    if(array.length < 2) {
        stepCountMerge = stepCountMerge + 1;
        return array
    }

    const left = array.splice(0, half);
    stepCountMerge = stepCountMerge + 1;

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
        stepCountMerge = stepCountMerge + 1;
    }
    return [ ...arr, ...left, ...right ]
}

//Quick Sort
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
        stepCountQuick = stepCountQuick + 1;
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;
        stepCountQuick = stepCountQuick + 1;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
            stepCountQuick = stepCountQuick + 1;
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

// ausgewählte Karten Speichern und ausgeben
function saveCards(a) {
    if (disabled === false) {
        cards.push(a);
        unsortedUnicode = getUnicodes(cards);
        document.getElementById('selectedCards').innerHTML = unsortedUnicode;
    }
    
}

// sucht Unicode im jeweiligen array
function getUnicodes(cards) {   
    unsortedUnicode = [];
   for (i=0; i < cards.length; i++) {
       var value = cards[i];
       value = value - 1;
       unsortedUnicode.push(unicodeArray[value])
       
    }
    return unsortedUnicode;
}

//Schrittzähler
function getSteps() {
    document.getElementById('bubbleSteps').innerHTML = 'Bubble-Sort Schritte: ' + stepCountBubble;
    document.getElementById('mergeSteps').innerHTML = 'Merge-Sort Schritte: ' + stepCountMerge;
    document.getElementById('quickSteps').innerHTML = 'Quick-Sort Schritte: ' + stepCountQuick;
}

// Algorithmen werden ausgeführt
function run() {
    if (cards.length > 0) {
// Kartenarray kopieren
        copieCardBubble = cards.slice(0,cards.length);
        copieCardQuick = cards.slice(0,cards.length);
        copieCardMerge = cards.slice(0,cards.length);
// Sortieralorithmen ausführen
        sortValue = bubbleSort(copieCardBubble);
        quick_Sort(copieCardQuick);
        split_array(copieCardMerge);
// Schritte ausgeben
        stepCount = getSteps()
// Karten ausgeben
        sortCards = getUnicodes(sortValue);
        document.getElementById('sortCards').innerHTML = sortCards;
// nach Ausführung buttun disablen
        document.getElementById('sortButton').disabled = true;
        disabled = true;
    }  
}
