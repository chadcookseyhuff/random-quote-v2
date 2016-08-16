// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* Define variables - create an array to house quotes */

var usedQuotes = []; // database for random quotes used to be stored in to avoid duplicate selection before array is used up entirely
var splicedQuote = []; // method to delegate quotes to and from arrays

var quotes = [
  {
      quote: 'Science is not only compatible with spirituality; it is a profound source of spirituality.',
      source: 'Carl Sagan',
	  citation: 'The Demon-Haunted World: Science as a Candle in the Dark',
	  year: 1997,
	  tag: 'Inspirational' 
  },
  {
      quote: 'Take away from love the fullness of self surrender, the completeness of personal commitment, and what remains will be a total denial and negation of it.',
      source: 'Pope John Paul II',
	  citation: 'Love and Responsibility',
	  year: 1993,
	  tag: 'Spirtuality'   
  },
  {
      quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
      source: 'C.S. Lewis',
	  citation: 'The Four Loves',
	  year: 1960,
	  tag: 'Inspirational' 
  },
  {
	  quote: 'Without music, life would be a mistake.',
	  source:'Friedrich Nietzsche',
	  citation: 'Twilight of the Idols',
	  year: 1889,
	  tag: 'Inspirational'
  },
  {
	  quote: 'It is better to be hated for what you are than to be loved for what you are not.',
	  source: 'Andre Gide',
	  citation: 'Autumn Leaves',
	  year: 1950,
	  tag: 'Inspirational'
  }
];

// create a function to grab random quote from the array and move to used quotes and return the quote

function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var splicedQuote = quotes.splice(randomQuote, 1)[0];
    usedQuotes.push(splicedQuote);
    if (quotes.length == 0) {
      quotes = usedQuotes;
      usedQuotes = [];
    }
    return splicedQuote;
}

// create a function to develop random color codes

function RandomColors() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return colors;
}

// create a function to print the randomly selected quote to html and generate new background color
// set a 10 second interval to repeat the function automatically

var intervalID = window.setInterval(printQuote, 10000);
function printQuote() {
	var randomQuote = getRandomQuote();
  	var html = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source +
  	'<span class="citation">' + randomQuote.citation + '</span>'+ '<span class="year">' + randomQuote.year + '</span>' + '<span class="catagory">'+ ': ' + randomQuote.tag + '</span>' + '</p>';
	
  	document.getElementById('quote-box').innerHTML = html;
	var getRandomColors = RandomColors();
    document.body.style.backgroundColor = getRandomColors;
}

