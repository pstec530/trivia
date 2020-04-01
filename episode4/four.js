/*global $ */
$(".first span").hide();
$(".first").append("<button>Who shot first?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});



$(".second span").hide();
$(".second").append("<button>Who saves Luke from tusken raiders?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().show();
    $(this).remove();
});



$(".third span").hide();
$(".third").append("<button>Which jedi did Darth Vader kill?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().fadeIn();
    $(this).remove();
});



$(".fourth span").hide();
$(".fourth").append("<button>Is Princess Leia an imperial?</button>");
$("button").click(function () {
    "use strict";
    $(this).prev().slideDown();
    $(this).remove();
});
