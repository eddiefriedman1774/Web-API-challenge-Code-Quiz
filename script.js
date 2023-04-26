let currentquestion = 0

let timervalue = 120

let score = 0 


//structure that stores question, question text, and choice, and which choice is correct X 
//finish questions (about 9)
let questions = [
    {
        prompt: "What are people who write computer code called?",
        choiceA: "manufacturers",
        choiceB: "bankers",
        choiceC: "cyber-painters",
        choiceD: "programmers",
        correctanswer: "d",
    },
    {
        prompt: "How many screens does Python use?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        correctanswer: "a",
    },

     {
        prompt: "HTML stands for?",
        choiceA: "hypertext markup language",
        choiceB: "hyper text made language",
        choiceC: "high tier machine learning language",
        choiceD: "hyper translation machine learning",
        correctanswer: "a",
    },

    {
        prompt: "What does Javscript do on a  page?",
        choiceA: "define the content of webpages",
        choiceB: "specifies the layout of the page",
        choiceC: "programs the behavior of the page",
        choiceD: "other: not listed ",
        correctanswer: "c",
    },

    {
        prompt: "n/a",
        choiceA: "n/a",
        choiceB: "n/a",
        choiceC: "n/a",
        choiceD: "n/a",
        correctanswer: "b",
    },

]

function documentload (){
    setquestion(0);
}

//read and populate DOM 
function setquestion (number){
    let question = questions[number]
    let mainquestion = document.getElementById("mainquestion");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let d = document.getElementById("d");
    mainquestion.textContent=question.prompt;
    a.textContent=question.choiceA;
    b.textContent=question.choiceB;
    c.textContent=question.choiceC;
    d.textContent=question.choiceD;
}

//everytime a button - choice button is CLICKED
function choicebuttonclick (element){
    if(element.id==questions[currentquestion].correctanswer){
        setcorrectincorrect(true)
    }
    else{   
        decrementtimer(10) 
        setcorrectincorrect(false)
    }
    if (currentquestion==questions.length-1){
       gameover()
    }
    else{
        currentquestion +=1;
        setquestion (currentquestion);

    }
}

function setcorrectincorrect (iscorrect){
    let cucelement = document.getElementById("correctincorrect");
    if (iscorrect){
        cucelement.textContent="CORRECT!";
        score+=1;
    } 
    else{
        cucelement.textContent="WRONG!";
    }
}

function decrementtimer (time){
    timervalue = timervalue - time; 
    let timerelement = document.getElementById("timer");
    timerelement.textContent=timervalue;
    if (timervalue==0){
        gameover()
    }
} 

function savescore (initials){
    localStorage.setItem(initials,score);       
}

function loadscores(){
    let scores = {}
    for(let i=0;i<localStorage.length;i++){
        let initials= localStorage.key(i)
        let score = localStorage.getItem(initials)
        scores[initials]= parseFloat(score)
    }
    const sortedscores = Object.entries(scores)
  .sort((a, b) => a[1] - b[1])
  .map(entry => [entry[1], entry[0]]);
  //https://www.geeksforgeeks.org/different-ways-of-sorting-dictionary-by-values-and-reverse-sorting-by-values/
  //used this for object storing the initials , sorts 'high score' 
  console.log(sortedscores)
}

function startquiz(){
    document.getElementById("startmenu").style.visibility="hidden"
    document.getElementById("quiz").style.visibility="visible"
    decrementtimer(0)
    setInterval(function(){decrementtimer(1)},1000);
}
function gameover(){
    document.getElementById("scoreform").style.visibility="visible"
}
