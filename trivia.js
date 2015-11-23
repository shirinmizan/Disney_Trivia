/*
Name: Shirin Mizan
This is the Javascript which I wrote to get the true/false value from user and check 
those answers and give them an update of their score. I also use this scripts for 
some fun stuff in the my webpage,such as sound effect, switching images,countdown 
timer etc.
*/
//switch images
function TimerSwitch(pic) {
    TimerRunning = true;
    var timer = setTimeout(function() {
        SwitchPic(pic)
    }, 1000);
}
function SwitchPic(pic) {
    pic.src = "image/pic3.png";
}
// Array of trivia data
var TriviaData = new Array(10);
createTwoDimensionalArray(3);


//to track snumber questions asked, current correct total and current question
var questionsAsked = 0;
var totalCorrect = 0;
var currentQuestion = 0;
var selectionValid = false;

// Questions

TriviaData[0][0] = "King Triton was Ariel's father.<br><br><img src='image/Ariel.jpg' height='170px' width ='170px'>";
TriviaData[1][0] = "Woody is a character from the movie<br> One Hundered and One Dalmatian.<br><br><img src='image/woody.jpg' height='170px' width ='170px'>";
TriviaData[2][0] = "Raccon and Hummingbird are always by<br> Pochahontas side.<br><br><img src='image/pocahontas.jpg' height='170px' width ='170px'>";
TriviaData[3][0] = "Dumbo's real name was Jumbo Sr.<br><br><img src='image/dumbo.jpg' height='170px' width ='170px>";
TriviaData[4][0] = "Bambi's first word was Monkey.<br><br><img src='image/bambi.jpg' height='170px' width ='170px'>";
TriviaData[5][0] = "Ancestors choose The Great Stone Dragon<br> to guard Mulan.<br><br><img src='image/mulan.jpg' height='170px' width ='170px'>";
TriviaData[6][0] = "Snow White sings ~~Some day my Prince will come~~<br><br><img src='image/snowwhite.jpg' height='170px' width ='170px'>";
TriviaData[7][0] = "Aurora is Little Mermaid.<br><br><img src='image/Aurora.jpg' height='170px' width ='170px'>";
TriviaData[8][0] = "Anastasia and Drizella are Cinderella's Step-Sisters.<br><br><img src='image/Cinderella.jpg' height='170px' width ='170px'>";
TriviaData[9][0] = "Frankie is the Rat in Ratatouille.<br><br><img src='image/remy.jpg' height='170px' width ='170px'>";

// Answers
TriviaData[0][1] = "true";
TriviaData[1][1] = "false";
TriviaData[2][1] = "true";
TriviaData[3][1] = "false";
TriviaData[4][1] = "false";
TriviaData[5][1] = "true";
TriviaData[6][1] = "true";
TriviaData[7][1] = "false";
TriviaData[8][1] = "true";
TriviaData[9][1] = "false";


// For random first question
TriviaData[0][2] = "no";
TriviaData[1][2] = "no";
TriviaData[2][2] = "no";
TriviaData[3][2] = "no";
TriviaData[4][2] = "no";
TriviaData[5][2] = "no";
TriviaData[6][2] = "no";
TriviaData[7][2] = "no";
TriviaData[8][2] = "no";
TriviaData[9][2] = "no";

// Load up first question
setQuestion();

// Sets question text and indicator so that we know the question has been displayed

function setQuestion() {
    selectionValid = false; // Flag to make sure question has not been asked yet
    while (selectionValid === false) {
        currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question
        if (TriviaData[currentQuestion][2] === "no") {
            selectionValid = true;
        }
    }
    
    if (document.getElementById("TriviaQuestion") !== null) {
        document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];
        TriviaData[currentQuestion][2] = "yes";
        questionsAsked = questionsAsked + 1;
    }
}
function processAnswer(usrAnswer) {
    if (TriviaData[currentQuestion][1] === usrAnswer) {
        // answer correct
        totalCorrect = totalCorrect + 1;
    }
}
// This function creates our two dimensional array
function createTwoDimensionalArray(arraySize) {
    for (i = 0; i < TriviaData.length; ++i)
        TriviaData[i] = new Array(arraySize);
}
// This function checks the answer, updates correct total
// and randomly selects the next question
function checkAnswer() {
    if (document.getElementById("true").selected) {
        processAnswer("true");
    }
    else {
        processAnswer("false");
    }
    // get next question if not asked all yet
    if (questionsAsked < 10) {
        setQuestion();
    }
    // final question asked show prompt.
    else {
        alert("Quiz complete! You got " + totalCorrect + " correct out of 10.");

    }

    // update totals
    document.getElementById("qnr").innerHTML = "Question:" + questionsAsked;
    document.getElementById("score").innerHTML = "Score:" + totalCorrect;

}
//to play a sound for the button
function ButtonSound(sound1) {
    var btnSound = document.getElementById(sound1);
    btnSound.play();
}
// for the rules menu
function menuShow(num) {
    document.getElementById("menu" + num).className = "menuOn";
    document.getElementById("bigMenu" + num).style.visibility = "visible";
}
function menuHide(num) {
    document.getElementById("menu" + num).className = "menuOff";
    document.getElementById("bigMenu" + num).style.visibility = "hidden";
}
//reset the game
function restart() {
    location.reload();
}



