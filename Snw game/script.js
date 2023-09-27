let x = Math.floor(Math.random()*3)+1;
let n = document.querySelectorAll(".con1").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".con1")[i].addEventListener("click",function(){
        let text = this.innerText;
        console.log(x);
        if(text=="Snake" && x == 1){
            document.querySelector(".neon-text2").textContent = "Draw";
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        else if(text=="Snake" && x==2){
            document.querySelector(".neon-text2").textContent = "Player: Snake--Computer: Water--Player Won";  
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        else if(text=="Snake" && x==3){
            document.querySelector(".neon-text2").textContent = "Player: Snake--Computer: Gun--Computer won";  
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        else if(text=="Water" && x==1){
            document.querySelector(".neon-text2").textContent = "Player: Water--Computer: Snake--Player Won";  
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        else if(text=="Water" && x==2){
            document.querySelector(".neon-text2").textContent = "Draw";  
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        else if(text=="Water" && x==3){
            document.querySelector(".neon-text2").textContent = "Player: Water--Computer: Gun--Player Won";  
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        else if(text=="Gun" && x==1){
            document.querySelector(".neon-text2").textContent = "Player: Gun--Computer: Snake--Player Won";  
            var audio = new Audio("gun.mp3");
            audio.play();
        }
        else if(text=="Gun" && x==2){
            document.querySelector(".neon-text2").textContent = "Player: Gun--Computer: Water--Computer Won";  
            var audio = new Audio("gun.mp3");
            audio.play();
        }
        else if(text=="Gun" && x==3){
            document.querySelector(".neon-text2").textContent = "Player: Gun--Computer: Gun--Draw";  
            var audio = new Audio("gun.mp3");
            audio.play();
        }
        
    })
}  
setTimeout(function(){
    window.location.reload();
 }, 4000);