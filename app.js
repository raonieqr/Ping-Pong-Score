const reset = document.querySelector("#reset");
const score_total = document.querySelector("#score-total");

const play1 = {
    score: 0,
    button: document.querySelector("#play1"),
    display: document.querySelector("#displayPlay1")
}

const play2 = {
    score: 0,
    button: document.querySelector("#play2"),
    display: document.querySelector("#displayPlay2")
}

let gameOver = false;
let winScore = 0;



score_total.addEventListener("change", function(){
    winScore = parseInt(this.value);
})

play1.button.addEventListener("click", function(){
    if (score_total.value == 0)
        alert("Playing to no value!");
    else
        scoreAdd(play1, play2)
});


play2.button.addEventListener("click", function(){
    if (score_total.value == 0)
        alert("Playing to no value!");
    else
        scoreAdd(play2, play1)
});


reset.addEventListener("click", clearScore);


function scoreAdd(player, opponent)
{
    if (!gameOver)
    {
        player.score += 1;
        if (player.score == winScore)
        {
            gameOver = true;
            player.display.classList.add("win");
            opponent.display.classList.add("loser");
        }
            
    }
    player.display.textContent = player.score;
}

function clearScore()
{
    gameOver = false;
    play1.display.textContent = 0;
    play2.display.textContent = 0;
    play1.score = 0;
    play2.score = 0;
    play1.display.classList.remove("win", "loser");
    play2.display.classList.remove("win", "loser");
}