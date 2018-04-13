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
      },
      {
         question: "3+3=4",
         answer: false
      },
      {
         question: "4+2=6",
         answer: true
      },
      {
         question: "10+3=7",
         answer: false
      },
      {
         question: "10+2=12",
         answer: true
      },
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
      },
      {
         question: "3+3=4",
         answer: false
      },
      {
         question: "4+2=6",
         answer: true
      },
      {
         question: "10+3=7",
         answer: false
      },
      {
         question: "10+2=12",
         answer: true
      },
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
      },
      {
         question: "3+3=4",
         answer: false
      },
      {
         question: "4+2=6",
         answer: true
      },
      {
         question: "10+3=7",
         answer: false
      },
      {
         question: "10+2=12",
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

// freakMath.getInfo = () => {
//    // freakMath.getQuestion(results[freakMath.counter].question);
//    // freakMath.getAnswer(results[freakMath.counter].answer)
//    // freakMath.questionPage();
// }

// question page
freakMath.questionPage = () => {
   $('.start').on('click', function (e) {
      e.preventDefault();
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

// const currentQuestion = (results[freakMath.counter].question);

// const currentAnswer = (results[freakMath.counter].answer);


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
         // console.log('correct');
         console.log('giddyup')
      } else {
         console.log('nope');
      }
      

      console.log('clicked');
   })

   $('.wrong').off().on('click', function (e) {
      e.preventDefault();
      clicked = true;
      // console.log(clicked)

      let currentQuestion = (results[freakMath.counter].question);

      let currentAnswer = (results[freakMath.counter].answer);
      
      
      if (currentAnswer === false) {
         freakMath.addScore();
         console.log('giddyuasdfp')
      } else {
         alert('nope');
      }

      console.log('clicked');
   })
   console.log(answer)  
}

// freakMath.nextQuestion = () => {

// }




// freakMath.correct = (question) => {

// } 


// freakMath.wrong = (wrong) => {
//    // $('.wrong').on('click', function() {
//    //    if( === false) {
//    //       console.log('correct');
//    //    } else {
//    //       console.log('wrong');
//    //    }
//    // })
// }

// question timer
freakMath.timer = () => {

}


// add score for every correct answer
freakMath.addScore = () => {
   freakMath.score++;
   // console.log(freakMath.score);
}

// toggle sound option on question page 
freakMath.toggleSound = () => {

}






// Init function
freakMath.init = () => {
   freakMath.start();
   freakMath.questionPage();
   // freakMath.getInfo();
   freakMath.hideQuestionPage();
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


