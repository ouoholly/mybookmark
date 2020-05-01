/***--------- ↓↓↓ DO NOT REMOVE or EDIT THIS NOTE ↓↓↓ --------------------
*
* Feel free to fork this as template and make edits to fit your needs 
* as long as (1) credit is given, (2) link back to here: https://github.com/ouoholly/mybookmark
*
* Star the repo if you like it (σﾟ∀ﾟ)σ..:*☆
* Welcome to contact me for suggestions or recommendations.(●´∀`●)ノ*
*
* -------------------------------------------------------------------
*
* Author  :  ouoholly
* Version :  v1.0 --- 2020.05.01
*
* -------------------------------------------------------------------
*
* References (this script is adpated & modified from below):
* 1. https://codepen.io/desandro/pen/mCdbD
* 2. https://codepen.io/desandro/pen/EluFg
* 3. http://jsfiddle.net/macsupport/n4me9jq8/
* 
-------------- ↑↑↑ DO NOT REMOVE or EDIT THIS NOTE ↑↑↑ ------------------***/


// quick search regex
var qsRegex;
var buttonFilter;

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    filter: function() {
        var $this = $(this);
        var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
        var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
        return searchResult && buttonResult;
    }
});

$('#filters').on('click', 'button', function() {
    buttonFilter = $(this).attr('data-filter');
    $grid.isotope();
});


// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup(debounce(function() {
    qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope();
}));

// change is-checked class on buttons
$('.tagarea').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.tag', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// random sort
$('.shuffle-button').on('click', function() {
    $grid.isotope('shuffle');
});

// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
        clearTimeout(timeout);
        var args = arguments;
        var _this = this;

        function delayed() {
            fn.apply(_this, args);
        }
        timeout = setTimeout(delayed, threshold);
    };
}