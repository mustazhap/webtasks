
function myFunction() {
  var ids = ["s11","s12","s13","s21","s22","s23","s31","s32","s33"];
  var x = [];
  for (var i = 0; i < ids.length; i++) {
      x.push( document.getElementById(ids[i]).value);
      
  }
  console.log(x);
      
  var result = x[0]*(x[4]*x[8]-x[5]*x[7])-x[1]*(x[3]*x[8]-x[5]*x[6])+x[2]*(x[3]*x[7]-x[4]*x[6]);

  
 
  document.getElementById("result").innerHTML = result;

}




