(function() {

    'use strict';

    var m = document.querySelector("main"),
        h = document.querySelector("header"),
        hHeight;

    function setTopPadding() {
        hHeight = h.offsetHeight;
        m.style.paddingTop = hHeight + "px";
    }

    function onScroll() {

        window.addEventListener("scroll", callbackFunc);
        /**
        * Replace the line above with the following one 
        * to see how many more times the "callbackFunc" is executed
        */
        // window.addEventListener("scroll", callbackFunc);

        function callbackFunc() {
            var y = window.pageYOffset;
            if (y > 10) {
              h.classList.add("scroll");
            } else {
              h.classList.remove("scroll");
            }
        }
    }

    window.onload = function() {
        setTopPadding();
        onScroll();
    };

    window.onresize = function() {
        setTopPadding();
    };
})();