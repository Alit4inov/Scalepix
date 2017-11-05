// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import dropdown from './modules/drop-down.js';
import navopener from './modules/nav-opener.js';
import carousel from './modules/carousel.js';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        dropdown();
        navopener();
        carousel();
    });

})(jQuery);