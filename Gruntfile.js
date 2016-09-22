module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'browserify'],
                options: {
                    spawn: false,
                },
            },
        },
        jshint: {
            all: ['src/**/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },
        browserify: {
            dist: {
                files: {
                        'build/app.js': ['src/**/*.js']
                    }
                }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
};
