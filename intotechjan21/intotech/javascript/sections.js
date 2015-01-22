
//first page
    $(document).ready(function(){
        $("#oldcar").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>1300){
                 if($(window).scrollTop()>6300){
                    $("#oldcar").fadeOut();
                 }
                 else
                 {
                    $("#oldcar").fadeIn();
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
                    $("#newcar").fadeOut();
                 }
                 else
                 {
                    $("#newcar").fadeIn();
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
                    $("#oldtrain").fadeOut();
                 }
                 else
                 {
                    $("#oldtrain").fadeIn();
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
                    $("#newtrain").fadeOut();
                 }
                 else
                 {
                    $("#newtrain").fadeIn();
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
                    $("#oldplane").fadeOut();
                 }
                 else
                 {
                    $("#oldplane").fadeIn();
                 }
              }
        });
    });

                        $(document).ready(function(){
        $("#plane3").hide();
        $(window).scroll(function(){
              if($(window).scrollTop()>23300){
                 if($(window).scrollTop()>26300){
                    $("#plane3").fadeOut();
                 }
                 else
                 {
                    $("#plane3").fadeIn();
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
                    $("#newplane").fadeOut();
                 }
                 else
                 {
                    $("#newplane").fadeIn();
                 }
              }
        });
    });




