<?php
/**
* Plugin Name: Tax Calculator
* Version: 1.0.0
* Author: Dawid Wojcik
**/

function plugin_styles()
{
    wp_enqueue_style('vendor_css', plugin_dir_url(__FILE__) . 'public/css/app.css');
    wp_enqueue_style('plugin_css', plugin_dir_url(__FILE__) . 'public/css/app.css');
}

function plugin_js()
{
    wp_enqueue_script('vendor_js', plugin_dir_url(__FILE__) . 'public/js/vendor.js', '', '', true);
    wp_enqueue_script('plugin_js', plugin_dir_url(__FILE__) . 'public/js/app.js?=' . time(), array('vendor_js'), '', true);
}
add_action('wp_enqueue_scripts', 'plugin_styles');
add_action('wp_enqueue_scripts', 'plugin_js');

function tax_calculator()
{
    require 'tax-calculator.html';
}; 

add_shortcode('taxcalculator', 'tax_calculator');

function calculator_post_type() {
            register_post_type( 'calc', array(
                'label'               => __( 'Produkty Kalkulatora', 'textdomain' ),
                'public'              => true,
                'exclude_from_search' => false,
                'show_in_nav_menus'   => false,
                'menu_icon'           => 'dashicons-money-alt',
                'supports'            => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),
                'rewrite'             => [
                    'slug' => 'kalkulator'
                ],
                'has_archive'           => false,
                'hierarchical'          => false,
                'publicly_queryable'  => true,
                'taxonomies'          => array( 'calc_netto', 'calc_brutto', 'calc_taxresult' ),
                'menu_position' => 20
            ));
}

add_action('init', 'calculator_post_type');

function create_post() {
    $curPageName = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);  

    if(isset($_POST['productname'])){
        $post_data = array(
            'post_title'    => $_POST['productname'],
            'post_type'     => 'calc',
            'post_status'   => 'publish'
        );

        $post_id = wp_insert_post( $post_data );

        $field_key = "field_613f3e3375e01";
        $value = $_POST['productname'];
        update_field( $field_key, $value, $post_id );

        $field_key = "field_613f3e9d75e05";
        $value = $_POST['brutto'];
        update_field( $field_key, $value, $post_id );

        $field_key = "field_613f3e9d75e04";
        $value = $_POST['taxresult'];
        update_field( $field_key, $value, $post_id );

        $field_key = "field_613f3e7675e02";
        $value = $_POST['brutto'] - $_POST['taxresult'];
        update_field( $field_key, $value, $post_id );

        wp_redirect($curPageName);
        
        exit();      
    }
}
add_action('init','create_post');


