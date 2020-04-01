/*global $ */
$(".first span").hide();
$(".first").append("<button>What is the snowy planet called?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>What creature does Luke chop an arm off of?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>Which hand of Luke's does Darth Vader chop off?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>What green guy does Luke meet on Dagobah?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
