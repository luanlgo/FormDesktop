$(document).ready(function(){
    
    $('.basic-j2').select2({
        minimumResultsForSearch: -1
    });

    $('.search-j2').select2();

    $(".popup-desktop").fancybox({
        type: "inline"
    });

    $(".close-fancybox").on("click", function(){
        $.fancybox.close();
    })
    
});