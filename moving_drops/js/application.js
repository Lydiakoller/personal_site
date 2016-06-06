$(document).ready(function(){
    var mouseX = 0, mouseY = 0;
    $(document).mousemove(function(e){
           mouseX = e.pageX;
           mouseY = e.pageY; 
    });

    // cache the selector
    var smallDropDiv = $("#small-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        smallXp = xp;
        smallYp = yp;
        if (smallXp > 200){
            smallXp = 200;
        }
        if (smallYp > 200){
            smallYp = 200;
        }
        smallDropDiv.css({left:smallXp, top:smallYp});

    }, 30);

    var medDropDiv = $("#med-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
            // change 12 to alter damping, higher is slower
                xp += (mouseX - xp) / 12;
                    yp += (mouseY - yp) / 12;
                        medDropDiv.css({left:xp, top:yp});
    }, 30);

    var largeDropDiv = $("#large-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
            // change 12 to alter damping, higher is slower
                xp += (mouseX - xp) / 12;
                    yp += (mouseY - yp) / 12;
                        largeDropDiv.css({left:xp, top:yp});
    }, 30);
    var largeDropDiv2 = $("#large2-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        largeXp = xp;
        largeYp = yp;
        if (largeXp > 500){
            largeXp = 500;
        }
        if (largeYp > 500){
            largeYp = 500;
        }
                largeDropDiv2.css({left:largeXp, top:largeYp});
    }, 30);

    var xsDropDiv = $("#xs-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
            // change 12 to alter damping, higher is slower
                xp += (mouseX - xp) / 12;
                    yp += (mouseY - yp) / 12;
                        xsDropDiv.css({left:xp, top:yp});
    }, 30);
    var xs2DropDiv = $("#xs2-drop-container");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
            // change 12 to alter damping, higher is slower
                xp += (mouseX - xp) / 12;
                    yp += (mouseY - yp) / 12;
                        xs2DropDiv.css({left:xp, top:yp});
    }, 30);
});
