var gulp = require('gulp'),
    $    = require('gulp-load-plugins')()
    ;

gulp.task('less', function() {
    return gulp.src('less/color.less')
        .pipe($.less())
        .pipe(gulp.dest('build'))
        ;
});

gulp.task('css', ['less'], function() {
    var input = [
            'bootstrap/css/bootstrap.css',
            'stylesheets/hiding-nav.css',
            'stylesheets/menu-transition.css',
            'stylesheets/parallax-layers.css',
            'stylesheets/home-06.css',
            'stylesheets/slimmenu.css',
            'stylesheets/venobox.css',
            'stylesheets/main.css',
            'stylesheets/main-responsive.css',
            'stylesheets/main-retina.css',
            'build/color.css',
            'roost/style.css'
        ];

    return gulp.src(input)
        .pipe($.concat('style.css'))
        .pipe($.minifyCss())
        .pipe(gulp.dest('build'))
        ;
});

gulp.task('js', function () {
    var input = [
        'bootstrap/js/jquery.js',
        'javascripts/imagesloaded.pkgd.min.js',
        'javascripts/jquery.easing.1.3.js',
        'bootstrap/js/bootstrap.js',
        'javascripts/device.min.js',
        'javascripts/modernizr.js',
        'javascripts/retina.js',
        'javascripts/responsive-nav.js',
        'javascripts/navi-slidedown.js',
        'javascripts/equalheights.js',
        'javascripts/venobox.min.js',
        'javascripts/venobox-init.js',
        'javascripts/equalheights-init.js',
        'javascripts/main.js',
        'roost/members.js',
        'roost/ejs.min.js',
        'roost/main.js',
    ];
    var output = 'build';

    return gulp.src(input)
        .pipe($.concat('main.js', {newLine: ';'}))
        .pipe(gulp.dest(output))
        ;
});

gulp.task('watch', function () {
    gulp.watch(['javascripts/*.js', 'roost/*.js'], ['js']);
    gulp.watch(['stylesheets/*.css', 'roost/*.css'], ['css']);
});

gulp.task('default', ['less', 'css', 'js']);