// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Reflex.
// Author: Designova.
// Version 1.2 - Updated Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     var cW = $('.container').width();
     var fH = $('.sticky-foot').height();


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .text-anim-container, .pace-running').css('height',vH);
    

    
    $('.foot-pad').css('margin-bottom',fH);



    //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $(this).find('.sub-nav').slideDown('slow');
    })


    //Mobile Menu (multi level)
    /*
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });
    */

    //Faded Page Loading
    /*! Fades out the whole page when clicking links */
    var newLocation;
    $('#options li a, .fader-link').click(function(e) {
     e.preventDefault();
     newLocation = this.href;
     $('body').fadeOut('slow', newpage);
     });
     function newpage() {
     window.location = newLocation;
     }
    $(document).ready(function(){
        /*! Fades in whole page on load */
        $('body').css('display', 'none');
        $('body').fadeIn(500);
    }); 
    /*! Reloads page on every visit */
    function Reload() {
    try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
    headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    }
    catch (e) {}
    }
    /*! Reloads on every visit in mobile safari */
    if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
    if (evt.persisted) {
    document.body.style.display = "none";
    location.reload();
    }
    };
    }





    


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

