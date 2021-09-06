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
?>
    <div id="tax-calculator">
        <taxcalculator
        ></taxcalculator>
    </div>
<?php
}; ?>

<?php add_shortcode('taxcalculato', 'tax_calculator');?>


<?php function calculator_post_type() {
    

 

            register_taxonomy( 'calc_netto', ['calc'], array(
                'label'         => 'Kwota Netto',
                'show_admin_column' => true,
                'publicly_queryable' => false,
                'show_in_nav_menus' => false,
                'rewrite'             => false,
                'show_tagcloud' => false,
                'hierarchical'  => false
            ) );
            register_taxonomy( 'calc_brutto', ['calc'], array(
                'label'         => 'Kwota Brutto',
                'show_admin_column' => true,
                'publicly_queryable' => false,
                'show_in_nav_menus' => false,
                'rewrite'             => false,
                'show_tagcloud' => false,
                'hierarchical'  => false
            ) );
            register_taxonomy( 'calc_taxresult', ['calc'], array(
                'label'         => 'Kwota Podatku',
                'show_admin_column' => true,
                'publicly_queryable' => false,
                'show_in_nav_menus' => false,
                'rewrite'             => false,
                'show_tagcloud' => false,
                'hierarchical'  => false
            ) );
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

       
        
        $my_post = array(
                'post_type' => 'calc',
                'post_title' => $_POST['productname'],
                'post_calc_netto' => $_POST['netto'],
                'post_status' => 'publish', 
                
            );

            
        
        
       $calc_post = wp_insert_post($my_post);
        wp_set_object_terms($calc_post, $_POST['netto'], 'calc_netto', false );
        wp_set_object_terms($calc_post, $_POST['brutto'], 'calc_brutto', false );
        wp_set_object_terms($calc_post, $_POST['taxresult'], 'calc_taxresult', false );
        
        wp_redirect($curPageName);
        
        exit();
      
    }
}
add_action('init','create_post');