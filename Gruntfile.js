module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            dev: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'browserify'],
                options: {
                    spawn: false,
                },
            },
            devDemo: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'shell:installSpaJquery:command', 'browserify'],
                options: {
                    spawn: false,
                    interrupt: true,
                },
            },
        },
        jshint: {
            all: ['src/**/*.js'],
            options: {
                reporter: require('jshint-stylish', { beep: true })
            }
        },
        browserify: {
            dist: {
                files: {
                    'build/app.js': ['src/**/*.js']
                }
            }
        },
        shell: {
            installSpaJquery: {
                command: function () {
                    return 'npm install ../spa-jquery --dev-save';
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', 'watch:dev');
    grunt.registerTask('devDemo', 'watch:devDemo');
};
