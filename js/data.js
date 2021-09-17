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
* Version :  v1.1 --- 2021.09.17
*
-------------- ↑↑↑ DO NOT REMOVE or EDIT THIS NOTE ↑↑↑ ------------------***/


// Google spreadsheet info
var GoogleSheetJson = {};

GoogleSheetJson.getsheeturl = function() {
    
        var sheetid = '10nj-ELh4o3HHfG99JnxrsoONBn9LoHJc4I0doRnE354', // enter your spreadsheet url
            sheetname = itemlist,                                    // enter your sheet name
            apikey = AIzaSyAdTDEIslD8C8f2JzxR0gslWRP4U10lZ9Q,        // enter your Google API key
            
            dataurl = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetid + '/values/' + sheetname + '?alt=json&key=' + apikey ;
    
        return dataurl;
};


// fetch google spreadsheet data to html
$(function mydata() {

    $.getJSON(GoogleSheetJson.getsheeturl(),

        function(data) {

            $.each(data.feed.entry, function(i, entry) {

                var item = '<a href="' + ${entry[3]} + '" target="_blank"><div class="item ' + ' ' + ${entry[5]} + '">';

                item += '<div class="itemimg"><img src="img/loading.svg" data-src="' + ${entry[0]} + '" class="lazyload" onerror="imgError(this);"/></div>';

                item += '<div class="itemtitle">' + ${entry[2]} + '</div>';

                item += '<div class="iteminfo">' + ${entry[4]} + '</div>';

                item += '<div class="itemtype">' + ${entry[1]} + ' </div>';

                item += '<div class="itemtag">' + ${entry[5]} + '</div>';

                item += '<div class="itemurl">' + ${entry[3]} + ' </div>';

                item += '<div class="hiddenkeywords">' + ${entry[6]} + ' </div>';

                item += '</div></a>';

                var $items = $(item);
                $grid.append($items).isotope('appended', $items);
                $grid.isotope('layout');

            });
        
            //hide loading icon after complete loading
            $(".loadicon").hide();

        });

});