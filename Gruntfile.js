module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json'), 
      clientsSrcPath = 'public/javasclipts/**/*.js',
      defaultTasks = ['jshint'];
  
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', clientsSrcPath]
    },
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'app.js'
        }
      },
      prod: {
        options: {
          script: 'app.js',
          node_env: 'production'
        }
      }
    },
    watch: {
      express: {
        files:  [ '**/**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          nospawn: true
        }
      },
      src: {
        files: ['Gruntfile.js', clientsSrcPath],
        tasks: [ 'default' ]
      }
    }
  });

  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', defaultTasks);
};
