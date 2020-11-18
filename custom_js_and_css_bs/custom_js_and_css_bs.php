<?php
  /**
  * Plugin Name: Custom js e css
  * Author: cicababba
  * Version: 1.0
  */

  function add_custom_css() {
    wp_enqueue_style('custom-css','/wp-content/plugins/custom_js_and_css_bs/custom.css?ver=1.0.1');
    wp_enqueue_style('custom-css-mobile','/wp-content/plugins/custom_js_and_css_bs/custom-mobile.css?ver=1.0.1');
  }

  function add_custom_js() {
    wp_enqueue_script('custom-js','/wp-content/plugins/custom_js_and_css_bs/script.js');
  }

  add_action('wp_enqueue_scripts', 'add_custom_css');
  add_action('wp_enqueue_scripts', 'add_custom_js');
?>