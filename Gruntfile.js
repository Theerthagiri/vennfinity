module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          development: {
            files: {
              "src/css/stylesheet.css": "src/css/sass/stylesheet.scss"
            }
          },
        },
        concat: {
            css: {
                src: 'src/css/stylesheet.css',
                dest: 'src/css/production.css'
            },
            js: {
                src: [ 'src/js/lib/jquery.min.js',
                     'src/js/lib/bootstrap.js',
                     'src/js/lib/angular.min'
                ],
                dest: 'src/js/jquery.liblary.js'
            }
        },
        cssmin: {
            css: {
                src: 'src/css/production.css',
                dest: 'dest/css/production.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'dest/js/jquery.liblary.js': 'src/js/jquery.liblary.js'
                }
            }
        },
        watch: {
            files: ['src/css/sass/*','src/css/*', 'js/*', 'js/lib/*', 'js/angular/*'],
            tasks: ['sass', 'concat', 'cssmin', 'uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};