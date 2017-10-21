module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
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
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('css', ['sass', 'cssmin']);

};