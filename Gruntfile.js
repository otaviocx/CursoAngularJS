/**
 * Created by Otávio on 18/08/2015.
 */
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        wiredep: {
            target: {
                src: '*.html'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            arquivosweb: {
                files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.css']
            },
            fazer_wiredep: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            less: {
                files: ['app/**/*.less'],
                tasks: ['less']
            }
        },
        copy: {
            indexs: {
                files: [
                    {
                        expand: true,
                        src: ['*.html', 'app/**'],
                        dest: 'build/'
                    }
                ]
            }
        },
        concat: {
            principal: {
                src: ['app/js/app-config.js', 'app/js/bootstrap-controller.js'],
                dest: 'build/js/principal.js'
            }
        },
        clean: {
            app: {
                src: ['build']
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },
        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.css']
                    }
                ]
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.html']
                    }
                ]
            }
        },
        less: {
            build: {
                files: {
                    "app/css/app.css": "app/less/app.less"
                }
            }
        }
    });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin']);
    grunt.registerTask('desenvolvimento', ['watch']);
};