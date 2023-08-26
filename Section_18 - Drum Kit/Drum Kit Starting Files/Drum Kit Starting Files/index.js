



function trigger_audio(q){
    switch (q) {
        case "w":
            var a1 = new Audio("./sounds/crash.mp3")
            a1.play();
            break;
        
        case "a":
            var a2 = new Audio("./sounds/kick-bass.mp3")
            a2.play();
            break;

        case "s":
            var a3 = new Audio("./sounds/snare.mp3")
            a3.play();
            break;
    
        case "d":
            var a4 = new Audio("./sounds/tom-1.mp3")
            a4.play();
            break;
            
        case "j":
            var a5 = new Audio("./sounds/tom-2.mp3")
            a5.play();
            break;
        
        case "k":
            var a6 = new Audio("./sounds/tom-3.mp3")
            a6.play();
            break;
            
        case "l":
            var a7 = new Audio("./sounds/tom-4.mp3")
            a7.play();
            break;
            
        default:
            break;
    }
}



for(i=0;i<7;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
        trigger_audio(this.innerHTML);
        button_Animation(this.innerHTML);
    });
}



document.addEventListener("keydown", function(event){
        trigger_audio(event.key);
        button_Animation(event.key);
    });



 

    function button_Animation(k){
        var button = document.querySelector("."+k);
        button.classList.add("pressed");
        setTimeout(function(){button.classList.remove("pressed")}, 100);
    }



