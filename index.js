console.log("Code Starts")

//Toss The Game
let turn = document.getElementById('turn');
let tossBtn = document.getElementById('tossbtn');
let toss =0;
let playerTurnCounter = 0; //1 for player 1 ; 2 for player 2
tossBtn.addEventListener('click',function(){
toss = Math.floor(Math.random()*2)+1;
if(toss === 1){
    turn.innerText = "1st Turn : Player 1";
    playerTurnCounter=1;
}
if(toss === 2){
    turn.innerText = "1st Turn : Player 2";
    playerTurnCounter = 2;
}
});

//Random number generator
var count = 0 ;
function randNumGen(){
    const random = Math.floor(Math.random() * 5) + 1;
    count = random;
    return random;
}

//Functions For Human Generator

//Face
function faceGen(){
context.beginPath();
context.fillStyle ="rgb(209, 169, 169)" 
context.arc(170, 50, 15, 0, Math.PI * 2, true); // draw circle for head
context.fill();
}

//Smile 
function smileGen(){
context.beginPath();
context.strokeStyle = "red"; // color
context.lineWidth = 1.5;
context.arc(170, 50, 10, Math.PI / 6, 5 * Math.PI /6, false); // draw semicircle for smiling
context.stroke();
}

// eyes
function eyesGen(){
context.beginPath();
context.fillStyle = "black"; // color
context.arc(165, 45, 1.5, 0, Math.PI * 2, true); // draw left eye
context.fill();
context.arc(175, 45, 1.5, 0, Math.PI * 2, true); // draw right eye
context.fill();
}

// body
function bodyGen(){
context.beginPath();
context.moveTo(170, 65);
context.lineTo(170, 115);
context.strokeStyle = "brown";
context.stroke();
}

// arms
function armsGen(){
context.beginPath();
context.strokeStyle = "green"; 
context.moveTo(170, 65);
context.lineTo(150, 95);
context.moveTo(170, 65);
context.lineTo(190, 95);
context.stroke();
}
// legs
function legsGen(){
context.beginPath();
context.strokeStyle = "black";
context.moveTo(170, 115);
context.lineTo(160, 160);
context.moveTo(170, 115);
context.lineTo(180, 160);
context.stroke();
}

//Gaming For Player 1 turn
let temp10 = 0; //for Box 1
let temp11 = 0; //for Box 2
let temp12 = 0; //for Box 3
let temp13 = 0; //for Box 4
let temp14 = 0; //for Box 5
function player1Gaming(){
    switch (count){
        case 1:{
            let canvas = document.getElementById('11');
            context = canvas.getContext("2d");
            switch (temp10){
                case 0:
                    faceGen();
                    temp10+=1;
                    break;
                case 1:
                    eyesGen();
                    temp10+=1;
                    break;
                case 2 :
                    smileGen();
                    temp10+=1;
                    break;
                case 3:
                    bodyGen();
                    temp10+=1;
                    break;
                case 4:
                    armsGen();
                    temp10+=1;
                    break;
                case 5:
                    legsGen();
                    temp10+=1;
                    break;
            }
            break;
    }
        case 2:{
            let canvas = document.getElementById('21');
            context = canvas.getContext("2d");
            switch (temp11){
                case 0:
                    faceGen();
                    temp11+=1;
                    break;
                case 1:
                    eyesGen();
                    temp11+=1;
                    break;
                case 2 :
                    smileGen();
                    temp11+=1;
                    break;
                case 3:
                    bodyGen();
                    temp11+=1;
                    break;
                case 4:
                    armsGen();
                    temp11+=1;
                    break;
                case 5:
                    legsGen();
                    temp11+=1;
                    break;
            }
            break;
    }
        case 3:{
            let canvas = document.getElementById('31');
            context = canvas.getContext("2d");
            switch (temp12){
                case 0:
                    faceGen();
                    temp12+=1;
                    break;
                case 1:
                    eyesGen();
                    temp12+=1;
                    break;
                case 2 :
                    smileGen();
                    temp12+=1;
                    break;
                case 3:
                    bodyGen();
                    temp12+=1;
                    break;
                case 4:
                    armsGen();
                    temp12+=1;
                    break;
                case 5:
                    legsGen();
                    temp12+=1;
                    break;
            }
            break;
    }
        case 4:{
            let canvas = document.getElementById('41');
            context = canvas.getContext("2d");
            switch (temp13){
                case 0:
                    faceGen();
                    temp13+=1;
                    break;
                case 1:
                    eyesGen();
                    temp13+=1;
                    break;
                case 2 :
                    smileGen();
                    temp13+=1;
                    break;
                case 3:
                    bodyGen();
                    temp13+=1;
                    break;
                case 4:
                    armsGen();
                    temp13+=1;
                    break;
                case 5:
                    legsGen();
                    temp13+=1;
                    break;
            }
            break;
    }
        case 5:{
            let canvas = document.getElementById('51');
            context = canvas.getContext("2d");
            switch (temp14){
                case 0:
                    faceGen();
                    temp14+=1;
                    break;
                case 1:
                    eyesGen();
                    temp14+=1;
                    break;
                case 2 :
                    smileGen();
                    temp14+=1;
                    break;
                case 3:
                    bodyGen();
                    temp14+=1;
                    break;
                case 4:
                    armsGen();
                    temp14+=1;
                    break;
                case 5:
                    legsGen();
                    temp14+=1;
                    break;
            }
            break;
    }
    
}
}

