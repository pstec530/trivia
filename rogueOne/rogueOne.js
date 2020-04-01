/*global $ */
$(".first span").hide();
$(".first").append("<button>What famous Star Wars quote does K-2SO say?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>What does Galen Erso call Jyn Erso?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>Does Jyn Erso die?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>Who gets handed the death star plans at the end?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
