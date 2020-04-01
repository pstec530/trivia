/*global $ */
$(".first span").hide();
$(".first").append("<button>What does Qui-Gon Jinn ask of Obi-wan?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn(10000);
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>Does Yoda like Anakin?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>What droid greets Qui-Gon and Obi-wan?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown(1000);
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>What is Anakin's mom's name?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
