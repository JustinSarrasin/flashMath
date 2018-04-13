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
      },
      {
         question: "15 + 2 = 11",
         answer: false
      },
      {
         question: "14 + 4 = 14",
         answer: false
      },
      {
         question: "8 + 2 = 10",
         answer: true
      },
      {
         question: "3 + 2 = 3",
         answer: false
      },
      {
         question: "5 + 4 = 9",
         answer: true
      },
      {
         question: "8 - 4 = 4",
         answer: true
      },
      {
         question: "4 + 2 = 8",
         answer: false
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
         question: "17 + 2 = 17",
         answer: false
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

// repeats questions and handles click methods to bring new question
freakMath.getAnswer = (answer) => {
   $('.correct').off().on('click', function (e) {
      e.preventDefault();

      let currentQuestion = (results[freakMath.counter].question);

      let currentAnswer = (results[freakMath.counter].answer);

      // checks to see if answer is correct and adds point to score
      if (currentAnswer === true) {
         freakMath.addScore();
         // timer countdown
         freakMath.countdown = 3;
         clearInterval(freakMath.timerID);
      } else {
         freakMath.hideQuestionPage();
         $('.gameOver').show();
      }

      freakMath.counter = freakMath.counter + 1;

      freakMath.getQuestion(results[freakMath.counter].question);
      freakMath.getAnswer(results[freakMath.counter].answer)
   })

   $('.wrong').off().on('click', function (e) {
      e.preventDefault();

      let currentQuestion = (results[freakMath.counter].question);

      let currentAnswer = (results[freakMath.counter].answer);
      
      
      if (currentAnswer === false) {
         freakMath.addScore();

         freakMath.countdown = 3;
         clearInterval(freakMath.timerID);
      } else {
         freakMath.hideQuestionPage();
         $('.gameOver').show();
      }

      freakMath.counter = freakMath.counter + 1;

      freakMath.getQuestion(results[freakMath.counter].question);
      freakMath.getAnswer(results[freakMath.counter].answer)
   })  
}

// question timer
freakMath.countdown = 3;
freakMath.timer = () => {
   if(freakMath.countdown === 0){
      clearInterval(freakMath.timerID);
      freakMath.hideQuestionPage();
      $('.gameOver').show();
   } else {
      $('.runningTime').empty(freakMath.countdown);
      $('.runningTime').append("Timer:" +freakMath.countdown);
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
   freakMath.hideQuestionPage();
   freakMath.hideResultPage();
   freakMath.addScore();
}

// Document ready function
$(function () {
   freakMath.init();
});


