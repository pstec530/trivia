/*global $ */
$(".first span").hide();
$(".first").append("<button>What cybord creature does Obi-wan kill?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>Who convinces Anakin to join the Darkside?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>Who killed Padmé?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>Did Luke and Leia get sent to the same foster parents?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
