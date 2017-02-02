/*$(function() {
    $(".cs-hidden").hide();
    $(".expand-div > .hidden-div").click(function() {
        $(this)
            .parent()
            .find(".cs-hidden")
            .slideToggle();
    });
});*/

$(function() {
    $(".expand-div").each(function() {
        /*使用each是因為每個按鈕切換的對象都不同，需要分別產生*/
        var a = this,
            /*將要折疊的元素保存下來*/
            b = $(this).attr("title"); /*取出摺疊區塊的標題*/

        $(this).before($("<div class=\"expand-div\">" + b + "</div>").click(function() {
            var divid = $(this).parent().parent().attr('id');
            $("body *").not('.expand-div, .hidden-div, .cs-hidden').toggleClass("blur-body");
            $('#' + divid).toggleClass("blur-body");

            $(a).slideToggle("slow");
        }).css("cursor", "pointer")).hide();
    }).css("margin-top", "2%").attr("title", "");
});