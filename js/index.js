

$(document).ready(function() { 
    $('.switch').click(function(){
        if ($('.burgermenu').hasClass("collapsed")) {
            $('.menuLayer').removeClass("collapsed");
            $('.burgermenu').removeClass("collapsed").addClass("expanded");
            $('.shadowLayer').removeClass("collapsed").addClass("expanded");
        } 
        
        else {
            $('.burgermenu').removeClass("expanded").addClass("collapsed");
            $('.shadowLayer').removeClass("expanded").addClass("collapsed");
            $('.menuLayer').addClass("collapsed");
        };
    });
});



$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('#global-nav').removeClass("onPage").addClass("floating");
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass("floating").addClass("onPage");
      } 
      
    }); 
    
});