window.addEventListener('load', init)//init function will start


//Global Variables
let time = 5;
let score = 0; 
let is_playing ;
//levels
/*function current_level(score){
    if (score===1) {
        alert("aye it working");
    }
}*/

//DOM elements

const word_input = document.querySelector('#word-input');
const current_word = document.querySelector('#current-word');
const score_display = document.querySelector('#score');
const time_display = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const high_score = document.querySelector('#highscore');

const words = [
'Adult',
'Pendulum',
'Pepper',
'Perfume',
'Pillow',
'Rocket',
'Roof',
'Room',
'Rope',
'Saddle',
'Salt',
'Sandpaper',
'Sandwich',
'Satellite',
'Stomach',
'Sun',
'Sunglasses',
'Surveyor',
'Swimming',
'Sword'
];

//Initialize Game
 function init() {
 //load word from array
 show_word(words);
 //star matching  word-input with the shown word
 //call countdown every second
 word_input.addEventListener('input', start_match)
 setInterval(count_down,1000);
setInterval(check_status,50);
 if(Math.max(score)){
 high_score.innerHTML=score;
 }
 };

//Matching words with input
function start_match(){
  if(match_words()){
 is_playing="true";

 time=5 +1; // 1 second extra to eliminate time by website
 show_word(words);//will show new word after matching a word
 word_input.value = '';//will clear the placeholder input after matching a word
 score++;
 
  } 
//If score is  -1 , dispaly 0
if (score===-1) {
    score_display.innerHTML=score +1 ;
  } else {
  score_display.innerHTML=score;
  }
};
//match word with current input 
function match_words(){
   if(word_input.value===current_word.innerHTML){
      message.innerHTML= 'Correct!!!';
      return true;
   }else{
      message.innerHTML='';
            return false;

          }
}
 function show_word(words){
 //random  array index
 const random_index = Math.floor(Math.random() * words.length);
 //output random word
 current_word.innerHTML=  words[random_index];
 
 };

 //Countdown function 
 function count_down(){
    //Make sure countdown doesn't go down after 
    if(time>0){
       //decrement
       time --;
    }
else if (time===0){
is_playing = false;

};
//showing time
time_display.innerHTML= time; //time_display will follow the value of "time";
 

}

//Check game status 
function check_status(){
   if(!is_playing && time===0){
      message.innerHTML='Game Over!!!';
      score = -1; // won't  get zero before typing another letter since "is_playing is still true when the "Time" is over
      //break: figure out that zero 
      //2. "-1" coz  it would give zero as a score to start the game



   };
};

