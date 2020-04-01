/*global $ */
$(".first span").hide();
$(".first").append("<button>What actual name did the Imperials give Finn?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>Why is BB-8 so important?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>What strange character is over 1,000 years old?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>Who is Kylo Ren's master?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});
