// App object
const freakMath = {};

// starting score of player 
freakMath.score = 0;

// starting number of questions produced
freakMath.counter = 0;

const results = [
      {
         question: "2+2=4",
         answer: true
      },
      {
         question: "10+4=14",
         answer: true
      },
      {
         question: "8+2=9",
         answer: false
      },
      {
         question: "2+1=4",
         answer: false
      }
   ] 

// let newArray = [];
// for(i = 0; i < results.length; i++){
//    console.log(results[Math.floor(Math.random() * results.length)]);
// }
// console.log(results)

let rand = results[Math.floor(Math.random() * results.length)];

// console.log(rand.question, rand.answer);
// console.log(rand);


// starting home page
freakMath.start = () => {
   $('.play').on('click', function(){
      $('.questionPage').show();
      $('.startPage').hide();
   })
}

// hides question page
freakMath.hideQuestionPage = () => {
   $('.questionPage').hide();

}

// question page
freakMath.questionPage = () => {
   
}

// get new question
freakMath.getQuestion = () => {
   freakMath.counter = freakMath.counter + 1;
   // freakMath.showQuestion(questions.results.question);
   
   // get right answer

   // get wrong answer (Maybe two different functions?????????????????????)
}



// freakMath.showQuestion = () => {
//    $('.question').append(`<h3>` + questions.results.question + `<h3>`);
// }

freakMath.showQuestion = () => {
   let newArray = [];
   // for (i = 0; i < results.length; i++) {
   //    newArray = results[Math.floor(Math.random() * results.length)];
   //    console.log(newArray)
      console.log(results)
      // console.log(results[Math.floor(Math.random() * results.length)]);
      // return results[Math.floor(Math.random() * results.length)]
   $('.question').append(`<h3>` + results[Math.floor(Math.random() * results.length)].question + `<h3>`);
   // }
   

   // let reformattedArray = results.map(obj => {
   //    let rObj = {};
   //    rObj[obj.key] = obj.value;
   //    return rObj;
   //    console.log(results);
   // })

   // freakMath.correct(rand.question);

}

freakMath.correct = (correct) => {
   $('.correct').on('click', function() {
      if(rand.answer === true){
         console.log('correct');
      } else {
         console.log('wrong');
      }
      $('.question').empty();
      $('.question').append(`<h3>` + results[Math.floor(Math.random() * results.length)].question + `<h3>`);
      })
      // console.log(correct);
   
}

freakMath.wrong = (wrong) => {
   $('.wrong').on('click', function() {
      if(rand.answer === false) {
         console.log('correct');
      } else {
         console.log('wrong');
      }
   })
}

// question timer
freakMath.timer = () => {

}


// add score for every correct answer
freakMath.addScore = () => {

}

// toggle sound option on question page 
freakMath.toggleSound = () => {

}






// Init function
freakMath.init = () => {
   freakMath.start();
   freakMath.hideQuestionPage();
   freakMath.getQuestion();
   freakMath.showQuestion();
   // freakMath.queueNextQuestion();
   freakMath.correct();
   freakMath.wrong();
}

// Document ready function
$(function () {
   freakMath.init();
});