function js() {
  var lib = {
    vendor: [
      'src/lodash.getArguments.js'
    ]
  };
  function get() {
    var arr      = [];
    var defaults = [
      'vendor'
    ];
    var i;
    var n;
    if (arguments.length) {
      defaults = Array.prototype.slice.call(arguments);
    }
    for (i = 0, n = defaults.length; i < n; i++) {
      arr = arr.concat(lib[defaults[i]]);
    }
    return arr;
  }
  get.vendor = get('vendor');
  return get();
}
function shortFile(dir, fileList) {
  var obj = {};
  for (var k in fileList) {
    for (var i = 0, len = fileList[k].length; i < len; i++) {
      obj[dir + fileList[k][i]] = k + fileList[k][i];
    }
  }
  return obj;
}
function extend(from, to) {
  for (var k in to) {
    from[k] = to[k];
  }
  return from;
}
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true,
        mangle: false,
        compress: false
      },
      js: {
        files: {
          'lodash.getArguments.min.js': js()
        }
      }
    },
    watch: {
      src: {
        files: [
          'src/js/*.js',
        ],
        tasks: ['uglify']
      },
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        },
        tasks: ['default']
      }
    },
    jshint: {
      all: js().all
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  /*grunt.registerTask('default', ['concat_sourcemap','sass','autoprefixer','uglify','imagemin','watch']);*/
  grunt.registerTask('default', ['uglify', 'watch']);

};
