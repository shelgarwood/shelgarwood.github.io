var lose = false;  // whether the user has hit a wall
var cheat =false;

window.onload = function() {
    $("start").onclick = onStart;
    $("end").onmouseover = onEnd;
    $("maze").onmouseleave = onCheat;
    var boundaries = $$("#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    lose = true;
    cheat = false;
    $("status").textContent = "You lose!";
    var boundaries = $$("#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function onStart() {
    lose = false;
    cheat = false;
    $("status").textContent = "Find the end!";
    var boundaries = $$("#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function onEnd() {
    if (!lose && !cheat) {
        $("status").textContent = "You win!";
    }
    else if(cheat && !lose){
        $("status").textContent = "Cheaters never win!";
        var boundaries = $$("#maze div.boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addClassName("youlose");
        }       
    }
}

function onCheat(){
    cheat = true;
}