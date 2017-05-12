// ************************************************************************************
// This is a mock js file. it only servers as a demo for use of loading elements. 
//
// ************************************************************************************

$(document).ready(function () {
    //Anything that has the class hasLoadingModal will launch loading modal on click
    $("#toastContactSubmitBtn").on("click", function () {
        submitContactForm()
    });


    $("#facebookLike").on("click", function () {
        likeOnFacebook($(this))
    });


});

// Serves as a fake AJAX call
function submitContactForm(){
    var toastId = mockToast.show();
    //Tutorial Toast
    showSnackBar("Now you can navigate around while your contact info is submitting. Or you can fill out another contact form")
    setTimeout(function (toastId) { mockToast.hide(toastId);}, 5000, toastId)
}

function likeOnFacebook($button){
    var toastId = mockToast.show("facebook");

    $button.prop("disabled", true);

    showSnackBar("While your like is being sent. Look at the other tabs")
    setTimeout(function (toastId, $button) {
         mockToast.hide(toastId, "facebook");
         $button.prop("disabled", false);
    }, 2000, toastId, $button)
}


mockToast = (function ($) {
    mockToast = {};
    var count = 0;
    var baseTopOffset;

    var baseId = "braveToast-clone-";

    mockToast.show = function (option) {
        var toastId = baseId + count++;
        findAndShift(baseId);
        
        var $self = $('#mockLoadingToast')
            .clone()
            .prop("id", toastId)
            .appendTo("#mockPageContainer");

        $self.attr("class", "toast").addClass("success");
        
        switch(option){
            case "primary":
            case "facebook":
                $self.addClass("primary")
                break;
            case "danger":
                $self.addClass("danger")
                break;
            case "warn":
                 $self.addClass("warn")
                break;
        }

        $self.show('swing'); 
 
        return toastId;   
    };

    mockToast.hide = function (toastId, option) {
        var completeGlyph= "glyphicon-ok"

        var $glyph = $('#'+ toastId )

        switch(option){
            case "facebook":
                completeGlyph= "glyphicon-thumbs-up";
                break;
            case "twitter":
            case "instagram":
                completeGlyph= "glyphicon-heart-empty"
                break;
            case "danger":
                 completeGlyph= "glyphicon-remove"
                break;
        }


        $glyph.find(".glyphicon")
              .toggleClass('glyphicon-refresh '+ completeGlyph)
              .removeClass('glyphicon-spin');

        setTimeout(function(toastId)
        {
            $('#'+ toastId ).hide('swing');
            setTimeout(function(toastId)
            {
                $('#'+ toastId ).find(".glyphicon")
                        .toggleClass('glyphicon-refresh ' + completeGlyph)
                        .addClass('glyphicon-spin');
            }, 700, toastId);
        }, 400, toastId);
    };

    function findAndShift(elementIdStartingWith) {

        

        $('div[id^=' + elementIdStartingWith + ']')
            .each(function () {
                var topVal = $(this).css('top');

                topVal = topVal.replace(/[^-\d\.]/g, '') * 1;

                

                if (baseTopOffset == null) {
                    baseTopOffset = topVal; // offset of the very top toast
                }

                $(this).css('top', (topVal + baseTopOffset) + 'px');
            });
    }
    return mockToast;
}(jQuery));


// https://www.w3schools.com/howto/howto_js_snackbar.asp
function showSnackBar(message) {
    // Get the snackbar DIV
    $('#snackbar').html('');
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";
    
    $('#snackbar').html(message);

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 7000);
}