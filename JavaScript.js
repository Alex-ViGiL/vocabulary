var randomNumber

var randomWord =  function(){
	randomNumber = Math.floor(Math.random() * words.length)

	var newWords = words[randomNumber].word 

	$('#word').text(newWords)
	$('#translete').text('-------')
	
}

var translete = function(){

	var newWords = words[randomNumber].translete

$('#translete').text(newWords)

}

$('#button1').click(randomWord)

$('#button2').click(translete)

var englishWord
var englishTranslete
var saveArrs
var slov = words.length
var newSlovo


var addWord = function(){

 englishWord = prompt('Английское слово')
 englishTranslete = prompt('Слово на вашем языке')

 saveArrs = {
	word: englishWord,
    translete: englishTranslete
}
}

var saveWord = function(){

$('#addWord').text(englishWord)
$('#addTranslete').text(englishTranslete)
  words.push(saveArrs)	
}


$('#slovVSlovare').text(slov)
$('#slovo').click(addWord) 
$('#saveSlovo').click(saveWord)
//-------------------------------------
