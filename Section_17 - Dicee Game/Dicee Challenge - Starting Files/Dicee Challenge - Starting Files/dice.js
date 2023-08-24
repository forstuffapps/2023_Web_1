

function get_dice()
{
    var n = Math.random();
    n=n*6;
    n= Math.floor(n);
    return n+1;
};

var v1 = get_dice();
var v2 = get_dice();


document.querySelector(".img1").setAttribute("src", "./images/dice" + v1 +".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + v2 +".png");



if (v1>v2)
{
    document.querySelector("h1").textContent = "Player1 won the game";
}
else if (v1<v2)
{
    document.querySelector("h1").textContent = "Player2 won the game";
}
else
{
    document.querySelector("h1").textContent = "Game is Draw";
}

