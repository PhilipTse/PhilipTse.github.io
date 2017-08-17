
//first page
    $(document).ready(function(){
        $("#oldcar").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>1300){
                 if($(window).scrollTop()>6300){
                    $("#oldcar").hide();
                    document.getElementById("oldcar").style.zIndex="200";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";

                 }
                 else
                 {
                    $("#oldcar").show();
                    document.getElementById("oldcar").style.zIndex="200";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";

                 }
              }
        });
    });

 //second page
      $(document).ready(function(){
        $("#newcar").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>6300){
                 if($(window).scrollTop()>11300){
                    $("#newcar").hide();
                    document.getElementById("oldcar").style.zIndex="1";
                    document.getElementById("newcar").style.zIndex="200";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";

                 }
                 else
                 {
                    $("#newcar").show();
                    document.getElementById("oldcar").style.zIndex="1";
                    document.getElementById("newcar").style.zIndex="200";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";


                 }
              }
        });
    }); 

//third page
            $(document).ready(function(){
        $("#oldtrain").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>11300){
                 if($(window).scrollTop()>16300){
                    $("#oldtrain").hide();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="200";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
                 else
                 {
                    $("#oldtrain").show();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="200";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
              }
        });
    });

//fourth page
                      $(document).ready(function(){
        $("#newtrain").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>16300){
                 if($(window).scrollTop()>21300){
                    $("#newtrain").hide();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="200";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
                 else
                 {
                    $("#newtrain").show();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="200";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
              }
        });
    });

 //fifth page
                       $(document).ready(function(){
        $("#oldplane").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>21300){
                 if($(window).scrollTop()>26300){
                    $("#oldplane").hide();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="200";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
                 else
                 {
                    $("#oldplane").show();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="200";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="0";
                 }
              }
        });
    });

                        $(document).ready(function(){
        $("#plane3").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>23300){
                 if($(window).scrollTop()>26300){
                    $("#plane3").hide();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="200";
                    document.getElementById("newplane").style.zIndex="0";
                 }
                 else
                 {
                    $("#plane3").show();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="200";
                    document.getElementById("newplane").style.zIndex="0";
                 }
              }
        });
    });

 //sixth page
                          $(document).ready(function(){
        $("#newplane").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>26300){
                 if($(window).scrollTop()>31000){
                    $("#newplane").hide();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="200";
                 }
                 else
                 {
                    $("#newplane").show();
                    document.getElementById("oldcar").style.zIndex="0";
                    document.getElementById("newcar").style.zIndex="0";
                    document.getElementById("oldtrain").style.zIndex="0";
                    document.getElementById("newtrain").style.zIndex="0";
                    document.getElementById("oldplane").style.zIndex="0";          
                    document.getElementById("plane3").style.zIndex="0";
                    document.getElementById("newplane").style.zIndex="200";
                 }
              }
        });
    });




