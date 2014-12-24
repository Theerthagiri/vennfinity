module.exports = function (grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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

         // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
          all: {
            options:{
              port: "9000",
              hostname: "localhost",
              // No need for keepalive anymore as watch will keep Grunt running
              //keepalive: true,
     
              // Livereload needs connect to insert a cJavascript snippet
              // in the pages it serves. This requires using a custom connect middleware
              middleware: function(connect, options) {
     
                return [
     
                  // Load the middleware provided by the livereload plugin
                  // that will take care of inserting the snippet
                  require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
     
                  // Serve the project folder
                  connect.static(options.base)
                ];
              }
            }
          }
        },
     
        // grunt-open will open your browser at the project's URL
        open: {
          all: {
            // Gets the port from the connect configuration
            path: 'http://localhost/vennfinity/template.html'
          }
        },
     
        // grunt-regarde monitors the files and triggers livereload
        // Surprisingly, livereload complains when you try to use grunt-contrib-watch instead of grunt-regarde 
        regarde: {
          all: {
            // This'll just watch the index.html file, you could add **/*.js or **/*.css
            // to watch Javascript and CSS files too.
            files:['template.html', 'src/css/sass/*', 'src/css/*', 'js/*', 'js/lib/*', 'js/angular/*'],
            // This configures the task that will run when the file change
            tasks: ['livereload', 'sass', 'concat', 'cssmin', 'uglify']
          }
        }

        /*watch: {
            files: ['src/css/sass/*','src/css/*', 'js/*', 'js/lib/*', 'js/angular/*'],
            tasks: ['sass', 'concat', 'cssmin', 'uglify']
        }*/
    });
    
    /*grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');*/

    // Creates the `server` task
    grunt.registerTask('server',[

        // Starts the livereload server to which the browser will connect to
        // get notified of when it needs to reload
        // 'livereload-start',
        'connect',
        // Connect is no longer blocking other tasks, so it makes more sense to open the browser after the server starts
        'open',
        // Starts monitoring the folders and keep Grunt alive
        'regarde',
        'sass', 
        'concat:css', 
        'cssmin:css', 
        'concat:js', 
        'uglify:js'
    ]);
};