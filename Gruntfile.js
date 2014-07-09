module.exports = function(grunt) {

  // Initialize grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Set up our watch task to watch changes in scss and js files
    watch: {
      compass: {
        files: ['**/*.scss'],
        tasks: ['compass:dev'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['**/*.js'],
        tasks: ['uglify']
      }
    },

    // set up compass
    compass: {

      // set up the compass:dev task
      dev: {
        options: {              
          sassDir: ['sass'],
          cssDir: ['dist/css'],
          environment: 'development',
          outputStyle: 'expanded',
          noLineComments: false
        }
      },

      // set up the compass:prod task
      prod: {
        options: {              
          sassDir: ['sass'],
          cssDir: ['dist/css'],
          environment: 'production',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    },

    // set up uglify used for minifying js
    uglify: {
      all: {
        files: {
          'dist/javascripts/min/main.min.js': [
          'dist/javascripts/main.js'
          ]
        }
      }
    }
  });

  // register grunt tasks
  // you will need to install these node modules
  // eg $ npm install grunt-contrib-watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // set up the default tasks ie. $ grunt
  grunt.registerTask('default', ['watch', 'compass:dev']);
  
  // set up production task ie. $ grunt prod
  grunt.registerTask('prod', ['compass:prod']);
};