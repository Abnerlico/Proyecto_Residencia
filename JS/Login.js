$(function (){
  function validarFields(user,pass){
    if(user.length>1 && user.length||pass.length>1 && pass.length<50){

    }else{alert("Cajas Vacias"); }

  }
$('login').click(function(e){

    e.preventDefault();
    var usuario=$('user').val();
    var clave=$('pass').val();
    alert(validarFields(usuario,clave));
});
});
