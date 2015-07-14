'use strict';

 module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  //initialize grunt
  grunt.initConfig({
    //create jshint task
    jshint: {
      dev: {
        //tell jshint what to check
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
      //tell mocha where test files are
      mocha: {
        src: ['test/**/*.js'],
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
      //create mocha task
      mocha: {
        src: ['test/**/*.js'],
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
      },
      simplemocha: {
        dev: {
          src: ['test/**/*.js']
        }
      },
      // create jscs task
      jscs: {
        dev: {
          // tell jscs to test the same files as jshint
          src: ['<%= jshint.dev.src %>', '<%= jshint.mocha.src %>']
        }
      }
    }
  });
  //register linting task
  grunt.registerTask('lint', ['jshint:dev', 'jshint:mocha']);
  grunt.registerTask('test', ['simplemocha:dev']);
};
