<?php
 
add_action( 'wp_enqueue_scripts', 'theme_slug_enqueue_styles' );
function theme_slug_enqueue_styles() {
 
    $parent_style = 'hestia-style'; // Esto será 'twentyfifteen-style' para el tema Twenty Fifteen.
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
 
/* Aquí tus funciones personales */
?>