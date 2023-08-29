


match ={1:"green", 2:"red", 3:"yellow", 4:"blue"}
match_r = {"green" : 1, "red" : 2, "yellow" : 3, "blue" : 4}
sounds = {"blue" : "./sounds/blue.mp3", "red" : "./sounds/red.mp3", "green" : "./sounds/green.mp3",
            "yellow" : "./sounds/yellow.mp3", "wrong" : "./sounds/wrong.mp3"}


function trig_sound(q)
{
    var a = new Audio(sounds[q]);
    a.play();
}

var start = false;
 A = [];
 U = [];
 var level_count = 0;


function game_over(){
    $("body").addClass("game-over");
    trig_sound("wrong");
    $("h1").text("Game Over !!!  Press any key to continue");
    level_count = 0;
    // setTimeout(function(){$("body").removeClass("game-over");}, 100);
    A=[];
    U=[];
    start=false;
}

function button_click(q) {
    $('#'+q).addClass("pressed");
        setTimeout(function(){$('#'+q).removeClass("pressed");}, 300);
}


function game()
{
    level_count+=1;
    $("h1").text("Level " + level_count);
    var k = 0;
    k=Math.random()*4;
    k = Math.floor(k)+1;
    A.push(k);
    button_click(match[k]);
    trig_sound(match[k]);    
};


$(".start-game").click(function()
{

    if ($(".start-game").text()=="Reset")
    {
        location.reload(true);
    }
    else if (start==false)
    {
        $(".start-game").text("Reset")
        $("body").removeClass("game-over");
        start=true;
        A = [];
        U = [];
        setTimeout(game, 1000);
    }
    
        
    
    
    
});






$(".btn").click(function()
{
    var game_flag=true;
    button_click(jQuery(this).attr("id"));
    var t = match_r[jQuery(this).attr("id")];
    trig_sound(match[t]);
    U.push(t);
    var m = U.length;
    
    var n = A.length;
    for(i=0;i<m;i++)
    {
        if(A[i]!=U[i])
        {
            game_flag=false;
        }
    }
    
    if (game_flag==false)
    {
        game_over();
    }
    else if (m==n && game_flag==true)
    {
        U=[];
        setTimeout(game, 1000);
        
    }
});