let imgString = "./images/baha", imgNum = 2, interval = 800;

// setInteral has 2 parameters: 
// The first is a function and the second is time (ms) that the program will wait 
// until it executes the function.
setInterval(() => {
    $("img").fadeOut(interval); // Fade out the current image.
    setTimeout(() => { // setTimeout is the same as setInterval, but only executes its code once. 
        $("img").attr("src", imgString + (imgNum++ % 34) + ".JPG").fadeIn(interval);
    }, interval);
}, 5250);