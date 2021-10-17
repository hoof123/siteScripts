window.addEventListener('load', function() {
    
    jQuery(function($){

        $(document).scroll(function() {
        
            var y = $(this).scrollTop();

            if (y > 300) { // change this value here to make it show up at your desired scroll location.
            
                $('#masthead').addClass('headerShow');
                
            } else {
                
                $('#masthead').removeClass('headerShow');
            }
        });
    });
});