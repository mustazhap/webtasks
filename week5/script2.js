var bigImg = document.getElementsByClassName("bigImg");
var car = document.getElementsByClassName("carousel");

function change(event){
  const image = event.currentTarget;
  image.src = ''
  console.log(source); 
  bigImg.src = source;
}