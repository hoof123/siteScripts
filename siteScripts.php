<?php
/**
* Plugin Name: __________ site scripts
* Plugin URI:
* Description: important scripts to make the website function correctly.
* Version: 2.0
* Author: Jake Price | JP Creative Media
* Author URI: https://jpcreativemedia.ca/
**/

// hooks
add_action( 'wp_enqueue_scripts' , 'siteScripts_enqueue_scripts' );

// register styles & scripts
function siteScripts_enqueue_scripts() {

    //site information
    //script
    wp_register_script('siteInformation-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/siteInformation-script.js', 1.0, true);

    // protectYaNeck
    // wp_enqueue_script('protectYaNeck-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/protectYaNeck-script.js', 1.0, true);

    // navbar animation
    wp_register_style('navBarAnimation-CSS-style', plugin_dir_url( __FILE__ ) . 'siteScripts/css/navBarAnimation-style.css', 1.0, 'all'); 
    wp_register_script('navBarAnimation-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/navBarAnimation-script.js', 1.0, true);

    // navBar link
    wp_register_script('navBarLink-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/navBarLink-script.js', 1.0, true);

    // landing logo animation
    wp_register_style('landingLogo-style', plugin_dir_url( __FILE__ ) . 'siteScripts/css/landingLogo-style.css', 1.0, true); // stylesheets
    wp_register_script('landingLogo-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/landingLogo-script.js', 1.0, true); // scripts

    // section background colour rotation
    wp_register_script('colourRotation-script', plugin_dir_url( __FILE__ ) . 'siteScripts/js/colourRotation-script.js', 1.0, true);
}

// shortcodes

// site information
add_shortcode('siteInformation','siteInformation_shortcode');

function siteInformation_shortcode($content = null) {

    wp_enqueue_script('siteInformation-script');

    $content = null;
    return $content;
}

// navbar animation
add_shortcode('navBarAnimation','navBarAnimation_shortcode');

function navBarAnimation_shortcode($content = null) {

    wp_enqueue_style('navBarAnimation-CSS-style');
    wp_enqueue_script('navBarAnimation-script');

    $content = null;
    return $content;
}

// navBar link
add_shortcode('navBarLink','navBarLink_shortcode');

function navBarLink_shortcode($content = null) {

    wp_enqueue_script('navBarLink-script');

    $content = null;
    return $content;
}

// landing logo animation
add_shortcode('landingLogo','landingLogo_shortcode');

function landingLogo_shortcode($content = null) {

    wp_enqueue_script('landingLogo-script');
    wp_enqueue_style('landingLogo-style');

    $content = null;
    return $content;
}

// section background colour rotation
add_shortcode('colourRotation','colourRotation_shortcode');

function colourRotation_shortcode($content = null) {

    wp_enqueue_script('colourRotation-script');

    $content = null;
    return $content;
}
?>