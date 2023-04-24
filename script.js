let currentquestion = 0
//structure that stores question, question text, and choice, and which choice is correct X 
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
    //copy and paste: number 3 
]
//do this ten times more with questions!!!!

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
        console.log("correct");
    }
    else{
        console.log("incorrect");
    }
    currentquestion +=1;
    setquestion (currentquestion);

}

//timing elements


//high score elements
