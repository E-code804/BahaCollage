let imgString = "./images/baha", imgNum = 1, interval = 650;

$("img").attr("src", imgString + imgNum++ + ".JPG").fadeIn(interval);

// setInteral has 2 parameters: 
// The first is a function and the second is time (ms) that the program will wait 
// until it executes the function.
setInterval(() => {
    if (imgNum % 33 == 0) {
        imgNum += 1;
    }

    $("img").fadeOut(interval); // Fade out the current image.
    setTimeout(() => { // setTimeout is the same as setInterval, but only executes its code once. 
        $("img").attr("src", imgString + (imgNum++ % 33) + ".JPG").fadeIn(interval);
    }, 2050);
}, 4250);
