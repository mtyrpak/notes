var gulp  = require('gulp'),
    gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	sass   = require('gulp-sass'),
	concat   = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	html2js = require('gulp-html2js'),
	protractor = require("gulp-protractor").protractor,
	paths = {
      js: ['source/js/index.js', 'source/js/**/*.js'],
      html: 'source/index.html',
      css: 'source/css/*.css',
	  img: 'source/img/*.*'
    };

gulp.task('default', ['watch']);

gulp.task('build', ['copyHtml', 'copyImages', 'jshint', 'build-css', 'build-js', 'html2js', 'test']);

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src(paths.html).pipe(gulp.dest('public'));
});

gulp.task('copyImages', function() {
  // copy any image files in source/ to public/
  gulp.src(paths.img).pipe(gulp.dest('public/img'));
});

gulp.task('jshint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
      .pipe(concat('notes.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('html2js', function() {
	  gulp.src('source/templates/*.html')
	    .pipe(html2js({
	      outputModuleName: 'notesApp',
	      useStrict: false
	    }))
	    .pipe(concat('templates.js'))
	    .pipe(gulp.dest('public/js'))
	});

gulp.task('test', function() {
	gulp.src(["test/spec.js"])
    .pipe(protractor({
        configFile: "test/conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('error', function(e) { throw e })
});


gulp.task('watch', function() {
  gulp.watch(paths.js, ['jshint', 'build-js']);
  gulp.watch(paths.html, ['copyHtml', 'html2js']);
  gulp.watch(paths.img, ['copyImages']);
  gulp.watch(paths.css, ['build-css']);
});
