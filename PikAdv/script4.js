let currmoletile;
let currnotmoletile;
let score = 0;
let gameover = false;
window.onload = () => {
    setGame();
};
var audioPlayer = document.getElementById('audioPlayer');
audioPlayer.style.display = 'none';
function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selecttile);
        document.getElementById("board").appendChild(tile);
    }
    if(score<=150){
        setInterval(setmole, 2000);
        setInterval(setnotmole, 3000);
    }
    else if(score>150 && score<=250){
        setInterval(setmole, 700);
        setInterval(setnotmole, 1000);
    }

    else if(score>250){
        setInterval(setmole, 500);
        setInterval(setnotmole, 700);
    }
}

function setmole() {
    if(gameover){
        return;
    }
    if (currmoletile) {
        currmoletile.innerHTML = " ";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png";
    let num = Math.floor(Math.random() * 9).toString();
    if (currnotmoletile && currnotmoletile.id == num) {
        return;
    }
    currmoletile = document.getElementById(num);
    currmoletile.innerHTML = "";
    currmoletile.appendChild(mole);
}

function setnotmole() {
    if(gameover){
        return;
    }
    if (currnotmoletile) {
        currnotmoletile.innerHTML = " ";
    }
    let mole1 = document.createElement("img");
    mole1.src = "./notmole.png";
    let num1 = Math.floor(Math.random() * 9).toString();
    if (currmoletile && currmoletile.id == num1) {
        return;
    }
    currnotmoletile = document.getElementById(num1);
    currnotmoletile.innerHTML = "";
    currnotmoletile.appendChild(mole1);
}
function selecttile(){
    if(gameover){
        return;
    }
    if(this == currmoletile){
        score = score + 10;
        document.getElementById("score").innerText = "Score "+score.toString();
        var audio = new Audio("pika.mp3");
        audio.play();
    }
    if(this == currnotmoletile){
        document.getElementById("score").innerText = "GAME OVER \n" + "Current score is: "+score.toString();
        gameover = true;
        var audio = new Audio("meowth.mp3");
        audio.play();
    }
}