
$(document).ready(function () {
    //Anything that has the class hasLoadingModal will launch loading modal on click
    $(".launchLoadingModal").on("click", function () {
        loadingModal.show();
    });
});

loadingModal = (function ($) {
    loadingModal = {};

    loadingModal.show = function (optionalClass) {

        switch (optionalClass) {
            case "modal-transparent":
                $('#loadingModal').attr("class", "modal fade").addClass(optionalClass);
                break;
            case "default":
                $('#loadingModal').attr("class", "modal fade");
        }


        $('#loadingModal').modal({ backdrop: 'static', keyboard: false, show: true });

        if ($('#loadingModal').hasClass("modal-transparent")) {
            $('.modal-backdrop').addClass('modal-transparent');
        }

    };

    loadingModal.hide = function () {
        $('#loadingModal').modal('hide');
    };

    return loadingModal;
}(jQuery));

