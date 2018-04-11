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
      }
   ] 

let newArray = [];
for(i = 0; i < results.length; i++){
   newArray.push((results[Math.floor(Math.random() * results.length)]));
}
// console.log(newArray[0].question)

// let rand = results[Math.floor(Math.random() * results.length)];

newArray.forEach(function(index, i){
   // console.log(index, i)
   // console.log(newArray[0].question)
})

// newArray.map((item, i) => {
//    // console.log(index, i)
//    // console.log(item.question);
//    newArray = newArray
//       .map(question => item.question)
//       .map(answer => item.answer)
//    // console.log(index, i)
//    console.log(item.answer, item.question);
// })



// console.log(newArray[i]);

// console.log(newArray.question)
// console.log(newArray[0].answer)

// console.log(index)

// console.log(rand)

// let reformattedArray = results.map(obj => {
//    let rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
//    console.log(results);
// })


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
   $('.correct').on('click', function () {
      
      freakMath.counter = freakMath.counter + 1;

      freakMath.getQuestion(newArray[freakMath.counter].question);
      freakMath.getAnswer(newArray[freakMath.counter].result)

      console.log(newArray[freakMath.counter].question)
      console.log(newArray[freakMath.counter].answer)
      console.log([freakMath.counter])
   })

   freakMath.counter = freakMath.counter + 1;

   freakMath.getQuestion(newArray[freakMath.counter].question);
   freakMath.getAnswer(newArray[freakMath.counter].result)

   console.log(newArray[freakMath.counter].question)
   console.log(newArray[freakMath.counter].answer)
   console.log([freakMath.counter])
}

// get new question
freakMath.getQuestion = (question) => {

   // freakMath.counter = freakMath.counter + 1;
   console.log(freakMath.counter);
   $('.question').empty();
   $('.question').append(question);
   console.log(question)
   // $('.question').empty();
   // $('.question').append(question);

   // $('.correct').on('click', function (){
   //    freakMath.question = (question) => {
   //       $('.question').empty();
   //       // $('.question').append(question);
         
   //    }
   // })
   
}

freakMath.getAnswer = () => {

}



// freakMath.showQuestion = () => {
//    $('.question').append(`<h3>` + questions.results.question + `<h3>`);
// }

// freakMath.showQuestion = () => {
//    let newArray = [];
//    // for (i = 0; i < results.length; i++) {
//    //    newArray = results[Math.floor(Math.random() * results.length)];
//    //    console.log(newArray)
//       console.log(results)
//       // console.log(results[Math.floor(Math.random() * results.length)]);
//       // return results[Math.floor(Math.random() * results.length)]
//    $('.question').append(`<h3>` + results[Math.floor(Math.random() * results.length)].question + `<h3>`);
//    // }
   


//    // freakMath.correct(rand.question);

// }
freakMath.showQuestion = () => {
   // let newArray = [];
   // for (i = 0; i < results.length; i++) {
   //    newArray = results[Math.floor(Math.random() * results.length)];
   //    console.log(newArray)
      // console.log(results)
      // newArray.map((item, i) => {
      // // console.log(index, i)
      // // console.log(item.question);
      // newArray = newArray
      //    .map(question => item.question)
      //    .map(answer => item.answer)
      // console.log(index, i)
      // console.log(item.answer, item.question);
      // $('.question').append(`<h3>` + item.question + `<h3>`);
         // $('.question').empty();
         // $('.question').append(`<h3>` + newArray[0].question + `<h3>`);
         // $('.correct').on('click', function () {
         //    $('.question').empty();
         //    $('.question').append(`<h3>` + newArray[1].question + `<h3>`);   
         // })
   
      // console.log(results[Math.floor(Math.random() * results.length)]);
      // return results[Math.floor(Math.random() * results.length)]
   
   

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
      if (newArray.question === true){
         console.log('correct');
      } else {
         console.log('wrong');
      }
      // $('.question').empty();
      // $('.question').append(`<h3>` + rand.question + `<h3>`);
      })
      // console.log(correct);
   
}
// freakMath.correct = (correct) => {
//    $('.correct').on('click', function() {
//       if (results[Math.floor(Math.random() * results.length)].answer === true){
//          console.log('correct');
//       } else {
//          console.log('wrong');
//       }
//       $('.question').empty();
//       $('.question').append(`<h3>` + results[Math.floor(Math.random() * results.length)].question + `<h3>`);
//       })
//       console.log(correct);
   
// }

freakMath.wrong = (wrong) => {
   $('.wrong').on('click', function() {
      if(question === false) {
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
   freakMath.questionPage();
   freakMath.hideQuestionPage();
   // freakMath.getQuestion();
   // freakMath.getAnswer();
   freakMath.showQuestion();
   // freakMath.queueNextQuestion();
   freakMath.correct();
   freakMath.wrong();
}

// Document ready function
$(function () {
   freakMath.init();
});