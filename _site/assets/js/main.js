/* Main js file for BCORMA bootstrap front-end to Drupal main site
 * written by Peter Sprague
 * revised September 11, 2019
 */

$(document).ready(function () {
// Vegas for front page slideshow
    $("#vegas_background").vegas({ //#vegas_background .site-wrapper
        timer: false,
        delay: 6000,
        cover: true,
        slides: [
            {src: "assets/images/DSC_8023_bw.jpg"},
            {src: "assets/images/ROGERB-1.jpg"},
            {src: "assets/images/creaky bones 795-X2_bw.jpg"},
            {src: "assets/images/SCAN003.jpg"},
            {src: "assets/images/scan0034.jpg"}
        ]
    });
});
