

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(){
    window.setTimeout(1000 / 40);
  };
})();

var container = document.getElementById("loader"),
    main = document.getElementById("main"),
    ul = document.getElementById("ul"),
    h1 = document.querySelector(".h1"),
    progress = 0,
    scale = container.children[0].children[0];

animate();

function animate(){
  requestAnimFrame (animate);
  draw();
}

function draw() {
  scale.style.transform = "scale("+progress+")"; 

  if (progress <= 0.95){
    progress+= 0.01;
  }

  else {
   container.classList.add("loaded");
    main.classList.add('loaded');
    ul.classList.add('loaded');
   
  }     
}

// simple preLoading
