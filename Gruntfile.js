module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/main.css': 'public/stylesheets/main.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'public/stylesheets/main.min.css': [
            'public/stylesheets/main.css', 
            'node_modules/jquery.mmenu/dist/jquery.mmenu.css'
            ]
        }
      }
    },
    concat: {
      dist: {
         files: {
           'public/javascripts/vendor.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/foundation-sites/dist/js/foundation.js',
            'node_modules/jquery.mmenu/dist/jquery.mmenu.js'
            ]
        } 
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/javascripts/script.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['public/stylesheets/**/*.scss'],
      tasks: ['css']
    }
  });

  grunt.registerTask('css', ['sass', 'cssmin']);

};