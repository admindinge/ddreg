/*!
 * jReject (jQuery Browser Rejection Plugin)
 * Version 1.1.x
 * URL: http://jreject.turnwheel.com/
 * Description: jReject is a easy method of rejecting specific browsers on your site
 * Author: Steven Bower (TurnWheel Designs) http://turnwheel.com/
 * Copyright: Copyright (c) 2009-2014 Steven Bower under dual MIT/GPLv2 license.
 */

function reject(){
            // Append element to body of document to display

        var element = document.createElement("div");
        element.innerHTML = '<div><div id="jr_overlay" style="background: #000; opacity: 0.9;"></div><div id="jr_wrap"><div id="jr_inner" style="width:560px; height:225px">' +
            '<h1 id="jr_header">Did you know that your Internet Browser is out of date?</h1>' +
            '<p>Your browser is out of date, and may not be compatible with ' +
            'our website. A list of the most popular web browsers can be ' +
            'found below.</p>' +
            '<p>Just click on the icons to get to the download page</p>' +
            '<ul><li id="jr_chrome"><div class="jr_icon"></div>' +
            '<div><a href="http://www.google.com/chrome/">Google Chrome</a>' +
            '</div></li><li id="jr_firefox"><div class="jr_icon"></div>' +
            '<div><a href="http://www.mozilla.com/firefox/">Firefox</a>' +
            '</div></li><li id="jr_safari"><div class="jr_icon"></div>' +
            '<div><a href="http://www.apple.com/safari/download/">Safari</a>' +
            '</div></li><li id="jr_opera"><div class="jr_icon"></div>' +
            '<div><a href="http://www.opera.com/download/">Opera</a>' +
            '</div></li></ul></div>';

        document.body.appendChild(element);


         var size = _pageSize(); // Get size

        document.getElementById("jr_overlay").style.width = size[0] + "px";
        document.getElementById("jr_overlay").style.height = size[1] + "px";
        document.getElementById("jr_wrap").style.top = "225px";

        if (window.addEventListener)  // W3C DOM
            window.addEventListener("scroll", function () {
                var scroll = _scrollSize(); // Get page scroll
                document.getElementById("jr_wrap").style.top = scroll[1] + (size[3] / 4) + "px";
                document.getElementById("jr_wrap").style.left = scroll[0] + "px";
            }, true);
        else if (window.attachEvent) { // IE DOM
            window.attachEvent("scroll", function () {
                var scroll = _scrollSize(); // Get page scroll
                document.getElementById("jr_wrap").style.top = scroll[1] + (size[3] / 4) + "px";
                document.getElementById("jr_wrap").style.left = scroll[0] + "px";
            });
        }

        var openBrowserLinks = function (url) {
            // Open window, generate random id value
            window.open(url);

            return false;
        };

        if (window.addEventListener){  // W3C DOM
            var li = document.querySelectorAll("#jr_inner li");
            li[0].addEventListener("click", function () {
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[1].addEventListener("click", function () {
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[2].addEventListener("click", function () {s
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[3].addEventListener("click", function () {
                openBrowserLinks(this.querySelector('a'));
            }, true);
        }else if (window.attachEvent) { // IE DOM
            var li =  document.querySelectorAll("#jr_inner li");
            li[0].attachEvent("click", function(){
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[1].attachEvent("click", function(){
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[2].attachEvent("click", function(){
                openBrowserLinks(this.querySelector('a'));
            }, true);
            li[3].attachEvent("click", function(){
                openBrowserLinks(this.querySelector('a'));
            }, true);
        }

    };

// Based on compatibility data from quirksmode.com
// This is used to help calculate exact center of the page
    var _pageSize = function() {
        var xScroll = window.innerWidth && window.scrollMaxX ?
            window.innerWidth + window.scrollMaxX :
            (document.body.scrollWidth > document.body.offsetWidth ?
                document.body.scrollWidth : document.body.offsetWidth);

        var yScroll = window.innerHeight && window.scrollMaxY ?
            window.innerHeight + window.scrollMaxY :
            (document.body.scrollHeight > document.body.offsetHeight ?
                document.body.scrollHeight : document.body.offsetHeight);

        var windowWidth = window.innerWidth ? window.innerWidth :
            (document.documentElement && document.documentElement.clientWidth ?
                document.documentElement.clientWidth : document.body.clientWidth);

        var windowHeight = window.innerHeight ? window.innerHeight :
            (document.documentElement && document.documentElement.clientHeight ?
                document.documentElement.clientHeight : document.body.clientHeight);

        return [
            xScroll < windowWidth ? xScroll : windowWidth, // Page Width
            yScroll < windowHeight ? windowHeight : yScroll, // Page Height
            windowWidth,windowHeight
        ];
    };


// Based on compatibility data from quirksmode.com
    var _scrollSize = function() {
        return [
            // scrollSize X
            window.pageXOffset ? window.pageXOffset : (document.documentElement &&
                document.documentElement.scrollTop ?
                    document.documentElement.scrollLeft : document.body.scrollLeft),

            // scrollSize Y
            window.pageYOffset ? window.pageYOffset : (document.documentElement &&
                document.documentElement.scrollTop ?
                    document.documentElement.scrollTop : document.body.scrollTop)
        ];
    };


