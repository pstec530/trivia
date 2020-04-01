/*global $ */
$(".first span").hide();
$(".first").append("<button>Who asked Padmé to stay on as senator?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>What color is Mace Windu's lightsaber?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>Does Count Dooku make it out alive?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>Who kills Jango Fett?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});
