var gulp = require('gulp');
var minificar = require('gulp-clean-css');
var concatenar = require('gulp-concat-css');
var cssScss = require('gulp-css-scss');
var htmlmin = require('gulp-minify-html');


//Função que compila, minifica e move os arquivos scss
gulp.task('move-scss', function(){
	return gulp.src('./source/scss/*.scss')
	       .pipe(cssScss())
	       .pipe(minificar())
	       .pipe(gulp.dest('./dist/css'));
});

//Função que minifica e move arquivo index.html
gulp.task('move-html', function(){
	return gulp.src('./source/index.html')
	       .pipe(htmlmin())
	       .pipe(gulp.dest('./dist'));
});

//Função que vigia os arquivos .scss e index.html em busca de alterações
gulp.task('vigia',function(){
	gulp.watch('./source/scss/*.scss', ['move-scss']);
	gulp.watch('./source/index.html', ['move-html']);
});

