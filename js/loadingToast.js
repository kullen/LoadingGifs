$(document).ready(function () {
    //Anything that has the class hasLoadingModal will launch loading modal on click
    $(".launchToast").on("click", function () {
        toast.show();
    });
});


toast = (function ($) {
    toast = {};

    toast.show = function (optionalClass) {

        switch (optionalClass) {
            case "success":
            case "danger":
            case "warning":
            case "primary":
                $('#loadingToast').attr("class", "toast").addClass(optionalClass);
                break;
            case "default":
                $('#loadingToast').attr("class", "toast");
                break;
        }


        $('#loadingToast').show('swing');
    };

    toast.hide = function () {
        $('#loadingToast').hide('swing');
    };

    return toast;
}(jQuery));