var cardSkript = document.createElement('script');
cardSkript.src = 'cards.js';

// Bubble Sort Algorithmus
function bubble_Sort(a)
{
    var swap;
    var n = a.length-1;
    var x = a;
    do {
        swap = false;                   // tauschen nicht beendet
        for (var i=0; i < n; i++)       // solange noch zahlen in Reihe vorhanden
        {
            if (x[i] < x[i+1])          // wenn erste zahl kleiner als zweite -> tauschen
            {
               var temp = x[i];

               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;                            // Reihenlänge aktualisieren
    } while (swap);                     
 return x; 
}

// Test:
// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

let output = "";
for (key in this.cards) {
	if (cards.hasOwnProperty (key )) {
		output += "div" + this.cards.aceOfSpades.picture[key] + key + "div";
	}
}

document.querySelector ("div.picture").innerHTML = output;

function showCards(cards) {
    for( i=0; i < cards.length; i++) {
        cards.innerHTML;
    } 
}
