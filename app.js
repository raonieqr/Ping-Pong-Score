const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const score1 = document.querySelector("#play1");
const score2 = document.querySelector("#play2");
const score_total = document.querySelector("#score-total");

let scoreP1 = 0;
let scoreP2 = 0;
let gameOver = false;
let winScore = 0;

btn1.addEventListener("click", function(){
    if (!gameOver)
    {
        scoreP1 += 1;
        if (scoreP1 == winScore)
        {
            gameOver = true;
            score1.classList.add("win");
            score2.classList.add("loser");
        }
            
    }
    score1.textContent = scoreP1;
});

btn2.addEventListener("click", function(){
    if (!gameOver)
    {
        scoreP2 += 1;
        if (scoreP2 == winScore)
        {
            gameOver = true;
            score2.classList.add("win");
            score1.classList.add("loser");
        }
            
    }
    score2.textContent = scoreP2;
});

score_total.addEventListener("change", function(){
    winScore = parseInt(this.value);
})

btn3.addEventListener("click", function(e){
    gameOver = false;
    score1.textContent = 0;
    score2.textContent = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    score1.classList.remove("win", "loser");
    score2.classList.remove("win", "loser");
});


