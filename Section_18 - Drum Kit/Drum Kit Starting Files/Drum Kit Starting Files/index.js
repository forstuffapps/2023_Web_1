




for(i=0;i<7;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
    });
}




