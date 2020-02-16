//This is the file to figure out your most used word, in order to find synonyms.

var string = "what is up up"

function mostUsed(str){
  var count = 0;
  var tempCount = 0;
  var words = str.split(" ");
  var most = words[0];

  for(var i = 0; i < words.length; i++){
    for(var j = 0; j < words.length;j++){
      if(words[i] == words[j]){
        tempCount++;
      }
    }
    if(tempCount > count){
      most = words[i];
      count = tempCount;
    }
    tempCount = 0;
  }
  return most;
}

console.log(mostUsed(string));