//Gaming for Player 2 turn
let temp20 = 0;//for Box 1
let temp21 = 0;//for Box 2
let temp22 = 0;//for Box 3
let temp23 = 0;//for Box 4
let temp24 = 0;//for Box 5
function player2Gaming(){
    switch (count){
        case 1:{
            let canvas = document.getElementById('12');
            context = canvas.getContext("2d");
            switch (temp20){
                case 0:
                    faceGen();
                    temp20+=1;
                    break;
                case 1:
                    eyesGen();
                    temp20+=1;
                    break;
                case 2 :
                    smileGen();
                    temp20+=1;
                    break;
                case 3:
                    bodyGen();
                    temp20+=1;
                    break;
                case 4:
                    armsGen();
                    temp20+=1;
                    break;
                case 5:
                    legsGen();
                    temp20+=1;
                    break;
            }
            break;
    }
        case 2:{
            let canvas = document.getElementById('22');
            context = canvas.getContext("2d");
            switch (temp21){
                case 0:
                    faceGen();
                    temp21+=1;
                    break;
                case 1:
                    eyesGen();
                    temp21+=1;
                    break;
                case 2 :
                    smileGen();
                    temp21+=1;
                    break;
                case 3:
                    bodyGen();
                    temp21+=1;
                    break;
                case 4:
                    armsGen();
                    temp21+=1;
                    break;
                case 5:
                    legsGen();
                    temp21+=1;
                    break;
            }
            break;
    }
        case 3:{
            let canvas = document.getElementById('32');
            context = canvas.getContext("2d");
            switch (temp22){
                case 0:
                    faceGen();
                    temp22+=1;
                    break;
                case 1:
                    eyesGen();
                    temp22+=1;
                    break;
                case 2 :
                    smileGen();
                    temp22+=1;
                    break;
                case 3:
                    bodyGen();
                    temp22+=1;
                    break;
                case 4:
                    armsGen();
                    temp22+=1;
                    break;
                case 5:
                    legsGen();
                    temp22+=1;
                    break;
            }
            break;
    }
        case 4:{
            let canvas = document.getElementById('42');
            context = canvas.getContext("2d");
            switch (temp23){
                case 0:
                    faceGen();
                    temp23+=1;
                    break;
                case 1:
                    eyesGen();
                    temp23+=1;
                    break;
                case 2 :
                    smileGen();
                    temp23+=1;
                    break;
                case 3:
                    bodyGen();
                    temp23+=1;
                    break;
                case 4:
                    armsGen();
                    temp23+=1;
                    break;
                case 5:
                    legsGen();
                    temp23+=1;
                    break;
            }
            break;
    }
        case 5:{
            let canvas = document.getElementById('52');
            context = canvas.getContext("2d");
            switch (temp24){
                case 0:
                    faceGen();
                    temp24+=1;
                    break;
                case 1:
                    eyesGen();
                    temp24+=1;
                    break;
                case 2 :
                    smileGen();
                    temp24+=1;
                    break;
                case 3:
                    bodyGen();
                    temp24+=1;
                    break;
                case 4:
                    armsGen();
                    temp24+=1;
                    break;
                case 5:
                    legsGen();
                    temp24+=1;
                    break;
            }
            break;
    }
}
}
//Checking Win
let Win = "DRAW!"
function whoWin(){
    if((temp10==6) && (temp11==6) && (temp12==6) && (temp13==6) && (temp14==6)){
        Win = "Player 1 Wins";
        alert(Win);
    }
    if((temp20==6) && (temp21==6) && (temp22==6) && (temp23==6) && (temp24==6)){
        Win = "Player 2 Wins";
        alert(Win);
    }
}

//Playing Game
let generateBtn = document.getElementById('generatebtn');
generateBtn.addEventListener('click',function(){
    let randNum = document.getElementById('randomNum');
    randNum.innerText = randNumGen();
    if(playerTurnCounter===1){
        player1Gaming();
        turn.innerText = "Turn : Player 2";
        playerTurnCounter = 2;
    }
    else{
        player2Gaming();
        turn.innerText = "Turn : Player 1";
        playerTurnCounter = 1;
    }
    whoWin();
})

//Reseting The Game Using Reset button
let resetBtn = document.getElementById('resetbtn');
function reset(){
    location.reload();
}
