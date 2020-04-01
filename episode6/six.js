/*global $ */
$(".first span").hide();
$(".first").append("<button>Who secrety tries to get Han Solo out of his carbonite block?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>What giant creature does Luke kill indirectly?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>What furry friends on endor believe C-3PO has magical powers?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>True or False, Darth Vader becomes good again once the emperor dies?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
