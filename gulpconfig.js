/* eslint-env node */

var docroot = './web';

module.exports = {
  version: 1,
  scss: {
    theme: {
      src: docroot + '/themes/custom/test-kitchen/scss/**/*.scss',
      maps: '../maps',
      prefix: {browsers: 'last 2 versions', cascade: false},
      dest: docroot + '/themes/custom/test-kitchen/dist/css',
      // Pass options to node-sass.
      sassOptions: {
        // Include paths to resolve automatically.
        includePaths: ['./node_modules/']
      }
    }
  },
  js: {
    'theme-custom': {
      src: [docroot + '/themes/custom/test-kitchen/js/**/*.js'],
      concat: false,
      min: true,
      maps: '../maps',
      dest: docroot + '/themes/custom/test-kitchen/dist/js'
    },
    'theme-libs': {
      src: [
        './node_modules/what-input/dist/what-input.js',
        './node_modules/foundation-sites/dist/js/foundation.js'
      ],
      concat: 'libs.js',
      min: true,
      maps: '../maps',
      dest: docroot + '/themes/custom/test-kitchen/dist/js'
    }
  },
  copy: {
    theme: {
      src: [docroot + '/themes/custom/test-kitchen/images'],
      imagemin: false, // Requires gulp-imagemin package.
      dest: docroot + '/themes/custom/test-kitchen/dist/images'
    }
  }
};
