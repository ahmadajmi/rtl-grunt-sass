module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/ltr-app.css': 'scss/ltr-app.scss',
          'css/rtl-app.css': 'scss/rtl-app.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
};

