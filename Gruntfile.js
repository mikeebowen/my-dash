'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  //initialize grunt
  grunt.initConfig({

    // create jshint task
    jshint: {
      dev: {
        // tell jshint what check
        src: ['Gruntfile.js', 'methods/**/*.js'],
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true,
            res: true
          }
        }
      },

      mocha: {
        // tell mocha where test files are
        src: ['test/all_test.js'],
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true,
            res: true,
            expect: true
          }
        }
      },
      // create jscs task
      jscs: {
        dev: {
          // tell jscs to test the same files as jshint
          src: ['<%= jshint.dev.src %>', '<%= jshint.mocha.src %>']
        }
      }
    },

    //create simplemocha task
    simplemocha: {
      dev: {
        //tell simple mocha where the test files are
        src: ['test/**/*.js']
      }
    }

  });
  // register linting task
  grunt.registerTask('lint', ['jshint:dev', 'jshint:mocha', 'jshint:jasmine']);
  // register mocha test task
  grunt.registerTask('test', ['simplemocha:dev']);
  // register default task
  grunt.registerTask('default', ['test']);

};
