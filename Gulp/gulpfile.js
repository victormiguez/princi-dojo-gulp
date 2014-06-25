var gulp        = require('gulp'),
	compass     = require('gulp-compass'),
    png         = require('gulp-tinypng'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    changed     = require('gulp-changed'),
    imagemin    = require('gulp-imagemin'),
    w3c         = require('gulp-w3cjs'),
    browserSync = require('browser-sync');


/******************************************************
--- Task para validação do HTML ---
******************************************************/

gulp.task('w3c', function(){
    gulp.src('../Views/*.html')
        .pipe(w3c());
});


/******************************************************
--- Task para compilar o compass ---
******************************************************/

gulp.task('compass', function() {
    gulp.src('../Content/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: '../Content/css',
            sass: '../Content/sass',
        }))
        .pipe(gulp.dest('../Content/css'));
});


/******************************************************
--- Tasks de imagens ---
******************************************************/

gulp.task('jpg', function() {
    return gulp.src('../Content/img/**/*.jpg')
        .pipe(changed('../Content/img/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../Content/img/'));
});
gulp.task('png', function(){
    gulp.src('../Content/img/**/*.png')
        .pipe(changed('../Content/img/'))
        // .pipe(png('1Wha39tUFZGwWqD4c6iRD7BuRK4HCFZS')) Key @princi
        .pipe(png('KvXgW-f3FyK_cR0nSDuAfAHIP3YioKvk')) // Key @gmail
        .pipe(gulp.dest('../Content/img/'));
})


/******************************************************
--- Task para JS ---
--- Primeiro minifca todos os arquivos e depois  ---
--- concatena de acordo com a ordem passada ---
******************************************************/

gulp.task('js', function() {
    gulp.src(['../Scripts/plugins/*.js', '../Scripts/controllers/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('../Scripts/min/'));
    // Atualizar ordem de arquivos, os plugins devem ser referenciados primeiro
    gulp.src(['../Scripts/min/*.js'])
        .pipe(concat('jquery.global.min.js'))
        .pipe(gulp.dest('../Scripts/min/'));
});



/******************************************************
--- Sobe o browserSync e ativa watch ---
******************************************************/

gulp.task('browser-sync', function() {
    browserSync.init(['../Content/css/**', '../Views/*.html'], {
        server: {
            baseDir: '../',
            index: 'index.html'
        }
        // proxy: {
        //     host: "localhost",
        //     port: 
        // }
    });
});

gulp.task('watch', ['compass', 'browser-sync'], function () { 
    gulp.watch('../Content/sass/**/*.scss', ['compass']);
});