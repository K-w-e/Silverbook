
        var count = -4;
        var i = 0;
        var imgs = $('.image');
        $( document ).ready( 
            setInterval(function(){
                if(count>=$('img').length)
                    count=-4;
                count=count+4;
                aaa()
            }, 2000)
        );

        function aaa(){            
            $('.image').eq(count).addClass('sx').delay(8000).queue(
                function(){
                      $(this).removeClass('sx');
                }
            ),

            $('.image').eq(count+1).addClass('dx').delay(8000).queue(
                function(){
                    $(this).removeClass('dx');
                }
            ),

            $('.image').eq(count+2).addClass('up').delay(8000).queue(
                function(){
                      $(this).removeClass('up');
                }
            ),

            $('.image').eq(count+3).addClass('down').delay(8000).queue(
                function(){
                    $(this).removeClass('down');
                }
            )
        }

 