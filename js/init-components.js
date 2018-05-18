$(document).ready(function(){
    
    $('.basic-j2').select2({
        minimumResultsForSearch: -1
    });

    $('.search-j2').select2();

    $('[data="popup"]').on("click" , function() {
        console.log("foi");
    });

    $('[data="popup"]').magnificPopup({
        items: {
            src: $('<div class="white-popup">Dynamically created popup</div>'),
            type: 'inline'
        }
    });

});