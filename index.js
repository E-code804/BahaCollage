let imgString = "./images/baha", imgNum = 2;

// setInteral has 2 parameters: 
// The first is a function and the second is time (ms) that the program will wait 
// until it executes the function.
setInterval(() => {
    $("img").fadeOut(1000); // Fade out the current image.
    setTimeout(() => { // setTimeout is the same as setInterval, but only executes its code once. 
        $("img").attr("src", imgString + (imgNum++ % 34) + ".JPG").fadeIn(1000);
    }, 1000);
}, 4000);