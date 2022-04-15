/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import 'popper.js';

import 'bootstrap';
// loads the jquery package from node_modules
// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free

/**
 * @fileoverview Font Awesome 5
 * @link https://fontawesome.com/how-to-use/with-the-api/
 */

import { library, dom } from '@fortawesome/fontawesome-svg-core'



// Solid
// https://fontawesome.com/icons?d=gallery&s=solid&m=free
import { fas } from '@fortawesome/free-solid-svg-icons'

// Regular
// https://fontawesome.com/icons?d=gallery&s=regular&m=free
import { far } from '@fortawesome/free-regular-svg-icons'

// Brands
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

// or

// to subset a large number of icons into only the icons that you are using
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// library.add(faPhone, faEnvelope, faPaperPlane)



// automatically find any <i> tags in the page and replace those with <svg> elements
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-i2svg
dom.i2svg()

// or

// if content is dynamic
// watch the DOM automatic for any additional icons being added or modified
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-watch
// dom.watch()