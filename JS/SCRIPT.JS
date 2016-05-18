$(document).ready(function(){
    $("#banner").css({"height":$(window).height()+"px"})
    var flag = false;
    var scroll;
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll>200){
            if(!flag){
               $("#logo").css({"margin-top": "-8px", "width": "50px", "height":"76px"})
               flag = true;
            }
        }else{
            if(flag){
              $("#logo").css({"margin-top": "50px", "width": "366px", "height":"556px"})
              flag = false;
            }
        }

    });
});
