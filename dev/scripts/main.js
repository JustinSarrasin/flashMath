// App object
const freakMath = {};

// starting score of player 
freakMath.score = -1;

// starting number of questions produced
freakMath.counter = -1;

// lists of questions
const results = [
      {
         question: "2 + 2 = 4",
         answer: true
      },
      {
         question: "10 + 4 = 14",
         answer: true
      },
      {
         question: "8 + 2 = 9",
         answer: false
      },
      {
         question: "1 + 2 = 3",
         answer: true
      },
      {
         question: "5 + 5 = 9",
         answer: false
      },
      {
         question: "8 - 4 = 3",
         answer: false
      },
      {
         question: "4 + 2 = 6",
         answer: true
      },
      {
         question: "3 + 2 = 9",
         answer: false
      },
      {
         question: "10 - 2 = 8",
         answer: true
      },
      {
         question: "1 - 1 = 0",
         answer: true
      },
      {
         question: "7 + 2= 9",
         answer: true
      },
      {
         question: "9 + 2 = 15",
         answer: false
      },
      {
         question: "10 + 2 = 11",
         answer: false
      },
      
      {
         question: "8 + 1 = 9",
         answer: true
      },
      {
         question: "5 + 3 = 8",
         answer: true
      },
      {
         question: "4 + 2 = 6",
         answer: true
      },
      {
         question: "10 + 3 = 7",
         answer: false
      },
      {
         question: "10 + 2 = 12",
         answer: true
      },
      {
         question: "2 - 2 = 4",
         answer: false
      },
      {
         question: "10 + 4 = 14",
         answer: true
      },
      {
         question: "4 + 2 = 9",
         answer: false
      },
      {
         question: "2 + 4 = 4",
         answer: false
      },
      {
         question: "4 + 3 = 4",
         answer: false
      },
      {
         question: "8 - 2 = 6",
         answer: true
      },
      {
         question: "10 + 3 = 7",
         answer: false
      },
      {
         question: "10 + 2 = 12",
         answer: true
      },
      {
         question: "2 + 2 = 4",
         answer: true
      },
      {
         question: "10 + 4 = 14",
         answer: true
      },
      {
         question: "8 + 2 = 9",
         answer: false
      },
      {
         question: "2 + 1 = 4",
         answer: false
      },
      {
         question: "3 + 3 = 4",
         answer: false
      },
      {
         question: "4 + 2 = 6",
         answer: true
      },
      {
         question: "14 + 3 = 7",
         answer: false
      },
      {
         question: "9 + 2 = 12",
         answer: true
      }
   ] 

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

freakMath.hideResultPage = () => {
   $('.gameOver').hide();
}

// question page
freakMath.questionPage = () => {
   $('.start').on('click', function (e) {
      e.preventDefault();

   clearInterval(freakMath.timerId);
   freakMath.timerId = setInterval(freakMath.timer, 1000);
  
   freakMath.counter = freakMath.counter + 1;

   freakMath.getQuestion(results[freakMath.counter].question);
   freakMath.getAnswer(results[freakMath.counter].answer)
   })
}

// puts question to page
freakMath.getQuestion = (question) => {
   $('.question').empty();
   $('.question').append(question);
   console.log(question);
   // freakMath.counter;
   console.log(freakMath.counter);
}

freakMath.getAnswer = (answer) => {
   // let clicked = false;
   // function clickHandler(){
   //    clicked = true;
   // }
   
   
   $('.correct').off().on('click', function (e) {
      e.preventDefault();
      // clicked = true;
      // console.log(clicked)
      let currentQuestion = (results[freakMath.counter].question);
      // console.log(currentQuestion)

      let currentAnswer = (results[freakMath.counter].answer);

      if (currentAnswer === true) {
         freakMath.addScore();

         freakMath.countdown = 3;
         clearInterval(freakMath.timerID);
         // console.log('correct');
         console.log('giddyup')
      } else {
         freakMath.hideQuestionPage();
         $('.gameOver').show();
         console.log('nope');
      }

      freakMath.counter = freakMath.counter + 1;

      freakMath.getQuestion(results[freakMath.counter].question);
      freakMath.getAnswer(results[freakMath.counter].answer)
   
      

      console.log('clicked');
   })

   $('.wrong').off().on('click', function (e) {
      e.preventDefault();
      // clicked = true;
      // console.log(clicked)

      let currentQuestion = (results[freakMath.counter].question);

      let currentAnswer = (results[freakMath.counter].answer);
      
      
      if (currentAnswer === false) {
         freakMath.addScore();

         freakMath.countdown = 3;
         clearInterval(freakMath.timerID);
         // console.log('giddyuasdfp')
      } else {
         freakMath.hideQuestionPage();
         $('.gameOver').show();
      }

      freakMath.counter = freakMath.counter + 1;

      freakMath.getQuestion(results[freakMath.counter].question);
      freakMath.getAnswer(results[freakMath.counter].answer)
   

      console.log('clicked');
   })
   console.log(answer)  
}

// triviaApp.countdown = 21;
// triviaApp.timer = function () {
//    if (triviaApp.countdown === 0) {
//       clearInterval(triviaApp.timerId);
//       swal("Oh No!!", "Out Of Time")
//    } else {
//       triviaApp.countdown--;
//       $('.mycounter').html(`<h3>` + triviaApp.countdown + `</h3>`);
//    }
// }
// question timer
freakMath.countdown = 3;
freakMath.timer = () => {
   if(freakMath.countdown === 0){
      clearInterval(freakMath.timerID);
      freakMath.hideQuestionPage();
      $('.gameOver').show();
   } else {
      $('.runningTime').empty(freakMath.countdown);
      $('.runningTime').append(freakMath.countdown);
      freakMath.countdown--;
   }
}


// add score for every correct answer
freakMath.addScore = () => {
   freakMath.score++;
   console.log(freakMath.score);
   $('.runningScore').empty(freakMath.score);
   $('.runningScore').append("Score:" + freakMath.score);
}

// toggle sound option on question page 
freakMath.toggleSound = () => {

}






// Init function
freakMath.init = () => {
   freakMath.start();
   freakMath.questionPage();
   freakMath.timer();
   // freakMath.getInfo();
   freakMath.hideQuestionPage();
   freakMath.hideResultPage();
   // freakMath.nextQuestion();
   // freakMath.getQuestion();
   // freakMath.getAnswer();
   // freakMath.showQuestion();
   // freakMath.queueNextQuestion();
   // freakMath.correct();
   freakMath.addScore();
   // freakMath.wrong();
}

// Document ready function
$(function () {
   freakMath.init();
});


