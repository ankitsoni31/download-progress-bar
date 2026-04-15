var count = 0;
var running = false;

btn.addEventListener("click", function () {

  if (running) return;

  running = true;
  count = 0;

  var stop = setInterval(function(){

    if(count < 100){
      count++
      percent.innerHTML = count + "%"
      progress.style.width = count + "%"
    } else {
      clearInterval(stop)
      running = false

      btn.innerHTML = "Downloaded"
      btn.style.opacity = 0.5
    }

  },50)

});