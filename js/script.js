/*Portrait image pulse on mouseover*/
$(document)
    .ready(function() {
        $(".selfie")
            .hover(function() {
                $(this)
                    .addClass("animated pulse");
            }, function() {
                setTimeout(function() {
                    $(".selfie")
                        .removeClass("animated pulse");
                }, 750);
            });
    });

/*Scroll to content on link*/
$(document)
    .on('click', '.navi', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        $('html, body')
            .animate({
                scrollTop: $(target)
                    .offset()
                    .top
            }, 750);
    });

/*Titles fading carousel*/
$(document)
    .ready(function() {
        var quotes = $(".quotes");
        var quotes2 = $(".quotes2");
        var quoteIndex = -1;
        var quoteIndex2 = -1;

        function showNextQuote() {
            ++quoteIndex;
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(500)
                .delay(
                    2000)
                .fadeOut(500, showNextQuote);
        }
        showNextQuote();

        function showNextQuote2() {
            ++quoteIndex2;
            quotes2.eq(quoteIndex2 % quotes2.length)
                .fadeIn(500)
                .delay(
                    4000)
                .fadeOut(500, showNextQuote2);
        }
        showNextQuote2();
    });

/*Add dark background on scroll*/
$(window)
    .scroll(function() {
        var class1 = ".navigation";

        if ($(window)
            .scrollTop() > 100) {
            $(class1)
                .addClass('fadeIn');

        } else {
            $(class1)
                .removeClass('fadeIn');
        }
    });