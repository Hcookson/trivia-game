

// var rightAnswer;
// var wrongAnswer;



// var question1 = {
//     question: "Which guitar player is known for playing the gibson sg with high octane energy?",
//     answers:
//         ["a: Angus Young",
//             "b: Louis Armstrong",
//             "c: Danny Devito",
//             " d: Eric Clapton",]

//     , correct: 0

// };
// var question2 = {
//     question: "What specific age in the music industry has a club based around famous musicians deaths?",
//     answers:
//         ["a: 32",
//             "b: 29",
//             "c: 22",
//             "d: 27"],
//     correct: 3
// };

// var question3 = {
//     question: "This thrash metal band formed in 1981 and a founding member left the band to form Megadeath",
//     answers:
//         ["A: Slayer",
//             "B: Anthrax",
//             "C: Metallica",
//             "D: Sting"],
//     correct: 2
// };
// var question4 = {
//     question: "Who is the lead singer of the Rolling Stones?",
//     answers:
//         ["A: Mick Jagger",
//             "B: Nick Jagger",
//             "C: Rick Jagger",
//             "D: Mike Jagger"],
//     correct: 0
// };
// var question5 = {
//     question: "Before he was a solo artist, this legendary guitar player was in a band called 'cream'.",
//     answers:
//         ["A: Jeff Beck",
//             "B: Muddy Waters",
//             "C: Eric Clapton",
//             "D: John Stamos"],
//     correct: 2
// };
// var question6 = {
//     question: "This genre of music was given it's name due to the heavy washed out sound as well the musicians would often just stare at their shoes.",
//     answers:
//         ["A: Post-rock",
//             "B: Shoegaze",
//             "C: Surf-rock",
//             "D: Pop"],
//     correct: 1
// };
// var questionArray = [question1, question2, question3, question4, question5, question6];
// var index = 0;

// function loadGame() {
//     for (var i = 0; i < questionArray.length; i++) {
//         $("#questions").text(questionArray[i].question);
//         for (var j = 0; j <= 3; j++) {
//             $("#answerButton").text(questionArray[i].answers[j])

//         }
//     }
// }






// function onClick() {
//     var btns = document.getElementsByTagName("button");
//     for (var i = 0; i < btns.length; i++) {
//         var elem = btns[i];
//         elem.onclick = function () {
//             console.log("hello");
//             return false;
//         };
//     }
// };

// function correctAnswer() {
//     rightAnswer++;
//     alert("thats right!");
// }

// function incorrectAnswer() {
//     wrongAnswer++;
//     alert("thats wrong man, just wrong.");
// }

// loadGame();
// onClick();

var questions = [
    {
        question: "Which guitar player is known for playing the gibson sg with high octane energy?",
        answers: {
            a: "Angus Young",
            b:  "Louis Armstrong",
            c:  "Kendrick Lamar",
            d:  "Eric Clapton",
        },
        correctAnswer: "a"
    },
    {
    question: "What age in the music industry has a club based around famous musicians deaths?",
    answers: {
        a: "32",
        b:  "29",
        c:  "26",
        d:  "27",
    },
    correctAnswer: "d"
},
{
    question: "This thrash metal band formed in 1981 and a founding member left the band to form Megadeath",
    answers: {
        a: "Anthrax",
        b:  "Slayer",
        c:  "Metallica",
        d:  "Pantera",
    },
    correctAnswer: "c"
},
{
    question: "Who is the lead singer of the Rolling Stones?",
    answers: {
        a: "Mick Jagger",
        b:  "Nick Jagger",
        c:  "Rick Jagger",
        d:  "Slick Jagger",
    },
    correctAnswer: "a"
},
{
    question: "This genre of music was given it's name due to the heavy washed out sound as well the musicians would often just stare at their shoes.",
    answers: {
        a: "Post-rock",
        b:  "Shoegaze",
        c:  "Black-metal",
        d:  "Black-gaze",
    },
    correctAnswer: "b"
},
{
    question: "This 1958 classic was said to be the first true rock n roll song",
    answers: {
        a: "Jailhouse rock",
        b:  "Misirlou",
        c:  "Rumble",
        d:  "Ghost Riders in the Sky",
    },
    correctAnswer: "c"
},
    
];
let countDown;
const timeDisplay = document.getElementById("time-left");
 
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
   
   
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = "${minutes}:${remainderSeconds}";
    timeDisplay.textContent = display;
}

function loadQuiz (questions, quizContainer, resultsContainer, submitButton) {
  
  // place to put ouput and users answers
       function showQuestions (questions, quizContainer) {
            var output =[];
            var answers;
//for each question
            for ( var i=0; i < questions.length; i++) {
                //resetting list of answers
                answers=[];
                //for each answer to this question
                for(letter in questions[i].answers) {
                    //html radio button
                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question'+ i +'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter] 
                        +'</label>'
                    );
                }
                //adds question and answer to output
                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }
            //combines output list into string and writes it to DOM
            quizContainer.innerHTML = output.join('');
       }    
         

        function showResults (questions, quizContainer, resultsContainer){
            //answers from containers in the quiz
            var answerContainers = quizContainer.querySelectorAll(".answers");
            //keeping track of user answers
            var userAnswer = "";
            var numCorrect = 0;

            //for each question
            for (var i=0; i < questions.length; i++) {
                //find selected answer
                userAnswer = (answerContainers[i].querySelector("input[name=question"+i+"]:checked")||{}).value;
                    //if answer is right
                if (userAnswer === questions[i].correctAnswer) {
                    //add to number of correct answers
                    numCorrect++;
                    //correct answers are colored green
                    answerContainers[i].style.color= "green";
                }
                // if answer is wrong/not answered
                else {
                    //indicates them as red
                    answerContainers[i].style.color = "red";
                }
            }
            //shows correct answers out of total
            resultsContainer.innerHTML = numCorrect+ " out of " + questions.length;
        }

showQuestions(questions, quizContainer);
// on submit shows the results of the quiz
submitButton.onclick = function() {
    showResults(questions,quizContainer, resultsContainer);
    }
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
//generates the quiz
loadQuiz(questions, quizContainer, resultsContainer, submitButton);



