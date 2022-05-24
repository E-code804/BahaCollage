let imgString = "./images/baha",
  imgNum = 1,
  interval = 675;

$("img")
  .attr("src", imgString + imgNum++ + ".JPG")
  .fadeIn(interval);

// setInteral has 2 parameters:
// The first is a function and the second is time (ms) that the program will wait
// until it executes the function.
setInterval(function () {
  $("img").fadeOut(interval); // Fade out the current image.
  setTimeout(function () {
    // setTimeout is the same as setInterval, but only executes its code once.
    if (imgNum % 33 === 0) {
      displayImage(33);
      imgNum++;
    } else {
      displayImage(imgNum++ % 33);
    }
  }, 1500);
}, 4250);

function displayImage(num) {
  $("img")
    .attr("src", imgString + num + ".JPG")
    .fadeIn(interval);
}
