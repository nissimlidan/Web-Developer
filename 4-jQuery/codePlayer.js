function updateOutput() {

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" +
        $("#cssPanel").val()+"</style></head><body>" +
            $("#htmlPanel").val() +"</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".toggelButton").hover(function(){

    $(this).addClass("highlightedButton");
}, 

function(){

    $(this).removeClass("highlightedButton");

});

$(".toggelButton").click(function(){

    $(this).toggleClass("active");

    $(this).removeClass("highlightedButton");

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass("hidden");

    var counterOfActivePanels = 4 - $(".hidden").length;

    if(counterOfActivePanels == 0){

        $(".panel").width("0");

    } else {

        $(".panel").width(($(window).width() / counterOfActivePanels) - 20);

    }

});

$(".panel").height($(window).height() - $("#topbar").height() - 30);

$(".panel").width(($(window).width() / 2) - 20);

updateOutput();

$("textarea").on('change keyup paste', function(){

    updateOutput();

});