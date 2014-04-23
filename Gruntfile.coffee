###
# Normalize template / partial names
#
# Removes dir prefixes and file extensions
#
# @param  {string} name  the file path to normalize
# @return {string} the normalized name
###
processName = (name) ->
  name.replace(/client\/\w*\/templates\//g, '').replace('.hbs', '')

module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    handlebars:
      compile:
        options:
          node: false
          partialRegex: /.*/
          partialsPathRegex: /client\/backend\/templates\/partials\//
          processName: processName
          processPartialName: processName
        files: 
          "./public/js/templates.backend.js": ["client/backend/templates/**/*.hbs"]
          "./public/js/templates.frontend.js": ["client/frontend/templates/**/*.hbs"]

    browserify:
      dev:
        files:
          'public/js/modules.backend.js': ['client/backend/index.coffee']
          'public/js/modules.frontend.js': ['client/frontend/index.coffee']
        options:
          debug: true # Enable source maps, woot!
          transform: ['coffeeify']
    less:
      dev:
        files: [
          {
            expand: true
            cwd: 'client/styles/'
            src: ['index.less']
            dest: './public/styles/'
            ext: '.css'
          }
        ]
    copy:
      dev:
        files: [
          {
            expand: true,
            cwd: './bower_components/bootstrap/dist/js/'
            src: ['**/*']
            dest: './public/js/'
          }
          {
            expand: true,
            cwd: './bower_components/jquery/'
            src: ['jquery.js']
            dest: './public/js/'
          }
        ]
    watch:
      assets:
        #options:
        #  livereload: true
        # Assets to watch:
        files: ['client/**/*']
        # When assets are changed:
        tasks: ['build']

  # Require in the good stuff
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'build', ['handlebars', 'browserify:dev', 'less:dev']

  grunt.registerTask 'dev', ['copy:dev','build', 'watch']
  grunt.registerTask 'default', ['copy:dev','build']