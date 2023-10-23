console.log("Welcome to TIC TAC TOE");

let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let chance = "X";

let isGameOver = false;


// Function to change the turn
const changeTurn = ()=>{
    return chance==="X"?"O":"X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ];

    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
            // console.log(boxTexts[e[0]].innerText + " Won");
            isGameOver = true;
            // music.pause();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px";

            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "22vw";
            document.querySelector('.line').style.height = "3px";

            
        }
    })

}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box"); //this will return all the elements as an object
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxText.innerText === '' && !isGameOver){
            boxText.innerText = chance;
            chance = changeTurn();
            turn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+chance;
            }
        }

        
    })
})


// Add onClick listener to reset button
reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element=>{
        element.innerText = "";
    });
    chance = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+chance;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.transform = `translate(10vw, 10vw) rotate(0 deg)`;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.line').style.height = "0px";
})