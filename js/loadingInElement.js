loadingInElement = (function ($) {
    loadingInElement = {};

    //Adds loading gif to container element
    loadingInElement.show = function (elementId) {
        var newId = 'loadingInElement-';

        if (elementId.charAt(0) != "#") {
            newId += elementId
            elementId = "#" + elementId;
        }
        else {
            newId += elementId.substring(1);
        }

        $(".loadingInElement").clone().prop('id', newId).appendTo(elementId);
        $('#' + newId).show();
    };

    //Removes loading gif from container element
    //Shouldn't need hide function if ajax replaces html, but just in case
    loadingInElement.hide = function (elementId) {
        
        var newId = '#loadingInElement-';

        if (elementId.charAt(0) != "#") {
            newId += elementId
        }
        else {
            newId += elementId.substring(1);
        }
        $(newId).remove();

    };

    return loadingInElement;
}(jQuery));