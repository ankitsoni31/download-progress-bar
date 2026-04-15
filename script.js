var progress = document.querySelector("#progress");
var percent = document.querySelector("#percent");
var btn = document.querySelector("button");

var count = 0;


btn.addEventListener("click", function () {

  var stop = setInterval(function(){
    count++
    percent.innerHTML = count + "%"
    progress.style.width = count + "%"
  },50)

  setTimeout(function(){
    clearInterval(stop)
    btn.innerHTML = "Downloaded"
    btn.style.opacity = 0.5
  },5000)


});