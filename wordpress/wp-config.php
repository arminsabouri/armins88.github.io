<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'web_portal');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'w2bmQ79|f0|:A#kb9>BC^-jt]=8X7#7or^S-D=0502p1k2/O8Jo3y;Cj5O>Pn8`9');
define('SECURE_AUTH_KEY',  'GXb2.l}C-7i>UG^p~5kY Ke^~1P$h?p=)vf5DYex7@By&$CO-&b$k8_19a%v&GFw');
define('LOGGED_IN_KEY',    's!<AjPa^2d;Bi7f- {^i@FP`XcvKCCvhc6|vZ$68(U>*maW([O&wD=5!Vs~=&_D2');
define('NONCE_KEY',        'M6Y{BI1Do1x^PAh.y)oxFB7On?zL$h3}ZuWS4p&Jeb=3DKZO=j}k d+cIil(IG(X');
define('AUTH_SALT',        'A]Ne;1Nm8.R1y:p~(hdxWWgp)r7wR8#`2`#tNpnd4|Pw[)Rc<yO0vh4PegMeNwUl');
define('SECURE_AUTH_SALT', 'V1VnsQyVEMiYo_#rA;D#LygzV$,<I0~TgJck>N(B:e52gi#[P*K=8bdxN9@!_%/0');
define('LOGGED_IN_SALT',   'PVt_8#T?W:C8^onX gf{u+MLdflj!96vqmNi#!Bz2o/!af!,>YiuPkLh7)K[]$C|');
define('NONCE_SALT',       'Yc+iTg:p7p_G]D`*B+zF;:(Rd?+-C/6{.^A)(|BT=enO/6tmy_okdq;e;mP#x~yP');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cee_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
