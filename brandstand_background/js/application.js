$(document).ready(function(){
    var mouseX = 0, mouseY = 0;
    $(document).mousemove(function(e){
           mouseX = (e.pageX - 150);
           mouseY = (e.pageY - 150); 
    });

    // cache the selector
    var leftCloudDiv = $("#cloud-left-container");
    var xp = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;

        //leftCloudXp = xp;
        //if (leftCloudXp > 200){
        //    leftCloudXp = 200;
        //}
        leftCloudDiv.css({left: xp});

    }, 30);

    var rightCloudDiv = $("#cloud-right-container");
    var xp = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;

        //leftCloudXp = xp;
        //if (leftCloudXp > 200){
        //    leftCloudXp = 200;
        //}
        rightCloudDiv.css({left: xp});

    }, 30);

    var rightBirdDiv = $("#bird-right-container");
    var xp = 50;
    var yp = 50;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        //leftCloudXp = xp;
        //if (leftCloudXp > 200){
        //    leftCloudXp = 200;
        //}
        rightBirdDiv.css({left: xp, top:yp});

    }, 30);

    var leftBirdDiv = $("#bird-left-container");
    var xp = 0;
    var yp = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping, higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        //leftCloudXp = xp;
        //if (leftCloudXp > 200){
        //    leftCloudXp = 200;
        //}
        leftBirdDiv.css({left: xp, top: yp});
    }, 30);

});
