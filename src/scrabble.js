class Scrabble {

  constructor(scrabbleString = '') {
    this.scrabbleString = scrabbleString;
  }
  score() {
    let scrabbleString = this.scrabbleString;
    
    if (scrabbleString == null) {
      return 0;
    }
    const scrabbleValue = {
      array:
      [
      {1:['A','a','E','e','I','i','O','o','U','u','L','l','N','n','R','r','S','s','T','t']},
      {2:['D','d','G','g']},
      {3:['B','b','C','c','M','m','P','p']},
      {4:['F','f','H','h','V','v','W','w','Y','y']},
      {5:['K','k']},
      {8:['J','j','X','x']},
      {10:['Q','q','Z','z']}
      ]
    }

    let totalScore = 0;
    let key = 0;
    let extraScoreArray = [];
    let checkClosing_1=true,checkClosing_2=true;
    const size = scrabbleString.length;

    //If String is empty
    if (size === 0) {
      return 0;
    }
    //Convert scrabbleString To values
    for (let i = 0; i < size; i++) {

      scrabbleValue.array.filter(function (array) {
        // console.log('Key :'+Object.keys(array));
        // console.log('Value :'+Object.values(array));

        for (let anArray of Object.values(array)[0]) {
          if (scrabbleString[i] == anArray) {
            key = Object.keys(array);
            console.log('key :'+key);
            totalScore = totalScore + parseInt(key);
            break;
          }
        }
    
      });
      if (scrabbleString[i] === '{'&&checkClosing_1===true) {
        console.log('key :'+key);
          checkClosing_1=false;
      }else if(scrabbleString[i] === '}'&&checkClosing_1===false){
           
        checkClosing_1=true;
        extraScoreArray.push(key);
      }
      if (scrabbleString[i] === '['&&checkClosing_2===true) {
        console.log('key :'+key);
          checkClosing_2=false;

      }else if(scrabbleString[i] === ']'&&checkClosing_2===false){
           
        checkClosing_2=true;
        extraScoreArray.push(key);
      }
     
    
    }
    //Check for Double or Triple Word
    const lastIndex = size - 1;
    console.log(lastIndex);
    if (scrabbleString[0] === '{' && scrabbleString[lastIndex] === '}') {
      totalScore = totalScore * 2;
    } else if (scrabbleString[0] === '[' && scrabbleString[lastIndex] === ']') {
      totalScore = totalScore * 3;
    }
    //check for Double and Triple Letter
    //const uniqueExtraScore = [...new Set(extraScoreArray)];
    //console.log('uniqueExtraScore '+uniqueExtraScore);
   
    const extraScore = extraScoreArray.reduce(function (sum, score) {
      console.log('sum'+sum);
      return sum=sum+parseInt(score);
    },0);
    console.log('extraScore'+extraScore);
      totalScore=extraScore+totalScore;

    console.log('totalScore : ' + totalScore);

    return totalScore;
  }

}
let scrabble = new Scrabble("d0g");
scrabble.score() // 
let scrabble1 = new Scrabble("d{[0}]g");
scrabble1.score() // 
module.exports = Scrabble
