//structure that stores question, question text, and choice, and which choice is correct X 
let questions = [
    {
        prompt: "What are people who write computer code called?",
        choiceA: "Manufactorers",
        choiceB: "Bankers",
        choiceC: "Cyber-painters",
        choiceD: "programmers",
        correctanswer: "d",
    },
    //copy and paste; number:2
    {
        prompt: "What are people who write computer code called?",
        choiceA: "Manufactorers",
        choiceB: "Bankers",
        choiceC: "Cyber-painters",
        choiceD: "programmers",
        correctanswer: "d",
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

}






//timing elements
//high score elements
